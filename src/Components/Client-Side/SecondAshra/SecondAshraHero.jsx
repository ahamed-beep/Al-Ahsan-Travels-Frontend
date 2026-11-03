"use client";
import React from "react";
import Link from "next/link";
import HajjForm from "../ui/HajjForm";

export default function SecondAshraHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute w-full inset-0">
        <img
          src="Images/IMG_0722.JPG.webp"
          alt="Hajj background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl text-[#FFFFFF]">
            <h1 className="text-4xl font-bold  leading-tight sm:text-5xl lg:text-5xl">
              Second Ashra Ramadan <br /> <span>Umrah Packages</span>
            </h1>
            <p className="mt-4 text-base flex items-center justify-start text-white/90 sm:text-lg">
              Seek forgiveness in the holy cities during the blessed <br /> days of Maghfirah
            </p>
            <div className="mt-8 flex items-center justify-start md:justify-start space-y-5">
              <Link href="/#hero" className="inline-flex min-h-[52px] w-full max-w-[171px] items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-medium text-[#163a8a] shadow-lg sm:text-base">
                <span>Get Quote</span>
              </Link>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="w-full">
            <div className="mx-auto w-full max-w-xl rounded-2xl bg-[#ffffff] p-5 shadow-2xl sm:p-7">
              <h2 className="text-2xl font-bold text-[#101828]">Customize Your Umrah</h2>

              <HajjForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}