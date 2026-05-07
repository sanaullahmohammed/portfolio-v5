import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { Seo } from "@/components/Seo";

export default function Work() {
  return (
    <Layout>
      <Seo
        title="Work"
        description="Selected production systems and side projects by Mohammed Sanaullah — distributed systems, agentic AI, and real-time platforms across .NET, TypeScript, and the JVM."
      />
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Work</h1>
            <p className="text-muted-foreground leading-relaxed">
              A mix of production systems shipped at StoneX and Achieve.ai, plus open-source
              and side projects exploring distributed systems, agentic AI, and the boring-but-
              important plumbing that holds it all together.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label="Projects" />
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(index + 2, 4)}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
