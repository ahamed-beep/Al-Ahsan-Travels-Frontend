import Link from "next/link";
import Navbar from "../Home/Navbar";

import Footer from "../Home/Footer";
import HeroSpecialPackage from "./HeroSpecialPackage";
import FamilyPackages from "./ChooseYourPackage";
import FamilyNeeds from "./FamilyNeeds";
import WhyFamilies from "./WhyFamilies";
import PackageIncludes from "./PackageIncludes";
import FAQSection from "./FAQSection";
import UmrahCTA from "./Umrahcta ";
import TopBar from "../Home/Topbar";



const CombineSpecialPackage = () => {
  return (
    <div>
      <TopBar/>
      <Navbar/>
   <HeroSpecialPackage/>
   <FamilyPackages/>
   <FamilyNeeds/>
   <WhyFamilies/>
   <PackageIncludes/>
   <FAQSection  />
   <UmrahCTA/>
      <Footer/>
      
    </div>
  )
}

export default CombineSpecialPackage
