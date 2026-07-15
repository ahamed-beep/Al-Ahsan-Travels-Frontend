import CombineClockTower from "@/Components/Client-Side/ClockTowerPackage/CombineClock";

export const metadata = {
  title: "Clock Tower Umrah Package | Makkah Hotels",
  description:
    "Stay at the iconic Makkah Clock Tower with our premium Umrah package — closest possible access to Masjid al-Haram.",
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
    canonical: "https://alahsantravels.co.uk/clocktowerumrahpackage",
  },
  openGraph: {
    title: "Clock Tower Umrah Package | Makkah Hotels",
    description:
      "Stay at the iconic Makkah Clock Tower with our premium Umrah package — closest possible access to Masjid al-Haram.",
    url: "https://alahsantravels.co.uk/clocktowerumrahpackage",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clock Tower Umrah Package | Makkah Hotels",
    description:
      "Stay at the iconic Makkah Clock Tower — closest possible access to Masjid al-Haram.",
  },
};

export default function ClockTowerUmrah() {
  return (
    <div>
      <CombineClockTower />
    </div>
  );
}