"use client";

import { useState, useEffect } from "react";
import { Clock, MapPin, Check, MessageCircle } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { API_SPECIAL_PACKAGES } from "@/constants/api";

const WA_NUMBER = "441216670366";

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
      ${pkg.highlight
          ? "border-2 border-blue-600 shadow-xl scale-[1.03]"
          : "border border-gray-200 shadow-md hover:shadow-lg"
        }`}
    >
      <div className="relative h-52">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-3 left-4">
          <Stars count={pkg.stars} />
        </div>
        {pkg.badge && (
          <div
            className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-md text-white shadow
            ${pkg.badge === "Best Value" ? "bg-yellow-500" : "bg-blue-900"}`}
          >
            {pkg.badge}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="text-lg font-semibold text-[#101828]">{pkg.title}</h3>

        <div>
          <p className="text-3xl font-bold text-[#1C398E]">{pkg.price}</p>
          <span className="text-xs text-[#6A7282]">per person</span>
        </div>

        <div className="border-t border-gray-200" />

        <div className="flex items-center gap-2 text-sm text-[#4A5565]">
          <Clock size={16} className="text-[#4A5565]" />
          {pkg.nights} Nights
        </div>

        <div className="border-t border-gray-200" />

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

        <ul className="space-y-2 text-sm text-[#364153]">
          {pkg.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check size={16} className="text-[#1C398E]" />
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => window.open(`https://wa.me/${WA_NUMBER}`, "_blank")}
          className="mt-auto bg-[#25D366] hover:bg-green-600 transition text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium"
        >
          <MessageCircle size={16} />
          WhatsApp
        </button>
      </div>
    </div>
  );
}

export default function ManchesterPackageCards() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosInstance.get(API_SPECIAL_PACKAGES, {
          params: { category: "umrah_manchester", isActive: true, limit: 10 },
        });
        setPackages(data.data ?? []);
      } catch {
        setPackages([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const mapped = packages.map((pkg) => ({
    id: pkg._id,
    stars: pkg.stars,
    title: pkg.title,
    price: pkg.price,
    nights: pkg.nights,
    badge: pkg.badge,
    highlight: pkg.isPopular,
    image: pkg.image,
    makkah: pkg.hotels?.makkah,
    madinah: pkg.hotels?.madinah,
    features: pkg.features ?? [],
  }));

  if (loading) {
    return (
      <section className="bg-[#F9FAFB] py-16 px-4 flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1C398E]" />
      </section>
    );
  }

  return (
    <section className="bg-[#F9FAFB] py-16 px-4">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#101828]">
          Choose Your Umrah Package
        </h2>
        <p className="text-[#4A5565] mt-3 text-sm md:text-base">
          All-inclusive packages for Women with transparent pricing
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {mapped.map((pkg) => (
          <Card key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}