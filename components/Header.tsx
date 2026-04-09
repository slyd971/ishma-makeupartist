"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { pressKitNavigation } from "@/data/navigation";
import type { MakeupArtist } from "@/types/makeupArtist";

type HeaderProps = {
  artist: MakeupArtist;
};

export function Header({ artist }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      const isMobile = window.innerWidth < 1024;

      if (Math.abs(delta) < 8) return;

      if (isMobile) {
        setMenuOpen(false);
      }

      const shouldBeCompact = currentScrollY >= 20;

      setIsHeaderCompact(shouldBeCompact);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileMenu = menuOpen && (
    <div className="fixed inset-x-0 top-[54px] bottom-0 z-[100] bg-[#fcfaf8] lg:hidden">
      <nav className="flex flex-col items-end gap-3 px-4 pb-5 pt-4 text-right">
        {pressKitNavigation.items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="text-[11px] uppercase tracking-[0.26em] text-ink/72 transition hover:text-ink"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 md:mt-4 ${
          isHeaderCompact ? "px-0 md:px-8" : "px-0 md:px-6"
        }`}
      >
        <div
          className={`grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-x-2 border-b border-black/8 backdrop-blur-2xl transition-all duration-300 lg:grid-cols-[auto_1fr_auto] lg:gap-x-0 lg:rounded-[1.1rem] lg:border ${
            isHeaderCompact
              ? "min-h-[54px] bg-[rgba(252,250,248,0.98)] px-4 py-2.5 shadow-none md:min-h-[58px] md:px-6 md:py-3 md:shadow-[0_14px_36px_rgba(33,22,17,0.08)]"
              : "min-h-[58px] bg-[rgba(252,250,248,0.98)] px-4 py-2.5 shadow-none md:min-h-[70px] md:px-7 md:py-4 md:shadow-[0_16px_42px_rgba(33,22,17,0.06)]"
          }`}
        >
          <div className="flex min-w-0 items-center gap-3 pr-2 md:gap-5">
            <Link href="#home" className="min-w-0">
              <div className="min-w-0 -translate-y-0.5 md:-translate-y-1">
                <div
                  className={`truncate font-serif text-ink transition-all duration-300 ${
                    isHeaderCompact ? "text-[0.88rem] md:text-[1.18rem]" : "text-[0.95rem] md:text-[1.38rem]"
                  }`}
                >
                  {artist.name}
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden min-w-0 items-center justify-center gap-7 overflow-x-auto px-6 whitespace-nowrap text-[9px] uppercase tracking-[0.34em] text-ink/56 lg:flex">
            {pressKitNavigation.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 transition hover:text-ink hover:opacity-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:gap-3">
            <a
              href={pressKitNavigation.cta.href}
              className={`hidden shrink-0 items-center justify-center rounded-full bg-ink px-4 py-2.5 text-[9px] uppercase tracking-[0.28em] text-white transition-all duration-300 hover:opacity-85 lg:inline-flex ${
                isHeaderCompact
                  ? "min-h-[2.15rem]"
                  : "min-h-[2.35rem]"
              }`}
            >
              {pressKitNavigation.cta.label}
            </a>

            <a
              href={pressKitNavigation.cta.href}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-full bg-ink px-2.5 py-1.5 text-[8px] uppercase tracking-[0.14em] text-white transition-all duration-300 hover:opacity-85 lg:hidden ${
                isHeaderCompact
                  ? "min-h-[1.9rem]"
                  : "min-h-[1.95rem]"
              }`}
            >
              {pressKitNavigation.cta.label}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-black/8 bg-white/72 text-ink transition hover:bg-white lg:hidden"
              aria-label={
                menuOpen
                  ? pressKitNavigation.closeMenuLabel
                  : pressKitNavigation.openMenuLabel
              }
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M4 8h16M4 12h16M4 16h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenu}
    </header>
  );
}
