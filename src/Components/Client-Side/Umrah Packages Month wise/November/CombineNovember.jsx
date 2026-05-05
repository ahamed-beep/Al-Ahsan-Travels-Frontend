"use client";

import Footer from "../../Home/Footer";
import Navbar from "../../Home/Navbar";
import ContantJanuary from "../January/ContantJanuary";
import FiveStarPackages from "../January/FiveStar";
import HeroSection from "../January/HeroSection";
import QuickComparisonGuide from "../January/QuickComparisonGuide";
import Threeandfourstar from "../January/Threeandfourstar";

export default function CombineNovember() {
  return <div>
    <Navbar/>
    <HeroSection month="November"/>
    <ContantJanuary month="November"/>
    <Threeandfourstar month="November"/>
    <FiveStarPackages month="November"/>
    <QuickComparisonGuide month="november"/>
    <Footer/>
    </div> ;
}
