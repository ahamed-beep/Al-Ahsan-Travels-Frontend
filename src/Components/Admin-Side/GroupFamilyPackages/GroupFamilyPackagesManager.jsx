"use client";
import { useState, useEffect, useRef } from "react";
import {
  Plus, Pencil, Trash2, Eye, EyeOff, RefreshCw, X, Upload, ImageIcon,
  Plane, CreditCard, Car, UserCheck, Star
} from "lucide-react";
import axiosInstance from "@/lib/axios";
import {
  API_GROUP_FAMILY_PACKAGES,
  API_GROUP_FAMILY_PACKAGE_BY_ID,
  API_GROUP_FAMILY_TOGGLE_STATUS,
  API_GROUP_FAMILY_TOGGLE_POPULAR,
} from "@/constants/api";

const CATEGORIES = ["FAMILY", "GROUP"];
const STAR_RATINGS = [3, 4, 5];

const BOOLEAN_FIELDS = ["popular", "isActive", "includesFlight", "includesVisa", "includesTransport", "includesGuide"];

const emptyForm = {
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
  includesFlight: false,
  includesVisa: false,
  includesTransport: false,
  includesGuide: false,
};

export default function GroupFamilyPackagesManager() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [toggling, setToggling] = useState({});
  const [filterCategory, setFilterCategory] = useState("ALL");
  const fileRef = useRef(null);

  const fetchPackages = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(API_GROUP_FAMILY_PACKAGES);
      const data = res.data?.data ?? res.data;
      setPackages(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPackages(); }, []);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setImageFile(null);
    setImagePreview(null);
    setModalOpen(true);
  };

  const openEdit = (pkg) => {
    setEditingId(pkg._id);
    setForm({
      title: pkg.title || "",
      duration: pkg.duration || "",
      makkahHotel: pkg.makkahHotel || "",
      madinahHotel: pkg.madinahHotel || "",
      price: pkg.price || "",
      hotelLabel: pkg.hotelLabel || "",
      starRating: pkg.starRating || 3,
      category: pkg.category || "FAMILY",
      popular: pkg.popular || false,
      isActive: pkg.isActive !== undefined ? pkg.isActive : true,
      includesFlight: pkg.includesFlight || false,
      includesVisa: pkg.includesVisa || false,
      includesTransport: pkg.includesTransport || false,
      includesGuide: pkg.includesGuide || false,
    });
    setImageFile(null);
    setImagePreview(pkg.imageUrl || null);
    setModalOpen(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

 const handleSubmit = async () => {
  if (!form.title || !form.duration || !form.makkahHotel || !form.madinahHotel || !form.price || !form.hotelLabel) {
    alert("Saare required fields fill karo");
    return;
  }
  setSubmitting(true);
  try {
    const fd = new FormData();

    Object.entries(form).forEach(([k, v]) => {
      if (BOOLEAN_FIELDS.includes(k)) {
        fd.append(k, v === true ? "true" : "false");
      } else {
        fd.append(k, String(v));
      }
    });

    if (imageFile) fd.append("image", imageFile);

    // ✅ DEBUG: FormData ka content dekho
    console.log("=== FORM STATE ===", form);
    console.log("=== FORMDATA ENTRIES ===");
    for (const [key, value] of fd.entries()) {
      console.log(`  ${key}:`, value, `(type: ${typeof value})`);
    }

    let res;
    if (editingId) {
      console.log("=== PATCH URL ===", API_GROUP_FAMILY_PACKAGE_BY_ID(editingId));
      res = await axiosInstance.patch(API_GROUP_FAMILY_PACKAGE_BY_ID(editingId), fd);
    } else {
      console.log("=== POST URL ===", API_GROUP_FAMILY_PACKAGES);
      res = await axiosInstance.post(API_GROUP_FAMILY_PACKAGES, fd);
    }

    // ✅ DEBUG: Server se kya aaya
    console.log("=== SERVER RESPONSE ===", res.data);

    const result = res.data?.data ?? res.data;
    console.log("=== PARSED RESULT ===", result);

    if (editingId) {
      setPackages((prev) => prev.map((p) => (p._id === editingId ? result : p)));
    } else {
      setPackages((prev) => [result, ...prev]);
    }
    setModalOpen(false);
  } catch (err) {
    console.error("=== SUBMIT ERROR ===", err);
    console.error("=== ERROR RESPONSE ===", err?.response?.data);
    alert("Error: " + (err?.response?.data?.message || err.message));
  } finally {
    setSubmitting(false);
  }
};

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await axiosInstance.delete(API_GROUP_FAMILY_PACKAGE_BY_ID(deleteId));
      setPackages((prev) => prev.filter((p) => p._id !== deleteId));
      setDeleteId(null);
    } catch (err) {
      console.error("Delete error:", err);
      alert("Delete failed");
    }
  };

  const handleToggleStatus = async (id) => {
    if (toggling[id]) return;
    setToggling((t) => ({ ...t, [id]: true }));
    try {
      const res = await axiosInstance.patch(API_GROUP_FAMILY_TOGGLE_STATUS(id));
      const updated = res.data?.data ?? res.data;
      setPackages((prev) => prev.map((p) => (p._id === id ? { ...p, isActive: updated.isActive } : p)));
    } catch (err) {
      console.error("Toggle status error:", err);
      alert("Status toggle failed");
    } finally {
      setToggling((t) => ({ ...t, [id]: false }));
    }
  };

  const handleTogglePopular = async (id) => {
    if (toggling[`pop_${id}`]) return;
    setToggling((t) => ({ ...t, [`pop_${id}`]: true }));
    try {
      const res = await axiosInstance.patch(API_GROUP_FAMILY_TOGGLE_POPULAR(id));
      const updated = res.data?.data ?? res.data;
      setPackages((prev) => prev.map((p) => (p._id === id ? { ...p, popular: updated.popular } : p)));
    } catch (err) {
      console.error("Toggle popular error:", err);
      alert("Popular toggle failed");
    } finally {
      setToggling((t) => ({ ...t, [`pop_${id}`]: false }));
    }
  };

  const filtered = filterCategory === "ALL"
    ? packages
    : packages.filter((p) => p.category === filterCategory);

  const FeaturePill = ({ active, icon: Icon, label }) => (
    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${
      active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400 line-through"
    }`}>
      <Icon size={10} /> {label}
    </span>
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Group & Family Packages</h1>
          <p className="text-sm text-gray-500 mt-1">{packages.length} total packages</p>
        </div>
        <div className="flex gap-2">
          <button onClick={fetchPackages} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <RefreshCw size={16} className="text-gray-600" />
          </button>
          <button onClick={openCreate} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            <Plus size={16} /> New Package
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 mb-6">
        {["ALL", ...CATEGORIES].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filterCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">Koi package nahi mila</div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {["Image", "Title", "Category", "Stars", "Price", "Features", "Status", "Popular", "Actions"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {filtered.map((pkg) => (
                <tr key={pkg._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    {pkg.imageUrl ? (
                      <img src={pkg.imageUrl} alt={pkg.title} className="w-14 h-10 object-cover rounded-lg" />
                    ) : (
                      <div className="w-14 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <ImageIcon size={16} className="text-gray-400" />
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-900 max-w-[160px] truncate">{pkg.title}</div>
                    <div className="text-xs text-gray-400">{pkg.duration}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      pkg.category === "FAMILY" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
                    }`}>
                      {pkg.category}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: pkg.starRating || 3 }).map((_, i) => (
                        <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-semibold text-gray-900">{pkg.price}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1 max-w-[160px]">
                      <FeaturePill active={pkg.includesFlight} icon={Plane} label="Flight" />
                      <FeaturePill active={pkg.includesVisa} icon={CreditCard} label="Visa" />
                      <FeaturePill active={pkg.includesTransport} icon={Car} label="Transport" />
                      <FeaturePill active={pkg.includesGuide} icon={UserCheck} label="Guide" />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleToggleStatus(pkg._id)}
                      disabled={toggling[pkg._id]}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        toggling[pkg._id]
                          ? "opacity-50 cursor-not-allowed bg-gray-100 text-gray-400"
                          : pkg.isActive
                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                          : "bg-red-100 text-red-600 hover:bg-red-200"
                      }`}
                    >
                      {toggling[pkg._id] ? (
                        <RefreshCw size={10} className="animate-spin" />
                      ) : pkg.isActive ? (
                        <Eye size={10} />
                      ) : (
                        <EyeOff size={10} />
                      )}
                      {toggling[pkg._id] ? "..." : pkg.isActive ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleTogglePopular(pkg._id)}
                      disabled={toggling[`pop_${pkg._id}`]}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        toggling[`pop_${pkg._id}`]
                          ? "opacity-50 cursor-not-allowed bg-gray-100 text-gray-400"
                          : pkg.popular
                          ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      <Star size={10} className={pkg.popular ? "fill-yellow-500" : ""} />
                      {toggling[`pop_${pkg._id}`] ? "..." : pkg.popular ? "Popular" : "Normal"}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <button
                        onClick={() => openEdit(pkg)}
                        className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                        title="Edit"
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        onClick={() => setDeleteId(pkg._id)}
                        className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Create/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">
                {editingId ? "Package Edit Karo" : "Naya Package Add Karo"}
              </h2>
              <button onClick={() => setModalOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Package Image</label>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="border-2 border-dashed border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all min-h-[120px]"
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="preview" className="max-h-32 rounded-lg object-cover" />
                  ) : (
                    <>
                      <Upload size={24} className="text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Image upload karo</span>
                    </>
                  )}
                </div>
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </div>

              {/* Basic Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                  <input
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Family Umrah 10 Days"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration *</label>
                  <input
                    value={form.duration}
                    onChange={(e) => setForm({ ...form, duration: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. 10 Days / 9 Nights"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price *</label>
                  <input
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. £1299"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Makkah Hotel *</label>
                  <input
                    value={form.makkahHotel}
                    onChange={(e) => setForm({ ...form, makkahHotel: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Dar Al Eiman Royal"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Madinah Hotel *</label>
                  <input
                    value={form.madinahHotel}
                    onChange={(e) => setForm({ ...form, madinahHotel: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Al Aqeeq Hotel"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Label *</label>
                  <input
                    value={form.hotelLabel}
                    onChange={(e) => setForm({ ...form, hotelLabel: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. 3★ Hotel"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Star Rating *</label>
                  <select
                    value={form.starRating}
                    onChange={(e) => setForm({ ...form, starRating: Number(e.target.value) })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {STAR_RATINGS.map((s) => <option key={s} value={s}>{s} Star</option>)}
                  </select>
                </div>
              </div>

              {/* Feature Flags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Included Features</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { key: "includesFlight", label: "Flight Included", icon: Plane },
                    { key: "includesVisa", label: "Visa Included", icon: CreditCard },
                    { key: "includesTransport", label: "Transport Included", icon: Car },
                    { key: "includesGuide", label: "Guide Included", icon: UserCheck },
                  ].map(({ key, label, icon: Icon }) => (
                    <label
                      key={key}
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        form[key]
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.checked })}
                        className="sr-only"
                      />
                      <Icon size={16} className={form[key] ? "text-blue-600" : "text-gray-400"} />
                      <span className={`text-sm font-medium ${form[key] ? "text-blue-700" : "text-gray-600"}`}>
                        {label}
                      </span>
                      <div className={`ml-auto w-4 h-4 rounded border-2 flex items-center justify-center ${
                        form[key] ? "border-blue-500 bg-blue-500" : "border-gray-300"
                      }`}>
                        {form[key] && <span className="text-white text-xs">✓</span>}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Status & Popular */}
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div
                    onClick={() => setForm({ ...form, isActive: !form.isActive })}
                    className={`w-10 h-5 rounded-full transition-colors relative ${form.isActive ? "bg-green-500" : "bg-gray-300"}`}
                  >
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${form.isActive ? "translate-x-5" : "translate-x-0.5"}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Active</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div
                    onClick={() => setForm({ ...form, popular: !form.popular })}
                    className={`w-10 h-5 rounded-full transition-colors relative ${form.popular ? "bg-yellow-500" : "bg-gray-300"}`}
                  >
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${form.popular ? "translate-x-5" : "translate-x-0.5"}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Popular</span>
                </label>
              </div>
            </div>

            <div className="flex gap-3 p-6 border-t border-gray-100">
              <button
                onClick={() => setModalOpen(false)}
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Saving..." : editingId ? "Update Karo" : "Create Karo"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 size={20} className="text-red-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Package Delete Karo?</h3>
            <p className="text-sm text-gray-500 text-center mb-6">Yeh action undo nahi ho sakta</p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 px-4 py-2.5 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}