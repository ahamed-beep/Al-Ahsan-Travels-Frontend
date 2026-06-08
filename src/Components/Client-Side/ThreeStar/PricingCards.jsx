"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";
import { API_PRICING_PACKAGES_BY_CATEGORY } from "@/constants/api";

const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function PricingCards({ category }) {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(API_PRICING_PACKAGES_BY_CATEGORY(category));
        setPackages(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load packages");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [category]);

  if (loading) return (
    <section className="bg-[#F7F7F7] py-14 px-4">
      <div className="max-w-6xl mx-auto text-center text-[#1C398E] font-semibold">
        Loading packages...
      </div>
    </section>
  );

  if (error) return (
    <section className="bg-[#F7F7F7] py-14 px-4">
      <div className="max-w-6xl mx-auto text-center text-red-500">{error}</div>
    </section>
  );

  return (
    <section className="bg-[#F7F7F7] py-14 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C398E]">
            Choose Your Package
          </h1>
          <p className="text-sm sm:text-base text-[#1F1F1F] mt-2 font-medium">
            Flexible durations to suit your schedule
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <div key={pkg._id || i} className="flex">
              <div
                className={`relative overflow-visible w-full rounded-2xl border flex flex-col justify-between transition-all duration-300 ${pkg.featured
                  ? "shadow-xl scale-[1.03] pt-8 p-6"
                  : "p-6 hover:shadow-lg"
                  }`}
                style={
                  pkg.featured
                    ? {
                      background: "linear-gradient(135deg, rgba(81,162,255,0.25), rgba(28,57,142,0.18))",
                      borderColor: "rgba(81,162,255,0.45)",
                    }
                    : {
                      background: "#51A2FF26",
                      borderColor: "#FFFFFF33",
                    }
                }
              >
                {pkg.badge && (
                  <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-20">
                    <span className="bg-[#1C398E] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 text-xs text-[#4A5565] font-semibold mb-2">
                    <ClockIcon />
                    {pkg.duration}
                  </div>

                  <h2 className="text-lg font-bold text-[#1C398E]">{pkg.title}</h2>

                  <p className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mt-2">
                    {pkg.price}
                  </p>
                  <p className="text-xs text-[#1C398E99] font-medium mb-4">per person</p>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#1447E6] font-medium">
                        <span className="w-5 h-5 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#51A2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.featured ? (
                  <button
                    onClick={() => window.open('https://wa.me/447440064066', '_blank')}
                    style={{ boxShadow: '0 8px 20px #2B7FFF80' }}
                    className="w-full py-3 rounded-xl bg-[#1C398E] text-white font-bold text-sm transition"                  >
                    Select Package
                  </button>
                ) : (
                  <button
                    onClick={() => window.open('https://wa.me/447440064066', '_blank')}
                    className="w-full py-3 rounded-xl border border-white/30 text-[#1C398E] font-bold text-sm bg-[#FFFFFF1A] transition"                  >
                    Select Package
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}