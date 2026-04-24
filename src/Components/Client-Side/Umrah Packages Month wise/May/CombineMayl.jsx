"use client";

import Footer from "../../Home/Footer";
import Navbar from "../../Home/Navbar";
import ContantJanuary from "../January/ContantJanuary";
import FiveStarPackages from "../January/FiveStar";
import HeroSection from "../January/HeroSection";
import Threeandfourstar from "../January/Threeandfourstar";

export default function CombineMay() {
  return <div>
    <Navbar/>
    <HeroSection month="may"/>
    <ContantJanuary month="may"/>
    <Threeandfourstar month="may"/>
    <FiveStarPackages month="may"/>
    <Footer/>
    </div> ;
}
