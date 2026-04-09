import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type WorkKitProps = {
  artist: MakeupArtist;
};

export function WorkKit({ artist }: WorkKitProps) {
  if (!artist.workKit || artist.workKit.brands.length === 0) {
    return null;
  }

  return (
    <section
      id="work-kit"
      className="section-frame scroll-mt-24 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl magazine-panel px-5 py-7 md:px-8 md:py-10">
        <FadeIn>
          <SectionIntro
            eyebrow="Méthode"
            title="Une méthode de travail pensée pour la peau, la tenue et le confort"
            description={artist.workKit.note}
          />
        </FadeIn>

        <div className="mt-6 grid grid-cols-2 gap-0 border-t border-black/10 xl:grid-cols-4">
          {artist.workKit.brands.map((brand, index) => (
            <FadeIn key={brand} delay={index * 0.05}>
              <div className="border-b border-r border-black/10 px-3 py-3 text-center md:px-4 md:py-5">
                <span className="font-serif text-[1.15rem] leading-tight text-ink md:text-[1.9rem]">
                  {brand}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
