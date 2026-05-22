"use client";

import { useState, useEffect } from "react";
import { Plane } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { API_FLIGHT_DEALS } from "@/constants/api";

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

export default function FlightDeals({ searchParams }) {
  const [allFlights, setAllFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all flights on component mount
  useEffect(() => {
    fetchFlightDeals();
  }, []);

  // Apply filter whenever searchParams or allFlights change
  useEffect(() => {
    console.log("Search Params received:", searchParams);
    console.log("All Flights:", allFlights);
    
    if (allFlights.length > 0) {
      let filtered = [...allFlights];
      
      // Filter by FROM city
      if (searchParams?.from && searchParams.from.trim() !== "") {
        filtered = filtered.filter(flight => 
          flight.from?.toLowerCase() === searchParams.from.toLowerCase()
        );
        console.log("Filtered by FROM:", searchParams.from, filtered.length);
      }
      
      // Filter by TO city
      if (searchParams?.to && searchParams.to.trim() !== "") {
        filtered = filtered.filter(flight => 
          flight.to?.toLowerCase() === searchParams.to.toLowerCase()
        );
        console.log("Filtered by TO:", searchParams.to, filtered.length);
      }
      
      setFilteredFlights(filtered);
    } else {
      setFilteredFlights([]);
    }
  }, [searchParams, allFlights]);

  const fetchFlightDeals = async () => {
    try {
      const response = await axiosInstance.get(API_FLIGHT_DEALS, {
        params: {
          isActive: true,
          page: 1,
          limit: 50
        }
      });
      
      console.log('All Flights from API:', response.data.data);
      
      if (response.data.success && response.data.data) {
        setAllFlights(response.data.data);
        setFilteredFlights(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching flight deals:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookFlight = (flight) => {
    const message = encodeURIComponent(
      `Assalamu Alaikum,\n\nI want to book this flight:\n\n` +
      `✈️ Airline: ${flight.airline}\n` +
      `📍 From: ${flight.from}\n` +
      `📍 To: ${flight.to}\n` +
      `⏱️ Duration: ${flight.duration}\n` +
      `💰 Price: ${flight.price} per person\n\n` +
      `Please confirm availability. JazakAllah Khair!`
    );
    window.open(`https://wa.me/447123456789?text=${message}`, '_blank');
  };

  if (loading) {
    return (
      <section  className="bg-[#FFFFFF] py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#101828] mb-3">
            Featured Flight Deals
          </h2>
          <p className="text-[#4A5565] text-base max-w-md mx-auto leading-relaxed">
            Compare affordable flights from major UK cities to Jeddah with our
            trusted airline partners
          </p>
        </div>
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1C398E]"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="Flightdeals" className="bg-[#FFFFFF] py-16 px-4 scroll-mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#101828] mb-3">
          Featured Flight Deals
        </h2>
        <p className="text-[#4A5565] text-base max-w-md mx-auto leading-relaxed">
          Compare affordable flights from major UK cities to Jeddah with our
          trusted airline partners
        </p>
        
        {/* Show active filters */}
        {(searchParams?.from || searchParams?.to) && (
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2">
            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              🔍 Showing flights from <strong>{searchParams.from || "any"}</strong> → <strong>{searchParams.to || "any"}</strong>
            </div>
            {filteredFlights.length === 0 && (
              <div className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm">
                ⚠️ No flights found for this route
              </div>
            )}
            {filteredFlights.length > 0 && (
              <div className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm">
                ✈️ {filteredFlights.length} flight(s) found
              </div>
            )}
          </div>
        )}
      </div>

      {/* No Results */}
      {filteredFlights.length === 0 && !loading && (
        <div className="text-center py-20">
          <Plane className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Flights Found</h3>
          <p className="text-gray-500">
            {searchParams?.from || searchParams?.to 
              ? `No flights available from "${searchParams.from || 'any'}" to "${searchParams.to || 'any'}"`
              : "No flight deals available at the moment"}
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 text-blue-600 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Cards Grid */}
      {filteredFlights.length > 0 && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredFlights.map((flight) => (
            <div
              key={flight._id}
              className="bg-[#FFFFFF] rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <img
                  src={flight.image}
                  alt={`${flight.from} to ${flight.to}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/Images/default-flight.webp";
                  }}
                />

                {flight.badge && (
                  <span className="absolute top-3 left-3 bg-[#FFFFFF] text-[#1E2939] text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {flight.badge}
                  </span>
                )}

                {flight.isPopular && (
                  <span className="absolute top-3 right-3 bg-[#2B7FFF] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                    <StarIcon />
                    Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex text-[#1C398E] items-center gap-2 mb-2">
                  <Plane className="w-4 h-4" />
                  <span className="text-sm text-[#1C398E] font-medium">
                    {flight.airline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#101828] mb-2">
                  {flight.from} → {flight.to}
                </h3>

                <div className="flex text-[#4A5565] items-center gap-2 mb-5">
                  <ClockIcon />
                  <span className="text-sm text-[#4A5565]">{flight.duration}</span>
                </div>

                <hr className="border border-gray-200" />

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-xs text-[#6A7282] mb-0.5">From</p>
                    <p className="text-3xl font-bold text-[#1C398E] leading-none">
                      {flight.price}
                    </p>
                    <p className="text-xs text-[#6A7282] mt-0.5">per person</p>
                  </div>

                  <button
                    onClick={() => handleBookFlight(flight)}
                    className="bg-[#1C398E] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#152d73] transition-colors flex items-center gap-2"
                  >
                    Book Flight
                    <svg width="14" height="14" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}