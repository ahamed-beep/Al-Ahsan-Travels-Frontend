import CombineHoliday from "@/Components/Client-Side/HolidayPackage/CombineHoliday";

export const metadata = {
  title: "Umrah Packages | Al Ahsan Travels",
  description:
    "Book affordable and premium Umrah packages with Al Ahsan Travels. Enjoy comfortable flights, top-rated hotels near Haram, and complete visa assistance for a peaceful spiritual journey.",
  keywords: [
    "Umrah packages",
    "Umrah packages UK",
    "cheap Umrah packages",
    "Al Ahsan Travels",
    "Umrah booking UK",
    "Hajj and Umrah",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/holiday-umrah",
  },
  openGraph: {
    title: "Umrah Packages | Al Ahsan Travels",
    description:
      "Explore our exclusive Umrah packages with flights, hotels, and visa support. Travel with comfort and peace of mind.",
    url: "https://alahsantravels.co.uk/holiday-umrah",
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

export default function HolidayUmrah() {
  return (
    <div>
      <CombineHoliday />
    </div>
  );
}