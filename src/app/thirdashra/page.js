import CombineThirdAshra from "@/Components/Client-Side/ThirdAshra/CombineThirdAshra";

export const metadata = {
  title: "3rd Ashra Ramadan Umrah Package UK",
  description:
    "Third Ashra Ramadan Umrah packages including Laylat al-Qadr nights. Premium Haram-view accommodation available.",
  keywords: [
    "Third Ashra Umrah packages",
    "3rd Ashra Ramadan Umrah",
    "Al Ahsan Travels",
    "Laylat al-Qadr Umrah package",
    "Umrah packages UK",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/thirdashra",
  },
  openGraph: {
    title: "3rd Ashra Ramadan Umrah Package UK",
    description:
      "Third Ashra Ramadan Umrah packages including Laylat al-Qadr nights. Premium Haram-view accommodation available.",
    url: "https://alahsantravels.co.uk/thirdashra",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3rd Ashra Ramadan Umrah Package UK",
    description:
      "Third Ashra Ramadan Umrah packages including Laylat al-Qadr nights.",
  },
};

export default function ThirdAshra() {
  return (
    <div>
      <CombineThirdAshra />
    </div>
  );
}