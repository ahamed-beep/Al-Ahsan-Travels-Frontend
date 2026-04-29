import React from 'react'
import ThreeStartHero from './ThreeStarHero'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import PricingCards from './PricingCards'

const CombineThreeStar = () => {
  return (
    <div>
        <Navbar/>
        <ThreeStartHero/>
        <PricingCards/>
        <Footer/>
    </div>
  )
}

export default CombineThreeStar