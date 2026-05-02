"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaPassport, FaBus, FaUtensils, FaUser } from "react-icons/fa";

export default function NonShiftingPackages() {
  const packages = [
    {
      title: "Non-Shifting Hajj Economy",
      days: "21 Days / 20 Nights",
      makkah: "Swissotel Makkah",
      madinah: "Oberoi Madinah",
      price: "£6,999",
      img: "/Images/Image (5-Star Luxury Umrah).webp",
      popular: true,
    },
    {
      title: "Non-Shifting Hajj Standard",
      days: "25 Days / 24 Nights",
      makkah: "Anjum Hotel Makkah",
      madinah: "Dar Al Taqwa",
      price: "£7,999",
      img: "/Images/Image (Hajj Complete Package).webp",
    },
    {
      title: "Non-Shifting Hajj Plus",
      days: "28 Days / 27 Nights",
      makkah: "Raffles Makkah Palace",
      madinah: "Shaza Al Madinah",
      price: "£9,999",
      img: "/Images/Image (Ramadan Umrah Premium).webp",
    },
  ];

  return (
     <div className="bg-[#FAFAFA] py-10 sm:py-14 px-3 sm:px-6 flex flex-col items-center">
          {/* Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1F1F1F] text-center">
            Choose Your Package
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5565] mb-8 sm:mb-10 text-center max-w-md">
            Select the package that best fits your needs and budget
          </p>
    
          <div className="w-full max-w-5xl md:px-25 space-y-5 sm:space-y-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-[#ffffff] rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-[#E5E7EB]"
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="bg-[#243E8B] text-[#ffffff] text-[10px] sm:text-xs text-center py-1">
                    ⭐ Most Popular Choice
                  </div>
                )}
    
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="w-full lg:w-1/2 h-50 sm:h-52 lg:h-auto relative">
                    <Image
                      src={pkg.img}
                      alt={pkg.title}
                      fill
                      className="object-cover"
                    />
                  </div>
    
                  {/* Content */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-[#1F1F1F]">
                        {pkg.title}
                      </h3>
    
                      <p className="text-xs sm:text-sm text-[#4A5565] mb-3">
                        {pkg.days}
                      </p>
    
                      {/* Locations */}
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <MdLocationOn size={16} /> {pkg.makkah}
                        </div>
                        <div className="flex items-center gap-1">
                          <MdLocationOn size={16} /> {pkg.madinah}
                        </div>
                      </div>
    
                      {/* Features */}
                      <div className="flex flex-wrap text-[#1F1F1F] gap-2 mb-4">
                        {["Visa", "Transport", "Meals", "Guide"].map(
                          (item, i) => (
                            <span
                              key={i}
                              className="flex items-center gap-1 bg-[#C6D7FC] px-2 sm:px-3 py-1 text- sm:text-xs rounded-lg text-[#1C398E]"
                            >
                              {item === "Visa" && <FaPassport size={12} />}
                              {item === "Transport" && <FaBus size={12} />}
                              {item === "Meals" && <FaUtensils size={12} />}
                              {item === "Guide" && <FaUser size={12} />}
                              {item}
                            </span>
                          )
                        )}
                      </div>
                    </div>
    
                    {/* Price + Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3">
                      <div>
                        <p className="text-[10px] sm:text-xs text-[#6A7282]">From</p>
                        <h4 className="text-lg sm:text-xl font-bold text-[#1C398E]">
                          {pkg.price}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-[#6A7282]">per person</p>
                      </div>
    
                      <button className="w-full sm:w-auto mr-40 flex justify-center items-center gap-2 bg-[#25D366]  text-[#ffffff] px-4 py-2 rounded-lg text-xs sm:text-sm">
                        <FaWhatsapp /> WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  );
}
