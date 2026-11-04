"use client";

import React from "react";
import Image from "next/image";
import { Plane, Clock, FileText, Calendar } from "lucide-react";
import UmrahForm from "../../ui/UmrahForm";

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

const monthData = Object.fromEntries(
  MONTHS.map((m) => [
    m,
    {
      label: `${m.charAt(0).toUpperCase() + m.slice(1)} 2026 Departures`,
      heading: `${m.charAt(0).toUpperCase() + m.slice(1)} Umrah Packages`,
      year: "2026",
      image: "Images/IMG_0722.JPG.webp",
    },
  ])
);

const features = [
  { icon: Plane,    label: "Flights Included" },
  { icon: FileText, label: "Visa Included" },
  { icon: Clock,    label: "Flexible Duration" },
];

export default function HeroSection({ month = "january" }) {
  const data = monthData[month.toLowerCase()] || monthData["january"];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden">

      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <Image
          src={data.image}
          alt="Kaaba Sharif Makkah"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Main content grid */}
      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="text-white space-y-5 sm:space-y-6 text-center lg:text-left">

          <span className="inline-flex items-center gap-2 border border-white/70 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs sm:text-sm w-fit mx-auto lg:mx-0">
            <Calendar size={14} />
            {data.label}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            {data.heading}
            <span className="block mt-1">{data.year}</span>
          </h1>

          <p className="text-[#F3F4F6] text-sm sm:text-base max-w-sm mx-auto lg:mx-0">
            Choose the right package for your journey based on comfort and budget.
          </p>

          <div className="flex flex-col items-start lg:items-start gap-2 sm:gap-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className="flex items-center gap-2 sm:gap-3 bg-[#c6d7fc] text-[#1C398E] px-3 sm:px-4 py-2 rounded-lg text-sm font-medium w-fit"
                >
                  <Icon size={16} className="shrink-0" />
                  {f.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
          <h2 className="text-lg sm:text-xl text-[#101828] font-semibold mb-5 sm:mb-6">
            Plan Your Perfect Umrah Journey
          </h2>

          <UmrahForm />
        </div>
      </div>
    </div>
  );
}