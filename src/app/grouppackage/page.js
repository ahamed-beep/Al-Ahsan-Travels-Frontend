import CombineGroupPackage from "@/Components/Client-Side/GroupPackage/CombineGroupPackage";

export const metadata = {
  title: "Group Umrah Packages | Al Ahsan Travels",
  description:
    "Book special Group Umrah packages with Al Ahsan Travels. Enjoy comfortable flights, quality hotels near Haram, and complete visa assistance for a memorable spiritual journey with friends and family.",
  keywords: [
    "Group Umrah packages",
    "Umrah packages for groups UK",
    "Al Ahsan Travels",
    "Group Umrah booking",
    "Umrah packages UK",
    "Hajj and Umrah packages",
    "Umrah visa UK",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/group-package",
  },
  openGraph: {
    title: "Group Umrah Packages | Al Ahsan Travels",
    description:
      "Exclusive Umrah packages for groups — flights, hotels, and visa support all included. Travel together with comfort and peace of mind.",
    url: "https://alahsantravels.co.uk/group-package",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Group Umrah Packages | Al Ahsan Travels",
    description:
      "Book your Group Umrah journey today with Al Ahsan Travels — flights, hotels, and visa all included.",
  },
};

export default function GroupPackage() {
  return (
    <div>
      <CombineGroupPackage />
    </div>
  );
}