"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Plane, Clock, FileText, Calendar } from "lucide-react";

const monthData = {
  january: { label: "January 2026 Departures", heading: "January Umrah Packages", year: "2026", image: "/Images/BackGround.webp" },
  february: { label: "February 2026 Departures", heading: "February Umrah Packages", year: "2026", image: "/Images/BackGround.webp" },
  march: { label: "March 2026 Departures", heading: "March Umrah Packages", year: "2026", image: "/Images/BackGround.webp" },
  april: { label: "April 2026 Departures", heading: "April Umrah Packages", year: "2026", image: "/Images/BackGround.webp" },
  may: { label: "May 2026 Departures", heading: "May Umrah Packages", year: "2026", image: "/Images/BackGround.webp" },
  june: { label: "June 2026 Departures", heading: "June Umrah Packages", year: "2026", image: "/Images/BackGround.webp" },
  july: { label: "July 2026 Departures", heading: "July Umrah Packages", year: "2026", image: "/Images/BackGround.webp" },
  august: { label: "August 2026 Departures", heading: "August Umrah Packages", year: "2026", image: "/Images/BackGround.webp" },
  september: { label: "September 2026 Departures", heading: "September Umrah Packages", year: "2026", image: "/Images/BackGround.webp" },
  october: { label: "October 2026 Departures", heading: "October Umrah Packages", year: "2026", image: "/Images/BackGround.webp" },
  november: { label: "November 2026 Departures", heading: "November Umrah Packages", year: "2026", image: "/Images/BackGround.webp" },
  december: { label: "December 2026 Departures", heading: "December Umrah Packages", year: "2026", image: "/Images/BackGround.webp" },
};

export default function HeroSection({ month = "january" }) {
  const data = monthData[month.toLowerCase()] || monthData["january"];

  const [formData, setFormData] = useState({
    name: "", phone: "", date: "", airport: "", adults: "", children: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.date) newErrors.date = "Departure Date is required";
    if (!formData.airport.trim()) newErrors.airport = "Airport is required";
    if (!formData.adults) newErrors.adults = "Enter adults";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted:", formData);
      alert("Form Submitted Successfully ✅");
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img src={data.image} alt="Kaaba" className="w-full h-full object-cover" />
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 py-10 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="text-white space-y-6 lg:ml-15 px-3 sm:px-4">

          <span className="inline-flex items-center gap-2 border border-white lg:ml-45 px-4 py-2 rounded-full text-sm">
            <Calendar size={14} />
            {data.label}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight break-words lg:whitespace-nowrap">
            {data.heading} <br />
            <span className="block lg:ml-55">{data.year}</span>
          </h1>

          <p className="text-gray-200 max-w-md break-words lg:whitespace-nowrap">
            Choose the right package for your journey based on comfort and budget.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-[#c6d7fc] text-[#1C398E] px-4 py-2 rounded-lg w-fit">
              <Plane /> Flights Included
            </div>
            <div className="flex items-center gap-3 bg-[#c6d7fc] text-[#1C398E] px-4 py-2 rounded-lg w-fit">
              <FileText /> Visa Included
            </div>
            <div className="flex items-center gap-3 bg-[#c6d7fc] text-[#1C398E] px-4 py-2 rounded-lg w-fit">
              <Clock /> Flexible Duration
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 w-full max-w-md mx-auto">
          <h2 className="text-xl text-[#101828] font-semibold mb-6">
            Plan Your Perfect Umrah Journey
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-[#364153]">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full" />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Phone Number *</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full" />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1 text-sm font-medium mb-1 block">
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Departure Date *
                </label>
                <input type="date" name="date" value={formData.date} onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full" />
                {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
              </div>
              <div>
                <label className="flex items-center gap-1 text-sm font-medium mb-1 block">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Departure Airport *
                </label>
                <input type="text" name="airport" value={formData.airport} onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full" />
                {errors.airport && <p className="text-red-500 text-xs">{errors.airport}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1 text-sm font-medium mb-1 block">
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Adults *
                </label>
                <input type="number" name="adults" value={formData.adults} onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full" />
                {errors.adults && <p className="text-red-500 text-xs">{errors.adults}</p>}
              </div>
              <div>
                <label className="flex items-center gap-1 text-sm font-medium mb-1 block">
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                  Children
                </label>
                <input type="number" name="children" value={formData.children} onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full" />
              </div>
            </div>

            <button type="submit"
              className="w-full bg-blue-800 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-900 transition">
              <FaPaperPlane /> Get Free Quote
            </button>

            <p className="text-xs text-gray-500 text-center">
              No payment required. We'll send you a personalized quote within 24 hours.
            </p>

          </form>
        </div>

      </div>
    </div>
  );
}