"use client";

import { Phone, MessageCircle, Users, Mail, Headphones } from "lucide-react";

export default function HeroContactUs() {
  function handleCall() {
    window.location.href = "tel:+447440064066";
  }

  function handleWhatsApp() {
    const url =
      "https://wa.me/447440064066?text=" +
      encodeURIComponent("Assalamu Alaikum, I would like to inquire about Umrah packages.");
    window.open(url, "_blank");
  }

  function handleEmail() {
    window.location.href = "mailto:info@alahsantravels.co.uk";
  }

  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">

      {/* Trustpilot Badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white border border-gray-100 shadow-md rounded-full px-3 py-1.5 whitespace-nowrap">
        <div className="flex -space-x-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full bg-[#1C398E] border-2 border-white flex items-center justify-center text-white"
            >
              <Users size={11} />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5 ml-1">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#1C398E">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
          <div>
            <p className="text-[11px] font-bold text-[#1C398E] leading-none">Trustpilot</p>
            <p className="text-[9px] text-[#1C398E] leading-none mt-0.5">Trusted by 40+ clients</p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-16 pb-0 grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* ── Left: Text ── */}
        <div className="flex flex-col gap-5 text-left items-start order-1 -mt-10 lg:-mt-16">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full">
            <Headphones className="w-4 h-4" />
            We're Here to Help
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Get in Touch With Us
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-sm">
            We're here to help you plan your Umrah journey. Our team responds
            within 1–2 hours during business hours.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-1">
            <button
              onClick={handleCall}
              className="flex items-center gap-2 bg-[#1C398E] hover:bg-[#162d72] text-white font-semibold px-5 py-2.5 rounded-2xl transition-colors duration-150 text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-[#1C398E] hover:bg-[#162d72] text-white font-semibold px-5 py-2.5 rounded-2xl transition-colors duration-150 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
            <button
              onClick={handleEmail}
              className="flex items-center gap-2 border border-gray-300 hover:border-[#1C398E] hover:text-[#1C398E] text-gray-600 font-semibold px-5 py-2.5 rounded-2xl transition-colors duration-150 text-sm"
            >
              <Mail className="w-4 h-4" />
              Email
            </button>
          </div>
        </div>

        {/* ── Right: Image ── */}
        <div className="relative flex items-end justify-center w-full order-2 h-screen max-h-[600px]">
          <img
            src="/Images/ContactusorAbout.png"
            alt="Masjid al-Haram Makkah"
            className="w-full h-full object-contain object-bottom"
          />
        </div>

      </div>
    </section>
  );
}