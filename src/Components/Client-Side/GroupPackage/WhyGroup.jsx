"use client";

import { Check } from "lucide-react";

const points = [
  "Cost-effective travel with group discounts",
  "Shared experiences with fellow pilgrims",
  "Professional coordination and scheduling",
  "Experienced guides fluent in English and Arabic",
  "24/7 support throughout your journey",
  "ATOL protected bookings for peace of mind",
];

export default function WhyGroup() {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className=" mx-auto px-5 md:px-20">

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
       Why Choose Group Umrah?
            </h2>

            <p className="text-[#4A5565] text-sm sm:text-base mb-6 leading-relaxed">
           Traveling in a group offers unique benefits that enhance your Umrah experience. From cost savings to shared spiritual moments, discover why thousands choose our group packages each year.
            </p>

            {/* Points */}
            <ul className="space-y-4">
              {points.map((item, i) => (
                <li key={i} className="flex items-start gap-3">

                  {/* Icon */}
                  <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#1C398E]">
                    <Check className="w-3.5 h-3.5 text-[#FFFFFF]" />
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