import React from 'react'
import FiveStarHero from './FiveStarHero'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import PricingCards from './PricingCards'
import WhatsIncludedSection from './Whatsincludedsection'
import ReadyToBegin from './Readytobegin'
import TopBar from '../Home/Topbar'

const CombineFiveStar = () => {
  return (
    <div>
      <TopBar/>
        <Navbar/>
        <FiveStarHero/>
  <PricingCards category="FIVE_STAR" />
        <WhatsIncludedSection/>
        <ReadyToBegin/>
        <Footer/>
    </div>
  )
}

export default CombineFiveStar