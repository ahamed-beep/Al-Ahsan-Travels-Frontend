import React from 'react'
import Navbar from './Navbar'
import Herosection from './Herosection'
import FeaturedPackages from './FeaturedPackages'
import WhyTrustUs from './TrustUs'
import JourneySection from './YourJourney'
import Testimonials from './Testimonials'
import UmrahCTA from './UmrahCTA'
import Footer from './Footer'
import TopBar from './Topbar'
import Patnerspage from './Patnerspage'
import SingleVideoPage from './SingleVideoPage'


const Combine = () => {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <Herosection/>
      <SingleVideoPage/>
      <FeaturedPackages/>
      <WhyTrustUs/>
      <JourneySection/>
      <Testimonials/>
      <Patnerspage/>
      <UmrahCTA/>
      
      <Footer/>
    </div>
  )
}

export default Combine
