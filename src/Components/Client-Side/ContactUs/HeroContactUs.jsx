"use client";

import { Phone, MessageCircle, Users, Mail, Headphones } from "lucide-react";

export default function HeroContactUs() {
  function handleCall() {
    window.location.href = "tel:+441234567890";
  }

  function handleWhatsApp() {
    const url =
      "https://wa.me/441234567890?text=" +
      encodeURIComponent(
        "Assalamu Alaikum, I would like to inquire about Umrah packages."
      );
    window.open(url, "_blank");
  }

  function handleEmail() {
    window.location.href = "mailto:info@ihsantravels.com";
  }

  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">

      {/* Trustpilot Badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white border border-gray-100 shadow-sm rounded-full px-3 py-1.5 whitespace-nowrap">
        <div className="flex -space-x-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full bg-[#1e3a8a] border-2 border-white flex items-center justify-center text-white"
            >
              <Users size={11} />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#1C398E">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
          <div>
            <p className="text-[11px] font-bold text-[#1C398E] leading-none">
              Trustpilot
            </p>
            <p className="text-[9px] text-[#1C398E] leading-none mt-0.5">
              Trusted by 40+ clients
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-20 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

        {/* ── Left: Text ── */}
        <div className="flex flex-col gap-5 text-center lg:text-left items-center lg:items-start order-1">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full">
            <Headphones className="w-4 h-4" />
            We're Here to Help
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
            Get in Touch With Us
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
            We're here to help you plan your Umrah journey. Our team responds
            within 1–2 hours during business hours.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-1 w-full">
            <button
              onClick={handleCall}
              className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-semibold px-5 py-3 rounded-2xl transition-colors duration-150 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-semibold px-5 py-3 rounded-2xl transition-colors duration-150 text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
            <button
              onClick={handleEmail}
              className="flex items-center gap-2 border-2 border-gray-300 hover:border-blue-900 hover:text-blue-900 text-gray-700 font-semibold px-5 py-3 rounded-2xl transition-colors duration-150 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              Email
            </button>
          </div>
        </div>

        {/* ── Right: Image ── */}
        <div className="relative flex items-center justify-center w-full min-h-[260px] sm:min-h-[380px] lg:min-h-[560px] order-2">

          {/* Blob */}
          <div
            className="absolute inset-0 z-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse 85% 85% at 50% 55%, #dce8f8 0%, #eaf1fb 45%, transparent 75%)",
              filter: "blur(8px)",
              transform: "scale(1.05)",
            }}
          />

          {/* Dots */}
          <div className="absolute top-10 left-2 w-3 h-3 rounded-full bg-blue-200 opacity-70 z-10" />
          <div className="absolute top-20 left-14 w-2 h-2 rounded-full bg-blue-300 opacity-50 z-10" />
          <div className="absolute top-6 right-10 w-2 h-2 rounded-full bg-blue-300 opacity-40 z-10" />
          <div className="absolute bottom-16 right-4 w-4 h-4 rounded-full bg-blue-200 opacity-60 z-10" />
          <div className="absolute bottom-8 right-20 w-2 h-2 rounded-full bg-blue-400 opacity-35 z-10" />
          <div className="absolute bottom-24 left-6 w-3 h-3 rounded-full bg-gray-300 opacity-50 z-10" />
          <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full bg-gray-200 opacity-40 z-10" />

          {/* Image */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <img
              src="/Images/Makkah.webp"
              alt="Masjid al-Haram Makkah"
              className="w-full h-auto object-contain"
              style={{
                maskImage:
                  "radial-gradient(ellipse 88% 88% at 50% 52%, black 45%, rgba(0,0,0,0.6) 62%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 88% 88% at 50% 52%, black 45%, rgba(0,0,0,0.6) 62%, transparent 80%)",
                maxHeight: "580px",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}