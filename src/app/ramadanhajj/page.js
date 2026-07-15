import Combine from "@/Components/Client-Side/Ramadan/Combine";

export const metadata = {
  title: "1st Ashra Ramadan Umrah Package UK",
  description:
    "Perform Umrah in the First Ashra of Ramadan. Special packages with premium hotels close to Masjid al-Haram.",
  keywords: [
    "First Ashra Ramadan Umrah",
    "1st Ashra Umrah package",
    "Al Ahsan Travels",
    "Ramadan Umrah UK",
    "Umrah packages UK",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/ramadanhajj",
  },
  openGraph: {
    title: "1st Ashra Ramadan Umrah Package UK",
    description:
      "Perform Umrah in the First Ashra of Ramadan. Special packages with premium hotels close to Masjid al-Haram.",
    url: "https://alahsantravels.co.uk/ramadanhajj",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1st Ashra Ramadan Umrah Package UK",
    description:
      "Perform Umrah in the First Ashra of Ramadan with premium hotels close to Masjid al-Haram.",
  },
};

export default function ramadanhajj() {
  return (
    <div>
      <Combine />
    </div>
  );
}