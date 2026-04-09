import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/FadeIn";
import type { MakeupArtist } from "@/types/makeupArtist";

type HeroProps = {
  artist: MakeupArtist;
  template: "template-1" | "template-2" | "template-3";
};

function splitHeroName(name: string) {
  const parts = name.trim().split(/\s+/);

  if (parts.length <= 1) {
    return { primary: name.toUpperCase(), secondary: "" };
  }

  return {
    primary: parts[0].toUpperCase(),
    secondary: parts.slice(1).join(" ")
  };
}

function HeroHeading({
  primary,
  secondary,
  tone
}: {
  primary: string;
  secondary: string;
  tone: "light" | "dark";
}) {
  const textColor = tone === "light" ? "text-white" : "text-ink";
  const secondaryColor = tone === "light" ? "text-white/76" : "text-ink/58";

  return (
    <h1 className={`max-w-[10ch] font-serif leading-[0.88] ${textColor}`}>
      <span className="block uppercase text-[3.8rem] md:text-[6.6rem]">
        {primary}
      </span>
      {secondary ? (
        <span className={`mt-2 block whitespace-nowrap text-[1.2rem] font-medium uppercase tracking-[0.14em] md:text-[1.4rem] ${secondaryColor}`}>
          {secondary}
        </span>
      ) : null}
    </h1>
  );
}

function KpiBand({ artist, dark = false }: { artist: MakeupArtist; dark?: boolean }) {
  const stats = artist.stats.slice(0, 4);

  if (stats.length === 0) {
    return null;
  }

  return (
    <div
      className={`grid gap-0 overflow-hidden ${
        dark
          ? "border-x border-b border-white/10 bg-[rgba(14,11,11,0.98)] text-white"
          : "border border-black/8 bg-[rgba(255,252,248,0.96)] text-ink"
      } grid-cols-2 md:grid-cols-4`}
    >
      {stats.map((stat, index) => (
        <FadeIn
          key={stat.label}
          delay={0.08 + index * 0.06}
          className={`px-4 py-4 md:px-5 ${
            dark
              ? "border-white/8"
              : "border-black/8"
          } ${
            index % 2 === 0
              ? "border-r"
              : ""
          } ${
            index < 2
              ? "border-b"
              : ""
          } md:border-b-0 md:border-r-0 ${
            index < stats.length - 1
              ? dark
                ? "md:border-r md:border-white/8"
                : "md:border-r md:border-black/8"
              : ""
          } transition-transform duration-500 ease-out hover:-translate-y-1 md:px-6 md:py-5`}
        >
          <p
            className={`font-serif text-[1.35rem] leading-none md:text-[1.95rem] lg:text-[2.15rem] ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {stat.value}
          </p>
          <p
            className={`mt-2 max-w-[18ch] text-[9px] uppercase leading-4 tracking-[0.24em] md:text-[10px] md:leading-4 ${
              dark ? "text-white/72" : "text-ink/62"
            }`}
          >
            {stat.label}
          </p>
        </FadeIn>
      ))}
    </div>
  );
}

function FullPageHero({
  artist,
}: {
  artist: MakeupArtist;
}) {
  const { primary, secondary } = splitHeroName(artist.name);

  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-8 pt-22 md:px-12 md:pb-10 md:pt-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[0.65rem] bg-black">
          <div className="relative min-h-[78svh] md:min-h-[88svh]">
            <Image
              src={artist.hero.primaryImage}
              alt={artist.hero.primaryAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_18%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,9,8,0.76)_0%,rgba(12,9,8,0.45)_36%,rgba(12,9,8,0.14)_68%,rgba(12,9,8,0.18)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,transparent_18%,transparent_72%,rgba(0,0,0,0.24)_100%)]" />

            <div className="relative z-[1] flex min-h-[78svh] flex-col justify-end px-6 pb-24 pt-8 md:min-h-[88svh] md:px-10 md:pb-40 md:pt-10">
              <FadeIn>
                <div className="max-w-[46rem] translate-y-12 text-white md:translate-y-14">
                  <div className="-translate-y-8 md:-translate-y-10">
                    <HeroHeading primary={primary} secondary={secondary} tone="light" />
                  </div>
                  <p className="mt-6 hidden max-w-xl text-[0.9rem] uppercase tracking-[0.24em] text-white/74 md:mt-7 md:block md:text-[0.95rem]">
                    {artist.tagline}
                  </p>
                  <div className="mt-10 flex flex-col gap-3 sm:flex-row md:mt-18">
                    <Link
                      href={`mailto:${artist.social.email}`}
                      className="inline-flex w-fit items-center justify-center self-start rounded-full border border-[#e8d8cb] bg-[#eadccf] px-5 py-3.5 text-[10px] uppercase tracking-[0.32em] text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#efe3d8]"
                    >
                      Book now
                    </Link>
                    <Link
                      href={artist.social.instagram}
                      target="_blank"
                      className="inline-flex w-fit items-center justify-center self-start rounded-full border border-white/22 bg-white/10 px-5 py-3.5 text-[10px] uppercase tracking-[0.32em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/16"
                    >
                      View Instagram
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-5">
          <KpiBand artist={artist} />
        </div>
      </div>
    </section>
  );
}

function VideoHero({
  artist,
  renderTextBlock,
  accentGlowStyle
}: {
  artist: MakeupArtist;
  renderTextBlock: (compact?: boolean) => React.JSX.Element;
  accentGlowStyle: { backgroundColor: string };
}) {
  const videoSrc = artist.hero.videoSrc ?? artist.videos?.[0]?.src;
  const poster = artist.hero.videoPoster ?? artist.videos?.[0]?.poster ?? artist.hero.primaryImage;

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-4 pt-22 md:px-10 md:pb-6 md:pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent_42%)]" />
      <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full blur-3xl" style={accentGlowStyle} />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <FadeIn delay={0.12} className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[0.75rem] border border-white/40 bg-white/55 p-3 shadow-[0_28px_90px_rgba(39,26,18,0.11)] backdrop-blur">
              <div className="relative overflow-hidden rounded-[0.45rem]">
                {poster ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${poster})` }}
                  />
                ) : null}
                <div className="absolute inset-0 bg-black/10" />

                {videoSrc ? (
                  <video
                    key={videoSrc}
                    className="relative z-[1] aspect-[16/10] w-full bg-black/5 object-cover md:aspect-[16/8.6]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="auto"
                    poster={poster}
                    src={videoSrc}
                  />
                ) : (
                  <div className="relative z-[1] aspect-[16/10] w-full md:aspect-[16/8.6]">
                    <Image
                      src={artist.hero.primaryImage}
                      alt={artist.hero.primaryAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </FadeIn>

          <div className="order-2 lg:order-1">{renderTextBlock(true)}</div>
        </div>
      </div>
    </section>
  );
}

function CurrentHero({
  artist,
  renderTextBlock,
  accentGlowStyle,
  frameGlowStyle
}: {
  artist: MakeupArtist;
  renderTextBlock: (compact?: boolean) => React.JSX.Element;
  accentGlowStyle: { backgroundColor: string };
  frameGlowStyle: { backgroundColor: string };
}) {
  if (artist.hero.variant === "portrait-stack") {
    return (
      <section id="home" className="relative overflow-hidden px-6 pb-4 pt-22 md:px-10 md:pb-6 md:pt-24">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_55%)]" />
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full blur-3xl md:h-96 md:w-96" style={accentGlowStyle} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <div className="order-1 grid gap-5 md:grid-cols-[0.58fr_0.42fr] lg:order-2">
            <FadeIn delay={0.08}>
              <div className="relative overflow-hidden rounded-[0.65rem] bg-white/92 p-3 shadow-[0_28px_90px_rgba(39,26,18,0.11)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[0.35rem] md:aspect-[4/4.55]">
                  <Image
                    src={artist.hero.primaryImage}
                    alt={artist.hero.primaryAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-5">
              <FadeIn delay={0.16}>
                <div className="rounded-[0.65rem] border border-black/5 bg-white/92 p-6 shadow-[0_18px_48px_rgba(39,26,18,0.08)]">
                  <p className="font-serif text-[2.2rem] leading-[1.02] text-ink">
                    Modern complexion work with fashion-led restraint.
                  </p>
                </div>
              </FadeIn>
              {artist.hero.secondaryImage ? (
                <FadeIn delay={0.22}>
                  <div className="relative overflow-hidden rounded-[0.65rem] bg-white/92 p-3 shadow-[0_18px_48px_rgba(39,26,18,0.08)]">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[0.35rem] md:aspect-[3/3.6]">
                      <Image
                        src={artist.hero.secondaryImage}
                        alt={artist.hero.secondaryAlt ?? artist.hero.primaryAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 24vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </FadeIn>
              ) : null}
            </div>
          </div>

          <div className="order-2 lg:order-1">
            {renderTextBlock(true)}
            <div className="mt-6">
              <KpiBand artist={artist} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-4 pt-22 md:px-10 md:pb-6 md:pt-24">
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_55%)]" />
      <div className="absolute right-[-8rem] top-10 h-72 w-72 rounded-full blur-3xl md:h-96 md:w-96" style={accentGlowStyle} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
        <FadeIn delay={0.12} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -inset-6 rounded-[0.75rem] blur-3xl" style={frameGlowStyle} />
            <div className="relative overflow-hidden rounded-[0.65rem] bg-white/92 p-3 shadow-[0_28px_90px_rgba(39,26,18,0.11)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[0.35rem] md:aspect-[4/4.5]">
                <Image
                  src={artist.hero.primaryImage}
                  alt={artist.hero.primaryAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="order-2 flex flex-col lg:order-1 lg:self-stretch">
          <div className="lg:flex lg:min-h-full lg:flex-col lg:justify-between lg:pt-6">
            {renderTextBlock()}
            <div className="mt-8 lg:mt-10">
              <KpiBand artist={artist} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero({ artist, template }: HeroProps) {
  const { primary, secondary } = splitHeroName(artist.name);
  const ctaPrimaryStyle = {
    backgroundColor: artist.design.primaryColor
  };
  const accentGlowStyle = {
    backgroundColor: `${artist.design.primaryColor}14`
  };
  const frameGlowStyle = {
    backgroundColor: `${artist.design.primaryColor}12`
  };

  const renderTextBlock = (compact = false) => (
    <FadeIn className={compact ? "max-w-xl" : "max-w-2xl"}>
      <div className="space-y-5 md:space-y-6">
        <HeroHeading primary={primary} secondary={secondary} tone="dark" />
        <p className="hidden max-w-lg text-[0.9rem] uppercase tracking-[0.28em] text-ink/58 md:block md:text-[0.95rem]">
          {artist.tagline}
        </p>
        <p className="max-w-xl text-[0.98rem] leading-7 text-ink/72 md:text-[1.02rem]">
          {artist.intro}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10">
        <Link
          href={`mailto:${artist.social.email}`}
          className="inline-flex items-center justify-center rounded-full px-7 py-4 text-[10px] uppercase tracking-[0.32em] text-white transition-transform duration-300 hover:-translate-y-0.5"
          style={ctaPrimaryStyle}
        >
          Book now
        </Link>
        <Link
          href={artist.social.instagram}
          target="_blank"
          className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-4 text-[10px] uppercase tracking-[0.32em] text-ink transition-colors duration-300 hover:border-black/20 hover:bg-black/[0.02]"
        >
          View Instagram
        </Link>
      </div>
    </FadeIn>
  );

  if (template === "template-1") {
    return <FullPageHero artist={artist} />;
  }

  if (template === "template-3") {
    return (
      <VideoHero
        artist={artist}
        renderTextBlock={renderTextBlock}
        accentGlowStyle={accentGlowStyle}
      />
    );
  }

  return (
    <CurrentHero
      artist={artist}
      renderTextBlock={renderTextBlock}
      accentGlowStyle={accentGlowStyle}
      frameGlowStyle={frameGlowStyle}
    />
  );
}
