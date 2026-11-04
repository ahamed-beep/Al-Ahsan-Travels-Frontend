"use client";

import { useState, useEffect } from "react";
import { Clock, MapPin, MessageCircle, Plane, FileText } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { API_SPECIAL_PACKAGES } from "@/constants/api";

const WA_NUMBER = "441216670366";

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

function PackageCard({
  stars,
  title,
  price,
  originalPrice,
  nights,
  save,
  makkahHotel,
  madinahHotel,
  popular,
  image,
  badge,
  features,
}) {
  const calculatedSave =
    save ||
    (originalPrice && price
      ? parseInt(String(originalPrice).replace(/[^0-9]/g, "")) - parseInt(String(price).replace(/[^0-9]/g, ""))
      : null);

  const saveAmount = calculatedSave ? (String(calculatedSave).startsWith("£") ? calculatedSave : `£${calculatedSave}`) : null;

  const hasFlights = features?.some((f) => f.toLowerCase().includes("flight"));
  const hasVisa = features?.some((f) => f.toLowerCase().includes("visa"));

  const handleSelect = () => {
    const message = `Assalamu Alaikum, I would like to inquire about the "${title}" package (${nights} Nights).`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div
      className={[
        "flex flex-col rounded-2xl bg-white overflow-hidden transition-all duration-200 hover:-translate-y-1",
        popular
          ? "border-2 border-[#1C398E] shadow-2xl scale-105"
          : "border border-gray-200 shadow-lg",
      ].join(" ")}
    >
      <div className="relative h-52 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md flex items-center gap-1">
          <StarRating count={stars} />
        </div>

        {(popular || badge === "Most Popular") && (
          <div className="absolute top-4 right-4 bg-[#1C398E] text-white text-xs font-bold px-3 py-2 rounded-lg">
            Most Popular
          </div>
        )}

        {saveAmount && (
          <div className="absolute bottom-4 right-4 bg-[#1C398E] text-white text-xs font-bold px-3 py-2 rounded-lg">
            Save {saveAmount}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className="text-xl font-extrabold text-[#101828] mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-[#6A7282] text-sm">
            <Clock className="w-4 h-4 text-[#4A5565]" />
            <span className="text-[#4A5565]">{nights} Nights</span>
            <span className="text-[#CBD5E1]">•</span>
          </div>
        </div>

        <div>
          <div className="flex items-baseline gap-3">
            <p className="text-4xl font-bold text-[#1C398E]">{price}</p>
            {originalPrice && (
              <p className="text-lg text-gray-400 line-through font-medium">{originalPrice}</p>
            )}
          </div>
          <p className="text-sm text-[#9CA3AF] mt-1">per person</p>
        </div>

        <hr className="border border-[#E5E7EB]" />

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

        <div className="flex gap-3 flex-wrap">
          {(hasFlights || features?.length === 0) && (
            <FeaturePill icon={<Plane className="w-4 h-4" />} label="Flights" />
          )}
          {(hasVisa || features?.length === 0) && (
            <FeaturePill icon={<FileText className="w-4 h-4" />} label="Visa" />
          )}
          {features?.slice(0, 2).map((feature, idx) => {
            if (feature.toLowerCase().includes("flight") || feature.toLowerCase().includes("visa")) {
              return null;
            }
            return (
              <FeaturePill
                key={idx}
                icon={<MessageCircle className="w-4 h-4" />}
                label={feature}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleSelect}
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

export default function ClockTowerCards() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchClockTowerPackages();
  }, []);

  const fetchClockTowerPackages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(API_SPECIAL_PACKAGES, {
        params: {
          category: "clock_tower",
          isActive: true,
          page: 1,
          limit: 100,
        },
      });

      if (response.data.success && response.data.data) {
        const transformedPackages = response.data.data.map((pkg) => ({
          id: pkg._id,
          stars: pkg.stars,
          nights: pkg.nights,
          title: pkg.title,
          price: pkg.price,
          originalPrice: pkg.originalPrice,
          save: pkg.discount || calculateSave(pkg.originalPrice, pkg.price),
          makkahHotel: pkg.hotels?.makkah || "Standard Hotel",
          madinahHotel: pkg.hotels?.madinah || "Standard Hotel",
          popular: pkg.isPopular,
          image: pkg.image || "/Images/default-package.webp",
          badge: pkg.badge,
          features: pkg.features || [],
          isActive: pkg.isActive,
        }));

        setPackages(transformedPackages);
      } else {
        setPackages([]);
      }
    } catch (err) {
      console.error("Error fetching clock tower packages:", err);
      setError("Failed to load packages. Please try again later.");
      setPackages([]);
    } finally {
      setLoading(false);
    }
  };

  const calculateSave = (originalPrice, price) => {
    if (!originalPrice || !price) return null;
    const original = parseInt(String(originalPrice).replace(/[^0-9]/g, ""));
    const current = parseInt(String(price).replace(/[^0-9]/g, ""));
    if (isNaN(original) || isNaN(current)) return null;
    return `£${original - current}`;
  };

  const Header = () => (
    <div className="text-center mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#101828] mb-3">
        Luxury Clock Tower Packages
      </h2>
      <p className="text-[#4A5565] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
        Experience unparalleled comfort with the closest hotels to the Holy Kaaba
      </p>
    </div>
  );

  if (loading) {
    return (
      <section className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1C398E]"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="text-center py-20">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={fetchClockTowerPackages}
            className="px-6 py-2 bg-[#1C398E] text-white rounded-lg hover:bg-[#152d73]"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  if (packages.length === 0) {
    return (
      <section className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="text-center py-20">
          <p className="text-gray-500">No packages available at the moment.</p>
          <p className="text-sm text-gray-400 mt-2">Please check back later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg, index) => (
          <PackageCard key={pkg.id || index} {...pkg} />
        ))}
      </div>
    </section>
  );
}