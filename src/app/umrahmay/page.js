import CombineMay from "@/Components/Client-Side/Umrah Packages Month wise/May/CombineMayl";

export const metadata = {
  title: "May Umrah Packages 2027 | UK Deals",
  description:
    "Book May Umrah packages from the UK before the Ramadan rush. Flights, visa and hotels included. Free quote in 24 hours.",
  keywords: [
    "May Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking May",
    "Pre-Ramadan Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrahmay",
  },
  openGraph: {
    title: "May Umrah Packages 2027 | UK Deals",
    description:
      "Book May Umrah packages from the UK before the Ramadan rush. Flights, visa and hotels included. Free quote in 24 hours.",
    url: "https://alahsantravels.co.uk/umrahmay",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "May Umrah Packages 2027 | UK Deals",
    description:
      "Book May Umrah packages from the UK before the Ramadan rush.",
  },
};

export default function UmrahMayPage() {
  return (
    <div>
      <CombineMay />
    </div>
  );
}