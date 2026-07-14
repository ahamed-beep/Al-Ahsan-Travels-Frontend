"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Plane, FileText, Clock, Hotel, Check, Calendar, MapPin, Users, Baby, Send } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { API_INQUIRY_SUBMIT } from "@/constants/api";
import AirportSearch from "../AirportSearch/AirportSearch";

const features = [
  { icon: <Plane size={18} />, label: "Flights Included" },
  { icon: <FileText size={18} />, label: "Visa Included" },
  { icon: <Clock size={18} />, label: "Flexible Duration" },
  { icon: <Hotel size={18} />, label: "Premium Hotels" },
];

const inputClass =
  "w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition placeholder-gray-400";

const labelClass = "flex items-center gap-1 text-xs font-medium text-[#364153] mb-1";

export default function UmrahPageHeroSection() {
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
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

const validate = () => {
    if (!formData.fullName.trim()) return "Apna pura naam darain.";
    if (!formData.phone.trim()) return "Phone number daalna zaroori hai.";
    if (formData.phone.length < 13) return "Phone number must be at least 13 digits.";
    if (!formData.adults || Number(formData.adults) < 1)
      return "Kam az kam 1 adult hona chahiye.";
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
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden">

      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="Images/IMG_0722.JPG.webp"
          alt="Kaaba Sharif Makkah"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 py-10 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="text-white space-y-6 px-3 sm:px-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Umrah Packages
          </h1>
          <p className="text-gray-200">
            Explore a range of packages designed for comfort, affordability, and convenience.
          </p>

          <div className="space-y-3">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#c6d7fc] text-[#1C398E] px-4 py-2 rounded-lg w-fit"
              >
                {f.icon} {f.label}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — Form */}
        <div className="w-full max-w-md mx-auto lg:ml-auto lg:w-[420px] xl:w-[470px] shrink-0">
          <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-7">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#101828] mb-4 sm:mb-5">
              Plan Your Perfect Umrah Journey
            </h2>

            {/* Success */}
            {success && (
              <div
                ref={successRef}
                className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm flex items-center gap-2"
              >
                <Check className="w-4 h-4 shrink-0" />
                Quote Submited Successfully. We will contact you within 24 hours with your personalized quote.
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="fullName" placeholder="Ali"
                    value={formData.fullName} onChange={handleChange}
                    required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+44 20 1234 5678"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      if (value.length <= 13) {
                        handleChange({ target: { name: "phone", value } });
                      }
                    }}
                    required
                    maxLength={13}
                    inputMode="numeric"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>
                    <Calendar size={12} /> Departure Date
                  </label>
                  <input type="date" name="departureDate"
                    value={formData.departureDate} onChange={handleChange}
                    className={`${inputClass} text-gray-500`} />
                </div>
                <div>
                  <label className={labelClass}>
                    <MapPin size={12} /> Departure Airport
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
                <div>
                  <label className={labelClass}>
                    <Users size={12} /> Adults <span className="text-red-500">*</span>
                  </label>
                  <input type="number" name="adults" min="1" placeholder="1"
                    value={formData.adults} onChange={handleChange}
                    required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>
                    <Baby size={12} /> Children
                  </label>
                  <input type="number" name="children" min="0" placeholder="0"
                    value={formData.children} onChange={handleChange}
                    className={inputClass} />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#1C398E] text-white text-sm font-semibold rounded-xl active:scale-[0.98] transition-all duration-150 shadow-md mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
                No payment required. We&apos;ll send you a personalized quote within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}