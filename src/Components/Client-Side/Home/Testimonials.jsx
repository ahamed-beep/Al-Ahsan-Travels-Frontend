"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mohammed Ahmed",
      initials: "MA",
      review:
        "The most spiritually fulfilling experience of my life. Everything was perfectly organized, and the team's care and attention made our journey truly blessed.",
      location: "London, UK",
      package: "Ramadan Umrah Package",
      date: "2 weeks ago",
    },
    {
      name: "Ali Khan",
      initials: "AK",
      review:
        "Excellent service from start to finish. Hotels were amazing and everything was smooth.",
      location: "Karachi, PK",
      package: "Umrah Package",
      date: "1 month ago",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const t = testimonials[current];

  return (
    <section className="w-full bg-[#F7F7F7] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Pilgrims Say
        </h2>
        <p className="text-gray-500 mt-2">
          Real experiences from blessed journeys
        </p>

        {/* Card */}
        <div className="mt-10 bg-[#FFFFFF] rounded-2xl shadow-lg p-8 md:p-10 relative">

          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-[#2b4c9a] text-[#ffffff] flex items-center justify-center text-lg font-bold">
              {t.initials}
            </div>
          </div>

          {/* Name */}
          <h3 className="mt-4 font-semibold text-[#1F1F1F] text-lg">{t.name}</h3>

          {/* Stars */}
          <div className="flex justify-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-[#2b4c9a] fill-[#2b4c9a]" />
            ))}
          </div>

          {/* Review */}
          <p className="text-[#364153] italic mt-4 text-sm md:text-base max-w-2xl mx-auto">
            "{t.review}"
          </p>
          {/* Footer Info */}
          <div className="mt-6 ml-20 text-xs text-gray-500 flex flex-wrap  gap-3">
            <span className="bg-[#51A2FF33] text-[#1C398E] px-2 py-1 rounded-full text-[10px]">
              ✓ Verified
            </span>
            <span className="text-[#6A7282]">{t.date}</span>
          </div>
          <div className="mt-2 ml-20 text-xs text-gray-500 flex flex-wrap gap-3">
            <span className="text-[#4A5565]">Completed {t.package}</span>
            <span className="cursor-pointer" style={{ color: "#155DFC" }}>
              {t.package} </span>    
            <span>{t.location}</span>
          </div>        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-6">

          {/* Prev */}
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-200"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full ${index === current
                ? "w-6 bg-[#2b4c9a]"
                : "w-2 bg-gray-300"
                }`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
}