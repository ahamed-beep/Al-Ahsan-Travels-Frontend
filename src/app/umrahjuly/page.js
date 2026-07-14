import CombineJuly from "@/Components/Client-Side/Umrah Packages Month wise/July/CombineJuly";

export const metadata = {
  title: "July Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages for July with Al Ahsan Travels. Enjoy comfortable flights, quality hotels near Haram, and complete visa assistance for a peaceful spiritual journey this July.",
  keywords: [
    "July Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking July",
    "Summer Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrah-july",
  },
  openGraph: {
    title: "July Umrah Packages | Al Ahsan Travels",
    description:
      "Book your July Umrah journey with Al Ahsan Travels — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/umrah-july",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "July Umrah Packages | Al Ahsan Travels",
    description:
      "Book your July Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function UmrahJulyPage() {
  return (
    <div>
      <CombineJuly />
    </div>
  );
}