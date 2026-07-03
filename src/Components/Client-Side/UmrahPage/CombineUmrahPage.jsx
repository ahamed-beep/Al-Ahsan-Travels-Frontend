import React from 'react'
import Navbar from '../Home/Navbar'
import UmrahPageHeroSection from './UmrahPageHeroSection'
import Footer from '../Home/Footer'
import ThreeStarPackages from './ThreeStarPackage'
import FourStar from './FourStar'
import FiveStar from './FiveStar'
import CostumSpecial from './CostumSpecial'
import WhatIncluded from './WhatIncluded'
import PackageCTA from './PackageCTA'
import TopBar from '../Home/Topbar'

const CombineUmrahPage = () => {
  return (
    <div>
      <TopBar/>
        <Navbar/>
        <UmrahPageHeroSection/>
        <ThreeStarPackages/>
        <FourStar/>
        <FiveStar/>
        <CostumSpecial/>
        <WhatIncluded/>
        <PackageCTA/>
        <Footer/>
    </div>
  )
}

export default CombineUmrahPage