"use client";
import { Clock, MapPin, Check, MessageCircle } from "lucide-react";

const packages = [
  {
    id: 1,
    stars: 3,
    title: "3 Star Umrah Package",
    price: "£770",
    nights: 7,
    image: "/Images/Image (Ramadan Umrah Premium).png",
    makkah: "Dar Al Eiman / Al Kiswah Towers",
    madinah: "Al Aqeeq Hotel",
    features: ["Return Flights", "Visa", "Transport", "3★ Hotels"],
  },
  {
    id: 2,
    stars: 4,
    title: "4 Star Umrah Package",
    price: "£890",
    nights: 7,
    badge: "Best Value",
    highlight: true,
    image: "/Images/Image (5-Star Luxury Umrah).png",
    makkah: "Elaf Ajyad / Anjum Hotel",
    madinah: "Shaza Al Madinah",
    features: ["Return Flights", "Visa", "Transport", "4★ Hotels"],
  },
  {
    id: 3,
    stars: 5,
    title: "5 Star Umrah Package",
    price: "£1,020",
    nights: 7,
    badge: "Luxury",
    image: "/Images/Image (Hajj Complete Package).png",
    makkah: "Swissotel / Raffles Makkah",
    madinah: "Oberoi Madinah",
    features: ["Return Flights", "Visa", "Transport", "5★ Hotels", "Guide"],
  },
];

function Stars({ count }) {
  return (
    <div className="flex text-white text-sm tracking-wide">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < count ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

function Card({ pkg }) {
  return (
    <div
      className={`rounded-2xl bg-[#F9FAFB] overflow-hidden flex flex-col transition-all duration-300
      ${
        pkg.highlight
          ? "border-2 border-blue-600 shadow-xl scale-[1.03]"
          : "border border-gray-200 shadow-md hover:shadow-lg"
      }`}
    >
      {/* IMAGE */}
      <div className="relative h-52">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* stars */}
        <div className="absolute bottom-3 left-4">
          <Stars count={pkg.stars} />
        </div>

        {/* badge */}
        {pkg.badge && (
          <div
            className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-md text-white shadow
            ${pkg.badge === "Best Value" ? "bg-yellow-500" : "bg-blue-900"}`}
          >
            {pkg.badge}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="text-lg font-semibold text-[#101828]">
          {pkg.title}
        </h3>

        {/* price */}
        <div>
          <p className="text-3xl font-bold text-[#1C398E]">
            {pkg.price}
          </p>
          <span className="text-xs text-[#6A7282]">per person</span>
        </div>

        <div className="border-t border-gray-200" />

        {/* nights */}
        <div className="flex items-center gap-2 text-sm text-[#4A5565]">
          <Clock size={16} className="text-[#4A5565]" />
          {pkg.nights} Nights
        </div>

        <div className="border-t border-gray-200" />

        {/* locations */}
        <div className="space-y-3 text-sm">
          <div className="flex gap-2">
            <MapPin size={16} className="text-[#1C398E] mt-1" />
            <div>
              <p className="font-semibold text-[#101828]">Makkah</p>
              <p className="text-[#4A5565] text-xs">{pkg.makkah}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <MapPin size={16} className="text-[#1C398E] mt-1" />
            <div>
              <p className="font-semibold text-[#101828]">Madinah</p>
              <p className="text-[#4A5565] text-xs">{pkg.madinah}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200" />

        {/* features */}
        <ul className="space-y-2 text-sm text-[#364153]">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <Check size={16} className="text-[#1C398E]" />
              {f}
            </li>
          ))}
        </ul>

        {/* button */}
        <button className="mt-auto bg-[#25D366] hover:bg-green-600 transition text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium">
          <MessageCircle size={16} />
          WhatsApp
        </button>
      </div>
    </div>
  );
}

export default function LondonPackageCards() {
  return (
    <section className="bg-[#F9FAFB] py-16 px-4">
      {/* heading */}
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#101828]">
          Choose Your Umrah Package
        </h2>
        <p className="text-[#4A5565] mt-3 text-sm md:text-base">
          All-inclusive packages departing from London with flexible options
          for every budget
        </p>
      </div>

      {/* grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}