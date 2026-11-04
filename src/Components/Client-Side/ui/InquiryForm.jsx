"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axios";
import { API_INQUIRY_SUBMIT } from "@/constants/api";

const DEFAULT_FORM = {
  fullName: "",
  phone: "",
  departureDate: "",
  departureAirport: "",
  adults: "",
  children: "",
  packageTier: "",
};

const INQUIRY_TYPES = [
  { value: "umrah", label: "Umrah" },
  { value: "flight", label: "Only Flights" },
];

const PACKAGE_TIERS = ["3-Star", "4-Star", "5-Star"];

export default function InquiryForm() {
  const router = useRouter();

  const [form, setForm] = useState(DEFAULT_FORM);
  const [inquiryType, setInquiryType] = useState("umrah");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const airportInputRef = useRef(null);
  const airportAutocompleteRef = useRef(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  useEffect(() => {
    const init = () => {
      if (!window.google || !airportInputRef.current) return;

      airportAutocompleteRef.current = new window.google.maps.places.Autocomplete(airportInputRef.current, {
        types: ["airport"],
        fields: ["name", "formatted_address"],
      });

      airportAutocompleteRef.current.addListener("place_changed", () => {
        const place = airportAutocompleteRef.current.getPlace();
        if (!place?.name) return;
        setForm((prev) => ({ ...prev, departureAirport: place.name }));
      });
    };

    if (window.google) {
      init();
    } else {
      const interval = setInterval(() => {
        if (window.google) {
          clearInterval(interval);
          init();
        }
      }, 200);
      return () => clearInterval(interval);
    }

    return () => {
      if (airportAutocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(airportAutocompleteRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10,13}$/.test(form.phone)) {
      setStatus("error");
      setErrorMsg("Phone number must be between 10 and 13 digits.");
      return;
    }

    if (inquiryType === "umrah" && !form.packageTier) {
      setStatus("error");
      setErrorMsg("Please select a hotel category (3-Star, 4-Star or 5-Star).");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await axiosInstance.post(API_INQUIRY_SUBMIT, {
        fullName: form.fullName,
        phone: form.phone,
        departureDate: form.departureDate || undefined,
        departureAirport: form.departureAirport || undefined,
        adults: form.adults ? Number(form.adults) : undefined,
        children: form.children ? Number(form.children) : undefined,
        packageTier: inquiryType === "umrah" ? form.packageTier : undefined,
        inquiryType,
      });

      router.push("/thank-you");
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        "Something went wrong. Please try again.";
      setErrorMsg(Array.isArray(msg) ? msg.join(", ") : msg);
      setStatus("error");
    }
  };

  return (
    <div className="bg-black/60 border border-white/10 rounded-2xl shadow-2xl p-5 sm:p-6 md:p-7 backdrop-blur-md">
      <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white mb-1">
        Plan Your Perfect Umrah Journey
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

        {/* Toggle: Umrah / Only Flights */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-white/10 border border-white/15 rounded-lg">
          {INQUIRY_TYPES.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setInquiryType(t.value)}
              className={`py-2 text-[12px] sm:text-[13px] font-semibold rounded-md transition ${
                inquiryType === t.value
                  ? "bg-[#1e3a8a] text-white shadow-md"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {status === "error" && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs">
            {errorMsg}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] sm:text-[12px] font-medium text-gray-300 mb-1 uppercase tracking-wide">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text" name="fullName" placeholder="Full Name"
              value={form.fullName} onChange={handleChange} required
              className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] bg-white/10 border border-white/15 text-white rounded-lg focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-[11px] sm:text-[12px] font-medium text-gray-300 mb-1 uppercase tracking-wide">
              Phone <span className="text-red-400">*</span>
            </label>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");

                if (value.length <= 13) {
                  handleChange({
                    target: {
                      name: "phone",
                      value,
                    },
                  });
                }
              }}
              required
              maxLength={13}
              inputMode="numeric"
              className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] bg-white/10 border border-white/15 text-white rounded-lg focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition placeholder-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-gray-300 mb-1 uppercase tracking-wide">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Departure Date
            </label>
            <input
              type="date" name="departureDate"
              value={form.departureDate} onChange={handleChange} required
              className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] bg-white/10 border border-white/15 text-white rounded-lg focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition [color-scheme:dark]"
            />
          </div>
          <div>
            <label className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-gray-300 mb-1 uppercase tracking-wide">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
              </svg>
              Departure Airport
            </label>
            <input
              ref={airportInputRef}
              type="text"
              name="departureAirport"
              placeholder="e.g. Heathrow"
              value={form.departureAirport}
              onChange={handleChange}
              required
              autoComplete="off"
              className="airport-input w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] bg-white/10 border border-white/15 text-white rounded-lg focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-gray-300 mb-1 uppercase tracking-wide">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
              Adults
            </label>
            <input
              type="number" name="adults" min="1" placeholder="0"
              value={form.adults} onChange={handleChange} required
              className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] bg-white/10 border border-white/15 text-white rounded-lg focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition placeholder-gray-400"
            />
          </div>
          <div>
            <label className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-gray-300 mb-1 uppercase tracking-wide">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
              Children
            </label>
            <input
              type="number" name="children" min="0" placeholder="0"
              value={form.children} onChange={handleChange}
              className="w-full px-3 py-2 sm:py-2.5 text-[12px] sm:text-[13px] bg-white/10 border border-white/15 text-white rounded-lg focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] transition placeholder-gray-400"
            />
          </div>
        </div>

        {/* Hotel Category toggle buttons (only for Umrah) */}
        {inquiryType === "umrah" && (
          <div>
            <label className="block text-[11px] sm:text-[12px] font-medium text-gray-300 mb-1 uppercase tracking-wide">
              Hotel Category <span className="text-red-400">*</span>
            </label>
            <div className="grid grid-cols-3 gap-1 p-1 bg-white/10 border border-white/15 rounded-lg">
              {PACKAGE_TIERS.map((t) => (
                <button
                  key={t}
                  type="button"
                  aria-pressed={form.packageTier === t}
                  onClick={() => {
                    setForm((prev) => ({ ...prev, packageTier: t }));
                    if (status === "error") setStatus("idle");
                  }}
                  className={`py-2 text-[12px] sm:text-[13px] font-semibold rounded-md transition ${
                    form.packageTier === t
                      ? "bg-[#1e3a8a] text-white shadow-md"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-2.5 bg-[#1e3a8a] text-white text-[14px] sm:text-[15px] font-semibold rounded-xl hover:bg-[#1e40af] active:scale-[0.98] transition-all duration-150 shadow-md mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Submitting...
            </>
          ) : (
            <>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Submit
            </>
          )}
        </button>

        <p className="text-center text-[10px] sm:text-[11px] text-gray-400 mt-2">
          No payment required. We&apos;ll send you a personalized quote within 24 hours.
        </p>
      </form>
    </div>
  );
}