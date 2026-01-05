import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Project } from "@/lib/projects";

interface ProjectDetailsProps {
    project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
    return (
        <Container>
            <Section className="py-12 md:py-20">
                <Link href="/projects" className="text-sm font-medium text-foreground-muted hover:text-foreground mb-8 inline-block">
                    &larr; Back to Projects
                </Link>

                <header className="mb-12 max-w-4xl">
                    <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-foreground">
                        {project.title}
                    </h1>
                    <p className="text-xl text-foreground-muted leading-relaxed">
                        {project.summary}
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Case Study Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                            <p className="text-lg text-foreground-muted leading-relaxed bg-surface p-6 rounded-xl border border-border">
                                {project.problem}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">Approach & Solution</h2>
                            <p className="text-lg text-foreground-muted leading-relaxed">
                                {project.approach}
                            </p>
                            <p className="text-lg text-foreground-muted leading-relaxed">
                                {project.solution}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">Key Impact</h2>
                            <div className="bg-surface/50 p-6 rounded-xl border-l-4 border-accent">
                                <p className="text-lg font-medium text-foreground">
                                    {project.impact}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Specs */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-surface p-6 rounded-xl border border-border">
                            <h3 className="text-sm font-semibold uppercase text-foreground-muted mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-background rounded-md text-sm text-foreground border border-border">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {/* Placeholders for live links if they existed */}
                            <Button variant="outline" className="w-full justify-between group">
                                View Source Code
                                <span className="text-gray-400 group-hover:text-foreground transition-colors">↗</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </Container>
    );
}
