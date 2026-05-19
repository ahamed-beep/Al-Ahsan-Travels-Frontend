"use client";

import Image from "next/image";
import { CheckIcon, Clock, MapPin, MessageCircle } from "lucide-react";
import { useMonthlyPackages } from "./Usemonthlypackages/Usemonthlypackages";

const Card = ({ item }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative h-60 w-full">
        <Image src={item.image || "/Images/Image (5-Star Luxury Umrah).webp"} alt={item.title} fill className="object-cover" />
        <div className="absolute top-3 right-3 bg-[#1C398E] text-[#FFFFFF] text-sm font-semibold px-3 py-1 rounded-md">
          {item.price}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-[#222222] mb-2">{item.title}</h3>

        <p className="flex items-center text-sm text-[#4a5565] mb-2">
          <Clock size={14} className="mr-1 text-[#1C398E]" /> {item.duration}
        </p>

        <p className="flex items-center text-sm text-[#364153]">
          <MapPin size={14} className="mr-1 text-[#1C398E]" />
          <span className="font-bold mr-1">Makkah:</span> {item.makkahHotel}
        </p>

        <p className="flex items-center text-sm text-[#364153] mb-3">
          <MapPin size={14} className="mr-1 text-[#1C398E]" />
          <span className="font-bold mr-1">Madinah:</span> {item.madinahHotel}
        </p>

        <hr className="mb-3 border border-[#e5e7eb]" />

        <ul className="text-sm text-[#364153] space-y-1 mb-4">
          {item.features?.length
            ? item.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckIcon size={14} className="text-[#1C398E]" /> {f}
                </li>
              ))
            : ["Flights", "Visa", "Transport", "Hotels"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckIcon size={14} className="text-[#1C398E]" /> {f}
                </li>
              ))}
        </ul>

        <button className="w-full flex items-center justify-center gap-2 bg-[#25d366] text-[#ffffff] py-2 rounded-lg text-sm">
          <MessageCircle className="text-[#ffffff] w-4 h-4" /> WhatsApp
        </button>
      </div>
    </div>
  );
};

function Section({ title, subtitle, stars, data, features }) {
  return (
    <div className="mb-14">
      <div className="mb-6">
        <div className="flex text-[#1c398e] text-2xl">
          {Array.from({ length: stars }).map((_, i) => (
            <span key={i}>★</span>
          ))}
          <h2 className="text-2xl text-[#222222] md:text-3xl font-bold">{title}</h2>
        </div>
        <p className="text-[#4a5565]">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <Card key={i} item={{ ...item, features }} />
        ))}
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="h-60 bg-gray-200" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
        <div className="h-8 bg-gray-200 rounded mt-4" />
      </div>
    </div>
  );
}

export default function Threeandfourstar({ month = "January" }) {
  const monthName = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
  const { packages3Star, packages4Star, loading, error } = useMonthlyPackages(month);

  if (loading) {
    return (
      <div className="bg-[#FFFFFF] py-10 px-8 md:px-10">
        <div className="max-w-7xl px-8 mx-auto">
          {[3, 4].map((star) => (
            <div key={star} className="mb-14">
              <div className="h-8 bg-gray-200 rounded w-72 mb-6 animate-pulse" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#FFFFFF] py-10 px-8 text-center text-red-500">{error}</div>
    );
  }

  return (
    <div className="bg-[#FFFFFF] py-10 px-8 md:px-10">
      <div className="max-w-7xl px-8 mx-auto">
        {packages3Star && packages3Star.packages?.length > 0 && (
          <Section
            stars={3}
            title={packages3Star.sectionTitle || `3-Star ${monthName} Umrah Packages`}
            subtitle={packages3Star.sectionSubtitle || "Affordable packages for budget-conscious travelers"}
            data={packages3Star.packages}
            features={packages3Star.features}
          />
        )}

        {packages4Star && packages4Star.packages?.length > 0 && (
          <Section
            stars={4}
            title={packages4Star.sectionTitle || `4-Star ${monthName} Umrah Packages`}
            subtitle={packages4Star.sectionSubtitle || "Balanced comfort and affordability"}
            data={packages4Star.packages}
            features={packages4Star.features}
          />
        )}

        {!packages3Star && !packages4Star && (
          <div className="text-center py-20 text-[#4A5565]">
            {monthName} ke liye abhi koi 3★ / 4★ packages available nahi hain.
          </div>
        )}
      </div>
    </div>
  );
}