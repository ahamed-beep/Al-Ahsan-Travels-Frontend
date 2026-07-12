import CombineFebruary from "@/Components/Client-Side/Umrah Packages Month wise/February/CombineFebruary";

export const metadata = {
  title: "February Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages for February with Al Ahsan Travels. Enjoy comfortable flights, quality hotels near Haram, and complete visa assistance for a peaceful spiritual journey this February.",
  keywords: [
    "February Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking February",
    "Winter Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrah-february",
  },
  openGraph: {
    title: "February Umrah Packages | Al Ahsan Travels",
    description:
      "Book your February Umrah journey with Al Ahsan Travels — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/umrah-february",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "February Umrah Packages | Al Ahsan Travels",
    description:
      "Book your February Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function UmrahFebruaryPage() {
  return (
    <div>
      <CombineFebruary />
    </div>
  );
}