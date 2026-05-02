"use client";

import { Check } from "lucide-react";

const points = [
  "Specialized in family Umrah packages for over 20 years",
  "Child-friendly hotels with family room configurations",
  "Flexible itineraries to accommodate family needs",
  "24/7 support throughout your journey",
  "Experienced guides familiar with family travel",
  "ATOL protected bookings for peace of mind",
];

export default function WhyFamilies() {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div className="w-full">
            <img
              src="/Images/Image (Mosque).webp"
              alt="Makkah"
              className="w-full h-[320px] sm:h-[380px] object-cover rounded-2xl "
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#101828] mb-4">
              Why Families Choose Us
            </h2>

            <p className="text-[#4A5565] text-sm sm:text-base mb-6 leading-relaxed">
              We understand the unique needs of families traveling together for Umrah.
              Our packages are carefully designed to ensure comfort, convenience,
              and peace of mind for every family member.
            </p>

            {/* Points */}
            <ul className="space-y-4">
              {points.map((item, i) => (
                <li key={i} className="flex items-start gap-3">

                  {/* Icon */}
                  <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#E0E7FF]">
                    <Check className="w-3.5 h-3.5 text-[#1C398E]" />
                  </span>

                  {/* Text */}
                  <span className="text-[#364153] text-sm sm:text-base">
                    {item}
                  </span>

                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}