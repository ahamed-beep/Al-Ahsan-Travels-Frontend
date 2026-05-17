"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What age range is suitable for family Umrah packages?",
    answer:
      "Our family Umrah packages are designed for all age groups, including children, adults, and elderly family members for a comfortable spiritual journey.",
  },
  {
    question: "Are meals included in the family packages?",
    answer:
      "Yes, many of our family packages include breakfast, while some premium packages also offer lunch and dinner options.",
  },
  {
    question: "Can we customize the duration of our stay?",
    answer:
      "Yes, you can customize your travel dates and stay duration according to your family’s preferences and schedule.",
  },
  {
    question: "What facilities are available for children?",
    answer:
      "We provide family-friendly hotels, spacious rooms, extra bedding options, and child assistance services to ensure a smooth experience.",
  },
  {
    question:
      "What happens if a family member needs medical attention?",
    answer:
      "Our support team is available 24/7 to assist with emergencies and help arrange nearby medical services or hospital visits if required.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#ffffff]">
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#101828]">
            Frequently Asked Questions
          </h2>

          <p className="text-[#4A5565] mt-3 text-sm sm:text-base">
            Common questions about our family Umrah packages
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
                  <h3 className="text-[#101828] font-semibold text-sm md:text-base">
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
                    activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
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