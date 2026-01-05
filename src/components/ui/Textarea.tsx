import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

export function Textarea({ label, className = '', id, ...props }: TextareaProps) {
    return (
        <div className={className}>
            {label && id && (
                <label htmlFor={id} className="block text-sm font-medium text-foreground-muted mb-1">
                    {label}
                </label>
            )}
            <textarea
                id={id}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                {...props}
            />
        </div>
    );
}
