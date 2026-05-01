import React from 'react'
import Navbar from '../Home/Navbar'
import LondonHero from './LondonHero'
import LondonPackageCards from './LondonPackageCards'
import LondonPlanIcon from './LondonPlanIcon'
import BestTimeToBook from './BestTimeToBook'
import WhyChooseUs from './WhyChoosUs'
import FAQLondon from './FAQLondon'
import BookCTA from './BookCTA'
import Footer from '../Home/Footer'
import EverythingIncluded from './EveryThingIncluded'

const CombineLondonPackage = () => {
  return (
    <div>
        <Navbar/>
        <LondonHero/>
        <LondonPackageCards/>
        <LondonPlanIcon/>
        <EverythingIncluded/>
        <BestTimeToBook/>
        <WhyChooseUs/>
        <FAQLondon/>
        <BookCTA/>
        <Footer/>

    </div>
  )
}

export default CombineLondonPackage