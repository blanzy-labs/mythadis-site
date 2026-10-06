import { getCollection, type CollectionEntry } from "astro:content";

import { launchReady, assertLaunchContent } from "../config/launch";

export type CaseEntry = CollectionEntry<"cases">;
export const caseNumber = (number: number) => String(number).padStart(3, "0");
export const caseHref = (entry: CaseEntry) => `/cases/${entry.id}/`;
export const caseDate = (date: Date) => new Intl.DateTimeFormat("en-IE", {
  day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
}).format(date);

export async function getPublishedCases(): Promise<CaseEntry[]> {
  const entries = await getCollection("cases");
  if (launchReady) assertLaunchContent(entries);
  const numbers = new Map<number, string>();
  for (const entry of entries) {
    const previous = numbers.get(entry.data.case);
    if (previous) throw new Error(`Duplicate CASE ${entry.data.case}: ${previous} and ${entry.id}`);
    numbers.set(entry.data.case, entry.id);
  }
  const published = entries.filter((entry) => entry.data.visibility === "published")
    .sort((a, b) => b.data.case - a.data.case);
  const featured = published.filter((entry) => entry.data.featured);
  if (featured.length !== 1) {
    throw new Error(`Expected exactly one featured published case; found ${featured.length}: ${featured.map((entry) => entry.id).join(", ") || "none"}`);
  }
  return published;
}

export async function getFeaturedCase(): Promise<CaseEntry> {
  return (await getPublishedCases()).find((entry) => entry.data.featured)!;
}

export async function getLatestCases(limit = 4): Promise<CaseEntry[]> {
  return (await getPublishedCases()).filter((entry) => !entry.data.featured).slice(0, limit);
}

// The input is the validated, published-only list from getPublishedCases().
export function getRelatedCases(current: CaseEntry, published: CaseEntry[], limit = 3): CaseEntry[] {
  const tags = new Set(current.data.tags ?? []);
  const tier = (entry: CaseEntry) => {
    if (current.data.category && entry.data.category === current.data.category) return 0;
    if (entry.data.tags?.some((tag) => tags.has(tag))) return 1;
    return 2;
  };
  return published.filter((entry) => entry.id !== current.id && entry.data.visibility === "published")
    .sort((a, b) => tier(a) - tier(b) || b.data.case - a.data.case).slice(0, limit);
}

export function getAdjacentCases(current: CaseEntry, published: CaseEntry[]) {
  const ordered = published.filter((entry) => entry.data.visibility === "published")
    .sort((a, b) => a.data.case - b.data.case);
  const index = ordered.findIndex((entry) => entry.id === current.id);
  return {
    previous: index > 0 ? ordered[index - 1] : undefined,
    next: index >= 0 ? ordered[index + 1] : undefined,
  };
}
