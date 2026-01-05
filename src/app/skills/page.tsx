import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

interface SkillCategory {
    title: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages",
        skills: ["Java", "Python", "PHP", "JavaScript", "TypeScript"]
    },
    {
        title: "Frameworks & Libraries",
        skills: ["Laravel", "React.js", "Node.js", "Flutter", "AngularJS", "Bootstrap", "JSP", "Servlets"]
    },
    {
        title: "Web & Cloud",
        skills: ["REST APIs", "HTML5/CSS3", "AWS (Basics)", "Shopify", "XML"]
    },
    {
        title: "Data & Reporting",
        skills: ["MySQL", "MongoDB", "Power BI", "JDBC"]
    },
    {
        title: "Leadership & Methodology",
        skills: ["Team Mentoring", "System Design", "Agile/Scrum", "Code Reviews", "Jira", "Technical Documentation"]
    }
];

export default function SkillsPage() {
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
                    {skillCategories.map((category, index) => (
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
