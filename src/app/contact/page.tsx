import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export default function ContactPage() {
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
                        <form className="space-y-4">
                            <Input id="name" label="Name" placeholder="Your Name" />
                            <Input id="email" label="Email" type="email" placeholder="your@email.com" />
                            <Textarea id="message" label="Message" rows={4} placeholder="How can I help you?" />
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </Section>
        </Container>
    );
}
