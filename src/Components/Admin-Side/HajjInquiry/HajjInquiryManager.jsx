"use client";
import { useState, useEffect, useCallback } from "react";
import { RefreshCw, Eye, MailOpen, Trash2, Search } from "lucide-react";
import axiosInstance from "@/lib/axios";
import {
  API_HAJJ_INQUIRIES_ALL,
  API_HAJJ_INQUIRY_BY_ID,
  API_HAJJ_INQUIRY_MARK_READ,
} from "@/constants/api";
import DeleteModal from "@/Components/Client-Side/ui/DeleteModal";
import ViewModal from "@/Components/Client-Side/ui/ViewModal";
import DataTable from "@/Components/Client-Side/ui/DataTable";
import useDebounce from "@/Components/Client-Side/hooks/useDebounce";

const CATEGORY_FILTERS = [
  { value: "",       label: "All" },
  { value: "hajj",   label: "Hajj" },
  { value: "flight", label: "Only Flights" },
  // { value: "umrah", label: "Umrah" }, // Umrah add karte waqt uncomment karo
];

const CATEGORY_LABELS = {
  hajj:   "Hajj",
  flight: "Only Flights",
  umrah:  "Umrah",
};

export default function HajjInquiryManager() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [viewItem, setViewItem]   = useState(null);
  const [deleteId, setDeleteId]   = useState(null);
  const [deleting, setDeleting]   = useState(false);
  const [category, setCategory]   = useState("");
  const [search, setSearch]       = useState("");
  const debouncedSearch           = useDebounce(search, 500);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const params = {};
      if (category) params.inquiryType = category;
      if (debouncedSearch.trim()) params.search = debouncedSearch.trim();

      const res  = await axiosInstance.get(API_HAJJ_INQUIRIES_ALL, { params });
      const list = Array.isArray(res.data) ? res.data : (res.data.data ?? []);
      setInquiries(list);
    } catch (err) {
      console.error("Hajj Inquiries fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, [category, debouncedSearch]);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const handleMarkRead = async (id) => {
    try {
      await axiosInstance.patch(API_HAJJ_INQUIRY_MARK_READ(id));
      fetchAll();
    } catch (err) { console.error(err); }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await axiosInstance.delete(API_HAJJ_INQUIRY_BY_ID(deleteId));
      setDeleteId(null);
      fetchAll();
    } catch (err) { console.error(err); }
    finally { setDeleting(false); }
  };

  const columns = [
    { key: "fullName",        label: "Name",     render: (row) => (
        <span className={`font-medium ${row.status === "new" ? "text-blue-700" : "text-gray-800"}`}>
          {row.fullName}
        </span>
      )
    },
    {
      key: "inquiryType", label: "Category",
      render: (row) => (
        <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs rounded-full font-medium">
          {CATEGORY_LABELS[row.inquiryType] || "Hajj"}
        </span>
      ),
    },
    { key: "phoneNumber",     label: "Phone" },
    { key: "packageType",     label: "Package",  render: (row) => row.packageType     || "—" },
    { key: "hotelCategory",   label: "Hotel",    render: (row) => row.hotelCategory   || "—" },
    { key: "departureDate",   label: "Departure",render: (row) => row.departureDate   || "—" },
    { key: "departureAirport",label: "Airport",  render: (row) => row.departureAirport|| "—" },
    { key: "adults",          label: "Adults"  },
    { key: "children",        label: "Children" },
    {
      key: "status", label: "Status",
      render: (row) => row.status === "new"
        ? <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">New</span>
        : <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">Read</span>,
    },
    {
      key: "actions", label: "Actions",
      render: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => setViewItem(row)}
            className="px-3 py-1.5 text-xs rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 font-medium flex items-center gap-1"
          >
            <Eye className="w-3 h-3" /> View
          </button>
          {row.status === "new" && (
            <button
              onClick={() => handleMarkRead(row.id ?? row._id)}
              className="px-3 py-1.5 text-xs rounded-lg bg-green-50 text-green-600 hover:bg-green-100 font-medium flex items-center gap-1"
            >
              <MailOpen className="w-3 h-3" /> Read
            </button>
          )}
          <button
            onClick={() => setDeleteId(row.id ?? row._id)}
            className="px-3 py-1.5 text-xs rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-medium flex items-center gap-1"
          >
            <Trash2 className="w-3 h-3" /> Del
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Hajj Inquiries</h1>
          <p className="text-sm text-gray-500 mt-0.5">{inquiries.length} total</p>
        </div>
        <button
          onClick={fetchAll}
          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex gap-1 rounded-xl border border-gray-200 p-1">
          {CATEGORY_FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setCategory(f.value)}
              className={`rounded-lg px-4 py-1.5 text-sm font-medium transition ${
                category === f.value
                  ? "bg-[#1C398E] text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, phone, airport..."
            className="h-10 w-64 rounded-xl border border-gray-200 pl-9 pr-3 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
          />
        </div>
      </div>

      {/* Reusable DataTable */}
      <DataTable columns={columns} data={inquiries} loading={loading} />

      {/* View Modal */}
      {viewItem && (
        <ViewModal title="Hajj Inquiry Details" onClose={() => setViewItem(null)}>
          <div className="space-y-3 text-sm">
            {[
              ["Category",        CATEGORY_LABELS[viewItem.inquiryType] || "Hajj"],
              ["Full Name",       viewItem.fullName],
              ["Phone",           viewItem.phoneNumber],
              ["Package Type",    viewItem.packageType],
              ["Hotel Category",  viewItem.hotelCategory],
              ["Departure Date",  viewItem.departureDate],
              ["Airport",         viewItem.departureAirport],
              ["Adults",          viewItem.adults],
              ["Children",        viewItem.children],
              ["Status",          viewItem.status],
            ].filter(([, val]) => val != null && val !== "").map(([label, val]) => (
              <div key={label} className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500 font-medium">{label}</span>
                <span className="text-gray-800 text-right">{val}</span>
              </div>
            ))}
          </div>
        </ViewModal>
      )}

      {/* Delete Modal */}
      {deleteId && (
        <DeleteModal
          onConfirm={handleDelete}
          onClose={() => setDeleteId(null)}
          loading={deleting}
        />
      )}

    </div>
  );
}