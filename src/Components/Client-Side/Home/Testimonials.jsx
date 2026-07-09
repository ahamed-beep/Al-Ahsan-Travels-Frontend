"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Users, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ibrahim Khalid",
      initials: "IK",
      review:
        "Had an amazing Umrah trip with Besam and Al Ahsan Travels. Everyone was super helpful throughout the journey and took care of all the details. Highly recommended if you want a peaceful trip.",
      location: "London, UK",
      package: "Ramadan Umrah Package",
      date: "7/01/2026",
    },
    {
      name: "Abdul Haadi",
      initials: "AH",
      review:
        "Booked my Umrah package through Abdul Rauf and Al Ahsan Travels, and it was a great decision. Hotels and transport were super comfortable, and everything went exactly as planned.",
      location: "Manchester",
      package: "Umrah Package",
      date: "10/02/2026",
    },
    {
      name: "Muhammad Muaz",
      initials: "MM",
      review:
        "Had a brilliant experience with Abdul Rauf and Al Ahsan Travels. The guidance provided throughout the Umrah was excellent, and everything was handled with great responsibility.",
      location: "Edinburgh",
      package: "Standard Umrah Package",
      date: "1/03/2026",
    },
    {
      name: "Noor ul Eeman",
      initials: "NE",
      review:
        "Choosing Besam for my Umrah was the best decision. The team is genuinely helpful and took great care of us throughout the blessed journey. May Allah reward them.",
      location: "Bristol",
      package: "Family Umrah Package",
      date: "11/03/2026",
    },
    {
      name: "Zara Anfal",
      initials: "ZA",
      review:
        "Thank you to Sohaib for making my Umrah trip so easy and memorable. The hospitality and support throughout the trip were exceptional.",
      location: "Glasgow",
      package: "Standard Umrah Package",
      date: "22/02/2026",
    },
    {
      name: "Minahil Hayat",
      initials: "MH",
      review:
        "Highly recommend Besam and Al Ahsan Travels for Hajj. They delivered exactly what they promised, keeping our comfort a priority throughout the holy rituals. A big thank you to the whole team!",
      location: "Liverpool",
      package: "Hajj Package",
      date: "18/05/2026",
    },
    {
      name: "Ahmad Saeed",
      initials: "AS",
      review:
        "Had a great Umrah trip! Everything from airport pickups to the local Ziyarat tours in Makkah and Madinah was handled perfectly by Abdul Rauf. Very well coordinated.",
      location: "Belfast",
      package: "Ziyarat tours",
      date: " 3/04/2026",
    },
    {
      name: "Rayan Shafique",
      initials: "RS",
      review:
        "The team at Al Ahsan Travels was incredibly cooperative throughout our Umrah. Any time we had a question or needed help with local transport, they responded instantly. Exceptional service!",
      location: "London",
      package: "Umrah Package",
      date: " 3/12/2025",
    },
  ];
  const TrustpilotBadge = () => (
    <div className="flex items-center gap-2 sm:gap-3 px-3.5 py-1.5 flex-wrap justify-center">
      <div className="flex">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-[32px] h-[32px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#1C398E] border-2 border-white -ml-3 first:ml-0 flex items-center justify-center text-white"
          >
            <Users size={16} className="sm:w-5 sm:h-5" />
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <Star size={16} className="sm:w-[18px] sm:h-[18px] text-[#1C398E] fill-[#1C398E]" />
          <p className="text-sm sm:text-base font-bold text-[#1C398E] leading-none">Trustpilot</p>
        </div>
        <p className="text-xs sm:text-sm text-[#1C398E] leading-none mt-1">Trusted by 40+ clients</p>
      </div>
    </div>
  );

  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

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
        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8 md:p-10">

          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-[#2b4c9a] text-white flex items-center justify-center text-lg font-bold">
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
          <div className="mt-6 text-xs text-gray-500 flex flex-wrap justify-center gap-3">
            <span className="bg-[#51A2FF33] text-[#1C398E] px-2 py-1 rounded-full text-[10px]">
              ✓ Verified
            </span>
            <span className="text-[#6A7282]">{t.date}</span>
          </div>
          <div className="mt-2 text-xs text-gray-500 flex flex-wrap justify-center gap-3">
            <span className="text-[#4A5565]">Completed {t.package}</span>
            <span>{t.location}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-200"
          >
            <ChevronLeft size={20} />
          </button>
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
              className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-6 bg-[#2b4c9a]" : "w-2 bg-gray-300"
                }`}
            />
          ))}
        </div>

        {/* Trustpilot Badge - below testimonials, linked to Trustpilot page */}
        <a
          href="https://www.trustpilot.com/review/alahsantravels.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center mt-8"
        >
          <TrustpilotBadge />
        </a>

      </div>
    </section>
  );
}