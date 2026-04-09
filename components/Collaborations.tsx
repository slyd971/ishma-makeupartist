import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type CollaborationsProps = {
  artist: MakeupArtist;
};

export function Collaborations({ artist }: CollaborationsProps) {
  if (artist.collaborations.length === 0) {
    return null;
  }

  return (
    <section className="section-frame px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl magazine-panel px-6 py-10 md:px-10">
        <FadeIn>
          <SectionIntro
            eyebrow="Collaborations"
            title="Quelques collaborations et contextes de travail"
            description="Marques, studios, médias ou partenaires créatifs : une présence mesurée, montrée avec sobriété."
          />
        </FadeIn>

        <div className="mt-8 grid gap-0 border-t border-black/10 md:grid-cols-2 xl:grid-cols-5">
          {artist.collaborations.map((collaboration, index) => (
            <FadeIn key={collaboration} delay={index * 0.06}>
              <div className="border-b border-r border-black/10 px-5 py-6 text-center text-sm uppercase tracking-[0.25em] text-ink/60">
                {collaboration}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
