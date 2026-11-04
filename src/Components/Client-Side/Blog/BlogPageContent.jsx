"use client";
import { useEffect, useState } from "react";
import BlogGridSection from "./BlogGridSection";
import FeaturedBlogSection from "./FeaturedBlogCard";
import axiosInstance from "@/lib/axios";
import { API_BLOGS, API_BLOGS_FEATURED } from "@/constants/api";
import useDebounce from "../hooks/useDebounce";

const PAGE_LIMIT = 9;

export default function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState("All stories");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const [featured, setFeatured] = useState(null);
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: PAGE_LIMIT, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const debouncedSearch = useDebounce(search.trim(), 500);

  // Featured story: fetched once
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await axiosInstance.get(API_BLOGS_FEATURED);
        if (!cancelled) setFeatured(data?.data || null);
      } catch {
        if (!cancelled) setFeatured(null);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Go back to page 1 whenever the filters change
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, activeCategory]);

  // Blog list: the backend does the search, category filter and pagination
  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      setError("");
      try {
        const params = { page, limit: PAGE_LIMIT };
        if (debouncedSearch) params.search = debouncedSearch;
        if (activeCategory !== "All stories") params.category = activeCategory;

        const { data } = await axiosInstance.get(API_BLOGS, { params });
        if (cancelled) return;

        setPosts(data?.data || []);
        setMeta(data?.meta || { total: 0, page: 1, limit: PAGE_LIMIT, totalPages: 1 });
      } catch (err) {
        if (cancelled) return;
        setPosts([]);
        setError(err?.response?.data?.message || "Failed to load articles. Please try again.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    // ignore stale responses if filters change before this request finishes
    return () => {
      cancelled = true;
    };
  }, [page, debouncedSearch, activeCategory]);

  const handlePageChange = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const noResults = !loading && !error && posts.length === 0;

  return (
    <>
      <FeaturedBlogSection
        featured={featured}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        search={search}
        onSearchChange={setSearch}
      />
      <BlogGridSection
        posts={posts}
        loading={loading}
        error={error}
        noResults={noResults}
        meta={meta}
        page={page}
        onPageChange={handlePageChange}
      />
    </>
  );
}