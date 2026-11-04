"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="w-full mt-8 md:mt-12 bg-[#1C398E]">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-12 text-center sm:px-6 lg:px-10 lg:py-16">
        <h2 className="max-w-[300px] font-inter text-[30px] font-bold leading-[1.2] tracking-tight text-[#FFFFFF] sm:max-w-none lg:text-[48px]">
          Inspired to start your next journey?
        </h2>

        <p className="mt-3 max-w-[320px] font-inter text-[16px] md:text-[20px]  leading-relaxed text-[#FFFFFF] sm:max-w-2xl lg:mt-4 lg:text-base">
          From your first Umrah to a memorable family escape, let our travel
          specialists take care of the details.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#FFFFFF]  px-6 py-3 font-inter text-[14px] font-semibold text-[#1C398E] transition-colors hover:bg-gray-100 lg:mt-7"
        >
          Book Now
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  );
}