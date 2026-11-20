import { brand, firstCase } from "./brand.ts";
// Change only in a founder-approved release after every launch-checklist gate passes.
export const launchReady = false;
// Independent of the legacy investigation gate. Enable only with founder release approval.
export const studioLaunchReady = false;
export const publicRoutes = ["/", "/watch/", "/about/"];
export const isStudioPath = (path: string) => publicRoutes.includes(path) || /^\/films\/[a-z0-9]+(?:-[a-z0-9]+)*\/$/.test(path);
export const studioIndexable = (ready: boolean, pages: string | undefined, branch: string | undefined) => ready && pages === "1" && branch === "main";
export const siteMetadata = {
  title: `${brand.name} | AI Video Production Studio`,
  description: "Original short films, unusual worlds and animated stories created through AI tools and human imagination.",
};
// Existing QA identities, kept outside the approved case schema.
export const fixtureCaseIds = new Set([
  firstCase.id, "017-ai-investment-6732", "016-ai-legal-contracts", "015-five-minute-game",
  "014-ai-stock-predictions", "013-crypto-bot", "018-unpublished-test",
]);
interface LaunchCase { id: string; body?: string; data: { visibility: string; featured: boolean } }
export const isFixtureCase = (entry: Pick<LaunchCase, "id" | "body">) =>
  fixtureCaseIds.has(entry.id) || !!entry.body?.includes("FF-002 mock fixture");
export function assertLaunchContent(entries: LaunchCase[]) {
  const published = entries.filter(entry => entry.data.visibility === "published");
  if (!published.length || published.some(isFixtureCase)) throw new Error("Production launch blocked: real published cases are required and published fixtures must be drafted or removed.");
  if (published.filter(entry => entry.data.featured).length !== 1) throw new Error("Production launch requires exactly one real featured published case.");
}
