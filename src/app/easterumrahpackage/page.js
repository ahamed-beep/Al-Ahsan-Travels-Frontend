import CombineEaster from "@/Components/Client-Side/Easter package/CombineEaster";

export const metadata = {
  title: "Easter Umrah Packages | Al Ahsan Travels",
  description:
    "Book special Easter Umrah packages with Al Ahsan Travels. Enjoy comfortable flights, quality hotels near Haram, and complete visa assistance for your spring spiritual journey.",
  keywords: [
    "Easter Umrah packages",
    "Easter Umrah deals UK",
    "Al Ahsan Travels",
    "Umrah packages UK",
    "Easter Umrah booking",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/easter-umrah-package",
  },
  openGraph: {
    title: "Easter Umrah Packages | Al Ahsan Travels",
    description:
      "Exclusive Easter Umrah packages — flights, hotels, and visa support all included. Book your Easter spiritual journey today.",
    url: "https://alahsantravels.co.uk/easter-umrah-package",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easter Umrah Packages | Al Ahsan Travels",
    description:
      "Book your Easter Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function EasterUmrahPackage() {
  return (
    <div>
      <CombineEaster />
    </div>
  );
}