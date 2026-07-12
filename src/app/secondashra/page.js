import CombineSecondAshra from "@/Components/Client-Side/SecondAshra/CombineSecondAshra";

export const metadata = {
  title: "Second Ashra Umrah Packages | Al Ahsan Travels",
  description:
    "Book Second Ashra Umrah packages with Al Ahsan Travels. Perform Umrah during the blessed Second Ashra of Ramadan with comfortable flights, quality hotels, and complete visa assistance.",
  keywords: [
    "Second Ashra Umrah packages",
    "Ramadan Second Ashra Umrah",
    "Al Ahsan Travels",
    "Umrah in Ramadan",
    "Umrah packages UK",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/second-ashra",
  },
  openGraph: {
    title: "Second Ashra Umrah Packages | Al Ahsan Travels",
    description:
      "Perform Umrah during the blessed Second Ashra of Ramadan with our exclusive packages — flights, hotels, and visa support all included.",
    url: "https://alahsantravels.co.uk/second-ashra",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Second Ashra Umrah Packages | Al Ahsan Travels",
    description:
      "Book your Second Ashra Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function secondashra() {
  return (
    <div>
      <CombineSecondAshra />
    </div>
  );
}