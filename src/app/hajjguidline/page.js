import CombineHajjGuide from "@/Components/Client-Side/hajjguidline/CombineHajjGuide";

export const metadata = {
  title: "Hajj Guideline 2026 | Rituals & Requirements",
  description:
    "Complete Hajj guideline for UK pilgrims — rituals, requirements, visa process and preparation tips from Al-Ahsan Travels' certified experts.",
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
    canonical: "https://alahsantravels.co.uk/hajjguidline",
  },
  openGraph: {
    title: "Hajj Guideline 2026 | Rituals & Requirements",
    description:
      "Complete Hajj guideline for UK pilgrims — rituals, requirements, visa process and preparation tips from Al-Ahsan Travels' certified experts.",
    url: "https://alahsantravels.co.uk/hajjguidline",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hajj Guideline 2026 | Rituals & Requirements",
    description:
      "Complete Hajj guideline for UK pilgrims — rituals, requirements, visa process and preparation tips.",
  },
};

export default function HajjGuidline() {
  return (
    <div>
      <CombineHajjGuide />
    </div>
  );
}