"use client";

import React from "react";

export default function HeroHajjGuide() {
  return (
    <section className="relative w-full  sm:min-h-[450px] md:min-h-[520px] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Images/Shifting.jpg"
          alt="Hajj Background"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay (optional for better text visibility) */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8 lg:ml-20">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">

          {/* Breadcrumb */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">

              <a
                href="/"
                className="text-white/90 hover:text-white transition-colors"
              >
                Home
              </a>

              <svg
                className="w-4 h-4 text-white/80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>

              <span className="text-white font-medium">Hajj Guide</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-3xl">

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Complete Hajj Guide
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-lg md:text-xl text-white/90 leading-relaxed mb-2">
              A simple, step-by-step guide to help you prepare for your sacred journey.
            </p>

            <p className="text-sm sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Everything you need to know about performing Hajj with confidence.
            </p>

            {/* Read Time Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 ">

              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span className="text-sm sm:text-base text-white font-medium">
                8–10 min read | Complete Guide
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}