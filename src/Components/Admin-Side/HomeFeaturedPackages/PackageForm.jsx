"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { API_PACKAGES, API_PACKAGE_BY_ID } from "@/constants/api";

const DEFAULT = {
  title: "", price: "", currency: "", durationDays: "",
  durationNights: "", perPersonText: "per person",
  tags: [], image: null,
};

export default function PackageForm({ editData, onClose, onSuccess }) {
  const [form, setForm]       = useState(DEFAULT);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    if (editData) {
      setForm({
        ...editData,
        tags: editData.tags || [],
        image: null,
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm((p) => ({ ...p, image: files[0] }));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
    setError("");
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const val = tagInput.trim().replace(/,$/, "");
      if (val && !form.tags.includes(val)) {
        setForm((p) => ({ ...p, tags: [...p.tags, val] }));
      }
      setTagInput("");
    }
  };

  const removeTag = (tag) => {
    setForm((p) => ({ ...p, tags: p.tags.filter((t) => t !== tag) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("title",          form.title);
      formData.append("price",          form.price);
      formData.append("currency",       form.currency);
      formData.append("durationDays",   form.durationDays);
      formData.append("durationNights", form.durationNights);
      formData.append("perPersonText",  form.perPersonText);
      formData.append("tags", form.tags.join(","));
      if (form.image) formData.append("image", form.image);

      if (editData) {
        await axiosInstance.patch(API_PACKAGE_BY_ID(editData.id), formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axiosInstance.post(API_PACKAGES, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      onSuccess();
    } catch (err) {
    setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col">

        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-800">
            {editData ? "Edit Package" : "Add New Package"}
          </h2>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="overflow-y-auto px-6 py-4 space-y-4">

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <Field label="Title" name="title" value={form.title} onChange={handleChange} required />

          <div className="grid grid-cols-2 gap-3">
            <Field label="Price" name="price" type="number" value={form.price} onChange={handleChange} required />
            <Field label="Currency (e.g. GBP, USD)" name="currency" value={form.currency} onChange={handleChange} placeholder="GBP" required />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Duration Days"   name="durationDays"   type="number" value={form.durationDays}   onChange={handleChange} required />
            <Field label="Duration Nights" name="durationNights" type="number" value={form.durationNights} onChange={handleChange} required />
          </div>

          <Field label="Per Person Text" name="perPersonText" value={form.perPersonText} onChange={handleChange} />

          <div>
            <label className="text-sm font-medium text-gray-700">Tags</label>
            <div className="mt-1 min-h-[42px] w-full px-3 py-2 border border-gray-300 rounded-lg flex flex-wrap gap-2 focus-within:ring-2 focus-within:ring-blue-500">
              {form.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="hover:text-red-500"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
            placeholder={form.tags.length === 0 ? "Type and press Enter" : ""}
                className="flex-1 min-w-[100px] text-sm outline-none bg-transparent"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">Press Enter or comma to add a tag</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Image</label>
            <input
              type="file" name="image" accept="image/*" onChange={handleChange}
              className="mt-1 w-full text-sm text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-600 file:text-sm"
            />
            {editData?.imageUrl && !form.image && (
              <img src={editData.imageUrl} alt="current" className="mt-2 h-20 rounded-lg object-cover" />
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button" onClick={onClose}
              className="flex-1 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit" disabled={loading}
              className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Saving..." : editData ? "Update" : "Add Package"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", value, onChange, required, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        required={required} placeholder={placeholder}
        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}