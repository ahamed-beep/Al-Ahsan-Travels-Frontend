import CombineAboutUs from "@/Components/Client-Side/AboutUs/CombineAboutUs";

export const metadata = {
  title: "About Us | Al-Ahsan Travels Birmingham",
  description:
    "Learn about Al-Ahsan Travels — ATOL & IATA certified Hajj and Umrah specialists based in Birmingham, serving pilgrims across the UK since 2016.",
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
    canonical: "https://alahsantravels.co.uk/aboutus",
  },
  openGraph: {
    title: "About Us | Al-Ahsan Travels Birmingham",
    description:
      "Learn about Al-Ahsan Travels — ATOL & IATA certified Hajj and Umrah specialists based in Birmingham, serving pilgrims across the UK since 2016.",
    url: "https://alahsantravels.co.uk/aboutus",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Al-Ahsan Travels Birmingham",
    description:
      "Learn about Al-Ahsan Travels — ATOL & IATA certified Hajj and Umrah specialists based in Birmingham, serving pilgrims across the UK since 2016.",
  },
};

export default function AboutUs() {
  return (
    <div>
      <CombineAboutUs />
    </div>
  );
}