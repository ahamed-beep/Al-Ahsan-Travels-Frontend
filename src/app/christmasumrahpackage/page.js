import CombineHoliday from "@/Components/Client-Side/HolidayPackage/CombineHoliday";

export const metadata = {
  title: "Christmas Umrah Packages UK 2026",
  description:
    "Spend your Christmas holidays performing Umrah. Special festive-season packages with flights and hotels included.",
  keywords: [
    "Christmas Umrah packages",
    "Umrah packages UK",
    "Festive season Umrah",
    "Al Ahsan Travels",
    "Umrah booking December",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/christmasumrahpackage",
  },
  openGraph: {
    title: "Christmas Umrah Packages UK 2026",
    description:
      "Spend your Christmas holidays performing Umrah. Special festive-season packages with flights and hotels included.",
    url: "https://alahsantravels.co.uk/christmasumrahpackage",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christmas Umrah Packages UK 2026",
    description:
      "Spend your Christmas holidays performing Umrah with special festive-season packages.",
  },
};

export default function HolidayUmrah() {
  return (
    <div>
      <CombineHoliday />
    </div>
  );
}