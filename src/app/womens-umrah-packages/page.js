import CombineWomenPackage from "@/Components/Client-Side/WomenPackage/CombineWomenPackage";

export const metadata = {
  title: "Women's Umrah Packages | Women-Only Group from the UK",
  description:
    "Book women-only Umrah packages from the UK. Complete flights, visa and hotel packages with a female group leader.",
  keywords: [
    "Women's Umrah packages",
    "Umrah packages for women",
    "Ladies Umrah packages UK",
    "Women only Umrah group",
    "UK Umrah packages",
    "Al Ahsan Travels",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/womenumrahpackage",
  },
  openGraph: {
    title: "Women's Umrah Packages | Women-Only Group from the UK",
    description:
      "Book women-only Umrah packages from the UK. Complete flights, visa and hotel packages with a female group leader.",
    url: "https://alahsantravels.co.uk/womenumrahpackage",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Women's Umrah Packages | Women-Only Group from the UK",
    description:
      "Women-only Umrah packages with a female group leader. Travel comfortably with sisters.",
  },
};

export default function WomenUmrahPackage() {
  return (
    <div>
      <CombineWomenPackage />
    </div>
  );
}