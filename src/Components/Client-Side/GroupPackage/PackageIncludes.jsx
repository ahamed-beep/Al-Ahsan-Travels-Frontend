"use client";

import { Building, Car, Check } from "lucide-react";

export default function PackageIncludes() {
  return (
    <section className="bg-[#FFFFFF] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#101828]">
          What's Included in Your Package
        </h2>
        <p className="text-[#4A5565] mt-3">
          Comprehensive details of our group packages
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          
          {/* Card 1 */}
          <div className="bg-[#F9FAFB] rounded-2xl p-6 text-left shadow-sm border border-[#E5E7EB]">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1C398E] text-[#ffffff] mb-4">
              <Building size={22} />
            </div>

            <h3 className="text-lg font-bold text-[#101828] mb-3">
              Hotels
            </h3>

            <ul className="space-y-2 text-[#364153] text-sm">
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Group rooms with interconnecting options
              </li>
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Close proximity to Haram for easy access
              </li>
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Clean, comfortable, and well-maintained
              </li>
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> On-site dining facilities
              </li>
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Air-conditioned rooms
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F9FAFB] rounded-2xl p-6 text-left shadow-sm border border-[#E5E7EB]">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1C398E] text-[#ffffff] mb-4">
              <Car size={22} />
            </div>

            <h3 className="text-lg font-bold text-[#101828] mb-3">
              Transport
            </h3>

            <ul className="space-y-2 text-[#364153] text-sm">
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Private air-conditioned coaches
              </li>
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Airport pickup and drop-off
              </li>
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Makkah to Madinah transfers
              </li>
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Ziyarat tour transportation
              </li>
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Comfortable seating for families
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F9FAFB] rounded-2xl p-6 text-left shadow-sm border border-[#E5E7EB]">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1C398E] text-[#ffffff] mb-4">
              <Check size={22} />
            </div>

            <h3 className="text-lg font-bold text-[#101828] mb-3">
              Inclusions
            </h3>

            <ul className="space-y-2 text-[#364153] text-sm">
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Return economy flights (upgrades available)
              </li>
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Hotel accommodation 
              </li>
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Saudi Arabia Umrah visas for all
              </li>
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Ground transportation as per itinerary
              </li>
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Experienced multilingual guide
              </li>
              <li className="flex gap-2">
                <span className="text-[#1C398E]">›</span> Ziyarat tours (selected packages)
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}