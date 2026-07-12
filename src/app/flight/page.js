import FlightCombine from "@/Components/Flight/FlightCombine";

export const metadata = {
  title: "Flight Booking | Al Ahsan Travels",
  description:
    "Book affordable flights for Umrah, Hajj, and holiday travel with Al Ahsan Travels. Compare deals, find the best routes, and travel with comfort and reliability.",
  keywords: [
    "Flight booking UK",
    "Cheap flights Umrah",
    "Al Ahsan Travels flights",
    "Hajj flight booking",
    "Umrah flight deals",
    "International flight booking UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/flights",
  },
  openGraph: {
    title: "Flight Booking | Al Ahsan Travels",
    description:
      "Find and book the best flight deals for your Umrah, Hajj, or holiday trip with Al Ahsan Travels.",
    url: "https://alahsantravels.co.uk/flights",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flight Booking | Al Ahsan Travels",
    description:
      "Book affordable flights with Al Ahsan Travels for your next journey.",
  },
};

export default function FlightCombines() {
  return (
    <div>
      <FlightCombine />
    </div>
  );
}