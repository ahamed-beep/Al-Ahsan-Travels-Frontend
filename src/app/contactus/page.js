import CombineContactUs from "@/Components/Client-Side/ContactUs/CombineContactUs";

export const metadata = {
  title: "Contact Al-Ahsan Travels | Birmingham Office",
  description:
    "Get in touch with Al-Ahsan Travels. Call, WhatsApp or visit our Birmingham office. We respond to all Umrah & Hajj enquiries within 1–2 hours.",
  keywords: [
    "Contact Al Ahsan Travels",
    "Umrah booking contact",
    "Travel agency contact UK",
    "Al Ahsan Travels support",
    "Hajj Umrah enquiry",
  ],
  metadataBase: new URL("https://alahsantravels.co.uk"),
  alternates: {
    canonical: "https://alahsantravels.co.uk/contactus",
  },
  openGraph: {
    title: "Contact Al-Ahsan Travels | Birmingham Office",
    description:
      "Get in touch with Al-Ahsan Travels. Call, WhatsApp or visit our Birmingham office. We respond to all Umrah & Hajj enquiries within 1–2 hours.",
    url: "https://alahsantravels.co.uk/contactus",
    siteName: "Al Ahsan Travels",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Al-Ahsan Travels | Birmingham Office",
    description:
      "Get in touch with Al-Ahsan Travels. Call, WhatsApp or visit our Birmingham office.",
  },
};

export default function ContactUs() {
  return (
    <div>
      <CombineContactUs />
    </div>
  );
}