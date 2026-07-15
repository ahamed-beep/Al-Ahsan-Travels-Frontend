import CombineJanuary from "@/Components/Client-Side/Umrah Packages Month wise/January/CombineJanuary";

export const metadata = {
  title: "January Umrah Packages 2027 | UK Deals",
  description:
    "Book your January Umrah package from the UK. Cooler weather, flexible dates and premium hotel options. Get a free quote today.",
  keywords: [
    "January Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking January",
    "New Year Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrahjanuary",
  },
  openGraph: {
    title: "January Umrah Packages 2027 | UK Deals",
    description:
      "Book your January Umrah package from the UK. Cooler weather, flexible dates and premium hotel options. Get a free quote today.",
    url: "https://alahsantravels.co.uk/umrahjanuary",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "January Umrah Packages 2027 | UK Deals",
    description:
      "Book your January Umrah package from the UK. Cooler weather and flexible dates.",
  },
};

export default function UmrahJanuaryPage() {
  return (
    <div>
      <CombineJanuary />
    </div>
  );
}