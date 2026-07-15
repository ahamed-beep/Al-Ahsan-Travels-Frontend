import CombineFourStar from "@/Components/FourStar/CombineFourStar";

export const metadata = {
  title: "4-Star Umrah Packages UK | Comfort & Value",
  description:
    "4-Star Umrah packages offering balanced comfort and proximity to the holy sites. Flights, visa and quality hotels included.",
  keywords: [
    "4 star Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "4 star hotel Umrah",
    "Affordable Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/fourstarpackage",
  },
  openGraph: {
    title: "4-Star Umrah Packages UK | Comfort & Value",
    description:
      "4-Star Umrah packages offering balanced comfort and proximity to the holy sites. Flights, visa and quality hotels included.",
    url: "https://alahsantravels.co.uk/fourstarpackage",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "4-Star Umrah Packages UK | Comfort & Value",
    description:
      "4-Star Umrah packages offering balanced comfort and proximity to the holy sites.",
  },
};

export default function FourStarPackage() {
  return (
    <div>
      <CombineFourStar />
    </div>
  );
}