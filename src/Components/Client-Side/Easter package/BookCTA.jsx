"use client";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

export default function BookCTA() {
  return (
    <section className="bg-[#1C398E] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] mb-4 leading-tight">
          Book Your Easter Umrah Today
        </h2>

        {/* Subtext */}
        <p className="text-[#FFFFFFE5] text-sm sm:text-base mb-10 max-w-lg mx-auto leading-relaxed">
          Limited availability. Secure your spot for this Easter with our exclusive packages.
        </p>

        {/* Button */}
        <Link href="/#hero" className="inline-flex items-center gap-2 bg-[#FFFFFF] text-[#1C398E] font-bold text-base sm:text-lg px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors duration-150 shadow-lg">
          Book Now
          <ChevronRight className="w-5 h-5" />
        </Link>

      </div>
    </section>
  );
}