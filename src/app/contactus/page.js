import CombineContactUs from "@/Components/Client-Side/ContactUs/CombineContactUs";

export const metadata = {
  title: "Contact Us | Al Ahsan Travels",
  description:
    "Get in touch with Al Ahsan Travels for Umrah, Hajj, and holiday package bookings. Reach out to us for queries, support, and personalized travel assistance.",
  keywords: [
    "Contact Al Ahsan Travels",
    "Umrah booking contact",
    "Travel agency contact UK",
    "Al Ahsan Travels support",
    "Hajj Umrah enquiry",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/contact-us",
  },
  openGraph: {
    title: "Contact Us | Al Ahsan Travels",
    description:
      "Reach out to Al Ahsan Travels for all your Umrah, Hajj, and holiday package needs. We're here to help.",
    url: "https://alahsantravels.co.uk/contact-us",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Al Ahsan Travels",
    description:
      "Get in touch with Al Ahsan Travels for bookings and support.",
  },
};

export default function ContactUs() {
  return (
    <div>
      <CombineContactUs />
    </div>
  );
}