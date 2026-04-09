import type { Metadata } from "next";

const defaultSiteUrl = "https://ishma-makeupartist.vercel.app";
const defaultDescription =
  "Hair & Makeup Artist. Bridal, glam et natural glow avec une approche élégante, douce et sur mesure.";
const defaultOgImagePath = "/opengraph-image";

export const seoConfig = {
  siteName: "Ishma Make Up Artist",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
  defaultDescription,
  defaultOgImagePath
};

export function buildAbsoluteUrl(path = "/") {
  return new URL(path, seoConfig.siteUrl).toString();
}

export function buildOgImageUrl(imagePath = defaultOgImagePath) {
  return buildAbsoluteUrl(imagePath);
}

type PageMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  imagePath?: string;
};

export function buildPageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  imagePath = defaultOgImagePath
}: PageMetadataInput): Metadata {
  const canonical = buildAbsoluteUrl(path);
  const imageUrl = buildOgImageUrl(imagePath);

  return {
    title,
    description,
    alternates: {
      canonical
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: seoConfig.siteName,
      locale: "fr_FR",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${seoConfig.siteName} preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}
