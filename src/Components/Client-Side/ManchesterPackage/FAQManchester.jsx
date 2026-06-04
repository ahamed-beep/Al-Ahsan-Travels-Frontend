"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you fly directly from Manchester Airport?",
    answer: "Yes, we offer direct and connecting flights from Manchester Airport to Jeddah and Madinah. Our packages include flight arrangements so you don't need to worry about booking separately.",
  },
  {
    question: "What is included in the package price from Manchester?",
    answer: "Our packages from Manchester typically include return flights, hotel accommodation in Makkah and Madinah, airport transfers, and guidance throughout your journey. Full details are listed on each individual package page.",
  },
  {
    question: "Can 4 people share a room to reduce costs?",
    answer: "Yes, we offer quad-sharing room options which significantly reduce the per-person cost. Please contact us directly and we will arrange the most suitable room configuration for your group.",
  },
  {
    question: "Is the price fixed once I book?",
    answer: "Yes, once your booking is confirmed and deposit is paid, your package price is fixed. We recommend booking early to secure the best rates as prices may increase closer to the travel date.",
  },
  {
    question: "How does the deposit booking system work?",
    answer: "You can secure your place with a deposit, and the remaining balance is paid in installments before your departure date. Our team will provide a clear payment schedule at the time of booking.",
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

export default function FAQManchester() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#101828] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6B7280] text-base">
            Common questions about Umrah from Manchester
          </p>
        </div>

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