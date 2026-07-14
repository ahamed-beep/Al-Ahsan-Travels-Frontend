import CombineAugust from "@/Components/Client-Side/Umrah Packages Month wise/August/CombineAugest";

export const metadata = {
  title: "August Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages for August with Al Ahsan Travels. Enjoy comfortable flights, quality hotels near Haram, and complete visa assistance for a peaceful spiritual journey this August.",
  keywords: [
    "August Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking August",
    "Summer Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrah-august",
  },
  openGraph: {
    title: "August Umrah Packages | Al Ahsan Travels",
    description:
      "Book your August Umrah journey with Al Ahsan Travels — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/umrah-august",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "August Umrah Packages | Al Ahsan Travels",
    description:
      "Book your August Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function UmrahAugustPage() {
  return (
    <div>
      <CombineAugust />
    </div>
  );
}