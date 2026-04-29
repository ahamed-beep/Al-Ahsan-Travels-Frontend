"use client";
import React from "react";
export default function NonShiftingHajjSection() {
  return (
    <section className="relative  overflow-hidden">
      {/* Background Image */}
      <div className="absolute w-full inset-0">
        <img
          src="/Images/Shifting.jpg"
          alt="Hajj background"
          className="h-full w-full  object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl text-[#ffffff]">
            <h1 className="text-4xl font-bold md:whitespace-nowrap leading-tight sm:text-4xl lg:text-4xl">
              Non Shifting Hajj Packages
            </h1>

            <p className="mt-4 text-base md:whitespace-nowrap text-[#ffffff] sm:text-lg">
              Affordable Hajj packages with flexible accommodation arrangements.
            </p>

            <div className="mt-8  space-y-5">
              <div className="inline-flex min-h-[52px] whitespace-nowrap w-[330px] items-center gap-3 rounded-2xl bg-[#F7F7F7] px-5 py-4 text-sm font-medium text-[#163a8a] shadow-lg sm:text-base">
                <span className="flex  h-5 w-5 items-center justify-center rounded-full text-[#1C398E]">
                  ✓
                </span>
                <span className="text-[#1C398E]">Includes relocation during peak Hajj days</span>
              </div>

              <div className="inline-flex min-h-[52px] whitespace-nowrap w-[320px] items-center gap-3 rounded-2xl bg-[#F7F7F7] px-5 py-4 text-sm font-medium text-[#163a8a] shadow-lg sm:text-base">
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-[#1C398E]">
                  ✓
                </span>
                <span className="text-[#1C398E]">Ideal for budget-conscious pilgrims</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="w-full">
            <div className="mx-auto w-full max-w-xl rounded-2xl bg-[#ffffff] p-5 shadow-2xl sm:p-7">
              <h2 className="text-2xl font-bold text-[#101828]">
                Customize Your Hajj
              </h2>

              <form className="mt-5 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#364153]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Ali"
                      className="h-12 w-full rounded-xl border border-[#D1D5DC] px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#364153]">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      placeholder="+44 20 1234 5678"
                      className="h-12 w-full rounded-xl border border-[#D1D5DC] px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#364153]">
                      Package Type
                    </label>
                    <input
                      type="text"
                      placeholder="Shifting"
                      className="h-12 w-full rounded-xl border border-[#D1D5DC] px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#364153]">
                      Hotel Category
                    </label>
                    <input
                      type="text"
                      placeholder="Economy"
                      className="h-12 w-full rounded-xl border border-[#D1D5DC] px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#364153]">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      className="h-12 w-full rounded-xl border border-[#D1D5DC] px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#364153]">
                      Departure Airport
                    </label>
                    <input
                      type="text"
                      className="h-12 w-full rounded-xl border border-[#D1D5DC] px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#364153]">
                      Adults
                    </label>
                    <input
                      type="number"
                      className="h-12 w-full rounded-xl border border-[#D1D5DC] px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#364153]">
                      Children
                    </label>
                    <input
                      type="number"
                      className="h-12 w-full rounded-xl border border-[#D1D5DC] px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-[#1C398E] px-6 text-base font-semibold text-[#ffffff] transition hover:bg-[#223a88]"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>                  Get Free Quote
                </button>

                <p className="text-center text-xs text-[#6A7282] sm:text-sm">
                  No payment required. We&apos;ll send you a personalized quote within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
