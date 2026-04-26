import Link from "next/link";
import Navbar from "../Home/Navbar";

import Footer from "../Home/Footer";
import HeroSpecialPackage from "./HeroGroupPackage";
import PackageIncludes from "./PackageIncludes";
import FAQSection from "./FAQSection";
import UmrahCTA from "./Umrahcta ";
import GroupPackages from "./ChooseYourPackage";
import GroupNeeds from "./GroupNeeds";
import WhyGroup from "./WhyGroup";



const CombineGroupPackage = () => {
  return (
    <div>
      <Navbar/>
   <HeroSpecialPackage/>
   <GroupPackages/>
   <GroupNeeds/>
   <WhyGroup/>
   <PackageIncludes/>
   <FAQSection  />
   <UmrahCTA/>
      <Footer/>
      
    </div>
  )
}

export default CombineGroupPackage
