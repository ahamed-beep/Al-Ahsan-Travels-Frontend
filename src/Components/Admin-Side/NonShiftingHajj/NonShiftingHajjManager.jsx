"use client";

import { useState, useEffect, useCallback } from "react";
import { RefreshCw, Plus, Star, ToggleLeft, ToggleRight, MapPin, Tag } from "lucide-react";
import axiosInstance from "@/lib/axios";
import {
  API_NON_SHIFTING_HAJJ_ADMIN,
  API_NON_SHIFTING_HAJJ_BY_ID,
  API_NON_SHIFTING_HAJJ_TOGGLE_STATUS,
  API_NON_SHIFTING_HAJJ_TOGGLE_POPULAR,
} from "@/constants/api";
import NonShiftingHajjForm from "./NonShiftingHajjForm";

export default function NonShiftingHajjManager() {
  const [packages, setPackages]   = useState([]);
  const [loading, setLoading]     = useState(true);
  const [showForm, setShowForm]   = useState(false);
  const [editData, setEditData]   = useState(null);
  const [deleteId, setDeleteId]   = useState(null);
  const [deleting, setDeleting]   = useState(false);

  const fetchPackages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(API_NON_SHIFTING_HAJJ_ADMIN);
      const list = Array.isArray(res.data) ? res.data : (res.data.data ?? []);
      setPackages(list);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchPackages(); }, [fetchPackages]);

  const handleToggleStatus = async (id) => {
    try {
      await axiosInstance.patch(API_NON_SHIFTING_HAJJ_TOGGLE_STATUS(id));
      fetchPackages();
    } catch (err) { console.error(err); }
  };

  const handleTogglePopular = async (id) => {
    try {
      await axiosInstance.patch(API_NON_SHIFTING_HAJJ_TOGGLE_POPULAR(id));
      fetchPackages();
    } catch (err) { console.error(err); }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await axiosInstance.delete(API_NON_SHIFTING_HAJJ_BY_ID(deleteId));
      setDeleteId(null);
      fetchPackages();
    } catch (err) { console.error(err); }
    finally { setDeleting(false); }
  };

  const openAdd  = () => { setEditData(null); setShowForm(true); };
  const openEdit = (pkg) => { setEditData(pkg); setShowForm(true); };
  const onSuccess = () => { setShowForm(false); fetchPackages(); };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Non-Shifting Hajj Packages</h1>
          <p className="text-sm text-gray-500 mt-0.5">{packages.length} packages</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={fetchPackages}
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
          <button
            onClick={openAdd}
            className="flex items-center gap-2 px-4 py-2 bg-[#1C398E] text-white rounded-lg text-sm font-medium hover:bg-[#162d70]"
          >
            <Plus className="w-4 h-4" /> Add Package
          </button>
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
        </div>
      ) : packages.length === 0 ? (
  <div className="text-center py-20 text-gray-400">No packages found</div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {["Image", "Title", "Duration", "Price", "Locations", "Tags", "Popular", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {packages.map((pkg) => (
                <tr key={pkg.id ?? pkg._id} className="hover:bg-gray-50 transition-colors">

                  {/* Image */}
                  <td className="px-4 py-3">
                    <img
                      src={pkg.imageUrl} alt={pkg.title}
                      className="w-14 h-10 rounded-lg object-cover border border-gray-100"
                    />
                  </td>

                  {/* Title */}
                  <td className="px-4 py-3 font-medium text-gray-800 max-w-[180px]">
                    <div className="truncate">{pkg.title}</div>
                  </td>

                  {/* Duration */}
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                    {pkg.duration}
                  </td>

                  {/* Price */}
                  <td className="px-4 py-3 font-semibold text-[#1C398E] whitespace-nowrap">
                    {pkg.currency} {pkg.price?.toLocaleString()}
                  </td>

                  {/* Locations */}
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1 max-w-[160px]">
                      {pkg.locations?.map((loc) => (
                        <span key={loc} className="flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 text-blue-700 text-[10px] rounded-full">
                          <MapPin className="w-2.5 h-2.5" /> {loc}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Tags */}
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1 max-w-[160px]">
                      {pkg.tags?.map((tag) => (
                        <span key={tag} className="flex items-center gap-0.5 px-1.5 py-0.5 bg-purple-50 text-purple-700 text-[10px] rounded-full">
                          <Tag className="w-2.5 h-2.5" /> {tag}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Popular */}
                  <td className="px-4 py-3">
                    <button onClick={() => handleTogglePopular(pkg.id ?? pkg._id)}>
                      <Star
                        className={`w-5 h-5 transition-colors ${
                          pkg.popular ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-300"
                        }`}
                      />
                    </button>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleToggleStatus(pkg.id ?? pkg._id)}
                      className="flex items-center gap-1.5"
                    >
                      {pkg.status === "active" ? (
                        <><ToggleRight className="w-5 h-5 text-green-500" /><span className="text-xs text-green-600">Active</span></>
                      ) : (
                        <><ToggleLeft className="w-5 h-5 text-gray-400" /><span className="text-xs text-gray-400">Inactive</span></>
                      )}
                    </button>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEdit(pkg)}
                        className="px-3 py-1.5 text-xs rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setDeleteId(pkg.id ?? pkg._id)}
                        className="px-3 py-1.5 text-xs rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Form Modal */}
      {showForm && (
        <NonShiftingHajjForm
          editData={editData}
          onClose={() => setShowForm(false)}
          onSuccess={onSuccess}
        />
      )}

      {/* Delete Confirm Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
           <h2 className="font-semibold text-gray-800 mb-2">Delete this package?</h2>
           <p className="text-sm text-gray-500 mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                disabled={deleting}
                className="flex-1 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex-1 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 disabled:opacity-50"
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}