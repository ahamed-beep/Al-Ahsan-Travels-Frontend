"use client";

import { HiHome } from "react-icons/hi";
import { FiRefreshCw } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { FaDollarSign, FaUsers, FaShieldAlt } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

export default function HajjInfo() {
  const steps = [
    {
      icon: <HiHome size={28} />,
      title: "Stay Near Haram",
      desc: "Begin your journey in comfortable accommodation close to Masjid al-Haram",
    },
    {
      icon: <FiRefreshCw size={28} />,
      title: "Move During Peak Days",
      desc: "Relocate to Azizia district during the main Hajj days (8th–13th Dhul Hijjah)",
    },
    {
      icon: <MdLocationOn size={28} />,
      title: "Return After Hajj",
      desc: "Come back to your near-Haram accommodation to complete your pilgrimage",
    },
  ];

  const benefits = [
    {
      icon: <FaDollarSign />,
      title: "Lower Cost",
      desc: "Save significantly compared to full-duration near-Haram stays",
    },
    {
      icon: <FiTrendingUp />,
      title: "Flexible Options",
      desc: "Choose from various shifting packages based on your budget",
    },
    {
      icon: <FaUsers />,
      title: "Suitable for Groups",
      desc: "Perfect for families and group travelers seeking affordability",
    },
    {
      icon: <FaShieldAlt />,
      title: "Fully Organized",
      desc: "We handle all logistics and accommodation transitions",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] py-12 sm:py-16 px-4">
      {/* ===== Section 1 ===== */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1F1F1F]">
          How Shifting Hajj Works
        </h2>
        <p className="text-xs sm:text-sm text-[#4A5565] mt-2 max-w-xl mx-auto">
          A simple three-step process designed to give you comfort while keeping costs affordable
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Number */}
              <div className="w-12 h-12 rounded-full bg-blue-100 text-[#243E8B] flex items-center justify-center font-semibold mb-3">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="text-[#243E8B] mb-3">{step.icon}</div>

              <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Section 2 ===== */}
      <div className="max-w-6xl bg-[#FAFAFA] mx-auto text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          Why Choose Shifting Hajj?
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-2 mb-8">
          Key benefits that make this option perfect for smart pilgrims
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 text-left"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-[#243E8B] mb-3">
                {item.icon}
              </div>

              <h3 className="text-sm font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-xs text-gray-500 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
