import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";

export default function AboutPage() {
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
                        {/* ACwO */}
                        <div className="relative border-l-2 border-gray-100 pl-8 pb-2">
                            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-200"></span>
                            <h3 className="text-xl font-bold text-foreground">Assistant Tech Lead</h3>
                            <div className="text-accent font-medium mb-1">ACwO (Mobilla’s Sister Company)</div>
                            <div className="text-sm text-foreground-muted mb-4">Apr 2023 – Present • Mumbai</div>
                            <p className="text-base mb-2">
                                Leading technical initiatives and directly collaborating with the CTO on system design.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-base">
                                <li>Lead developer for digital signature onboarding systems and sales data platforms.</li>
                                <li>Collaborated with Sales, HR, and Finance to design automation solutions, reducing manual effort by 30%.</li>
                                <li>Created Power BI dashboards for key performance indicators (KPIs).</li>
                                <li>Mentored junior engineers and conducted code reviews to ensure code quality.</li>
                            </ul>
                        </div>

                        {/* Mobilla */}
                        <div className="relative border-l-2 border-gray-100 pl-8 pb-2">
                            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-200"></span>
                            <h3 className="text-xl font-bold text-foreground">Full Stack Developer & Project Coordinator</h3>
                            <div className="text-accent font-medium mb-1">Mobilla</div>
                            <div className="text-sm text-foreground-muted mb-4">Dec 2022 – Apr 2023 • Mumbai</div>
                            <ul className="list-disc pl-5 space-y-1 text-base">
                                <li>Developed web applications using Laravel, PHP, and custom APIs for Instagram integration.</li>
                                <li>Implemented ERP workflow automations, cutting sales order processing time.</li>
                                <li>Coordinated with third-party vendors and managed insourcing of technical projects.</li>
                            </ul>
                        </div>

                        {/* Tritorc */}
                        <div className="relative border-l-2 border-gray-100 pl-8 pb-2">
                            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-200"></span>
                            <h3 className="text-xl font-bold text-foreground">Web Developer</h3>
                            <div className="text-accent font-medium mb-1">Tritorc</div>
                            <div className="text-sm text-foreground-muted mb-4">Mar 2022 – Nov 2022 • Thane</div>
                            <ul className="list-disc pl-5 space-y-1 text-base">
                                <li>Built a lead generation website incorporating 3D rendering for improved engagement.</li>
                                <li>Applied advanced SEO practices, boosting inbound leads by 30X.</li>
                                <li>Optimized database schemas for performance at scale.</li>
                            </ul>
                        </div>

                        {/* Ziroh Labs */}
                        <div className="relative border-l-2 border-gray-100 pl-8 pb-2">
                            <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-200"></span>
                            <h3 className="text-xl font-bold text-foreground">Java Developer (Project)</h3>
                            <div className="text-accent font-medium mb-1">Ziroh Labs</div>
                            <div className="text-sm text-foreground-muted mb-4">2021</div>
                            <ul className="list-disc pl-5 space-y-1 text-base">
                                <li>Developed a Cloud File System (CFS) using Java Maven and Dropbox SDK with encryption.</li>
                                <li>Delivered project ahead of schedule, reducing release cycle by 20%.</li>
                            </ul>
                        </div>
                    </div>

                    <hr className="border-gray-100 my-8" />

                    <h2 className="text-2xl font-bold text-foreground">Education</h2>
                    <ul className="space-y-2">
                        <li><strong>MCA</strong>, Pune University (2022)</li>
                        <li><strong>B.Sc. Computer Science</strong>, Mumbai University (2019)</li>
                    </ul>
                </div>
            </Section>
        </Container>
    );
}
