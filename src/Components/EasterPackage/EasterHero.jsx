"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import AirportSearch from "../Client-Side/AirportSearch/AirportSearch";

export default function EasterHero() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    departureDate: "",
    departureAirport: "",
    adults: "",
    children: "",
  });

  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d+]/g, "");
    setFormData({ ...formData, phone: value });
    if (phoneError) setPhoneError("");
  };

const handleSubmit = (e) => {
    e.preventDefault();

    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (digitsOnly.length < 10 || digitsOnly.length > 13) {
      setPhoneError("Phone number must be between 10 and 13 digits.");
      return;
    }

    console.log(formData);
    alert("Form Submitted!");
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">

      {/* Background Image */}
      <img
        src="Images/IMG_0722.JPG.webp"
        alt="Umrah"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="lg:ml-10 text-center lg:text-left space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            Easter Umrah Packages
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white max-w-xl mx-auto lg:mx-0">
            Make the most of your Easter break with a spiritual journey to the Holy Cities
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm text-white">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-white" /> Flights + Visa Included
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-white" /> Group-Friendly Hotels
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-white" /> 24/7 Support
            </span>
          </div>
        </div>

        {/* RIGHT SIDE — Form Card */}
        <div className="w-full max-w-md mx-auto lg:ml-auto lg:w-[420px] xl:w-[470px]">
          <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-7">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#101828] mb-4 sm:mb-5">
              Plan Your Perfect Umrah Journey
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

              {/* Row 1 */}
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
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800"
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
                    onChange={handlePhoneChange}
                    required
                    inputMode="tel"
                    className={`w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-1 ${
                      phoneError
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-[#D1D5DC] focus:border-blue-800 focus:ring-blue-800"
                    }`}
                  />
                  {phoneError && (
                    <p className="text-red-500 text-[10px] sm:text-xs mt-1">{phoneError}</p>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="flex items-center gap-1 text-xs font-medium text-[#364153] mb-1">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1 text-xs font-medium text-[#364153] mb-1">
                    Departure Airport
                  </label>
           <AirportSearch
  name="departureAirport"
  value={formData.departureAirport}
  onChange={handleChange}
  placeholder="e.g. Heathrow"
/>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="number"
                  name="adults"
                  min="1"
                  placeholder="Adults"
                  value={formData.adults}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg"
                />

                <input
                  type="number"
                  name="children"
                  min="0"
                  placeholder="Children"
                  value={formData.children}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-2.5 bg-[#1C398E] text-white text-sm font-semibold rounded-xl shadow-md mt-2"
              >
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