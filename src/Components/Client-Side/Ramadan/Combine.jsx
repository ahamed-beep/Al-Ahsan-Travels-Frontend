import Link from "next/link"
import RamadanHajjSection from "./herosectionramadan"
import Navbar from "../Home/Navbar"
import Footer from "../Home/Footer"
import RamadanFirstAshra from "./RamadanFiestAshra"
import PackageCard from "./PackageCard"


const Combine = () => {
  return (
    <div>
        <Navbar/>
      <RamadanHajjSection/>
      <RamadanFirstAshra/>
      <PackageCard/>
 <Footer/>
    </div>
  )
}

export default Combine
