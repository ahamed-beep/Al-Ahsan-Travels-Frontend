"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { FaPassport, FaBus, FaUtensils, FaUser } from "react-icons/fa";
import axiosInstance from "@/lib/axios";
import { API_SHIFTING_HAJJ, API_SHIFTING_HAJJ_BY_ID } from "@/constants/api";

// ── Enum — backend se match karta hai ─────────────────────────
const AVAILABLE_TAGS = [
  { label: "Visa",      value: "Visa",      icon: <FaPassport size={12} /> },
  { label: "Transport", value: "Transport",  icon: <FaBus size={12} /> },
  { label: "Meals",     value: "Meals",      icon: <FaUtensils size={12} /> },
  { label: "Guide",     value: "Guide",      icon: <FaUser size={12} /> },
];

const DEFAULT = {
  title: "", price: "", currency: "GBP", durationDays: "", durationNights: "",
  perPersonText: "per person", tags: [], locations: [], image: null,
};

export default function ShiftingHajjForm({ editData, onClose, onSuccess }) {
  const [form, setForm]       = useState(DEFAULT);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const [locInput, setLocInput] = useState("");

  useEffect(() => {
    if (editData) {
      setForm({
        ...DEFAULT,
        ...editData,
        tags:      editData.tags      || [],
        locations: editData.locations || [],
        image: null,
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((p) => ({ ...p, [name]: files ? files[0] : value }));
    setError("");
  };

  // ── Tag toggle (enum buttons) ─────────────────────────────
  const toggleTag = (value) => {
    setForm((p) => ({
      ...p,
      tags: p.tags.includes(value)
        ? p.tags.filter((t) => t !== value)
        : [...p.tags, value],
    }));
  };

  // ── Location helpers ──────────────────────────────────────
  const addLoc = () => {
    const val = locInput.trim();
    if (val && !form.locations.includes(val))
      setForm((p) => ({ ...p, locations: [...p.locations, val] }));
    setLocInput("");
  };
  const removeLoc = (l) =>
    setForm((p) => ({ ...p, locations: p.locations.filter((x) => x !== l) }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editData && !form.image) { setError("Image upload is required"); return; }

    setLoading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("title",          form.title);
      fd.append("price",          String(form.price));
      fd.append("currency",       form.currency || "GBP");
      fd.append("durationDays",   String(form.durationDays));
      fd.append("durationNights", String(form.durationNights));
      fd.append("perPersonText",  form.perPersonText || "per person");
      if (form.tags.length)      fd.append("tags",      form.tags.join(","));
      if (form.locations.length) fd.append("locations", form.locations.join(","));
      if (form.image)            fd.append("image", form.image);

      const headers = { "Content-Type": "multipart/form-data" };
      if (editData) {
        await axiosInstance.patch(API_SHIFTING_HAJJ_BY_ID(editData.id ?? editData._id), fd, { headers });
      } else {
        await axiosInstance.post(API_SHIFTING_HAJJ, fd, { headers });
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

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-800">
          {editData ? "Edit Package" : "New Shifting Hajj Package"}
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
            <Field label="Currency" name="currency" value={form.currency} onChange={handleChange} placeholder="GBP" required />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Duration Days"   name="durationDays"   type="number" value={form.durationDays}   onChange={handleChange} required />
            <Field label="Duration Nights" name="durationNights" type="number" value={form.durationNights} onChange={handleChange} required />
          </div>

          <Field label="Per Person Text" name="perPersonText" value={form.perPersonText} onChange={handleChange} />

          {/* Locations */}
          <div>
            <label className="text-sm font-medium text-gray-700">Hotels / Locations</label>
            <div className="mt-1 min-h-[42px] w-full px-3 py-2 border border-gray-300 rounded-lg flex flex-wrap gap-2 focus-within:ring-2 focus-within:ring-blue-500">
              {form.locations.map((loc) => (
                <span key={loc} className="flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">
                  {loc}
                  <button type="button" onClick={() => removeLoc(loc)} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <input
                type="text" value={locInput}
                onChange={(e) => setLocInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === ",") { e.preventDefault(); addLoc(); } }}
                placeholder={form.locations.length === 0 ? "e.g. Swissotel Makkah" : ""}
                className="flex-1 min-w-[140px] text-sm outline-none bg-transparent"
              />
            </div>
          <p className="text-xs text-gray-400 mt-1">Press Enter or comma to add</p>
          </div>

          {/* ── Tags — enum toggle buttons ── */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Tags (Includes)
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {AVAILABLE_TAGS.map(({ label, value, icon }) => {
                const selected = form.tags.includes(value);
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => toggleTag(value)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      selected
                        ? "bg-[#1C398E] text-white border-[#1C398E]"
                        : "bg-white text-gray-600 border-gray-300 hover:border-[#1C398E] hover:text-[#1C398E]"
                    }`}
                  >
                    {icon} {label}
                  </button>
                );
              })}
            </div>
            {form.tags.length === 0 && (
           <p className="text-xs text-gray-400 mt-1">No tags selected</p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Image {!editData && <span className="text-red-500">*</span>}
            </label>
            <input
              type="file" name="image" accept="image/*" onChange={handleChange}
              className="mt-1 w-full text-sm text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-600 file:text-sm"
            />
            {editData?.imageUrl && !form.image && (
              <img src={editData.imageUrl} alt="current" className="mt-2 h-20 rounded-lg object-cover" />
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button" onClick={onClose}
              className="flex-1 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit" disabled={loading}
              className="flex-1 py-2 rounded-lg bg-[#1C398E] text-white text-sm font-medium hover:bg-[#162d70] disabled:opacity-50"
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