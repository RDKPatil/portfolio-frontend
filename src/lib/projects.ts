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

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

async function fetchProjectsFromAPI(): Promise<Project[]> {
    try {
        const response = await fetch(`${API_URL}/api/projects`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error(`API returned ${response.status}`);
        }

        const data = await response.json();
        return data;
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
