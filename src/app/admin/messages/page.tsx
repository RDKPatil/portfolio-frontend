'use client';

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import api from "@/lib/api";

type Message = {
    id: number;
    name: string;
    email: string;
    subject: string | null;
    message: string;
    read_at: string | null;
    created_at: string;
};

export default function AdminMessagesPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    async function fetchMessages() {
        try {
            setLoading(true);
            const response = await api.get('/admin/messages');
            setMessages(response.data);
            setError('');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to load messages');
        } finally {
            setLoading(false);
        }
    }

    async function markAsRead(id: number) {
        try {
            await api.patch(`/admin/messages/${id}/read`);
            await fetchMessages(); // Refresh list
        } catch (err) {
            alert('Failed to mark as read');
        }
    }

    async function deleteMessage(id: number) {
        if (!confirm('Are you sure you want to delete this message?')) return;

        try {
            await api.delete(`/admin/messages/${id}`);
            await fetchMessages(); // Refresh list
        } catch (err) {
            alert('Failed to delete message');
        }
    }

    if (loading) {
        return (
            <Container>
                <Section className="max-w-6xl">
                    <div className="text-center py-12">Loading messages...</div>
                </Section>
            </Container>
        );
    }

    return (
        <Container>
            <Section className="max-w-6xl">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Contact Messages</h1>
                    <p className="text-foreground-muted">
                        Messages received from your portfolio contact form
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
                        {error}
                    </div>
                )}

                {messages.length === 0 ? (
                    <div className="text-center py-12 bg-surface border border-border rounded-xl">
                        <p className="text-foreground-muted">No messages yet</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`p-6 rounded-xl border transition-colors ${msg.read_at
                                        ? 'bg-surface border-border opacity-75'
                                        : 'bg-surface border-accent/50 shadow-sm'
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="font-bold text-lg">{msg.name}</h3>
                                            {!msg.read_at && (
                                                <span className="px-2 py-0.5 text-xs font-semibold bg-accent text-white rounded-full">
                                                    New
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-foreground-muted">
                                            {msg.email} • {new Date(msg.created_at).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                        {msg.subject && (
                                            <p className="text-sm font-medium mt-1">Subject: {msg.subject}</p>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        {!msg.read_at && (
                                            <Button
                                                onClick={() => markAsRead(msg.id)}
                                                variant="outline"
                                                className="text-sm"
                                            >
                                                Mark Read
                                            </Button>
                                        )}
                                        <Button
                                            onClick={() => deleteMessage(msg.id)}
                                            variant="outline"
                                            className="text-sm text-red-500 hover:bg-red-500/10"
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-4 bg-background/50 rounded-lg border border-border">
                                    <p className="whitespace-pre-wrap text-foreground">{msg.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Section>
        </Container>
    );
}
