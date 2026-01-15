import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export default function AdminDashboard() {
    return (
        <Container>
            <Section className="max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link
                        href="/admin/messages"
                        className="p-8 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
                    >
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-accent">Messages</h2>
                        <p className="text-foreground-muted">View and manage contact form submissions</p>
                    </Link>

                    <Link
                        href="/admin/projects"
                        className="p-8 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
                    >
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-accent">Projects</h2>
                        <p className="text-foreground-muted">Manage your portfolio projects</p>
                    </Link>

                    <Link
                        href="/admin/posts"
                        className="p-8 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
                    >
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-accent">Blog Posts</h2>
                        <p className="text-foreground-muted">Create and edit blog posts</p>
                    </Link>

                    <Link
                        href="/admin/skills"
                        className="p-8 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
                    >
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-accent">Skills</h2>
                        <p className="text-foreground-muted">Update your skills and expertise</p>
                    </Link>
                </div>
            </Section>
        </Container>
    );
}
