"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Pencil, Trash2, Eye, X, Upload } from "lucide-react";
import { API_ASHRA_PACKAGE_BY_ID, API_ASHRA_PACKAGES, API_ASHRA_PACKAGES_BY_CATEGORY } from "@/constants/api";
import DataTable from "@/Components/Client-Side/ui/DataTable";
import DeleteModal from "@/Components/Client-Side/ui/DeleteModal";
import ViewModal from "@/Components/Client-Side/ui/ViewModal";
import axiosInstance from "@/lib/axios";

const CATEGORIES = [
  { label: "Ashra 1", value: "ashra_1" },
  { label: "Ashra 2", value: "ashra_2" },
  { label: "Ashra 3", value: "ashra_3" },
];

const BADGE_OPTIONS = [
  { label: "None", value: "" },
  { label: "Most Popular", value: "Most Popular" },
  { label: "Premium", value: "Premium" },
];

const BADGE_META = {
  "Most Popular": { badgeBg: "bg-blue-600", borderColor: "border-orange-400", isPopular: true },
  Premium:        { badgeBg: "bg-blue-900", borderColor: "border-blue-600",   isPopular: false },
  "":             { badgeBg: "",            borderColor: "border-gray-200",    isPopular: false },
};

const EMPTY_FORM = {
  title: "",
  price: "",
  nights: "",
  stars: "",
  makkah: "",
  madinah: "",
  features: "",
  badge: "",
  badgeBg: "",
  borderColor: "border-gray-200",
  category: "ashra_1",
  isPopular: false,
};

export default function AshraPackagesManager() {
  const [activeCategory, setActiveCategory] = useState("ashra_1");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [viewItem, setViewItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileRef = useRef();

  const fetchData = async (category) => {
    setLoading(true);
    try {
      const url = API_ASHRA_PACKAGES_BY_CATEGORY(category);
      console.log("[Ashra] Fetching:", url);
      const res = await axiosInstance.get(url);
      console.log("[Ashra] Response:", res.data);
      setData(res.data?.data || []);
    } catch (err) {
      console.error("[Ashra] Error:", err?.response?.status, err?.response?.data, err?.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(activeCategory);
  }, [activeCategory]);

  const openCreate = () => {
    setEditItem(null);
    setForm({ ...EMPTY_FORM, category: activeCategory });
    setImageFile(null);
    setImagePreview(null);
    setFormOpen(true);
  };

  const openEdit = (item) => {
    setEditItem(item);
    setForm({
      title: item.title || "",
      price: item.price || "",
      nights: item.nights || "",
      stars: item.stars || "",
      makkah: item.makkah || "",
      madinah: item.madinah || "",
      features: Array.isArray(item.features) ? item.features.join(", ") : "",
      badge: item.badge || "",
      badgeBg: item.badgeBg || "",
      borderColor: item.borderColor || "border-gray-200",
      category: item.category || activeCategory,
      isPopular: item.isPopular || false,
    });
    setImageFile(null);
    setImagePreview(item.image || null);
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setEditItem(null);
    setImageFile(null);
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([key, val]) => {
        if (key === "features") {
          const arr = val.split(",").map((f) => f.trim()).filter(Boolean);
          arr.forEach((f) => fd.append("features[]", f));
        } else {
          fd.append(key, val);
        }
      });
      if (imageFile) fd.append("image", imageFile);

      if (editItem) {
        await axiosInstance.patch(API_ASHRA_PACKAGE_BY_ID(editItem.id), fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axiosInstance.post(API_ASHRA_PACKAGES, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      closeForm();
      fetchData(activeCategory);
    } catch (err) {
      console.error("[Ashra] Submit error:", err?.response?.data, err?.message);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      await axiosInstance.delete(API_ASHRA_PACKAGE_BY_ID(deleteItem.id));
      setDeleteItem(null);
      fetchData(activeCategory);
    } catch (err) {
      console.error("[Ashra] Delete error:", err?.response?.data, err?.message);
    } finally {
      setDeleteLoading(false);
    }
  };

  const columns = [
    {
      key: "image",
      label: "Image",
      render: (row) =>
        row.image ? (
          <img src={row.image} alt={row.title} className="w-12 h-12 object-cover rounded-lg" />
        ) : (
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
            N/A
          </div>
        ),
    },
    { key: "title", label: "Title" },
    { key: "price", label: "Price" },
    { key: "nights", label: "Nights", render: (row) => `${row.nights} Nights` },
    { key: "stars",  label: "Stars",  render: (row) => "★".repeat(row.stars) },
    {
      key: "isPopular",
      label: "Popular",
      render: (row) =>
        row.isPopular ? (
          <span className="px-2 py-0.5 text-xs rounded-full bg-blue-50 text-blue-600 font-medium">Yes</span>
        ) : (
          <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-500">No</span>
        ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div className="flex items-center gap-2">
          <button onClick={() => setViewItem(row)}   className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Eye className="w-4 h-4" /></button>
          <button onClick={() => openEdit(row)}      className="p-1.5 rounded hover:bg-blue-50 text-blue-500"><Pencil className="w-4 h-4" /></button>
          <button onClick={() => setDeleteItem(row)} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 className="w-4 h-4" /></button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Ashra Packages</h2>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Package
        </button>
      </div>

      <div className="flex gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === cat.value ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <DataTable columns={columns} data={data} loading={loading} />

      {deleteItem && (
        <DeleteModal
          title="Package delete karna chahte ho?"
          message={`"${deleteItem.title}" permanently delete ho jayega.`}
          onConfirm={handleDelete}
          onClose={() => setDeleteItem(null)}
          loading={deleteLoading}
        />
      )}

      {viewItem && (
        <ViewModal title={viewItem.title} onClose={() => setViewItem(null)}>
          <div className="space-y-4">
            {viewItem.image && (
              <img src={viewItem.image} alt={viewItem.title} className="w-full h-48 object-cover rounded-xl" />
            )}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Detail label="Price"        value={viewItem.price} />
              <Detail label="Nights"       value={`${viewItem.nights} Nights`} />
              <Detail label="Stars"        value={"★".repeat(viewItem.stars)} />
              <Detail label="Category"     value={viewItem.category} />
              <Detail label="Makkah Hotel" value={viewItem.makkah} />
              <Detail label="Madinah Hotel"value={viewItem.madinah} />
              <Detail label="Badge"        value={viewItem.badge || "—"} />
              <Detail label="Popular"      value={viewItem.isPopular ? "Yes" : "No"} />
            </div>
            {viewItem.features?.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Features</p>
                <ul className="flex flex-wrap gap-2">
                  {viewItem.features.map((f) => (
                    <li key={f} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </ViewModal>
      )}

      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-800">
                {editItem ? "Package Edit Karo" : "Naya Package Add Karo"}
              </h2>
              <button onClick={closeForm} className="p-1 rounded hover:bg-gray-100 text-gray-500">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="overflow-y-auto px-6 py-5 space-y-4">
              <div
                onClick={() => fileRef.current?.click()}
                className="relative w-full h-40 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center cursor-pointer hover:border-blue-400 transition-colors overflow-hidden"
              >
                {imagePreview ? (
                  <img src={imagePreview} alt="preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-gray-400">
                    <Upload className="w-6 h-6" />
                    <span className="text-sm">Image upload karo</span>
                  </div>
                )}
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Title" required>
                  <input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
                </Field>
                <Field label="Price" required>
                  <input className={inputCls} placeholder="£895" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
                </Field>
                <Field label="Nights" required>
                  <input className={inputCls} type="number" min={1} value={form.nights} onChange={(e) => setForm({ ...form, nights: e.target.value })} required />
                </Field>
                <Field label="Stars (1-5)" required>
                  <input className={inputCls} type="number" min={1} max={5} value={form.stars} onChange={(e) => setForm({ ...form, stars: e.target.value })} required />
                </Field>
                <Field label="Makkah Hotel" required>
                  <input className={inputCls} value={form.makkah} onChange={(e) => setForm({ ...form, makkah: e.target.value })} required />
                </Field>
                <Field label="Madinah Hotel" required>
                  <input className={inputCls} value={form.madinah} onChange={(e) => setForm({ ...form, madinah: e.target.value })} required />
                </Field>
                <Field label="Badge">
                  <select
                    className={inputCls}
                    value={form.badge}
                    onChange={(e) => {
                      const meta = BADGE_META[e.target.value];
                      setForm({ ...form, badge: e.target.value, ...meta });
                    }}
                  >
                    {BADGE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Category" required>
                  <select className={inputCls} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                    {CATEGORIES.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Features (comma separated)" required>
                <input
                  className={inputCls}
                  placeholder="Return Flights, Umrah Visa, 3★ Hotels"
                  value={form.features}
                  onChange={(e) => setForm({ ...form, features: e.target.value })}
                  required
                />
              </Field>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={closeForm} className="flex-1 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
                  Cancel
                </button>
                <button type="submit" disabled={formLoading} className="flex-1 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50">
                  {formLoading ? "Saving..." : editItem ? "Update Karo" : "Add Karo"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const inputCls = "w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500";

function Field({ label, children, required }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-gray-500">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm font-medium text-gray-800">{value}</p>
    </div>
  );
}