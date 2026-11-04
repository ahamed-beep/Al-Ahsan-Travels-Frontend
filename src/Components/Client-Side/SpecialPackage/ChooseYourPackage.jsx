"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin, MessageCircle, Plane, FileText, Car, Building } from "lucide-react";
import axiosInstance from "@/lib/axios";

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-blue-200" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function FeaturePill({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-[#364153] text-sm px-3 py-2.5 rounded-xl">
      <div className="w-10 h-10 rounded-xl bg-gray-200">
        <span className="flex items-center justify-center mt-3 text-[#1C398E]">{icon}</span>
      </div>
      {label}
    </div>
  );
}

function PackageCard({ pkg }) {
 function handleWhatsApp() {
  const url = "https://wa.me/441216670366?text=" + encodeURIComponent("I'm interested in the " + pkg.title + " (" + pkg.price + ")");
  window.open(url, "_blank");
}

  return (
    <div
      className={[
        "flex flex-col rounded-xl bg-[#F7F7F7] overflow-hidden transition-all duration-200 hover:-translate-y-1",
        pkg.popular
          ? "border-2 border-[#1C398E] shadow-2xl scale-105"
          : "border border-gray-200 shadow-lg",
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.imageUrl || "/Images/Image (5-Star Luxury Umrah).webp"}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-0 w-full px-4 flex justify-between z-10">
          <div className="bg-white text-[#1C398E] rounded-lg px-4 py-2 shadow-md flex items-center gap-1">
            <StarRating   count={pkg.starRating} />
          </div>
          {pkg.popular && (
            <div className="bg-[#1C398E] text-white text-xs font-bold px-4 py-2 rounded-lg">
              Most Popular
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className="text-xl font-extrabold text-[#101828] mb-2">{pkg.title}</h3>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock className="w-4 h-4 text-[#4A5565]" />
            <span className="text-[#4A5565]">{pkg.duration}</span>
          </div>
        </div>

        <div>
          <p className="text-4xl font-bold text-[#1C398E]">{pkg.price}</p>
          <p className="text-sm text-[#6A7282] mt-1">Family of 4</p>
        </div>

        <hr className="border border-[#E5E7EB]" />

        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#1C398E] mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-[#101828] text-sm">Makkah</p>
              <p className="text-[#4A5565] text-sm">{pkg.makkahHotel}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#1C398E] mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-[#101828] text-sm">Madinah</p>
              <p className="text-[#4A5565] text-sm">{pkg.madinahHotel}</p>
            </div>
          </div>
        </div>

        <hr className="border border-[#E5E7EB]" />

        <div className="grid grid-cols-2 gap-2">
          <FeaturePill icon={<Plane className="w-4 h-4" />} label="Flights" />
          <FeaturePill icon={<FileText className="w-4 h-4" />} label="Visa" />
          <FeaturePill icon={<Car className="w-4 h-4" />} label="Transport" />
          <FeaturePill icon={<Building className="w-4 h-4" />} label={pkg.hotelLabel} />
        </div>

        <button
          onClick={handleWhatsApp}
          className="mt-auto flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-base py-4 rounded-2xl transition-colors duration-150 w-full"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </button>
      </div>
    </div>
  );
}

export default function FamilyPackages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/group-family-packages", { params: { category: "FAMILY", isActive: true } })
      .then((res) => {
        const raw = Array.isArray(res.data) ? res.data : res.data.data ?? [];

        // Popular card ko hamesha center (index 1) pe rakhne ke liye sort karo
        const sorted = [...raw].sort((a, b) => (a.starRating - b.starRating));

        const popularIndex = sorted.findIndex((p) => p.popular);
        if (popularIndex !== -1 && sorted.length >= 2) {
          const popularCard = sorted.splice(popularIndex, 1)[0];
          const centerIndex = Math.floor(sorted.length / 2);
          sorted.splice(centerIndex, 0, popularCard);
        }

        setPackages(sorted);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="bg-slate-50 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1C398E]" />
      </section>
    );
  }

  return (
    <section className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#101828] mb-3">
          Choose Your Family Package
        </h2>
        <p className="text-[#4A5565] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Tailored packages for families of all sizes with flexible options and premium comfort
        </p>
      </div>

      {packages.length === 0 ? (
        <div className="text-center text-gray-400 py-20">No Package Available</div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <PackageCard key={pkg._id} pkg={pkg} />
          ))}
        </div>
      )}
    </section>
  );
}