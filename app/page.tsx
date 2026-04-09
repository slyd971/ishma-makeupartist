import type { CSSProperties } from "react";
import type { Metadata } from "next";

import { About } from "@/components/About";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Collaborations } from "@/components/Collaborations";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Videos } from "@/components/Videos";
import { WorkKit } from "@/components/WorkKit";
import { getDefaultMakeupArtist } from "@/data/makeupArtists";

export function generateMetadata(): Metadata {
  const artist = getDefaultMakeupArtist();

  return {
    title: artist?.name ?? "Ishma Make Up Artist",
    description:
      artist?.intro ??
      "Hair & Makeup Artist à Neuilly-sur-Marne pour bridal, glam et natural glow.",
    openGraph: {
      title: artist?.name ?? "Ishma Make Up Artist",
      description:
        artist?.intro ??
        "Hair & Makeup Artist à Neuilly-sur-Marne pour bridal, glam et natural glow."
    },
    twitter: {
      title: artist?.name ?? "Ishma Make Up Artist",
      description:
        artist?.intro ??
        "Hair & Makeup Artist à Neuilly-sur-Marne pour bridal, glam et natural glow."
    }
  };
}

export default function HomePage() {
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
        <Hero artist={artist} template="template-1" />
        <About artist={artist} />
        <Portfolio artist={artist} />
        <Services artist={artist} />
        <WorkKit artist={artist} />
        <BeforeAfter artist={artist} />
        <Videos artist={artist} />
        <Collaborations artist={artist} />
        <Testimonials artist={artist} />
        <Contact artist={artist} />
      </div>
    </main>
  );
}
