"use client";

import { FaDollarSign } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { FiRefreshCw } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";

export default function NonQuickComparison() {
  const cards = [
    {
      icon: <FaDollarSign size={28} />,
      title: "Cost",
      value: "Lower",
    },
    {
      icon: <HiHome size={28} />,
      title: "Comfort",
      value: "Medium",
    },
    {
      icon: <FiRefreshCw size={28} />,
      title: "Movement",
      value: "Yes",
    },
    {
      icon: <FaUsers size={28} />,
      title: "Best For",
      value: "Budget travelers",
    },
  ];

  return (
    <div className="w-full bg-[#1C398E] py-12 px-4 flex flex-col items-center">
      <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-8 text-center">
        Quick Comparison: Non-Shifting Hajj
      </h2>

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#ffffff] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
          >
            <div className="text-[#1C398ECC] mb-3">{card.icon}</div>
            <p className="text-sm text-[#1C398ECC] mb-1">{card.title}</p>
            <h3 className="text-lg font-bold text-[#1C398E]">
              {card.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
