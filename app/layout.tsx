import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Goldenwick - Handcrafted Candles",
  description:
    "Artisan handcrafted candles made in India. Shop Goldenwick's premium candle collection.",
  openGraph: {
    title: "Goldenwick - Handcrafted Candles",
    description:
      "Artisan handcrafted candles made in India. Shop Goldenwick's premium candle collection.",
    url: "https://goldenwick.in",
    siteName: "Goldenwick",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-(--color-text-dark)">
        {children}
      </body>
    </html>
  );
}
