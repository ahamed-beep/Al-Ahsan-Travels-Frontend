"use client";

import ViewModal from "@/Components/Client-Side/ui/ViewModal";
import { Plane } from "lucide-react";

export default function FlightDealViewModal({ deal, onClose }) {
  if (!deal) return null;

  return (
    <ViewModal title="Flight Deal Details" onClose={onClose}>
      {deal.image && (
        <img
          src={deal.image}
          alt={deal.airline}
          className="w-full h-44 object-cover rounded-lg mb-4"
        />
      )}

      <div className="divide-y divide-gray-100 text-sm">
        {[
          ["Airline", deal.airline],
          ["From", deal.from],
          ["To", deal.to],
          ["Duration", deal.duration],
          ["Price", `${deal.price} per person`],
          ["Badge", deal.badge ?? "—"],
          ["Popular", deal.isPopular ? "Yes" : "No"],
          [
            "Status",
            <span
              className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                deal.isActive
                  ? "bg-green-50 text-green-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {deal.isActive ? "Active" : "Inactive"}
            </span>,
          ],
        ].map(([label, value]) => (
          <div key={label} className="flex gap-3 py-2.5">
            <span className="text-gray-400 w-24 shrink-0">{label}</span>
            <span className="text-gray-800">{value}</span>
          </div>
        ))}
      </div>
    </ViewModal>
  );
}