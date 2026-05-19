"use client";

import ViewModal from "@/Components/Client-Side/ui/ViewModal";
import { CATEGORIES } from "./contants";

const STARS_MAP = { 3: "★★★", 4: "★★★★", 5: "★★★★★" };

export default function PackageViewModal({ pkg, onClose }) {
  if (!pkg) return null;

  return (
    <ViewModal title="Package Details" onClose={onClose}>
      {pkg.image && (
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-44 object-cover rounded-lg mb-4"
        />
      )}

      <div className="divide-y divide-gray-100 text-sm">
        {[
          ["Title", pkg.title],
          ["Category", CATEGORIES[pkg.category] ?? pkg.category],
          ["Stars", <span className="text-amber-500">{STARS_MAP[pkg.stars]}</span>],
          ["Nights", `${pkg.nights} nights`],
          ["Price", pkg.price],
          ["Original Price", pkg.originalPrice ?? "—"],
          ["Discount", pkg.discount ?? "—"],
          ["Hotel Makkah", pkg.hotels?.makkah],
          ["Hotel Madinah", pkg.hotels?.madinah],
          ["Badge", pkg.badge ?? "—"],
          ["Popular", pkg.isPopular ? "Yes" : "No"],
          [
            "Status",
            <span
              className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                pkg.isActive
                  ? "bg-green-50 text-green-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {pkg.isActive ? "Active" : "Inactive"}
            </span>,
          ],
        ].map(([label, value]) => (
          <div key={label} className="flex gap-3 py-2.5">
            <span className="text-gray-400 w-32 shrink-0">{label}</span>
            <span className="text-gray-800">{value}</span>
          </div>
        ))}
      </div>

      {pkg.features?.length > 0 && (
        <div className="mt-4">
          <p className="text-xs text-gray-400 mb-2">Features</p>
          <div className="flex flex-wrap gap-1.5">
            {pkg.features.map((f, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      )}
    </ViewModal>
  );
}