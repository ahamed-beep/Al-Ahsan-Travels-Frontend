import CombineMarch from "@/Components/Client-Side/Umrah Packages Month wise/March/CombineMarch";

export const metadata = {
  title: "March Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages for March with Al Ahsan Travels. Enjoy comfortable flights, quality hotels near Haram, and complete visa assistance for a peaceful spiritual journey this March.",
  keywords: [
    "March Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking March",
    "Spring Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrah-march",
  },
  openGraph: {
    title: "March Umrah Packages | Al Ahsan Travels",
    description:
      "Book your March Umrah journey with Al Ahsan Travels — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/umrah-march",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "March Umrah Packages | Al Ahsan Travels",
    description:
      "Book your March Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function UmrahMarchPage() {
  return (
    <div>
      <CombineMarch />
    </div>
  );
}