"use client";

import { MapPin, Clock, Phone } from "lucide-react";

const offices = [
  {
    city: "Manchester",
    address: "123 Wilmslow Road, Manchester, M14 5AN",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    phone: "0203 097 1507",
    mapsUrl: "https://maps.google.com?q=123+Wilmslow+Road+Manchester+M14+5AN",
  },
  {
    city: "Burnley",
    address: "45 Yorkshire Street, Burnley, BB11 3BH",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    phone: "0741 835 0475",
    mapsUrl: "https://maps.google.com?q=45+Yorkshire+Street+Burnley+BB11+3BH",
  },
];

export default function VisitOffices() {
  return (
    <section className="bg-[#ffffff] py-14 px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-medium text-[#101828] mb-2">
          Visit Our Offices
        </h2>
        <p className="text-[#4A5565] font-reguler text-sm sm:text-base">
          Come meet our team in person at one of our convenient locations
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        {offices.map((office) => (
          <div
            key={office.city}
            className="bg-[#FFFFFF] border border-gray-100 rounded-2xl shadow-md p-6 flex flex-col gap-5 hover:shadow-lg transition-shadow duration-200"
          >
            {/* City + Address */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#CFE7FF] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#1C398E]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#101828]">{office.city}</h3>
                <p className="text-sm text-[#4A5565] mt-0.5">{office.address}</p>
              </div>
            </div>
            <div className=" text-gray-100"> <hr></hr> </div>

            {/* Hours + Phone */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5 text-sm text-[#364153]">
                <Clock className="w-4 h-4 text-[#1C398E] flex-shrink-0" />
                {office.hours}
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#364153]">
                <Phone className="w-4 h-4 text-[#1C398E] flex-shrink-0" />
                {office.phone}
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => window.open(office.mapsUrl, "_blank")}
              className="w-full flex items-center justify-center gap-2 bg-[#1C398E] hover:bg-blue-800 active:bg-blue-950 text-[#ffffff] font-medium py-3.5 rounded-xl transition-colors duration-150 text-sm"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}