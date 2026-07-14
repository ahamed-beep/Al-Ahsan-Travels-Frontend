import WhatsAppButton from "@/Components/Client-Side/WhatsAppButton/WhatsAppButton";
import "./globals.css";

export const metadata = {
  title: "Al Ahsan Travels",
  description: "Hajj & Umrah Specialists",
};

export default function RootLayout({ children }) {
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
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}