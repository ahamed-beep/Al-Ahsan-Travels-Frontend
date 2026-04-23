import Link from "next/link";
import NonShiftingHajjSection from "./NonShiftingHajjSection";
import Navbar from "../Home/Navbar";
import NonQuickComparison from "./NonQuickCompasison";
import NonShiftingPackages from "./NonShiftingPackages";
import NonShiftingHajjInfo from "./NonShiftingInfoHajj";
import NonHajjBanner from "./NonHajjBanner";
import Footer from "../Home/Footer";




const NonShiftingCombine = () => {
  return (
    <div>
      <Navbar/>
        <NonShiftingHajjSection/>
        <NonQuickComparison/>
        <NonShiftingPackages/>
        <NonShiftingHajjInfo/>
        <NonHajjBanner/>
        <Footer/>
    
      
    </div>
  )
}

export default NonShiftingCombine
