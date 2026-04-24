"use client";

import Image from "next/image";
import { CheckIcon, Clock, MapPin, MessageCircle } from "lucide-react";

const packages3Star = [
  {
    title: "3-Star Economy 7 Nights",
    price: "£699",
    duration: "7 Days / 6 Nights",
    makkah: "Al Safwah Royal Orchid",
    madinah: "Dar Al Eiman",
    img: "/Images/Image (5-Star Luxury Umrah).png",
  },
  {
    title: "3-Star Economy 10 Nights",
    price: "£899",
    duration: "10 Days / 9 Nights",
    makkah: "Ajyad Hotel",
    madinah: "Al Eiman Taibah",
    img: "/Images/Image (Ramadan Umrah Premium).png",
  },
  {
    title: "3-Star Economy 14 Nights",
    price: "£1,099",
    duration: "14 Days / 13 Nights",
    makkah: "Dar Al Eiman Royal",
    madinah: "Al Aqeeq Hotel",
    img: "/Images/Image (Ramadan Umrah Premium).png",
  },
];

const packages4Star = [
  {
    title: "4-Star Standard 7 Nights",
    price: "£1,199",
    duration: "7 Days / 6 Nights",
    makkah: "Anjum Hotel",
    madinah: "Dar Al Taqwa",
    img: "/Images/Image (5-Star Luxury Umrah).png",
  },
  {
    title: "4-Star Standard 10 Nights",
    price: "£1,499",
    duration: "10 Days / 9 Nights",
    makkah: "Elaf Ajyad",
    madinah: "Shaza Al Madinah",
    img: "/Images/Image (Ramadan Umrah Premium).png",
  },
  {
    title: "4-Star Standard 14 Nights",
    price: "£1,799",
    duration: "14 Days / 13 Nights",
    makkah: "Makkah Towers",
    madinah: "Al Madinah Harmony",
    img: "/Images/Image (Ramadan Umrah Premium).png",
  },
];

const Card = ({ item }) => {
  return (
    <div className="bg-[#ffffff] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">

      {/* Image */}
      <div className="relative h-60 w-full">
        <Image src={item.img} alt={item.title} fill className="object-cover" />
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-[#1C398E] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-md">
          {item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-[#222222] mb-2">{item.title}</h3>

        <p className="flex items-center text-sm text-[#4a5565] mb-2">
          <Clock size={14} className="mr-1 text-[#1C398E]" /> {item.duration}
        </p>

        <p className="flex items-center text-sm text-[#364153]">
          <MapPin size={14} className="mr-1 text-[#1C398E]" />
          <span className="font-bold mr-1">Makkah:</span> {item.makkah}
        </p>

        <p className="flex items-center text-sm text-[#364153] mb-3">
          <MapPin size={14} className="mr-1 text-[#1C398E]" />
          <span className="font-bold mr-1">Madinah:</span> {item.madinah}
        </p>

        <hr className="mb-3 border border-[#e5e7eb]" />

        {/* Features */}
        <ul className="text-sm text-[#364153] space-y-1 mb-4">
          <li className="flex items-center gap-2"><CheckIcon size={14} className="text-[#1C398E]" /> Flights</li>
          <li className="flex items-center gap-2"><CheckIcon size={14} className="text-[#1C398E]" /> Visa</li>
          <li className="flex items-center gap-2"><CheckIcon size={14} className="text-[#1C398E]" /> Transport</li>
          <li className="flex items-center gap-2"><CheckIcon size={14} className="text-[#1C398E]" /> Hotels</li>
        </ul>

        {/* Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-[#25d366] text-[#ffffff] py-2 rounded-lg text-sm">
          <MessageCircle className="text-[#ffffff] w-4 h-4" /> WhatsApp
        </button>
      </div>
    </div>
  );
};

const Section = ({ title, subtitle, stars, data }) => {
  return (
    <div className="mb-14">
      <div className="mb-6">
        <div className="flex text-[#1c398e] text-2xl">
          {Array.from({ length: stars.length }).map((_, i) => (
            <span key={i}>★</span>
          ))}
          <h2 className="text-2xl text-[#222222] md:text-3xl font-bold">{title}</h2>
        </div>
        <p className="text-[#4a5565]">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

// ✅ month prop se heading automatically change hogi
export default function Threeandfourstar({ month = "January" }) {
  // Capitalize karo — "january" → "January"
  const monthName = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

  return (
    <div className="bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        <Section
          stars="⭐⭐⭐"
          title={`3-Star ${monthName} Umrah Packages`}
          subtitle="Affordable packages for budget-conscious travelers"
          data={packages3Star}
        />

        <Section
          stars="⭐⭐⭐⭐"
          title={`4-Star ${monthName} Umrah Packages`}
          subtitle="Balanced comfort and affordability"
          data={packages4Star}
        />

      </div>
    </div>
  );
}