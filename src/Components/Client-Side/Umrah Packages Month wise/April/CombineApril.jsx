"use client";

import Footer from "../../Home/Footer";
import Navbar from "../../Home/Navbar";
import ContantJanuary from "../January/ContantJanuary";
import FiveStarPackages from "../January/FiveStar";
import HeroSection from "../January/HeroSection";
import Threeandfourstar from "../January/Threeandfourstar";

export default function CombineApril() {
  return <div>
    <Navbar/>
    <HeroSection month="april"/>
    <ContantJanuary month="april"/>
    <Threeandfourstar month="april"/>
    <FiveStarPackages month="april"/>
    <Footer/>
    </div> ;
}
