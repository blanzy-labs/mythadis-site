export type GameStatus = "In Development" | "Concept" | "Coming Soon" | "Released";
export type GameTheme = "ember" | "dungeon" | "city" | "depths" | "shattered";

export interface GameArtwork {
	src: string;
	alt: string;
	width: number;
	height: number;
	objectPosition?: string;
	mobileObjectPosition?: string;
	sources?: Array<{
		srcset: string;
		type: "image/avif" | "image/webp" | "image/jpeg";
		media?: string;
	}>;
}

export interface Game {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	status: GameStatus;
	featured: boolean;
	theme?: GameTheme;
	artwork?: GameArtwork;
	feature?: { eyebrow: string; ctaLabel: string; };
}

// Ember Vault copy is approved for MYTH-WEB-004; artwork remains pending.
// The four Concept entries are editable design/test titles.
export const games: readonly Game[] = [
	{
		slug: "ember-vault",
		theme: "ember",
		title: "Ember Vault",
		tagline: "Some doors were sealed for a reason.",
		description: "Descend into a forgotten stronghold where ancient halls, buried threats, and shifting paths stand between you and whatever still waits below.",
		status: "In Development",
		featured: true,
		feature: { eyebrow: "First Realm", ctaLabel: "Enter Ember Vault" },
	},
	{
		slug: "dungeon-crawl",
		theme: "dungeon",
		title: "Dungeon Crawl",
		tagline: "",
		description: "",
		status: "Concept",
		featured: false,
	},
	{
		slug: "free-city",
		theme: "city",
		title: "Free City",
		tagline: "",
		description: "",
		status: "Concept",
		featured: false,
	},
	{
		slug: "black-depths",
		theme: "depths",
		title: "Black Depths",
		tagline: "",
		description: "",
		status: "Concept",
		featured: false,
	},
	{
		slug: "shattered-hope",
		theme: "shattered",
		title: "Shattered Hope",
		tagline: "",
		description: "",
		status: "Concept",
		featured: false,
	},
];
