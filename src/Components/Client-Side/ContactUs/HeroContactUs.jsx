"use client";

import { Phone, MessageCircle, Users, Mail, Headphones } from "lucide-react";

export default function HeroContactUs() {
  function handleCall() {
    window.location.href = "tel:+441216670366";
  }

  function handleWhatsApp() {
    const url =
      "https://wa.me/441216670366?text=" +
      encodeURIComponent("Assalamu Alaikum, I would like to inquire about Umrah packages.");
    window.open(url, "_blank");
  }

  function handleEmail() {
    window.location.href = "mailto:info@alahsantravels.co.uk";
  }

  const TrustpilotBadge = () => (
    <div className="flex items-center gap-1 px-3.5 py-1.5 whitespace-nowrap bg-white/90 backdrop-blur-sm rounded-full shadow-md">
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
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img
          src="/Images/IMG_0722.JPG.webp"
          alt="Makkah"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/40" />
      </div>

      <div className="absolute top-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-16 lg:translate-x-0 z-20">
        <a
          href="https://www.trustpilot.com/review/alahsantravels.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TrustpilotBadge />
        </a>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen flex items-center justify-center">
        <div className="flex flex-col gap-4 sm:gap-5 items-center justify-center text-center max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#8EC5FFB5] text-[#1C398E] font-inter text-sm font-medium px-4 py-2 rounded-full">
            <Headphones className="w-4 h-4" />
            We&#39;re Here to Help
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Get in Touch With Us
          </h1>
          <p className="text-gray-200 text-center font-inter text-sm sm:text-base leading-relaxed max-w-md">
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
            <button onClick={handleEmail} className="flex items-center gap-2 border-2 border-white hover:bg-white hover:text-[#1C398E] text-white font-semibold px-5 py-3 rounded-xl transition-colors duration-150 text-sm">
              <Mail className="w-4 h-4" />Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}