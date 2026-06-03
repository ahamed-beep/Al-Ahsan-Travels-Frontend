"use client";

import { Users } from "lucide-react";

export default function AboutHero() {
  const TrustpilotBadge = () => (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-900 border-2 border-white flex items-center justify-center shadow-sm"
          >
            <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-[#1C398E]">
            ★ Trustpilot
          </span>
        </div>
        <p className="text-xs text-gray-500">Trusted by 40+ clients</p>
      </div>
    </div>
  );

  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 w-full flex flex-col gap-8">

        {/* TRUSTPILOT — top center on desktop, left on mobile */}
        <div className="flex justify-center lg:justify-center">
          <TrustpilotBadge />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center gap-5 sm:gap-6 text-center lg:text-left items-center lg:items-start">

            <div className="inline-flex items-center gap-2 bg-[#364153] text-white text-xs px-4 py-2 rounded-full">
              Trusted Umrah & Hajj Travel Partner
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#101828] leading-tight">
              About Al-Ahsan <br /> Travel
            </h1>

            <p className="text-[#364153] text-sm sm:text-base leading-relaxed max-w-md">
              Making your spiritual journey peaceful and hassle-free with honest
              service, expert guidance, and unwavering commitment.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center items-center">
            <img
              src="/Images/Makkah.webp"
              alt="Makkah"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}