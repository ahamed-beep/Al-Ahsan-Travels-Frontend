"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Search, Eye, Trash2, RefreshCw, ChevronLeft, ChevronRight, 
  Filter, X, Mail, Phone, User, Calendar, CheckCircle, 
  Circle, MessageSquare, Inbox, Reply, Star
} from "lucide-react";
import {
  API_CONTACT_INQUIRIES,
  API_CONTACT_BY_ID,
  API_CONTACT_MARK_READ,
  API_CONTACT_MARK_REPLIED,
  API_CONTACT_STATS,
} from "@/constants/api";
import ContactViewModal from "./ContactViewModal";
import axiosInstance from "@/lib/axios";

export default function ContactInquiriesManager() {
  const [inquiries, setInquiries] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterRead, setFilterRead] = useState("");
  const [filterReplied, setFilterReplied] = useState("");
  const [stats, setStats] = useState(null);
  
  const [viewInquiry, setViewInquiry] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const LIMIT = 10;

  // Fetch stats
  const fetchStats = useCallback(async () => {
    try {
      const { data } = await axiosInstance.get(API_CONTACT_STATS);
      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  }, []);

  // Fetch inquiries
  const fetchInquiries = useCallback(async (pg = page) => {
    setLoading(true);
    try {
      const params = { page: pg, limit: LIMIT };
      if (search) params.search = search;
      if (filterRead !== "") params.isRead = filterRead === "read";
      if (filterReplied !== "") params.isReplied = filterReplied === "replied";
      
      const { data } = await axiosInstance.get(API_CONTACT_INQUIRIES, { params });
      console.log("Inquiries Response:", data);
      
      setInquiries(data.data ?? []);
      setTotal(data.total ?? 0);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      setInquiries([]);
    } finally {
      setLoading(false);
    }
  }, [page, search, filterRead, filterReplied]);

  useEffect(() => {
    fetchInquiries(page);
    fetchStats();
  }, [page, search, filterRead, filterReplied]);

  const handleMarkAsRead = async (id) => {
    try {
      await axiosInstance.patch(API_CONTACT_MARK_READ(id));
      fetchInquiries(page);
      fetchStats();
    } catch (error) {
      console.error("Failed to mark as read:", error);
    }
  };

  const handleMarkAsReplied = async (id) => {
    try {
      await axiosInstance.patch(API_CONTACT_MARK_REPLIED(id));
      fetchInquiries(page);
      fetchStats();
    } catch (error) {
      console.error("Failed to mark as replied:", error);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await axiosInstance.delete(API_CONTACT_BY_ID(deleteId));
      setDeleteId(null);
      fetchInquiries(page);
      fetchStats();
    } catch (error) {
      console.error("Failed to delete:", error);
    } finally {
      setDeleting(false);
    }
  };

  const resetFilters = () => {
    setSearch("");
    setFilterRead("");
    setFilterReplied("");
    setPage(1);
  };

  const totalPages = Math.ceil(total / LIMIT);
  const hasActiveFilters = search || filterRead !== "" || filterReplied !== "";

  // Get unread count
  const unreadCount = stats?.unread || 0;

  return (
    <div className="space-y-5">

      {/* Header with Stats */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Contact Inquiries</h2>
          <p className="text-xs text-gray-400 mt-0.5">{total} total inquiries</p>
        </div>
        <div className="flex gap-3">
          {stats && (
            <>
              <div className="bg-blue-50 rounded-lg px-4 py-2 text-center">
                <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
                <p className="text-xs text-gray-500">Total</p>
              </div>
              <div className="bg-yellow-50 rounded-lg px-4 py-2 text-center">
                <p className="text-2xl font-bold text-yellow-600">{stats.unread}</p>
                <p className="text-xs text-gray-500">Unread</p>
              </div>
              <div className="bg-green-50 rounded-lg px-4 py-2 text-center">
                <p className="text-2xl font-bold text-green-600">{stats.replied}</p>
                <p className="text-xs text-gray-500">Replied</p>
              </div>
              <div className="bg-purple-50 rounded-lg px-4 py-2 text-center">
                <p className="text-2xl font-bold text-purple-600">{stats.today}</p>
                <p className="text-xs text-gray-500">Today</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <div className="flex flex-wrap gap-3 items-center">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
              placeholder="Search by name, email, or phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-2 top-1/2 -translate-y-1/2">
                <X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          {/* Read filter */}
          <select
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
            value={filterRead}
            onChange={(e) => { setFilterRead(e.target.value); setPage(1); }}
          >
            <option value="">All Status</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
          </select>

          {/* Replied filter */}
          <select
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
            value={filterReplied}
            onChange={(e) => { setFilterReplied(e.target.value); setPage(1); }}
          >
            <option value="">All Reply Status</option>
            <option value="replied">Replied</option>
            <option value="not_replied">Not Replied</option>
          </select>

          {/* Refresh */}
          <button
            onClick={() => fetchInquiries(page)}
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
        ) : inquiries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <Inbox className="w-10 h-10 mb-3 opacity-30" />
            <p className="text-sm">No inquiries found</p>
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
                  
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Customer
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Contact
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Message
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Travel Date
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Reply Status
                  </th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {inquiries.map((inquiry) => (
                  <tr 
                    key={inquiry._id} 
                    className={`hover:bg-gray-50/50 transition-colors ${!inquiry.isRead ? "bg-blue-50/30" : ""}`}
                  >
              

                    {/* Customer Info */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <User className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{inquiry.fullName}</p>
                          <p className="text-xs text-gray-400">{new Date(inquiry.createdAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </td>

                    {/* Contact Info */}
                    <td className="px-4 py-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-xs">
                          <Mail className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-600">{inquiry.email}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <Phone className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-600">{inquiry.phone}</span>
                        </div>
                      </div>
                    </td>

                    {/* Message Preview */}
                    <td className="px-4 py-3">
                      <p className="text-gray-600 text-sm line-clamp-2 max-w-xs">
                        {inquiry.message}
                      </p>
                    </td>

                    {/* Travel Date */}
                    <td className="px-4 py-3">
                      {inquiry.travelDate ? (
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                          <Calendar className="w-3 h-3" />
                          {new Date(inquiry.travelDate).toLocaleDateString()}
                        </div>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                     </td>

                    {/* Reply Status */}
                    <td className="px-4 py-3">
                      {inquiry.isReplied ? (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                          <CheckCircle className="w-3 h-3" />
                          Replied
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700">
                          <Reply className="w-3 h-3" />
                          Pending
                        </span>
                      )}
                     </td>

                    {/* Actions */}
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        {/* View */}
                        <button
                          onClick={() => setViewInquiry(inquiry)}
                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {/* Mark as Read */}
                        {!inquiry.isRead && (
                          <button
                            onClick={() => handleMarkAsRead(inquiry._id)}
                            className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 hover:text-blue-600 transition-colors"
                            title="Mark as Read"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        )}

                        {/* Mark as Replied */}
                        {!inquiry.isReplied && (
                          <button
                            onClick={() => handleMarkAsReplied(inquiry._id)}
                            className="p-1.5 rounded-lg hover:bg-green-50 text-green-500 hover:text-green-600 transition-colors"
                            title="Mark as Replied"
                          >
                            <Reply className="w-4 h-4" />
                          </button>
                        )}

                        {/* Delete */}
                        <button
                          onClick={() => setDeleteId(inquiry._id)}
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
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1)
                .map((item) => (
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
                ))}
              {totalPages > 5 && <span className="text-gray-400">...</span>}
              {totalPages > 5 && (
                <button
                  onClick={() => setPage(totalPages)}
                  className={`min-w-[32px] h-8 rounded-lg text-sm font-medium transition-colors ${
                    page === totalPages
                      ? "bg-blue-600 text-white"
                      : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {totalPages}
                </button>
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

      {/* View Modal */}
      {viewInquiry && (
        <ContactViewModal 
          inquiry={viewInquiry} 
          onClose={() => setViewInquiry(null)}
          onMarkAsRead={() => handleMarkAsRead(viewInquiry._id)}
          onMarkAsReplied={() => handleMarkAsReplied(viewInquiry._id)}
          onRefresh={() => fetchInquiries(page)}
        />
      )}

      {/* Delete Confirm Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
            <h3 className="text-base font-semibold text-gray-800 mb-2">Delete Inquiry?</h3>
            <p className="text-sm text-gray-500 mb-6">
              This action cannot be undone. The inquiry will be permanently removed.
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