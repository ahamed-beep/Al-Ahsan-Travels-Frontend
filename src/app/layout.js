import "./globals.css";

export const metadata = {
  title: "Al-Ahsan Travels",
  description: "Al-Ahsan Travels - Your trusted travel partner for Hajj, Umrah, and worldwide tours",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Images/logo.webp" type="image/webp" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}