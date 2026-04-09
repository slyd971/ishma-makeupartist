import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ishma-makeupartist.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ishma Make Up Artist",
    template: "%s | Ishma Make Up Artist"
  },
  description: "Hair & Makeup Artist a Neuilly-sur-Marne. Bridal, glam et natural glow avec une approche elegante, douce et sur mesure.",
  applicationName: "Ishma Make Up Artist",
  keywords: [
    "Ishma Make Up Artist",
    "maquilleuse mariee",
    "hair and makeup artist",
    "maquillage bridal",
    "maquillage evenementiel",
    "Neuilly-sur-Marne"
  ],
  authors: [{ name: "Ishma Make Up Artist" }],
  creator: "Ishma Make Up Artist",
  publisher: "Ishma Make Up Artist",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Ishma Make Up Artist",
    title: "Ishma Make Up Artist",
    description: "Hair & Makeup Artist a Neuilly-sur-Marne. Bridal, glam et natural glow avec une approche elegante et sur mesure.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ishma Make Up Artist, hair and makeup artist"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishma Make Up Artist",
    description: "Bridal, glam et natural glow avec une approche elegante et sur mesure.",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${display.variable} ${body.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
