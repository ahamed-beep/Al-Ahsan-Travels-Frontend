"use client";

import React from "react";

const HeartIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1C398E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1C398E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const FlightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane">
  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
</svg>
);

const CheckIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1C398E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const cards = [
  {
    icon: <HeartIcon />,
    title: "Privacy & Comfort",
    desc: "Private double rooms designed for couples with modern amenities",
  },
  {
    icon: <LocationIcon />,
    title: "Close to Haram",
    desc: "Short walking distance hotels for easy access to worship",
  },
  {
    icon: <FlightIcon />,
    title: "Complete Package",
    desc: "Flights, visa, hotels, and transport all arranged for two",
  },
  {
    icon: <CheckIcon />,
    title: "Hassle-Free Travel",
    desc: "Simplified arrangements so you can focus on your spiritual journey",
  },
];

export default function WhyCouplesChooseUs() {
  return (
    <section className="w-full bg-blue-50 px-4 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#1C398E] mb-3">
            Why Couples Choose Us
          </h2>
          <p className="text-sm md:text-base text-[#E5E7EB]  font-medium">
            Everything you need for a comfortable spiritual journey together
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Icon Box */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: "#C3D8FA33",
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-black text-[#1C398E] mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-[#1C398ECC] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}