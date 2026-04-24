import { Heart, ChevronRight } from "lucide-react";

export default function SecondAshraCTA() {
  return (
    <section className="w-full h-557px bg-[#1C398E] px-4 py-16 sm:py-20 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center flex flex-col items-center gap-6">

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FFFFFF1A]">
          <Heart className="w-6 h-6 text-[#FFD6A7]" strokeWidth={1.8} />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] leading-tight">
          Begin Your Ramadan Journey <br className="hidden sm:block" />
          with Mercy
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-[#FFFFFFE5] leading-relaxed max-w-md">
          Experience the blessed first Ashra of Ramadan — a time of divine
          mercy, peaceful worship, and spiritual renewal.
        </p>

        {/* Button */}
        <a
          href="#packages"
          className="inline-flex items-center gap-2 bg-white text-[#1C398E] font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl hover:bg-blue-50 active:bg-blue-100 transition-colors duration-150"
        >
          Book Now
          <ChevronRight className="w-4 h-4" />
        </a>

      </div>
    </section>
  );
}