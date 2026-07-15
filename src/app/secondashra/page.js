import CombineSecondAshra from "@/Components/Client-Side/SecondAshra/CombineSecondAshra";

export const metadata = {
  title: "2nd Ashra Ramadan Umrah Package UK",
  description:
    "Book your Second Ashra Ramadan Umrah package — a time of forgiveness. Flights, visa and hotels included.",
  keywords: [
    "Second Ashra Umrah packages",
    "2nd Ashra Ramadan Umrah",
    "Al Ahsan Travels",
    "Ashra of forgiveness Umrah",
    "Umrah packages UK",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/secondashra",
  },
  openGraph: {
    title: "2nd Ashra Ramadan Umrah Package UK",
    description:
      "Book your Second Ashra Ramadan Umrah package — a time of forgiveness. Flights, visa and hotels included.",
    url: "https://alahsantravels.co.uk/secondashra",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2nd Ashra Ramadan Umrah Package UK",
    description:
      "Book your Second Ashra Ramadan Umrah package — a time of forgiveness.",
  },
};

export default function secondashra() {
  return (
    <div>
      <CombineSecondAshra />
    </div>
  );
}