import { ProjectDetails } from "@/components/project/ProjectDetails";
import { getProjectBySlug, projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetails project={project} />;
}
