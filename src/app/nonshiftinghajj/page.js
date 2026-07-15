import NonShiftingCombine from "@/Components/Client-Side/NonShiftingHajj/NonShiftingCombine";

export const metadata = {
  title: "Non-Shifting Hajj Packages UK 2026",
  description:
    "Affordable Non-Shifting Hajj packages for UK pilgrims. Fixed accommodation, guided Ziyarah and full support from Al-Ahsan Travels.",
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
    canonical: "https://alahsantravels.co.uk/nonshiftinghajj",
  },
  openGraph: {
    title: "Non-Shifting Hajj Packages UK 2026",
    description:
      "Affordable Non-Shifting Hajj packages for UK pilgrims. Fixed accommodation, guided Ziyarah and full support from Al-Ahsan Travels.",
    url: "https://alahsantravels.co.uk/nonshiftinghajj",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Non-Shifting Hajj Packages UK 2026",
    description:
      "Affordable Non-Shifting Hajj packages for UK pilgrims. Fixed accommodation and full support.",
  },
};

export default function Nonshiftinghajj() {
  return (
    <div>
      <NonShiftingCombine />
    </div>
  );
}