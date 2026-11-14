import Footer from "@/Components/Client-Side/Home/Footer";
import Navbar from "@/Components/Client-Side/Home/Navbar";
import TopBar from "@/Components/Client-Side/Home/Topbar";
import CtaSection from "@/Components/privacy/CtaSection";
import HeroSection from "@/Components/privacy/HeroSection";
import PolicyContent from "@/Components/privacy/PolicyContent";

export const metadata = {
  title: "Privacy Policy | Easton",
  description:
    "Read Easton's privacy policy and learn how website information is handled.",
  openGraph: {
    title: "Privacy Policy | Easton",
    description:
      "Read Easton's privacy policy and learn how website information is handled.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="top" className="min-h-screen bg-white font-sans ">
      <TopBar/>
      <Navbar/>
      <HeroSection />
      <PolicyContent />
      <CtaSection />
      <Footer/>
    </main>
  );
}