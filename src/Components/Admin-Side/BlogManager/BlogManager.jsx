"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Plus, Search, Eye, Pencil, Trash2, Star, Globe, EyeOff,
  X, ImagePlus, Loader2,
} from "lucide-react";
import {
  API_BLOGS_ADMIN_ALL,
  API_BLOGS,
  API_BLOG_BY_ID,
  API_BLOG_TOGGLE_PUBLISH,
  API_BLOG_TOGGLE_FEATURED,
} from "@/constants/api";
import DataTable from "@/Components/Client-Side/ui/DataTable";
import DeleteModal from "@/Components/Client-Side/ui/DeleteModal";
import ViewModal from "@/Components/Client-Side/ui/ViewModal";
import axiosInstance from "@/lib/axios";
import useDebounce from "@/Components/Client-Side/hooks/useDebounce";

const CATEGORIES = ["Destinations", "Travel tips", "Umrah guides"];
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/jpg"];

const EMPTY_FORM = {
  title: "",
  category: "Destinations",
  country: "",
  excerpt: "",
  body: "",
  isPublished: false,
  isFeatured: false,
};

const getErrorMessage = (err, fallback) => {
  const msg = err?.response?.data?.message;
  if (Array.isArray(msg)) return msg.join(", ");
  return msg || fallback;
};

const formatDate = (d) =>
  d
    ? new Date(d).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "—";

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 10, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  // filters
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("All stories");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);

  // modals
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [viewing, setViewing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [busyId, setBusyId] = useState(null);
const search = useDebounce(searchInput.trim(), 500);

useEffect(() => {
  setPage(1);
}, [search]);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const params = { page, limit: 10 };
      if (search) params.search = search;
      if (category !== "All stories") params.category = category;
      if (status !== "all") params.isPublished = status === "published";

      const { data } = await axiosInstance.get(API_BLOGS_ADMIN_ALL, { params });
      setBlogs(data.data || []);
      setMeta(data.meta || { total: 0, page: 1, limit: 10, totalPages: 1 });
    } catch (err) {
      setError(getErrorMessage(err, "Failed to load blogs"));
    } finally {
      setLoading(false);
    }
  }, [page, search, category, status]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(""), 3000);
    return () => clearTimeout(t);
  }, [notice]);

  const openCreate = () => {
    setEditing(null);
    setFormOpen(true);
  };

  const openEdit = (blog) => {
    setEditing(blog);
    setFormOpen(true);
  };

  const handleToggle = async (blog, type) => {
    setBusyId(blog.id + type);
    setError("");
    try {
      const url =
        type === "publish"
          ? API_BLOG_TOGGLE_PUBLISH(blog.id)
          : API_BLOG_TOGGLE_FEATURED(blog.id);
      const { data } = await axiosInstance.patch(url);
      setNotice(data.message || "Updated");
      await fetchBlogs();
    } catch (err) {
      setError(getErrorMessage(err, "Failed to update blog"));
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async () => {
    if (!deleting) return;
    setDeleteLoading(true);
    try {
      const { data } = await axiosInstance.delete(API_BLOG_BY_ID(deleting.id));
      setNotice(data.message || "Blog deleted");
      setDeleting(null);
      // if the last item on this page was deleted, go back one page
      if (blogs.length === 1 && page > 1) setPage((p) => p - 1);
      else await fetchBlogs();
    } catch (err) {
      setError(getErrorMessage(err, "Failed to delete blog"));
      setDeleting(null);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleSaved = async (message) => {
    setFormOpen(false);
    setEditing(null);
    setNotice(message);
    await fetchBlogs();
  };

  const columns = [
    {
      key: "image",
      label: "Image",
      render: (row) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={row.image}
          alt={row.title}
          className="w-14 h-10 object-cover rounded-md border border-gray-200"
        />
      ),
    },
    {
      key: "title",
      label: "Title",
      render: (row) => (
        <div className="max-w-xs">
          <p className="font-medium text-gray-800 truncate">{row.title}</p>
          <p className="text-xs text-gray-400 truncate">/{row.slug}</p>
        </div>
      ),
    },
    { key: "category", label: "Category" },
    { key: "country", label: "Country" },
    {
      key: "isPublished",
      label: "Status",
      render: (row) => (
        <span
          className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
            row.isPublished
              ? "bg-green-50 text-green-600"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {row.isPublished ? "Published" : "Draft"}
        </span>
      ),
    },
    {
      key: "isFeatured",
      label: "Featured",
      render: (row) =>
        row.isFeatured ? (
          <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-600">
            Featured
          </span>
        ) : (
          "—"
        ),
    },
    {
      key: "createdAt",
      label: "Created",
      render: (row) => formatDate(row.createdAt),
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div className="flex items-center gap-1">
          <IconBtn title="View" onClick={() => setViewing(row)}>
            <Eye className="w-4 h-4" />
          </IconBtn>
          <IconBtn title="Edit" onClick={() => openEdit(row)}>
            <Pencil className="w-4 h-4" />
          </IconBtn>
          <IconBtn
            title={row.isPublished ? "Unpublish" : "Publish"}
            onClick={() => handleToggle(row, "publish")}
            disabled={busyId === row.id + "publish"}
          >
            {row.isPublished ? <EyeOff className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
          </IconBtn>
          <IconBtn
            title={row.isFeatured ? "Remove featured" : "Mark as featured"}
            onClick={() => handleToggle(row, "featured")}
            disabled={busyId === row.id + "featured"}
            active={row.isFeatured}
          >
            <Star className={`w-4 h-4 ${row.isFeatured ? "fill-amber-400 text-amber-500" : ""}`} />
          </IconBtn>
          <IconBtn title="Delete" onClick={() => setDeleting(row)} danger>
            <Trash2 className="w-4 h-4" />
          </IconBtn>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Blogs</h1>
          <p className="text-sm text-gray-500">
            Total {meta.total} blog{meta.total === 1 ? "" : "s"}
          </p>
        </div>
        <button
          onClick={openCreate}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Blog
        </button>
      </div>

      {/* Messages */}
      {notice && (
        <div className="px-4 py-2 rounded-lg bg-green-50 text-green-700 text-sm border border-green-100">
          {notice}
        </div>
      )}
      {error && (
        <div className="px-4 py-2 rounded-lg bg-red-50 text-red-600 text-sm border border-red-100 flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => setError("")}>
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by title, country, category..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
          />
        </div>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:border-blue-400"
        >
          <option value="All stories">All stories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:border-blue-400"
        >
          <option value="all">All status</option>
          <option value="published">Published</option>
          <option value="draft">Drafts</option>
        </select>
      </div>

      {/* Table */}
      <DataTable columns={columns} data={blogs} loading={loading} />

      {/* Pagination */}
      {meta.totalPages > 1 && (
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>
            Page {meta.page} of {meta.totalPages}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40"
            >
              Previous
            </button>
            <button
              onClick={() => setPage((p) => Math.min(meta.totalPages, p + 1))}
              disabled={page >= meta.totalPages}
              className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Create / Edit */}
      {formOpen && (
        <BlogFormModal
          blog={editing}
          onClose={() => {
            setFormOpen(false);
            setEditing(null);
          }}
          onSaved={handleSaved}
        />
      )}

      {/* View */}
      {viewing && (
        <ViewModal title="Blog Details" onClose={() => setViewing(null)}>
          <div className="space-y-4 text-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={viewing.image}
              alt={viewing.title}
              className="w-full h-48 object-cover rounded-lg border border-gray-200"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-800">{viewing.title}</h3>
              <p className="text-xs text-gray-400">/{viewing.slug}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Info label="Category" value={viewing.category} />
              <Info label="Country" value={viewing.country} />
              <Info label="Read time" value={viewing.readTime} />
              <Info label="Status" value={viewing.isPublished ? "Published" : "Draft"} />
              <Info label="Featured" value={viewing.isFeatured ? "Yes" : "No"} />
              <Info label="Published at" value={formatDate(viewing.publishedAt)} />
              <Info label="Created" value={formatDate(viewing.createdAt)} />
              <Info label="Updated" value={formatDate(viewing.updatedAt)} />
            </div>
            <Info label="Excerpt" value={viewing.excerpt} />
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Body
              </p>
              <p className="text-gray-700 whitespace-pre-line">{viewing.body}</p>
            </div>
          </div>
        </ViewModal>
      )}

      {/* Delete */}
      {deleting && (
        <DeleteModal
          title="Delete this blog?"
          message={`"${deleting.title}" and its Cloudinary image will be permanently deleted.`}
          onConfirm={handleDelete}
          onClose={() => setDeleting(null)}
          loading={deleteLoading}
        />
      )}
    </div>
  );
}

// ─── Small helpers ───────────────────────────────────────────────────────────
function IconBtn({ children, title, onClick, disabled, danger, active }) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={`p-1.5 rounded-md transition-colors disabled:opacity-40 ${
        danger
          ? "text-red-500 hover:bg-red-50"
          : active
          ? "text-amber-500 hover:bg-amber-50"
          : "text-gray-500 hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
      <p className="text-gray-700">{value || "—"}</p>
    </div>
  );
}

// ─── Create / Edit Form ──────────────────────────────────────────────────────
function BlogFormModal({ blog, onClose, onSaved }) {
  const isEdit = !!blog;

  const [form, setForm] = useState(
    isEdit
      ? {
          title: blog.title || "",
          category: blog.category || "Destinations",
          country: blog.country || "",
          excerpt: blog.excerpt || "",
          body: blog.body || "",
          isPublished: !!blog.isPublished,
          isFeatured: !!blog.isFeatured,
        }
      : EMPTY_FORM
  );
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(isEdit ? blog.image : "");
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  // blob URL cleanup
  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const setField = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setFormError("Only JPG, PNG, or WebP images are allowed");
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      setFormError("Image must be smaller than 5MB");
      return;
    }

    setFormError("");
    if (preview && preview.startsWith("blob:")) URL.revokeObjectURL(preview);
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!form.title.trim()) return setFormError("Title is required");
    if (!form.country.trim()) return setFormError("Country is required");
    if (!form.excerpt.trim()) return setFormError("Excerpt is required");
    if (!form.body.trim()) return setFormError("Body is required");
    if (!isEdit && !imageFile) return setFormError("Image is required");

    const fd = new FormData();
    fd.append("title", form.title.trim());
    fd.append("category", form.category);
    fd.append("country", form.country.trim());
    fd.append("excerpt", form.excerpt.trim());
    fd.append("body", form.body.trim());
    fd.append("isPublished", String(form.isPublished));
    fd.append("isFeatured", String(form.isFeatured));
    if (imageFile) fd.append("image", imageFile);

    setSaving(true);
    try {
      const { data } = isEdit
        ? await axiosInstance.patch(API_BLOG_BY_ID(blog.id), fd)
        : await axiosInstance.post(API_BLOGS, fd);
      onSaved(data.message || (isEdit ? "Blog updated" : "Blog created"));
    } catch (err) {
      setFormError(getErrorMessage(err, "Failed to save blog"));
    } finally {
      setSaving(false);
    }
  };

  const inputCls =
    "w-full px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[92vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-800">
            {isEdit ? "Edit Blog" : "Add New Blog"}
          </h2>
          <button
            onClick={onClose}
            disabled={saving}
            className="p-1 rounded hover:bg-gray-100 text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col min-h-0">
          <div className="overflow-y-auto px-6 py-4 space-y-4">
            {formError && (
              <div className="px-3 py-2 rounded-lg bg-red-50 text-red-600 text-sm border border-red-100">
                {formError}
              </div>
            )}

            {/* Image */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Image {!isEdit && <span className="text-red-500">*</span>}
              </label>
              <label className="relative flex flex-col items-center justify-center h-44 rounded-xl border-2 border-dashed border-gray-200 hover:border-blue-400 cursor-pointer overflow-hidden bg-gray-50 transition-colors">
                {preview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={preview} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center text-gray-400">
                    <ImagePlus className="w-8 h-8 mb-1" />
                    <span className="text-sm">Select an image</span>
                    <span className="text-xs">JPG, PNG, WebP (max 5MB)</span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleImage}
                  className="hidden"
                />
              </label>
              {isEdit && (
                <p className="text-xs text-gray-400 mt-1">
                  Selecting a new image will replace the current one.
                </p>
              )}
            </div>

            {/* Title */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                value={form.title}
                onChange={(e) => setField("title", e.target.value)}
                maxLength={200}
                className={inputCls}
                placeholder="Blog title"
              />
            </div>

            {/* Category + Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setField("category", e.target.value)}
                  className={inputCls}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  value={form.country}
                  onChange={(e) => setField("country", e.target.value)}
                  className={inputCls}
                  placeholder="Saudi Arabia"
                />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Excerpt <span className="text-red-500">*</span>
                <span className="ml-2 normal-case font-normal text-gray-400">
                  {form.excerpt.length}/400
                </span>
              </label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setField("excerpt", e.target.value)}
                maxLength={400}
                rows={3}
                className={inputCls}
                placeholder="Short summary"
              />
            </div>

            {/* Body */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Body <span className="text-red-500">*</span>
              </label>
              <textarea
                value={form.body}
                onChange={(e) => setField("body", e.target.value)}
                rows={8}
                className={inputCls}
                placeholder="Full article content"
              />
            </div>

            {/* Toggles */}
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.isPublished}
                  onChange={(e) => setField("isPublished", e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                Publish
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.isFeatured}
                  onChange={(e) => setField("isFeatured", e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                Mark as featured
              </label>
            </div>
          </div>

          <div className="flex gap-3 px-6 py-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="flex-1 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
            >
              {saving && <Loader2 className="w-4 h-4 animate-spin" />}
              {saving ? "Saving..." : isEdit ? "Update Blog" : "Create Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}