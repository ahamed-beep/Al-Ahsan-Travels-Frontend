import CombineAboutUs from "@/Components/Client-Side/AboutUs/CombineAboutUs";

export const metadata = {
  title: "About Us | Al Ahsan Travels",
  description:
    "Learn more about Al Ahsan Travels — our mission, vision, and the dedicated team behind our trusted Umrah, Hajj, and holiday travel services.",
  keywords: [
    "About Al Ahsan Travels",
    "Al Ahsan Travels team",
    "Umrah travel agency UK",
    "Hajj and Umrah company",
    "Our mission",
    "Travel agency about us",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/about-us",
  },
  openGraph: {
    title: "About Us | Al Ahsan Travels",
    description:
      "Learn more about Al Ahsan Travels — our mission, vision, and the dedicated team behind our trusted Umrah, Hajj, and holiday travel services.",
    url: "https://alahsantravels.co.uk/about-us",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Al Ahsan Travels",
    description:
      "Learn more about Al Ahsan Travels — our mission, vision, and the dedicated team behind our trusted travel services.",
  },
};

export default function AboutUs() {
  return (
    <div>
      <CombineAboutUs />
    </div>
  );
}