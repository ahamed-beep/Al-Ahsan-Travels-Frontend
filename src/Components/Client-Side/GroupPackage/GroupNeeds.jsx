"use client";

import { Plane, FileText, Car, Users } from "lucide-react";

const features = [
  {
    icon: <Plane className="w-8 h-8 text-[#1C398E]" />,
    title: "Flights Included",
    desc: "Return flights from major UK airports",
  },
  {
    icon: <FileText className="w-8 h-8 text-[#1C398E]" />,
    title: "Visa Processing",
    desc: "Complete visa assistance for all members",
  },
  {
    icon: <Car className="w-8 h-8 text-[#1C398E]" />,
    title: "Group Transport",
    desc: "Comfortable coaches for the entire group",
  },
  {
    icon: <Users className="w-8 h-8 text-[#1C398E]" />,
    title: "Guided Support",
    desc: "Experienced tour leaders throughout",
  },
];

export default function GroupNeeds() {
  return (
    <section className="bg-[#ffffff] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-3">
   What's Included in Every Package
        </h2>

        <p className="text-[#4A5565] text-sm sm:text-base mb-14">
        Comprehensive group travel services for a worry-free pilgrimage
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {features.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">

              {/* Icon Box */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gray-200 mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[#101828] text-base mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#4A5565] text-sm leading-relaxed max-w-[220px]">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}