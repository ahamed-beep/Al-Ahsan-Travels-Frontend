import CombineThirdAshra from "@/Components/Client-Side/ThirdAshra/CombineThirdAshra";

export const metadata = {
  title: "Third Ashra Umrah Packages | Al Ahsan Travels",
  description:
    "Book Third Ashra Umrah packages with Al Ahsan Travels. Perform Umrah during the blessed final Ashra of Ramadan with comfortable flights, quality hotels, and complete visa assistance.",
  keywords: [
    "Third Ashra Umrah packages",
    "Ramadan Third Ashra Umrah",
    "Al Ahsan Travels",
    "Umrah in last Ashra",
    "Umrah packages UK",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/third-ashra",
  },
  openGraph: {
    title: "Third Ashra Umrah Packages | Al Ahsan Travels",
    description:
      "Perform Umrah during the blessed final Ashra of Ramadan with our exclusive packages — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/third-ashra",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Third Ashra Umrah Packages | Al Ahsan Travels",
    description:
      "Book your Third Ashra Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function ThirdAshra() {
  return (
    <div>
      <CombineThirdAshra />
    </div>
  );
}