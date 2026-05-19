"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Pencil, Trash2, Eye, ToggleLeft, ToggleRight, ChevronDown, X, Upload, Image as ImageIcon } from "lucide-react";
import { API_MONTHLY_UMRAH, API_MONTHLY_UMRAH_BY_ID, API_MONTHLY_UMRAH_TOGGLE } from "@/constants/api";
import ViewModal from "@/Components/Client-Side/ui/ViewModal";
import DataTable from "@/Components/Client-Side/ui/DataTable";
import DeleteModal from "@/Components/Client-Side/ui/DeleteModal";
import axiosInstance from "@/lib/axios";
import PackageFormModal from "./Packageformmodal";



const MONTHS = ["january","february","march","april","may","june","july","august","september","october","november","december"];
const STAR_CATEGORIES = [3, 4, 5];
const DEFAULT_FEATURES = ["Flights", "Visa", "Transport", "Hotels"];

const emptyPackageItem = { title: "", price: "", duration: "", makkahHotel: "", madinahHotel: "", isActive: true };

const emptyForm = {
  month: "january",
  starCategory: 3,
  sectionTitle: "",
  sectionSubtitle: "",
  isActive: true,
  features: [...DEFAULT_FEATURES],
  packages: [
    { ...emptyPackageItem },
    { ...emptyPackageItem },
    { ...emptyPackageItem },
  ],
};

export default function MonthlyUmrahPackagesManager() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterMonth, setFilterMonth] = useState("");
  const [filterStar, setFilterStar] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [viewTarget, setViewTarget] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => { fetchAll(); }, [filterMonth, filterStar]);

  async function fetchAll() {
    setLoading(true);
    try {
      const params = {};
      if (filterMonth) params.month = filterMonth;
      if (filterStar) params.starCategory = filterStar;
      const res = await axiosInstance.get(API_MONTHLY_UMRAH, { params });
      setRecords(res.data?.data || []);
    } catch {
      setRecords([]);
    } finally {
      setLoading(false);
    }
  }

async function handleToggle(row) {
  try {
    await axiosInstance.patch(API_MONTHLY_UMRAH_TOGGLE(row.id || row._id));
    fetchAll();
  } catch {}
}

async function handleDelete() {
  setDeleteLoading(true);
  try {
    await axiosInstance.delete(API_MONTHLY_UMRAH_BY_ID(deleteTarget.id || deleteTarget._id));
    setDeleteTarget(null);
    fetchAll();
  } catch {} finally {
    setDeleteLoading(false);
  }
}

  const columns = [
    { key: "month",        label: "Month",    render: (r) => <span className="capitalize font-medium">{r.month}</span> },
    { key: "starCategory", label: "Stars",    render: (r) => <span>{"★".repeat(r.starCategory)} {r.starCategory}-Star</span> },
    { key: "sectionTitle", label: "Title",    render: (r) => <span className="text-xs">{r.sectionTitle}</span> },
    { key: "packages",     label: "Packages", render: (r) => <span>{r.packages?.length || 0} options</span> },
    {
      key: "isActive", label: "Status",
      render: (r) => (
        <button onClick={() => handleToggle(r)} className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium ${r.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
          {r.isActive ? <ToggleRight className="w-3 h-3" /> : <ToggleLeft className="w-3 h-3" />}
          {r.isActive ? "Active" : "Inactive"}
        </button>
      ),
    },
    {
      key: "actions", label: "Actions",
      render: (r) => (
        <div className="flex items-center gap-2">
          <button onClick={() => setViewTarget(r)}   className="p-1.5 rounded hover:bg-blue-50 text-blue-500"><Eye className="w-4 h-4" /></button>
          <button onClick={() => { setEditTarget(r); setShowForm(true); }} className="p-1.5 rounded hover:bg-yellow-50 text-yellow-500"><Pencil className="w-4 h-4" /></button>
          <button onClick={() => setDeleteTarget(r)} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 className="w-4 h-4" /></button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Monthly Umrah Packages</h2>
          <p className="text-sm text-gray-400">3, 4, 5 star packages — har month ke liye</p>
        </div>
        <button
          onClick={() => { setEditTarget(null); setShowForm(true); }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" /> Add Package
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        <select
          value={filterMonth}
          onChange={(e) => setFilterMonth(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 capitalize"
        >
          <option value="">All Months</option>
          {MONTHS.map((m) => <option key={m} value={m} className="capitalize">{m}</option>)}
        </select>
        <select
          value={filterStar}
          onChange={(e) => setFilterStar(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600"
        >
          <option value="">All Stars</option>
          {STAR_CATEGORIES.map((s) => <option key={s} value={s}>{s}-Star</option>)}
        </select>
        {(filterMonth || filterStar) && (
          <button onClick={() => { setFilterMonth(""); setFilterStar(""); }} className="text-sm text-red-400 hover:text-red-600">
            Clear
          </button>
        )}
      </div>

      {/* Table */}
      <DataTable columns={columns} data={records} loading={loading} />

      {/* Form Modal */}
      {showForm && (
        <PackageFormModal
          initial={editTarget}
          onClose={() => { setShowForm(false); setEditTarget(null); }}
          onSaved={fetchAll}
        />
      )}

      {/* View Modal */}
      {viewTarget && (
        <ViewModal title={`${viewTarget.sectionTitle}`} onClose={() => setViewTarget(null)}>
          <ViewDetail data={viewTarget} />
        </ViewModal>
      )}

      {/* Delete Modal */}
      {deleteTarget && (
        <DeleteModal
          title="Package Delete karo"
          message={`"${deleteTarget.sectionTitle}" permanently delete ho jayega.`}
          onConfirm={handleDelete}
          onClose={() => setDeleteTarget(null)}
          loading={deleteLoading}
        />
      )}
    </div>
  );
}

// ─── Form Modal ───────────────────────────────────────────────────────────────


function ViewDetail({ data }) {
  return (
    <div className="space-y-4 text-sm">
      <div className="grid grid-cols-2 gap-3">
        <div><span className="text-gray-400 text-xs">Month</span><p className="font-medium capitalize">{data.month}</p></div>
        <div><span className="text-gray-400 text-xs">Star Category</span><p className="font-medium">{"★".repeat(data.starCategory)} {data.starCategory}-Star</p></div>
        <div className="col-span-2"><span className="text-gray-400 text-xs">Section Title</span><p className="font-medium">{data.sectionTitle}</p></div>
        <div className="col-span-2"><span className="text-gray-400 text-xs">Subtitle</span><p className="text-gray-600">{data.sectionSubtitle}</p></div>
        <div className="col-span-2">
          <span className="text-gray-400 text-xs">Features</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {data.features?.map((f) => <span key={f} className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs">{f}</span>)}
          </div>
        </div>
        <div><span className="text-gray-400 text-xs">Status</span><p className={`font-medium ${data.isActive ? "text-green-600" : "text-gray-400"}`}>{data.isActive ? "Active" : "Inactive"}</p></div>
      </div>

      <div>
        <span className="text-gray-400 text-xs block mb-2">Package Options</span>
        <div className="space-y-3">
          {data.packages?.map((pkg, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-3 space-y-2">
              <div className="flex items-center gap-2">
                {pkg.image && <img src={pkg.image} alt="" className="w-12 h-12 rounded-lg object-cover" />}
                <div>
                  <p className="font-medium">{pkg.title}</p>
                  <p className="text-blue-600 font-semibold">{pkg.price}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1 text-xs text-gray-500">
                <span>⏱ {pkg.duration}</span>
                <span>🕌 Makkah: {pkg.makkahHotel}</span>
                <span>🕌 Madinah: {pkg.madinahHotel}</span>
                <span className={pkg.isActive ? "text-green-600" : "text-gray-400"}>{pkg.isActive ? "Active" : "Inactive"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}