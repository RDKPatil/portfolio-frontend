import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { getAboutSections } from "@/lib/data";

export default async function AboutPage() {
    const sections = await getAboutSections();
    const experience = sections.filter(s => s.section_type === 'experience');
    const education = sections.filter(s => s.section_type === 'education');

    return (
        <Container>
            <Section className="max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight mb-8 text-foreground">About Me</h1>

                <div className="prose prose-lg text-foreground-muted space-y-6">
                    <p className="lead text-xl text-foreground font-medium">
                        I am an Assistant Tech Lead with 4+ years of experience in full stack development and automation.
                        Based in Mumbai, I specialize in building scalable systems using Laravel, React, and Python, while mentoring teams to deliver high-quality software.
                    </p>

                    <hr className="border-gray-100 my-8" />

                    <h2 className="text-2xl font-bold text-foreground">Experience</h2>

                    <div className="space-y-12 mt-6">
                        {experience.map((exp) => (
                            <div key={exp.id} className="relative border-l-2 border-gray-100 pl-8 pb-2">
                                <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-200"></span>
                                <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                                {exp.company && <div className="text-accent font-medium mb-1">{exp.company}</div>}
                                {exp.duration && <div className="text-sm text-foreground-muted mb-4">{exp.duration}</div>}
                                <div dangerouslySetInnerHTML={{ __html: exp.description }} />
                            </div>
                        ))}
                    </div>

                    <hr className="border-gray-100 my-8" />

                    <h2 className="text-2xl font-bold text-foreground">Education</h2>
                    <ul className="space-y-2">
                        {education.map((edu) => (
                            <li key={edu.id}>
                                <strong>{edu.title}</strong>, {edu.company} ({edu.duration})
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>
        </Container>
    );
}
