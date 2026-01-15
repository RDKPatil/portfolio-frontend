'use client';

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useState } from "react";
import { fetchAPI } from "@/lib/api";

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const formData = new FormData(e.currentTarget);
            const data = {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                subject: 'Portfolio Contact Form',
                message: formData.get('message') as string,
            };

            await fetchAPI('/contact', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            setStatus('success');
            // Reset form
            const form = e.currentTarget;
            if (form) {
                form.reset();
            }
        } catch (error: any) {
            console.error('Failed to send message:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Failed to send message. Please try again.');
        }
    }
    return (
        <Container>
            <Section className="max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-6">Get in Touch</h1>
                        <p className="text-xl text-foreground-muted mb-8">
                            Based in Mumbai. Open to discussing technical leadership roles, system architecture, and collaboration opportunities.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-semibold uppercase text-foreground-muted mb-1">Email</h3>
                                <a href="mailto:patilrohit059@gmail.com" className="text-lg font-medium hover:text-accent transition-colors">
                                    patilrohit059@gmail.com
                                </a>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold uppercase text-foreground-muted mb-1">Phone</h3>
                                <span className="text-lg font-medium text-foreground">
                                    +91 8976355824
                                </span>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold uppercase text-foreground-muted mb-1">Social</h3>
                                <div className="flex flex-col gap-2 text-lg font-medium">
                                    <a href="https://www.linkedin.com/in/rdkpatil" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                        LinkedIn: rdkpatil
                                    </a>
                                    <a href="https://github.com/RDKPatil" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                        GitHub: RDKPatil
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-surface p-8 rounded-xl border border-border shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <div className="text-5xl mb-4">✓</div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-foreground-muted mb-6">Thanks for reaching out. I'll get back to you soon.</p>
                                <Button onClick={() => setStatus('idle')} variant="outline">
                                    Send Another
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <Input id="name" name="name" label="Name" placeholder="Your Name" required />
                                <Input id="email" name="email" label="Email" type="email" placeholder="your@email.com" required />
                                <Textarea id="message" name="message" label="Message" rows={4} placeholder="How can I help you?" required />

                                {status === 'error' && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                                        {errorMessage}
                                    </div>
                                )}

                                <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </Section>
        </Container>
    );
}
