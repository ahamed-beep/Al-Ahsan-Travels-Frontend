import WhatsAppButton from "@/Components/Client-Side/WhatsAppButton/WhatsAppButton";
import "./globals.css";

export const metadata = {
  title: "Al Ahsan Travels",
  description: "Hajj & Umrah Specialists",
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://alahsantravels.co.uk/#organization",
    name: "Al-Ahsan Travels",
    url: "https://alahsantravels.co.uk",
    logo: "https://alahsantravels.co.uk/images/logo-512x512.png",
    image: "https://alahsantravels.co.uk/images/homepage-hero.jpg",
    description:
      "ATOL & IATA protected Hajj and Umrah travel agency based in Birmingham, UK, offering flights, visas, hotels and complete pilgrimage packages.",
    telephone: "+447440064066",
    email: "info@alahsantravels.co.uk",
    priceRange: "£££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "156 Great Charles Street, Queensway",
      addressLocality: "Birmingham",
      postalCode: "B3 3HN",
      addressCountry: "GB",
    },
    sameAs: [
      "https://www.facebook.com/share/1QeAP2yNs3/",
      "https://www.instagram.com/alahsantravelsuk",
      "https://www.tiktok.com/@alahsantravelsuk",
      "https://www.linkedin.com/company/al-ahsan-travels/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="CT7BWX4JCBRjb8P_D5RhsaphPk6Wk8xdulUn0-OUX0Q4"
        />
        <link rel="icon" href="/Images/logo.webp" type="image/webp" />
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMOeF3X5aOZoxmCkho40XTuBAgi1TSL5E&libraries=places"
          async
          defer
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}