"use client";

import Footer from "../../Home/Footer";
import Navbar from "../../Home/Navbar";
import TopBar from "../../Home/Topbar";
import ContantJanuary from "../January/ContantJanuary";
import FiveStarPackages from "../January/FiveStar";
import HeroSection from "../January/HeroSection";
import QuickComparisonGuide from "../January/QuickComparisonGuide";
import Threeandfourstar from "../January/Threeandfourstar";

export default function CombineMarch() {
  return <div>
    <TopBar/>
    <Navbar/>
    <HeroSection month="march"/>
    <ContantJanuary month="march"/>
    <Threeandfourstar month="march"/>
    <FiveStarPackages month="march"/>
    <QuickComparisonGuide month="march"/>
    <Footer/>
    </div> ;
}
