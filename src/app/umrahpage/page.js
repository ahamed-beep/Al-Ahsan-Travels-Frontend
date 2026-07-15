import CombineUmrahPage from "@/Components/Client-Side/UmrahPage/CombineUmrahPage";

export const metadata = {
  title: "Umrah Packages 2026 | 3, 4 & 5 Star Deals",
  description:
    "Browse 3-star, 4-star & 5-star Umrah packages from the UK. Flights, visa and Haram-view hotels included. Free personalised quote in 24 hours.",
  keywords: [
    "Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking UK",
    "Cheap Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrahpage",
  },
  openGraph: {
    title: "Umrah Packages 2026 | 3, 4 & 5 Star Deals",
    description:
      "Browse 3-star, 4-star & 5-star Umrah packages from the UK. Flights, visa and Haram-view hotels included. Free personalised quote in 24 hours.",
    url: "https://alahsantravels.co.uk/umrahpage",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umrah Packages 2026 | 3, 4 & 5 Star Deals",
    description:
      "Browse 3-star, 4-star & 5-star Umrah packages from the UK. Flights, visa and hotels included.",
  },
};

export default function UmrahPage() {
  return (
    <div>
      <CombineUmrahPage />
    </div>
  );
}