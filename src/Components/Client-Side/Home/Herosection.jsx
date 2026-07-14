"use client";
import { Users } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import { API_INQUIRY_SUBMIT } from "@/constants/api";
import Link from 'next/link';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{13}$/.test(form.phone)) {
      setStatus("error");
      setErrorMsg("Phone number must be exactly 13 digits.");
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

                          if (value.length <= 13) {
                            handleChange({
                              target: {
                                name: "phone",
                                value,
                              },
                            });
                          }
                        }}
                        required
                        maxLength={13}
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
    </section>
  );
}