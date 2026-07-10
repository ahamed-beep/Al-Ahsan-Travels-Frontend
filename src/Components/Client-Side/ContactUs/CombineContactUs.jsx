import Link from "next/link";
import Navbar from "../Home/Navbar";

import Footer from "../Home/Footer";
import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";
import VisitOffices from "./VisitOffices";
import BookWithConfidence from "./BookWithConfidence";
import UmrahContactCTA from "./UmrahContactATC";
import TopBar from "../Home/Topbar";
import HeroContactUs from "./HeroContactUs";




const CombineContactUs = () => {
  return (
    <div>
      <TopBar/>
      <Navbar/>
    <HeroContactUs/>
    <ContactCards/>
    <ContactForm/>
    <VisitOffices/>
    <BookWithConfidence/>
    <UmrahContactCTA/>
      <Footer/>
      
    </div>
  )
}

export default CombineContactUs
