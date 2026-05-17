"use client";

import { ArrowRight } from "lucide-react";

export default function PackageCTA() {
  return (
    <section className="w-full bg-[#1C398E] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-[#FFFFFF] text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Not Sure Which Package Suits You?
        </h2>

        {/* Sub Heading */}
        <p className="mt-5 text-[#FFFFFFE5]/90 text-base sm:text-lg max-w-2xl mx-auto">
          Our expert consultants are here to help you find the perfect package
        </p>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button className="group bg-[#FFFFFF] hover:bg-gray-100 transition-all duration-300 rounded-2xl  px-8 sm:px-12 py-4 sm:py-5 flex items-center gap-4 text-[#1C398E] font-semibold text-lg">
            Book Now

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}