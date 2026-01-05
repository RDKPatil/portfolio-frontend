import Link from 'next/link';
import { Container } from "@/components/layout/Container";

export function Footer() {
    return (
        <footer className="border-t border-gray-100 py-12 mt-auto">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-sm text-foreground-muted">
                        &copy; {new Date().getFullYear()} Rohit. All rights reserved.
                    </div>

                    <div className="flex gap-6 text-sm font-medium text-foreground-muted">
                        <Link href="https://github.com" className="hover:text-foreground transition-colors">GitHub</Link>
                        <Link href="https://linkedin.com" className="hover:text-foreground transition-colors">LinkedIn</Link>
                        <Link href="mailto:hello@example.com" className="hover:text-foreground transition-colors">Email</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
