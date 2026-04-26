"use client";

import Footer from "../../Home/Footer";
import Navbar from "../../Home/Navbar";
import ContantJanuary from "../January/ContantJanuary";
import FiveStarPackages from "../January/FiveStar";
import HeroSection from "../January/HeroSection";
import Threeandfourstar from "../January/Threeandfourstar";

export default function CombineDecember() {
  return <div>
    <Navbar/>
    <HeroSection month="December"/>
    <ContantJanuary month="December"/>
    <Threeandfourstar month="December"/>
    <FiveStarPackages month="December"/>
    <Footer/>
    </div> ;
}
