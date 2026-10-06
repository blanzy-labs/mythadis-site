import { getCollection, type CollectionEntry } from "astro:content";

export type CaseEntry = CollectionEntry<"cases">;
export const caseNumber = (number: number) => String(number).padStart(3, "0");
export const caseHref = (entry: CaseEntry) => `/cases/${entry.id}/`;
export const caseDate = (date: Date) => new Intl.DateTimeFormat("en-IE", {
  day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
}).format(date);

export async function getPublishedCases(): Promise<CaseEntry[]> {
  const entries = await getCollection("cases");
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
