"use client";

import { Headphones, Users } from "lucide-react";

export default function AboutHero() {
  const TrustpilotBadge = () => (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-9 h-9 rounded-full bg-blue-900 border-2 border-white flex items-center justify-center shadow-sm"
          >
            <Users className="w-3.5 h-3.5 text-white" />
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
    <section className="bg-[#FFFFFF] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center gap-6">

          <div className="inline-flex items-center gap-2 bg-[#364153] text-white text-xs px-4 py-2 rounded-full w-fit">
            Trusted Umrah & Hajj Travel Partner
          </div>

          <h1 className="text-4xl sm:text-5xl font-medium text-[#101828] leading-tight">
            About Al-Ahsan <br /> Travel
          </h1>

          <p className="text-[#364153] text-base leading-relaxed max-w-md">
            Making your spiritual journey peaceful and hassle-free with honest
            service, expert guidance, and unwavering commitment.
          </p>
        </div>

         {/* ⭐ TRUSTPILOT (image ke upar, center aligned like design) */}
          <div className="absolute top-30 left-1/2 -translate-x-1/2 z-20">
            <TrustpilotBadge />
          </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center">

         

          {/* IMAGE */}
          <img
            src="/Images/Makkah.webp"
            alt="Makkah"
            className="w-full max-w-md lg:max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
}