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

  const TrustpilotBadge = () => (
    <div className="flex items-center gap-1 px-3.5 py-1.5 whitespace-nowrap">
      <div className="flex">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-[30px] h-[30px] rounded-full bg-[#1C398E] border-2 border-white -ml-2 first:ml-0 flex items-center justify-center text-white"
          >
            <Users size={14} />
          </div>
        ))}
      </div>
      <div className="flex ml-1">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#1C398E">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
        <div>
          <p className="text-sm font-bold text-[#1C398E] leading-none">Trustpilot</p>
          <p className="text-sm text-[#1C398E] leading-none mt-0.5">Trusted by 40+ clients</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative mt-5 md:mt-10 bg-white overflow-hidden ">

      {/* Desktop Trustpilot */}
      <div className="hidden lg:flex absolute top-6 right-65 -translate-x-1/2 z-20">
        <TrustpilotBadge />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-2 min-h-screen">
        <div className="flex flex-col gap-3 items-center justify-center px-16 mb-50">
          <div className="inline-flex items-center gap-2 bg-[#8EC5FFB5] text-[#1C398E] font-inter text-sm font-medium px-4 py-2 rounded-full">
            <Headphones className="w-4 h-4" />
            We&#39;re Here to Help
          </div>
          <h1 className="text-5xl font-semibold text-[#101828] leading-tight">
            Get in Touch With Us
          </h1>
          <p className="text-[#4A5565] text-center font-inter text-base leading-relaxed max-w-md">
            We&#39;re here to help you plan your Umrah journey. Our team responds
            within 1&#8211;2 hours during business hours.
          </p>
          <div className="flex flex-wrap gap-3 mt-1">
            <button onClick={handleCall} className="flex items-center gap-2 bg-[#1C398E] hover:bg-[#162d72] text-white font-semibold px-5 py-4 rounded-xl transition-colors duration-150 text-sm">
              <Phone className="w-4 h-4" />Call Now
            </button>
            <button onClick={handleWhatsApp} className="flex items-center gap-2 bg-[#1C398E] hover:bg-[#162d72] text-white font-semibold px-5 py-2.5 rounded-xl transition-colors duration-150 text-sm">
              <MessageCircle className="w-4 h-4" />WhatsApp
            </button>
            <button onClick={handleEmail} className="flex items-center gap-2 border-2 border-[#1C398E] hover:border-[#1C398E] hover:text-[#1C398E] text-[#1C398E] font-semibold px-5 py-2.5 rounded-xl transition-colors duration-150 text-sm">
              <Mail className="w-4 h-4" />Email
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center h-screen">
          <img
            src="/Images/ContactusorAbout.png"
            alt="Masjid al-Haram Makkah"
            style={{ transform: "scale(1.16)", transformOrigin: "center center" }}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col lg:hidden">

        {/* Mobile Image — full width, no padding */}
        <div className="relative w-full h-full">
          <div className="absolute  left-40 -translate-x-1/2 z-10">
            <TrustpilotBadge />
          </div>
          <img
            src="/Images/ContactusorAbout.png"
            alt="Masjid al-Haram Makkah"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Mobile Text */}
        <div className="flex flex-col gap-4 items-center text-center px-6 ">
          <div className="inline-flex items-center gap-2 bg-[#8EC5FFB5] text-[#1C398E] text-sm font-medium px-4 py-2 rounded-full">
            <Headphones className="w-4 h-4" />
            We&#39;re Here to Help
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#101828] leading-tight">
            Get in Touch With Us
          </h1>
          <p className="text-[#4A5565] text-sm sm:text-base leading-relaxed max-w-sm">
            We&#39;re here to help you plan your Umrah journey. Our team responds
            within 1&#8211;2 hours during business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-1">
            <button onClick={handleCall} className="flex items-center gap-2 bg-[#1C398E] hover:bg-[#162d72] text-white font-semibold px-5 py-3 rounded-xl transition-colors duration-150 text-sm">
              <Phone className="w-4 h-4" />Call Now
            </button>
            <button onClick={handleWhatsApp} className="flex items-center gap-2 bg-[#1C398E] hover:bg-[#162d72] text-white font-semibold px-5 py-3 rounded-xl transition-colors duration-150 text-sm">
              <MessageCircle className="w-4 h-4" />WhatsApp
            </button>
            <button onClick={handleEmail} className="flex items-center gap-2 border-2 border-[#1C398E] text-[#1C398E] font-semibold px-5 py-3 rounded-xl transition-colors duration-150 text-sm">
              <Mail className="w-4 h-4" />Email
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}