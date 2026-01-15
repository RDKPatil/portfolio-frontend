'use client';

import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 bg-background/80 backdrop-blur-md">
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

                    {/* Mobile Nav Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 -mr-2 text-foreground-muted hover:text-foreground"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 border-t border-border">
                        <nav className="flex flex-col space-y-4 pt-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-medium text-foreground-muted hover:text-accent transition-colors block"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </Container>
        </header>
    );
}
