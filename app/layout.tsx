import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { buildOgImageUrl, seoConfig } from "@/lib/seo";

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

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: seoConfig.siteName,
    template: `%s | ${seoConfig.siteName}`
  },
  description: seoConfig.defaultDescription,
  applicationName: seoConfig.siteName,
  keywords: [
    "Ishma Make Up Artist",
    "maquilleuse mariée",
    "hair and makeup artist",
    "maquillage bridal",
    "maquillage événementiel",
    "Neuilly-sur-Marne"
  ],
  authors: [{ name: seoConfig.siteName }],
  creator: seoConfig.siteName,
  publisher: seoConfig.siteName,
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: seoConfig.siteName,
    title: seoConfig.siteName,
    description: seoConfig.defaultDescription,
    images: [
      {
        url: buildOgImageUrl(),
        width: 1200,
        height: 630,
        alt: `${seoConfig.siteName} preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.siteName,
    description: seoConfig.defaultDescription,
    images: [buildOgImageUrl()]
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
