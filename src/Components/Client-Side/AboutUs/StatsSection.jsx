"use client";

import { Users, TrendingUp, Building2, Clock } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "5000+",
      label: "Happy Clients",
    },
    {
      icon: TrendingUp,
      value: "10+",
      label: "Years Experience",
    },
    {
      icon: Building2,
      value: "250+",
      label: "Partner Hotels",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support Available",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center gap-3">

                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-[#CFE7FF] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#1C398E]" />
                </div>

                {/* Value */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1C398E]">
                  {item.value}
                </h3>

                {/* Label */}
                <p className="text-[#4A5565] text-sm">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}