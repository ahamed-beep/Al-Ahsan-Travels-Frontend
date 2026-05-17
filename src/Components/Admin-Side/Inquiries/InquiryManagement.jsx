"use client";

import { useState, useEffect, useCallback } from "react";
import { Phone, Calendar, MapPin, Users, Baby, CheckCircle, Clock, RefreshCw, Search } from "lucide-react";
import axiosInstance from "@/lib/axios";
import DeleteModal from "@/Components/Client-Side/ui/DeleteModal";
import ViewModal from "@/Components/Client-Side/ui/ViewModal";
import DataTable from "@/Components/Client-Side/ui/DataTable";
import { API_INQUIRIES_ALL, API_INQUIRY_BY_ID, API_INQUIRY_MARK_READ } from "@/constants/api";

function StatusBadge({ status }) {
  const map = {
    new:  { cls: "bg-amber-100 text-amber-700 border-amber-200",  icon: <Clock className="w-3 h-3" />,       label: "New" },
    read: { cls: "bg-green-100 text-green-700 border-green-200",  icon: <CheckCircle className="w-3 h-3" />, label: "Read" },
  };
  const s = map[status] ?? map.new;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-medium ${s.cls}`}>
      {s.icon}{s.label}
    </span>
  );
}

// ── Inquiry Detail (inside ViewModal) ────────────────────────
function InquiryDetail({ inquiry, onMarkRead }) {
  const id = inquiry._id ?? inquiry.id;
  const fields = [
    { icon: <Phone className="w-4 h-4 text-[#1C398E]" />,    label: "Phone",     val: inquiry.phone },
    { icon: <Calendar className="w-4 h-4 text-[#1C398E]" />, label: "Departure", val: inquiry.departureDate },
    { icon: <MapPin className="w-4 h-4 text-[#1C398E]" />,   label: "Airport",   val: inquiry.departureAirport },
    { icon: <Users className="w-4 h-4 text-[#1C398E]" />,    label: "Adults",    val: inquiry.adults },
    { icon: <Baby className="w-4 h-4 text-[#1C398E]" />,     label: "Children",  val: inquiry.children ?? 0 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-bold text-[#1F1F1F]">{inquiry.fullName}</p>
          <p className="text-xs text-gray-400 mt-0.5">ID: {id}</p>
        </div>
        <StatusBadge status={inquiry.status} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {fields.map(({ icon, label, val }) => (
          <div key={label} className="bg-gray-50 rounded-xl px-4 py-3 flex items-start gap-3">
            <div className="mt-0.5">{icon}</div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">{label}</p>
              <p className="text-sm font-semibold text-[#1F1F1F] mt-0.5">{val || "—"}</p>
            </div>
          </div>
        ))}
        <div className="bg-gray-50 rounded-xl px-4 py-3">
          <p className="text-[10px] text-gray-400 uppercase tracking-wide">Submitted</p>
          <p className="text-sm font-semibold text-[#1F1F1F] mt-0.5">
            {new Date(inquiry.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit", month: "short", year: "numeric",
            })}
          </p>
        </div>
      </div>

      {inquiry.status === "new" && (
        <button
          onClick={() => onMarkRead(id)}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1C398E] text-white text-sm font-semibold hover:bg-[#162d70] transition mt-2"
        >
          <CheckCircle className="w-4 h-4" /> Mark as Read
        </button>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────
export default function InquiryManagement() {
  const [inquiries, setInquiries]         = useState([]);
  const [loading, setLoading]             = useState(true);
  const [filter, setFilter]               = useState("all");
  const [search, setSearch]               = useState("");
  const [viewItem, setViewItem]           = useState(null);
  const [deleteItem, setDeleteItem]       = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(API_INQUIRIES_ALL);
      const list = Array.isArray(res.data) ? res.data : (res.data.data ?? []);
      setInquiries(list);
    } catch (err) {
      console.error("Inquiries load error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchInquiries(); }, [fetchInquiries]);

  const handleMarkRead = async (id) => {
    try {
      await axiosInstance.patch(API_INQUIRY_MARK_READ(id));
      setInquiries((prev) =>
        prev.map((q) => (q._id === id || q.id === id) ? { ...q, status: "read" } : q)
      );
      setViewItem((prev) => prev ? { ...prev, status: "read" } : null);
    } catch (err) {
      console.error("Mark read error:", err);
    }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;
    const id = deleteItem._id ?? deleteItem.id;
    setDeleteLoading(true);
    try {
      await axiosInstance.delete(API_INQUIRY_BY_ID(id));
      setInquiries((prev) => prev.filter((q) => q._id !== id && q.id !== id));
      setDeleteItem(null);
      setViewItem(null);
    } catch (err) {
      console.error("Delete error:", err);
    } finally {
      setDeleteLoading(false);
    }
  };

  const filtered = inquiries
    .filter((q) => filter === "all" || q.status === filter)
    .filter((q) =>
      !search ||
      q.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      q.phone?.includes(search) ||
      q.departureAirport?.toLowerCase().includes(search.toLowerCase())
    );

  const counts = {
    all:  inquiries.length,
    new:  inquiries.filter((q) => q.status === "new").length,
    read: inquiries.filter((q) => q.status === "read").length,
  };

  // ── Table columns definition ──────────────────────────────
  const columns = [
    {
      key: "fullName",
      label: "Name",
      render: (row) => (
        <div className="flex items-center gap-2">
          {row.status === "new" && (
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
          )}
          <span className={row.status === "new" ? "font-semibold text-[#1F1F1F]" : ""}>
            {row.fullName}
          </span>
        </div>
      ),
    },
    { key: "phone",            label: "Phone" },
    { key: "departureDate",    label: "Departure" },
    { key: "departureAirport", label: "Airport" },
    {
      key: "guests",
      label: "Guests",
      render: (row) => `${row.adults ?? 0}A / ${row.children ?? 0}C`,
    },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setViewItem(row)}
            className="px-2.5 py-1 text-xs rounded-lg bg-blue-50 text-[#1C398E] hover:bg-blue-100 transition font-medium"
          >
            View
          </button>
          {row.status === "new" && (
            <button
              onClick={() => handleMarkRead(row._id ?? row.id)}
              className="px-2.5 py-1 text-xs rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition font-medium"
            >
              Mark Read
            </button>
          )}
          <button
            onClick={() => setDeleteItem(row)}
            className="px-2.5 py-1 text-xs rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition font-medium"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-[#1F1F1F]">Inquiries</h1>
          <p className="text-sm text-gray-500 mt-0.5">Quote requests manage karo</p>
        </div>
        <button
          onClick={fetchInquiries}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm text-gray-600 hover:bg-[#1C398E] hover:text-white hover:border-[#1C398E] transition shadow-sm"
        >
          <RefreshCw className="w-4 h-4" /> Refresh
        </button>
      </div>

      {/* Stat filter cards */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { key: "all",  label: "Total", active: "bg-[#1C398E] text-white" },
          { key: "new",  label: "New",   active: "bg-amber-500 text-white" },
          { key: "read", label: "Read",  active: "bg-green-500 text-white" },
        ].map(({ key, label, active }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`rounded-2xl p-4 text-left transition shadow-sm ${
              filter === key
                ? active
                : "bg-white text-[#1F1F1F] border border-gray-200 hover:border-[#1C398E]"
            }`}
          >
            <p className={`text-2xl font-bold ${filter === key ? "" : "text-[#1C398E]"}`}>
              {counts[key]}
            </p>
            <p className={`text-xs mt-0.5 ${filter === key ? "opacity-80" : "text-gray-500"}`}>
              {label}
            </p>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Naam, phone, airport se search karo..."
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#1C398E] shadow-sm"
        />
      </div>

      {/* Shared DataTable */}
      <DataTable columns={columns} data={filtered} loading={loading} />

      {/* Shared ViewModal */}
      {viewItem && (
        <ViewModal title="Inquiry Details" onClose={() => setViewItem(null)}>
          <InquiryDetail inquiry={viewItem} onMarkRead={handleMarkRead} />
          <button
            onClick={() => { setDeleteItem(viewItem); setViewItem(null); }}
            className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-50 text-red-600 border border-red-200 text-sm font-semibold hover:bg-red-100 transition"
          >
            Delete Inquiry
          </button>
        </ViewModal>
      )}

      {/* Shared DeleteModal */}
      {deleteItem && (
        <DeleteModal
          title="Inquiry delete karna chahte ho?"
          message={`"${deleteItem.fullName}" ki inquiry permanently delete ho jaegi.`}
          loading={deleteLoading}
          onConfirm={handleDelete}
          onClose={() => setDeleteItem(null)}
        />
      )}
    </div>
  );
}