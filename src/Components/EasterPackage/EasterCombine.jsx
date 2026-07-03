import Link from "next/link"

import EasterHero from "./EasterHero"
import Navbar from "../Client-Side/Home/Navbar"
import Footer from "../Client-Side/Home/Footer"
import EasterCards from "./EasterCards"
import WhatsIncluded from "./WhatsIncluded"
import WhyTravelEaster from "./WhyTravelEaster"
import BookCTA from "./BookCTA"
import TopBar from "../Client-Side/Home/Topbar"





const EasterCombine = () => {
  return (
    <div>
      <TopBar/>
        <Navbar/>
       <EasterHero/>
       <EasterCards/>
       <WhatsIncluded/>
       <WhyTravelEaster/>
       <BookCTA/>
       <Footer/>
        
      
 
    </div>
  )
}

export default EasterCombine
