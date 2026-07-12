import CombineClockTower from "@/Components/Client-Side/ClockTowerPackage/CombineClock";

export const metadata = {
  title: "Clock Tower Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages with stay at the iconic Makkah Clock Tower hotels. Enjoy prime location near Haram, luxury accommodation, flights, and visa assistance with Al Ahsan Travels.",
  keywords: [
    "Clock Tower Umrah packages",
    "Makkah Clock Tower hotel",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Clock Tower Makkah booking",
    "Umrah near Haram",
    "Hajj and Umrah packages",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/clock-tower-umrah",
  },
  openGraph: {
    title: "Clock Tower Umrah Packages | Al Ahsan Travels",
    description:
      "Stay at the world-famous Makkah Clock Tower with our exclusive Umrah packages. Flights, luxury hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/clock-tower-umrah",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clock Tower Umrah Packages | Al Ahsan Travels",
    description:
      "Experience Umrah with a stay at the iconic Clock Tower Makkah. Book now with Al Ahsan Travels.",
  },
};

export default function ClockTowerUmrah() {
  return (
    <div>
      <CombineClockTower />
    </div>
  );
}