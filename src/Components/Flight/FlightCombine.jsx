import Link from "next/link"
import Navbar from "../Client-Side/Home/Navbar"
import Footer from "../Client-Side/Home/Footer"
import FlightHero from "./FlightHero"
import FlightDeals from "./Flightdeals "
import AirlinePartners from "./Airlinepartners"
import WhyChooseUs from "./Whychooseus"
import BookingProcess from "./Bookingprocess"
import FlexibleOptions from "./Flexibleoptions"
import FlightCTA from "./Flightcta"
import FlightClasses from "./Flightclasses"


const FlightCombine = () => {
  return (
    <div>
      <Navbar/>
      <FlightHero/>
      <FlightDeals/>
      <AirlinePartners/>
      <WhyChooseUs/>
      <BookingProcess/>
      <FlexibleOptions/>
      <FlightCTA/>
      <FlightClasses/>
      <Footer/>
    </div>
  )
}

export default FlightCombine
