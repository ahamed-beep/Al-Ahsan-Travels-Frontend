"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
const testimonials = [
  {
    name: "Omar Al-Farouqi",
    initials: "OA",
    review:
      "The most spiritually fulfilling experience of my life. Everything was perfectly organized, and the team's care and attention made our journey truly blessed. From the moment we landed in Jeddah to our final tawaf, every detail was handled with love and professionalism.",
    location: "London, UK",
    package: "Ramadan Umrah Package",
    date: "2 weeks ago",
  },
  {
    name: "Yusuf Okonkwo",
    initials: "YO",
    review:
      "Excellent service from start to finish. Hotels were amazing, just a few minutes walk from Masjid al-Haram, and everything ran perfectly on schedule. The group was well-managed and the guides were always patient and helpful. Highly recommend Al-Ahsan Travel to anyone planning Umrah.",
    location: "Lagos, Nigeria",
    package: "Umrah Package",
    date: "1 month ago",
  },
  {
    name: "Fatima Al-Rashidi",
    initials: "FA",
    review:
      "As a first-time pilgrim, I was nervous about the journey. Al-Ahsan Travel made every step easy and stress-free. The guides were knowledgeable, always available, and answered every question with patience. I returned home with a heart full of peace and gratitude. Already planning my next visit.",
    location: "Birmingham, UK",
    package: "Standard Umrah Package",
    date: "3 weeks ago",
  },
  {
    name: "Ibrahim Bouazza",
    initials: "IB",
    review:
      "We travelled as a family of six including elderly parents. The team arranged everything with great care — wheelchair assistance, close hotels, and constant support throughout. My mother was emotional seeing the Kaaba for the first time and the team made sure she had everything she needed. Truly a five-star experience.",
    location: "Paris, France",
    package: "Family Umrah Package",
    date: "2 months ago",
  },
  {
    name: "Aisha Dermott",
    initials: "AD",
    review:
      "I reverted to Islam two years ago and always dreamed of performing Umrah. Al-Ahsan Travel not only arranged the trip but also provided a dedicated guide who helped me understand every ritual with patience and care. It was a deeply emotional and life-changing journey. I cannot thank the team enough.",
    location: "Dublin, Ireland",
    package: "Standard Umrah Package",
    date: "1 week ago",
  },
  {
    name: "Tariq Benali",
    initials: "TB",
    review:
      "Third time travelling with Al-Ahsan and every experience gets better. The accommodation in Madinah was beautiful and the ziyarat tours were incredibly well organized. Their attention to detail and genuine care for pilgrims sets them apart from every other travel agency I have used.",
    location: "Amsterdam, Netherlands",
    package: "Ramadan Umrah Package",
    date: "3 weeks ago",
  },
  {
    name: "Maryam Sesay",
    initials: "MS",
    review:
      "Travelling solo as a woman, I had concerns about safety and support. Al-Ahsan Travel put all my worries to rest immediately. There was always a female group leader available and the entire team was respectful and professional. The experience was beyond anything I had imagined.",
    location: "Toronto, Canada",
    package: "Women's Umrah Package",
    date: "5 days ago",
  },
  {
    name: "Hassan Kohistani",
    initials: "HK",
    review:
      "Booked last minute and was amazed at how smoothly everything came together. Visa, flights, hotel — all sorted within days. The staff kept us informed at every stage. Performed Umrah with complete peace of mind knowing the logistics were in safe hands. Absolutely outstanding service.",
    location: "Melbourne, Australia",
    package: "Umrah Package",
    date: "2 weeks ago",
  },
];

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
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? "w-6 bg-[#2b4c9a]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}