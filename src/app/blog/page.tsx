'use client';

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/blog/BlogCard";
import { useEffect, useState } from "react";
import api from "@/lib/api";

type BlogPost = {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    published_at: string;
    image_url: string | null;
};

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await api.get('/posts');
                setPosts(response.data);
            } catch (error) {
                console.error("Failed to fetch posts", error);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if (loading) {
        return (
            <Container>
                <Section className="max-w-3xl">
                    <div className="text-center py-20 text-foreground-muted">Loading insights...</div>
                </Section>
            </Container>
        );
    }

    return (
        <Container>
            <Section className="max-w-4xl">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">Insights</h1>
                    <p className="text-xl text-foreground-muted">
                        Thoughts on engineering leadership, backend architecture, and building scalable systems.
                    </p>
                </div>

                <div className="space-y-12">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))
                    ) : (
                        <div className="text-center py-12 bg-surface border border-border rounded-xl">
                            <p className="text-foreground-muted">No posts published yet.</p>
                        </div>
                    )}
                </div>
            </Section>
        </Container>
    );
}
