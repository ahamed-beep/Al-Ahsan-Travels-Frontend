import Link from "next/link";
import Navbar from "../Home/Navbar";

import Footer from "../Home/Footer";
import AboutHero from "./AboutHero";
import StatsSection from "./StatsSection";
import MissionSection from "./MissionSection";
import MakeUsDifferent from "./MakeUsDifferent";
import OurServices from "./OurServices";
import CertifiedTrusted from "./CertifiedTrusted";
import WhyChooseUs from "./WhyChooseUs";
import PlanUmrahCTA from "./PlanUmrahCTA";
import TopBar from "../Home/Topbar";




const CombineAboutUs = () => {
  return (
    <div>
      <TopBar/>
      <Navbar/>
    <AboutHero/>
    <StatsSection/>
    <MissionSection/>
    <MakeUsDifferent/>
    <OurServices/>
    <CertifiedTrusted/>
    <WhyChooseUs/>
    <PlanUmrahCTA/>
      <Footer/>
      
    </div>
  )
}

export default CombineAboutUs
