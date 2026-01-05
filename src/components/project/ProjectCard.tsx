import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.slug}`} className="block group h-full">
            <Card className="flex flex-col h-full hover:border-accent/40 transition-colors">
                <div className="mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-foreground transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-foreground-muted line-clamp-3">
                        {project.summary}
                    </p>
                </div>
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded text-xs text-foreground-muted">
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-slate-800 rounded text-xs text-foreground-muted">
                            +{project.techStack.length - 4}
                        </span>
                    )}
                </div>
            </Card>
        </Link>
    );
}
