"use client";

import { useState } from "react";
import { Clock, Send, CircleCheckBig } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 bg-white";

  const reasons = [
    "Expert guidance on Umrah packages",
    "Personalized travel recommendations",
    "Fast response within 1-2 hours",
    "Support in multiple languages",
    "24/7 emergency assistance",
  ];

  return (
    <section className="bg-[#F9FAFB] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto   p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── Left: Form ── */}
          <div className="bg-[#FFFFFF] rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col">
            <h2 className="text-2xl font-medium text-[#101828] mb-1">Send Us a Message</h2>
            <div className="flex items-center gap-1.5 text-[#1C398E] text-xs font-medium mb-6">
              <Clock className="w-3.5 h-3.5" />
              We'll respond within 1-2 hours
            </div>

            {submitted ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-10">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CircleCheckBig className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  JazakAllah Khair! We've received your message and will respond within 1-2 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ fullName: "", email: "", phone: "", travelDate: "", message: "" }); }}
                  className="mt-2 text-blue-600 text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#364153] mb-1.5">
                    Full Name <span className="text-[#364153]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#364153] mb-1.5">
                      Email Address <span className="text-[#364153]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#364153] mb-1.5">
                      Phone Number <span className="text-[#364153]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07XXX XXXXXX"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Travel Date */}
                <div>
                  <label className="block text-xs font-semibold text-[#364153] mb-1.5">
                    Preferred Travel Date
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    value={form.travelDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-[#364153] mb-1.5">
                    Your Message <span className="text-[#364153]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your Umrah plans..."
                    required
                    rows={5}
                    className={inputClass + " resize-none"}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#1C398E] hover:bg-blue-800 active:bg-blue-950 disabled:opacity-70 text-[#FFFFFF] font-medium py-4 rounded-2xl transition-colors duration-150 text-sm sm:text-base mt-1"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

          {/* ── Right: Image + Why Contact ── */}
          <div className="flex flex-col gap-5">

            {/* Kaaba Image */}
            <div className="rounded-2xl overflow-hidden h-56 sm:h-64 lg:h-72 w-full">
              <img
                src="/Images/Contact-kabba.jpg"
                alt="Kaaba Makkah"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Why Contact Us */}
            <div className="bg-[#CFE7FF] rounded-2xl p-6 flex flex-col gap-4">
              <h3 className="text-lg font-medium text-[#101828]">Why Contact Us?</h3>
              <ul className="flex flex-col gap-3">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-center gap-3 text-sm text-[#364153]">
                    <CircleCheckBig className="w-4 h-4 text-[#1C398E] flex-shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}