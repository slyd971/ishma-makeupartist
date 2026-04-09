import type { CSSProperties } from "react";
import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { Portfolio } from "@/components/Portfolio";
import { getDefaultMakeupArtist } from "@/data/makeupArtists";
import { buildPageMetadata, seoConfig } from "@/lib/seo";

export function generateMetadata(): Metadata {
  const artist = getDefaultMakeupArtist();

  return buildPageMetadata({
    title: artist ? `${artist.name} | Gallery` : "Gallery",
    description: artist ? `Portfolio complet de ${artist.name}` : seoConfig.defaultDescription,
    path: "/gallery"
  });
}

export default function GalleryPage() {
  const artist = getDefaultMakeupArtist();

  if (!artist) {
    return null;
  }

  const themeStyle = {
    ["--canvas" as string]: artist.design.secondaryColor,
    ["--ink" as string]: artist.design.primaryColor,
    ["--accent" as string]: artist.design.primaryColor,
    ["--accent-soft" as string]: artist.design.secondaryColor
  } satisfies CSSProperties;

  return (
    <main style={themeStyle} className="min-h-screen">
      <div className="bg-editorial-grid bg-[length:auto,34px_34px,34px_34px]">
        <Header artist={artist} />
        <div className="px-6 pb-4 pt-28 md:px-10 md:pt-32">
          <div className="mx-auto max-w-7xl border-b border-black/8 pb-8">
            <p className="magazine-meta">Galerie complète</p>
            <h1 className="mt-4 max-w-[12ch] font-serif text-[2.6rem] leading-[0.9] text-ink md:text-[4.5rem]">
              Tous les looks de {artist.name}
            </h1>
            <p className="mt-5 max-w-2xl text-[1rem] leading-7 text-ink/68 md:text-[1.05rem]">
              Une lecture complète du portfolio, avec filtres par univers pour
              parcourir chaque image sans surcharger la page d&apos;accueil.
            </p>
          </div>
        </div>
        <Portfolio artist={artist} fullPage />
      </div>
    </main>
  );
}
