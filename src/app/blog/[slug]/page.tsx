import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import api from "@/lib/api";
import { CommentSection } from "@/components/blog/CommentSection";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

type BlogPost = {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    published_at: string;
    image_url: string | null;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
};

// Next.js Metadata Generator
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    try {
        const params = await props.params;
        const response = await api.get(`/posts/${params.slug}`);
        const post: BlogPost = response.data;

        return {
            title: post.meta_title || post.title,
            description: post.meta_description || post.excerpt,
            keywords: post.meta_keywords?.split(',').map(k => k.trim()) || [],
            openGraph: {
                title: post.meta_title || post.title,
                description: post.meta_description || post.excerpt,
                images: post.image_url ? [post.image_url] : [],
                type: 'article',
                publishedTime: post.published_at,
            }
        };
    } catch (error) {
        return {
            title: 'Blog Post',
        };
    }
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    let post: BlogPost | null = null;
    let error = '';

    try {
        // Fetch data on the server
        console.log(`Fetching post: /posts/${params.slug}`); // Debug log
        const response = await api.get(`/posts/${params.slug}`);
        post = response.data;
    } catch (err: any) {
        console.error('Fetch Error:', err.message, err.response?.status); // Detailed error
        error = 'Failed to load post';
    }

    if (error || !post) {
        return (
            <Container>
                <Section className="max-w-3xl text-center">
                    <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                    <Link href="/blog" className="text-accent hover:underline">← Back to Blog</Link>
                </Section>
            </Container>
        );
    }

    const date = new Date(post.published_at).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <Container>
            <Section className="max-w-4xl">
                <Link href="/blog" className="text-foreground-muted hover:text-foreground mb-8 inline-block transition-colors">
                    ← Back to Blog
                </Link>

                <article>
                    <header className="mb-8">
                        <div className="flex items-center gap-2 text-foreground-muted mb-4">
                            <time>{date}</time>
                            <span>•</span>
                            <span>Rohit Patil</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                            {post.title}
                        </h1>
                        {post.image_url && (
                            <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-8 bg-surface border border-border">
                                <Image
                                    src={post.image_url}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}
                    </header>

                    <div className="prose max-w-none prose-lg text-foreground-muted">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </article>

                <CommentSection slug={post.slug} />
            </Section>
        </Container>
    );
}
