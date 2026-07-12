import CombineFourStar from "@/Components/FourStar/CombineFourStar";

export const metadata = {
  title: "4 Star Umrah Packages | Al Ahsan Travels",
  description:
    "Book comfortable 4 star Umrah packages with Al Ahsan Travels. Enjoy quality flights, well-rated 4 star hotels near Haram, and complete visa assistance for a smooth spiritual journey.",
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
    canonical: "https://alahsantravels.co.uk/four-star-package",
  },
  openGraph: {
    title: "4 Star Umrah Packages | Al Ahsan Travels",
    description:
      "Comfortable 4 star Umrah packages — quality flights, well-rated hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/four-star-package",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "4 Star Umrah Packages | Al Ahsan Travels",
    description:
      "Book your 4 Star Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function FourStarPackage() {
  return (
    <div>
      <CombineFourStar />
    </div>
  );
}