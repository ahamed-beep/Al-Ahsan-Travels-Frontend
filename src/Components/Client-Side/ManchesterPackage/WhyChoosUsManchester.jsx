"use client";

import React from "react";

const features = [
  "Hotels strategically located 5-15 minutes from the Haram",
  "Clean, comfortable rooms with modern amenities",
  "Easy access for families, elderly, and women pilgrims",
  "24-hour reception and support services",
  "Prayer facilities and Qibla direction in all rooms",
  "Halal dining options nearby or in-hotel",
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#1C398E" />
    <polyline points="7 12 10.5 15.5 17 9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function WhyChooseUsManchester() {
  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* ── left Image ── */}
        <div className="flex-1 w-full">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/Images/ClockTower.jpg"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl md:text-4xl font-black text-[#101828] leading-tight mb-4">
            Comfortable Hotels Close  <br /> to Haram
          </h2>
          <p className="text-sm md:text-base text-[#4A5565] leading-relaxed mb-8 max-w-md">
            All our selected hotels prioritize comfort, proximity to the Haram, and convenient access for all pilgrims including families and elderly travelers.
          </p>
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm md:text-base text-[#364153]">
                <span className="shrink-0"><CheckIcon /></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}