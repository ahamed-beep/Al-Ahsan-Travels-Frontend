import CombineFiveStar from "@/Components/Client-Side/FiveStarPackage/CombineFiveStar";

export const metadata = {
  title: "5 Star Umrah Packages | Al Ahsan Travels",
  description:
    "Book luxury 5 star Umrah packages with Al Ahsan Travels. Enjoy premium flights, top-rated 5 star hotels near Haram, and complete visa assistance for the ultimate comfortable spiritual journey.",
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
    canonical: "https://alahsantravels.co.uk/five-star-package",
  },
  openGraph: {
    title: "5 Star Umrah Packages | Al Ahsan Travels",
    description:
      "Experience luxury with our 5 star Umrah packages — premium flights, top-rated hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/five-star-package",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Star Umrah Packages | Al Ahsan Travels",
    description:
      "Book your luxury 5 Star Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function FiveStarPackage() {
  return (
    <div>
      <CombineFiveStar />
    </div>
  );
}