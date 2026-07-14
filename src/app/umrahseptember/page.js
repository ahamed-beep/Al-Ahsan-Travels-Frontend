import CombineSeptember from "@/Components/Client-Side/Umrah Packages Month wise/September/CombineSeptember";

export const metadata = {
  title: "September Umrah Packages | Al Ahsan Travels",
  description:
    "Book Umrah packages for September with Al Ahsan Travels. Enjoy comfortable flights, quality hotels near Haram, and complete visa assistance for a peaceful spiritual journey this September.",
  keywords: [
    "September Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking September",
    "Autumn Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrah-september",
  },
  openGraph: {
    title: "September Umrah Packages | Al Ahsan Travels",
    description:
      "Book your September Umrah journey with Al Ahsan Travels — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/umrah-september",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "September Umrah Packages | Al Ahsan Travels",
    description:
      "Book your September Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function UmrahSeptemberPage() {
  return (
    <div>
      <CombineSeptember />
    </div>
  );
}