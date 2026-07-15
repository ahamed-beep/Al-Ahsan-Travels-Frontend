import CombineShiftingHajj from "@/Components/Client-Side/ShiftingHaaj/CombineHajjPackage";

export const metadata = {
  title: "Shifting Hajj Packages UK | Al-Ahsan Travels",
  description:
    "Book Shifting Hajj packages from the UK with flights, visa, hotels and transport included. ATOL protected. Get your free Hajj quote today.",
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
    canonical: "https://alahsantravels.co.uk/shiftinghajj",
  },
  openGraph: {
    title: "Shifting Hajj Packages UK | Al-Ahsan Travels",
    description:
      "Book Shifting Hajj packages from the UK with flights, visa, hotels and transport included. ATOL protected. Get your free Hajj quote today.",
    url: "https://alahsantravels.co.uk/shiftinghajj",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shifting Hajj Packages UK | Al-Ahsan Travels",
    description:
      "Book Shifting Hajj packages from the UK with flights, visa, hotels and transport included.",
  },
};

export default function ShiftingHajj() {
  return (
    <div>
      <CombineShiftingHajj />
    </div>
  );
}