import CombineGroupPackage from "@/Components/Client-Side/GroupPackage/CombineGroupPackage";

export const metadata = {
  title: "Group Umrah Packages UK | Book Together",
  description:
    "Travelling with friends or community? Book Group Umrah packages with special rates, shared transport and coordinated hotel stays.",
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
    canonical: "https://alahsantravels.co.uk/grouppackage",
  },
  openGraph: {
    title: "Group Umrah Packages UK | Book Together",
    description:
      "Travelling with friends or community? Book Group Umrah packages with special rates, shared transport and coordinated hotel stays.",
    url: "https://alahsantravels.co.uk/grouppackage",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Group Umrah Packages UK | Book Together",
    description:
      "Book Group Umrah packages with special rates, shared transport and coordinated hotel stays.",
  },
};

export default function GroupPackage() {
  return (
    <div>
      <CombineGroupPackage />
    </div>
  );
}