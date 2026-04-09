import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "@/components/SectionIntro";
import type { MakeupArtist } from "@/types/makeupArtist";

type VideosProps = {
  artist: MakeupArtist;
};

export function Videos({ artist }: VideosProps) {
  const videos = artist.videos?.slice(0, 3) ?? [];

  if (videos.length === 0) {
    return null;
  }

  return (
    <section
      id="videos"
      className="section-frame scroll-mt-24 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionIntro
            eyebrow="Motion"
            title="Des images en mouvement pour prolonger l'univers"
            description="Une sélection vidéo pour montrer la lumière, la matière et la tenue dans une lecture plus vivante que l'image fixe."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video, index) => (
            <FadeIn key={`${video.src}-${index}`} delay={index * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-[1.85rem] border border-black/6 bg-white/70 shadow-[0_18px_50px_rgba(67,45,31,0.09)]">
                <div className="relative">
                  <video
                    className="aspect-[4/5] w-full bg-black object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                  >
                    <source src={video.src} />
                  </video>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-serif text-[2rem] leading-[1.02] text-ink">{video.title}</p>
                  {video.description ? (
                    <p className="mt-3 text-base leading-8 text-ink/70">
                      {video.description}
                    </p>
                  ) : null}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
