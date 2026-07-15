import CombineLondonPackage from "@/Components/Client-Side/London Package/CombineLondonPackage";

export const metadata = {
  title: "Umrah Packages from London | UK Departures",
  description:
    "Umrah packages with direct departures from London airports. Flights, visa and hotel packages for London pilgrims.",
  keywords: [
    "Umrah packages from London",
    "London Umrah departures",
    "UK Umrah packages",
    "Al Ahsan Travels",
    "London airport Umrah flights",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/londonumrahpackage",
  },
  openGraph: {
    title: "Umrah Packages from London | UK Departures",
    description:
      "Umrah packages with direct departures from London airports. Flights, visa and hotel packages for London pilgrims.",
    url: "https://alahsantravels.co.uk/londonumrahpackage",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umrah Packages from London | UK Departures",
    description:
      "Direct departures from London airports for your Umrah journey.",
  },
};

export default function LondonUmrahPackage() {
  return (
    <div>
      <CombineLondonPackage />
    </div>
  );
}