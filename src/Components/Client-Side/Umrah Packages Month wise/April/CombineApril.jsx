"use client";

import Footer from "../../Home/Footer";
import Navbar from "../../Home/Navbar";
import TopBar from "../../Home/Topbar";
import ContantJanuary from "../January/ContantJanuary";
import FiveStarPackages from "../January/FiveStar";
import HeroSection from "../January/HeroSection";
import QuickComparisonGuide from "../January/QuickComparisonGuide";
import Threeandfourstar from "../January/Threeandfourstar";

export default function CombineApril() {
  return <div>
    <TopBar/>
    <Navbar/>
    <HeroSection month="april"/>
    <ContantJanuary month="april"/>
    <Threeandfourstar month="april"/>
    <FiveStarPackages month="april"/>
    <QuickComparisonGuide month="april"/>
    <Footer/>
    </div> ;
}
