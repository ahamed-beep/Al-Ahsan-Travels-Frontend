import CombineMarch from "@/Components/Client-Side/Umrah Packages Month wise/March/CombineMarch";

export const metadata = {
  title: "March Umrah Packages 2027 | UK Deals",
  description:
    "March Umrah packages from the UK — ideal weather and pre-Ramadan availability. Book your spiritual journey today.",
  keywords: [
    "March Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking March",
    "Pre-Ramadan Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrahmarch",
  },
  openGraph: {
    title: "March Umrah Packages 2027 | UK Deals",
    description:
      "March Umrah packages from the UK — ideal weather and pre-Ramadan availability. Book your spiritual journey today.",
    url: "https://alahsantravels.co.uk/umrahmarch",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "March Umrah Packages 2027 | UK Deals",
    description:
      "March Umrah packages — ideal weather and pre-Ramadan availability.",
  },
};

export default function UmrahMarchPage() {
  return (
    <div>
      <CombineMarch />
    </div>
  );
}