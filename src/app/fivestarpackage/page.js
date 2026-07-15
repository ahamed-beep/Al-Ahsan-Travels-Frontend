import CombineFiveStar from "@/Components/Client-Side/FiveStarPackage/CombineFiveStar";

export const metadata = {
  title: "5-Star Umrah Packages UK | Luxury Stays",
  description:
    "Premium 5-Star Umrah packages with luxury Haram-view hotels, private transport and VIP support from Al-Ahsan Travels.",
  keywords: [
    "5 star Umrah packages",
    "Luxury Umrah packages UK",
    "Al Ahsan Travels",
    "5 star hotel Umrah",
    "Premium Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/fivestarpackage",
  },
  openGraph: {
    title: "5-Star Umrah Packages UK | Luxury Stays",
    description:
      "Premium 5-Star Umrah packages with luxury Haram-view hotels, private transport and VIP support from Al-Ahsan Travels.",
    url: "https://alahsantravels.co.uk/fivestarpackage",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "5-Star Umrah Packages UK | Luxury Stays",
    description:
      "Premium 5-Star Umrah packages with luxury Haram-view hotels and private transport.",
  },
};

export default function FiveStarPackage() {
  return (
    <div>
      <CombineFiveStar />
    </div>
  );
}