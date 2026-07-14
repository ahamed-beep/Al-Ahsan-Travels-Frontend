import CombineCouple from "@/Components/Client-Side/CoupleUmrahPackage/CombineCouple";

export const metadata = {
  title: "Couple Umrah Packages | Al Ahsan Travels",
  description:
    "Book special Umrah packages designed for couples with Al Ahsan Travels. Comfortable flights, quality hotels near Haram, and complete visa assistance for a memorable spiritual journey together.",
  keywords: [
    "Couple Umrah packages",
    "Umrah packages for couples UK",
    "Al Ahsan Travels",
    "Umrah booking UK",
    "Umrah honeymoon package",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/couple-umrah",
  },
  openGraph: {
    title: "Couple Umrah Packages | Al Ahsan Travels",
    description:
      "Exclusive Umrah packages for couples — flights, hotels, and visa support all included. Travel together with comfort and peace of mind.",
    url: "https://alahsantravels.co.uk/couple-umrah",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Couple Umrah Packages | Al Ahsan Travels",
    description:
      "Book your Couple Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function CoupleUmrah() {
  return (
    <div>
      <CombineCouple />
    </div>
  );
}