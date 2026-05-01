"use client";

import { useState } from "react";

import { Plane, FileText, Building } from "lucide-react";

export default function LondonHero() {
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
      <div className="relative z-10 ml-10 max-w-7xl w-full px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="lg:ml-10 text-center lg:text-left space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#ffffff]">
           Umrah Packages from London 2026
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white max-w-xl mx-auto lg:mx-0">
          Complete Umrah travel solutions with flights, visa, hotels, and support from London
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm text-white">
           <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2B7FFF33] backdrop-blur-md border border-white/30 shadow-sm">
                            <Plane className="w-4 h-4 text-white" />
                            Flights Included
                        </span>

                        {/* Visa */}
                        <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2B7FFF33] backdrop-blur-md border border-white/30 shadow-sm">
                            <FileText className="w-4 h-4 text-white" />
                            Visa Included
                        </span>

                        {/* Hotels */}
                        <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2B7FFF33] backdrop-blur-md border border-white/30 shadow-sm">
                            <Building className="w-4 h-4 text-white" />
                            Hotels Included
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
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800"
                  />
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
                  <input
                    type="text"
                    name="departureAirport"
                    placeholder="e.g. Heathrow"
                    value={formData.departureAirport}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg"
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