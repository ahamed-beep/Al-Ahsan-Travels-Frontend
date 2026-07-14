import EasterCombine from "@/Components/EasterPackage/EasterCombine";

export const metadata = {
  title: "Easter Umrah & Holiday Packages | Al Ahsan Travels",
  description:
    "Book special Easter holiday and Umrah packages with Al Ahsan Travels. Enjoy comfortable flights, quality hotels, and complete visa assistance for your spring getaway or spiritual journey.",
  keywords: [
    "Easter Umrah packages",
    "Easter holiday packages UK",
    "Al Ahsan Travels",
    "Easter travel deals",
    "Umrah packages UK",
    "Easter break packages",
    "Hajj and Umrah packages",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/easter",
  },
  openGraph: {
    title: "Easter Umrah & Holiday Packages | Al Ahsan Travels",
    description:
      "Exclusive Easter packages — flights, hotels, and visa support all included. Book your Easter getaway or Umrah journey today.",
    url: "https://alahsantravels.co.uk/easter",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easter Umrah & Holiday Packages | Al Ahsan Travels",
    description:
      "Book your Easter package today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function Easter() {
  return (
    <div>
      <EasterCombine />
    </div>
  );
}