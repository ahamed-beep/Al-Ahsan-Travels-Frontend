"use client";
import { Users } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import { API_INQUIRY_SUBMIT } from "@/constants/api";
import Link from 'next/link';

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1QeAP2yNs3/",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/alahsantravelsuk?utm_source=qr&igsh=M3dqN2M2dnNhaGg5",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@alahsantravelsuk?_r=1&_t=ZS-96vm8oGdDkm",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:01216670366",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:info@alahsantravels.co.uk.",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Chat",
    href: "tel:+447440064066",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

const DEFAULT_FORM = {
  fullName: "",
  phone: "",
  departureDate: "",
  departureAirport: "",
  adults: "",
  children: "",
};

export default function HeroSection() {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [waPulse, setWaPulse] = useState(false);

  const airportInputRef = useRef(null);
  const airportAutocompleteRef = useRef(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  useEffect(() => {
    const init = () => {
      if (!window.google || !airportInputRef.current) return;

      airportAutocompleteRef.current = new window.google.maps.places.Autocomplete(airportInputRef.current, {
        types: ["airport"],
        fields: ["name", "formatted_address"],
      });

      airportAutocompleteRef.current.addListener("place_changed", () => {
        const place = airportAutocompleteRef.current.getPlace();
        if (!place?.name) return;
        setForm((prev) => ({ ...prev, departureAirport: place.name }));
      });
    };

    if (window.google) {
      init();
    } else {
      const interval = setInterval(() => {
        if (window.google) {
          clearInterval(interval);
          init();
        }
      }, 200);
      return () => clearInterval(interval);
    }

    return () => {
      if (airportAutocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(airportAutocompleteRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const runPulse = () => {
      setWaPulse(true);
      setTimeout(() => setWaPulse(false), 2000);
    };

    runPulse();
    const interval = setInterval(runPulse, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{11}$/.test(form.phone)) {
      setStatus("error");
      setErrorMsg("Phone number must be exactly 11 digits.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await axiosInstance.post(API_INQUIRY_SUBMIT, {
        fullName: form.fullName,
        phone: form.phone,
        departureDate: form.departureDate || undefined,
        departureAirport: form.departureAirport || undefined,
        adults: form.adults ? Number(form.adults) : undefined,
        children: form.children ? Number(form.children) : undefined,
      });

      setStatus("success");
      setForm(DEFAULT_FORM);
    } catch (err) {
      setErrorMsg(
        err?.response?.data?.message ||
        "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen sm:min-h-[580px] lg:min-h-[600px] overflow-hidden bg-black">

      {/* Full page background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="Images/IMG_0722.JPG.webp"
          alt="Makkah"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 lg:py-20 min-h-screen sm:min-h-[580px] lg:min-h-[600px] flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-12">

          {/* Left: heading + description */}
          <div className="flex-1 ml-10 text-center lg:text-left lg:max-w-xl xl:max-w-2xl">
            <h1 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[52px] font-extrabold text-white leading-tight tracking-tight">
              Your Journey to the
              <br className="hidden sm:block" />
              <span className="text-[#4ade80]">Sacred Lands</span>
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-7 md:mt-8">
              <Link
                href="#FeaturedPackages"
                className="inline-flex items-center px-5 sm:px-6 py-2 sm:py-2.5 bg-[#1e3a8a] text-white text-[13px] sm:text-[14px] font-semibold rounded-full hover:bg-[#1e40af] transition-colors shadow-md"
              >
                View All Packages
              </Link>
              <a
                href="/contactus"
                className="inline-flex items-center px-5 sm:px-6 py-2 sm:py-2.5 bg-white text-[#1e3a8a] text-[13px] sm:text-[14px] font-semibold rounded-full hover:bg-[#f0f4ff] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right: dark glass form card */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:w-[420px] xl:w-[450px] shrink-0">
            <div className="bg-black/60 border border-white/10 rounded-2xl shadow-2xl p-5 sm:p-6 md:p-7 backdrop-blur-md">
              <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white mb-1">
                Plan Your Perfect Umrah Journey
              </h2>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-8 text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg width="28" height="28" fill="none" stroke="#4ade80" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-base font-semibold text-white">Quote Submitted Successfully</p>
                  <p className="text-xs text-gray-300">
                    We will contact you within 24 hours with your personalized quote.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 px-5 py-2 bg-[#1e3a8a] text-white text-sm font-semibold rounded-xl hover:bg-[#1e40af] transition"
                  >
                    Submit Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

                  {status === "error" && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] sm:text-[12px] font-medium text-gray-300 mb-1 uppercase tracking-wide">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text" name="fullName" placeholder="Full Name"
                        value={form.fullName} onChange={handleChange} required
                        className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] bg-white/10 border border-white/15 text-white rounded-lg focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] sm:text-[12px] font-medium text-gray-300 mb-1 uppercase tracking-wide">
                        Phone <span className="text-red-400">*</span>
                      </label>

                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");

                          if (value.length <= 11) {
                            handleChange({
                              target: {
                                name: "phone",
                                value,
                              },
                            });
                          }
                        }}
                        required
                        maxLength={11}
                        inputMode="numeric"
                        className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] bg-white/10 border border-white/15 text-white rounded-lg focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-gray-300 mb-1 uppercase tracking-wide">
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        Departure Date
                      </label>
                      <input
                        type="date" name="departureDate"
                        value={form.departureDate} onChange={handleChange}
                        className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] bg-white/10 border border-white/15 text-white rounded-lg focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition [color-scheme:dark]"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-gray-300 mb-1 uppercase tracking-wide">
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
                        </svg>
                        Departure Airport
                      </label>
                      <input
                        ref={airportInputRef}
                        type="text"
                        name="departureAirport"
                        placeholder="e.g. Heathrow"
                        value={form.departureAirport}
                        onChange={handleChange}
                        autoComplete="off"
                        className="airport-input w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] bg-white/10 border border-white/15 text-white rounded-lg focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-gray-300 mb-1 uppercase tracking-wide">
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                        </svg>
                        Adults
                      </label>
                      <input
                        type="number" name="adults" min="1" placeholder="1"
                        value={form.adults} onChange={handleChange}
                        className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] bg-white/10 border border-white/15 text-white rounded-lg focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-gray-300 mb-1 uppercase tracking-wide">
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                        </svg>
                        Children
                      </label>
                      <input
                        type="number" name="children" min="0" placeholder="0"
                        value={form.children} onChange={handleChange}
                        className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] bg-white/10 border border-white/15 text-white rounded-lg focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-2.5 bg-[#1e3a8a] text-white text-[14px] sm:text-[15px] font-semibold rounded-xl hover:bg-[#1e40af] active:scale-[0.98] transition-all duration-150 shadow-md mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        Submit
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] sm:text-[11px] text-gray-400 mt-2">
                    No payment required. We&apos;ll send you a personalized quote within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/447440064066"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed left-0 top-1/2 -translate-y-1/2 z-50 flex items-center cursor-pointer"
        aria-label="WhatsApp"
      >
        <span
          className={`ml-4 group-hover:ml-2 max-w-0 group-hover:max-w-xs opacity-0 group-hover:opacity-100 overflow-hidden whitespace-nowrap bg-[#25D366] text-white text-sm font-medium px-0 group-hover:px-3 py-2 rounded-r-lg shadow-lg transition-all duration-300 order-2 ${
            waPulse ? "!ml-2 !max-w-xs !opacity-100 !px-3" : ""
          }`}
        >
          +44 7440 064066
        </span>

        <span className="w-10 h-10 bg-[#25D366] rounded-r-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform order-1">
          <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
      </a>

      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 sm:gap-2">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            onMouseEnter={() => setHoveredSocial(s.label)}
            onMouseLeave={() => setHoveredSocial(null)}
            style={{
              transform: hoveredSocial === s.label ? "translateX(-16px)" : "translateX(0)",
              transition: "transform 0.2s ease-out",
            }}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1e3a8a] rounded-l-lg text-white flex items-center justify-center hover:bg-[#1e40af] transition-colors shadow-md"
          >
            {s.icon}
          </a>
        ))}
      </div>

      <style jsx>{`
        .airport-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
}