import CombineLondonPackage from "@/Components/Client-Side/London Package/CombineLondonPackage";

export const metadata = {
  title: "London Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages departing from London with Al Ahsan Travels. Enjoy convenient flights, quality hotels near Haram, and complete visa assistance for a smooth spiritual journey.",
  keywords: [
    "London Umrah packages",
    "Umrah packages from London",
    "Al Ahsan Travels",
    "Umrah booking London",
    "Umrah packages UK",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/london-umrah-package",
  },
  openGraph: {
    title: "London Umrah Packages | Al Ahsan Travels",
    description:
      "Convenient Umrah packages departing from London — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/london-umrah-package",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "London Umrah Packages | Al Ahsan Travels",
    description:
      "Book your London Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function LondonUmrahPackage() {
  return (
    <div>
      <CombineLondonPackage />
    </div>
  );
}