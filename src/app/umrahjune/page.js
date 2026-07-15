import CombineJune from "@/Components/Client-Side/Umrah Packages Month wise/June/CombineJune";

export const metadata = {
  title: "June Umrah Packages 2026 | UK Deals",
  description:
    "June Umrah packages for UK pilgrims — summer travel dates, family-friendly options and ATOL protected bookings.",
  keywords: [
    "June Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking June",
    "Summer Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrahjune",
  },
  openGraph: {
    title: "June Umrah Packages 2026 | UK Deals",
    description:
      "June Umrah packages for UK pilgrims — summer travel dates, family-friendly options and ATOL protected bookings.",
    url: "https://alahsantravels.co.uk/umrahjune",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "June Umrah Packages 2026 | UK Deals",
    description:
      "June Umrah packages for UK pilgrims — summer travel dates and ATOL protected bookings.",
  },
};

export default function UmrahJunePage() {
  return (
    <div>
      <CombineJune />
    </div>
  );
}