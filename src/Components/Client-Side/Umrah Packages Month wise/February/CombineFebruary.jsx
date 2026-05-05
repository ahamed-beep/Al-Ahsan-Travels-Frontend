"use client";

import Footer from "../../Home/Footer";
import Navbar from "../../Home/Navbar";
import ContantJanuary from "../January/ContantJanuary";
import FiveStarPackages from "../January/FiveStar";
import HeroSection from "../January/HeroSection";
import QuickComparisonGuide from "../January/QuickComparisonGuide";
import Threeandfourstar from "../January/Threeandfourstar";

export default function CombineFebruary() {
  return <div>
    <Navbar/>
    <HeroSection month="february"/>
    <ContantJanuary month="february"/>
    <Threeandfourstar month="february"/>
    <FiveStarPackages month="february"/>
    <QuickComparisonGuide month='february'/>
    <Footer/>
    
    </div> ;
}
