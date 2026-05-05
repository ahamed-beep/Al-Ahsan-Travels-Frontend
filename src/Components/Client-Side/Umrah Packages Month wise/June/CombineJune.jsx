"use client";

import Footer from "../../Home/Footer";
import Navbar from "../../Home/Navbar";
import ContantJanuary from "../January/ContantJanuary";
import FiveStarPackages from "../January/FiveStar";
import HeroSection from "../January/HeroSection";
import QuickComparisonGuide from "../January/QuickComparisonGuide";
import Threeandfourstar from "../January/Threeandfourstar";

export default function CombineJune() {
  return <div>
    <Navbar/>
    <HeroSection month="june"/>
    <ContantJanuary month="june"/>
    <Threeandfourstar month="june"/>
    <FiveStarPackages month="june"/>
    <QuickComparisonGuide month="june"/>
    <Footer/>
    </div> ;
}
