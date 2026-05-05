"use client";

import React from "react";
import { Star } from "lucide-react";

const rows = [
  { stars: 3, price: "Low", comfort: "Basic", distance: "Far" },
  { stars: 4, price: "Medium", comfort: "Balanced", distance: "Moderate" },
  { stars: 5, price: "High", comfort: "Premium", distance: "Near Haram" },
];

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-1">
      <span className="font-semibold text-[#222222]">{count}</span>
      <Star size={13} className="fill-[#222222] text-[#222222]" />
    </div>
  );
}

const cellStyle = {
  borderTop: "1px solid #e5e7eb",
  borderRight: "1px solid #e5e7eb",
};

const lastCellStyle = {
  borderTop: "1px solid #e5e7eb",
};

export default function QuickComparisonGuide() {
  return (
    <div className="w-full px-4 py-10 flex flex-col items-center bg-[#ffffff]">
      <h2 className="text-xl sm:text-2xl font-bold text-[#222222] mb-6">
        Quick Comparison Guide
      </h2>

      <div className="w-full max-w-3xl rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table
            className="w-full text-sm"
            style={{ borderCollapse: "separate", borderSpacing: 0 }}
          >
            <thead>
              <tr className="bg-[#1C398E] text-[#ffffff] text-left">
                <th className="px-5 py-3 font-semibold whitespace-nowrap" style={{ borderRight: "1px solid #3a56a5" }}>Type</th>
                <th className="px-5 py-3 font-semibold whitespace-nowrap" style={{ borderRight: "1px solid #3a56a5" }}>Price</th>
                <th className="px-5 py-3 font-semibold whitespace-nowrap" style={{ borderRight: "1px solid #3a56a5" }}>Comfort</th>
                <th className="px-5 py-3 font-semibold whitespace-nowrap">Distance</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-[#ffffff]"}>
                  <td className="px-5 py-4 whitespace-nowrap" style={cellStyle}>
                    <StarRating count={row.stars} />
                  </td>
                  <td className="px-5 py-4 text-[#1C398ECC] font-medium whitespace-nowrap" style={cellStyle}>
                    {row.price}
                  </td>
                  <td className="px-5 py-4 text-[#1C398ECC] font-medium whitespace-nowrap" style={cellStyle}>
                    {row.comfort}
                  </td>
                  <td className="px-5 py-4 text-[#1C398ECC] font-medium whitespace-nowrap" style={lastCellStyle}>
                    {row.distance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}