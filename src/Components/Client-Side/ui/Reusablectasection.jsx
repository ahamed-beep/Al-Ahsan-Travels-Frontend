"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";


 export function CTASection({
  eyebrow = "Sacred Journey Awaits",
  headingLight = "Ready to Begin Your",
  headingBold = "Umrah Journey?",
  description = "Book a free consultation with our travel experts and let us help you plan the spiritual journey of a lifetime.",
  buttonText = "Book Now",
  onButtonClick,
  badges = ["Free Consultation", "Expert Guidance", "Trusted by Thousands"],
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div
        className={`group relative max-w-4xl mx-auto rounded-[20px] md:rounded-[28px] p-[1.5px] bg-transparent hover:bg-[linear-gradient(45deg,#E90400,#032D96)] transition-all duration-300
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          transition-all duration-700 ease-out`}
      >
        <div className="relative w-full h-full py-14 px-8 md:py-16 md:px-14 flex flex-col items-center text-center gap-4 rounded-[18px] md:rounded-[26px] overflow-hidden bg-[linear-gradient(122.55deg,_#E90400_-30.87%,_#032D96_103.98%)] transition-all duration-300 ease-in-out">

          {/* Hover white overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Decorative big number watermark */}
          <div className="absolute top-4 right-6 z-0 font-bold text-[120px] md:text-[160px] leading-none text-[#F2F4F9]/10 group-hover:text-[#333333]/10 transition-colors duration-300 select-none pointer-events-none">
            ☪
          </div>

          {/* Eyebrow */}
          <p className="relative z-10 text-[11px] tracking-[5px] uppercase font-semibold text-white/60 group-hover:text-[#1a1a2e]/50 transition-colors duration-300">
            {eyebrow}
          </p>

          {/* Heading */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F2F4F9] group-hover:text-[#1a1a2e] leading-tight tracking-tight transition-colors duration-300">
              {headingLight}
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white group-hover:text-[#1a1a2e] leading-tight tracking-tight transition-colors duration-300">
              {headingBold}
            </h2>
          </div>

          {/* Divider */}
          <div className="relative z-10 flex items-center gap-3 my-1">
            <div className="w-10 h-px bg-white/40 group-hover:bg-[#1a1a2e]/30 transition-colors duration-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-[#1a1a2e]/40 transition-colors duration-300" />
            <div className="w-10 h-px bg-white/40 group-hover:bg-[#1a1a2e]/30 transition-colors duration-300" />
          </div>

          {/* Description */}
          <p className="relative z-10 text-[13px] md:text-[15px] lg:text-[16px] font-normal leading-relaxed text-white/80 group-hover:text-[#1a1a2e]/70 max-w-xl transition-colors duration-300">
            {description}
          </p>

          {/* Button */}
          <button
            onClick={onButtonClick}
            className="relative z-10 mt-2 inline-flex items-center gap-2 border border-white/60 group-hover:border-[#032D96] text-white group-hover:text-[#032D96] hover:bg-[#032D96] hover:text-white hover:border-[#032D96] transition-all duration-300 px-7 py-3 rounded-full text-sm font-semibold tracking-widest uppercase"
          >
            <span>{buttonText}</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Badges */}
          {badges.length > 0 && (
            <p className="relative z-10 mt-1 text-[11px] tracking-wider text-white/40 group-hover:text-[#1a1a2e]/40 transition-colors duration-300">
              {badges.map((badge, i) => (
                <span key={i}>
                  {i > 0 && <span className="mx-2">·</span>}
                  {badge}
                </span>
              ))}
            </p>
          )}

        </div>
      </div>
    </section>
  );
}


// ✅ DEMO — 3 pages ka example
