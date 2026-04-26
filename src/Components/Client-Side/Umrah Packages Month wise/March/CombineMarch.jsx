"use client";

import Footer from "../../Home/Footer";
import Navbar from "../../Home/Navbar";
import ContantJanuary from "../January/ContantJanuary";
import FiveStarPackages from "../January/FiveStar";
import HeroSection from "../January/HeroSection";
import Threeandfourstar from "../January/Threeandfourstar";

export default function CombineMarch() {
  return <div>
    <Navbar/>
    <HeroSection month="march"/>
    <ContantJanuary month="march"/>
    <Threeandfourstar month="march"/>
    <FiveStarPackages month="march"/>
    <Footer/>
    </div> ;
}
