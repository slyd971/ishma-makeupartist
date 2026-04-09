"use client";

import Image from "next/image";
import { useState } from "react";

import { FadeIn } from "@/components/FadeIn";
import type { MakeupArtist } from "@/types/makeupArtist";

type AboutProps = {
  artist: MakeupArtist;
};

export function About({ artist }: AboutProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const bioParagraphs = artist.bio
    .split(". ")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph, index, array) =>
      index === array.length - 1 || paragraph.endsWith(".")
        ? paragraph
        : `${paragraph}.`
    );
  const mobileParagraphs = isExpanded ? bioParagraphs : bioParagraphs.slice(0, 2);
  const hasMoreContent = bioParagraphs.length > 2;

  return (
    <section
      id="about"
      className="section-frame relative scroll-mt-24 overflow-hidden px-6 py-12 md:px-10 md:py-18"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_72%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-10">
          <FadeIn delay={0.08}>
            <div className="luxury-panel overflow-hidden rounded-[0.9rem]">
              <div className="relative aspect-[4/4.2] overflow-hidden bg-[rgba(20,14,12,0.06)] md:aspect-[4/4.35]">
                <Image
                  src={artist.hero.secondaryImage ?? artist.hero.primaryImage}
                  alt={artist.hero.secondaryAlt ?? artist.hero.primaryAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="object-cover object-[center_18%] md:object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,13,11,0.18),transparent_38%,rgba(255,255,255,0.08))]" />
              </div>
              <div className="flex items-end justify-between gap-4 border-t border-black/8 px-5 py-4">
                <div>
                  <p className="font-serif text-[1.8rem] leading-none text-ink">
                    {artist.name}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid gap-4">
              <h2 className="max-w-[20ch] font-serif text-[1.95rem] leading-[1] text-ink md:max-w-[18ch] md:text-[3rem]">
                Qui est Ishma
              </h2>
              <p className="max-w-xl text-base leading-8 text-ink/68 md:text-lg">
                {artist.tagline}
              </p>
              <div className="space-y-4 text-[0.98rem] leading-7 text-ink/72 md:hidden md:text-[1.02rem]">
                {mobileParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {hasMoreContent ? (
                <button
                  type="button"
                  onClick={() => setIsExpanded((current) => !current)}
                  className="w-fit border-b border-black/35 pb-1 text-[10px] uppercase tracking-[0.22em] text-ink/66 md:hidden"
                >
                  {isExpanded ? "Voir moins" : "Voir plus"}
                </button>
              ) : null}
              <div className="hidden space-y-4 text-[0.98rem] leading-7 text-ink/72 md:block md:text-[1.02rem]">
                {bioParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
