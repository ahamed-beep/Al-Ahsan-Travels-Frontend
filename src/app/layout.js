import "./globals.css";

export const metadata = {
  title: "Al Ahsan Travels",
  description: "Hajj & Umrah Specialists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Images/logo.webp" type="image/webp" />
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMOeF3X5aOZoxmCkho40XTuBAgi1TSL5E&libraries=places"
          async
          defer
        />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}