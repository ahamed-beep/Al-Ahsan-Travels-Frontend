import Link from "next/link"
import Navbar from "../Home/Navbar"
import Footer from "../Home/Footer"
import SecondAshraHero from "./SecondAshraHero"
import RamadanSecondAshra from "./RamadanSecondAshra"
import SecondAshraPackage from "./SecondAshraPackage"
import SecondAshraIconBox from "./SecondAshraIconBox"
import SecondAshraCTA from "./SecondAshraCTA"



const CombineSecondAshra = () => {
  return (
    <div>
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
