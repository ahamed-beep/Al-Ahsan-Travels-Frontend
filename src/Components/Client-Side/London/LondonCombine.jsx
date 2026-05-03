"use client";

import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import BestTimeToBook from "./BestTimeToBook";
import EverythingIncluded from "./EverythingIncluded";
import FAQ from "./FAQItem";
import LondonHero from "./LondonHero";
import LondonPackageCards from "./LondonPackageCards";
import LondonPlanIcon from "./LondonPlanIcon";
import WhyBookTowerUmrah from "./WhyBookTowerUmrah";



const LondonCombine = () => {
  return (
    <div>
        <Navbar/>
        <LondonHero/>
        <LondonPackageCards/>
        <LondonPlanIcon/>
        <EverythingIncluded/>
        <BestTimeToBook/>
        <WhyBookTowerUmrah/>
        <FAQ/>
        
        <Footer/>
        
    </div>
  )
}

export default LondonCombine