import makeupArtistsJson from "@/data/makeupArtists.json";
import type { MakeupArtist } from "@/types/makeupArtist";

export const makeupArtists = makeupArtistsJson as MakeupArtist[];
export const makeupArtist = makeupArtists[0];

export function getMakeupArtistBySlug(slug: string): MakeupArtist | undefined {
  return makeupArtists.find((artist) => artist.slug === slug);
}

export function getMakeupArtistSlugs(): string[] {
  return makeupArtists.map((artist) => artist.slug);
}

export function getDefaultMakeupArtist(): MakeupArtist | undefined {
  return makeupArtist;
}
