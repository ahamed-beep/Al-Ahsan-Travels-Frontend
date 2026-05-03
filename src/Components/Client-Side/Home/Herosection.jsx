"use client";
import { Users } from "lucide-react";
import { useState, } from "react";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+442012345678",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:info@alahsan.com",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Chat",
    href: "#",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    departureDate: "",
    departureAirport: "",
    adults: "",
    children: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section id="hero" className="relative w-full min-h-screen sm:min-h-[580px] lg:min-h-[600px] overflow-hidden bg-[#FFFFFF]">

      {/* ── Background Hero Image ── */}
      <div className="absolute inset-0 z-0">
        {/* Desktop & Tablet Image */}
        <img
          src="/Images/Makkah.webp"
          alt="Makkah"
          className="
    w-full h-full object-cover
    object-center md:object-left
    opacity-20 md:opacity-20
    md:absolute md:left-0 md:top-0
    md:w-[55%] lg:w-[60%] xl:w-[55%]
  "
        />
        {/* Gradient overlay for better text visibility on all screens */}
        <div className="absolute inset-0  via-white/95 to-white/80 md:via-white/90 md:to-transparent lg:via-white/80" />
        <div className="absolute inset-0 md:hidden bg-white/50" />
      </div>

      {/* ── Trustpilot Badge — top center ── */}
      <div className="relative z-10 flex justify-center pt-4 sm:pt-5 md:pt-6 px-3 sm:px-4">
        <div className="flex items-center gap-2 sm:gap-3   rounded-full px-3 sm:px-4 py-1.5 sm:py-2 ">
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

      {/* ── Main content row ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">

          {/* Left — Headline + Buttons */}
          <div className="flex-1 text-center mb-45 ml-20 lg:text-left lg:max-w-xl xl:max-w-2xl">
            <h1 className="text-[28px]  sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[52px] font-semibold text-[#1e3a8a] leading-tight tracking-tight">
              Your Journey to the
              <br className="hidden sm:block" />
              Sacred Lands
            </h1>

            <div className="flex  flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-7 md:mt-8">
              <a
                href="/packages"
                className="inline-flex items-center px-5  sm:px-6 py-2 sm:py-2.5 bg-[#1e3a8a] text-white text-[13px] sm:text-[14px] font-semibold rounded-full hover:bg-[#1e40af] transition-colors shadow-md"
              >
                View All Packages
              </a>
              <a
                href="/contactus"
                className="inline-flex items-center px-5 sm:px-6 py-2 sm:py-2.5 bg-white text-[#1e3a8a] text-[13px] sm:text-[14px] font-semibold rounded-full  hover:bg-[#f0f4ff] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right — Form Card */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:w-[420px] xl:w-[470px] shrink-0">
            <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-7">
              <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-gray-900 mb-4 sm:mb-5">
                Plan Your Perfect Umrah Journey
              </h2>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Row 1 — Full Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3">
                  <div>
                    <label className="block text-[11px] sm:text-[12px] font-medium text-gray-600 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Ali"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-[12px] font-medium text-gray-600 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+44 20 1234 5678"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Row 2 — Departure Date + Airport */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3">
                  <div>
                    <label className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-gray-600 mb-1">
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Departure Date
                    </label>
                    <input
                      type="date"
                      name="departureDate"
                      value={form.departureDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-gray-600 mb-1">
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Departure Airport
                    </label>
                    <input
                      type="text"
                      name="departureAirport"
                      placeholder="e.g. Heathrow"
                      value={form.departureAirport}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Row 3 — Adults + Children */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3">
                  <div>
                    <label className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-gray-600 mb-1">
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      Adults
                    </label>
                    <input
                      type="number"
                      name="adults"
                      min="1"
                      placeholder="1"
                      value={form.adults}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-gray-600 mb-1">
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87" />
                        <path d="M16 3.13a4 4 0 010 7.75" />
                      </svg>
                      Children
                    </label>
                    <input
                      type="number"
                      name="children"
                      min="0"
                      placeholder="0"
                      value={form.children}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] transition placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-2.5 bg-[#1e3a8a] text-white text-[14px] sm:text-[15px] font-semibold rounded-xl hover:bg-[#1e40af] active:scale-[0.98] transition-all duration-150 shadow-md mt-2"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Get Free Quote
                </button>

                <p className="text-center text-[10px] sm:text-[11px] text-gray-400 mt-2">
                  No payment required. We&apos;ll send you a personalized quote within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── WhatsApp floating button (left) ── */}
      <a
        href="https://wa.me/442012345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 w-10 h-10 bg-[#1e3a8a] rounded-r-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* ── Right side social bar ── */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 sm:gap-2">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1e3a8a] rounded-l-lg text-white flex items-center justify-center hover:bg-[#1e40af] transition-colors shadow-md"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
}