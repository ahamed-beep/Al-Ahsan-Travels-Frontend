import Link from "next/link";
import NonShiftingHajjSection from "./NonShiftingHajjSection";
import Navbar from "../Home/Navbar";
import NonQuickComparison from "./NonQuickCompasison";
import NonShiftingPackages from "./NonShiftingPackages";
import NonShiftingHajjInfo from "./NonShiftingInfoHajj";
import NonHajjBanner from "./NonHajjBanner";
import Footer from "../Home/Footer";
import TopBar from "../Home/Topbar";




const NonShiftingCombine = () => {
  return (
    <div>
      <TopBar/>
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
