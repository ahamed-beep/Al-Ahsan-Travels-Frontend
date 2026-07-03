import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import CoupleHero from './CoupleHero'
import WhyBookCoupleUmrah from './WhybookCoupleumrah'
import CoupleCards from './CoupleCards'
import WhyCouplesChooseUs from './Whycoupleschooseus'
import TopBar from '../Home/Topbar'


const CombineCouple = () => {
  return (
    <div>
      <TopBar/>
        <Navbar/>
        <CoupleHero/>
        <WhyBookCoupleUmrah/>
        <WhyCouplesChooseUs/>
        <CoupleCards/>
        <Footer/>
    </div>
  )
}

export default CombineCouple