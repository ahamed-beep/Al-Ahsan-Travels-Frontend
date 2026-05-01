import React from 'react'
import FiveStarHero from './FiveStarHero'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import PricingCards from './PricingCards'
import WhatsIncludedSection from './Whatsincludedsection'
import ReadyToBegin from './Readytobegin'

const CombineFiveStar = () => {
  return (
    <div>
        <Navbar/>
        <FiveStarHero/>
        <PricingCards/>
        <WhatsIncludedSection/>
        <ReadyToBegin/>
        <Footer/>
    </div>
  )
}

export default CombineFiveStar