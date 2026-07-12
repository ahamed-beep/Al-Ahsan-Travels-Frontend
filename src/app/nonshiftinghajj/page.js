import NonShiftingCombine from "@/Components/Client-Side/NonShiftingHajj/NonShiftingCombine";

export const metadata = {
  title: "Non Shifting Hajj Packages | Al Ahsan Travels",
  description:
    "Book Non Shifting Hajj packages with Al Ahsan Travels. Stay at the same hotel throughout your journey with premium accommodation, flights, and complete visa assistance for a hassle-free Hajj.",
  keywords: [
    "Non Shifting Hajj packages",
    "Non Shifting Hajj UK",
    "Al Ahsan Travels",
    "Hajj packages UK",
    "Hajj without hotel shifting",
    "Hajj and Umrah packages",
    "Hajj visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/non-shifting-hajj",
  },
  openGraph: {
    title: "Non Shifting Hajj Packages | Al Ahsan Travels",
    description:
      "Enjoy a hassle-free Hajj with our Non Shifting Hajj packages — same hotel throughout, flights, and visa support all included.",
    url: "https://alahsantravels.co.uk/non-shifting-hajj",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Non Shifting Hajj Packages | Al Ahsan Travels",
    description:
      "Book your Non Shifting Hajj journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function Nonshiftinghajj() {
  return (
    <div>
      <NonShiftingCombine />
    </div>
  );
}