export interface SiteNavItem {
	label: string;
	href: string;
}

export const productionOrigin = "https://mythadis.com";
export const linkedInUrl = "https://ie.linkedin.com/in/mrblanzy";
export const blanzyLabsGitHubUrl = "https://github.com/blanzy-labs";

export const siteNavItems: SiteNavItem[] = [
	{ label: "Home", href: "/" },
	{ label: "Platform", href: "/#platform" },
	{ label: "Missions", href: "/#mission-example" },
	{ label: "Proof", href: "/proof/" },
	{ label: "Current State", href: "/current-state/" },
	{ label: "Field Reports", href: "/field-reports/" },
	{ label: "Collaborate", href: "/#collaborate" },
];
