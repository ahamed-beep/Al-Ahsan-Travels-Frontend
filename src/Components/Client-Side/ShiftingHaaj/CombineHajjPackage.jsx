import Link from "next/link";
import Navbar from "../Home/Navbar";
import ShiftingHajjSection from "./ShiftingHajjSection";
import QuickComparison from "./QuickComparison";
import Packages from "./Packages";
import HajjInfo from "./HajjInfo";
import HajjBanner from "./HajjBanner";
import Footer from "../Home/Footer";



const CombineShiftingHajj = () => {
  return (
    <div>
      <Navbar/>
      <ShiftingHajjSection/>
      <QuickComparison/>
      <Packages/>
      <HajjInfo/>
      <HajjBanner/>
      <Footer/>
      
    </div>
  )
}

export default CombineShiftingHajj
