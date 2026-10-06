import type { APIRoute } from "astro";
import { getPublishedCases, caseHref } from "../lib/cases";
import { isFixtureCase, publicRoutes } from "../config/launch";
import { productionOrigin } from "../data/site";
const escapeXML = (value: string) => value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char]!);
export const GET: APIRoute = async () => {
  const cases = (await getPublishedCases()).filter(entry => !isFixtureCase(entry));
  const entries = [...publicRoutes.map(path => `<url><loc>${new URL(path, productionOrigin).href}</loc></url>`),
    ...cases.map(entry => `<url><loc>${escapeXML(new URL(caseHref(entry), productionOrigin).href)}</loc><lastmod>${(entry.data.updated ?? entry.data.published).toISOString().slice(0, 10)}</lastmod></url>`)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join("")}</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
