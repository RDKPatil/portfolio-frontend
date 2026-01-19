import { staticProjects } from './projects-static';

export interface Project {
    slug: string;
    title: string;
    category: string;
    summary: string;
    problem: string;
    approach: string;
    solution: string;
    impact: string;
    techStack: string[];
    featured?: boolean;
}

// Helper to ensure we use IPv4 localhost for server-side fetches and handle /api suffix
const getBaseUrl = () => {
    let url = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';
    // If running on server and using localhost, force 127.0.0.1 to avoid IPv6 issues
    if (typeof window === 'undefined') {
        url = url.replace('localhost', '127.0.0.1');
    }
    // Ensure no trailing slash
    return url.replace(/\/$/, '');
};

const API_URL = getBaseUrl();

async function fetchProjectsFromAPI(): Promise<Project[]> {
    try {
        const response = await fetch(`${API_URL}/projects`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error(`API returned ${response.status}`);
        }

        const data = await response.json();

        // Map backend snake_case to frontend camelCase
        return data.map((item: any) => ({
            ...item,
            techStack: item.tech_stack || [], // Map tech_stack to techStack
        }));
    } catch (error) {
        console.warn('Failed to fetch from API, using static data:', error);
        return staticProjects;
    }
}

// Export projects as a promise for use in Server Components
export async function getProjects(): Promise<Project[]> {
    // During build time or when API is unavailable, use static data
    if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_API_URL) {
        return staticProjects;
    }

    return fetchProjectsFromAPI();
}

// For backward compatibility, export a synchronous version
export const projects: Project[] = staticProjects;

export function getProjectBySlug(slug: string): Project | undefined {
    return staticProjects.find((p) => p.slug === slug);
}

// Async version for Server Components
export async function getProjectBySlugAsync(slug: string): Promise<Project | undefined> {
    const allProjects = await getProjects();
    return allProjects.find((p) => p.slug === slug);
}
