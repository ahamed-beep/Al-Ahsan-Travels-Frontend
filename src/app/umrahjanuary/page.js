import CombineJanuary from "@/Components/Client-Side/Umrah Packages Month wise/January/CombineJanuary";

export const metadata = {
  title: "January Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages for January with Al Ahsan Travels. Enjoy comfortable flights, quality hotels near Haram, and complete visa assistance for a peaceful spiritual journey this January.",
  keywords: [
    "January Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking January",
    "New Year Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrah-january",
  },
  openGraph: {
    title: "January Umrah Packages | Al Ahsan Travels",
    description:
      "Book your January Umrah journey with Al Ahsan Travels — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/umrah-january",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "January Umrah Packages | Al Ahsan Travels",
    description:
      "Book your January Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function UmrahJanuaryPage() {
  return (
    <div>
      <CombineJanuary />
    </div>
  );
}