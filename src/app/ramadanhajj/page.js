import Combine from "@/Components/Client-Side/Ramadan/Combine";

export const metadata = {
  title: "Ramadan Umrah Packages | Al Ahsan Travels",
  description:
    "Book special Ramadan Umrah packages with Al Ahsan Travels. Experience the blessings of Ramadan in Makkah and Madinah with comfortable flights, quality hotels, and complete visa assistance.",
  keywords: [
    "Ramadan Umrah packages",
    "Umrah in Ramadan",
    "Al Ahsan Travels",
    "Ramadan Umrah UK",
    "Umrah packages UK",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/ramadan",
  },
  openGraph: {
    title: "Ramadan Umrah Packages | Al Ahsan Travels",
    description:
      "Experience the blessings of Ramadan in Makkah and Madinah with our exclusive Umrah packages — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/ramadan",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramadan Umrah Packages | Al Ahsan Travels",
    description:
      "Book your Ramadan Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function ramadanhajj() {
  return (
    <div>
      <Combine />
    </div>
  );
}