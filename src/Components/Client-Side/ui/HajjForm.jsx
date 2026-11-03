"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axios";
import AirportSearch from "../AirportSearch/AirportSearch";
import { API_HAJJ_INQUIRY_SUBMIT } from "@/constants/api";

const INQUIRY_TYPES = [
  { value: "hajj", label: "Hajj" },
  { value: "flight", label: "Only Flights" },
];

const HOTEL_CATEGORIES = ["3-Star", "4-Star", "5-Star"];

export default function HajjForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    packageType: "",
    hotelCategory: "",
    departureDate: "",
    departureAirport: "",
    adults: "",
    children: "",
  });
  const [inquiryType, setInquiryType] = useState("hajj");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.phoneNumber.length < 10 || formData.phoneNumber.length > 13) {
      setError("Phone number must be between 10 and 13 digits.");
      return;
    }

    if (!formData.departureAirport.trim()) {
      setError("Please select a departure airport.");
      return;
    }

    if (inquiryType === "hajj" && !formData.hotelCategory) {
      setError("Please select a hotel category (3-Star, 4-Star or 5-Star).");
      return;
    }

    setLoading(true);
    try {
      await axiosInstance.post(API_HAJJ_INQUIRY_SUBMIT, {
        ...formData,
        hotelCategory: inquiryType === "hajj" ? formData.hotelCategory : undefined,
        adults: Number(formData.adults),
        children: Number(formData.children),
        inquiryType,
      });
      router.push("/thank-you");
    } catch (err) {
      setError(err.response?.data?.message || "Submission failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-4">
      {/* Toggle: Hajj / Only Flights */}
      <div className="grid grid-cols-2 gap-1 rounded-xl border border-[#D1D5DC] p-1">
        {INQUIRY_TYPES.map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => setInquiryType(t.value)}
            className={`rounded-lg py-2.5 text-sm font-semibold transition ${
              inquiryType === t.value
                ? "bg-[#1C398E] text-white shadow-md"
                : "text-[#364153] hover:bg-gray-100"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#364153]">Full Name *</label>
          <input
            type="text" name="fullName" placeholder="Ali"
            value={formData.fullName} onChange={handleChange} required
            className="h-12 w-full rounded-xl border border-[#D1D5DC] px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#364153]">Phone Number *</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value.length <= 13) {
                handleChange({
                  target: {
                    name: "phoneNumber",
                    value,
                  },
                });
              }
            }}
            required
            maxLength={13}
            inputMode="numeric"
            className="h-12 w-full rounded-xl border border-[#D1D5DC] px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#364153]">Package Type *</label>
          <input
            type="text" name="packageType" placeholder="Shifting"
            value={formData.packageType} onChange={handleChange} required
            className="h-12 w-full rounded-xl border border-[#D1D5DC] px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
          />
        </div>

        {/* Hotel Category (only for Hajj) */}
        {inquiryType === "hajj" && (
          <div>
            <label className="mb-2 block text-sm font-medium text-[#364153]">
              Hotel Category <span className="text-red-500">*</span>
            </label>
            <div className="grid h-12 grid-cols-3 gap-1 rounded-xl border border-[#D1D5DC] p-1">
              {HOTEL_CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={formData.hotelCategory === c}
                  onClick={() => handleChange({ target: { name: "hotelCategory", value: c } })}
                  className={`rounded-lg text-sm font-semibold transition ${
                    formData.hotelCategory === c
                      ? "bg-[#1C398E] text-white shadow-md"
                      : "text-[#364153] hover:bg-gray-100"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          <label className="flex items-center gap-1 text-xs font-medium text-[#364153] mb-1">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Departure Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date" name="departureDate"
            value={formData.departureDate} onChange={handleChange} required
            className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition text-gray-500"
          />
        </div>
        <div>
          <label className="flex items-center gap-1 text-xs font-medium text-[#364153] mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Departure Airport <span className="text-red-500">*</span>
          </label>
          <AirportSearch
            name="departureAirport"
            value={formData.departureAirport}
            onChange={handleChange}
            placeholder="e.g. Heathrow"
          />
        </div>
      </div>

      {/* Adults + Children */}
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
            type="number" name="adults" min="1" placeholder="0"
            value={formData.adults} onChange={handleChange} required
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
            type="number" name="children" min="0" placeholder="0"
            value={formData.children} onChange={handleChange} 
            className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition"
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1C398E] px-6 text-base font-semibold text-[#ffffff] transition hover:bg-[#223a88] disabled:opacity-60"
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
        {loading ? "Submitting..." : "Get Free Quote"}
      </button>

      <p className="text-center text-xs text-[#6A7282] sm:text-sm">
        No payment required. We&apos;ll send you a personalized quote within 24 hours.
      </p>
    </form>
  );
}