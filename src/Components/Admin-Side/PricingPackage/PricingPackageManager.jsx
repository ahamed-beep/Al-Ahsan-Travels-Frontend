"use client";

import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Eye, Star } from "lucide-react";
import axiosInstance from "@/lib/axios";
import {
  API_PRICING_PACKAGES,
  API_PRICING_PACKAGE_BY_ID,
  API_PRICING_PACKAGES_BY_CATEGORY,
} from "@/constants/api";
import DeleteModal from "@/Components/Client-Side/ui/DeleteModal";
import ViewModal from "@/Components/Client-Side/ui/ViewModal";
import DataTable from "@/Components/Client-Side/ui/DataTable";

const CATEGORIES = [
  { value: "THREE_STAR", label: "3 Star" },
  { value: "FOUR_STAR", label: "4 Star" },
  { value: "FIVE_STAR", label: "5 Star" },
];

const EMPTY_FORM = {
  duration: "",
  title: "",
  price: "",
  featured: false,
  badge: "",
  features: "",
  category: "THREE_STAR",
};

export default function PricingPackageManager() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("THREE_STAR");

  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const [viewItem, setViewItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // ── Fetch ──────────────────────────────────────────────────────────────────
  const fetchPackages = async (category) => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(API_PRICING_PACKAGES_BY_CATEGORY(category));
      setPackages(res.data);
    } catch {
      setPackages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages(activeCategory);
  }, [activeCategory]);

  // ── Helpers ────────────────────────────────────────────────────────────────
  const openCreate = () => {
    setEditingId(null);
    setFormData({ ...EMPTY_FORM, category: activeCategory });
    setFormError("");
    setFormOpen(true);
  };

  const openEdit = (pkg) => {
    setEditingId(pkg._id);
    setFormData({
      duration: pkg.duration,
      title: pkg.title,
      price: pkg.price,
      featured: pkg.featured,
      badge: pkg.badge || "",
      features: Array.isArray(pkg.features) ? pkg.features.join("\n") : pkg.features,
      category: pkg.category,
    });
    setFormError("");
    setFormOpen(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
    setFormError("");
  };

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError("");

    const payload = {
      ...formData,
      badge: formData.badge || null,
      features: formData.features
        .split("\n")
        .map((f) => f.trim())
        .filter(Boolean),
    };

    try {
      if (editingId) {
        await axiosInstance.patch(API_PRICING_PACKAGE_BY_ID(editingId), payload);
      } else {
        await axiosInstance.post(API_PRICING_PACKAGES, payload);
      }
      setFormOpen(false);
      fetchPackages(activeCategory);
    } catch (err) {
      setFormError(err.response?.data?.message || "Kuch ghalat ho gaya");
    } finally {
      setFormLoading(false);
    }
  };

  // ── Delete ─────────────────────────────────────────────────────────────────
  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      await axiosInstance.delete(API_PRICING_PACKAGE_BY_ID(deleteItem._id));
      setDeleteItem(null);
      fetchPackages(activeCategory);
    } catch {
    } finally {
      setDeleteLoading(false);
    }
  };

  // ── Table Columns ──────────────────────────────────────────────────────────
  const columns = [
    { key: "title", label: "Title" },
    { key: "duration", label: "Duration" },
    { key: "price", label: "Price" },
    {
      key: "featured",
      label: "Featured",
      render: (row) =>
        row.featured ? (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-600 text-xs font-medium">
            <Star className="w-3 h-3" /> Yes
          </span>
        ) : (
          <span className="text-gray-400 text-xs">No</span>
        ),
    },
    {
      key: "badge",
      label: "Badge",
      render: (row) =>
        row.badge ? (
          <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
            {row.badge}
          </span>
        ) : (
          <span className="text-gray-300">—</span>
        ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewItem(row)}
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
            onClick={() => setDeleteItem(row)}
            className="p-1.5 rounded hover:bg-red-50 text-red-500"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Pricing Packages</h2>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
        >
          <Plus className="w-4 h-4" /> Add Package
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition -mb-px ${
              activeCategory === cat.value
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <DataTable columns={columns} data={packages} loading={loading} />

      {/* ── Form Modal ── */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-800">
                {editingId ? "Edit Package" : "Add Package"}
              </h2>
              <button
                onClick={() => setFormOpen(false)}
                className="p-1 rounded hover:bg-gray-100 text-gray-500"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="overflow-y-auto px-6 py-4 space-y-4">

              {/* Category */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Title *</label>
                <input
                  name="title" required value={formData.title} onChange={handleChange}
                  placeholder="e.g. 10 Nights Package"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Duration */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Duration *</label>
                <input
                  name="duration" required value={formData.duration} onChange={handleChange}
                  placeholder="e.g. 10 Days / 9 Nights"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Price *</label>
                <input
                  name="price" required value={formData.price} onChange={handleChange}
                  placeholder="e.g. £899"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Badge */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Badge (optional)</label>
                <input
                  name="badge" value={formData.badge} onChange={handleChange}
                  placeholder="e.g. Best Value"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Features */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Features * <span className="text-gray-400">(har feature alag line mein)</span>
                </label>
                <textarea
                  name="features" required value={formData.features} onChange={handleChange}
                  rows={5}
                  placeholder={"Return flights from UK\nVisa processing included\nGround transportation"}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              {/* Featured */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox" name="featured" id="featured"
                  checked={formData.featured} onChange={handleChange}
                  className="w-4 h-4 accent-blue-600"
                />
                <label htmlFor="featured" className="text-sm text-gray-600">
                  Featured package (highlighted card)
                </label>
              </div>

              {formError && (
                <p className="text-sm text-red-500">{formError}</p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button" onClick={() => setFormOpen(false)}
                  className="flex-1 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit" disabled={formLoading}
                  className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
                >
                  {formLoading ? "Saving..." : editingId ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── View Modal ── */}
      {viewItem && (
        <ViewModal title={viewItem.title} onClose={() => setViewItem(null)}>
          <div className="space-y-3 text-sm">
            <Row label="Category" value={viewItem.category} />
            <Row label="Duration" value={viewItem.duration} />
            <Row label="Price" value={viewItem.price} />
            <Row label="Featured" value={viewItem.featured ? "Yes" : "No"} />
            <Row label="Badge" value={viewItem.badge || "—"} />
            <div>
              <p className="text-xs font-medium text-gray-500 mb-1">Features</p>
              <ul className="space-y-1">
                {viewItem.features?.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ViewModal>
      )}

      {/* ── Delete Modal ── */}
      {deleteItem && (
        <DeleteModal
          title="Package delete karna chahte ho?"
          message={`"${deleteItem.title}" hamesha ke liye delete ho jayega.`}
          onConfirm={handleDelete}
          onClose={() => setDeleteItem(null)}
          loading={deleteLoading}
        />
      )}
    </div>
  );
}

// ── Helper ─────────────────────────────────────────────────────────────────
function Row({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500 text-xs font-medium">{label}</span>
      <span className="text-gray-800">{value}</span>
    </div>
  );
}