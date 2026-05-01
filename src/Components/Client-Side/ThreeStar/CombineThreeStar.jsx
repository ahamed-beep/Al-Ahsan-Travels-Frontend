import React from 'react'
import ThreeStartHero from './ThreeStarHero'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import PricingCards from './PricingCards'
import WhatsIncludedSection from './Whatsincludedsection'
import ReadyToBegin from './Readytobegin'

const CombineThreeStar = () => {
  return (
    <div>
        <Navbar/>
        <ThreeStartHero/>
        <PricingCards/>
        <WhatsIncludedSection/>
        <ReadyToBegin/>
        <Footer/>
    </div>
  )
}

export default CombineThreeStar