import CombineJune from "@/Components/Client-Side/Umrah Packages Month wise/June/CombineJune";

export const metadata = {
  title: "June Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages for June with Al Ahsan Travels. Enjoy comfortable flights, quality hotels near Haram, and complete visa assistance for a peaceful spiritual journey this June.",
  keywords: [
    "June Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking June",
    "Summer Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrah-june",
  },
  openGraph: {
    title: "June Umrah Packages | Al Ahsan Travels",
    description:
      "Book your June Umrah journey with Al Ahsan Travels — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/umrah-june",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "June Umrah Packages | Al Ahsan Travels",
    description:
      "Book your June Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function UmrahJunePage() {
  return (
    <div>
      <CombineJune />
    </div>
  );
}