type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionIntroProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "";

  return (
    <div className={`flex max-w-[42rem] flex-col ${alignment}`}>
      <div className="flex items-center gap-4">
        <span className="magazine-meta">{eyebrow}</span>
        <span className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(23,19,18,0.16),transparent)] md:block" />
      </div>
      <h2 className="mt-5 max-w-[22ch] font-serif text-[1.9rem] leading-[1] text-ink md:max-w-[20ch] md:text-[3rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-[0.98rem] leading-8 text-ink/68 md:text-[1.08rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
