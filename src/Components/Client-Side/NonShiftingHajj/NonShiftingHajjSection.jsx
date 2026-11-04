"use client";
import React from "react";
import HajjForm from "../ui/HajjForm";

export default function NonShiftingHajjSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute w-full inset-0">
        <img src="Images/IMG_0722.JPG.webp" className="h-full w-full object-cover"/>
        <div className="absolute inset-0" />
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
            <div className="mt-8 space-y-5">
              <div className="inline-flex min-h-[52px] whitespace-nowrap w-[350px] items-center gap-3 rounded-2xl bg-[#F7F7F7] px-5 py-4 text-sm font-medium text-[#163a8a] shadow-lg sm:text-base">
                   <img src="/Images/arrow.png" className="h-2.5" />
                <span className="text-[#1C398E]">Includes relocation during peak Hajj days</span>
              </div>
              <div className="inline-flex min-h-[52px] whitespace-nowrap w-[320px] items-center gap-3 rounded-2xl bg-[#F7F7F7] px-5 py-4 text-sm font-medium text-[#163a8a] shadow-lg sm:text-base">
                    <img src="/Images/arrow.png" className="h-2.5" />
                <span className="text-[#1C398E]">Ideal for budget-conscious pilgrims</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="w-full">
            <div className="mx-auto w-full max-w-xl rounded-2xl bg-[#ffffff] p-5 shadow-2xl sm:p-7">
              <h2 className="text-2xl font-bold text-[#101828]">Customize Your Hajj</h2>

              <HajjForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}