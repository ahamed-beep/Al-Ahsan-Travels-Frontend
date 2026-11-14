import BlogHero from "@/Components/Client-Side/Blog/BlogHero";
import BlogPageContent from "@/Components/Client-Side/Blog/BlogPageContent";
import Navbar from "@/Components/Client-Side/Home/Navbar";
import Footer from "@/Components/Client-Side/Home/Footer";
import CtaBanner from "@/Components/Client-Side/Blog/CtaBanner";
import TopBar from "@/Components/Client-Side/Home/Topbar";

export const metadata = {
  title: "Travel Blog — Your next journey starts here",
  description:
    "Inspiring destinations, trusted travel advice and thoughtful guides for every step of your journey.",
  openGraph: {
    title: "Travel Blog — Your next journey starts here",
    description:
      "Inspiring destinations, trusted travel advice and thoughtful guides for every step of your journey.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function BlogPage() {
  return (
    <div className="">
      <TopBar/>
      <Navbar />
      <BlogHero />

      <BlogPageContent />
      <CtaBanner/>
      <Footer/>
    </div>
  );
}