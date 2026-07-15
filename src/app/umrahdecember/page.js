import CombineDecember from "@/Components/Client-Side/Umrah Packages Month wise/December/CombineDecember";

export const metadata = {
  title: "December Umrah Packages 2026 | UK Deals",
  description:
    "December Umrah packages for UK pilgrims, including Christmas holiday dates. Family and group options available.",
  keywords: [
    "December Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking December",
    "Christmas Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrahdecember",
  },
  openGraph: {
    title: "December Umrah Packages 2026 | UK Deals",
    description:
      "December Umrah packages for UK pilgrims, including Christmas holiday dates. Family and group options available.",
    url: "https://alahsantravels.co.uk/umrahdecember",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "December Umrah Packages 2026 | UK Deals",
    description:
      "December Umrah packages for UK pilgrims, including Christmas holiday dates.",
  },
};

export default function UmrahDecemberPage() {
  return (
    <div>
      <CombineDecember />
    </div>
  );
}