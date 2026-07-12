import CombineUmrahPage from "@/Components/Client-Side/UmrahPage/CombineUmrahPage";

export const metadata = {
  title: "Umrah Packages | Al Ahsan Travels",
  description:
    "Book affordable and premium Umrah packages with Al Ahsan Travels. Explore flights, hotels near Haram, and complete visa assistance for a peaceful and memorable spiritual journey.",
  keywords: [
    "Umrah packages",
    "Umrah packages UK",
    "Al Ahsan Travels",
    "Umrah booking UK",
    "Cheap Umrah packages",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/umrah",
  },
  openGraph: {
    title: "Umrah Packages | Al Ahsan Travels",
    description:
      "Explore our exclusive Umrah packages with flights, hotels, and visa support. Travel with comfort and peace of mind.",
    url: "https://alahsantravels.co.uk/umrah",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umrah Packages | Al Ahsan Travels",
    description:
      "Book your Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function UmrahPage() {
  return (
    <div>
      <CombineUmrahPage />
    </div>
  );
}