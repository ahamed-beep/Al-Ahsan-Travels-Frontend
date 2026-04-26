"use client";

import Footer from "../../Home/Footer";
import Navbar from "../../Home/Navbar";
import ContantJanuary from "../January/ContantJanuary";
import FiveStarPackages from "../January/FiveStar";
import HeroSection from "../January/HeroSection";
import Threeandfourstar from "../January/Threeandfourstar";

export default function CombineJuly() {
  return <div>
    <Navbar/>
    <HeroSection month="july"/>
    <ContantJanuary month="july"/>
    <Threeandfourstar month="july"/>
    <FiveStarPackages month="july"/>
    <Footer/>
    </div> ;
}
