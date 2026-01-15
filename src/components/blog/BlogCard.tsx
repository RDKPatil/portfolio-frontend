import Link from "next/link";
import Image from "next/image";

interface BlogPost {
    slug: string;
    title: string;
    published_at: string;
    excerpt: string;
    image_url: string | null;
}

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    const date = new Date(post.published_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <article className="group cursor-pointer grid md:grid-cols-4 gap-6 items-start">
            <div className="md:col-span-1 aspect-video relative rounded-lg overflow-hidden bg-surface-hover">
                {post.image_url ? (
                    <Image
                        src={post.image_url}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-foreground-muted bg-surface border border-border">
                        No Image
                    </div>
                )}
            </div>

            <div className="md:col-span-3">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                        <h2 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                            {post.title}
                        </h2>
                    </Link>
                    <time className="text-sm text-foreground-muted whitespace-nowrap mt-1 md:mt-0">
                        {date}
                    </time>
                </div>
                <p className="text-foreground-muted leading-relaxed">
                    {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="inline-block mt-4 text-accent font-medium hover:underline">
                    Read more →
                </Link>
            </div>
        </article>
    );
}
