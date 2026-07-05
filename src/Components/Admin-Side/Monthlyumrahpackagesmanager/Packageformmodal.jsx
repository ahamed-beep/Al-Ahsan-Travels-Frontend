"use client";

import { useState, useRef } from "react";
import { Plus, ToggleLeft, ToggleRight, X, Upload } from "lucide-react";
import axiosInstance from "@/lib/axios";

const MONTHS = ["january","february","march","april","may","june","july","august","september","october","november","december"];
const STAR_CATEGORIES = [3, 4, 5];
const DEFAULT_FEATURES = ["Flights", "Visa", "Transport", "Hotels"];
const emptyPackageItem = { title: "", price: "", duration: "", makkahHotel: "", madinahHotel: "", isActive: true };

export default function PackageFormModal({ initial, onClose, onSaved }) {
  const isEdit = !!initial;

  const [form, setForm] = useState(() => {
    if (initial) {
      return {
        month: initial.month,
        starCategory: initial.starCategory,
        sectionTitle: initial.sectionTitle,
        sectionSubtitle: initial.sectionSubtitle,
        isActive: initial.isActive,
        features: initial.features || [...DEFAULT_FEATURES],
        packages: initial.packages?.map((p) => ({ ...p })) || [{ ...emptyPackageItem }],
      };
    }
    return {
      month: "january",
      starCategory: 3,
      sectionTitle: "",
      sectionSubtitle: "",
      isActive: true,
      features: [...DEFAULT_FEATURES],
      packages: [{ ...emptyPackageItem }, { ...emptyPackageItem }, { ...emptyPackageItem }],
    };
  });

  const [images, setImages] = useState(
    () => initial?.packages?.map(() => null) || [null, null, null]
  );
  const [previews, setPreviews] = useState(
    () => initial?.packages?.map((p) => p.image || null) || [null, null, null]
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const fileRefs = useRef([]);

  function setField(key, val) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function setPkgField(index, key, val) {
    setForm((f) => {
      const pkgs = [...f.packages];
      pkgs[index] = { ...pkgs[index], [key]: val };
      return { ...f, packages: pkgs };
    });
  }

  function handleImageChange(index, file) {
    if (!file) return;
    const updated = [...images];
    updated[index] = file;
    setImages(updated);
    const prev = [...previews];
    prev[index] = URL.createObjectURL(file);
    setPreviews(prev);
  }

  function removeImage(index) {
    const p = [...previews]; p[index] = null; setPreviews(p);
    const im = [...images]; im[index] = null; setImages(im);
  }

  function addPackageOption() {
    setForm((f) => ({ ...f, packages: [...f.packages, { ...emptyPackageItem }] }));
    setImages((prev) => [...prev, null]);
    setPreviews((prev) => [...prev, null]);
  }

  function removePackageOption(index) {
    setForm((f) => ({ ...f, packages: f.packages.filter((_, idx) => idx !== index) }));
    setImages((prev) => prev.filter((_, idx) => idx !== index));
    setPreviews((prev) => prev.filter((_, idx) => idx !== index));
    fileRefs.current.splice(index, 1);
  }

  async function handleSubmit() {
    setError("");
    if (!form.sectionTitle.trim()) return setError("Section title required");
    if (form.packages.length === 0) return setError("At least one package option is required");
    if (form.packages.some((p) => !p.title || !p.price || !p.duration || !p.makkahHotel || !p.madinahHotel))
      return setError("Please fill all package fields");

    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("month", form.month);
      fd.append("starCategory", String(form.starCategory));
      fd.append("sectionTitle", form.sectionTitle);
      fd.append("sectionSubtitle", form.sectionSubtitle);
      fd.append("isActive", String(form.isActive));
      form.features.forEach((f, i) => fd.append(`features[${i}]`, f));
      form.packages.forEach((pkg, i) => {
        fd.append(`packages[${i}][title]`, pkg.title);
        fd.append(`packages[${i}][price]`, pkg.price);
        fd.append(`packages[${i}][duration]`, pkg.duration);
        fd.append(`packages[${i}][makkahHotel]`, pkg.makkahHotel);
        fd.append(`packages[${i}][madinahHotel]`, pkg.madinahHotel);
        fd.append(`packages[${i}][isActive]`, String(pkg.isActive ?? true));
      });
      images.forEach((img) => { if (img) fd.append("images", img); });

      if (isEdit) {
        await axiosInstance.patch(`/monthly-umrah-packages/${initial.id || initial._id}`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axiosInstance.post("/monthly-umrah-packages", fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      onSaved();
      onClose();
    } catch (e) {
     setError(e?.response?.data?.message || "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl flex flex-col" style={{ maxHeight: "90vh" }}>

        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
          <h2 className="font-semibold text-gray-800">{isEdit ? "Update Package" : "Add New Package"}</h2>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X className="w-5 h-5 text-gray-500" /></button>
        </div>

        <div className="overflow-y-auto px-6 py-5 space-y-5 flex-1">

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">Month</label>
              <select value={form.month} onChange={(e) => setField("month", e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm capitalize">
                {MONTHS.map((m) => <option key={m} value={m} className="capitalize">{m}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">Star Category</label>
              <select value={form.starCategory} onChange={(e) => setField("starCategory", Number(e.target.value))} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
                {STAR_CATEGORIES.map((s) => <option key={s} value={s}>{s}-Star</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">Section Title</label>
              <input value={form.sectionTitle} onChange={(e) => setField("sectionTitle", e.target.value)} placeholder="e.g. 3-Star Economy January Umrah Packages" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">Section Subtitle</label>
              <input value={form.sectionSubtitle} onChange={(e) => setField("sectionSubtitle", e.target.value)} placeholder="e.g. Affordable packages" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-gray-500 mb-2 block">Features</label>
            <div className="flex flex-wrap gap-2">
              {["Flights", "Visa", "Transport", "Hotels", "Guide"].map((f) => (
                <button key={f} type="button"
                  onClick={() => { const has = form.features.includes(f); setField("features", has ? form.features.filter((x) => x !== f) : [...form.features, f]); }}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition ${form.features.includes(f) ? "bg-blue-600 text-white border-blue-600" : "border-gray-200 text-gray-500 hover:border-blue-300"}`}
                >{f}</button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-gray-500 mb-3 block">Package Options</label>
            <div className="space-y-4">
              {form.packages.map((pkg, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4 space-y-3">

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Option {i + 1}</span>
                    {form.packages.length > 1 && (
                      <button onClick={() => removePackageOption(i)} className="text-xs text-red-400 hover:text-red-600">Remove</button>
                    )}
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Image (Option {i + 1})</label>
                    <input
                      ref={(el) => (fileRefs.current[i] = el)}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageChange(i, e.target.files[0])}
                    />
                    {previews[i] ? (
                      <div className="relative w-full h-20 rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
                        onClick={() => fileRefs.current[i]?.click()}
                      >
                        <img src={previews[i]} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                          <span className="text-white text-xs font-medium">Click to change image</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); removeImage(i); }}
                          className="absolute top-1 right-1 bg-red-500 rounded-full p-1 shadow hover:bg-red-600 z-10"
                        >
                          <X className="w-3 h-3 text-white" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => fileRefs.current[i]?.click()}
                        className="w-full h-16 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center gap-2 hover:border-blue-300 text-gray-400 hover:text-blue-400 transition"
                      >
                        <Upload className="w-4 h-4" />
                 <span className="text-xs">Upload image for Option {i + 1}</span>
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">Title</label>
                      <input value={pkg.title} onChange={(e) => setPkgField(i, "title", e.target.value)} placeholder="3-Star Economy 7 Nights" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">Price</label>
                      <input value={pkg.price} onChange={(e) => setPkgField(i, "price", e.target.value)} placeholder="£699" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">Duration</label>
                      <input value={pkg.duration} onChange={(e) => setPkgField(i, "duration", e.target.value)} placeholder="7 Days / 6 Nights" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">Makkah Hotel</label>
                      <input value={pkg.makkahHotel} onChange={(e) => setPkgField(i, "makkahHotel", e.target.value)} placeholder="Al Safwah Royal Orchid" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <div className="col-span-2">
                      <label className="text-xs text-gray-400 mb-1 block">Madinah Hotel</label>
                      <input value={pkg.madinahHotel} onChange={(e) => setPkgField(i, "madinahHotel", e.target.value)} placeholder="Al Ansar Golden" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={addPackageOption} className="mt-3 text-sm text-blue-500 hover:text-blue-700 flex items-center gap-1">
            <Plus className="w-4 h-4" /> Add package option
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-xs font-medium text-gray-500">Status</label>
            <button onClick={() => setField("isActive", !form.isActive)} className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition ${form.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
              {form.isActive ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
              {form.isActive ? "Active" : "Inactive"}
            </button>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>

        <div className="flex gap-3 px-6 py-4 border-t border-gray-200 shrink-0">
          <button onClick={onClose} className="flex-1 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">Cancel</button>
          <button onClick={handleSubmit} disabled={saving} className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50">
      {saving ? "Saving..." : isEdit ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}