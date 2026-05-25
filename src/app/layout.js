import "./globals.css";

export const metadata = {
  title: "Al-Ahsan Travels",
  description: "Hajj & Umrah Specialists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}