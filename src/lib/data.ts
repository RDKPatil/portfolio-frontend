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

export interface Skill {
    id: number;
    name: string;
    category: string;
    proficiency_level: number;
    order: number;
}

export interface AboutSection {
    id: number;
    section_type: 'experience' | 'education' | 'approach';
    title: string;
    company: string | null;
    duration: string | null;
    description: string;
    order: number;
}

export async function getSkills(): Promise<Skill[]> {
    try {
        const response = await fetch(`${API_URL}/skills`, {
            next: { revalidate: 3600 },
        });
        if (!response.ok) throw new Error('Failed to fetch skills');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getAboutSections(): Promise<AboutSection[]> {
    try {
        const response = await fetch(`${API_URL}/about`, {
            next: { revalidate: 3600 },
        });
        if (!response.ok) throw new Error('Failed to fetch about sections');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}
