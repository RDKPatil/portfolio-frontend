'use client';

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type BlogPost = {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    published_at: string;
    image_url: string | null;
};

export default function BlogPostPage() {
    const params = useParams(); // Use useParams for client component
    const slug = params?.slug as string;

    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (slug) {
            fetchPost();
        }
    }, [slug]);

    async function fetchPost() {
        try {
            const response = await api.get(`/posts/${slug}`);
            setPost(response.data);
        } catch (err) {
            setError('Failed to load post');
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <Container>
                <Section className="max-w-3xl">
                    <div className="text-center py-20 text-foreground-muted">Loading...</div>
                </Section>
            </Container>
        );
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

                    <div className="prose prose-invert max-w-none prose-lg text-foreground-muted">
                        {/* 
                           Note: In a real app, use a markdown rendered like react-markdown. 
                           For now, we just display the text properly with line breaks 
                        */}
                        <div className="whitespace-pre-wrap">{post.content}</div>
                    </div>
                </article>
            </Section>
        </Container>
    );
}
