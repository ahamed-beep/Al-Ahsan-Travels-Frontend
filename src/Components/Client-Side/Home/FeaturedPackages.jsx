"use client";

import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useMemo, useCallback } from "react";
import axiosInstance from "@/lib/axios";
import { API_PACKAGES } from "@/constants/api";

// ─── Config ───────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "447440064066";
const CARDS_PER_PAGE  = 3;

// ─── PackageCard ──────────────────────────────────────────────────────────────
function PackageCard({ pkg }) {
  // useMemo: URL sirf pkg badlne par recalculate hoga
  const whatsappUrl = useMemo(
    () =>
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hello, I am interested in the ${pkg.title} package (${pkg.duration}) starting from ${pkg.currency} ${pkg.price}. Please share details.`
      )}`,
    [pkg.title, pkg.duration, pkg.currency, pkg.price]
  );

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img
          src={pkg.imageUrl}
          alt={pkg.title}
          className="w-full h-56 object-cover"
          loading="lazy"           // ← FIX: lazy loading add kiya
          width={400}
          height={224}
        />
        <span className="absolute top-4 right-4 bg-[#1C398E] text-white text-xs px-3 py-1 rounded-full shadow">
          {pkg.duration}
        </span>
      </div>

      <div className="p-5 text-left flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-[#1F1F1F] mb-2">{pkg.title}</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {pkg.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-gray-100 text-[#4A5565] px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <p className="text-xs text-[#4A5565]">Starting from</p>
          <h4 className="text-xl font-bold text-[#1C398E]">
            {pkg.currency} {pkg.price.toLocaleString()}
          </h4>
          <p className="text-xs text-[#4A5565]">{pkg.perPersonText}</p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp inquiry for ${pkg.title}`}   // ← FIX: accessibility
          className="mt-4 flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-semibold text-sm py-3 rounded-xl hover:bg-[#1ebe5d] transition-colors duration-150"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

// ─── SkeletonCard ─────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse" aria-hidden="true">
      <div className="w-full h-56 bg-gray-200" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 rounded w-16" />
          <div className="h-6 bg-gray-200 rounded w-16" />
        </div>
        <div className="h-6 bg-gray-200 rounded w-1/3" />
        <div className="h-10 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
}

// ─── FeaturedPackages ─────────────────────────────────────────────────────────
export default function FeaturedPackages() {
  const [allPackages, setAllPackages] = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);    // ← FIX: error state
  const [showAll, setShowAll]         = useState(false);
  const [current, setCurrent]         = useState(0);

  // FIX: AbortController — unmount pe fetch cancel hogi
  useEffect(() => {
    const controller = new AbortController();

    const fetchPackages = async () => {
      try {
        const res = await axiosInstance.get(API_PACKAGES, {
          signal: controller.signal,
        });
        const active = res.data.filter((p) => p.status === "active");
        setAllPackages(active);
        setError(null);
      } catch (err) {
        if (err.name !== "CanceledError" && err.name !== "AbortError") {
          console.error("Packages load nahi hue:", err);
          setError("No Package Available");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
    return () => controller.abort();
  }, []);

  // FIX: useMemo — active list already filtered hai, slice bhi memoize
  const visiblePackages = useMemo(
    () => (showAll ? allPackages : allPackages.slice(current, current + CARDS_PER_PAGE)),
    [allPackages, showAll, current]
  );

  const total = allPackages.length;

  // FIX: useCallback — handlers stable rahenge
  const prev = useCallback(
    () => setCurrent((c) => Math.max(c - 1, 0)),
    []
  );
  const next = useCallback(
    () => setCurrent((c) => Math.min(c + 1, total - CARDS_PER_PAGE)),
    [total]
  );
  const toggleShowAll = useCallback(() => {
    setShowAll((p) => !p);
    setCurrent(0);
  }, []);

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <section id="FeaturedPackages" className="bg-white py-16  sm:px-6 lg:px-12">
      <div className=" mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-3">
          Featured Packages
        </h2>
        <p className="text-[#4A5565] mb-12 text-sm md:text-base">
          Carefully curated journeys designed for your spiritual comfort
        </p>

        {/* Loading */}
        {loading && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            aria-busy="true"
            aria-label="Package In Process"
          >
            {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {!loading && error && (
          <div
            role="alert"
            className="py-10 text-red-500 flex flex-col items-center gap-3"
          >
            <p>{error}</p>
            <button
              onClick={() => { setError(null); setLoading(true); }}
              className="bg-[#1C398E] text-white px-4 py-2 rounded-full text-sm hover:bg-[#162d70] transition"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && total === 0 && (
          <p className="text-gray-400 py-10">No Package Available</p>
        )}

        {/* Show All grid */}
        {!loading && !error && total > 0 && showAll && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPackages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        )}

        {/* Carousel */}
        {!loading && !error && total > 0 && !showAll && (
          <div
            className="flex items-center  sm:gap-3"
            role="region"
            aria-label="Package carousel"
          >
            <div className="flex-shrink-0 w-8 sm:w-10 flex justify-center">
              {current > 0 && (
                <button
                  onClick={prev}
                  aria-label="Previous packages"   
                  className="bg-white border border-gray-200 shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#1C398E] hover:text-white transition"
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePackages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
            </div>

            <div className="flex-shrink-0 w-8 sm:w-10 flex justify-center">
              {current + CARDS_PER_PAGE < total && (
                <button
                  onClick={next}
                  aria-label="Next packages"      
                  className="bg-white border border-gray-200 shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#1C398E] hover:text-white transition"
                >
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* View All / Show Less button */}
        {!loading && !error && total > 0 && (
          <div className="mt-12">
            <button
              onClick={toggleShowAll}
              className="bg-[#1C398E] text-white px-6 py-3 rounded-full text-sm shadow-md hover:bg-[#162d70] transition"
            >
              {showAll ? "Show Less" : "View All Packages"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}