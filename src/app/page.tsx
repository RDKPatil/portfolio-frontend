import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/project/ProjectCard";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="flex flex-col justify-center min-h-[60vh]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Rohit Patil
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground-muted font-medium">
              Assistant Tech Lead & Full Stack Developer
            </h2>
            <p className="text-xl text-foreground-muted leading-relaxed max-w-2xl">
              I build scalable applications, automate complex workflows, and lead engineering teams.
              Specializing in <strong>Laravel, React, and System Design</strong> to deliver high-impact business solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="/projects">View Work</Button>
              <Button href="/contact" variant="outline">Contact Me</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Projects Section */}
      <Section className="bg-surface/50 border-t border-border">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Work</h2>
              <p className="text-foreground-muted max-w-xl">
                Selected projects demonstrating automation, system integration, and leadership.
              </p>
            </div>
            <Link href="/projects" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
              View all projects &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
