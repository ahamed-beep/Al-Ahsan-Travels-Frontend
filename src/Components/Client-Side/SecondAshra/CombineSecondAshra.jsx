import Link from "next/link"
import Navbar from "../Home/Navbar"
import Footer from "../Home/Footer"
import SecondAshraHero from "./SecondAshraHero"
import RamadanSecondAshra from "./RamadanSecondAshra"
import SecondAshraPackage from "./SecondAshraPackage"
import SecondAshraIconBox from "./SecondAshraIconBox"
import SecondAshraCTA from "./SecondAshraCTA"
import TopBar from "../Home/Topbar"



const CombineSecondAshra = () => {
  return (
    <div>
      <TopBar/>
        <Navbar/>
        <SecondAshraHero/>
        <RamadanSecondAshra/>
        <SecondAshraPackage/>
        <SecondAshraIconBox/>
        <SecondAshraCTA/>
        <Footer/>
      
 
    </div>
  )
}

export default CombineSecondAshra
