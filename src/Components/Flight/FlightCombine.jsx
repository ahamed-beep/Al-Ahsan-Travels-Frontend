"use client";

import { useState, useRef } from "react";
import Navbar from "../Client-Side/Home/Navbar";
import Footer from "../Client-Side/Home/Footer";
import FlightHero from "./FlightHero";
import FlightDeals from "./Flightdeals ";
import AirlinePartners from "./Airlinepartners";
import WhyChooseUs from "./Whychooseus";
import BookingProcess from "./Bookingprocess";
import FlexibleOptions from "./Flexibleoptions";
import FlightCTA from "./Flightcta";
import FlightClasses from "./Flightclasses";
import TopBar from "../Client-Side/Home/Topbar";

const FlightCombine = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    from: "",
    to: "",
    departureDate: "",
    passengers: "",
    class: "Economy"
  });

  const flightDealsRef = useRef(null);

  const handleSearch = (searchData) => {
    console.log("Search triggered with:", searchData);
    setSearchCriteria({
      from: searchData.from,
      to: searchData.to,
      departureDate: searchData.departureDate,
      passengers: searchData.passengers,
      class: searchData.class
    });
    
    // Scroll to flight deals after search
    setTimeout(() => {
      if (flightDealsRef.current) {
        flightDealsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div>
      <TopBar/>
      <Navbar />
      <FlightHero onSearch={handleSearch} />
      
      {/* Flight Deals Section with ref */}
      <div ref={flightDealsRef}>
        <FlightDeals searchParams={searchCriteria} />
      </div>
      
      <AirlinePartners />
      <WhyChooseUs />
      <BookingProcess />
      <FlexibleOptions />
      <FlightCTA />
      <FlightClasses />
      <Footer />
    </div>
  );
};

export default FlightCombine;