"use client";  

import React from 'react'
import Navbar from '../../Home/Navbar'
import Footer from '../../Home/Footer'
import ContantJanuary from './ContantJanuary'
import Threeandfourstar from './Threeandfourstar'
import FiveStarPackages from './FiveStar'
import HeroSection from './HeroSection'
import QuickComparisonGuide from './QuickComparisonGuide';
import TopBar from '../../Home/Topbar';

const CombineJanuary = () => {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <HeroSection month='january'/>
      <ContantJanuary month='january'/>
      <Threeandfourstar month='january'/>
      <FiveStarPackages month='january'/>
      <QuickComparisonGuide month='january'/>
      <Footer/>
    </div>
  )
}

export default CombineJanuary