"use client";
import React from "react";

const ClockIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// ✅ FIXED ICON COLOR (inherits from parent)
const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
    <polyline
      points="2,6 5,9 10,3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const packages = [
  {
    duration: "7 Days / 6 Nights",
    title: "7 Nights Package",
    price: "£699",
    featured: false,
    features: [
      "Return flights from UK",
      "4★ hotel accommodation",
      "Visa processing included",
      "Ground transportation",
      "Airport transfers",
    ],
  },
  {
    duration: "10 Days / 9 Nights",
    title: "10 Nights Package",
    price: "£899",
    featured: true,
    badge: "Best Value",
    features: [
      "Return flights from UK",
      "4★ hotel accommodation",
      "Visa processing included",
      "Ground transportation",
      "Airport transfers",
      "Ziyarat tours included",
    ],
  },
  {
    duration: "14 Days / 13 Nights",
    title: "14 Nights Package",
    price: "£1,099",
    featured: false,
    features: [
      "Return flights from UK",
      "4★ hotel accommodation",
      "Visa processing included",
      "Ground transportation",
      "Airport transfers",
      "Ziyarat tours included",
      "Extended stay benefits",
    ],
  },
];

export default function PricingCards() {
  return (
    <section className="bg-[#EEF2F9] py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C398E]">
            Choose Your Package
          </h1>
          <p className="text-sm sm:text-base text-[#1F1F1F] mt-2 font-medium">
            Flexible durations to suit your schedule
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {packages.map((pkg, i) => (
            <div key={i} className="flex">

              {/* CARD */}
              <div
                className={`relative overflow-visible w-full rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                  pkg.featured
                    ? "shadow-xl scale-[1.03] pt-8 p-6"
                    : "p-6 hover:shadow-lg"
                }`}
                style={
                  pkg.featured
                    ? {
                        background:
                          "linear-gradient(135deg, rgba(81,162,255,0.25), rgba(28,57,142,0.18))",
                        borderColor: "rgba(81,162,255,0.45)",
                      }
                    : {
                        background: "#51A2FF26",
                        borderColor: "#FFFFFF33",
                      }
                }
              >

                {/* ✅ BADGE */}
                {pkg.badge && (
                  <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-20">
                    {/* <span className="bg-[#1C398E] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg border-2 border-white whitespace-nowrap">
                      {pkg.badge}
                    </span> */}
                  </div>
                )}

                {/* CONTENT */}
                <div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-xs text-[#4A5565] font-semibold mb-2">
                    <ClockIcon />
                    {pkg.duration}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-[#1C398E]">
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <p className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mt-2">
                    {pkg.price}
                  </p>
                  <p className="text-xs text-[#1C398E99] font-medium mb-4">
                    per person
                  </p>


                  {/* FEATURES */}
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-[#1447E6] font-medium"
                      >
                        <span className="w-5 h-5 flex items-center justify-center text-[#1447E6]">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#51A2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BUTTON */}
                {pkg.featured ? (
                  <button className="w-full py-3 rounded-xl bg-[#1C398E] text-[#FFFFFF] font-bold text-sm  transition shadow-md">
                    Select Package
                  </button>
                ) : (
                  <button className="w-full py-3 rounded-xl border-2 border-[#FFFFFF4D] text-[#1C398E] font-bold text-sm bg-[#FFFFFF1A] transition">
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