"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What age range is suitable for family Umrah packages?",
   },
  {
    question: "Are meals included in the family packages?",
    },
  {
    question: "Can we customize the duration of our stay?",
    },
  {
    question: "What facilities are available for children?",
   },
  {
    question:
      "What happens if a family member needs medical attention?",
   },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#ffffff]">
    <section className=" py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#101828]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#4A5565] mt-3">
          Common questions about our family Umrah packages
        </p>

        {/* FAQ List */}
        <div className="mt-10 space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#ffffff] border border-[#E5E7EB] rounded-xl px-5 py-4 cursor-pointer transition"
              onClick={() => toggle(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[#101828] font-bold text-sm md:text-base">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`w-5 h-5 text-[#1C398E] transition-transform duration-300 ${
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