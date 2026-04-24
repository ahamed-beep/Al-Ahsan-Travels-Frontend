import Link from "next/link";
import Navbar from "../Home/Navbar";

import Footer from "../Home/Footer";
import HeroSpecialPackage from "./HeroSpecialPackage";
import ChooseYourPackage from "./ChooseYourPackage";



const CombineSpecialPackage = () => {
  return (
    <div>
      <Navbar/>
   <HeroSpecialPackage/>
   <ChooseYourPackage/>
      <Footer/>
      
    </div>
  )
}

export default CombineSpecialPackage
