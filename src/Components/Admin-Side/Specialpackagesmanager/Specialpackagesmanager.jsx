"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Plus, Search, Eye, Pencil, Trash2, ToggleLeft, ToggleRight,
  Star, RefreshCw, ChevronLeft, ChevronRight, Filter, X,
} from "lucide-react";
import {
  API_SPECIAL_PACKAGES,
  API_SPECIAL_PACKAGE_BY_ID,
  API_SPECIAL_PACKAGE_TOGGLE_ACTIVE,
  API_SPECIAL_PACKAGE_TOGGLE_POPULAR,
} from "@/constants/api";
import { CATEGORIES } from "./contants";
import PackageViewModal from "./Packageviewmodal";
import PackageFormModal from "./PackageFormModal";
import axiosInstance from "@/lib/axios";

const STARS_MAP = { 3: "★★★", 4: "★★★★", 5: "★★★★★" };

const BADGE_COLORS = {
  "Most Popular": "bg-amber-50 text-amber-700 border-amber-200",
  "Best Value":   "bg-green-50 text-green-700 border-green-200",
  "Luxury":       "bg-purple-50 text-purple-700 border-purple-200",
};

export default function SpecialPackagesManager() {
  const [packages, setPackages] = useState([]);
  const [total, setTotal]       = useState(0);
  const [page, setPage]         = useState(1);
  const [loading, setLoading]   = useState(false);
  const [search, setSearch]     = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterActive, setFilterActive]     = useState("");

  const [modalId, setModalId] = useState(null);
  const [viewPkg, setViewPkg] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const LIMIT = 10;

  const fetchPackages = useCallback(async (pg = page) => {
    setLoading(true);
    try {
      const params = { page: pg, limit: LIMIT };
      if (filterCategory) params.category = filterCategory;
      if (filterActive !== "") params.isActive = filterActive;
      const { data } = await axiosInstance.get(API_SPECIAL_PACKAGES, { params });
      setPackages(data.data ?? []);
      setTotal(data.total ?? 0);
    } catch {
      setPackages([]);
    } finally {
      setLoading(false);
    }
  }, [page, filterCategory, filterActive]);

  useEffect(() => {
    fetchPackages(page);
  }, [page, filterCategory, filterActive]);

  const handleToggleActive = async (id) => {
    try {
      await axiosInstance.patch(API_SPECIAL_PACKAGE_TOGGLE_ACTIVE(id));
      fetchPackages(page);
    } catch (error) {
      console.error('Failed to toggle active:', error);
    }
  };

  const handleTogglePopular = async (id) => {
    try {
      await axiosInstance.patch(API_SPECIAL_PACKAGE_TOGGLE_POPULAR(id));
      fetchPackages(page);
    } catch (error) {
      console.error('Failed to toggle popular:', error);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await axiosInstance.delete(API_SPECIAL_PACKAGE_BY_ID(deleteId));
      setDeleteId(null);
      fetchPackages(page);
    } catch (error) {
      console.error('Failed to delete:', error);
    } finally {
      setDeleting(false);
    }
  };

  const resetFilters = () => {
    setFilterCategory("");
    setFilterActive("");
    setSearch("");
    setPage(1);
  };

  const totalPages = Math.ceil(total / LIMIT);

  const filtered = search.trim()
    ? packages.filter((p) =>
        p.title?.toLowerCase().includes(search.toLowerCase())
      )
    : packages;

  const hasActiveFilters = filterCategory || filterActive !== "";

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Special Packages</h2>
          <p className="text-xs text-gray-400 mt-0.5">{total} packages total</p>
        </div>
        <button
          onClick={() => setModalId("new")}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Package
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[180px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-2 top-1/2 -translate-y-1/2">
                <X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          <select
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100 min-w-[160px]"
            value={filterCategory}
            onChange={(e) => { setFilterCategory(e.target.value); setPage(1); }}
          >
            <option value="">All Categories</option>
            {Object.entries(CATEGORIES).map(([v, l]) => (
              <option key={v} value={v}>{l}</option>
            ))}
          </select>

          <select
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
            value={filterActive}
            onChange={(e) => { setFilterActive(e.target.value); setPage(1); }}
          >
            <option value="">All Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>

          <button
            onClick={() => fetchPackages(page)}
            className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            title="Refresh"
          >
            <RefreshCw className={`w-4 h-4 text-gray-500 ${loading ? "animate-spin" : ""}`} />
          </button>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-600 px-2 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-blue-600" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <Filter className="w-10 h-10 mb-3 opacity-30" />
            <p className="text-sm">No packages found</p>
            {hasActiveFilters && (
              <button onClick={resetFilters} className="mt-2 text-xs text-blue-500 hover:underline">
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Package</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Category</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Stars</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Nights</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Price</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Badge</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Status</th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((pkg) => (
                  <tr key={pkg._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {pkg.image ? (
                          <img
                            src={pkg.image}
                            alt={pkg.title}
                            className="w-10 h-10 rounded-lg object-cover shrink-0 border border-gray-100"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-gray-100 shrink-0 flex items-center justify-center">
                            <Star className="w-4 h-4 text-gray-300" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-gray-800 leading-tight">{pkg.title}</p>
                          {pkg.isPopular && (
                            <span className="text-xs text-amber-600 font-medium flex items-center gap-1 mt-0.5">
                              <Star className="w-3 h-3 fill-amber-500" /> Popular
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {CATEGORIES[pkg.category] ?? pkg.category}
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-amber-500 text-xs">{STARS_MAP[pkg.stars] ?? pkg.stars}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{pkg.nights}N</td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-gray-800">{pkg.price}</p>
                      {pkg.originalPrice && (
                        <p className="text-xs text-gray-400 line-through">{pkg.originalPrice}</p>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {pkg.badge ? (
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium border ${BADGE_COLORS[pkg.badge] ?? "bg-gray-50 text-gray-600 border-gray-200"}`}>
                          {pkg.badge}
                        </span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                        pkg.isActive
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}>
                        {pkg.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        {/* View */}
                        <button
                          onClick={() => setViewPkg(pkg)}
                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {/* Popular Toggle */}
                        <button
                          onClick={() => handleTogglePopular(pkg._id)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            pkg.isPopular
                              ? "hover:bg-amber-50 text-amber-500 hover:text-amber-600"
                              : "hover:bg-gray-100 text-gray-400 hover:text-amber-500"
                          }`}
                          title={pkg.isPopular ? "Remove from Popular" : "Mark as Popular"}
                        >
                          <Star className={`w-4 h-4 ${pkg.isPopular ? "fill-amber-500" : ""}`} />
                        </button>

                        {/* Edit */}
                        <button
                          onClick={() => setModalId(pkg._id)}
                          className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-500 hover:text-blue-600 transition-colors"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>

                        {/* Toggle Active */}
                        <button
                          onClick={() => handleToggleActive(pkg._id)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            pkg.isActive
                              ? "hover:bg-orange-50 text-orange-400 hover:text-orange-600"
                              : "hover:bg-green-50 text-gray-400 hover:text-green-600"
                          }`}
                          title={pkg.isActive ? "Deactivate" : "Activate"}
                        >
                          {pkg.isActive
                            ? <ToggleRight className="w-4 h-4" />
                            : <ToggleLeft className="w-4 h-4" />
                          }
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => setDeleteId(pkg._id)}
                          className="p-1.5 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              Page {page} of {totalPages} · {total} total
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                .reduce((acc, p, idx, arr) => {
                  if (idx > 0 && p - arr[idx - 1] > 1) acc.push("...");
                  acc.push(p);
                  return acc;
                }, [])
                .map((item, i) =>
                  item === "..." ? (
                    <span key={`ellipsis-${i}`} className="px-1 text-gray-400 text-sm">…</span>
                  ) : (
                    <button
                      key={item}
                      onClick={() => setPage(item)}
                      className={`min-w-[32px] h-8 rounded-lg text-sm font-medium transition-colors ${
                        page === item
                          ? "bg-blue-600 text-white"
                          : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {viewPkg && (
        <PackageViewModal pkg={viewPkg} onClose={() => setViewPkg(null)} />
      )}

      {modalId && (
        <PackageFormModal
          key={modalId}
          editId={modalId === "new" ? null : modalId}
          onClose={() => setModalId(null)}
          onSuccess={() => fetchPackages(page)}
        />
      )}

      {/* Delete Confirm Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
            <h3 className="text-base font-semibold text-gray-800 mb-2">Delete Package?</h3>
            <p className="text-sm text-gray-500 mb-6">
              This action cannot be undone. The package and its image will be permanently removed.
            </p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 disabled:opacity-50"
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