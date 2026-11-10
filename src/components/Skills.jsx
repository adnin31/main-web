import { Chip, Reveal, SectionTitle } from './ui';

const groups = [
    {
        icon: 'fas fa-laptop-code',
        label: 'Frontend',
        title: 'Interfaces that scale',
        desc: 'Component-driven UIs for customer-facing products and internal dashboards.',
        tags: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Angular', 'Vue 3', 'Redux', 'Tailwind CSS'],
    },
    {
        icon: 'fas fa-server',
        label: 'Backend',
        title: 'Reliable services',
        desc: 'Payment APIs, enterprise backends, and microservices built with Clean Architecture.',
        tags: ['Node.js', 'Express.js', 'NestJS', 'Golang', 'Laravel', 'TypeScript'],
    },
    {
        icon: 'fas fa-database',
        label: 'Database',
        title: 'Data that holds up',
        desc: 'Relational and document stores for transactional and operational workloads.',
        tags: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
        icon: 'fas fa-plug',
        label: 'APIs & Integration',
        title: 'Connected systems',
        desc: 'Bank, payment, and third-party integrations with message queues where it counts.',
        tags: ['REST', 'GraphQL', 'RabbitMQ', 'WhatsApp API', 'Intercom'],
    },
    {
        icon: 'fas fa-cloud',
        label: 'DevOps & Cloud',
        title: 'Ship & test with confidence',
        desc: 'Containerized deployments, CI/CD pipelines, and automated testing.',
        tags: ['Docker', 'Git', 'CI/CD', 'Jest', 'Selenium', 'Vercel', 'AWS', 'GCP', 'Firebase'],
    },
    {
        icon: 'fas fa-cubes',
        label: 'Power Platform',
        title: 'Low-code for enterprise',
        desc: 'Business apps and automated workflows for manufacturing teams, plus corporate training.',
        tags: ['Power Apps', 'Power Automate', 'Dataverse', 'SharePoint', 'Teams'],
    },
];

function Skills() {
    return (
        <section id="skills" className="relative py-28 border-t border-white/5">
            <div className="absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-amber-500/[0.06] to-transparent pointer-events-none" />
            <div className="relative container mx-auto px-6 max-w-6xl">
                <SectionTitle
                    center
                    eyebrow="Technical Skills"
                    title="What I Work"
                    accent="With"
                    subtitle="A full-stack toolkit refined over 8+ years of shipping production software — from fintech to the factory floor."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groups.map((g) => (
                        <Reveal
                            key={g.label}
                            className="group rounded-2xl border border-white/10 bg-ink-900 p-7 hover:border-amber-400/40 hover:-translate-y-1 transition duration-300"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-11 h-11 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                                    <i className={g.icon} />
                                </div>
                                <span className="font-mono text-[11px] text-amber-300 border border-amber-400/30 bg-amber-400/5 px-2.5 py-1 rounded-md">
                                    {g.label}
                                </span>
                            </div>
                            <h3 className="font-display font-bold text-xl text-white">{g.title}</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed mt-3 mb-6">{g.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {g.tags.map((t) => <Chip key={t}>{t}</Chip>)}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
