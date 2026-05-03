import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import ClockTowerHero from './ClockTowerHero'
import WhyBookTowerUmrah from './Whybooktowerumrah'
import ClockTowerCards from './ClockTowerCards'

const CombineClockTower = () => {
  return (
    <div>
        <Navbar/>
        <ClockTowerHero/>
        <WhyBookTowerUmrah/>
        <ClockTowerCards/>
        <Footer/>
    </div>
  )
}

export default CombineClockTower