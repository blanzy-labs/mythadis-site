export type StatusTone = "blue" | "amber" | "green" | "plum";

export interface StatusItem {
	label: string;
	status: string;
	tone: StatusTone;
	summary: string;
	evidence: string;
	limitation: string;
	related: string;
	nextGate: string;
}

export interface SimpleStatusItem {
	name: string;
	status: string;
	tone: StatusTone;
	body: string;
	mustProve?: string;
}

export const currentStateMeta = {
	version: "0.2",
	lastReviewedLabel: "AUGUST 10, 2026",
	status: "PRIVATE INTEGRATED ALPHA",
	release: "MWEB-010",
};

export const statusSummary = [
	"PRIVATE INTEGRATED ALPHA",
	"END-TO-END MISSION PATH DEMONSTRATED",
	"PHYSICAL MULTI-NODE SWARM DEMONSTRATED",
	"HUMAN-GOVERNED OPERATOR WORKFLOW DEMONSTRATED",
	"NOT PRODUCTION-READY",
];

export const demonstratedCapabilities: StatusItem[] = [
	{
		label: "Conversational Mission Design",
		status: "DEMONSTRATED ALPHA",
		tone: "green",
		summary: "Operator supports persistent structured mission-design sessions with validation, revision, freezing, and reviewed Mission Control intake.",
		evidence: "OPERATOR-008 passed 41 Rust tests, 29 adapter tests, restart-persistence validation, and immutable frozen-design checks; MC-018 validated native intake and browser behavior.",
		limitation: "Operator remains non-authoritative and cannot approve, execute, or call MDAP or Swarm directly.",
		related: "/proof/",
		nextGate: "Pressure-test mission design against real research workflows without expanding the authority boundary.",
	},
	{
		label: "Integrated Mission Lifecycle",
		status: "DEMONSTRATED ALPHA",
		tone: "green",
		summary: "Mission Control coordinates configuration, discovery, candidate review, acquisition, Swarm handoff, placement, retrieval, analysis, and result review.",
		evidence: "MC-016 validated an eight-stage guided mission view; MC-018 passed 192 automated tests and native/browser authority-boundary validation.",
		limitation: "The accepted path is a bounded private R&D demonstration, not a production workflow or public service.",
		related: "/proof/",
		nextGate: "Run representative real mission workloads across production-oriented deployment boundaries.",
	},
	{
		label: "Data Discovery",
		status: "DEMONSTRATED ALPHA",
		tone: "green",
		summary: "MDAP runs bounded discovery jobs through approved providers, including an accepted real DataCite integration.",
		evidence: "MDAP validation records preserve bounded DataCite execution, normalized DOI candidates, checkpoints, catalogue metadata, and provenance fields.",
		limitation: "Provider coverage is narrow and MDAP catalogue and provenance work remains incomplete.",
		related: "/proof/",
		nextGate: "Complete catalogue/provenance foundations and add carefully bounded providers.",
	},
	{
		label: "Data Acquisition & Verification",
		status: "DEMONSTRATED ALPHA",
		tone: "green",
		summary: "Approved public assets can move through immutable acquisition planning, controlled download, integrity verification, and provenance recording.",
		evidence: "MDAP-004B.1 passed 79 tests; accepted work includes bounded Zenodo resolution, live asset download, checksum verification, restart recovery, and idempotency.",
		limitation: "Execution is explicitly gated; MDAP has no production TLS or authentication and is not ready for sensitive or regulated data.",
		related: "/proof/",
		nextGate: "Add production security controls and complete catalogue integration.",
	},
	{
		label: "Distributed Work Execution",
		status: "DEMONSTRATED PROTOTYPE",
		tone: "amber",
		summary: "Authenticated peers perform native distributed work using leases, lifecycle controls, retries, recovery, and validated results.",
		evidence: "A five-node native harness completed 50,000-item runs and validated drain/undrain, restart, worker loss, stale, duplicate, malformed, and authenticated wrong-worker handling.",
		limitation: "The reliability harness is bounded and does not establish production-scale scheduling, isolation, security, or efficiency.",
		related: "/proof/",
		nextGate: "Extend physical multi-machine workload and recovery testing under operational observability.",
	},
	{
		label: "Physical Distributed Storage",
		status: "DEMONSTRATED PROTOTYPE",
		tone: "amber",
		summary: "Erasure-coded parcel shards have been placed on identified physical peers with hash-bound acknowledgements.",
		evidence: "MC-011 recorded three acknowledged shards on three distinct physical PeerIds with a reconstructable 2+1 scheme and restart-persistent placement evidence.",
		limitation: "A successful ingest or queue receipt is not durable-storage proof, and long-running durability is not established.",
		related: "/proof/",
		nextGate: "Expand recovery and durability trials across machine loss and longer operating windows.",
	},
	{
		label: "Verified Retrieval",
		status: "DEMONSTRATED PROTOTYPE",
		tone: "amber",
		summary: "Physical shards can be fetched from their recorded placement peers and validated by source, shard hash, and reconstructed content hash.",
		evidence: "MC-012 retrieved a remote shard from its placement PeerId, verified two required shard hashes, reconstructed 1,598 bytes, and matched the final content hash.",
		limitation: "This is exact-parcel evidence from a controlled private topology, not a general availability guarantee.",
		related: "/proof/",
		nextGate: "Exercise degraded-topology retrieval and recovery with broader parcel profiles.",
	},
	{
		label: "Mission-Grounded Analysis & Review",
		status: "DEMONSTRATED ALPHA",
		tone: "green",
		summary: "Analysis is bounded to explicitly associated verified mission evidence, then reviewed separately by a human.",
		evidence: "MC-013 established operator-confirmed mission queries after verified retrieval; MC-014 added append-only accepted, needs-follow-up, and rejected review dispositions.",
		limitation: "Accepted validation used mock generation; analysis output is not automatically treated as truth.",
		related: "/proof/",
		nextGate: "Validate evidence-grounded analysis against real mission questions and reviewed model configurations.",
	},
];

export const activeDevelopment: SimpleStatusItem[] = [
	{ name: "Production Security Architecture", status: "IN ACTIVE DEVELOPMENT", tone: "blue", body: "Authentication, authorization, TLS, key and identity lifecycle, and secure deployment boundaries remain primary maturity gates." },
	{ name: "MDAP Catalogue & Provenance", status: "IN ACTIVE DEVELOPMENT", tone: "blue", body: "Discovery and acquisition are demonstrated; the broader catalogue, provenance, and provider model remains under construction." },
	{ name: "Operational Packaging", status: "IN ACTIVE DEVELOPMENT", tone: "blue", body: "Reproducible deployment, observability, recovery testing, and maintainable multi-machine operations require further work." },
	{ name: "Real Mission Workloads", status: "IN ACTIVE DEVELOPMENT", tone: "blue", body: "The integrated path now needs representative public-science and environmental workloads with explicit evaluation criteria." },
];

export const researchDirections: SimpleStatusItem[] = [
	{ name: "Mission-scale collective intelligence", status: "RESEARCH DIRECTION", tone: "plum", body: "Consequential mission outcomes across institutions and mixed human-AI teams remain unclaimed.", mustProve: "Governance, measurable outcomes, reproducible evidence, and durable cross-organizational operation." },
	{ name: "Public or volunteer participation", status: "FUTURE GATE", tone: "amber", body: "No public volunteer network currently exists.", mustProve: "Safe onboarding, local control, privacy, abuse resistance, support, and sustainable governance." },
	{ name: "Sensitive and regulated data", status: "FUTURE GATE", tone: "amber", body: "General sensitive or regulated data handling has not been demonstrated.", mustProve: "End-to-end security, policy enforcement, auditability, lawful governance, and failure containment." },
	{ name: "Long-running distributed durability", status: "RESEARCH DIRECTION", tone: "plum", body: "Current placement and retrieval evidence does not establish permanent storage.", mustProve: "Extended operation, repair, corruption handling, recovery, redundancy, and measurable service levels." },
	{ name: "First real environmental mission", status: "RESEARCH DIRECTION", tone: "plum", body: "Environmental and public-science missions are directions, not completed outcomes.", mustProve: "A bounded question, approved sources, end-to-end evidence, expert review, and an honestly reported result." },
];

export const claimBoundaries = [
	"Mythadis is private R&D and is not production-ready.",
	"No public production or volunteer network currently exists.",
	"Operator is not an execution authority and is not a general-purpose autonomous agent.",
	"Production authentication, authorization, TLS, key management, and deployment controls remain incomplete across relevant components.",
	"Sensitive or regulated data handling is not a general demonstrated capability.",
	"Physical placement and retrieval evidence does not establish permanent or globally durable storage.",
	"The current platform has not demonstrated humanity-scale mission outcomes.",
	"AI proposals, generated analysis, and model agreement are not treated as proof or human approval.",
	"Mythadis does not claim completed outcomes in pollution, climate, medicine, longevity, or public science.",
];

export const validationSteps = ["Define the bounded capability.", "Declare the environment and authority boundary.", "Run automated and native tests.", "Preserve logs, outputs, and artifacts.", "Validate restart, failure, and contradictory-state behavior.", "Record limitations and dissent.", "Advance the public claim only after accepted evidence."];

export const currentPriorities = ["Production security architecture", "Authentication and authorization", "Key and identity lifecycle", "Secure deployment boundaries", "MDAP catalogue and provenance", "Additional bounded data providers", "Real mission workloads", "Operational packaging and observability", "Recovery and longer-running tests", "Physical multi-machine mission execution"];
