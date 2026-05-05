"use client";

import Footer from "../../Home/Footer";
import Navbar from "../../Home/Navbar";
import ContantJanuary from "../January/ContantJanuary";
import FiveStarPackages from "../January/FiveStar";
import HeroSection from "../January/HeroSection";
import QuickComparisonGuide from "../January/QuickComparisonGuide";
import Threeandfourstar from "../January/Threeandfourstar";

export default function CombineAugust() {
  return <div>
    <Navbar/>
    <HeroSection month="august"/>
    <ContantJanuary month="august"/>
    <Threeandfourstar month="august"/>
    <FiveStarPackages month="august"/>
    <QuickComparisonGuide month="august"/>
    <Footer/>
    </div> ;
}
