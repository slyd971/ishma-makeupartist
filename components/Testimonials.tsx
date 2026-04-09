"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type TestimonialsProps = {
  artist: MakeupArtist;
};

export function Testimonials({ artist }: TestimonialsProps) {
  const testimonials = useMemo(
    () =>
      artist.testimonials.filter(
        (testimonial) =>
          testimonial.text.trim().length > 0 || Boolean(testimonial.imageSrc)
      ),
    [artist.testimonials]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (testimonials.length === 0) {
    return null;
  }

  const activeTestimonial = testimonials[activeIndex];

  function renderCard(testimonial: (typeof testimonials)[number], index: number, mobile = false) {
    const hasLongText = testimonial.text.length > 220;
    const isExpanded = expandedIndex === index;
    const hasText = testimonial.text.trim().length > 0;

    return (
      <article className="luxury-panel h-full overflow-hidden rounded-[0.85rem] border border-black/10 bg-white/45">
        {testimonial.imageSrc ? (
          <div className="relative aspect-[4/3] overflow-hidden border-b border-black/8">
            <Image
              src={testimonial.imageSrc}
              alt={testimonial.imageAlt ?? testimonial.name}
              fill
              sizes={mobile ? "100vw" : "(max-width: 1024px) 100vw, 33vw"}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,12,10,0.2),transparent_45%)]" />
          </div>
        ) : null}

        <div className="p-6 md:p-8">
          {hasText ? (
            <>
              <p className="font-serif text-[2rem] leading-[0.9] text-ink/16">“</p>
              <div className="relative mt-4">
                <p
                  className="text-[1rem] leading-8 text-ink/74 md:text-[1.04rem]"
                  style={
                    mobile && !isExpanded
                      ? {
                          display: "-webkit-box",
                          WebkitLineClamp: 5,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }
                      : undefined
                  }
                >
                  {testimonial.text}
                </p>
                {mobile && !isExpanded ? (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[rgba(246,238,232,0.98)] to-transparent" />
                ) : null}
              </div>
              {mobile && hasText && hasLongText ? (
                <button
                  type="button"
                  onClick={() =>
                    setExpandedIndex((current) => (current === index ? null : index))
                  }
                  className="mt-4 border-b border-black/35 pb-1 text-[10px] uppercase tracking-[0.22em] text-ink/66"
                >
                  {isExpanded ? "Voir moins" : "Voir plus"}
                </button>
              ) : null}
            </>
          ) : (
            <p className="font-serif text-[1.15rem] leading-[1.3] text-ink/62 md:text-[1.25rem]">
              Un retour en image, ajouté au portfolio comme trace sensible de l&apos;expérience.
            </p>
          )}

          <div className="mt-7 border-t border-black/8 pt-5">
            <p className="font-serif text-[1.45rem] leading-none text-ink md:text-[1.7rem]">
              {testimonial.name}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-ink/52">
              {testimonial.role}
            </p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <section
      id="testimonials"
      className="section-frame scroll-mt-24 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionIntro
            eyebrow="Références"
            title="Des retours clients qui prolongent l'expérience"
            description="Quelques mots choisis, accompagnés d'images, pour laisser transparaître la confiance, la douceur et la qualité du moment vécu."
          />
        </FadeIn>

        <div className="mt-10 lg:hidden">
          <FadeIn key={`${activeTestimonial.name}-${activeIndex}`}>
            {renderCard(activeTestimonial, activeIndex, true)}
          </FadeIn>

          {testimonials.length > 1 ? (
            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={`${testimonial.name}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Afficher le témoignage ${index + 1}`}
                    className="h-2.5 rounded-full transition-all duration-300"
                    style={{
                      width: activeIndex === index ? "2rem" : "0.6rem",
                      backgroundColor:
                        activeIndex === index
                          ? artist.design.primaryColor
                          : "rgba(23, 19, 18, 0.16)"
                    }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((current) =>
                      current === 0 ? testimonials.length - 1 : current - 1
                    )
                  }
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/72 text-ink"
                  aria-label="Voir le témoignage précédent"
                >
                  <span className="text-lg leading-none">‹</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((current) =>
                      current === testimonials.length - 1 ? 0 : current + 1
                    )
                  }
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/72 text-ink"
                  aria-label="Voir le témoignage suivant"
                >
                  <span className="text-lg leading-none">›</span>
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-10 hidden gap-5 lg:grid lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={`${testimonial.name}-${index}`} delay={index * 0.08}>
              {renderCard(testimonial, index)}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
