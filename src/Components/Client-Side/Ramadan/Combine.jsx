import Link from "next/link"
import RamadanHajjSection from "./herosectionramadan"
import Navbar from "../Home/Navbar"
import Footer from "../Home/Footer"
import RamadanFirstAshra from "./RamadanFiestAshra"
import PackageCard from "./PackageCard"
import WhyChooseFirstAshra from "./IconBox"
import RamadanCTA from "./RamadanCTA"


const Combine = () => {
  return (
    <div>
        <Navbar/>
      <RamadanHajjSection/>
      <RamadanFirstAshra/>
      <PackageCard/>
      <WhyChooseFirstAshra/>
      <RamadanCTA/>
 <Footer/>
    </div>
  )
}

export default Combine
