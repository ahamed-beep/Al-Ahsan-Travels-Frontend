import CombineManchesterPackage from "@/Components/Client-Side/ManchesterPackage/CombineManchesterPackage";

export const metadata = {
  title: "Umrah Packages from Manchester | UK Departures",
  description:
    "Book Umrah packages departing from Manchester Airport. Complete flights, visa and hotel packages included.",
  keywords: [
    "Umrah packages from Manchester",
    "Manchester Airport Umrah",
    "UK Umrah packages",
    "Al Ahsan Travels",
    "Manchester Umrah departures",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/manchesterumrahpackage",
  },
  openGraph: {
    title: "Umrah Packages from Manchester | UK Departures",
    description:
      "Book Umrah packages departing from Manchester Airport. Complete flights, visa and hotel packages included.",
    url: "https://alahsantravels.co.uk/manchesterumrahpackage",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umrah Packages from Manchester | UK Departures",
    description:
      "Direct departures from Manchester Airport for your Umrah journey.",
  },
};

export default function ManchesterUmrahPackage() {
  return (
    <div>
      <CombineManchesterPackage />
    </div>
  );
}