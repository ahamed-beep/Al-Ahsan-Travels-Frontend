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
          <div className="max-w-xl text-white">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
             Non Shifting Hajj Packages
            </h1>

            <p className="mt-4 text-base text-white/90 sm:text-lg">
              Affordable Hajj packages with flexible accommodation arrangements.
            </p>

            <div className="mt-8 space-y-5">
              <div className="inline-flex min-h-[52px] w-full max-w-[320px] items-center gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-medium text-[#163a8a] shadow-lg sm:text-base">
                <span className="flex  h-5 w-5 items-center justify-center rounded-full text-[#163a8a]">
                  ✓
                </span>
                <span>Includes relocation during peak Hajj days</span>
              </div>

              <div className="inline-flex min-h-[52px] w-full max-w-[320px] items-center gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-medium text-[#163a8a] shadow-lg sm:text-base">
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-[#163a8a]">
                  ✓
                </span>
                <span>Ideal for budget-conscious pilgrims</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="w-full">
            <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
              <h2 className="text-2xl font-bold text-slate-900">
                Customize Your Hajj
              </h2>

              <form className="mt-5 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Ali"
                      className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      placeholder="+44 20 1234 5678"
                      className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Package Type
                    </label>
                    <input
                      type="text"
                      placeholder="Shifting"
                      className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Hotel Category
                    </label>
                    <input
                      type="text"
                      placeholder="Economy"
                      className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Departure Airport
                    </label>
                    <input
                      type="text"
                      className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Adults
                    </label>
                    <input
                      type="number"
                      className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Children
                    </label>
                    <input
                      type="number"
                      className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-[#28439b] px-6 text-base font-semibold text-white transition hover:bg-[#223a88]"
                >
                  <span className="mr-2">✈</span>
                  Get Free Quote
                </button>

                <p className="text-center text-xs text-slate-500 sm:text-sm">
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
