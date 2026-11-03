"use client";

import UmrahForm from "../ui/UmrahForm";

export default function ThreeStarHero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">

      {/* Background Image */}
      <img
        src="Images/IMG_0722.JPG.webp"
        alt="Umrah"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center justify-center text-center gap-5">
          <span className="bg-[#1C398E] bg-opacity-80 px-5 py-2 rounded-full text-sm text-white">
            Affordable 3-Star Umrah Packages
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#FFFFFF]">Your Spiritual Journey</span> <br />
            <span className="bg-gradient-to-r from-[#8EC5FF] to-[#DBEAFE] bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>
          <p className="text-[#DBEAFE] max-w-xl">
            Experience a comfortable and affordable Umrah pilgrimage with our
            carefully curated packages. Trusted service and support.
          </p>
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