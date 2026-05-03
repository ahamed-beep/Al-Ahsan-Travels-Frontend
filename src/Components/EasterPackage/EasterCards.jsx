"use client";

import { Clock, MapPin, MessageCircle, Plane, FileText } from "lucide-react";

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#1C398E] fill-[#1C398E]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function FeaturePill({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-[#364153] text-sm px-3 py-2 rounded-xl bg-[#F3F4F6]">
      <div className="w-8 h-8 rounded-lg bg-[#E5E7EB] flex items-center justify-center text-[#1C398E]">
        {icon}
      </div>
      {label}
    </div>
  );
}

function PackageCard({ stars, title, price, originalPrice, nights, save, makkahHotel, madinahHotel, popular, image }) {
  return (
    <div
      className={[
        "flex flex-col rounded-2xl bg-white overflow-hidden transition-all duration-200 hover:-translate-y-1",
        popular
          ? "border-2 border-[#1C398E] shadow-2xl scale-105"
          : "border border-gray-200 shadow-lg",
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {/* Stars Badge - top left */}
        <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md flex items-center gap-1">
          <StarRating count={stars} />
        </div>

        {/* Most Popular Badge - top right */}
        {popular && (
          <div className="absolute top-4 right-4 bg-[#1C398E] text-white text-xs font-bold px-3 py-2 rounded-lg">
            Most Popular
          </div>
        )}

        {/* Save Badge - bottom right */}
        <div className="absolute bottom-4 right-4 bg-[#1C398E] text-white text-xs font-bold px-3 py-2 rounded-lg">
          Save {save}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">

        {/* Title + Meta */}
        <div>
          <h3 className="text-xl font-extrabold text-[#101828] mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-[#6A7282] text-sm">
            <Clock className="w-4 h-4 text-[#4A5565]" />
            <span className="text-[#4A5565]">{nights} Nights</span>
            <span className="text-[#CBD5E1]">•</span>
            <span className="text-[#4A5565]">Easter Break 2026</span>
          </div>
        </div>

        {/* Price */}
        <div>
          <div className="flex items-baseline gap-3">
            <p className="text-4xl font-bold text-[#1C398E]">{price}</p>
            <p className="text-lg text-gray-400 line-through font-medium">{originalPrice}</p>
          </div>
          <p className="text-sm text-[#9CA3AF] mt-1">per person</p>
        </div>

        <hr className="border border-[#E5E7EB]" />

        {/* Hotels */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#1C398E] mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-[#101828] text-sm">Makkah</p>
              <p className="text-[#4A5565] text-sm">{makkahHotel}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#1C398E] mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-[#101828] text-sm">Madinah</p>
              <p className="text-[#4A5565] text-sm">{madinahHotel}</p>
            </div>
          </div>
        </div>

        <hr className="border border-[#E5E7EB]" />

        {/* Feature Pills - only Flights + Visa */}
        <div className="flex gap-3">
          <FeaturePill icon={<Plane className="w-4 h-4" />} label="Flights" />
          <FeaturePill icon={<FileText className="w-4 h-4" />} label="Visa" />
        </div>

        {/* Select Package Button */}
        <button
          className={[
            "mt-auto w-full py-4 rounded-2xl font-bold text-base transition-opacity duration-150 hover:opacity-90",
            popular
              ? "bg-[#1C398E] text-white"
              : "border-2 border-[#1C398E] text-[#1C398E] bg-transparent",
          ].join(" ")}
        >
          Select Package
        </button>

      </div>
    </div>
  );
}

export default function EasterCards() {
  const packages = [
    {
      stars: 3,
      nights: 7,
      title: "7 Nights Easter Package",
      price: "£795",
      originalPrice: "£995",
      save: "£200",
      makkahHotel: "Dar Al Eiman Royal Hotel",
      madinahHotel: "Al Aqeeq Hotel",
      popular: false,
      image: "/Images/Image (5-Star Luxury Umrah).png",
    },
    {
      stars: 4,
      nights: 10,
      title: "10 Nights Easter Package",
      price: "£975",
      originalPrice: "£1,175",
      save: "£200",
      makkahHotel: "Anjum Hotel Makkah",
      madinahHotel: "Shaza Al Madinah",
      popular: true,
      image: "/Images/Image (5-Star Luxury Umrah).png",
    },
    {
      stars: 5,
      nights: 14,
      title: "14 Nights Easter Package",
      price: "£1,160",
      originalPrice: "£1,450",
      save: "£290",
      makkahHotel: "Swissotel Makkah",
      madinahHotel: "Oberoi Madinah",
      popular: false,
      image: "/Images/Image (5-Star Luxury Umrah).png",
    },
  ];

  return (
    <section className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#101828] mb-3">
          Choose Your Package
        </h2>
        <p className="text-[#4A5565] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Flexible durations and star ratings to suit every budget and preference
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {packages.map((pkg) => (
          <PackageCard key={pkg.nights} {...pkg} />
        ))}
      </div>

    </section>
  );
}