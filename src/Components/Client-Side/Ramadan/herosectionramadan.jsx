"use client";
import React, { useState } from "react";
import axiosInstance from "@/lib/axios";
import { API_HAJJ_INQUIRY_SUBMIT } from "@/constants/api";
import Link from "next/link";
import AirportSearch from "../AirportSearch/AirportSearch";

export default function RamadanHajjSection() {
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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
    setSuccess("");
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

   if (formData.phoneNumber.length < 10 || formData.phoneNumber.length > 13) {
      setError("Phone number must be between 10 and 13 digits.");
      return;
    }

    setLoading(true);
    try {
      await axiosInstance.post(API_HAJJ_INQUIRY_SUBMIT, {
        ...formData,
        adults: Number(formData.adults),
        children: Number(formData.children),
      });
      setSuccess("Quote request submitted! We'll contact you within 24 hours.");
      setFormData({
        fullName: "", phoneNumber: "", packageType: "",
        hotelCategory: "", departureDate: "", departureAirport: "",
        adults: 1, children: 0,
      });
    } catch (err) {
      setError(err.response?.data?.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute w-full inset-0">
        <img
          src="Images/IMG_0722.JPG.webp"
          alt="Hajj background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl text-white">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              First Ashra Ramadan <br /> <span>Umrah Packages</span>
            </h1>

            <p className="mt-4 text-base flex items-center justify-start text-white/90 sm:text-lg">
              Experience the blessed days of mercy with peaceful<br /> worship, spiritual renewal, and affordable travel
            </p>

            <div className="mt-8 flex items-center justify-start md:justify-start space-y-5">
              <Link href="/#hero" className="inline-flex min-h-[52px] w-full max-w-[171px] items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-medium text-[#163a8a] shadow-lg sm:text-base">
                <span>Get Quote</span>
              </Link>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="w-full">
            <div className="mx-auto w-full max-w-xl rounded-2xl bg-[#ffffff] p-5 shadow-2xl sm:p-7">
              <h2 className="text-2xl font-bold text-[#101828]">Customize Your Hajj</h2>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#364153]">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Ali"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="h-12 w-full rounded-xl border border-[#D1D5DC] px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#364153]">Phone Number *</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="+44 20 1234 5678"
                      value={formData.phoneNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ""); // sirf numbers allow
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
                    <label className="mb-2 block text-sm font-medium text-[#364153]">Package Type</label>
                    <input
                      type="text"
                      name="packageType"
                      placeholder="First Ashra"
                      value={formData.packageType}
                      onChange={handleChange}
                      className="h-12 w-full rounded-xl border border-[#D1D5DC] px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#364153]">Hotel Category</label>
                    <input
                      type="text"
                      name="hotelCategory"
                      placeholder="Economy"
                      value={formData.hotelCategory}
                      onChange={handleChange}
                      className="h-12 w-full rounded-xl border border-[#D1D5DC] px-4 text-sm outline-none transition focus:border-[#28439b] focus:ring-2 focus:ring-[#28439b]/20"
                    />
                  </div>

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

                {/* Adults + Children */}
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
                      className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition"
                    />
                  </div>
                </div>

                {error && <p className="text-sm text-red-500 text-center">{error}</p>}
                {success && <p className="text-sm text-green-600 text-center">{success}</p>}

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}