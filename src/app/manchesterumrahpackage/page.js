import CombineManchesterPackage from "@/Components/Client-Side/ManchesterPackage/CombineManchesterPackage";

export const metadata = {
  title: "Manchester Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages departing from Manchester with Al Ahsan Travels. Enjoy convenient flights, quality hotels near Haram, and complete visa assistance for a smooth spiritual journey.",
  keywords: [
    "Manchester Umrah packages",
    "Umrah packages from Manchester",
    "Al Ahsan Travels",
    "Umrah booking Manchester",
    "Umrah packages UK",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/manchester-umrah-package",
  },
  openGraph: {
    title: "Manchester Umrah Packages | Al Ahsan Travels",
    description:
      "Convenient Umrah packages departing from Manchester — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/manchester-umrah-package",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manchester Umrah Packages | Al Ahsan Travels",
    description:
      "Book your Manchester Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function ManchesterUmrahPackage() {
  return (
    <div>
      <CombineManchesterPackage />
    </div>
  );
}