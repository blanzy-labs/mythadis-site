import type { ImageMetadata } from "astro";
import emberVaultArt from "../assets/games/ember-vault.png";

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
	keyArt?: ImageMetadata;
	feature?: { eyebrow: string; ctaLabel: string; };
}

// Founder-supplied key art and copy for MYTH-WEB-RESET-001.
// The four Concept entries are editable design/test titles.
export const games: readonly Game[] = [
	{
		slug: "ember-vault",
		theme: "ember",
		title: "Ember Vault",
		tagline: "",
		description: "An ancient vault waits beyond the falls — full of danger, secrets, and the promise of treasure.",
		status: "In Development",
		featured: true,
		feature: { eyebrow: "Featured Game", ctaLabel: "Enter Ember Vault" },
		keyArt: emberVaultArt,
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
