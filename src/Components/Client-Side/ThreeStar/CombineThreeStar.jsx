import React from 'react'
import ThreeStartHero from './ThreeStarHero'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import PricingCards from './PricingCards'
import WhatsIncludedSection from './Whatsincludedsection'
import ReadyToBegin from './Readytobegin'
import TopBar from '../Home/Topbar'

const CombineThreeStar = () => {
  return (
    <div>
      <TopBar/>
        <Navbar/>
        <ThreeStartHero/>
  <PricingCards category="THREE_STAR" />
        <WhatsIncludedSection/>
        <ReadyToBegin/>
        <Footer/>
    </div>
  )
}

export default CombineThreeStar