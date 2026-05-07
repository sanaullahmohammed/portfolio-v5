import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { Seo } from "@/components/Seo";

const skills = [
  "Distributed Systems",
  "Event-Driven Architecture",
  "Real-Time Frontends",
  "API Design (REST, gRPC, GraphQL)",
  "Stream Processing (Kafka)",
  "Kubernetes & Helm",
  "TDD & Clean Code",
];

const stack = [
  "TypeScript",
  "C#",
  "Java",
  "Python",
  "React",
  "Node.js",
  "ASP.NET Core",
  "Spring Boot",
  "PostgreSQL",
  "MS-SQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "RabbitMQ",
  "Docker",
  "Kubernetes",
  "Helm",
  "Azure",
  "AWS",
  "GCP",
];

const experience = [
  {
    role: "Staff Engineer",
    company: "StoneX (formerly INTL FCStone)",
    location: "Bangalore, India",
    period: "Sep 2023 — Present",
    bullets: [
      "TypeScript REST + gRPC services on Express/Fastify with knex over PostgreSQL/MS-SQL (25% efficiency gain), TDD with vitest/jest.",
      "Built a Node.js request-tracing library (Winston + correlation IDs) — 35% faster cross-service issue resolution.",
      "Kafka Streams pipeline for cash transactions on Confluent Kafka — 25% lower latency.",
      "Real-time analytics platform (RxJS, Cube.js, Lightstreamer) feeding a React/Ag-Grid dashboard — 10k+ trades/day.",
      "Module-Federated React widgets (Webpack 5 / Vite) — 15% trader efficiency gain, 10% lower risk exposure.",
      "Fixed critical memory leaks in legacy .NET Framework C# (80% perf gain), migrated to .NET Core with Autofac.",
      "Migrated Kubernetes microservices from Kustomize to Helm — 40% less deployment complexity, 30% faster CI/CD.",
    ],
  },
  {
    role: "Software Design Engineer",
    company: "Achieve.ai (formerly MCQdb)",
    location: "Remote, India",
    period: "Apr 2022 — Sep 2023",
    bullets: [
      "Integrated OrchardCore CMS into ASP.NET Core so non-eng teams could own webpages.",
      "Built Material 3 React components from Figma, aligned with the company design system.",
      "Open XML SDK + KaTeX/MathML document parser for SME Word files — 30% faster ingestion.",
      "Architected a cloud backend on Microsoft Orleans (virtual actors) for distributed state and auto-scaling.",
    ],
  },
];

export default function About() {
  return (
    <Layout>
      <Seo
        title="About"
        type="profile"
        description="About Mohammed Sanaullah — staff engineer in Bengaluru with 4+ years of full-stack experience, currently shipping distributed trading systems at StoneX."
      />
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About</h1>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="opacity-0 animate-fade-in-up stagger-1">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm <span className="text-primary font-medium">Mohammed Sanaullah</span>, a
                  staff engineer in Bengaluru with 4+ years of full-stack experience across
                  TypeScript, .NET, and the JVM. I like the messy middle of distributed systems —
                  the queues, sagas, retries, and traces that decide whether a product feels
                  reliable or flaky.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-2">
                <p className="text-muted-foreground leading-relaxed">
                  At StoneX I work on the trading and analytics side: real-time React dashboards
                  fed by RxJS/Lightstreamer, Kafka Streams pipelines for cash transactions, and
                  the Kubernetes/Helm plumbing that keeps it all deployable. Before that, at
                  Achieve.ai, I shipped Microsoft Orleans actor systems and document-parsing
                  pipelines for an EdTech product.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-3">
                <p className="text-muted-foreground leading-relaxed">
                  Outside of work I'm currently building{" "}
                  <a
                    href="https://github.com/sanaullahmohammed/NexusOps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    NexusOps
                  </a>
                  , a reference architecture for agentic AI over real microservices using
                  Microsoft Agent Framework, MassTransit sagas, and .NET Aspire.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="Experience" />
              </div>

              <div className="space-y-8 opacity-0 animate-fade-in-up stagger-4">
                {experience.map((job) => (
                  <div key={job.company}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-mono text-base text-foreground">
                        {job.role}{" "}
                        <span className="text-muted-foreground">@ {job.company}</span>
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground mb-3">{job.location}</p>
                    <ul className="space-y-2">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="font-mono text-primary mt-1">→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="Philosophy" />
              </div>
              <div className="space-y-4 font-mono text-sm opacity-0 animate-fade-in-up stagger-4">
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Test-driven, because future-you deserves a safety net
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Trace everything; guess nothing
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Boring tech in the critical path, fun tech at the edges
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Optimize for the next engineer, not the cleverest line
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Focus Areas{" "}
                  <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="text-primary mr-2">→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-3">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Stack{" "}
                  <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Education & Certs{" "}
                  <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>B.E. Computer Science, VTU — CGPA 8.8/10</p>
                  <p>Microsoft Azure AZ-900</p>
                  <p>Google Cloud Fundamentals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
