import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Insights' },
    { href: '/contact', label: 'Contact' },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-background/80 backdrop-blur-md">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="font-semibold text-lg tracking-tight hover:text-accent transition-colors">
                        ROHIT
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <ThemeToggle />
                    </nav>

                    {/* Mobile Nav Placeholder (Can be implemented with a sheet or simpler later) */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        {/* Simple Mobile Menu Trigger or simplified list */}
                        <span className="text-sm text-foreground-muted">Menu</span>
                    </div>
                </div>
            </Container>
        </header>
    );
}
