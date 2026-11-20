export interface Film {
  slug: string;
  title: string;
  synopsis: string;
  status: "draft" | "published";
  youtubeId?: string;
  thumbnail?: string;
  date?: string;
  credit?: string;
}
export const defaultFilmCredit = "Created by Mythadis TY Creative Producer";
export const filmHref = (film: Film) => `/films/${film.slug}/`;
export function publishedFilms(entries: Film[]): Film[] {
  const slugs = new Set<string>();
  for (const film of entries) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(film.slug) || slugs.has(film.slug)) throw new Error(`Invalid or duplicate film slug: ${film.slug}`);
    slugs.add(film.slug);
    if (!["draft", "published"].includes(film.status)) throw new Error(`Invalid film status: ${film.slug}`);
    if (film.youtubeId && !/^[A-Za-z0-9_-]{11}$/.test(film.youtubeId)) throw new Error(`Invalid YouTube ID: ${film.slug}`);
    if (film.status === "published" && (!film.youtubeId || !film.title.trim() || !film.synopsis.trim())) throw new Error(`Published film needs a title, synopsis and YouTube ID: ${film.slug}`);
    if (film.date && (!/^\d{4}-\d{2}-\d{2}$/.test(film.date) || !Number.isFinite(Date.parse(film.date)) || new Date(film.date).toISOString().slice(0, 10) !== film.date)) throw new Error(`Invalid film date: ${film.slug}`);
    if (film.thumbnail && !/^\/(?!\/)[^?#\s]+\.(?:png|jpe?g|webp)$/i.test(film.thumbnail)) throw new Error(`Use a local film thumbnail: ${film.slug}`);
    if (film.credit !== undefined && !film.credit.trim()) throw new Error(`Film credit cannot be blank: ${film.slug}`);
  }
  // Record order is the editorial order; first published film is featured.
  return entries.filter(film => film.status === "published");
}
