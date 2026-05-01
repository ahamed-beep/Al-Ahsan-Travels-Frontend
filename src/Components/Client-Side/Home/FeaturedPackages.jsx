"use client";

import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
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
  const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(
    `Hello, I am interested in the ${pkg.title} package (${pkg.duration}) starting from ${pkg.price}. Please share details.`
  )}`;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col h-full">
      
      {/* Image */}
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-4 right-4 bg-[#1C398E] text-white text-xs px-3 py-1 rounded-full shadow">
          {pkg.duration}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 text-left flex flex-col flex-1">
        
        <h3 className="text-lg font-semibold text-[#1F1F1F] mb-2">
          {pkg.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {pkg.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 text-[#4A5565] px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="mt-auto">
          <p className="text-xs text-[#4A5565]">Starting from</p>
          <h4 className="text-xl font-bold text-[#1C398E]">
            {pkg.price}
          </h4>
          <p className="text-xs text-[#4A5565]">per person</p>
        </div>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-semibold text-sm py-3 rounded-xl transition-colors duration-150 hover:bg-[#1ebe5d]"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          WhatsApp
        </a>

      </div>
    </div>
  );
}

export default function FeaturedPackages() {
  const [showAll, setShowAll] = useState(false);
  const [current, setCurrent] = useState(0);

  const total = packages.length;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, total - 1));

  const slicedCards = packages.slice(current, current + 3);

  return (
    <section id="Packages" className="bg-[#ffffff] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-3">
          Featured Packages
        </h2>

        <p className="text-[#4A5565] mb-12 text-sm md:text-base">
          Carefully curated journeys designed for your spiritual comfort
        </p>

        {showAll ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <PackageCard key={i} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Left Arrow */}
            <div className="flex-shrink-0 w-8 sm:w-10 flex justify-center">
              {current > 0 && (
                <button
                  onClick={prev}
                  className="bg-white border border-gray-200 shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#1C398E] hover:text-white transition"
                >
                  <ChevronLeft size={18} />
                </button>
              )}
            </div>

            {/* Cards */}
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
                  className="bg-white border border-gray-200 shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#1C398E] hover:text-white transition"
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
            onClick={() => {
              setShowAll((p) => !p);
              setCurrent(0);
            }}
            className="bg-[#1C398E] text-white px-6 py-3 rounded-full text-sm shadow-md hover:bg-[#162d70] transition"
          >
            {showAll ? "Show Less" : "View All Packages"}
          </button>
        </div>

      </div>
    </section>
  );
}