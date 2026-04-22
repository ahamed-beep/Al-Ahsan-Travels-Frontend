import React from 'react'
import Navbar from './Navbar'
import Herosection from './Herosection'
import FeaturedPackages from './FeaturedPackages'
import WhyTrustUs from './TrustUs'
import JourneySection from './YourJourney'
import Testimonials from './Testimonials'
import UmrahCTA from './UmrahCTA'
import Footer from './Footer'

const Combine = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <FeaturedPackages/>
      <WhyTrustUs/>
      <JourneySection/>
      <Testimonials/>
      <UmrahCTA/>
      <Footer/>
    </div>
  )
}

export default Combine
