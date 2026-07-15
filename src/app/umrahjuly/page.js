import CombineJuly from "@/Components/Client-Side/Umrah Packages Month wise/July/CombineJuly";

export const metadata = {
  title: "July Umrah Packages 2026 | UK Deals",
  description:
    "Book your July Umrah package from the UK. School holiday friendly dates with flights, visa and hotels included.",
  keywords: [
    "July Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking July",
    "Summer Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrahjuly",
  },
  openGraph: {
    title: "July Umrah Packages 2026 | UK Deals",
    description:
      "Book your July Umrah package from the UK. School holiday friendly dates with flights, visa and hotels included.",
    url: "https://alahsantravels.co.uk/umrahjuly",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "July Umrah Packages 2026 | UK Deals",
    description:
      "Book your July Umrah package — school holiday friendly dates.",
  },
};

export default function UmrahJulyPage() {
  return (
    <div>
      <CombineJuly />
    </div>
  );
}