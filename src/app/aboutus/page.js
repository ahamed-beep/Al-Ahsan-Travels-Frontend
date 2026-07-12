import CombineAboutUs from "@/Components/Client-Side/AboutUs/CombineAboutUs";

export const metadata = {
  title: "About Us | Your Company Name",
  description: "Learn more about our company, our mission, vision, and the team behind our success.",
  keywords: ["about us", "our company", "our mission", "our team"],
  openGraph: {
    title: "About Us | Your Company Name",
    description: "Learn more about our company, our mission, vision, and the team behind our success.",
    url: "https://yourwebsite.com/about-us",
    siteName: "Your Company Name",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Your Company Name",
    description: "Learn more about our company, our mission, vision, and the team behind our success.",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
};

export default function AboutUs() {
  return (
    <div>
      <CombineAboutUs />
    </div>
  );
}