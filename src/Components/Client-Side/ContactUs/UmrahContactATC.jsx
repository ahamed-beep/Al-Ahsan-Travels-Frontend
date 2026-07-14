"use client";

import { Headphones, Phone, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function UmrahContactCTA() {
  function handleCallback() {
    window.location.href = "tel:+442030971507";
  }

  return (
    <section className="bg-[#1C398E] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Icon */}
        <div className="text-[#ffffff] opacity-90">
          <Headphones className="w-12 h-12" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#ffffff] leading-tight">
           Start Your Umrah Journey Today
        </h2>

        {/* Description */}
        <p className="text-[#ECFDF5] text-sm sm:text-base max-w-xl leading-relaxed">
          Ready to book? Our team is standing by to help you plan the perfect Umrah experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <button
            onClick={handleCallback}
            className="flex items-center gap-2 bg-[#ffffff] hover:bg-gray-100 active:bg-gray-200 text-blue-900 font-semibold px-7 py-3.5 rounded-2xl transition-colors duration-150 text-sm sm:text-base"
          >
            <Phone className="w-4 h-4" />
            Request Callback
          </button>

          <Link
            href="/contactus"
            className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-7 py-3.5 rounded-2xl transition-colors duration-150 text-sm sm:text-base"
          >
            Contact Us
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}