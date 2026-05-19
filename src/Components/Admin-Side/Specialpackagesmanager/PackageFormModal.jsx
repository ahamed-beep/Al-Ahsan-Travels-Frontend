"use client";

import { useState, useEffect, useRef } from "react";
import { CATEGORIES, BADGES, STARS } from "./contants";
import {
  API_SPECIAL_PACKAGES,
  API_SPECIAL_PACKAGE_BY_ID,
} from "@/constants/api";
import { X, Plus, Upload, Image as ImageIcon } from "lucide-react";
import ViewModal from "@/Components/Client-Side/ui/ViewModal";
import axiosInstance from "@/lib/axios";

const EMPTY_FORM = {
  title: "",
  category: "",
  stars: "",
  nights: "",
  price: "",
  originalPrice: "",
  discount: "",
  badge: "",
  hotelMakkah: "",
  hotelMadinah: "",
  features: [],
  isPopular: false,
  isActive: true,
};

function toFormState(pkg) {
  return {
    title:         pkg.title ?? "",
    category:      pkg.category ?? "",
    stars:         pkg.stars ?? "",
    nights:        pkg.nights ?? "",
    price:         pkg.price ?? "",
    originalPrice: pkg.originalPrice ?? "",
    discount:      pkg.discount ?? "",
    badge:         pkg.badge ?? "",
    hotelMakkah:   pkg.hotels?.makkah ?? "",
    hotelMadinah:  pkg.hotels?.madinah ?? "",
    features:      pkg.features ?? [],
    isPopular:     pkg.isPopular ?? false,
    isActive:      pkg.isActive ?? true,
  };
}

export default function PackageFormModal({ editId, onClose, onSuccess }) {
  const isEdit = Boolean(editId);

  const [form, setForm]           = useState(EMPTY_FORM);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [existingImage, setExistingImage] = useState("");

  const [featureInput, setFeatureInput] = useState("");
  const featureRef = useRef(null);

  const [loading, setLoading]   = useState(false);
  const [fetching, setFetching] = useState(isEdit);

  useEffect(() => {
    if (!isEdit) return;
    (async () => {
      try {
        const { data } = await axiosInstance.get(API_SPECIAL_PACKAGE_BY_ID(editId));
        const state = toFormState(data.data);
        setForm(state);
        if (data.data.image) setExistingImage(data.data.image);
      } catch (e) {
        console.error('FETCH ERROR:', e);
      } finally {
        setFetching(false);
      }
    })();
  }, [editId]);

  const set = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  const addFeature = () => {
    const val = featureInput.trim();
    if (!val) return;
    if (form.features.includes(val)) {
      setFeatureInput("");
      return;
    }
    set("features", [...form.features, val]);
    setFeatureInput("");
    featureRef.current?.focus();
  };

  const removeFeature = (idx) => {
    set("features", form.features.filter((_, i) => i !== idx));
  };

  const handleFeatureKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addFeature();
    } else if (e.key === "Backspace" && featureInput === "" && form.features.length > 0) {
      removeFeature(form.features.length - 1);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0] ?? null;
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

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("title",    form.title.trim());
      fd.append("category", form.category);
      fd.append("stars",    form.stars);
      fd.append("nights",   form.nights);
      fd.append("price",    form.price.trim());

      if (form.originalPrice) fd.append("originalPrice", form.originalPrice.trim());
      if (form.discount)      fd.append("discount",      form.discount.trim());
      if (form.badge)         fd.append("badge",         form.badge);

      fd.append("hotels[makkah]", form.hotelMakkah.trim());
      fd.append("hotels[madinah]", form.hotelMadinah.trim());

      form.features.forEach((f) => fd.append("features", f));

      if (imageFile) {
        fd.append("image", imageFile);
      }

      fd.append("isPopular", form.isPopular ? "true" : "false");
      fd.append("isActive", form.isActive ? "true" : "false");
      
      if (isEdit) {
        await axiosInstance.patch(API_SPECIAL_PACKAGE_BY_ID(editId), fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axiosInstance.post(API_SPECIAL_PACKAGES, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      onSuccess();
      onClose();
    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      setLoading(false);
    }
  };

  const previewSrc = imagePreview || existingImage;

  return (
    <ViewModal title={isEdit ? "Edit Package" : "Add Package"} onClose={onClose}>
      {fetching ? (
        <div className="flex items-center justify-center py-16">
          <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-blue-600" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="block text-xs text-gray-400 mb-1">Title *</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Category *</label>
              <select
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={form.category}
                onChange={(e) => set("category", e.target.value)}
              >
                <option value="">Select</option>
                {Object.entries(CATEGORIES).map(([v, l]) => (
                  <option key={v} value={v}>{l}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Stars *</label>
              <select
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={form.stars}
                onChange={(e) => set("stars", e.target.value)}
              >
                <option value="">Select</option>
                {STARS.map((s) => (
                  <option key={s} value={s}>{s} Stars</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Nights *</label>
              <input
                type="number"
                min={1}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={form.nights}
                onChange={(e) => set("nights", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Price *</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="e.g. £1299"
                value={form.price}
                onChange={(e) => set("price", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Original Price</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="e.g. £1499"
                value={form.originalPrice}
                onChange={(e) => set("originalPrice", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Discount</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="e.g. 15%"
                value={form.discount}
                onChange={(e) => set("discount", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Badge</label>
              <select
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={form.badge}
                onChange={(e) => set("badge", e.target.value)}
              >
                <option value="">No Badge</option>
                {BADGES.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Hotel Makkah *</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={form.hotelMakkah}
                onChange={(e) => set("hotelMakkah", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Hotel Madinah *</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={form.hotelMadinah}
                onChange={(e) => set("hotelMadinah", e.target.value)}
              />
            </div>

            <div className="col-span-2">
              <label className="block text-xs text-gray-400 mb-1">
                Features
                <span className="text-gray-300 ml-1">(Press Enter to add)</span>
              </label>
              <div
                className="min-h-[42px] w-full border border-gray-200 rounded-lg px-2 py-1.5 flex flex-wrap gap-1.5 focus-within:ring-2 focus-within:ring-blue-100 cursor-text"
                onClick={() => featureRef.current?.focus()}
              >
                {form.features.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-medium"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); removeFeature(i); }}
                      className="hover:text-blue-900 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                <input
                  ref={featureRef}
                  className="flex-1 min-w-[120px] text-sm outline-none bg-transparent py-0.5 px-1"
                  placeholder={form.features.length === 0 ? "e.g. Visa, Flights, Hotel..." : ""}
                  value={featureInput}
                  onChange={(e) => setFeatureInput(e.target.value)}
                  onKeyDown={handleFeatureKeyDown}
                />
                {featureInput.trim() && (
                  <button
                    type="button"
                    onClick={addFeature}
                    className="p-1 rounded hover:bg-blue-100 text-blue-500 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              {form.features.length > 0 && (
                <p className="text-xs text-gray-300 mt-1">{form.features.length} feature(s) added</p>
              )}
            </div>

            <div className="col-span-2">
              <label className="block text-xs text-gray-400 mb-1">Package Image</label>
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
                  <ImageIcon className="w-8 h-8 text-gray-300 group-hover:text-blue-400 mb-2 transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-blue-500 transition-colors">
                    Click to upload image
                  </span>
                  <span className="text-xs text-gray-300 mt-1">PNG, JPG, WEBP</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              )}
            </div>

           
          </div>

          <div className="flex justify-end gap-2 mt-5 pt-4 border-t border-gray-100">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Saving..." : isEdit ? "Update" : "Create"}
            </button>
          </div>
        </>
      )}
    </ViewModal>
  );
}