"use client";

import { useState } from "react";
import { Plane } from "lucide-react";
import {
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaUserFriends,
  FaSearch,
} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

export default function FlightHero({ onSearch }) {
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    passengers: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 // In FlightHero.jsx - handleSearch function

const handleSearch = () => {
  if (!formData.from || !formData.to) {
    alert("Please fill in From and To fields!");
    return;
  }
  
  const searchData = {
    from: formData.from,
    to: formData.to,
    departureDate: formData.departureDate,
    passengers: formData.passengers || "1",
    class: selectedClass
  };
  
  console.log("Calling onSearch with:", searchData);
  
  // Pass to parent
  if (onSearch) {
    onSearch(searchData);
  }
};

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/Images/BackGround.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full mt-20 max-w-7xl mx-auto px-4 py-10 sm:py-16 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center items-start text-left gap-5 lg:pl-20">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#D7EBFF] text-[#2B7FFFCC] text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full">
            <Plane className="text-[#2B7FFFCC]" /> Umrah Flight Booking
          </span>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ffffff] leading-tight">
            Book Umrah Flights from <br className="hidden sm:block" /> UK
          </h1>

          {/* Text */}
          <p className="text-gray-200 text-xs sm:text-base max-w-sm sm:max-w-md">
            Affordable flights to Jeddah & Madinah with trusted airlines.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
            <button 
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 bg-[#1C398E] text-[#ffffff] px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold w-full sm:w-auto"
            >
              <FaSearch /> Search Flights
            </button>

            <button className="flex items-center justify-center gap-2 border border-[#1C398E] text-[#2B7FFF] bg-[#ffffff] px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold w-full sm:w-auto">
              Get Quote <FiChevronRight />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-[#ffffff] rounded-xl shadow-xl p-4 sm:p-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* From */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-[#6A7282] font-medium">From</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2 py-2">
                  <FaMapMarkerAlt className="text-gray-400 text-xs" />
                  <input
                    type="text"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    placeholder="London"
                    className="text-xs w-full focus:outline-none"
                  />
                </div>
              </div>

              {/* To */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-[#6A7282] font-medium">To</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2 py-2">
                  <FaMapMarkerAlt className="text-gray-400 text-xs" />
                  <input
                    type="text"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    placeholder="Jeddah"
                    className="text-xs w-full focus:outline-none"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-[#6A7282] font-medium">Departure</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2 py-2">
                  <FaRegCalendarAlt className="text-gray-400 text-xs" />
                  <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                    className="text-xs w-full focus:outline-none"
                  />
                </div>
              </div>

              {/* Passengers */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-[#6A7282] font-medium">Passengers</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2 py-2">
                  <FaUserFriends className="text-gray-400 text-xs" />
                  <input
                    type="number"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    min="1"
                    placeholder="1"
                    className="text-xs w-full focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Class */}
            <div className="mt-3">
              <label className="text-[11px] text-[#6A7282] font-medium">Class</label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button
                  onClick={() => setSelectedClass("Economy")}
                  className={`py-2 rounded-lg text-xs font-medium border ${
                    selectedClass === "Economy"
                      ? "border-[#1C398E] text-[#243E8B] bg-blue-50"
                      : "border-[#E5E7EB] text-gray-500"
                  }`}
                >
                  Economy
                </button>
                <button
                  onClick={() => setSelectedClass("Business")}
                  className={`py-2 rounded-lg text-xs font-medium border ${
                    selectedClass === "Business"
                      ? "border-[#1C398E] text-[#243E8B] bg-[#ECFDF5]"
                      : "border-[#E5E7EB] text-gray-500"
                  }`}
                >
                  Business
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleSearch}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-[#1C398E] text-white py-2.5 rounded-lg text-xs font-semibold"
            >
              <FaSearch /> Search Available Flights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}