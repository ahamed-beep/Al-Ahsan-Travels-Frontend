import React from 'react'
import Navbar from '../Home/Navbar'
import EasterHero from './EasterHero'
import EasterCards from './EasterCards'
import WhatsIncluded from './WhatsIncluded'
import WhyTravelEaster from './WhyTravelEaster'
import Footer from '../Home/Footer'
import BookCTA from './BookCTA'

const CombineEaster = () => {
  return (
    <div>
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

export default CombineEaster