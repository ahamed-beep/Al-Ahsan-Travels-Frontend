"use client";

import { Plane } from "lucide-react";

const airlines = [
  { name: "British Airways", code: "BA" },
  { name: "Emirates", code: "EK" },
  { name: "Qatar Airways", code: "QR" },
  { name: "Turkish Airlines", code: "TK" },
];

export default function ManchesterPlanIcon() {
  return (
    <section className="w-full bg-[#FFFFFF] py-12 px-4 sm:px-6 lg:px-16">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#101828]">
          Trusted Airlines We Work With
        </h2>
        <p className="text-[#4A5565] mt-2 text-sm sm:text-base">
          Fly with premium carriers from London Heathrow
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {airlines.map((airline, index) => (
          <div
            key={index}
            className="
              bg-[#2B7FFF33] 
             
              rounded-2xl 
              py-10 px-6
              flex flex-col items-center justify-center text-center
              transition-all duration-300
              hover:shadow-lg hover:-translate-y-1
            "
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F9FAFB] shadow-sm mb-4">
              <Plane className="text-[#1C398E] w-6 h-6" />
            </div>

            {/* Name */}
            <h3 className="text-[#101828] text-sm font-semibold">
              {airline.name}
            </h3>

            {/* Code */}
            <p className="text-[#1C398E] text-xs mt-1 font-medium">
              {airline.code}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}