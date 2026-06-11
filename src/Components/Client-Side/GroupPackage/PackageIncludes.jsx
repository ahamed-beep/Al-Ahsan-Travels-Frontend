"use client";

import { Building, Car, Check, MapPin, Users } from "lucide-react";

export default function PackageIncludes() {
  return (
    <section className="bg-[#FFFFFF] py-16 px-5 md:px-20">
      <div className=" mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#101828]">
   Additional Services & Support
        </h2>
        <p className="text-[#4A5565] mt-3">
      Extra care and convenience throughout your journey
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          
          {/* Card 1 */}
          <div className="bg-[#F9FAFB] rounded-2xl p-6 text-left shadow-sm border border-[#E5E7EB]">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1C398E] text-[#ffffff] mb-4">
              <Car size={22} />
            </div>

            <h3 className="text-lg font-bold text-[#101828] mb-3">
          Free Shuttle Service
            </h3>

            <p className="  text-[#364153] text-sm">
         Complimentary transport between hotel and Haram
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F9FAFB] rounded-2xl p-6 text-left shadow-sm border border-[#E5E7EB]">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1C398E] text-[#ffffff] mb-4">
            <MapPin size={22} />
            </div>

            <h3 className="text-lg font-bold text-[#101828] mb-3">
         Close to Haram
            </h3>

                <p className="space-y-2 text-[#364153] text-sm">
  Hotels within walking distance or short shuttle ride
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F9FAFB] rounded-2xl p-6 text-left shadow-sm border border-[#E5E7EB]">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1C398E] text-[#ffffff] mb-4">
          <Users size={22} />
            </div>

            <h3 className="text-lg font-bold text-[#101828] mb-3">
      Family & Elder Friendly
            </h3>

                 <p className="space-y-2 text-[#364153] text-sm">
    Special assistance for families and elderly pilgrims
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}