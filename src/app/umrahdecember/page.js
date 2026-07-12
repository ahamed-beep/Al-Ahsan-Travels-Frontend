import CombineDecember from "@/Components/Client-Side/Umrah Packages Month wise/December/CombineDecember";

export const metadata = {
  title: "December Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages for December with Al Ahsan Travels. Enjoy comfortable flights, quality hotels near Haram, and complete visa assistance for a peaceful spiritual journey this December.",
  keywords: [
    "December Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking December",
    "Winter Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrah-december",
  },
  openGraph: {
    title: "December Umrah Packages | Al Ahsan Travels",
    description:
      "Book your December Umrah journey with Al Ahsan Travels — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/umrah-december",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "December Umrah Packages | Al Ahsan Travels",
    description:
      "Book your December Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function UmrahDecemberPage() {
  return (
    <div>
      <CombineDecember />
    </div>
  );
}