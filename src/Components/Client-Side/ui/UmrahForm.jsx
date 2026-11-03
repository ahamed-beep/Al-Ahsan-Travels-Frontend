"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, MapPin, Users, Baby, Send } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { API_INQUIRY_SUBMIT } from "@/constants/api";
import AirportSearch from "../AirportSearch/AirportSearch";

const INQUIRY_TYPES = [
  { value: "umrah", label: "Umrah" },
  { value: "flight", label: "Only Flights" },
];

const HOTEL_CATEGORIES = ["3-Star", "4-Star", "5-Star"];

const inputClass =
  "w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border border-[#D1D5DC] rounded-lg focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition placeholder-gray-400";

const labelClass = "flex items-center gap-1 text-xs font-medium text-[#364153] mb-1";

export default function UmrahForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    departureDate: "",
    departureAirport: "",
    adults: "",
    children: "",
    hotelCategory: "",
  });
  const [inquiryType, setInquiryType] = useState("umrah");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const validate = () => {
    if (!formData.fullName.trim()) return "Please enter your full name.";
    if (!formData.phone.trim()) return "Phone number is required.";
    if (formData.phone.length < 10 || formData.phone.length > 13)
      return "Phone number must be between 10 and 13 digits.";
    if (!formData.departureDate) return "Please select a departure date.";
    if (!formData.departureAirport.trim()) return "Please select a departure airport.";
    if (!formData.adults || Number(formData.adults) < 1)
      return "At least 1 adult is required.";
    if (inquiryType === "umrah" && !formData.hotelCategory)
      return "Please select a hotel category (3-Star, 4-Star or 5-Star).";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) return setError(validationError);

    setLoading(true);
    setError("");

    try {
      await axiosInstance.post(API_INQUIRY_SUBMIT, {
        fullName: formData.fullName,
        phone: formData.phone,
        departureDate: formData.departureDate,
        departureAirport: formData.departureAirport,
        adults: Number(formData.adults),
        children: Number(formData.children) || 0,
        packageTier: inquiryType === "umrah" ? formData.hotelCategory : undefined,
        inquiryType,
      });

      router.push("/thank-you");
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Something went wrong. Please try again.";
      setError(Array.isArray(msg) ? msg.join(", ") : msg);
      setLoading(false);
    }
  };

  return (
    <>
      {/* Error */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

        {/* Toggle: Umrah / Only Flights */}
        <div className="grid grid-cols-2 gap-1 p-1 border border-[#D1D5DC] rounded-lg">
          {INQUIRY_TYPES.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => {
                setInquiryType(t.value);
                setError("");
              }}
              className={`py-2 text-xs sm:text-sm font-semibold rounded-md transition ${
                inquiryType === t.value
                  ? "bg-[#1C398E] text-white shadow-md"
                  : "text-[#364153] hover:bg-gray-100"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

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
              <Calendar size={12} /> Departure Date <span className="text-red-500">*</span>
            </label>
            <input type="date" name="departureDate"
              value={formData.departureDate} onChange={handleChange}
              required className={`${inputClass} text-gray-500`} />
          </div>
          <div>
            <label className={labelClass}>
              <MapPin size={12} /> Departure Airport <span className="text-red-500">*</span>
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
            <input type="number" name="adults" min="1" placeholder="0"
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

        {/* Hotel Category (only for Umrah) */}
        {inquiryType === "umrah" && (
          <div>
            <label className={labelClass}>
              Hotel Category <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-3 gap-1 p-1 border border-[#D1D5DC] rounded-lg">
              {HOTEL_CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={formData.hotelCategory === c}
                  onClick={() => handleChange({ target: { name: "hotelCategory", value: c } })}
                  className={`py-2 text-xs sm:text-sm font-semibold rounded-md transition ${
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
    </>
  );
}