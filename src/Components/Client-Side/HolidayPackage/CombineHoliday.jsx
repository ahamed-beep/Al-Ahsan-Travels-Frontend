import React from 'react'
import Navbar from '../Home/Navbar'
import HolidayHero from './HolidayHero'
import Footer from '../Home/Footer'
import WhyBookChristmasUmrah from './Whybookchristmasumrah'
import HolidayCards from './HolidayCards'

const CombineHoliday = () => {
  return (
    <div>
        <Navbar/>
        <HolidayHero/>
        <WhyBookChristmasUmrah/>
        <HolidayCards/>
        <Footer/>
    </div>
  )
}

export default CombineHoliday