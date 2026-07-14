import LondonCombine from "@/Components/Client-Side/London/LondonCombine";

export const metadata = {
  title: "Umrah Packages from London | Al Ahsan Travels",
  description:
    "Book Umrah packages departing from London with Al Ahsan Travels. Convenient flights, quality hotels near Haram, and complete visa assistance for a smooth spiritual journey.",
  keywords: [
    "Umrah packages from London",
    "London Umrah flights",
    "Al Ahsan Travels",
    "Umrah packages UK",
    "Umrah booking London",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/london",
  },
  openGraph: {
    title: "Umrah Packages from London | Al Ahsan Travels",
    description:
      "Convenient Umrah packages departing from London — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/london",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umrah Packages from London | Al Ahsan Travels",
    description:
      "Book your Umrah journey from London today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function London() {
  return (
    <div>
      <LondonCombine />
    </div>
  );
}