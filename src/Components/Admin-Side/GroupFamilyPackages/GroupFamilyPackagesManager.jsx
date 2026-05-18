"use client";

import { useState, useEffect, useRef } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Eye,
  RefreshCw,
  X,
  Upload,
  ImageIcon,
} from "lucide-react";
import axiosInstance from "@/lib/axiosInstance";
import DataTable from "@/components/ui/DataTable";
import DeleteModal from "@/components/ui/DeleteModal";
import ViewModal from "@/components/ui/ViewModal";
import {
  API_GROUP_FAMILY_PACKAGES,
  API_GROUP_FAMILY_PACKAGE_BY_ID,
} from "@/constants/groupFamilyPackageApi";

const CATEGORIES = [
  { value: "FAMILY", label: "Family" },
  { value: "GROUP", label: "Group" },
];

const STAR_RATINGS = [
  { value: 3, label: "3★" },
  { value: 4, label: "4★" },
  { value: 5, label: "5★" },
];

const EMPTY_FORM = {
  title: "",
  duration: "",
  makkahHotel: "",
  madinahHotel: "",
  price: "",
  hotelLabel: "",
  starRating: 3,
  category: "FAMILY",
  popular: false,
  isActive: true,
};

export default function GroupFamilyPackagesManager() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalMode, setModalMode] = useState(null);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const fileRef = useRef(null);

  useEffect(() => {
    fetchPackages();
  }, [filterCategory]);

  async function fetchPackages() {
    setLoading(true);
    try {
      const params = {};
      if (filterCategory) params.category = filterCategory;
      const { data } = await axiosInstance.get(API_GROUP_FAMILY_PACKAGES, {
        params,
      });
      setPackages(data);
    } catch {
      setError("Packages load nahi ho sake.");
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
      title: pkg.title,
      duration: pkg.duration,
      makkahHotel: pkg.makkahHotel,
      madinahHotel: pkg.madinahHotel,
      price: pkg.price,
      hotelLabel: pkg.hotelLabel,
      starRating: pkg.starRating,
      category: pkg.category,
      popular: pkg.popular,
      isActive: pkg.isActive,
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
    const required = [
      "title",
      "duration",
      "makkahHotel",
      "madinahHotel",
      "price",
      "hotelLabel",
      "category",
    ];
    for (const key of required) {
      if (!form[key]?.toString().trim()) {
        setError(`${key} required hai.`);
        return;
      }
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (imageFile) fd.append("image", imageFile);

      if (modalMode === "create") {
        await axiosInstance.post(API_GROUP_FAMILY_PACKAGES, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axiosInstance.patch(
          API_GROUP_FAMILY_PACKAGE_BY_ID(selected._id),
          fd,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      }

      await fetchPackages();
      closeModal();
    } catch (err) {
      setError(err.response?.data?.message || "Kuch ghalat ho gaya.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    setSubmitting(true);
    try {
      await axiosInstance.delete(
        API_GROUP_FAMILY_PACKAGE_BY_ID(selected._id)
      );
      await fetchPackages();
      closeModal();
    } catch {
      setError("Delete nahi ho saka.");
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
          <img
            src={row.imageUrl}
            alt={row.title}
            className="w-12 h-10 object-cover rounded-lg"
          />
        ) : (
          <div className="w-12 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
            <ImageIcon className="w-4 h-4 text-gray-400" />
          </div>
        ),
    },
    { key: "title", label: "Title" },
    { key: "duration", label: "Duration" },
    { key: "price", label: "Price" },
    {
      key: "category",
      label: "Category",
      render: (row) => (
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${
            row.category === "FAMILY"
              ? "bg-purple-50 text-purple-600"
              : "bg-orange-50 text-orange-600"
          }`}
        >
          {categoryLabel(row.category)}
        </span>
      ),
    },
    {
      key: "starRating",
      label: "Stars",
      render: (row) => (
        <span className="text-xs font-semibold text-amber-500">
          {row.starRating}★
        </span>
      ),
    },
    {
      key: "popular",
      label: "Popular",
      render: (row) => (
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${
            row.popular
              ? "bg-yellow-50 text-yellow-600"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          {row.popular ? "Popular" : "Normal"}
        </span>
      ),
    },
    {
      key: "isActive",
      label: "Status",
      render: (row) => (
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${
            row.isActive
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-500"
          }`}
        >
          {row.isActive ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => openView(row)}
            className="p-1.5 rounded hover:bg-gray-100 text-gray-500"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => openEdit(row)}
            className="p-1.5 rounded hover:bg-blue-50 text-blue-500"
          >
            <Pencil className="w-4 h-4" />
          </button>
          <button
            onClick={() => openDelete(row)}
            className="p-1.5 rounded hover:bg-red-50 text-red-500"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Group & Family Packages
          </h2>
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
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
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
        <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <DataTable columns={columns} data={packages} loading={loading} />

      {(modalMode === "create" || modalMode === "edit") && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-800">
                {modalMode === "create"
                  ? "New Group/Family Package"
                  : "Edit Package"}
              </h2>
              <button
                onClick={closeModal}
                className="p-1 rounded hover:bg-gray-100 text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5 space-y-4">
              {error && (
                <div className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Image
                </label>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="cursor-pointer border-2 border-dashed border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 transition-colors"
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="preview"
                      className="w-full h-40 object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-40 gap-2 text-gray-400">
                      <Upload className="w-6 h-6" />
                      <span className="text-xs">Image upload karo</span>
                    </div>
                  )}
                </div>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: "title", label: "Title", placeholder: "Family Umrah Package" },
                  { key: "duration", label: "Duration", placeholder: "10 Days / 9 Nights" },
                  { key: "makkahHotel", label: "Makkah Hotel", placeholder: "Dar Al Eiman Royal" },
                  { key: "madinahHotel", label: "Madinah Hotel", placeholder: "Al Aqeeq Hotel" },
                  { key: "price", label: "Price", placeholder: "£1299" },
                  { key: "hotelLabel", label: "Hotel Label", placeholder: "3★ Hotel" },
                ].map(({ key, label, placeholder }) => (
                  <div key={key}>
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      {label}
                    </label>
                    <input
                      value={form[key]}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, [key]: e.target.value }))
                      }
                      placeholder={placeholder}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Star Rating
                  </label>
                  <select
                    value={form.starRating}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        starRating: Number(e.target.value),
                      }))
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {STAR_RATINGS.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Category
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, category: e.target.value }))
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  Options
                </label>
                <div className="flex gap-3">
                  {[
                    { key: "popular", label: "Popular" },
                    { key: "isActive", label: "Active" },
                  ].map(({ key, label }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleBoolChange(key)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                        form[key]
                          ? "bg-blue-50 border-blue-300 text-blue-600"
                          : "bg-white border-gray-200 text-gray-500"
                      }`}
                    >
                      <span
                        className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${
                          form[key]
                            ? "bg-blue-500 border-blue-500"
                            : "border-gray-300"
                        }`}
                      />
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
                {submitting
                  ? "Saving..."
                  : modalMode === "create"
                  ? "Create"
                  : "Update"}
              </button>
            </div>
          </div>
        </div>
      )}

      {modalMode === "view" && selected && (
        <ViewModal title={selected.title} onClose={closeModal}>
          <div className="space-y-4">
            {selected.imageUrl && (
              <img
                src={selected.imageUrl}
                alt={selected.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            )}
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["Duration", selected.duration],
                ["Makkah Hotel", selected.makkahHotel],
                ["Madinah Hotel", selected.madinahHotel],
                ["Price", selected.price],
                ["Hotel Label", selected.hotelLabel],
                ["Star Rating", `${selected.starRating}★`],
                ["Category", categoryLabel(selected.category)],
                ["Status", selected.isActive ? "Active" : "Inactive"],
                ["Popular", selected.popular ? "Yes" : "No"],
              ].map(([label, value]) => (
                <div key={label} className="bg-gray-50 rounded-lg px-3 py-2">
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="font-medium text-gray-800 mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </ViewModal>
      )}

      {modalMode === "delete" && selected && (
        <DeleteModal
          title="Package delete karna chahte ho?"
          message={`"${selected.title}" permanently delete ho jayega.`}
          onConfirm={handleDelete}
          onClose={closeModal}
          loading={submitting}
        />
      )}
    </div>
  );
}