import React from 'react'
import FourStarHero from './FourStarHero'
import Navbar from '../Client-Side/Home/Navbar'
import Footer from '../Client-Side/Home/Footer'
import PricingCards from './PricingCards'
import WhatsIncludedSection from './Whatsincludedsection'
import ReadyToBegin from './Readytobegin'

const CombineFourStar = () => {
  return (
    <div>
        <Navbar/>
        <FourStarHero/>
        <PricingCards category="FOUR_STAR" />
        <WhatsIncludedSection/>
        <ReadyToBegin/>   
        <Footer/>
    </div>
  )
}

export default CombineFourStar