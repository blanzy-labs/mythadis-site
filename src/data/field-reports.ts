export type FieldReportStatus =
	| "in-preparation"
	| "in-review"
	| "published"
	| "revised"
	| "archived";

export interface FieldReportCategory {
	name: string;
	description: string;
}

export const fieldReportStatusLabels: Record<FieldReportStatus, string> = {
	"in-preparation": "IN PREPARATION",
	"in-review": "IN REVIEW",
	published: "PUBLISHED",
	revised: "REVISED",
	archived: "ARCHIVED",
};

export const fieldReportPrinciples = [
	{
		name: "The Question",
		body: "What problem, decision, or uncertainty prompted the work?",
	},
	{
		name: "The Work",
		body: "What was built, tested, compared, or investigated?",
	},
	{
		name: "The Evidence",
		body: "What was observed, measured, or preserved?",
	},
	{
		name: "The Lesson",
		body: "What changed as a result, and what remains unresolved?",
	},
];

export const fieldReportCategories: FieldReportCategory[] = [
	{
		name: "Foundations",
		description: "The principles, assumptions, and doctrines underlying Mythadis.",
	},
	{
		name: "Distributed Systems",
		description:
			"Peer-to-peer networking, distributed storage, recovery, reliability, and coordination.",
	},
	{
		name: "AI and Intelligence",
		description: "Multi-model systems, human-AI coordination, critique, synthesis, and evidence.",
	},
	{
		name: "Engineering",
		description: "Implementation decisions, validation methods, failures, and lessons.",
	},
	{
		name: "Mission Research",
		description: "Research infrastructure and future domain-specific Mission Swarms.",
	},
	{
		name: "Enterprise and Institutions",
		description:
			"Lessons from complex organizations, governance, security, adoption, and long-lived systems.",
	},
];
