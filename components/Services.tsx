"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type ServicesProps = {
  artist: MakeupArtist;
};

const serviceIcons: Record<
  MakeupArtist["services"][number]["icon"],
  React.JSX.Element
> = {
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3zM18.5 15l.9 2.6L22 18.5l-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6zM6 15l1.2 3.3L10.5 19l-3.3 1.2L6 23.5l-1.2-3.3L1.5 19l3.3-1.2L6 15z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ),
  brush: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M15 4l5 5M13.5 5.5L6 13a3.5 3.5 0 104.95 4.95l7.55-7.45a2 2 0 000-2.83l-2.17-2.17a2 2 0 00-2.83 0zM4 20c1.2-.2 2.1-.6 2.8-1.3.7-.7 1.1-1.6 1.3-2.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M8 6l1.2-2h5.6L16 6h2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2zm4 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ),
  diamond: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M7 4h10l4 5-9 11L3 9l4-5zM7 4l5 16m5-16l-5 16M3 9h18"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ),
  runway: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 3v18M7 6l5 2 5-2M8 12l4 1.5L16 12M9 18l3 .8 3-.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  profile: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 12a4 4 0 100-8 4 4 0 000 8zM5 20a7 7 0 0114 0"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
};

export function Services({ artist }: ServicesProps) {
  const [startIndex, setStartIndex] = useState(0);
  const items = artist.services;
  const visibleItems = items.slice(startIndex, startIndex + 3);
  const canGoPrevious = startIndex > 0;
  const canGoNext = startIndex + 3 < items.length;

  function handlePrevious() {
    if (!canGoPrevious) return;
    setStartIndex((current) => Math.max(0, current - 1));
  }

  function handleNext() {
    if (!canGoNext) return;
    setStartIndex((current) => Math.min(items.length - 3, current + 1));
  }

  return (
    <section
      id="services"
      className="section-frame scroll-mt-24 px-6 py-12 md:px-10 md:py-18"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionIntro
            eyebrow="Expertise"
            title="Des prestations pensées pour chaque moment"
            description="Mariage, événement, shooting ou cours d'auto-maquillage : des prestations conçues pour s'adapter à chaque besoin, avec la même exigence de douceur, d'écoute et de précision."
          />
        </FadeIn>

        <div className="mt-8">
          <div className="flex items-center justify-between gap-4">
            <p className="magazine-meta">
              {items.length} offres
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={!canGoPrevious}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/72 text-ink transition disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Voir les offres précédentes"
              >
                <span className="text-lg leading-none">‹</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!canGoNext}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/72 text-ink transition disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Voir les offres suivantes"
              >
                <span className="text-lg leading-none">›</span>
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {visibleItems.map((service, index) => (
              <motion.article
                key={`${service.title}-${startIndex}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="luxury-panel group flex h-full flex-col rounded-[0.85rem] p-4 transition-transform duration-300 hover:-translate-y-1 md:p-5"
              >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center border border-black/8 bg-white/70 text-ink">
                      {serviceIcons[service.icon]}
                    </div>
                    <div className="text-right">
                      <p className="magazine-meta">
                        {String(startIndex + index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-ink/45">
                        à partir de
                      </p>
                      <p className="mt-2 font-serif text-[1.45rem] leading-none text-ink md:text-[1.6rem]">
                        {service.priceFrom}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex-1">
                    <h3 className="max-w-[14ch] font-serif text-[1.5rem] leading-[0.95] text-ink md:text-[1.8rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-[28ch] text-[0.92rem] leading-6 text-ink/68">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-black/8 pt-3">
                    <p className="text-[9px] uppercase tracking-[0.32em] text-ink/34">
                      Service
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex border-b border-black/60 pb-1 text-[9px] uppercase tracking-[0.32em] text-ink transition-opacity duration-300 hover:opacity-60"
                    >
                      Réserver
                    </a>
                  </div>
              </motion.article>
            ))}
          </div>

          {items.length > 3 ? (
            <div className="mt-4 flex items-center justify-center gap-2">
              {Array.from({ length: items.length - 2 }).map((_, index) => {
                const isActive = index === startIndex;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setStartIndex(index)}
                    aria-label={`Aller au slide ${index + 1}`}
                    className="h-2.5 rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? "2rem" : "0.6rem",
                      backgroundColor: isActive
                        ? artist.design.primaryColor
                        : "rgba(23, 19, 18, 0.16)"
                    }}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
