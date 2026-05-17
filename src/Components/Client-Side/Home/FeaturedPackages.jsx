"use client";

import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import { API_PACKAGES } from "@/constants/api";

function PackageCard({ pkg }) {
  const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(
    `Hello, I am interested in the ${pkg.title} package (${pkg.duration}) starting from ${pkg.currency} ${pkg.price}. Please share details.`
  )}`;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img
          src={pkg.imageUrl}
          alt={pkg.title}
          className="w-full h-56 object-cover"
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
          className="mt-4 flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-semibold text-sm py-3 rounded-xl hover:bg-[#1ebe5d] transition-colors duration-150"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

// Skeleton loader
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
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

export default function FeaturedPackages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [showAll, setShowAll]   = useState(false);
  const [current, setCurrent]   = useState(0);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axiosInstance.get(API_PACKAGES);
        // sirf active packages dikhao
        const active = res.data.filter((p) => p.status === "active");
        setPackages(active);
      } catch {
        console.error("Packages load nahi hue");
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const total = packages.length;
  const prev  = () => setCurrent((c) => Math.max(c - 1, 0));
  const next  = () => setCurrent((c) => Math.min(c + 1, total - 1));
  const slicedCards = packages.slice(current, current + 3);

  return (
    <section id="Packages" className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-3">
          Featured Packages
        </h2>
        <p className="text-[#4A5565] mb-12 text-sm md:text-base">
          Carefully curated journeys designed for your spiritual comfort
        </p>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
          </div>
        ) : packages.length === 0 ? (
          <p className="text-gray-400 py-10">Abhi koi package available nahi hai</p>
        ) : showAll ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-3">

            <div className="flex-shrink-0 w-8 sm:w-10 flex justify-center">
              {current > 0 && (
                <button
                  onClick={prev}
                  className="bg-white border border-gray-200 shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#1C398E] hover:text-white transition"
                >
                  <ChevronLeft size={18} />
                </button>
              )}
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {slicedCards.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
            </div>

            <div className="flex-shrink-0 w-8 sm:w-10 flex justify-center">
              {current + 3 < total && (
                <button
                  onClick={next}
                  className="bg-white border border-gray-200 shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#1C398E] hover:text-white transition"
                >
                  <ChevronRight size={18} />
                </button>
              )}
            </div>

          </div>
        )}

        {!loading && packages.length > 0 && (
          <div className="mt-12">
            <button
              onClick={() => { setShowAll((p) => !p); setCurrent(0); }}
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