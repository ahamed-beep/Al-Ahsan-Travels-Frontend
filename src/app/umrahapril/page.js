import CombineApril from "@/Components/Client-Side/Umrah Packages Month wise/April/CombineApril";

export const metadata = {
  title: "April Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages for April with Al Ahsan Travels. Enjoy comfortable flights, quality hotels near Haram, and complete visa assistance for a peaceful spiritual journey this April.",
  keywords: [
    "April Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking April",
    "Umrah packages 2026",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrah-april",
  },
  openGraph: {
    title: "April Umrah Packages | Al Ahsan Travels",
    description:
      "Book your April Umrah journey with Al Ahsan Travels — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/umrah-april",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "April Umrah Packages | Al Ahsan Travels",
    description:
      "Book your April Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function UmrahAprilPage() {
  return (
    <div>
      <CombineApril />
    </div>
  );
}