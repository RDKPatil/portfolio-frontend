'use client';

import { useState, useEffect } from 'react';
import api from '@/lib/api';

type Comment = {
    id: number;
    author_name: string;
    content: string;
    created_at: string;
};

export function CommentSection({ slug }: { slug: string }) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({ author_name: '', content: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        fetchComments();
    }, [slug]);

    const fetchComments = async () => {
        try {
            const response = await api.get(`/posts/${slug}/comments`);
            setComments(response.data);
        } catch (err) {
            console.error('Failed to fetch comments', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        try {
            const response = await api.post(`/posts/${slug}/comments`, formData);
            setComments([response.data, ...comments]); // Add new comment to top
            setFormData({ author_name: '', content: '' }); // Reset form
        } catch (err) {
            console.error('Failed to submit comment', err);
            setError('Failed to post comment. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="mt-16 pt-8 border-t border-border">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Discussion</h2>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="mb-12 bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Leave a thought</h3>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                        {error}
                    </div>
                )}

                <div className="space-y-4">
                    <div>
                        <label htmlFor="author_name" className="block text-sm font-medium text-foreground-muted mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="author_name"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none transition-colors"
                            value={formData.author_name}
                            onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-foreground-muted mb-1">
                            Message
                        </label>
                        <textarea
                            id="content"
                            required
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none transition-colors"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            placeholder="Share your perspective..."
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-6 py-2 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                        {submitting ? 'Posting...' : 'Post Comment'}
                    </button>
                </div>
            </form>

            {/* Comments List */}
            <div className="space-y-8">
                {loading ? (
                    <div className="text-foreground-muted animate-pulse">Loading comments...</div>
                ) : comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                                {comment.author_name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="font-semibold text-foreground">{comment.author_name}</span>
                                    <span className="text-xs text-foreground-muted">
                                        {new Date(comment.created_at).toLocaleDateString(undefined, {
                                            month: 'short', day: 'numeric', year: 'numeric'
                                        })}
                                    </span>
                                </div>
                                <p className="text-foreground-muted leading-relaxed whitespace-pre-wrap">
                                    {comment.content}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-foreground-muted italic">No comments yet. Be the first to start the conversation!</p>
                )}
            </div>
        </div>
    );
}
