"use client";

import { useState, useEffect } from "react";
import {
  API_FLIGHT_DEALS,
  API_FLIGHT_DEAL_BY_ID,
} from "@/constants/api";
import { X, Upload, Image as ImageIcon, Plane } from "lucide-react";
import ViewModal from "@/Components/Client-Side/ui/ViewModal";
import axiosInstance from "@/lib/axios";

const EMPTY_FORM = {
  airline: "",
  from: "",
  to: "",
  duration: "",
  price: "",
  badge: "",
  isPopular: false,
  isActive: true,
};

function toFormState(deal) {
  return {
    airline: deal.airline ?? "",
    from: deal.from ?? "",
    to: deal.to ?? "",
    duration: deal.duration ?? "",
    price: deal.price ?? "",
    badge: deal.badge ?? "",
    isPopular: deal.isPopular ?? false,
    isActive: deal.isActive ?? true,
  };
}

export default function FlightDealFormModal({ editId, onClose, onSuccess }) {
  const isEdit = Boolean(editId);

  const [form, setForm] = useState(EMPTY_FORM);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [existingImage, setExistingImage] = useState("");

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);

  useEffect(() => {
    if (!isEdit) return;
    (async () => {
      try {
        const { data } = await axiosInstance.get(API_FLIGHT_DEAL_BY_ID(editId));
        const state = toFormState(data.data);
        setForm(state);
        if (data.data.image) setExistingImage(data.data.image);
      } catch (e) {
        console.error('Fetch error:', e);
      } finally {
        setFetching(false);
      }
    })();
  }, [editId]);

  const set = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  const handleImageChange = (e) => {
    const file = e.target.files[0] ?? null;
    console.log("Selected file:", file); // Debug log
    setImageFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    } else {
      setImagePreview(null);
    }
  };

  const clearImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setExistingImage("");
  };

 // FlightDealFormModal.jsx - handleSubmit function

const handleSubmit = async () => {
  if (!isEdit && !imageFile) {
    alert("Please select an image for the flight deal");
    return;
  }

  setLoading(true);
  try {
    const fd = new FormData();
    fd.append("airline", form.airline.trim());
    fd.append("from", form.from.trim());
    fd.append("to", form.to.trim());
    fd.append("duration", form.duration.trim());
    fd.append("price", form.price.trim());
    if (form.badge) fd.append("badge", form.badge.trim());
    
    // ✅ ONLY append file, NOT as "image" string field
    if (imageFile) {
      fd.append("image", imageFile);  // This is correct - file upload
    } else if (isEdit && existingImage) {
      // For edit, we don't need to send image if not changed
      // Backend will keep existing image
      console.log("Keeping existing image");
    }
    
    fd.append("isPopular", form.isPopular ? "true" : "false");
    fd.append("isActive", form.isActive ? "true" : "false");

    // Debug: Check FormData
    for (let pair of fd.entries()) {
      console.log(pair[0], pair[1] instanceof File ? `File: ${pair[1].name}` : pair[1]);
    }

    if (isEdit) {
      await axiosInstance.patch(API_FLIGHT_DEAL_BY_ID(editId), fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } else {
      await axiosInstance.post(API_FLIGHT_DEALS, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }

    onSuccess();
    onClose();
  } catch (error) {
    console.error('Submit error:', error);
    console.error('Error response:', error.response?.data);
    alert(error.response?.data?.message || "Error saving flight deal");
  } finally {
    setLoading(false);
  }
};
  const previewSrc = imagePreview || existingImage;
  const badgeOptions = ["Direct", "1 Stop", "1 Stop (Istanbul)", "2 Stops", "Connecting"];

  return (
    <ViewModal title={isEdit ? "Edit Flight Deal" : "Add Flight Deal"} onClose={onClose}>
      {fetching ? (
        <div className="flex items-center justify-center py-16">
          <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-blue-600" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3">
            {/* Airline */}
            <div className="col-span-2">
              <label className="block text-xs text-gray-400 mb-1">Airline *</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="e.g. Egypt Air, Turkish Airlines"
                value={form.airline}
                onChange={(e) => set("airline", e.target.value)}
                required
              />
            </div>

            {/* From */}
            <div>
              <label className="block text-xs text-gray-400 mb-1">Departure City *</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="e.g. London, Manchester"
                value={form.from}
                onChange={(e) => set("from", e.target.value)}
                required
              />
            </div>

            {/* To */}
            <div>
              <label className="block text-xs text-gray-400 mb-1">Arrival City *</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="e.g. Jeddah, Riyadh"
                value={form.to}
                onChange={(e) => set("to", e.target.value)}
                required
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-xs text-gray-400 mb-1">Duration *</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="e.g. 6h 30m"
                value={form.duration}
                onChange={(e) => set("duration", e.target.value)}
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-xs text-gray-400 mb-1">Price *</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="e.g. £500"
                value={form.price}
                onChange={(e) => set("price", e.target.value)}
                required
              />
            </div>

            {/* Badge */}
            <div>
              <label className="block text-xs text-gray-400 mb-1">Badge</label>
              <select
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={form.badge}
                onChange={(e) => set("badge", e.target.value)}
              >
                <option value="">No Badge</option>
                {badgeOptions.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Image Upload - Required */}
            <div className="col-span-2">
              <label className="block text-xs text-gray-400 mb-1">
                Flight Image * {!isEdit && !imagePreview && <span className="text-red-500">(Required)</span>}
              </label>
              {previewSrc ? (
                <div className="relative w-full h-40 rounded-lg overflow-hidden border border-gray-200 group">
                  <img
                    src={previewSrc}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <label className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 bg-white/90 text-gray-700 text-xs font-medium rounded-lg hover:bg-white transition-colors">
                      <Upload className="w-3.5 h-3.5" />
                      Change
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>
                    <button
                      type="button"
                      onClick={clearImage}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/90 text-white text-xs font-medium rounded-lg hover:bg-red-500 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 hover:bg-blue-50/30 transition-colors group">
                  <Plane className="w-8 h-8 text-gray-300 group-hover:text-blue-400 mb-2 transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-blue-500 transition-colors">
                    Click to upload flight image
                  </span>
                  <span className="text-xs text-gray-300 mt-1">PNG, JPG, WEBP (Required)</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                    required={!isEdit}
                  />
                </label>
              )}
            </div>

            {/* Checkboxes */}
            <div className="col-span-2 flex items-center gap-6 pt-1">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={form.isPopular}
                  onChange={(e) => set("isPopular", e.target.checked)}
                  className="rounded"
                />
                Is Popular
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(e) => set("isActive", e.target.checked)}
                  className="rounded"
                />
                Is Active
              </label>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-2 mt-5 pt-4 border-t border-gray-100">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading || (!isEdit && !imageFile)}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Saving..." : isEdit ? "Update" : "Create"}
            </button>
          </div>
        </>
      )}
    </ViewModal>
  );
}