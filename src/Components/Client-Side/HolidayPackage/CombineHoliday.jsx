import React from 'react'
import Navbar from '../Home/Navbar'
import HolidayHero from './HolidayHero'
import Footer from '../Home/Footer'
import WhyBookChristmasUmrah from './Whybookchristmasumrah'
import HolidayCards from './HolidayCards'
import TopBar from '../Home/Topbar'

const CombineHoliday = () => {
  return (
    <div>
      <TopBar/>
        <Navbar/>
        <HolidayHero/>
        <WhyBookChristmasUmrah/>
        <HolidayCards/>
        <Footer/>
    </div>
  )
}

export default CombineHoliday