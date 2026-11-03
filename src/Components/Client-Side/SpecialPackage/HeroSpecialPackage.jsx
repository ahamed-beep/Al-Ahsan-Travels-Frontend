"use client";

import { Check } from "lucide-react";
import UmrahForm from "../ui/UmrahForm";

export default function HeroSpecialPackage() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">

      {/* Background Image */}
      <img
        src="Images/IMG_0722.JPG.webp"
        alt="Umrah"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="ml-0 lg:ml-10 mb-20 lg:mb-30 text-center lg:text-left space-y-6">

          <h1 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] md:whitespace-nowrap">
            Family Umrah Packages 2025
          </h1>

          <p className="text-base sm:text-lg text-[#ffffff] max-w-xl mx-auto lg:mx-0">
            Create precious memories with your loved ones on a spiritually
            enriching journey designed for families
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-[#FFFFFF]">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFFFFF]" />
              Flights + Visa Included
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFFFFF]" />
              Family-Friendly Hotels
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFFFFF]" />
              24/7 Support
            </span>
          </div>
        </div>

        {/* RIGHT SIDE — Form Card */}
        <div className="w-full max-w-md mx-auto lg:ml-auto lg:w-[420px] xl:w-[470px] shrink-0">
          <div className="bg-[#ffffff] rounded-2xl shadow-xl p-5 sm:p-6 md:p-7">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#101828] mb-4 sm:mb-5">
              Plan Your Perfect Umrah Journey
            </h2>

            <UmrahForm />
          </div>
        </div>

      </div>
    </div>
  );
}