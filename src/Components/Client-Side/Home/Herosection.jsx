"use client";
import { Users } from "lucide-react";
import Link from 'next/link';
import InquiryForm from "../ui/InquiryForm";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen sm:min-h-[580px] lg:min-h-[600px] overflow-hidden bg-black">

      {/* Full page background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="Images/IMG_0722.JPG.webp"
          alt="Makkah"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 lg:py-20 min-h-screen sm:min-h-[580px] lg:min-h-[600px] flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-12">

          {/* Left: heading + description */}
          <div className="flex-1 ml-10 text-center lg:text-left lg:max-w-xl xl:max-w-2xl">
            <h1 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[52px] font-extrabold text-white leading-tight tracking-tight">
              Your Journey to the
              <br className="hidden sm:block" />
              <span className="text-[#4ade80]">Sacred Lands</span>
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-7 md:mt-8">
              <Link
                href="#FeaturedPackages"
                className="inline-flex items-center px-5 sm:px-6 py-2 sm:py-2.5 bg-[#1e3a8a] text-white text-[13px] sm:text-[14px] font-semibold rounded-full hover:bg-[#1e40af] transition-colors shadow-md"
              >
                View All Packages
              </Link>
              <a
                href="/contactus"
                className="inline-flex items-center px-5 sm:px-6 py-2 sm:py-2.5 bg-white text-[#1e3a8a] text-[13px] sm:text-[14px] font-semibold rounded-full hover:bg-[#f0f4ff] transition-colors"
              >
                Contact Us
              </a>
            </div>
        </div>

          {/* Right: dark glass form card */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:w-[420px] xl:w-[450px] shrink-0">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}