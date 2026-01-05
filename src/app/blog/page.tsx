import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/blog/BlogCard";

// Placeholder data - in a real app this would come from MDX files or a CMS
const posts = [
    {
        slug: "automating-workflows",
        title: "Why Automation is the First Step to Scaling",
        date: "Jan 2, 2026",
        excerpt: "Manual processes kill manual creativity. Here is how I approach automating internal tools."
    },
    {
        slug: "laravel-vs-node",
        title: "Choosing the Right Backend for Enterprise Apps",
        date: "Dec 15, 2025",
        excerpt: "My take on when to use Laravel's robustness vs Node.js flexibility in 2026."
    },
    {
        slug: "engineering-leadership",
        title: "Transitioning from Senior Dev to Tech Lead",
        date: "Nov 30, 2025",
        excerpt: "Lessons learned in my first 6 months of leading a team of 5 developers."
    }
];

export default function BlogPage() {
    return (
        <Container>
            <Section className="max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight mb-8 text-foreground">Insights</h1>

                <div className="space-y-12">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </Section>
        </Container>
    );
}
