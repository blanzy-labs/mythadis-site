export type GameStatus = "In Development" | "Concept";

export interface Game {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	status: GameStatus;
	featured: boolean;
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
		title: "Ember Vault",
		tagline: "",
		description: "",
		status: "In Development",
		featured: true,
	},
	{
		slug: "dungeon-crawl",
		title: "Dungeon Crawl",
		tagline: "",
		description: "",
		status: "Concept",
		featured: false,
	},
	{
		slug: "free-city",
		title: "Free City",
		tagline: "",
		description: "",
		status: "Concept",
		featured: false,
	},
	{
		slug: "black-depths",
		title: "Black Depths",
		tagline: "",
		description: "",
		status: "Concept",
		featured: false,
	},
	{
		slug: "shattered-hope",
		title: "Shattered Hope",
		tagline: "",
		description: "",
		status: "Concept",
		featured: false,
	},
];
