import React from 'react'
import Navbar from '../Home/Navbar'

import Footer from '../Home/Footer'
import ManchesterHero from './ManchesterHero'
import ManchesterPackageCards from './ManchesterPackageCards'
import WhyChooseUsManchester from './WhyChoosUsManchester'
import ManchesterPlanIcon from './ManchesterPlanIcon'
import FAQManchester from './FAQManchester'
import BookCTAManchester from './BookCTA'
import PackageFeatures from './PackagesFeatures'
import PricingFeatures from './PricingFeatures'
import TopBar from '../Home/Topbar'

const CombineManchesterPackage = () => {
  return (
    <div>
      <TopBar/>
        <Navbar/>
        <ManchesterHero/>
        <ManchesterPackageCards/>
        <PackageFeatures/>
        <WhyChooseUsManchester/>
        <PricingFeatures/>
        <ManchesterPlanIcon/> 
        <FAQManchester/>
        <BookCTAManchester/>
        <Footer/>

    </div>
  )
}

export default CombineManchesterPackage