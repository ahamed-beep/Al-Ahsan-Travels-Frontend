"use client";  // ← yeh add karo

import React from 'react'
import Navbar from '../../Home/Navbar'
import Footer from '../../Home/Footer'
import ContantJanuary from './ContantJanuary'
import Threeandfourstar from './Threeandfourstar'
import FiveStarPackages from './FiveStar'
import HeroSection from './HeroSection'

const CombineJanuary = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection month='january'/>
      <ContantJanuary month='january'/>
      <Threeandfourstar month='january'/>
      <FiveStarPackages month='january'/>
      <Footer/>
    </div>
  )
}

export default CombineJanuary