import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { productionOrigin } from "../data/site";

const staticRoutes = [
	"/",
	"/why-mythadis/",
	"/proof/",
	"/current-state/",
	"/field-reports/",
];

export const GET: APIRoute = async () => {
	const reports = await getCollection(
		"field-reports",
		({ data }) => data.status === "published" && data.hasPage,
	);

	const staticEntries = staticRoutes.map(
		(path) => `<url><loc>${new URL(path, productionOrigin).toString()}</loc></url>`,
	);
	const reportEntries = reports.map(
		({ data }) =>
			`<url><loc>${new URL(`/field-reports/${data.slug}/`, productionOrigin).toString()}</loc>${
				data.publicationDate ? `<lastmod>${data.publicationDate}</lastmod>` : ""
			}</url>`,
	);

	const body = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...staticEntries,
		...reportEntries,
		"</urlset>",
	].join("");

	return new Response(body, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
};
