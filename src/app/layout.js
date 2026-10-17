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
    logo: "https://alahsantravels.co.uk/Images/Al Ahsan Logo.png",
    image: "https://alahsantravels.co.uk/Images/IMG_0722.JPG.webp",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WZFSJG5S');`,
          }}
        />
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZFSJG5S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
