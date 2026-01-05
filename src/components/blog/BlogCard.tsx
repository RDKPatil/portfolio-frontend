import Link from "next/link";
import { Card } from "@/components/ui/Card";

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
}

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <article className="group cursor-default">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <Link href="#" className="hover:text-accent transition-colors">
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {post.title}
                    </h2>
                </Link>
                <time className="text-sm text-foreground-muted whitespace-nowrap mt-1 md:mt-0">
                    {post.date}
                </time>
            </div>
            <p className="text-foreground-muted leading-relaxed">
                {post.excerpt}
            </p>
        </article>
    );
}
