import Image from "next/image";

import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type BeforeAfterProps = {
  artist: MakeupArtist;
};

export function BeforeAfter({ artist }: BeforeAfterProps) {
  const transformations = artist.beforeAfter ?? [];
  const videoSrc = artist.hero.videoSrc ?? artist.videos?.[0]?.src;
  const videoPoster = "/ishma/gallery-mariage-2.jpeg";

  if (transformations.length === 0) {
    return null;
  }

  return (
    <section
      id="before-after"
      className="section-frame scroll-mt-24 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionIntro
            eyebrow="Transformation"
            title="Avant / après en images"
            description="Trois mises en beauté pour voir comment Ishma révèle, équilibre et sublime chaque visage avec précision."
          />
        </FadeIn>

        <FadeIn className="mt-10">
          <article className="luxury-panel overflow-hidden rounded-[1rem] border border-black/10 bg-white/45 p-4 md:p-5">
            <div className="grid gap-4 lg:items-start lg:grid-cols-[0.92fr_1.08fr]">
              <div className="self-start overflow-hidden rounded-[0.8rem] border border-black/8 bg-white/55">
                <div className="border-b border-black/8 px-4 py-4">
                  <p className="font-serif text-[1.45rem] leading-[1] text-ink md:text-[1.7rem]">
                    Mise en beauté mariée
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/62">
                    Une mise en beauté de mariée filmée en conditions réelles, pour voir la douceur du glow, la tenue du maquillage et l'élégance du résultat.
                  </p>
                </div>
                {videoSrc ? (
                  <video
                    className="aspect-[4/5] w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={videoPoster}
                  >
                    <source src={videoSrc} />
                  </video>
                ) : (
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={artist.hero.primaryImage}
                      alt={artist.hero.primaryAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:h-full">
                {transformations.slice(0, 2).map((item, index) => (
                  <FadeIn key={`${item.title}-${index}`} delay={index * 0.08}>
                    <div className="flex h-full flex-col overflow-hidden rounded-[0.8rem] border border-black/8 bg-white/55">
                      <div className="border-b border-black/8 px-4 py-4">
                        <p className="font-serif text-[1.45rem] leading-[1] text-ink md:text-[1.7rem]">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-ink/62">
                          {item.context}
                        </p>
                      </div>

                      <div className="grid flex-1 gap-3 p-3">
                        <div className="overflow-hidden rounded-[0.7rem] border border-black/6 bg-white/70">
                          <div className="px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-ink/46">
                            Avant
                          </div>
                          <div className="relative aspect-[4/4.2]">
                            <Image
                              src={item.beforeSrc}
                              alt={item.beforeAlt}
                              fill
                              sizes="(max-width: 1024px) 100vw, 24vw"
                              className="object-cover"
                            />
                          </div>
                        </div>

                        <div className="overflow-hidden rounded-[0.7rem] border border-black/6 bg-white/70">
                          <div className="px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-ink/46">
                            Après
                          </div>
                          <div className="relative aspect-[4/4.2]">
                            <Image
                              src={item.afterSrc}
                              alt={item.afterAlt}
                              fill
                              sizes="(max-width: 1024px) 100vw, 24vw"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
