"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is included in the group package price?",
    answer:
      "Our group packages include return flights from UK airports, hotel accommodation, Saudi Arabia Umrah visa, ground transportation, airport transfers, and Ziyarat tours. Meals are not included but can be arranged.",
  },
  {
    question: "How large are the groups?",
    answer:
      "Our groups typically range from 20 to 50 people. We keep group sizes manageable to ensure every pilgrim receives personal attention and support throughout the journey.",
  },
  {
    question: "Can I join a group if traveling alone?",
    answer:
      "Yes, many of our pilgrims travel solo and join our group packages. It is a great way to meet fellow Muslims and perform Umrah in a supportive community.",
  },
  {
    question: "What if I need to cancel?",
    answer:
      "We have a flexible cancellation policy. Cancellations made well in advance may be eligible for a full or partial refund. Please contact us directly to discuss your specific situation.",
  },
  {
    question: "Are group leaders available 24/7?",
    answer:
      "Yes, our experienced group leaders and support staff are available around the clock throughout your journey to assist with any queries, emergencies, or spiritual guidance.",
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