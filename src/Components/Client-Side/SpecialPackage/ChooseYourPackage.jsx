"use client";

import { Clock, MapPin, MessageCircle, Plane, FileText, Car, Building } from "lucide-react";

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-blue-200 " viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function FeaturePill({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-[#364153] text-sm px-3 py-2.5 rounded-xl">
  <div className="w-10 h-10 rounded-xl bg-gray-200 ">
  <span className="flex items-center justify-center mt-3  text-[#1C398E]">
    {icon}
  </span></div>

  {label}
</div>
  );
}

function PackageCard({ stars, title, price, makkahHotel, madinahHotel, hotelLabel, popular, image }) {
  function handleWhatsApp() {
    const url = "https://wa.me/?text=" + encodeURIComponent("I'm interested in the " + title + " (" + price + ")");
    window.open(url, "_blank");
  }

  return (
    <div
      className={[
        "flex flex-col rounded-xl bg-[#F7F7F7] overflow-hidden transition-all duration-200 hover:-translate-y-1",
        popular
          ? "border-2 border-[#1C398E] shadow-2xl scale-105"
          : "border border-gray-200 shadow-lg",
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {/* 🔥 Top Badges Row (Fixed) */}
        <div className="absolute top-4 left-0 w-full px-4 flex justify-between z-10">

          {/* Stars Badge */}
          <div className="bg-[#ffffff] text-[#1C398E] rounded-lg px-4 py-2 shadow-md flex items-center gap-1">
            <StarRating count={stars} />
          </div>

          {/* Most Popular Badge */}
          {popular && (
            <div className="bg-[#1C398E] text-[#ffffff] text-xs font-bold px-4 py-2 rounded-lg">
              Most Popular
            </div>
          )}

        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">

        {/* Title + Duration */}
        <div>
          <h3 className="text-xl font-extrabold text-[#101828] mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock className="w-4 h-4 text-[#4A5565]" />
            <span className="text-[#4A5565]">10 Days / 9 Nights</span>
          </div>
        </div>

        {/* Price */}
        <div>
          <p className="text-4xl font-bold text-[#1C398E]">{price}</p>
          <p className="text-sm text-[#6A7282] mt-1">Family of 4</p>
        </div>

        <hr className="border  border-[#E5E7EB]" />

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

        <hr className="border  border-[#E5E7EB]" />

        {/* Feature Pills */}
        <div className="grid grid-cols-2 gap-2">
          <FeaturePill icon={<Plane className="w-4 h-4" />} label="Flights" />
          <FeaturePill icon={<FileText className="w-4 h-4" />} label="Visa" />
          <FeaturePill icon={<Car className="w-4 h-4" />} label="Transport" />
          <FeaturePill icon={<Building className="w-4 h-4" />} label={hotelLabel} />
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="mt-auto flex items-center justify-center gap-2 bg-[#25D366]  text-[#ffffff] font-bold text-base py-4 rounded-2xl transition-colors duration-150 w-full"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </button>

      </div>
    </div>
  );
}

export default function FamilyPackages() {
  const packages = [
    {
      stars: 3,
      title: "3-Star Family Package",
      price: "£3,499",
      makkahHotel: "Dar Al Eiman Royal Hotel",
      madinahHotel: "Al Aqeeq Hotel",
      hotelLabel: "3★ Hotel",
      popular: false,
      image: "/Images/Image (5-Star Luxury Umrah).webp",
    },
    {
      stars: 4,
      title: "4-Star Family Package",
      price: "£4,999",
      makkahHotel: "Anjum Hotel Makkah",
      madinahHotel: "Shaza Al Madinah",
      hotelLabel: "4★ Hotel",
      popular: true,
      image: "/Images/Image (5-Star Luxury Umrah).webp",
    },
    {
      stars: 5,
      title: "5-Star Family Package",
      price: "£6,999",
      makkahHotel: "Swissotel Makkah",
      madinahHotel: "Oberoi Madinah",
      hotelLabel: "5★ Hotel",
      popular: false,
      image: "/Images/Image (5-Star Luxury Umrah).webp",
    },
  ];

  return (
    <section className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] mb-3">
          Choose Your Family Package
        </h2>
        <p className="text-[#4A5565] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Tailored packages for families of all sizes with flexible options and premium comfort
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  items-center">
        {packages.map((pkg) => (
          <PackageCard key={pkg.stars} {...pkg} />
        ))}
      </div>

    </section>
  );
}