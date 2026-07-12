import CombineOctober from "@/Components/Client-Side/Umrah Packages Month wise/October/CombineOctober";

export const metadata = {
  title: "October Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages for October with Al Ahsan Travels. Enjoy comfortable flights, quality hotels near Haram, and complete visa assistance for a peaceful spiritual journey this October.",
  keywords: [
    "October Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking October",
    "Autumn Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrah-october",
  },
  openGraph: {
    title: "October Umrah Packages | Al Ahsan Travels",
    description:
      "Book your October Umrah journey with Al Ahsan Travels — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/umrah-october",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "October Umrah Packages | Al Ahsan Travels",
    description:
      "Book your October Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function UmrahOctoberPage() {
  return (
    <div>
      <CombineOctober />
    </div>
  );
}