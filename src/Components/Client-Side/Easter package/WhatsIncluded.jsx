"use client";

import { Plane, FileText, CheckCircle, Users } from "lucide-react";

const features = [
  {
    icon: <Plane className="w-6 h-6" />,
    title: "Flights Included",
    description: "Return economy flights from major UK airports",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Visa Included",
    description: "Complete Saudi Arabia Umrah visa processing",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "All-Inclusive",
    description: "Accommodation, transport, and transfers included",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Family-Friendly",
    description: "Perfect for families traveling during Easter break",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="bg-[#FFFFFF] py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1C398E] mb-3">
          What's Included
        </h2>
        <p className="text-[#4A5565] text-sm sm:text-base max-w-md mx-auto">
          Everything you need for a complete Umrah experience
        </p>
      </div>

      {/* Feature Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-4">
            {/* Icon Box */}
            <div className="w-16 h-16 rounded-2xl bg-[#d0f2e2] flex items-center justify-center text-[#1C398E]">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-[#1C398E]">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#4A5565] leading-relaxed max-w-[160px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}