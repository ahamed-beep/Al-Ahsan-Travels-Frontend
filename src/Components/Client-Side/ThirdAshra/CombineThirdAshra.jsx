import Link from "next/link"
import Navbar from "../Home/Navbar"
import Footer from "../Home/Footer"
import ThirdAshraCTA from "./ThirdAshraCTA"
import ThirdAshraIconBox from "./ThirdAshraIconBox"
import ThirdAshraPackage from "./ThirdAshraPackage"
import RamadanThirdAshra from "./RamadanThirdAshra"
import ThirdAshraHero from "./ThirdAshraHero"
import TopBar from "../Home/Topbar"




const CombineThirdAshra = () => {
  return (
    <div>
      <TopBar/>
        <Navbar/>
        <ThirdAshraHero/>
        <RamadanThirdAshra/>
        <ThirdAshraPackage/>
        <ThirdAshraIconBox/>
        <ThirdAshraCTA/>
        <Footer/>
      
 
    </div>
  )
}

export default CombineThirdAshra
