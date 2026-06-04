"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaPassport, FaBus, FaStar, FaUtensils, FaUser } from "react-icons/fa";
import axiosInstance from "@/lib/axios";
import { API_SHIFTING_HAJJ } from "@/constants/api";

const TAG_ICONS = {
  Visa: <FaPassport size={12} />,
  Transport: <FaBus size={12} />,
  Meals: <FaUtensils size={12} />,
  Guide: <FaUser size={12} />,
};

export default function Packages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(API_SHIFTING_HAJJ)
      .then((res) => {
        const list = Array.isArray(res.data) ? res.data : (res.data.data ?? []);
        setPackages(
          list
            .filter((p) => p.status === "active")
            .sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
        );
      })
      .catch((err) => console.error("Shifting Hajj fetch error:", err));
  }, []);

  return (
    <div className="bg-[#FAFAFA] py-10 sm:py-14 px-3 sm:px-6 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1F1F1F] text-center">
        Choose Your Package
      </h2>
      <p className="text-xs sm:text-sm text-[#4A5565] mb-8 sm:mb-10 text-center max-w-md">
        Select the package that best fits your needs and budget
      </p>

      <div className="w-full max-w-5xl md:px-25 space-y-5 sm:space-y-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id ?? pkg._id}
            className="bg-[#ffffff] rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-[#E5E7EB]"
          >
            {/* Popular Badge */}
            {pkg.popular && (
              <div className="bg-[#243E8B] text-[#ffffff] text-[10px] sm:text-xs text-center py-1">
                <FaStar className="inline-block mr-1 text-yellow-400 mb-1" size={12} />
                Most Popular Choice
              </div>
            )}

            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="w-full lg:w-1/2 h-50 sm:h-52 lg:h-auto relative">
                <Image
                  src={pkg.imageUrl} alt={pkg.title}
                  fill
                  className="object-cover" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#1F1F1F]">
                    {pkg.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A5565] mb-3">
                    {pkg.duration}
                  </p>

                  {/* Locations */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4">
                    {pkg.locations?.map((loc) => (
                      <div key={loc} className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#C6D7FC] flex items-center justify-center flex-shrink-0">
                          <IoLocationOutline size={14} className="text-[#1C398E]" />
                        </span>
                        {loc}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap text-[#1F1F1F] gap-2 mb-4">
                    {pkg.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 bg-[#C6D7FC] px-2 sm:px-3 py-1 sm:text-xs rounded-lg text-[#1C398E]"
                      >
                        {TAG_ICONS[tag] ?? null}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price + Button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3">
                  <div>
                    <p className="text-[10px] sm:text-xs text-[#6A7282]">From</p>
                    <h4 className="text-lg sm:text-xl font-bold text-[#1C398E]">
                      {pkg.currency} {pkg.price?.toLocaleString()}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-[#6A7282]">{pkg.perPersonText}</p>
                  </div>

                  <button
                    onClick={() => window.open(`https://wa.me/447440064066`, "_blank")}
                    className="w-full sm:w-auto mr-40 flex justify-center items-center gap-2 bg-[#25D366] text-[#ffffff] px-4 py-2 rounded-lg text-xs sm:text-sm"
                  >
                    <FaWhatsapp /> WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}