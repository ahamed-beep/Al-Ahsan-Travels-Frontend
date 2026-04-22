"use client";

import { ArrowRight } from "lucide-react";

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
];

export default function FeaturedPackages() {
  return (
    <section className="bg-[#f5f7fb] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-3">
          Featured Packages
        </h2>
        <p className="text-[#4A5565] mb-12 text-sm md:text-base">
          Carefully curated journeys designed for your spiritual comfort
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-56 object-cover"
                />

                {/* Badge */}
                <span className="absolute top-4 right-4 bg-[#1C398E] text-white text-xs px-3 py-1 rounded-full shadow">
                  {pkg.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 text-left">
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

                {/* Price + Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#4A5565]">Starting from</p>
                    <h4 className="text-xl font-bold text-[#1C398E]">
                      {pkg.price}
                    </h4>
                    <p className="text-xs text-[#4A5565]">per person</p>
                  </div>

                  <button className="bg-[#1C398E]  text-white text-sm px-4 py-2 rounded-lg flex items-center gap-1">
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-12">
          <button className="bg-[#1C398E] text-white px-6 py-3 rounded-full text-sm shadow-md">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
}