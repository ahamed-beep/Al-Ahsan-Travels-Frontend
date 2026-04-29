"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function HeroSpecialPackage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    departureDate: "",
    departureAirport: "",
    adults: "",
    children: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted!");
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">

      {/* Background Image */}
      <img
        src="/Images/Shifting.jpg"
        alt="Umrah"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className=" ml-10 mb-30 text-center lg:text-left space-y-6">
          <h1 className="text-3xl text-[#FFFFFF] md:text-4xl font-bold md:whitespace-nowrap">
            Family Umrah Packages 2025
          </h1>
          <p className="text-lg text-center items-center text-[#ffffff] max-w-xl">
            Create precious memories with your loved ones on a spiritually
            enriching journey designed for families
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-[#FFFFFF]">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-[#FFFFFF]" /> Flights + Visa Included
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-[#FFFFFF]]" /> Family-Friendly Hotels
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 [#FFFFFF]" /> 24/7 Support
            </span>
          </div>
        </div>

        {/* RIGHT SIDE — Form Card */}
        <div className="w-full max-w-md mx-auto lg:ml-auto lg:w-[420px] xl:w-[470px] shrink-0">
          <div className="bg-[#ffffff] rounded-2xl shadow-xl p-5 sm:p-6 md:p-7">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#101828] mb-4 sm:mb-5">
              Plan Your Perfect Umrah Journey
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

              {/* Row 1 — Full Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#364153] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Ali"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#364153] mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+44 20 1234 5678"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Row 2 — Departure Date + Airport */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="flex items-center gap-1 text-xs font-medium text-[#364153] mb-1">
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
                    value={formData.departureDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition text-gray-500"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1 text-xs font-medium text-[#364153] mb-1">
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                    Departure Airport
                  </label>
                  <input
                    type="text"
                    name="departureAirport"
                    placeholder="e.g. Heathrow"
                    value={formData.departureAirport}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Row 3 — Adults + Children */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="flex items-center gap-1 text-xs font-medium text-[#364153] mb-1">
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
                    value={formData.adults}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1 text-xs font-medium text-[#364153] mb-1">
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
                    value={formData.children}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition "
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1C398E] text-[#ffffff] text-sm font-semibold rounded-xl  active:scale-[0.98] transition-all duration-150 shadow-md mt-2"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Get Free Quote
              </button>

              <p className="text-center text-[10px] sm:text-xs text-[#6A7282] mt-2">
                No payment required. We&apos;ll send you a personalized quote within 24 hours.
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}