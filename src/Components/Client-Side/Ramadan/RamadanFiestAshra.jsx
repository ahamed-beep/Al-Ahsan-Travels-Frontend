import { Moon } from "lucide-react";

export default function RamadanFirstAshra() {
  return (
    <div className="min-h-screen bg-[#fdf6f0] flex items-center justify-center px-5 py-12">
      <div className="max-w-2xl w-full text-center px-6 sm:px-10 py-14 sm:py-20">

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#fde8d8] mb-7">
          <Moon className="w-7 h-7 text-[#e8613a]" strokeWidth={2} />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2035] mb-5 leading-tight font-serif">
          The First 10 Days of Ramadan
        </h1>

        {/* Body */}
        <p className="text-sm sm:text-base md:text-lg text-[#4a5568] leading-relaxed max-w-xl mx-auto">
          The first Ashra (10 days) of Ramadan is dedicated to{" "}
          <strong className="text-[#1a2035] font-bold">
            Allah's Mercy (Rahmah)
          </strong>
          . This blessed period offers a unique opportunity for spiritual
          reflection, peaceful worship, and divine blessings. Experience Umrah
          during this sacred time with fewer crowds and a more intimate
          connection to your faith.
        </p>
      </div>
    </div>
  );
}