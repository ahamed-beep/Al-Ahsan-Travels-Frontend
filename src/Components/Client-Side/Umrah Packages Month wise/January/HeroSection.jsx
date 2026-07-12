"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, Plane, Clock, FileText, Calendar, MapPin, Users, Baby } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { API_HAJJ_INQUIRY_SUBMIT } from "@/constants/api";
import AirportSearch from "../../AirportSearch/AirportSearch";

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
      image: "Images/IMG_0722.JPG.webp",
    },
  ])
);

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
    else if (formData.phone.length < 11) newErrors.phone = "Phone number must be at least 11 digits";
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
      await axiosInstance.post(API_HAJJ_INQUIRY_SUBMIT, {
        fullName:         formData.name,
        phoneNumber:      formData.phone,
        departureDate:    formData.date,
        departureAirport: formData.airport,
        adults:           Number(formData.adults),
        children:         Number(formData.children) || "",
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

      {/* Background image + overlay */}
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

      {/* Main content grid */}
      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="text-white space-y-5 sm:space-y-6 text-center lg:text-left">

          <span className="inline-flex items-center gap-2 border border-white/70 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs sm:text-sm w-fit mx-auto lg:mx-0">
            <Calendar size={14} />
            {data.label}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            {data.heading}
            <span className="block mt-1">{data.year}</span>
          </h1>

          <p className="text-[#F3F4F6] text-sm sm:text-base max-w-sm mx-auto lg:mx-0">
            Choose the right package for your journey based on comfort and budget.
          </p>

          <div className="flex flex-col items-start lg:items-start gap-2 sm:gap-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className="flex items-center gap-2 sm:gap-3 bg-[#c6d7fc] text-[#1C398E] px-3 sm:px-4 py-2 rounded-lg text-sm font-medium w-fit"
                >
                  <Icon size={16} className="shrink-0" />
                  {f.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
          <h2 className="text-lg sm:text-xl text-[#101828] font-semibold mb-5 sm:mb-6">
            Plan Your Perfect Umrah Journey
          </h2>

          {success && (
            <p className="mb-4 text-sm text-green-600 bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-center">
              {success}
            </p>
          )}

          {error && (
            <p className="mb-4 text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-center">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-[#364153]">

            {/* Row 1 — Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className={labelClass}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ali Khan"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
             <div>
  <label className={labelClass}>
    Phone Number <span className="text-red-500">*</span>
  </label>
  <input
    type="tel"
    name="phone"
    placeholder="03001234567"
    value={formData.phone}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, ""); // sirf numbers allow
      if (value.length <= 11) {
        handleChange({ target: { name: "phone", value } });
      }
    }}
    maxLength={11}
    inputMode="numeric"
    className={inputClass}
  />
  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
</div>
            </div>

            {/* Row 2 — Date + Airport */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className={labelClass}>
                  <Calendar size={12} className="shrink-0" />
                  Departure Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`${inputClass} text-gray-500`}
                />
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
              </div>
              <div>
                <label className={labelClass}>
                  <MapPin size={12} className="shrink-0" />
                  Departure Airport <span className="text-red-500">*</span>
                </label>
                <AirportSearch
                  name="airport"
                  value={formData.airport}
                  onChange={handleChange}
                  placeholder="e.g. Heathrow"
                />
                {errors.airport && <p className="text-red-500 text-xs mt-1">{errors.airport}</p>}
              </div>
            </div>

            {/* Row 3 — Adults + Children */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className={labelClass}>
                  <Users size={12} className="shrink-0" />
                  Adults <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="adults"
                  min="1"
                  placeholder="1"
                  value={formData.adults}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.adults && <p className="text-red-500 text-xs mt-1">{errors.adults}</p>}
              </div>
              <div>
                <label className={labelClass}>
                  <Baby size={12} className="shrink-0" />
                  Children
                </label>
                <input
                  type="number"
                  name="children"
                  min="0"
                  placeholder="0"
                  value={formData.children}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1C398E] hover:bg-blue-900 active:bg-blue-950 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-60 disabled:cursor-not-allowed font-semibold text-sm sm:text-base"
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

            <p className="text-xs text-gray-500 text-center leading-relaxed">
              No payment required. We&apos;ll send you a personalized quote within 24 hours.
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}