import CombineShiftingHajj from "@/Components/Client-Side/ShiftingHaaj/CombineHajjPackage";

export const metadata = {
  title: "Shifting Hajj Packages | Al Ahsan Travels",
  description:
    "Book Shifting Hajj packages with Al Ahsan Travels. Stay closer to key rituals with strategically shifting hotel accommodation, comfortable flights, and complete visa assistance for your Hajj journey.",
  keywords: [
    "Shifting Hajj packages",
    "Shifting Hajj UK",
    "Al Ahsan Travels",
    "Hajj packages UK",
    "Hajj hotel shifting",
    "Hajj and Umrah packages",
    "Hajj visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/shifting-hajj",
  },
  openGraph: {
    title: "Shifting Hajj Packages | Al Ahsan Travels",
    description:
      "Book your Shifting Hajj package with Al Ahsan Travels — strategic hotel locations, flights, and visa support all included.",
    url: "https://alahsantravels.co.uk/shifting-hajj",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shifting Hajj Packages | Al Ahsan Travels",
    description:
      "Book your Shifting Hajj journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function ShiftingHajj() {
  return (
    <div>
      <CombineShiftingHajj />
    </div>
  );
}