"use client";

import { useState, useEffect, useCallback } from "react";
import { RefreshCw, Plus, Star, ToggleLeft, ToggleRight, MapPin, Tag } from "lucide-react";
import axiosInstance from "@/lib/axios";
import {
  API_SHIFTING_HAJJ,
  API_SHIFTING_HAJJ_BY_ID,
  API_SHIFTING_HAJJ_TOGGLE_STATUS,
  API_SHIFTING_HAJJ_TOGGLE_POPULAR,
} from "@/constants/api";
import DataTable   from "@/Components/Client-Side/ui/DataTable";
import DeleteModal from "@/Components/Client-Side/ui/DeleteModal";
import ViewModal   from "@/Components/Client-Side/ui/ViewModal";
import ShiftingHajjForm from "./ShiftingHajjForm";

// ── Status Badge ──────────────────────────────────────────────
function StatusBadge({ status }) {
  const active = status === "active";
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-medium ${
      active
        ? "bg-green-100 text-green-700 border-green-200"
        : "bg-gray-100 text-gray-500 border-gray-200"
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${active ? "bg-green-500" : "bg-gray-400"}`} />
      {active ? "Active" : "Inactive"}
    </span>
  );
}

// ── Popular Badge ─────────────────────────────────────────────
function PopularBadge({ popular }) {
  return popular ? (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-medium bg-amber-100 text-amber-700 border-amber-200">
      <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> Popular
    </span>
  ) : (
    <span className="text-xs text-gray-400">—</span>
  );
}

// ── Package Detail (inside ViewModal) ────────────────────────
function PackageDetail({ pkg }) {
  return (
    <div className="space-y-4">
      {/* Image */}
      {pkg.imageUrl && (
        <img
          src={pkg.imageUrl}
          alt={pkg.title}
          className="w-full h-44 object-cover rounded-xl"
        />
      )}

      {/* Title + badges */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-lg font-bold text-[#1F1F1F]">{pkg.title}</p>
          <p className="text-xs text-gray-400 mt-0.5">{pkg.duration}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <StatusBadge  status={pkg.status} />
          <PopularBadge popular={pkg.popular} />
        </div>
      </div>

      {/* Price */}
      <div className="bg-blue-50 rounded-xl px-4 py-3">
        <p className="text-[10px] text-[#1C398E] uppercase tracking-wide font-medium">Price</p>
        <p className="text-xl font-bold text-[#1C398E] mt-0.5">
          {pkg.currency} {pkg.price?.toLocaleString()}
          <span className="text-xs font-normal text-gray-500 ml-1">{pkg.perPersonText}</span>
        </p>
      </div>

      {/* Locations */}
      {pkg.locations?.length > 0 && (
        <div>
          <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1 mb-2">
            <MapPin className="w-3 h-3" /> Locations
          </p>
          <div className="flex flex-wrap gap-2">
            {pkg.locations.map((loc) => (
              <span key={loc} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                {loc}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {pkg.tags?.length > 0 && (
        <div>
          <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1 mb-2">
            <Tag className="w-3 h-3" /> Includes
          </p>
          <div className="flex flex-wrap gap-2">
            {pkg.tags.map((tag) => (
              <span key={tag} className="text-xs bg-[#EEF2FF] text-[#1C398E] px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      {pkg.description && (
        <div className="bg-gray-50 rounded-xl px-4 py-3">
          <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Description</p>
          <p className="text-sm text-gray-700">{pkg.description}</p>
        </div>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────
export default function ShiftingHajjManager() {
  const [packages, setPackages]           = useState([]);
  const [loading, setLoading]             = useState(true);
  const [viewItem, setViewItem]           = useState(null);
  const [deleteItem, setDeleteItem]       = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showForm, setShowForm]           = useState(false);
  const [editData, setEditData]           = useState(null);

  const fetchPackages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(API_SHIFTING_HAJJ);
      const list = Array.isArray(res.data) ? res.data : (res.data.data ?? []);
      setPackages(list);
    } catch (err) {
      console.error("Shifting Hajj packages load error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchPackages(); }, [fetchPackages]);

  const handleToggleStatus = async (id) => {
    try {
      const res = await axiosInstance.patch(API_SHIFTING_HAJJ_TOGGLE_STATUS(id));
      const updated = res.data;
      setPackages((prev) =>
        prev.map((p) => (p.id === id || p._id === id) ? { ...p, status: updated.status } : p)
      );
    } catch (err) {
      console.error("Toggle status error:", err);
    }
  };

  const handleTogglePopular = async (id) => {
    try {
      const res = await axiosInstance.patch(API_SHIFTING_HAJJ_TOGGLE_POPULAR(id));
      const updated = res.data;
      setPackages((prev) =>
        prev.map((p) => (p.id === id || p._id === id) ? { ...p, popular: updated.popular } : p)
      );
    } catch (err) {
      console.error("Toggle popular error:", err);
    }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;
    const id = deleteItem.id ?? deleteItem._id;
    setDeleteLoading(true);
    try {
      await axiosInstance.delete(API_SHIFTING_HAJJ_BY_ID(id));
      setPackages((prev) => prev.filter((p) => p.id !== id && p._id !== id));
      setDeleteItem(null);
      setViewItem(null);
    } catch (err) {
      console.error("Delete error:", err);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditData(null);
    fetchPackages();
  };

  const openEdit = (pkg) => {
    setEditData(pkg);
    setShowForm(true);
  };

  // ── Table columns ──────────────────────────────────────────
  const columns = [
    {
      key: "title",
      label: "Package",
      render: (row) => (
        <div className="flex items-center gap-3">
          {row.imageUrl && (
            <img src={row.imageUrl} alt={row.title} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
          )}
          <div>
            <p className="font-medium text-[#1F1F1F] text-sm">{row.title}</p>
            <p className="text-xs text-gray-400">{row.duration}</p>
          </div>
        </div>
      ),
    },
    {
      key: "price",
      label: "Price",
      render: (row) => (
        <span className="font-semibold text-[#1C398E]">
          {row.currency} {row.price?.toLocaleString()}
        </span>
      ),
    },
    {
      key: "locations",
      label: "Locations",
      render: (row) => (
        <span className="text-xs text-gray-500">
          {row.locations?.slice(0, 2).join(", ") || "—"}
          {row.locations?.length > 2 && ` +${row.locations.length - 2}`}
        </span>
      ),
    },
    {
      key: "popular",
      label: "Popular",
      render: (row) => <PopularBadge popular={row.popular} />,
    },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => {
        const id = row.id ?? row._id;
        return (
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setViewItem(row)}
              className="px-2.5 py-1 text-xs rounded-lg bg-blue-50 text-[#1C398E] hover:bg-blue-100 transition font-medium"
            >
              View
            </button>
            <button
              onClick={() => openEdit(row)}
              className="px-2.5 py-1 text-xs rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition font-medium"
            >
              Edit
            </button>
            <button
              onClick={() => handleToggleStatus(id)}
              title={row.status === "active" ? "Deactivate" : "Activate"}
              className="px-2.5 py-1 text-xs rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition font-medium"
            >
              {row.status === "active" ? "Deactivate" : "Activate"}
            </button>
            <button
              onClick={() => handleTogglePopular(id)}
              title={row.popular ? "Remove Popular" : "Mark Popular"}
              className="px-2.5 py-1 text-xs rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition font-medium"
            >
              {row.popular ? "Unstar" : "Star"}
            </button>
            <button
              onClick={() => setDeleteItem(row)}
              className="px-2.5 py-1 text-xs rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition font-medium"
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-[#1F1F1F]">Shifting Hajj Packages</h1>
          <p className="text-sm text-gray-500 mt-0.5">{packages.length} package{packages.length !== 1 ? "s" : ""}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={fetchPackages}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition shadow-sm"
          >
            <RefreshCw className="w-4 h-4" /> Refresh
          </button>
          <button
            onClick={() => { setEditData(null); setShowForm(true); }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1C398E] text-white text-sm font-semibold hover:bg-[#162d70] transition shadow-sm"
          >
            <Plus className="w-4 h-4" /> Add Package
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total",    val: packages.length,                                         cls: "text-[#1C398E]" },
          { label: "Active",   val: packages.filter((p) => p.status === "active").length,    cls: "text-green-600" },
          { label: "Popular",  val: packages.filter((p) => p.popular).length,                cls: "text-amber-600" },
        ].map(({ label, val, cls }) => (
          <div key={label} className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
            <p className={`text-2xl font-bold ${cls}`}>{val}</p>
            <p className="text-xs text-gray-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <DataTable columns={columns} data={packages} loading={loading} />

      {/* View Modal */}
      {viewItem && (
        <ViewModal title="Package Details" onClose={() => setViewItem(null)}>
          <PackageDetail pkg={viewItem} />
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => { openEdit(viewItem); setViewItem(null); }}
              className="flex-1 py-2.5 rounded-xl bg-[#1C398E] text-white text-sm font-semibold hover:bg-[#162d70] transition"
            >
              Edit
            </button>
            <button
              onClick={() => { setDeleteItem(viewItem); setViewItem(null); }}
              className="flex-1 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-200 text-sm font-semibold hover:bg-red-100 transition"
            >
              Delete
            </button>
          </div>
        </ViewModal>
      )}

      {/* Delete Modal */}
      {deleteItem && (
        <DeleteModal
         title="Delete this package?"
          message={`"${deleteItem.title}" will be permanently deleted`}
          loading={deleteLoading}
          onConfirm={handleDelete}
          onClose={() => setDeleteItem(null)}
        />
      )}

      {/* Add / Edit Form Modal */}
      {showForm && (
        <ShiftingHajjForm
          editData={editData}
          onClose={() => { setShowForm(false); setEditData(null); }}
          onSuccess={handleFormSuccess}
        />
      )}
    </div>
  );
}