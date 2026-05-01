"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Which London airports do you fly from?",
    answer: "We operate flights from all major London airports including Heathrow (LHR), Gatwick (LGW), Stansted (STN), and Luton (LTN). Most of our premium packages depart from Heathrow Terminal 4.",
  },
  {
    question: "What is included in the package price?",
    answer: "Our packages include return flights from London, visa processing, hotel accommodation near Haram, ground transfers, and 24/7 support throughout your journey.",
  },
  {
    question: "How close are the hotels to the Haram?",
    answer: "We offer hotels within 50–500 meters of Masjid al-Haram. Our premium packages include Clock Tower hotels which offer direct bridge access to the Haram.",
  },
  {
    question: "Can I customize my package duration?",
    answer: "Yes, we offer flexible durations from 7 to 21 days. You can also add extra nights, upgrade your hotel, or include Madinah visits as part of your package.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, bank transfers, and offer flexible installment plans. A deposit secures your booking with the remainder payable before departure.",
  },
];

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#1C398E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="w-full max-w-[896px] mx-auto border border-gray-200 rounded-xl bg-white shadow-sm">
      <button
        onClick={onClick}
        className="w-full h-[72px] flex items-center justify-between px-6 text-left"
      >
        <span className="text-sm md:text-base font-bold text-[#101828]">
          {faq.question}
        </span>
        <span className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronIcon />
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-5 pt-3 text-sm text-[#4A5565] leading-relaxed border-t border-gray-100">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQLondon() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#101828] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6B7280] text-base">
            Common questions about Umrah packages from London
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-5">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}