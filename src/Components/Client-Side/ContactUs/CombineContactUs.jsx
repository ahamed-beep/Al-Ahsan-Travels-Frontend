import Link from "next/link";
import Navbar from "../Home/Navbar";

import Footer from "../Home/Footer";
import HeroContactUs from "./HeroContactUs";
import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";
import VisitOffices from "./VisitOffices";
import BookWithConfidence from "./BookWithConfidence";
import UmrahContactCTA from "./UmrahContactATC";




const CombineContactUs = () => {
  return (
    <div>
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
