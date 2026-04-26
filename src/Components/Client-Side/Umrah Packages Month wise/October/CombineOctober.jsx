"use client";

import Footer from "../../Home/Footer";
import Navbar from "../../Home/Navbar";
import ContantJanuary from "../January/ContantJanuary";
import FiveStarPackages from "../January/FiveStar";
import HeroSection from "../January/HeroSection";
import Threeandfourstar from "../January/Threeandfourstar";

export default function CombineOctober() {
  return <div>
    <Navbar/>
    <HeroSection month="october"/>
    <ContantJanuary month="october"/>
    <Threeandfourstar month="october"/>
    <FiveStarPackages month="october"/>
    <Footer/>
    </div> ;
}
