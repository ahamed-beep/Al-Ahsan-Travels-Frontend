"use client";
import Link from "next/link";
import React from "react";

const HeadphonesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

export default function ReadyToBegin() {
  return (
    <div className="bg-[#eef2f9] w-full px-3 py-10">
      <div
        className="max-w-4xl mx-auto rounded-3xl px-8 py-14 text-center"
        style={{
          background: "linear-gradient(135deg, #1C398E 100%, #000000 0%)",
        }}
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-black text-[#FFFFFF] mb-4">
          Ready to Begin Your Journey?
        </h2>

        {/* Subtext */}
        <p className="text-sm md:text-base text-[#BEDBFF] max-w-lg mx-auto mb-10 leading-relaxed">
          Book your 3-star Umrah package today and experience a spiritually
          enriching pilgrimage with complete peace of mind.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Book Now */}
           <Link  href="/#hero" className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-[#FFFFFF] text-[#1F1F1F] text-sm font-black hover:bg-blue-50 transition-all">
            Book Now
          </Link>

          {/* Contact Us */}
          <Link  href="/contactus"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-[#FFFFFF] text-sm font-bold flex items-center justify-center gap-2 transition-all"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1.5px solid #FFFFFF",
            }}
          >
            <HeadphonesIcon />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}