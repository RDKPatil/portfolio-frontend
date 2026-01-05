import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
    return (
        <Container>
            <Section>
                <div className="max-w-3xl mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">Projects</h1>
                    <p className="text-xl text-foreground-muted">
                        A collection of case studies showcasing system architecture, automation, and full-stack development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </Section>
        </Container>
    );
}
