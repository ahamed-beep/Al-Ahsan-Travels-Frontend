"use client";

import Image from "next/image";
import { Plane, FileText, Clock, Hotel } from "lucide-react";
import UmrahForm from "../ui/UmrahForm";

const features = [
  { icon: <Plane size={18} />, label: "Flights Included" },
  { icon: <FileText size={18} />, label: "Visa Included" },
  { icon: <Clock size={18} />, label: "Flexible Duration" },
  { icon: <Hotel size={18} />, label: "Premium Hotels" },
];

export default function UmrahPageHeroSection() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden">

      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="Images/IMG_0722.JPG.webp"
          alt="Kaaba Sharif Makkah"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 py-10 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="text-white space-y-6 px-3 sm:px-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Umrah Packages
          </h1>
          <p className="text-gray-200">
            Explore a range of packages designed for comfort, affordability, and convenience.
          </p>

          <div className="space-y-3">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#c6d7fc] text-[#1C398E] px-4 py-2 rounded-lg w-fit"
              >
                {f.icon} {f.label}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — Form */}
        <div className="w-full max-w-md mx-auto lg:ml-auto lg:w-[420px] xl:w-[470px] shrink-0">
          <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-7">
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