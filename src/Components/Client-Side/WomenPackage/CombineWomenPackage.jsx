import React from 'react'
import Navbar from '../Home/Navbar'

import Footer from '../Home/Footer'
import PackageFeatures from './PackagesFeatures'
import PricingFeatures from './PricingFeatures'
import TopBar from '../Home/Topbar'
import WomenHero from './WomenHero'
import WomenPackageCards from './WomenPackageCards'
import WhyChooseUsWomen from './WhyChoosUsWomen'
import WomenPlanIcon from './WomenPlanIcon'
import FAQWomen from './FAQWomen'
import BookCTAWomen from './BookCTA'

const CombineWomenPackage = () => {
  return (
    <div>
      <TopBar/>
        <Navbar/>
        <WomenHero/>
        <WomenPackageCards/>
        <PackageFeatures/>
        <WhyChooseUsWomen/>
        <PricingFeatures/>
        <WomenPlanIcon/> 
        <FAQWomen/>
        <BookCTAWomen/>
        <Footer/>

    </div>
  )
}

export default CombineWomenPackage