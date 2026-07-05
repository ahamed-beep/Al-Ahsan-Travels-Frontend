"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Pencil, Trash2, Eye, RefreshCw, X, Upload, ImageIcon } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { API_UMRAH_PACKAGE_BY_ID, API_UMRAH_PACKAGES } from "@/constants/api";
import DeleteModal from "@/Components/Client-Side/ui/DeleteModal";
import DataTable from "@/Components/Client-Side/ui/DataTable";
import ViewModal from "@/Components/Client-Side/ui/ViewModal";

const CATEGORIES = [
  { value: "THREE_STAR_WITH_FLIGHT",    label: "3-Star With Flight" },
  { value: "THREE_STAR_WITHOUT_FLIGHT", label: "3-Star Without Flight" },
  { value: "FOUR_STAR_WITH_FLIGHT",     label: "4-Star With Flight" },
  { value: "FOUR_STAR_WITHOUT_FLIGHT",  label: "4-Star Without Flight" },
  { value: "FIVE_STAR_WITH_FLIGHT",     label: "5-Star With Flight" },
  { value: "FIVE_STAR_WITHOUT_FLIGHT",  label: "5-Star Without Flight" },
  { value: "CUSTOM_SPECIAL",            label: "Custom / Special" },
];

const STAR_RATINGS = [
  { value: 0, label: "Custom (0★)" },
  { value: 3, label: "3★" },
  { value: 4, label: "4★" },
  { value: 5, label: "5★" },
];

const FEATURES = [
  { key: "includesFlight",    label: "Flight" },
  { key: "includesVisa",      label: "Visa" },
  { key: "includesTransport", label: "Transport" },
  { key: "includesGuide",     label: "Guide" },
  { key: "isVip",             label: "VIP" },
  { key: "isCustom",          label: "Custom" },
];

const EMPTY_FORM = {
  title: "",
  duration: "",
  makkahHotel: "",
  madinahHotel: "",
  price: "",
  starRating: 3,
  category: "THREE_STAR_WITH_FLIGHT",
  includesFlight: true,
  includesVisa: true,
  includesTransport: true,
  includesGuide: false,
  isVip: false,
  isCustom: false,
};

export default function UmrahPackagesManager() {
  const [packages, setPackages]     = useState([]);
  const [loading, setLoading]       = useState(true);
  const [modalMode, setModalMode]   = useState(null);
  const [selected, setSelected]     = useState(null);
  const [form, setForm]             = useState(EMPTY_FORM);
  const [imageFile, setImageFile]   = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError]           = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const fileRef = useRef(null);

  useEffect(() => { fetchPackages(); }, [filterCategory]);

  async function fetchPackages() {
    setLoading(true);
    try {
      const params = {};
      if (filterCategory) params.category = filterCategory;
      const { data } = await axiosInstance.get(API_UMRAH_PACKAGES, { params });
      setPackages(data);
    } catch {
  setError("Failed to load packages.");
    } finally {
      setLoading(false);
    }
  }

  function openCreate() {
    setForm(EMPTY_FORM);
    setImageFile(null);
    setImagePreview(null);
    setError("");
    setModalMode("create");
  }

  function openEdit(pkg) {
    setSelected(pkg);
    setForm({
      title:            pkg.title,
      duration:         pkg.duration,
      makkahHotel:      pkg.makkahHotel,
      madinahHotel:     pkg.madinahHotel,
      price:            pkg.price,
      starRating:       pkg.starRating,
      category:         pkg.category,
      includesFlight:   pkg.includesFlight,
      includesVisa:     pkg.includesVisa,
      includesTransport:pkg.includesTransport,
      includesGuide:    pkg.includesGuide,
      isVip:            pkg.isVip,
      isCustom:         pkg.isCustom,
    });
    setImageFile(null);
    setImagePreview(pkg.imageUrl || null);
    setError("");
    setModalMode("edit");
  }

  function openView(pkg) {
    setSelected(pkg);
    setModalMode("view");
  }

  function openDelete(pkg) {
    setSelected(pkg);
    setModalMode("delete");
  }

  function closeModal() {
    setModalMode(null);
    setSelected(null);
    setError("");
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  function handleBoolChange(key) {
    setForm((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  async function handleSubmit() {
    setError("");
    const required = ["title","duration","makkahHotel","madinahHotel","price","category"];
    for (const key of required) {
      if (!form[key]?.toString().trim()) {
        setError(`${key} is required .`);
        return;
      }
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (imageFile) fd.append("image", imageFile);

      if (modalMode === "create") {
        await axiosInstance.post(API_UMRAH_PACKAGES, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axiosInstance.patch(API_UMRAH_PACKAGE_BY_ID(selected._id), fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      await fetchPackages();
      closeModal();
    } catch (err) {
    setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleFeatureToggle(pkg, key) {
    const nextValue = !pkg[key];
    setPackages((prev) =>
      prev.map((p) => (p._id === pkg._id ? { ...p, [key]: nextValue } : p))
    );
    try {
      await axiosInstance.patch(`${API_UMRAH_PACKAGE_BY_ID(pkg._id)}/features`, {
        [key]: nextValue,
      });
    } catch {
      setPackages((prev) =>
        prev.map((p) => (p._id === pkg._id ? { ...p, [key]: pkg[key] } : p))
      );
    }
  }

  async function handleDelete() {
    setSubmitting(true);
    try {
      await axiosInstance.delete(API_UMRAH_PACKAGE_BY_ID(selected._id));
      await fetchPackages();
      closeModal();
    } catch {
      setError("Failed to delete.");
    } finally {
      setSubmitting(false);
    }
  }

  const categoryLabel = (val) =>
    CATEGORIES.find((c) => c.value === val)?.label || val;

  const columns = [
    {
      key: "imageUrl",
      label: "Image",
      render: (row) =>
        row.imageUrl ? (
          <img src={row.imageUrl} alt={row.title} className="w-12 h-10 object-cover rounded-lg" />
        ) : (
          <div className="w-12 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
            <ImageIcon className="w-4 h-4 text-gray-400" />
          </div>
        ),
    },
    { key: "title",    label: "Title" },
    { key: "duration", label: "Duration" },
    { key: "price",    label: "Price" },
    {
      key: "category",
      label: "Category",
      render: (row) => (
        <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">
          {categoryLabel(row.category)}
        </span>
      ),
    },
    {
      key: "starRating",
      label: "Stars",
      render: (row) => (
        <span className="text-xs font-semibold text-amber-500">
          {row.starRating === 0 ? "Custom" : `${row.starRating}★`}
        </span>
      ),
    },
    {
      key: "isActive",
      label: "Status",
      render: (row) => (
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
          row.isActive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"
        }`}>
          {row.isActive ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      key: "features",
      label: "Features",
      render: (row) => (
        <div className="flex flex-wrap gap-1">
          {FEATURES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleFeatureToggle(row, key)}
              className={`text-[10px] px-2 py-0.5 rounded-full font-medium transition-colors ${
                row[key]
                  ? "bg-green-50 text-green-600"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div className="flex items-center gap-2">
          <button onClick={() => openView(row)}   className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Eye    className="w-4 h-4" /></button>
          <button onClick={() => openEdit(row)}   className="p-1.5 rounded hover:bg-blue-50 text-blue-500"><Pencil className="w-4 h-4" /></button>
          <button onClick={() => openDelete(row)} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2  className="w-4 h-4" /></button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Umrah Packages</h2>
          <p className="text-sm text-gray-500">{packages.length} packages found</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
          <button
            onClick={fetchPackages}
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={openCreate}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Package
          </button>
        </div>
      </div>

      {error && !modalMode && (
        <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg">{error}</div>
      )}

      <DataTable columns={columns} data={packages} loading={loading} />

      {(modalMode === "create" || modalMode === "edit") && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-800">
                {modalMode === "create" ? "New Umrah Package" : "Edit Package"}
              </h2>
              <button onClick={closeModal} className="p-1 rounded hover:bg-gray-100 text-gray-500">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5 space-y-4">
              {error && (
                <div className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg">{error}</div>
              )}

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Image</label>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="cursor-pointer border-2 border-dashed border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 transition-colors"
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="preview" className="w-full h-40 object-cover" />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-40 gap-2 text-gray-400">
                      <Upload className="w-6 h-6" />
                 <span className="text-xs">Upload image</span>
                    </div>
                  )}
                </div>
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: "title",       label: "Title",          placeholder: "3-Star Umrah 7 Days" },
                  { key: "duration",    label: "Duration",       placeholder: "7 Days / 6 Nights" },
                  { key: "makkahHotel", label: "Makkah Hotel",   placeholder: "Dar Al Eiman Royal" },
                  { key: "madinahHotel",label: "Madinah Hotel",  placeholder: "Al Aqeeq Hotel" },
                  { key: "price",       label: "Price",          placeholder: "£899" },
                ].map(({ key, label, placeholder }) => (
                  <div key={key}>
                    <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
                    <input
                      value={form[key]}
                      onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                      placeholder={placeholder}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Star Rating</label>
                  <select
                    value={form.starRating}
                    onChange={(e) => setForm((p) => ({ ...p, starRating: Number(e.target.value) }))}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {STAR_RATINGS.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">Included Features</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {FEATURES.map(({ key, label }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleBoolChange(key)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
                        form[key]
                          ? "bg-blue-50 border-blue-300 text-blue-600"
                          : "bg-white border-gray-200 text-gray-500"
                      }`}
                    >
                      <span className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${
                        form[key] ? "bg-blue-500 border-blue-500" : "border-gray-300"
                      }`} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex gap-3 justify-end">
              <button
                onClick={closeModal}
                disabled={submitting}
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium disabled:opacity-50 transition-colors"
              >
                {submitting ? "Saving..." : modalMode === "create" ? "Create" : "Update"}
              </button>
            </div>
          </div>
        </div>
      )}

      {modalMode === "view" && selected && (
        <ViewModal title={selected.title} onClose={closeModal}>
          <div className="space-y-4">
            {selected.imageUrl && (
              <img src={selected.imageUrl} alt={selected.title} className="w-full h-48 object-cover rounded-xl" />
            )}
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["Duration",      selected.duration],
                ["Makkah Hotel",  selected.makkahHotel],
                ["Madinah Hotel", selected.madinahHotel],
                ["Price",         selected.price],
                ["Star Rating",   selected.starRating === 0 ? "Custom" : `${selected.starRating}★`],
                ["Category",      categoryLabel(selected.category)],
                ["Status",        selected.isActive ? "Active" : "Inactive"],
              ].map(([label, value]) => (
                <div key={label} className="bg-gray-50 rounded-lg px-3 py-2">
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="font-medium text-gray-800 mt-0.5">{value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {FEATURES.map(({ key, label }) => (
                <span
                  key={key}
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    selected[key]
                      ? "bg-green-50 text-green-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </ViewModal>
      )}

      {modalMode === "delete" && selected && (
        <DeleteModal
        title="Delete this package?"
          message={`"${selected.title}" will be permanently deleted.`}
          onConfirm={handleDelete}
          onClose={closeModal}
          loading={submitting}
        />
      )}
    </div>
  );
}