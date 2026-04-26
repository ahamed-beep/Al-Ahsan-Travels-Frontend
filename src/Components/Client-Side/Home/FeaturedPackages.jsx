"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const packages = [
  {
    title: "Ramadan Umrah Premium",
    price: "£2,499",
    duration: "14 Days / 13 Nights",
    tags: ["Visa", "Hotel", "Transport", "Meals"],
    image: "/Images/Image (Ramadan Umrah Premium).png",
  },
  {
    title: "Hajj Complete Package",
    price: "£6,999",
    duration: "21 Days / 20 Nights",
    tags: ["Visa", "Hotel", "Guide", "Meals"],
    image: "/Images/Image (Hajj Complete Package).png",
  },
  {
    title: "5-Star Luxury Umrah",
    price: "£3,999",
    duration: "10 Days / 9 Nights",
    tags: ["VIP", "5-Star", "Private", "Luxury"],
    image: "/Images/Image (5-Star Luxury Umrah).png",
  },
  {
    title: "Economy Umrah Package",
    price: "£1,299",
    duration: "7 Days / 6 Nights",
    tags: ["Visa", "Hotel", "Transport"],
    image: "/Images/Image (Ramadan Umrah Premium).png",
  },
  {
    title: "Family Umrah Package",
    price: "£4,499",
    duration: "12 Days / 11 Nights",
    tags: ["Visa", "Hotel", "Meals", "Guide"],
    image: "/Images/Image (Hajj Complete Package).png",
  },
  {
    title: "December Umrah Special",
    price: "£2,199",
    duration: "10 Days / 9 Nights",
    tags: ["Visa", "Hotel", "Transport", "Meals"],
    image: "/Images/Image (5-Star Luxury Umrah).png",
  },
];

function PackageCard({ pkg }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img src={pkg.image} alt={pkg.title} className="w-full h-56 object-cover" />
        <span className="absolute top-4 right-4 bg-[#1C398E] text-white text-xs px-3 py-1 rounded-full shadow">
          {pkg.duration}
        </span>
      </div>
      <div className="p-5 text-left flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-[#1F1F1F] mb-2">{pkg.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {pkg.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-gray-100 text-[#4A5565] px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-xs text-[#4A5565]">Starting from</p>
            <h4 className="text-xl font-bold text-[#1C398E]">{pkg.price}</h4>
            <p className="text-xs text-[#4A5565]">per person</p>
          </div>
          <button className="bg-[#1C398E] text-white text-sm px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-[#162d70] transition">
            View Details <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedPackages() {
  const [showAll, setShowAll] = useState(false);
  const [current, setCurrent] = useState(0);

  // Mobile=1, Tablet=2, Desktop=3
  // We track index; getVisible() slices based on screen
  // But since we can't use window in SSR, we use CSS grid trick for responsive
  // and just track index for desktop (3 cards at a time)

  const total = packages.length;

  // Desktop: 3 visible, Tablet: 2, Mobile: 1
  // We show cards based on current index — CSS handles how many columns
  // Safest: always slice 3 from current, CSS grid shows 1/2/3 cols

  const maxIndex = total - 1; // mobile: 1 card at a time (most restrictive)
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  // For desktop we show 3 cards, tablet 2, mobile 1
  // slice enough cards: current to current+3 (grid hides overflow via columns)
  const slicedCards = packages.slice(current, current + 3);

  // On mobile: only 1 card at a time, so next disabled after current >= total-1
  // On tablet: 2 cards, next disabled after current >= total-2
  // On desktop: 3 cards, next disabled after current >= total-3
  // We use the most generous (desktop) for the button — CSS handles layout

  return (
    <section className="bg-[#ffffff] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-3">
          Featured Packages
        </h2>
        <p className="text-[#4A5565] mb-12 text-sm md:text-base">
          Carefully curated journeys designed for your spiritual comfort
        </p>

        {showAll ? (
          /* ── View All Grid — fully responsive ── */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <PackageCard key={i} pkg={pkg} />
            ))}
          </div>
        ) : (
          /* ── Slider ── */
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Left Arrow */}
            <div className="flex-shrink-0 w-8 sm:w-10 flex justify-center">
              {current > 0 && (
                <button
                  onClick={prev}
                  className="bg-white border border-gray-200 shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#1C398E] hover:text-white hover:border-[#1C398E] transition"
                >
                  <ChevronLeft size={18} />
                </button>
              )}
            </div>

            {/* Cards — responsive grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {slicedCards.map((pkg, i) => (
                <PackageCard key={current + i} pkg={pkg} />
              ))}
            </div>

            {/* Right Arrow */}
            <div className="flex-shrink-0 w-8 sm:w-10 flex justify-center">
              {current < total - 1 && (
                <button
                  onClick={next}
                  className="bg-white border border-gray-200 shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#1C398E] hover:text-white hover:border-[#1C398E] transition"
                >
                  <ChevronRight size={18} />
                </button>
              )}
            </div>

          </div>
        )}

        {/* Bottom Button */}
        <div className="mt-12">
          <button
            onClick={() => { setShowAll((p) => !p); setCurrent(0); }}
            className="bg-[#1C398E] text-white px-6 py-3 rounded-full text-sm shadow-md hover:bg-[#162d70] transition"
          >
            {showAll ? "Show Less" : "View All Packages"}
          </button>
        </div>
      </div>
    </section>
  );
}