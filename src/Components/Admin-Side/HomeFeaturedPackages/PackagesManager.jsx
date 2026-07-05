"use client";

import { useState, useEffect } from "react";
import { Eye, Pencil, Trash2, Plus, ToggleLeft, ToggleRight } from "lucide-react";
import axiosInstance from "@/lib/axios";
import {
  API_PACKAGES,
  API_PACKAGE_BY_ID,
  API_PACKAGE_TOGGLE,
} from "@/constants/api";
import PackageForm from "./PackageForm";
import DataTable from "@/Components/Client-Side/ui/DataTable";
import ViewModal from "@/Components/Client-Side/ui/ViewModal";
import DeleteModal from "@/Components/Client-Side/ui/DeleteModal";

export default function PackagesManager() {
  const [packages, setPackages]       = useState([]);
  const [loading, setLoading]         = useState(true);
  const [viewItem, setViewItem]       = useState(null);
  const [editItem, setEditItem]       = useState(null);
  const [deleteItem, setDeleteItem]   = useState(null);
  const [deleting, setDeleting]       = useState(false);
  const [showForm, setShowForm]       = useState(false);
  const [toggling, setToggling]       = useState(null);

  const fetchPackages = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(API_PACKAGES);
      setPackages(res.data);
    } catch {
  console.error("Failed to load packages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPackages(); }, []);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await axiosInstance.delete(API_PACKAGE_BY_ID(deleteItem.id));
      setDeleteItem(null);
      fetchPackages();
    } catch {
  console.error("Failed to delete");
    } finally {
      setDeleting(false);
    }
  };

  const handleToggle = async (pkg) => {
    setToggling(pkg.id);
    try {
      await axiosInstance.patch(API_PACKAGE_TOGGLE(pkg.id));
      fetchPackages();
    } catch {
console.error("Toggle fail hua");
    } finally {
      setToggling(null);
    }
  };

  const columns = [
    {
      key: "imageUrl",
      label: "Image",
      render: (row) => (
        <img
          src={row.imageUrl}
          alt={row.title}
          className="w-12 h-10 object-cover rounded-lg"
        />
      ),
    },
    { key: "title", label: "Title" },
    {
      key: "price",
      label: "Price",
      render: (row) => `${row.currency} ${row.price}`,
    },
    { key: "duration", label: "Duration" },
    {
      key: "tags",
      label: "Tags",
      render: (row) => (
        <div className="flex flex-wrap gap-1">
          {row.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          row.status === "active"
            ? "bg-green-50 text-green-600"
            : "bg-red-50 text-red-500"
        }`}>
          {row.status}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewItem(row)}
            className="p-1.5 rounded hover:bg-gray-100 text-gray-500"
            title="View"
          >
            <Eye className="w-4 h-4" />
          </button>

          <button
            onClick={() => { setEditItem(row); setShowForm(true); }}
            className="p-1.5 rounded hover:bg-blue-50 text-blue-500"
            title="Edit"
          >
            <Pencil className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleToggle(row)}
            disabled={toggling === row.id}
            className="p-1.5 rounded hover:bg-yellow-50 text-yellow-500"
            title="Toggle Status"
          >
            {row.status === "active"
              ? <ToggleRight className="w-4 h-4" />
              : <ToggleLeft className="w-4 h-4" />
            }
          </button>

          <button
            onClick={() => setDeleteItem(row)}
            className="p-1.5 rounded hover:bg-red-50 text-red-500"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Packages</h2>
        <button
          onClick={() => { setEditItem(null); setShowForm(true); }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          Add Package
        </button>
      </div>

      <DataTable columns={columns} data={packages} loading={loading} />

      {viewItem && (
        <ViewModal title="Package Detail" onClose={() => setViewItem(null)}>
          <div className="space-y-4">
            <img
              src={viewItem.imageUrl}
              alt={viewItem.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Detail label="Title"    value={viewItem.title} />
              <Detail label="Price"    value={`${viewItem.currency} ${viewItem.price}`} />
              <Detail label="Duration" value={viewItem.duration} />
              <Detail label="Status"   value={viewItem.status} />
              <Detail label="Per Person" value={viewItem.perPersonText} />
              <Detail label="Created"  value={new Date(viewItem.createdAt).toLocaleDateString()} />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2">Tags</p>
              <div className="flex flex-wrap gap-2">
                {viewItem.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ViewModal>
      )}

      {deleteItem && (
        <DeleteModal
        title="Delete this package?"
          message={`"${deleteItem.title}" will be permanently deleted.`}
          onConfirm={handleDelete}
          onClose={() => setDeleteItem(null)}
          loading={deleting}
        />
      )}

      {showForm && (
        <PackageForm
          editData={editItem}
          onClose={() => { setShowForm(false); setEditItem(null); }}
          onSuccess={() => { setShowForm(false); setEditItem(null); fetchPackages(); }}
        />
      )}

    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm font-medium text-gray-700">{value}</p>
    </div>
  );
}