import React from 'react'
import UmrahJanuray from './HeroSection'
import Navbar from '../../Home/Navbar'
import Footer from '../../Home/Footer'
import ContantJanuary from './ContantJanuary'
import Threeandfourstar from './Threeandfourstar'
import FiveStar from '../FiveStar'

const CombineJanuary = () => {
  return (
    <div>
        <Navbar/>
      <UmrahJanuray/>
      <ContantJanuary/>
      <Threeandfourstar/>
      <FiveStar/>
<Footer/>
    </div>
  )
}

export default CombineJanuary
