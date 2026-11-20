import type { APIRoute } from "astro";
import { films } from "../data/films";
import { publishedFilms, filmHref } from "../lib/films";
import { publicRoutes, studioLaunchReady, studioIndexable } from "../config/launch";
import { productionOrigin } from "../data/site";
export const GET: APIRoute = () => {
  const routes = studioIndexable(studioLaunchReady, import.meta.env.CF_PAGES, import.meta.env.CF_PAGES_BRANCH)
    ? [...publicRoutes, ...publishedFilms(films).map(filmHref)] : [];
  const entries = routes.map(path => `<url><loc>${new URL(path, productionOrigin).href}</loc></url>`);
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join("")}</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
