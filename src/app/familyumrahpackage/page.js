import CombineSpecialPackage from "@/Components/Client-Side/SpecialPackage/CombineSpecialPackage";

export const metadata = {
  title: "Family Umrah Packages UK | Al-Ahsan Travels",
  description:
    "Comfortable Family Umrah packages designed for parents and children. Flexible dates, group discounts and dedicated family support.",
  keywords: [
    "Family Umrah packages",
    "Umrah packages for families UK",
    "Al Ahsan Travels",
    "Umrah booking UK",
    "Group family Umrah",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/familyumrahpackage",
  },
  openGraph: {
    title: "Family Umrah Packages UK | Al-Ahsan Travels",
    description:
      "Comfortable Family Umrah packages designed for parents and children. Flexible dates, group discounts and dedicated family support.",
    url: "https://alahsantravels.co.uk/familyumrahpackage",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Umrah Packages UK | Al-Ahsan Travels",
    description:
      "Comfortable Family Umrah packages designed for parents and children.",
  },
};

export default function FamilyUmrahPackage() {
  return (
    <div>
      <CombineSpecialPackage />
    </div>
  );
}