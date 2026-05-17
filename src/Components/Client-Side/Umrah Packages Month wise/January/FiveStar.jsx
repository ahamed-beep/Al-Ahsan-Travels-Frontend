"use client";

import Image from "next/image";
import { Clock, MapPin, Check, MessageCircle } from "lucide-react";

const packages = [
  {
    id: 1,
    price: "£1,899",
    title: "5-Star Premium 7 Nights",
    duration: "7 Days / 6 Nights",
    makkah: "Swissotel Makkah",
    madinah: "Oberoi Madinah",
    image: "/Images/Image (Ramadan Umrah Premium).webp",
  },
  {
    id: 2,
    price: "£2,499",
    title: "5-Star Premium 10 Nights",
    duration: "10 Days / 9 Nights",
    makkah: "Raffles Makkah Palace",
    madinah: "Pullman Zamzam",
    image: "/Images/Image (Ramadan Umrah Premium).webp",
  },
  {
    id: 3,
    price: "£3,299",
    title: "5-Star Premium 14 Nights",
    duration: "14 Days / 13 Nights",
    makkah: "Fairmont Makkah",
    madinah: "Anantara Madinah",
    image: "/Images/Image (Ramadan Umrah Premium).webp",
  },
];

const features = ["Flights", "Visa", "Transport", "5★ Hotels", "Guide"];

function Card({ item }) {
  return (
    <div className="bg-[#ffffff] rounded-2xl border border-[#1C398ECC] shadow-[0_6px_20px_rgba(81,162,255,0.25)] overflow-hidden hover:shadow-[0_10px_30px_rgba(81,162,255,0.35)] transition">

      {/* Image */}
      <div className="relative h-56">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
        <div className="absolute top-3 right-3 bg-[#2B7FFF] text-[#ffffff] text-sm font-semibold px-3 py-1 rounded-md shadow">
          {item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col">
        <h3 className="font-bold text-[#222222] mb-3">{item.title}</h3>

        <div className="flex items-center gap-2 text-sm text-[#4A5565] mb-2">
          <Clock size={14} className="text-[#1C398E]" />
          {item.duration}
        </div>

        <div className="flex gap-2 text-sm text-[#364153] mb-1">
          <MapPin size={14} className="text-[#1C398E] mt-1" />
          <span><span className="font-semibold">Makkah:</span> {item.makkah}</span>
        </div>

        <div className="flex gap-2 text-sm text-[#364153] mb-4">
          <MapPin size={14} className="text-[#1C398E] mt-1" />
          <span><span className="font-semibold">Madinah:</span> {item.madinah}</span>
        </div>

        <hr className="mb-4 border-[#E5E7EB]" />

        <div className="space-y-2 mb-5">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-[#364153]">
              <Check size={15} className="text-[#2B7FFF]" />
              {f}
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <button className="w-full bg-[#25D366] flex items-center justify-center gap-2 text-[#FFFFFF] py-2 rounded-lg text-sm">
            <MessageCircle className="text-[#ffffff] w-4 h-4" /> WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

// ✅ month prop se heading automatically change hogi
export default function FiveStarPackages({ month = "january" }) {
  const monthName = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

  return (
    <section
      className="w-full py-14   bg-[#FFFFFF]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-15 px-8">
          <div className="flex text-[#1c398e] text-2xl">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#222222] ml-2">
              5-Star {monthName} Umrah Packages
            </h2>
          </div>
          <p className="text-[#4a5565] text-sm">
            Premium experience near Haram with maximum comfort
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 px-8 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}