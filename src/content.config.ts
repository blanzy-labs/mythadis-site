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

// FF-002: a single investigation collection; legacy field reports stay intact.
const score = z.number().min(0); // Exceptional cases may exceed 10.
const cases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cases" }),
  schema: z.object({
    case: z.number().int().positive(),
    title: z.string().trim().min(1),
    summary: z.string().trim().min(1),
    published: z.coerce.date(),
    visibility: z.enum(["draft", "published"]),
    preliminary_bs: score,
    featured: z.boolean(),
    experiment_performed: z.boolean().default(false),
    final_bs: score.optional(),
    verdict: z.string().trim().min(1).optional(),
    category: z.string().trim().min(1).optional(),
    tags: z.array(z.string().trim().min(1)).optional(),
    youtube_id: z.union([z.literal(""), z.string().regex(/^[A-Za-z0-9_-]{11}$/)]).optional(),
    rumble_url: z.union([z.literal(""), z.url().refine((value) => value.startsWith("https://"), "Use an HTTPS media URL")]).optional(),
    thumbnail: z.union([z.literal(""), z.string().regex(/^\/(?!\/)[^?#]+$/, "Use a local public image path")]).optional(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = {
  cases,
	"field-reports": fieldReports,
};
