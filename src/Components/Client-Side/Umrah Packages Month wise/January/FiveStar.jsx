"use client";

import Image from "next/image";
import { Check, Clock, MapPin, MessageCircle } from "lucide-react";
import { useMonthlyPackages } from "./Usemonthlypackages/Usemonthlypackages";

function Card({ item, features }) {
  return (
    <div className="bg-[#ffffff] rounded-2xl border border-[#1C398ECC] shadow-[0_6px_20px_rgba(81,162,255,0.25)] overflow-hidden hover:shadow-[0_10px_30px_rgba(81,162,255,0.35)] transition">
      <div className="relative h-56">
        <Image
          src={item.image || "/Images/Image (Ramadan Umrah Premium).webp"}
          alt={item.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 right-3 bg-[#2B7FFF] text-[#ffffff] text-sm font-semibold px-3 py-1 rounded-md shadow">
          {item.price}
        </div>
      </div>

      <div className="p-5 flex flex-col">
        <h3 className="font-bold text-[#222222] mb-3">{item.title}</h3>

        <div className="flex items-center gap-2 text-sm text-[#4A5565] mb-2">
          <Clock size={14} className="text-[#1C398E]" />
          {item.duration}
        </div>

        <div className="flex gap-2 text-sm text-[#364153] mb-1">
          <MapPin size={14} className="text-[#1C398E] mt-1" />
          <span><span className="font-semibold">Makkah:</span> {item.makkahHotel}</span>
        </div>

        <div className="flex gap-2 text-sm text-[#364153] mb-4">
          <MapPin size={14} className="text-[#1C398E] mt-1" />
          <span><span className="font-semibold">Madinah:</span> {item.madinahHotel}</span>
        </div>

        <hr className="mb-4 border-[#E5E7EB]" />

        <div className="space-y-2 mb-5">
          {(features?.length ? features : ["Flights", "Visa", "Transport", "5★ Hotels", "Guide"]).map((f) => (
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

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-gray-200 overflow-hidden animate-pulse">
      <div className="h-56 bg-gray-200" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
        <div className="h-8 bg-gray-200 rounded mt-4" />
      </div>
    </div>
  );
}

export default function FiveStarPackages({ month = "january" }) {
  const monthName = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
  const { packages5Star, loading, error } = useMonthlyPackages(month);

  if (loading) {
    return (
      <section className="w-full py-14 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="h-8 bg-gray-200 rounded w-80 mb-4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-56 mb-10 animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full py-14 bg-[#FFFFFF] text-center text-red-500">{error}</section>
    );
  }

  if (!packages5Star || !packages5Star.packages?.length) {
    return (
      <section className="w-full py-14 bg-[#FFFFFF] text-center text-[#4A5565]">
        {monthName} ke liye abhi koi 5★ packages available nahi hain.
      </section>
    );
  }

  return (
    <section className="w-full py-14 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-15 px-8">
          <div className="flex text-[#1c398e] text-2xl">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#222222] ml-2">
              {packages5Star.sectionTitle || `5-Star ${monthName} Umrah Packages`}
            </h2>
          </div>
          <p className="text-[#4a5565] text-sm">
            {packages5Star.sectionSubtitle || "Premium experience near Haram with maximum comfort"}
          </p>
        </div>

        <div className="grid grid-cols-1 px-8 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages5Star.packages.map((item, i) => (
            <Card key={i} item={item} features={packages5Star.features} />
          ))}
        </div>
      </div>
    </section>
  );
}