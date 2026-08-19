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
	lastReviewedLabel: "AUGUST 2026",
	status: "PRIVATE INTEGRATED ALPHA",
	release: "MWEB-011",
};

export const statusSummary = [
	"PRIVATE INTEGRATED ALPHA",
	"END-TO-END MISSION DEMONSTRATED",
	"NO PUBLIC AGENT",
	"NOT PRODUCTION-READY",
];

export const demonstratedCapabilities: StatusItem[] = [
	{
		label: "Governed Analytics & Continued Investigation",
		status: "DEMONSTRATED ALPHA",
		tone: "green",
		summary: "Mythadis can route approved analytical work through eligible execution engines, verify resulting artifacts and lineage, present results for human review, and continue analysis from a natural-language follow-up question.",
		evidence: "Alpha 2 founder validation completed mission design, plan approval, automatic governed evidence selection and execution routing, a verified result, human acceptance, a governed follow-up, automatic routing through a real Trino backend, and a verified follow-up result.",
		limitation: "Analytical operations remain bounded. Broad statistical and data-science capability, larger workloads, and production reliability have not been established.",
		related: "/proof/",
		nextGate: "Stabilize the Golden Mission across repositories, persist and resume mission workspaces, expand analytical planning, and validate larger and longer-running workloads.",
	},
	{
		label: "Peer Discovery",
		status: "DEMONSTRATED PROTOTYPE",
		tone: "amber",
		summary: "Multiple nodes have discovered and recognized one another within private test environments.",
		evidence: "Private Mythadis Swarm repository documents local and Docker Compose node operation with bootstrap configuration and libp2p communication.",
		limitation: "Validated in controlled private environments, not a public network.",
		related: "/proof/",
		nextGate: "Publish a bounded Field Report with test conditions and observed node behavior.",
	},
	{
		label: "Cross-Platform Operation",
		status: "DEMONSTRATED PROTOTYPE",
		tone: "amber",
		summary: "Early node software has operated across Linux and macOS systems using different hardware profiles.",
		evidence: "The prototype supports local or containerized node operation and has been used across heterogeneous private systems.",
		limitation: "This is not a supported public installer or production distribution.",
		related: "/proof/",
		nextGate: "Record reproducible setup notes for supported private test profiles.",
	},
	{
		label: "Multi-Node Connectivity",
		status: "DEMONSTRATED PROTOTYPE",
		tone: "amber",
		summary: "Private tests have established communication among multiple nodes, including nodes operating across different local subnets.",
		evidence: "Swarm demos define multiple node services and control endpoints for seed, engineer, scientist, mythadis, and longevity profiles.",
		limitation: "Connectivity claims are bounded to private trials and demo environments.",
		related: "/proof/",
		nextGate: "Validate longer-running multi-node communication with preserved logs.",
	},
	{
		label: "Distributed Data Experiments",
		status: "EXPERIMENTAL",
		tone: "plum",
		summary: "Early experiments have explored distributed storage, data fragmentation, recovery, and retrieval across participating nodes.",
		evidence: "The private prototype uses Kademlia storage experiments and Reed-Solomon sharding over Data Parcels.",
		limitation: "Distributed storage is not described as permanent, globally durable, or production-secure.",
		related: "/proof/",
		nextGate: "Demonstrate recovery under node loss with defined shard conditions.",
	},
	{
		label: "Local Persistence",
		status: "DEMONSTRATED PROTOTYPE",
		tone: "amber",
		summary: "Node identity and local data stores persist across local prototype runs.",
		evidence: "The private repository documents node identity storage and sled data under the configured data directory.",
		limitation: "Persistence is local prototype behavior, not a backup, compliance, or durability guarantee.",
		related: "/proof/",
		nextGate: "Document recovery behavior across restart, corruption, and data-directory migration scenarios.",
	},
	{
		label: "Lightweight Knowledge Discovery",
		status: "EXPERIMENTAL",
		tone: "plum",
		summary: "Early query paths can match ingested evidence and return source-grounded responses when semantic context exists.",
		evidence: "The private prototype documents hunt, ingest, ask, catalog, parcel lookup, content hash, score, source preview, and matched/unmatched response shapes.",
		limitation: "This is not a generalized research engine, citation system, or truth engine.",
		related: "/proof/",
		nextGate: "Publish a field report showing source-grounded response behavior against fixed demo data.",
	},
];

export const activeDevelopment: SimpleStatusItem[] = [
	{
		name: "Golden Mission Stability",
		status: "IN ACTIVE DEVELOPMENT",
		tone: "blue",
		body: "Cross-repository regression coverage for the complete Alpha 2 mission, accepted result, resumption, governed follow-up, and safe execution failure boundaries.",
	},
	{
		name: "Persistent Mission Workspace",
		status: "IN ACTIVE DEVELOPMENT",
		tone: "blue",
		body: "Durable mission resumption so an investigation can continue without manually reconstructing its context.",
	},
	{
		name: "Data Parcels",
		status: "IN ACTIVE DEVELOPMENT",
		tone: "blue",
		body: "A self-describing, content-addressed data model intended to preserve identity, context, provenance, relationships, and integrity.",
	},
	{
		name: "Archive Health",
		status: "IN ACTIVE DEVELOPMENT",
		tone: "blue",
		body: "A system for distinguishing healthy, degraded, at-risk, and unrecoverable archive states.",
	},
	{
		name: "Mythadis Agent Foundations",
		status: "IN ACTIVE DEVELOPMENT",
		tone: "blue",
		body: "Early work toward a participant-facing Agent with explicit local resource and policy boundaries.",
	},
	{
		name: "Mission Control Maturity",
		status: "IN ACTIVE DEVELOPMENT",
		tone: "blue",
		body: "The authoritative operating layer for durable mission state, human decisions, approved capability selection, evidence, execution, lineage, and results.",
	},
	{
		name: "Distributed Data Path",
		status: "IN ACTIVE DEVELOPMENT",
		tone: "blue",
		body: "Continued validation of storage, transfer, verification, and recovery across multiple nodes.",
	},
];

export const researchDirections: SimpleStatusItem[] = [
	{
		name: "Swarm Compute at meaningful scale",
		status: "RESEARCH DIRECTION",
		tone: "plum",
		body: "Coordinated compute across many participants remains unclaimed.",
		mustProve: "Scheduling, workload isolation, verification, recovery, security, and measurable efficiency.",
	},
	{
		name: "Concordance Engine",
		status: "RESEARCH DIRECTION",
		tone: "plum",
		body: "A future system for reasoning over agreement, disagreement, evidence, and unresolved claims.",
		mustProve: "Reliable evidence handling, dissent preservation, traceable outputs, and validation across real use cases.",
	},
	{
		name: "Aegis",
		status: "RESEARCH DIRECTION",
		tone: "plum",
		body: "A future safety, policy, and trust boundary for coordinated intelligence.",
		mustProve: "Threat modeling, enforceable policy boundaries, auditability, and failure behavior.",
	},
	{
		name: "Public Agent distribution",
		status: "FUTURE GATE",
		tone: "amber",
		body: "The Mythadis Agent is not publicly available.",
		mustProve: "Local safety, installation, update behavior, privacy boundaries, and clear operator control.",
	},
	{
		name: "Mission Swarms",
		status: "FUTURE GATE",
		tone: "amber",
		body: "Mission Swarms remain future work, not demonstrated public outcomes.",
		mustProve: "Mission definition, participant roles, evidence flows, coordination loops, and measurable outputs.",
	},
	{
		name: "Large-scale archive preservation",
		status: "RESEARCH DIRECTION",
		tone: "plum",
		body: "The current prototype does not claim permanent archive preservation.",
		mustProve: "Durability, recovery, integrity, redundancy, governance, and long-running operation.",
	},
	{
		name: "Cross-institution coordination",
		status: "RESEARCH DIRECTION",
		tone: "plum",
		body: "Coordination across institutions remains a future research and partnership challenge.",
		mustProve: "Governance, permissions, data boundaries, trust model, and repeatable collaboration workflows.",
	},
	{
		name: "Public volunteer network",
		status: "FUTURE GATE",
		tone: "amber",
		body: "No public volunteer network currently exists.",
		mustProve: "Safety, onboarding, incentives or motivation model, support, governance, and abuse resistance.",
	},
];

export const claimBoundaries = [
	"Mythadis is not production-ready and offers no commercial production SLA.",
	"No public volunteer network currently exists.",
	"The Mythadis Agent is not publicly available.",
	"Production security architecture remains incomplete.",
	"Sensitive or regulated data support is not generally demonstrated.",
	"Mythadis does not currently operate at global scale.",
	"Mythadis has not demonstrated humanity-scale mission outcomes.",
	"Mythadis does not currently solve longevity, climate, pollution, medicine, or public science.",
	"AI-generated analysis and agreement are not automatically treated as truth or proof.",
	"Distributed storage is not described as permanent.",
	"Decentralized architecture is not presented as automatically secure or trustworthy.",
	"No investment return or token model is being promoted.",
];

export const validationSteps = [
	"Define the bounded capability.",
	"Declare the test conditions.",
	"Run the test.",
	"Preserve logs, outputs, and artifacts.",
	"Record limitations and dissent.",
	"Publish an appropriate Proof entry or Relic.",
	"Update Current State only after validation.",
];

export const currentPriorities = [
	"Golden Mission stability and cross-repository regression",
	"Persistent mission workspace and resumption",
	"Expanded analytical and statistical capability",
	"Durable long-running missions",
	"Representative larger datasets",
	"Result exploration and visualization",
	"Operational resilience and observability",
	"Production security architecture",
	"Additional connectors and providers after core experience maturity",
];
