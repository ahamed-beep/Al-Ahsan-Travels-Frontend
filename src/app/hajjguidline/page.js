import CombineHajjGuide from "@/Components/Client-Side/hajjguidline/CombineHajjGuide";

export const metadata = {
  title: "Hajj Guide | Al Ahsan Travels",
  description:
    "Complete Hajj guide by Al Ahsan Travels — learn about rituals, requirements, preparation tips, and everything you need to know for a smooth and spiritually fulfilling Hajj journey.",
  keywords: [
    "Hajj guide",
    "Hajj rituals",
    "How to perform Hajj",
    "Al Ahsan Travels",
    "Hajj preparation tips",
    "Hajj and Umrah guide",
    "Hajj requirements UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/hajj-guideline",
  },
  openGraph: {
    title: "Hajj Guide | Al Ahsan Travels",
    description:
      "Everything you need to know about performing Hajj — rituals, requirements, and preparation tips from Al Ahsan Travels.",
    url: "https://alahsantravels.co.uk/hajj-guideline",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hajj Guide | Al Ahsan Travels",
    description:
      "A complete Hajj guide by Al Ahsan Travels to help you prepare for your journey.",
  },
};

export default function HajjGuidline() {
  return (
    <div>
      <CombineHajjGuide />
    </div>
  );
}