import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    href?: string;
}

export function Button({
    children,
    variant = 'primary',
    href,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-foreground text-background hover:bg-foreground/90 focus:ring-foreground",
        outline: "border border-border bg-transparent hover:bg-accent/10 text-foreground focus:ring-border",
        ghost: "bg-transparent hover:bg-accent/10 text-foreground-muted hover:text-foreground",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
}
