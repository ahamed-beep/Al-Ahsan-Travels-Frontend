import CombineMay from "@/Components/Client-Side/Umrah Packages Month wise/May/CombineMayl";

export const metadata = {
  title: "May Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages for May with Al Ahsan Travels. Enjoy comfortable flights, quality hotels near Haram, and complete visa assistance for a peaceful spiritual journey this May.",
  keywords: [
    "May Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking May",
    "Spring Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrah-may",
  },
  openGraph: {
    title: "May Umrah Packages | Al Ahsan Travels",
    description:
      "Book your May Umrah journey with Al Ahsan Travels — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/umrah-may",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "May Umrah Packages | Al Ahsan Travels",
    description:
      "Book your May Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function UmrahMayPage() {
  return (
    <div>
      <CombineMay />
    </div>
  );
}