"use client";

import React from "react";

const features = [
  "ATOL protected trusted agency with 20+ years experience",
  "Custom packages tailored to your needs and budget",
  "Family-friendly planning with dedicated support",
  "Hotels located close to Haram for easy access",
  "Experienced multilingual guides",
  "Flexible payment plans available",
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#1C398E" />
    <polyline points="7 12 10.5 15.5 17 9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* ── left Image ── */}
        <div className="flex-1 w-full">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/Images/BackGround.webp"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl md:text-4xl font-black text-[#101828] leading-tight mb-4">
            Why Choose Us for <br /> London Departures?
          </h2>
          <p className="text-sm md:text-base text-[#4A5565] leading-relaxed mb-8 max-w-md">
            As London's trusted Umrah travel specialist, we understand the
            needs of UK pilgrims. Our packages are designed for convenience,
            comfort, and peace of mind.
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