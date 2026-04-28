import { Moon } from "lucide-react";

export default function RamadanThirdAshra() {
  return (
    <div className=" bg-[#FFF7ED80] h-auto   px-5 py-12">
      <div className=" w-full  text-center px-6 sm:px-10 py-14 sm:py-1">

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FFEDD4] mb-7">
          <Moon className="w-7 h-7 text-[#F54900]" strokeWidth={2} />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center justify-center text-[#101828] mb-5 leading-tight font-serif">
          The Third 10 Days of Ramadan
        </h1>

        {/* Body */}
        <p className="text-sm sm:text-base  md:text-lg  text-[#4A5565] leading-relaxed  mx-auto">
          The Third Ashra (10 days) of Ramadan is dedicated to{" "}
          <strong className="text-[#1a2035] font-bold">
            Allah's Mercy (Rahmah)
          </strong>
          . This blessed period offers a unique opportunity for spiritualreflection, peaceful worship, and divine blessings. Experience Umrah
          during this sacred time with fewer crowds and a more intimate
          connection to your faith.
        </p>
      </div>
    </div>
  );
}