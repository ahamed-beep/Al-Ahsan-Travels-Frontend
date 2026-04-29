"use client";

import { Phone, MessageCircle,Users, Mail, Headphones } from "lucide-react";

export default function HeroContactUs() {
  function handleCall() {
    window.location.href = "tel:+441234567890";
  }

  function handleWhatsApp() {
    const url =
      "https://wa.me/441234567890?text=" +
      encodeURIComponent("Assalamu Alaikum, I would like to inquire about Umrah packages.");
    window.open(url, "_blank");
  }

  function handleEmail() {
    window.location.href = "mailto:info@ihsantravels.com";
  }

  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ── Left: Text ── */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full w-fit">
            <Headphones className="w-4 h-4" />
            We're Here to Help
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl  font-medium text-gray-900 leading-tight">
            Get in Touch  With Us
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md">
            We're here to help you plan your Umrah journey. Our team responds within 1-2 hours during business hours.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-2">
            <button
              onClick={handleCall}
              className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-semibold px-6 py-3.5 rounded-2xl transition-colors duration-150 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-semibold px-6 py-3.5 rounded-2xl transition-colors duration-150 text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
            <button
              onClick={handleEmail}
              className="flex items-center gap-2 border-2 border-gray-300 hover:border-blue-900 hover:text-blue-900 text-gray-700 font-semibold px-6 py-3.5 rounded-2xl transition-colors duration-150 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              Email
            </button>
          </div>
        </div>
         {/* ⭐ TRUSTPILOT (image ke upar, center aligned like design) */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20">
            <TrustpilotBadge />
          </div>

        {/* ── Trustpilot Badge — page top center ── */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5    px-3 py-1.5 rounded-full shadow-sm border border-gray-100"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >    <div className="flex items-center gap-2 sm:gap-3   rounded-full px-3 sm:px-4 py-1.5 sm:py-2 ">
            {/* Avatar stack */}

            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1e3a8a] border-2 border-white flex items-center justify-center text-white"
                >
                  <Users size={12} />
                </div>
              ))}
            </div>

            {/* Trustpilot text */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              <svg width="14" sm="16" height="16" viewBox="0 0 24 24" fill="#1C398E">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
              <div>
                <p className="text-[10px] sm:text-[12px] font-bold text-[#1C398E] leading-none">Trustpilot</p>
                <p className="text-[8px] sm:text-[10px] text-[#1C398E] leading-none mt-0.5 whitespace-nowrap">Trusted by 40+ clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Image ── */}
        <div className="relative flex  w-full min-h-[400px] lg:min-h-[600px]">



          {/* Watercolor blob */}
          <div
            className="absolute inset-0 z-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse 85% 85% at 50% 55%, #dce8f8 0%, #eaf1fb 45%, transparent 75%)",
              filter: "blur(8px)",
              transform: "scale(1.05)",
            }}
          />

          {/* Decorative dots */}
          <div className="absolute top-10 left-2 w-3 h-3 rounded-full bg-blue-200 opacity-70 z-10" />
          <div className="absolute top-20 left-14 w-2 h-2 rounded-full bg-blue-300 opacity-50 z-10" />
          <div className="absolute top-6 right-10 w-2 h-2 rounded-full bg-blue-300 opacity-40 z-10" />
          <div className="absolute bottom-16 right-4 w-4 h-4 rounded-full bg-blue-200 opacity-60 z-10" />
          <div className="absolute bottom-8 right-20 w-2 h-2 rounded-full bg-blue-400 opacity-35 z-10" />
          <div className="absolute bottom-24 left-6 w-3 h-3 rounded-full bg-gray-300 opacity-50 z-10" />
          <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full bg-gray-200 opacity-40 z-10" />

          {/* Main Image */}
          <div className="relative z-10 w-full h-full">
            <img
              src="/Images/Makkah.webp"
              alt="Masjid al-Haram Makkah"
              className="w-full h-full object-contain"
              style={{
                maskImage:
                  "radial-gradient(ellipse 88% 88% at 50% 52%, black 45%, rgba(0,0,0,0.6) 62%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 88% 88% at 50% 52%, black 45%, rgba(0,0,0,0.6) 62%, transparent 80%)",
                maxHeight: "620px",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}