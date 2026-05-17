"use client";

import {
  Plane,
  FileText,
  Hotel ,
  Car,
  Shield,
  Award,
  Headphones,
} from "lucide-react";

export default function WhatIncluded() {
  const topFeatures = [
    {
      icon: Plane,
      title: "Flights",
      desc: "Return flights from UK airports",
    },
    {
      icon: FileText,
      title: "Visa",
      desc: "Complete visa assistance",
    },
    {
      icon: Hotel,
      title: "Hotels",
      desc: "Quality accommodation",
    },
    {
      icon: Car,
      title: "Transport",
      desc: "Ground transportation",
    },
  ];

  const bottomFeatures = [
    {
      icon: Shield,
      title: "Trusted Agency",
      desc: "20+ years experience",
    },
    {
      icon: Award, 
      title: "Visa Assistance",
      desc: "Complete support",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Always available",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F]">
            What's Included
          </h2>

          <p className="mt-3 text-[#1447E6] text-sm sm:text-base">
            Everything you need for a complete Umrah experience
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {topFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-2xl border border-[#51A2FF33]  p-6"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#C6D7FC85] flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#1C398E]" />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-[#1F1F1F]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-[#1447E6] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20">
          {bottomFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Circle Icon */}
                <div className="w-20 h-20 rounded-full bg-[#C6D7FC85] flex items-center justify-center">
                  <Icon className="w-9 h-9 text-[#1C398E]" />
                </div>

                {/* Text */}
                <h3 className="mt-5 text-2xl font-bold text-[#1F1F1F]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[#1447E6] text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}