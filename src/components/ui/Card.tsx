import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all hover:shadow-md ${className}`}>
            {children}
        </div>
    );
}
