"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type PortfolioProps = {
  artist: MakeupArtist;
  fullPage?: boolean;
};

export function Portfolio({
  artist,
  fullPage = false
}: PortfolioProps) {
  const categories = ["Tous", ...new Set(artist.portfolio.map((item) => item.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [startIndex, setStartIndex] = useState(0);

  const items =
    activeCategory === "Tous"
      ? artist.portfolio
      : artist.portfolio.filter((item) => item.category === activeCategory);
  const visibleItems = fullPage ? items : items.slice(startIndex, startIndex + 3);

  useEffect(() => {
    setStartIndex(0);
  }, [activeCategory]);

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
      id="portfolio"
      className="section-frame scroll-mt-24 px-6 py-12 md:px-10 md:py-18"
    >
      <div className="mx-auto max-w-7xl">
        {!fullPage ? (
          <SectionIntro
            eyebrow="Lookbook"
            title="Son univers en images"
            description="Mariage, glamour naturel, beauté éditoriale ou coiffure : découvrez le pouvoir de sublimation d'Ishma."
          />
        ) : null}

        <div className={`${fullPage ? "mt-0" : "mt-6"} flex flex-wrap items-center gap-2`}>
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className="rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.22em] transition-colors duration-300"
                style={{
                  borderColor: isActive ? artist.design.primaryColor : "rgba(23, 19, 18, 0.08)",
                  backgroundColor: isActive ? artist.design.primaryColor : "rgba(255,250,245,0.66)",
                  color: isActive ? "#ffffff" : "rgba(23, 19, 18, 0.8)"
                }}
              >
                {category}
              </button>
            );
          })}
          {!fullPage ? (
            <Link
              href="/gallery"
              className="ml-auto inline-flex items-center justify-center rounded-full border border-black/10 bg-white/72 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-white"
            >
              Voir toute la galerie
            </Link>
          ) : null}
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between gap-4">
            <p className="magazine-meta">
              {items.length} visuels sélectionnés
            </p>
            {!fullPage ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={!canGoPrevious}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/72 text-ink transition disabled:cursor-not-allowed disabled:opacity-35"
                  aria-label="Voir les visuels précédents"
                >
                  <span className="text-lg leading-none">‹</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canGoNext}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/72 text-ink transition disabled:cursor-not-allowed disabled:opacity-35"
                  aria-label="Voir les visuels suivants"
                >
                  <span className="text-lg leading-none">›</span>
                </button>
              </div>
            ) : (
              <Link
                href="/#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/72 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-white"
              >
                Retour au profil
              </Link>
            )}
          </div>

          <div className={`mt-5 grid gap-3 ${fullPage ? "md:grid-cols-2 xl:grid-cols-3" : "lg:grid-cols-3"}`}>
            {visibleItems.map((item, index) => (
              <motion.article
                key={`${item.src}-${activeCategory}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-[0.8rem] border border-black/10 bg-white/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,12,10,0.78)] via-[rgba(17,12,10,0.14)] to-transparent opacity-95" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  {fullPage ? (
                    <p className="max-w-[14rem] font-serif text-[1rem] leading-[1.08] text-white md:text-[1.15rem]">
                      {item.alt}
                    </p>
                  ) : (
                    <>
                      <p className="magazine-meta text-white/72">{item.category}</p>
                      <p className="mt-2 max-w-[14rem] font-serif text-[1.15rem] leading-[1.04] text-white md:text-[1.35rem]">
                        {item.alt}
                      </p>
                    </>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {!fullPage && items.length > 3 ? (
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
