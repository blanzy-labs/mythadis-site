export type GameStatus = "In Development" | "Concept" | "Coming Soon" | "Released";
export type GameTheme = "ember" | "dungeon" | "city" | "depths" | "shattered";

export interface Game {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	status: GameStatus;
	featured: boolean;
	theme?: GameTheme;
	artwork?: {
		src: string;
		alt: string;
	};
}

// Copy and artwork await approved game specifications.
// The four Concept entries are editable design/test titles.
export const games: readonly Game[] = [
	{
		slug: "ember-vault",
		theme: "ember",
		title: "Ember Vault",
		tagline: "",
		description: "",
		status: "In Development",
		featured: true,
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
