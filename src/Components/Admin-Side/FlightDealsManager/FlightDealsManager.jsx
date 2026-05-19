"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Plus, Search, Eye, Pencil, Trash2, ToggleLeft, ToggleRight,
  Star, RefreshCw, ChevronLeft, ChevronRight, Filter, X, Plane,
} from "lucide-react";
import {
  API_FLIGHT_DEALS,
  API_FLIGHT_DEAL_BY_ID,
  API_FLIGHT_DEAL_TOGGLE_ACTIVE,
  API_FLIGHT_DEAL_TOGGLE_POPULAR,
} from "@/constants/api";
import FlightDealViewModal from "./FlightDealViewModal";
import FlightDealFormModal from "./FlightDealFormModal";
import axiosInstance from "@/lib/axios";

export default function FlightDealsManager() {
  const [deals, setDeals] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");
  const [filterActive, setFilterActive] = useState("");
  const [filterPopular, setFilterPopular] = useState("");

  const [modalId, setModalId] = useState(null);
  const [viewDeal, setViewDeal] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const LIMIT = 10;

  const fetchDeals = useCallback(async (pg = page) => {
    setLoading(true);
    try {
      const params = { page: pg, limit: LIMIT };
      if (search) params.from = search;
      if (filterFrom) params.from = filterFrom;
      if (filterTo) params.to = filterTo;
      if (filterActive !== "") params.isActive = filterActive;
      if (filterPopular !== "") params.isPopular = filterPopular;
      
      const { data } = await axiosInstance.get(API_FLIGHT_DEALS, { params });
      console.log("Flight Deals API Response:", data);
      
      setDeals(data.data ?? []);
      setTotal(data.total ?? 0);
    } catch (error) {
      console.error("Error fetching flight deals:", error);
      setDeals([]);
    } finally {
      setLoading(false);
    }
  }, [page, search, filterFrom, filterTo, filterActive, filterPopular]);

  useEffect(() => {
    fetchDeals(page);
  }, [page, search, filterFrom, filterTo, filterActive, filterPopular]);

  const handleToggleActive = async (id) => {
    try {
      await axiosInstance.patch(API_FLIGHT_DEAL_TOGGLE_ACTIVE(id));
      fetchDeals(page);
    } catch (error) {
      console.error('Failed to toggle active:', error);
    }
  };

  const handleTogglePopular = async (id) => {
    try {
      await axiosInstance.patch(API_FLIGHT_DEAL_TOGGLE_POPULAR(id));
      fetchDeals(page);
    } catch (error) {
      console.error('Failed to toggle popular:', error);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await axiosInstance.delete(API_FLIGHT_DEAL_BY_ID(deleteId));
      setDeleteId(null);
      fetchDeals(page);
    } catch (error) {
      console.error('Failed to delete:', error);
    } finally {
      setDeleting(false);
    }
  };

  const resetFilters = () => {
    setSearch("");
    setFilterFrom("");
    setFilterTo("");
    setFilterActive("");
    setFilterPopular("");
    setPage(1);
  };

  const totalPages = Math.ceil(total / LIMIT);
  const hasActiveFilters = filterFrom || filterTo || filterActive !== "" || filterPopular !== "";

  // Get unique cities for filters
  const uniqueFromCities = [...new Set(deals.map(d => d.from).filter(Boolean))];
  const uniqueToCities = [...new Set(deals.map(d => d.to).filter(Boolean))];

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Flight Deals</h2>
          <p className="text-xs text-gray-400 mt-0.5">{total} flights total</p>
        </div>
        <button
          onClick={() => setModalId("new")}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Flight Deal
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <div className="flex flex-wrap gap-3 items-center">
          {/* Search by departure city */}
          <div className="relative flex-1 min-w-[180px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
              placeholder="Search by departure city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-2 top-1/2 -translate-y-1/2">
                <X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          {/* From filter */}
          <select
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100 min-w-[140px]"
            value={filterFrom}
            onChange={(e) => { setFilterFrom(e.target.value); setPage(1); }}
          >
            <option value="">All From</option>
            {uniqueFromCities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          {/* To filter */}
          <select
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100 min-w-[140px]"
            value={filterTo}
            onChange={(e) => { setFilterTo(e.target.value); setPage(1); }}
          >
            <option value="">All To</option>
            {uniqueToCities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          {/* Active filter */}
          <select
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
            value={filterActive}
            onChange={(e) => { setFilterActive(e.target.value); setPage(1); }}
          >
            <option value="">All Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>

          {/* Popular filter */}
          <select
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
            value={filterPopular}
            onChange={(e) => { setFilterPopular(e.target.value); setPage(1); }}
          >
            <option value="">All Popularity</option>
            <option value="true">Popular</option>
            <option value="false">Not Popular</option>
          </select>

          {/* Refresh */}
          <button
            onClick={() => fetchDeals(page)}
            className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            title="Refresh"
          >
            <RefreshCw className={`w-4 h-4 text-gray-500 ${loading ? "animate-spin" : ""}`} />
          </button>

          {/* Clear filters */}
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
        ) : deals.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <Plane className="w-10 h-10 mb-3 opacity-30" />
            <p className="text-sm">No flight deals found</p>
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
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Flight</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Route</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Duration</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Price</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Badge</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Status</th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Actions</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {deals.map((deal) => (
                  <tr key={deal._id} className="hover:bg-gray-50/50 transition-colors">
                    {/* Flight info */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {deal.image ? (
                          <img
                            src={deal.image}
                            alt={deal.airline}
                            className="w-10 h-10 rounded-lg object-cover shrink-0 border border-gray-100"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-gray-100 shrink-0 flex items-center justify-center">
                            <Plane className="w-4 h-4 text-gray-400" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-gray-800 leading-tight">{deal.airline}</p>
                          {deal.isPopular && (
                            <span className="text-xs text-amber-600 font-medium flex items-center gap-1 mt-0.5">
                              <Star className="w-3 h-3 fill-amber-500" /> Popular
                            </span>
                          )}
                        </div>
                      </div>
                     </td>

                    {/* Route */}
                    <td className="px-4 py-3">
                      <p className="font-medium text-gray-800">{deal.from}</p>
                      <p className="text-xs text-gray-400">→ {deal.to}</p>
                     </td>

                    {/* Duration */}
                    <td className="px-4 py-3 text-gray-600">{deal.duration}</td>

                    {/* Price */}
                    <td className="px-4 py-3">
                      <p className="font-medium text-gray-800">{deal.price}</p>
                      <p className="text-xs text-gray-400">per person</p>
                     </td>

                    {/* Badge */}
                    <td className="px-4 py-3">
                      {deal.badge ? (
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium border ${
                          deal.badge === "Direct" ? "bg-green-50 text-green-700 border-green-200" :
                          deal.badge.includes("Stop") ? "bg-orange-50 text-orange-700 border-orange-200" :
                          "bg-gray-50 text-gray-600 border-gray-200"
                        }`}>
                          {deal.badge}
                        </span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                     </td>

                    {/* Status */}
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                        deal.isActive
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}>
                        {deal.isActive ? "Active" : "Inactive"}
                      </span>
                     </td>

                    {/* Actions */}
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        {/* View */}
                        <button
                          onClick={() => setViewDeal(deal)}
                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {/* Popular Toggle */}
                        <button
                          onClick={() => handleTogglePopular(deal._id)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            deal.isPopular
                              ? "hover:bg-amber-50 text-amber-500 hover:text-amber-600"
                              : "hover:bg-gray-100 text-gray-400 hover:text-amber-500"
                          }`}
                          title={deal.isPopular ? "Remove from Popular" : "Mark as Popular"}
                        >
                          <Star className={`w-4 h-4 ${deal.isPopular ? "fill-amber-500" : ""}`} />
                        </button>

                        {/* Edit */}
                        <button
                          onClick={() => setModalId(deal._id)}
                          className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-500 hover:text-blue-600 transition-colors"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>

                        {/* Toggle Active */}
                        <button
                          onClick={() => handleToggleActive(deal._id)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            deal.isActive
                              ? "hover:bg-orange-50 text-orange-400 hover:text-orange-600"
                              : "hover:bg-green-50 text-gray-400 hover:text-green-600"
                          }`}
                          title={deal.isActive ? "Deactivate" : "Activate"}
                        >
                          {deal.isActive
                            ? <ToggleRight className="w-4 h-4" />
                            : <ToggleLeft className="w-4 h-4" />
                          }
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => setDeleteId(deal._id)}
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
      {viewDeal && (
        <FlightDealViewModal deal={viewDeal} onClose={() => setViewDeal(null)} />
      )}

      {modalId && (
        <FlightDealFormModal
          key={modalId}
          editId={modalId === "new" ? null : modalId}
          onClose={() => setModalId(null)}
          onSuccess={() => fetchDeals(page)}
        />
      )}

      {/* Delete Confirm Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
            <h3 className="text-base font-semibold text-gray-800 mb-2">Delete Flight Deal?</h3>
            <p className="text-sm text-gray-500 mb-6">
              This action cannot be undone. The flight deal and its image will be permanently removed.
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