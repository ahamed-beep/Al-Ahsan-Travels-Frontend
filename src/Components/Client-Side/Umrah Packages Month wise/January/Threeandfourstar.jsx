"use client";

import Image from "next/image";
import { CheckIcon, Clock, MapPin, MessageCircle } from "lucide-react";
import { useMonthlyPackages } from "./Usemonthlypackages/Usemonthlypackages";

const WA_NUMBER = "441216670366";

const DEFAULT_FEATURES = ["Flights", "Visa", "Transport", "Hotels"];

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

const Card = ({ item }) => {
  const waMessage = encodeURIComponent(`I'm interested in: ${item.title}`);
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  const features = item.features?.length ? item.features : DEFAULT_FEATURES;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative h-60 w-full">
        <Image
          src={item.image || "/Images/Image (5-Star Luxury Umrah).webp"}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3 bg-[#1C398E] text-white text-sm font-semibold px-3 py-1 rounded-md">
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

        <hr className="mb-3 border-[#e5e7eb]" />

        {/* ✅ FIX: key={f} ki jagah key={index} — duplicate strings se error nahi hoga */}
        <ul className="text-sm text-[#364153] space-y-1 mb-4">
          {features.map((f, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckIcon size={14} className="text-[#1C398E]" /> {f}
            </li>
          ))}
        </ul>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
};

function Section({ title, subtitle, stars, data, features }) {
  return (
    <div className="mb-10">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span aria-hidden="true" className="text-[#1c398e] text-2xl tracking-wide">
            {"★".repeat(stars)}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#222222]">{title}</h2>
        </div>
        <p className="text-[#4a5565]">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* ✅ FIX: index fallback add kiya — _id ya title undefined ho toh bhi unique key */}
        {data.map((item, index) => (
          <Card
            key={index}
            item={{ ...item, features }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Threeandfourstar({ month = "January" }) {
  const monthName = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
  const { packages3Star, packages4Star, loading, error } = useMonthlyPackages(month);

  if (loading) {
    return (
      <div className="bg-white py-10 px-8 md:px-10">
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
      <div className="bg-white py-10 px-8 text-center text-red-500">{error}</div>
    );
  }

  const has3Star = packages3Star?.packages?.length > 0;
  const has4Star = packages4Star?.packages?.length > 0;

  return (
    <div className="bg-white py-10 px-2 md:px-10">
      <div className="max-w-7xl px-4 mx-auto">

        {has3Star && (
          <Section
            stars={3}
            title={packages3Star.sectionTitle || `3-Star ${monthName} Umrah Packages`}
            subtitle={packages3Star.sectionSubtitle || "Affordable packages for budget-conscious travelers"}
            data={packages3Star.packages}
            features={packages3Star.features}
          />
        )}

        {has4Star && (
          <Section
            stars={4}
            title={packages4Star.sectionTitle || `4-Star ${monthName} Umrah Packages`}
            subtitle={packages4Star.sectionSubtitle || "Balanced comfort and affordability"}
            data={packages4Star.packages}
            features={packages4Star.features}
          />
        )}

        {!has3Star && !has4Star && (
          <div className="text-center py-20 text-[#4A5565]">
            {monthName} Not Available 3★ / 4★ packages .
          </div>
        )}

      </div>
    </div>
  );
}