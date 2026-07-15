export type FieldReportStatus = "in-preparation" | "published" | "revised" | "archived";

export interface FieldReportPreview {
	id: string;
	number: string;
	title: string;
	category: string;
	status: FieldReportStatus;
	summary: string;
	plannedFocus: string[];
	href?: string;
}

export interface FieldReportCategory {
	name: string;
	description: string;
}

export const fieldReportStatusLabels: Record<FieldReportStatus, string> = {
	"in-preparation": "IN PREPARATION",
	published: "PUBLISHED",
	revised: "REVISED",
	archived: "ARCHIVED",
};

export const fieldReportPreviews: FieldReportPreview[] = [
	{
		id: "why-unity-without-centralization",
		number: "001",
		title: "Why Unity Without Centralization",
		category: "FOUNDATIONS",
		status: "in-preparation",
		summary:
			"Why shared purpose should not require one company, institution, government, or AI system to possess or control the whole network.",
		plannedFocus: [
			"Coordination versus ownership",
			"Local agency",
			"Shared missions",
			"The limits of centralization",
			"Why decentralization alone is insufficient",
		],
	},
	{
		id: "building-the-first-three-node-swarm",
		number: "002",
		title: "Building the First Three-Node Swarm",
		category: "DISTRIBUTED SYSTEMS",
		status: "in-preparation",
		summary:
			"An engineering account of the first private multi-node Mythadis Swarm trials, including cross-platform operation, peer connectivity, early data-path experiments, and lessons from the test environment.",
		plannedFocus: [
			"Heterogeneous nodes",
			"Peer discovery",
			"Cross-subnet communication",
			"Early distributed-data testing",
			"Limitations and next validation Gates",
		],
	},
];

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
