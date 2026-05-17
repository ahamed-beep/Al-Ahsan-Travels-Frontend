"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What age range is suitable for group Umrah packages?",
    answer:
      "Our group Umrah packages are suitable for all age groups including children, adults, and senior citizens. We also provide family-friendly arrangements for maximum comfort.",
  },
  {
    question: "Are meals included in the group packages?",
    answer:
      "Yes, selected group packages include daily breakfast and some also provide lunch and dinner depending on the hotel and package type.",
  },
  {
    question: "Can we customize the duration of our stay?",
    answer:
      "Absolutely. We can customize your stay duration according to your travel plans and preferences, subject to flight and hotel availability.",
  },
  {
    question: "What facilities are available for children?",
    answer:
      "We provide family rooms, child-friendly accommodations, and assistance to ensure a comfortable and safe journey for children.",
  },
  {
    question:
      "What happens if a group member needs medical attention?",
    answer:
      "Our support team is available 24/7 to assist in emergencies and help arrange medical support or hospital visits if needed during the trip.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white">
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#101828]">
            Frequently Asked Questions
          </h2>

          <p className="text-[#4A5565] mt-3 text-sm sm:text-base">
            Common questions about our group Umrah packages
          </p>

          {/* FAQ List */}
          <div className="mt-10 space-y-4 text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#E5E7EB] rounded-2xl px-5 py-4 cursor-pointer transition-all duration-300 hover:shadow-sm"
                onClick={() => toggle(index)}
              >
                {/* Question */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[#101828] font-semibold text-sm sm:text-base md:text-lg">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`w-5 h-5 text-[#1C398E] transition-transform duration-300 flex-shrink-0 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index
                      ? "max-h-40 mt-4"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}