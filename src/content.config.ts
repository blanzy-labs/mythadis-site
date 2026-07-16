import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const fieldReports = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/field-reports" }),
	schema: z.object({
		number: z.string(),
		title: z.string(),
		slug: z.string(),
		category: z.string(),
		status: z.enum(["in-preparation", "in-review", "published", "revised", "archived"]),
		summary: z.string(),
		description: z.string(),
		plannedFocus: z.array(z.string()),
		hasPage: z.boolean().default(false),
		publicationDate: z.string().optional(),
		revisedDate: z.string().optional(),
	}),
});

export const collections = {
	"field-reports": fieldReports,
};
