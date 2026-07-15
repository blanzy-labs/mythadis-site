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
	version: "0.1",
	lastReviewedLabel: "JULY 2026",
	status: "PRIVATE R&D",
	release: "MWEB-009",
};

export const statusSummary = [
	"PRIVATE R&D",
	"EARLY MULTI-NODE PROTOTYPE",
	"NO PUBLIC AGENT",
	"NOT PRODUCTION-READY",
];

export const demonstratedCapabilities: StatusItem[] = [
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
		name: "Mission Control Foundations",
		status: "IN ACTIVE DEVELOPMENT",
		tone: "blue",
		body: "Initial orchestration capabilities for agents, health, roles, missions, storage, compute, and validation.",
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
	"Mythadis Swarm is not production-ready.",
	"No public volunteer network currently exists.",
	"The Mythadis Agent is not publicly available.",
	"Mythadis does not currently operate at global scale.",
	"Mythadis has not demonstrated humanity-scale mission outcomes.",
	"Mythadis does not currently solve longevity, climate, pollution, medicine, or public science.",
	"AI agreement is not treated as proof.",
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
	"Three-node distributed data-path validation",
	"Long-running node stability",
	"Recovery under node loss",
	"Agent role clarity",
	"Mission Control observability",
	"Data Parcel contract",
	"Archive Health measurement",
	"Reproducible deployment",
];
