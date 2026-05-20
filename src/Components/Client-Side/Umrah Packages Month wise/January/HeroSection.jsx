"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, Plane, Clock, FileText, Calendar, MapPin, Users, Baby } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { API_HAJJ_INQUIRY_SUBMIT } from "@/constants/api";

// ✅ Programmatically generate karo — 12 hardcoded entries nahi
const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

const monthData = Object.fromEntries(
  MONTHS.map((m) => [
    m,
    {
      label: `${m.charAt(0).toUpperCase() + m.slice(1)} 2026 Departures`,
      heading: `${m.charAt(0).toUpperCase() + m.slice(1)} Umrah Packages`,
      year: "2026",
      image: "/Images/BackGround.webp",
    },
  ])
);

// ✅ Features array — component se bahar
const features = [
  { icon: Plane,    label: "Flights Included" },
  { icon: FileText, label: "Visa Included" },
  { icon: Clock,    label: "Flexible Duration" },
];

const inputClass =
  "border border-[#D1D5DC] rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition placeholder-gray-400";

const labelClass = "flex items-center gap-1 text-sm font-medium mb-1 block";

export default function HeroSection({ month = "january" }) {
  const data = monthData[month.toLowerCase()] || monthData["january"];

  const [formData, setFormData] = useState({
    name: "", phone: "", date: "", airport: "", adults: "", children: "",
  });

  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError]     = useState("");

  // ✅ Prev state pattern
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setError("");
    setSuccess("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim())    newErrors.name    = "Full Name is required";
    if (!formData.phone.trim())   newErrors.phone   = "Phone Number is required";
    if (!formData.date)           newErrors.date    = "Departure Date is required";
    if (!formData.airport.trim()) newErrors.airport = "Airport is required";
    if (!formData.adults)         newErrors.adults  = "Enter number of adults";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // ✅ NonShiftingHajjSection wali same API + payload structure
      await axiosInstance.post(API_HAJJ_INQUIRY_SUBMIT, {
        fullName:         formData.name,
        phoneNumber:      formData.phone,
        departureDate:    formData.date,
        departureAirport: formData.airport,
        adults:           Number(formData.adults),
        children:         Number(formData.children) || 0,
      });

      setSuccess("Quote request submitted! We'll contact you within 24 hours.");
      setFormData({ name: "", phone: "", date: "", airport: "", adults: "", children: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden">

      {/* ✅ next/image + dark overlay */}
      <div className="absolute inset-0">
        <Image
          src={data.image}
          alt="Kaaba Sharif Makkah"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 py-10 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="text-white space-y-6 ml-8 px-3 sm:px-4">

          <span className="inline-flex items-center gap-2 border ml-30 border-white px-4 py-2 rounded-full text-sm w-fit">
            <Calendar size={14} />
            {data.label}
          </span>

          <h1 className="text-3xl md:text-4xl ml-10 font-bold leading-tight">
            {data.heading}
            <span className="block items-center mt-1">{data.year}</span>
          </h1>

          <p className="text-[#F3F4F6] whitespace-nowrap max-w-md">
            Choose the right package for your journey based on comfort and budget.
          </p>

          {/* ✅ Features — array se */}
          <div className="space-y-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className="flex items-center gap-3 bg-[#c6d7fc] text-[#1C398E] px-4 py-2 rounded-lg w-fit"
                >
                  <Icon size={18} /> {f.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 w-full max-w-md mx-auto">
          <h2 className="text-xl text-[#101828] font-semibold mb-6">
            Plan Your Perfect Umrah Journey
          </h2>

          {/* ✅ Success message — NonShiftingHajjSection style */}
          {success && (
            <p className="mb-4 text-sm text-green-600 text-center">{success}</p>
          )}

          {/* ✅ Global API error */}
          {error && (
            <p className="mb-4 text-sm text-red-500 text-center">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-[#364153]">

            {/* Row 1 — Name + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Full Name <span className="text-red-500">*</span></label>
                <input type="text" name="name" placeholder="Ali Khan"
                  value={formData.name} onChange={handleChange} className={inputClass} />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className={labelClass}>Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" name="phone" placeholder="+44 20 1234 5678"
                  value={formData.phone} onChange={handleChange} className={inputClass} />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Row 2 — Date + Airport */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  <Calendar size={12} /> Departure Date <span className="text-red-500">*</span>
                </label>
                <input type="date" name="date"
                  value={formData.date} onChange={handleChange}
                  className={`${inputClass} text-gray-500`} />
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
              </div>
              <div>
                <label className={labelClass}>
                  <MapPin size={12} /> Departure Airport <span className="text-red-500">*</span>
                </label>
                <input type="text" name="airport" placeholder="e.g. Heathrow"
                  value={formData.airport} onChange={handleChange} className={inputClass} />
                {errors.airport && <p className="text-red-500 text-xs mt-1">{errors.airport}</p>}
              </div>
            </div>

            {/* Row 3 — Adults + Children */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  <Users size={12} /> Adults <span className="text-red-500">*</span>
                </label>
                <input type="number" name="adults" min="1" placeholder="1"
                  value={formData.adults} onChange={handleChange} className={inputClass} />
                {errors.adults && <p className="text-red-500 text-xs mt-1">{errors.adults}</p>}
              </div>
              <div>
                <label className={labelClass}>
                  <Baby size={12} /> Children
                </label>
                <input type="number" name="children" min="0" placeholder="0"
                  value={formData.children} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1C398E] hover:bg-blue-900 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-60 disabled:cursor-not-allowed font-semibold"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={16} /> Get Free Quote
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              No payment required. We&apos;ll send you a personalized quote within 24 hours.
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}