import CombineNovember from "@/Components/Client-Side/Umrah Packages Month wise/November/CombineNovember";

export const metadata = {
  title: "November Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages for November with Al Ahsan Travels. Enjoy comfortable flights, quality hotels near Haram, and complete visa assistance for a peaceful spiritual journey this November.",
  keywords: [
    "November Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking November",
    "Autumn Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrah-november",
  },
  openGraph: {
    title: "November Umrah Packages | Al Ahsan Travels",
    description:
      "Book your November Umrah journey with Al Ahsan Travels — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/umrah-november",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "November Umrah Packages | Al Ahsan Travels",
    description:
      "Book your November Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function UmrahNovemberPage() {
  return (
    <div>
      <CombineNovember />
    </div>
  );
}