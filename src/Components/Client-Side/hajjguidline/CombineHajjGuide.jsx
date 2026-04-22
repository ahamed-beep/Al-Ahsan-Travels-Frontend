"use client";

import Link from 'next/link'
import HeroHajjGuide from './HeroHajjGuide'
import HajjGuide from './HajjGuide'
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

const combinehajjguide = () => {
  return (
    <div>
        <Navbar/>
        <HeroHajjGuide/>
        <HajjGuide/>
        <Footer/>
    </div>
  )
}

export default combinehajjguide