import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { getSkills, Skill } from "@/lib/data";

interface SkillCategory {
    title: string;
    skills: string[];
}

export default async function SkillsPage() {
    const skills = await getSkills();

    // Group skills by category
    const skillsByCategory: Record<string, string[]> = {};
    skills.forEach(skill => {
        if (!skillsByCategory[skill.category]) {
            skillsByCategory[skill.category] = [];
        }
        skillsByCategory[skill.category].push(skill.name);
    });

    // Convert to array of objects for rendering
    const categories: SkillCategory[] = Object.entries(skillsByCategory).map(([title, skills]) => ({
        title,
        skills
    }));

    // Optional: Define a specific order for categories if needed, otherwise they appear in order of discovery
    // For now, we trust the database order if we seeded carefully, or we can just map.

    return (
        <Container>
            <Section>
                <div className="max-w-3xl mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">Skills & Expertise</h1>
                    <p className="text-xl text-foreground-muted">
                        Comprehensive technical stack spanning full stack development, data analytics, and engineering leadership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((category, index) => (
                        <Card key={index} className="flex flex-col h-full">
                            <h2 className="text-lg font-bold mb-4 text-foreground border-b border-gray-100 pb-2">{category.title}</h2>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium bg-gray-50 text-foreground-muted border border-gray-100"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </Container>
    );
}
