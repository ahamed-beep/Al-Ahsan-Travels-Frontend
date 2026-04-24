"use client";

import React from "react";

export default function HeroHajjGuide() {
  return (
    <section className="relative  w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute  inset-0 z-0">
        <img
          src="/Images/Shifting.jpg"
          alt="Hajj Background"
          className="w-full h-full object-cover"
        />
       
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto ml-20 mt-10 px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <a href="/" className="text-[#ffffff] hover:text-white transition-colors">
                Home
              </a>
              <svg 
                className="w-4 h-4 text-[#ffffff]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#ffffff] font-medium">Hajj Guide</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mr-70 mx-auto">
            {/* Title */}
            <h1 className="text-3xl flex items-start sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
              Complete Hajj Guide
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl whitespace-nowrap text-[#FFFFFF] leading-relaxed mb-3">
              A simple, step-by-step guide to help you prepare for your sacred journey.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF] leading-relaxed mb-6 sm:mb-7 md:mb-8">
              Everything you need to know about performing Hajj with confidence.
            </p>

            {/* Read Time Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 ">
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFFFFF]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm sm:text-base font-medium text-white">
                8-10 min read | Complete Guide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}