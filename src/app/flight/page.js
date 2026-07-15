import FlightCombine from "@/Components/Flight/FlightCombine";

export const metadata = {
  title: "Cheap Umrah Flights UK | Flight Deals",
  description:
    "Compare and book affordable flights to Jeddah and Madinah from UK airports. Part of Al-Ahsan Travels' Umrah packages.",
  keywords: [
    "Cheap Umrah flights UK",
    "Flights to Jeddah",
    "Flights to Madinah",
    "Al Ahsan Travels flights",
    "Umrah flight deals",
    "UK to Saudi Arabia flights",
    "Hajj flight booking",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/flight",
  },
  openGraph: {
    title: "Cheap Umrah Flights UK | Flight Deals",
    description:
      "Compare and book affordable flights to Jeddah and Madinah from UK airports. Part of Al-Ahsan Travels' Umrah packages.",
    url: "https://alahsantravels.co.uk/flight",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap Umrah Flights UK | Flight Deals",
    description:
      "Compare and book affordable flights to Jeddah and Madinah from UK airports.",
  },
};

export default function FlightCombines() {
  return (
    <div>
      <FlightCombine />
    </div>
  );
}