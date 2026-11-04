import EasterCombine from "@/Components/Client-Side/Easter package/CombineEaster";

export const metadata = {
  title: "Easter Umrah Packages UK 2026",
  description:
    "Perform Umrah during the Easter school holidays. Family-friendly packages with flights, visa and hotels included.",
  keywords: [
    "Easter Umrah packages",
    "Easter school holidays Umrah",
    "Family Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah packages UK",
    "Easter break Umrah",
    "Hajj and Umrah packages",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/easterumrahpackage",
  },
  openGraph: {
    title: "Easter Umrah Packages UK 2026",
    description:
      "Perform Umrah during the Easter school holidays. Family-friendly packages with flights, visa and hotels included.",
    url: "https://alahsantravels.co.uk/easterumrahpackage",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easter Umrah Packages UK 2026",
    description:
      "Family-friendly Umrah packages during the Easter school holidays.",
  },
};

export default function Easter() {
  return (
    <div>
      <EasterCombine />
    </div>
  );
}