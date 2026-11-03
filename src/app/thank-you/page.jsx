// app/thank-you/page.jsx

import Footer from "@/Components/Client-Side/Home/Footer";
import Navbar from "@/Components/Client-Side/Home/Navbar";
import ThankYou from "@/Components/Client-Side/ui/ThankYou";


export const metadata = {
  title: "Thank You – Al-Naan Travel",
  description:
    "We've received your inquiry. Our travel specialists will review your details and get in touch.",
  openGraph: {
    title: "Thank You – Al-Naan Travel",
    description:
      "We've received your inquiry. Our travel specialists will get in touch using the contact details you provided.",
    type: "website",
  },
  twitter: { card: "summary" },
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <ThankYou />
      <Footer />
    </div>
  );
}