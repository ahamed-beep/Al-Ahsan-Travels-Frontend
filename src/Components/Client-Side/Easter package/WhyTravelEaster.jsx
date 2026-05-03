"use client";

import { Check } from "lucide-react";

const reasons = [
  "Ideal timing during school holidays",
  "Mild, comfortable weather in Saudi Arabia",
  "Special Easter discounts and offers",
  "Less crowded than peak seasons",
  "Quality family time with spiritual growth",
  "Flexible package options for all budgets",
];

export default function WhyTravelEaster() {
  return (
    <section className="w-full bg-[#C3D8FA33] py-10 sm:py-14 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto p-4 sm:p-8 lg:p-12">

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4">
              Why Travel During Easter?
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              Easter holidays offer the perfect opportunity for families and
              individuals to embark on a spiritual journey without affecting
              work or school schedules.
            </p>

            {/* LIST */}
            <div className="space-y-3">
              {reasons.map((item, index) => (
                <div key={index} className="flex items-start gap-3">

                  {/* CHECK ICON */}
                  <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#C3D8FA33]">
                    <Check className="w-3.5 h-3.5 text-blue-600" />
                  </div>

                  <p className="text-gray-700 text-sm sm:text-[15px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            
            {/* Image */}
            <img
              src="/Images/AboutUs.webp"
              alt="Makkah"
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />

          </div>

        </div>
      </div>
    </section>
  );
}