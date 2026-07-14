"use client";

import { useState, useRef } from "react";
import { Check, Send } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { API_INQUIRY_SUBMIT } from "@/constants/api";
import AirportSearch from "../AirportSearch/AirportSearch";

export default function FiveStarHero() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    departureDate: "",
    departureAirport: "",
    adults: "",
    children: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const successRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

const validate = () => {
    if (!formData.fullName.trim()) return "Please enter your full name.";
    if (!formData.phone.trim()) return "Phone number is required.";
    if (formData.phone.length < 10 || formData.phone.length > 13)
      return "Phone number must be between 10 and 13 digits.";
    if (!formData.adults || Number(formData.adults) < 1)
      return "At least 1 adult is required.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) return setError(validationError);

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await axiosInstance.post(API_INQUIRY_SUBMIT, {
        fullName: formData.fullName,
        phone: formData.phone,
        departureDate: formData.departureDate || undefined,
        departureAirport: formData.departureAirport || undefined,
        adults: Number(formData.adults),
        children: Number(formData.children) || 0,
      });

      setSuccess(true);
      setFormData({
        fullName: "",
        phone: "",
        departureDate: "",
        departureAirport: "",
        adults: "",
        children: "",
      });
      successRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Something went wrong. Please try again.";
      setError(Array.isArray(msg) ? msg.join(", ") : msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">

      {/* Background Image */}
      <img
        src="Images/IMG_0722.JPG.webp"
        alt="Umrah"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center justify-center text-center gap-5">
          <span className="bg-[#1C398E] bg-opacity-80 px-5 py-2 rounded-full text-sm text-white">
            Affordable 5-Star Umrah Packages
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#FFFFFF]">Your Spiritual Journey</span> <br />
            <span className="bg-gradient-to-r from-[#8EC5FF] to-[#DBEAFE] bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>
          <p className="text-[#DBEAFE] max-w-xl">
            Experience a comfortable and affordable Umrah pilgrimage with our
            carefully curated packages. Trusted service and support.
          </p>
        </div>

        {/* RIGHT SIDE — Form Card */}
        <div className="w-full max-w-md mx-auto lg:ml-auto lg:w-[420px] xl:w-[470px] shrink-0">
          <div className="bg-[#ffffff] rounded-2xl shadow-xl p-5 sm:p-6 md:p-7">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#101828] mb-4 sm:mb-5">
              Plan Your Perfect Umrah Journey
            </h2>

            {/* Success Message */}
            {success && (
              <div
                ref={successRef}
                className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm flex items-center gap-2"
              >
                <Check className="w-4 h-4 shrink-0" />
                Your request has been submitted! We'll contact you within 24 hours.
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

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
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, ""); // sirf numbers allow
                      if (value.length <= 13) {
                        handleChange({ target: { name: "phone", value } });
                      }
                    }}
                    required
                    maxLength={13}
                    inputMode="numeric"
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
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

              {/* Row 3 — Adults + Children */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="flex items-center gap-1 text-xs font-medium text-[#364153] mb-1">
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Adults <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="adults"
                    min="1"
                    placeholder="1"
                    value={formData.adults}
                    onChange={handleChange}
                    required
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
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1C398E] text-[#ffffff] text-sm font-semibold rounded-xl active:scale-[0.98] transition-all duration-150 shadow-md mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Get Free Quote
                  </>
                )}
              </button>

              <p className="text-center text-[10px] sm:text-xs text-[#6A7282] mt-2">
                No payment required. We'll send you a personalized quote within 24 hours.
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}