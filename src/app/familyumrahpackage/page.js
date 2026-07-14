import CombineSpecialPackage from "@/Components/Client-Side/SpecialPackage/CombineSpecialPackage";

export const metadata = {
  title: "Family Umrah Packages | Al Ahsan Travels",
  description:
    "Book special Family Umrah packages with Al Ahsan Travels. Comfortable flights, quality hotels near Haram, and complete visa assistance for a memorable spiritual journey with your loved ones.",
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
    canonical: "https://alahsantravels.co.uk/family-umrah-package",
  },
  openGraph: {
    title: "Family Umrah Packages | Al Ahsan Travels",
    description:
      "Exclusive Umrah packages for families — flights, hotels, and visa support all included. Travel together with comfort and peace of mind.",
    url: "https://alahsantravels.co.uk/family-umrah-package",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Umrah Packages | Al Ahsan Travels",
    description:
      "Book your Family Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function FamilyUmrahPackage() {
  return (
    <div>
      <CombineSpecialPackage />
    </div>
  );
}