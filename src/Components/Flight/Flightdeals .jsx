"use client"
import Image from "next/image";
import { Plane } from "lucide-react";
const flights = [
    {
        id: 1,
        badge: "Direct",
        popular: true,
        airline: "Egypt Air",
        from: "London",
        to: "Jeddah",
        duration: "6h 30m",
        price: "£500",
        image: "/Images/Flightpic.webp",
    },
    {
        id: 2,
        badge: "1 Stop",
        popular: false,
        airline: "Gulf Air",
        from: "Manchester",
        to: "Jeddah",
        duration: "7h 15m",
        price: "£550",
        image: "/Images/Flightpic.webp",
    },
    {
        id: 3,
        badge: "1 Stop (Istanbul)",
        popular: false,
        airline: "Turkish Airlines",
        from: "Birmingham",
        to: "Jeddah",
        duration: "8h 45m",
        price: "£600",
        image: "/Images/Flightpic.webp",
    },
];

function PlaneIcon() {
    return (
        <svg
            className="w-4 h-4 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
        >
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        </svg>
    );
}
function StarIcon() {
  return (
    <svg
      width="12"
      height="12"
      fill="white"
      stroke="white"
      strokeWidth={1}
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function FlightDeals() {
    return (
        <section className="bg-[#FFFFFF] py-16 px-4">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#101828] mb-3">
                    Featured Flight Deals
                </h2>
                <p className="text-[#4A5565] text-base max-w-md mx-auto leading-relaxed">
                    Compare affordable flights from major UK cities to Jeddah with our
                    trusted airline partners
                </p>
            </div>

            {/* Cards Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {flights.map((flight) => (
                    <div
                        key={flight.id}
                        className="bg-[#FFFFFF] rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Image + Badges */}
                        <div className="relative h-48 w-full">
                            <img
                                src={flight.image}
                                alt={`${flight.from} to ${flight.to}`}
                                className="w-full h-full object-cover"
                            />

                            {/* Top-left badge */}
                            <span className="absolute top-3 left-3 bg-[#FFFFFF] text-[#1E2939] text-xs font-semibold px-3 py-1 rounded-full shadow">
                                {flight.badge}
                            </span>

                            {/* Popular badge */}
                            {flight.popular && (
                                <span className="absolute top-3 right-3 bg-[#2B7FFF] text-[#FFFFFF] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                                    <StarIcon />
                                    Popular
                                </span>
                            )}
                        </div>

                        {/* Card Body */}
                        <div className="p-5 ">
                            {/* Airline */}
                            <div className="flex text-[#1C398E] items-center gap-2 mb-2">
                                <Plane />
                                <span className="text-sm text-[#1C398E] font-medium">
                                    {flight.airline}
                                </span>
                            </div>

                            {/* Route */}
                            <h3 className="text-xl font-bold text-[#101828] mb-2">
                                {flight.from} → {flight.to}
                            </h3>

                            {/* Duration */}
                            <div className="flex text-[#4A5565] items-center gap-2 mb-5">
                                <ClockIcon />
                                <span className="text-sm text-[#4A5565]">{flight.duration}</span>
                            </div>

                            <hr className=" border border-gray-200" />

                            {/* Price + Button */}
                            <div className="flex items-center justify-between mt-4">
                                <div>
                                    <p className="text-xs text-[#6A7282] mb-0.5">From</p>
                                    <p className="text-3xl font-bold text-[#1C398E] leading-none">
                                        {flight.price}
                                    </p>
                                    <p className="text-xs text-#6A7282 mt-0.5">per person</p>
                                </div>

                                <button
                                    style={{
                                        backgroundColor: "#1C398E",
                                        color: "#ffffff",
                                        padding: "12px 20px",
                                        borderRadius: "10px",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        border: "none",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e40af")}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
                                >
                                    Book Flight
                                    <svg width="14" height="14" fill="none" stroke="#ffffff" strokeWidth={2.5} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}