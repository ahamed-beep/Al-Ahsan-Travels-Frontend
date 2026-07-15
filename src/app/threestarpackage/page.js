import CombineThreeStar from "@/Components/Client-Side/ThreeStar/CombineThreeStar";

export const metadata = {
  title: "3-Star Umrah Packages UK | Budget Friendly",
  description:
    "Affordable 3-Star Umrah packages with flights, visa and comfortable hotels near the Haram. Best value packages for UK pilgrims.",
  keywords: [
    "3 star Umrah packages",
    "Affordable Umrah packages UK",
    "Al Ahsan Travels",
    "3 star hotel Umrah",
    "Cheap Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/threestarpackage",
  },
  openGraph: {
    title: "3-Star Umrah Packages UK | Budget Friendly",
    description:
      "Affordable 3-Star Umrah packages with flights, visa and comfortable hotels near the Haram. Best value packages for UK pilgrims.",
    url: "https://alahsantravels.co.uk/threestarpackage",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3-Star Umrah Packages UK | Budget Friendly",
    description:
      "Affordable 3-Star Umrah packages with flights, visa and comfortable hotels near the Haram.",
  },
};

export default function ThreeStarPackage() {
  return (
    <div>
      <CombineThreeStar />
    </div>
  );
}