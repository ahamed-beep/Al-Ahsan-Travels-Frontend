import CombineThreeStar from "@/Components/Client-Side/ThreeStar/CombineThreeStar";

export const metadata = {
  title: "3 Star Umrah Packages | Al Ahsan Travels",
  description:
    "Book budget-friendly 3 star Umrah packages with Al Ahsan Travels. Enjoy comfortable flights, quality 3 star hotels near Haram, and complete visa assistance for an affordable spiritual journey.",
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
    canonical: "https://alahsantravels.co.uk/three-star-package",
  },
  openGraph: {
    title: "3 Star Umrah Packages | Al Ahsan Travels",
    description:
      "Affordable 3 star Umrah packages — quality flights, comfortable hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/three-star-package",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Star Umrah Packages | Al Ahsan Travels",
    description:
      "Book your 3 Star Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function ThreeStarPackage() {
  return (
    <div>
      <CombineThreeStar />
    </div>
  );
}