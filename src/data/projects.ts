export interface Project {
  name: string;
  slug: string;
  description: string;
  fullDescription: string;
  stack: string[];
  impact: string;
  challenges: string[];
  features: string[];
  github?: string;
  demo?: string;
  status?: "wip" | "shipped";
}

export const projects: Project[] = [
  {
    name: "NexusOps",
    slug: "nexusops",
    status: "wip",
    description:
      "Agentic AI platform for e-commerce ops — combines direct LLM tool calls with durable MassTransit sagas for multi-service investigations and approval-gated actions.",
    fullDescription:
      "NexusOps is a reference architecture exploring how to safely give LLM agents the keys to a real backend. An ASP.NET Core Agent Host (Microsoft Agent Framework + Azure AI Foundry) decides between two paths per query: a Direct Path for fast read-only tool calls over HTTP, and a Saga Path where commands are published to RabbitMQ and coordinated durably by MassTransit sagas across Product, Order, Inventory, and a Node.js/TypeScript Notification service. Side effects are gated behind human approval, state is persisted in PostgreSQL, and everything is wired with .NET Aspire for service discovery, distributed tracing, and structured telemetry.",
    stack: [
      "ASP.NET Core",
      "Microsoft Agent Framework",
      "Azure AI Foundry",
      "MassTransit",
      "RabbitMQ",
      "PostgreSQL",
      ".NET Aspire",
      "Node.js",
      "TypeScript",
    ],
    impact: "Work in progress — exploring safe, durable agentic workflows over real microservices",
    challenges: [
      "Letting an LLM choose between fast direct tool calls and durable multi-service sagas",
      "Gating destructive actions (refunds, notifications) behind human approval inside a saga",
      "Persisting saga state in PostgreSQL with retries and partial-failure recovery",
      "Polyglot interop: Node.js notification service speaking MassTransit's wire protocol over AMQP",
    ],
    features: [
      "Agent Host with session/context management, tool selection, redaction middleware",
      "OrderInvestigation and OrderAction sagas via MassTransit + RabbitMQ",
      "Direct + async (AMQP back-channel) communication paths per tool",
      "End-to-end observability via .NET Aspire dashboard (traces, logs, metrics)",
    ],
    github: "https://github.com/sanaullahmohammed/NexusOps",
  },
  {
    name: "DistributedLookup",
    slug: "distributed-lookup",
    description:
      "Production-quality .NET 10 scatter-gather system aggregating GeoIP, Ping, RDAP, and ReverseDNS via MassTransit sagas, RabbitMQ, and Redis.",
    fullDescription:
      "A distributed scatter-gather service that fans network-information lookups (GeoIP, Ping, RDAP, ReverseDNS) out to dedicated worker pools and aggregates the results via a saga-orchestrated workflow. The API returns 202 Accepted with a job ID, clients poll for status, and a central MassTransit state machine coordinates per-provider commands over RabbitMQ while Redis holds volatile job and saga state. Built on .NET 10 with a clean-architecture layering, Docker Compose for local orchestration, and independently scalable worker processes.",
    stack: [".NET 10", "C#", "MassTransit", "RabbitMQ", "Redis", "Docker Compose"],
    impact: "Horizontally scalable, fault-tolerant aggregation across heterogeneous network sources",
    challenges: [
      "Coordinating async scatter-gather with a saga state machine and partial-failure tolerance",
      "Non-blocking API: 202 Accepted + polling without leaking saga state to clients",
      "Worker isolation per provider with independent horizontal scaling",
      "Volatile but consistent job/saga state in Redis under retries",
    ],
    features: [
      "Saga-orchestrated scatter-gather over MassTransit + RabbitMQ",
      "Dedicated worker processes per lookup provider",
      "Redis-backed job and saga state",
      "Docker Compose multi-container orchestration",
    ],
    github: "https://github.com/sanaullahmohammed/DistributedLookup",
  },
  {
    name: "Identity Reconciliation",
    slug: "identity-reconciliation",
    description:
      "Spring Boot + PostgreSQL backend service that merges identity records from multiple sources into a single unified identity.",
    fullDescription:
      "A Java 17 / Spring Boot 3 backend service that reconciles identities arriving from multiple upstream sources. Records are matched on configurable criteria (email, phone, etc.) and merged into a single canonical identity in PostgreSQL, exposed via REST endpoints documented with OpenAPI. Includes structured error handling and logging, and is built with Maven for a clean, reproducible build.",
    stack: ["Java 17", "Spring Boot 3", "PostgreSQL", "Maven", "OpenAPI"],
    impact: "Unifies fragmented identity records into a single canonical view",
    challenges: [
      "Designing matching rules that handle partial and conflicting attributes",
      "Idempotent merges that don't double-link or orphan records",
      "Modeling primary/secondary contact relationships in PostgreSQL",
      "Clear REST contract via OpenAPI for upstream integrators",
    ],
    features: [
      "REST API for identity ingestion and lookup",
      "Configurable matching + merge rules",
      "PostgreSQL persistence with JPA/Hibernate",
      "OpenAPI documentation",
    ],
    github: "https://github.com/sanaullahmohammed/identity-reconciliation",
  },
  {
    name: "JSON Log Columnizer",
    slug: "json-log-columnizer",
    description:
      "C# tool that flattens nested JSON log objects into a columnar format for easier analysis — built with clean-architecture principles.",
    fullDescription:
      "A C# utility that ingests JSON log files, flattens nested object structures, and emits a columnar representation that's far easier to slice, filter, and analyze than raw nested JSON. Implementation follows clean-architecture principles — domain logic is decoupled from I/O, parsing, and output adapters — making the codebase straightforward to extend with new sources or sinks.",
    stack: ["C#", ".NET", "Clean Architecture"],
    impact: "Turns messy nested JSON logs into analysis-ready columnar data",
    challenges: [
      "Flattening arbitrarily nested JSON without losing semantics",
      "Stable column naming across heterogeneous log shapes",
      "Keeping core logic decoupled from I/O for testability",
      "Streaming large log files without loading them fully in memory",
    ],
    features: [
      "JSON flattening with deterministic column keys",
      "Clean-architecture separation of domain and adapters",
      "Pluggable input/output adapters",
      "Designed for batch log analysis workflows",
    ],
    github: "https://github.com/sanaullahmohammed/json-log-columnizer",
  },
];

export const featuredProjects = projects.slice(0, 4);
