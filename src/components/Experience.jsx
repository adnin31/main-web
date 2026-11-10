import { Chip, Reveal, SectionTitle } from './ui';

const experiences = [
    {
        role: 'Fullstack Engineer',
        company: 'Finnet Indonesia',
        period: 'Apr 2026 – Present',
        current: true,
        techStack: ['Laravel', 'Golang', 'Vue 3', 'MySQL'],
        bullets: [
            ['Launched Enterprise Applications', 'Led the full-cycle development of a new custom CRM application to streamline internal processes.'],
            ['Drove Payment Security', 'Implemented 3DS (3D Secure) integration with Bank Mandiri in the core payment API using Laravel and Golang. Split the work into modular build phases and used a mock-server approach so development could continue while partner endpoints were unavailable.'],
            ['Built Wallet-as-a-Service Platform', 'Developed Finpay Nexa – Finmart Store, a WaaS solution for merchant partners, designing the architecture end to end with a Go backend, Vue 3 frontend and MySQL, delivered on a fixed deadline.'],
            ['Delivered Modern Transit Solutions', 'Implemented the QRIS Tap feature for payment acceptance on MRT Jakarta (MRTJ).'],
        ],
    },
    {
        role: 'Senior Fullstack Engineer',
        company: 'Siloam Hospital',
        period: 'Jul 2025 – Apr 2026',
        techStack: ['Angular', 'NestJS', 'MySQL', 'Jest', 'REST APIs'],
        bullets: [
            ['Optimized Testing Pipelines', 'Cut test execution time by 50% (2x faster) by migrating the frontend testing framework from Jasmine to Jest and targeting tests at modified code paths.'],
            ['Engineered Healthcare Enterprise Systems', 'Built mission-critical internal web apps for Siloam Hospitals — calendar systems, queue management, and front-office tools.'],
            ['Spearheaded System Integrations', 'Directed vendor-side API integrations and optimized core backend services for large-scale hospital management systems.'],
            ['Ensured Enterprise Scalability', 'Worked closely with Product and QA teams to keep strict performance, scalability, and maintainability standards.'],
        ],
    },
    {
        role: 'Power Apps Developer & Corporate Trainer',
        company: 'Toyota',
        type: 'Freelance',
        period: 'Jul 2025 – Feb 2026',
        techStack: ['Power Apps', 'Power Automate', 'Dataverse', 'SharePoint', 'Teams'],
        bullets: [
            ['Empowered Internal Teams', 'Designed and ran Power Apps training sessions, upskilling non-technical staff to build, automate, and manage their own business tools.'],
            ['Architected Manufacturing Solutions', 'Developed a People Management System for the car manufacturing division, optimizing workforce tracking on the factory floor.'],
            ['Drove Enterprise Integration', 'Connected the app with Microsoft Dataverse, SharePoint, and Teams into one automated workflow across the organization.'],
            ['Ensured Long-Term Success', 'Delivered technical documentation and best-practice frameworks so the in-house team can maintain and scale the system.'],
        ],
    },
    {
        role: 'Power Apps Developer',
        company: 'Michelin',
        type: 'Freelance',
        period: 'Jan 2025 – Jul 2026',
        techStack: ['Power Apps', 'Power Automate', 'SharePoint'],
        bullets: [
            ['Engineered Document Management Systems', 'Designed and deployed an internal document management application using Microsoft Power Apps and Power Automate.'],
            ['Streamlined Enterprise Workflows', 'Automated complex business processes to improve document tracking, retrieval speed, and reporting efficiency.'],
        ],
    },
    {
        role: 'Senior Fullstack Engineer',
        company: 'Base Indonesia',
        period: 'Apr 2020 – Jul 2025',
        techStack: ['Next.js', 'React', 'TypeScript', 'GraphQL', 'Golang', 'PostgreSQL', 'MongoDB'],
        bullets: [
            ['Architected Proprietary Enterprise Systems', 'Built custom ERP and Point of Sale (POS) systems from the ground up, unifying warehouse management, inventory tracking, and omnichannel sales.'],
            ['Engineered Custom E-Commerce Platforms', 'Led end-to-end development of an e-commerce platform with an algorithmic skin recommendation engine and a frictionless checkout.'],
            ['Drove Architectural Excellence', 'Directed core architecture across the ERP, POS, and e-commerce suite using Clean Architecture principles.'],
            ['Optimized Internal Operations', 'Deployed productivity dashboards integrated with the custom ERP to surface operational bottlenecks.'],
        ],
    },
    {
        role: 'Frontend Developer',
        company: 'Style Theory',
        period: 'Oct 2018 – Mar 2020',
        techStack: ['React', 'MobX', 'GraphQL', 'REST APIs', 'Storybook'],
        bullets: [
            ['Optimized Web Performance', 'Improved the customer-facing site with lazy loading and code splitting, reducing bundle sizes and page load times.'],
            ['Architected Reusable UI Systems', 'Built a UI component library with Storybook, ensuring design consistency across internal applications.'],
            ['Engineered Core Platforms', 'Owned frontend development for the customer web portal and internal management dashboards.'],
            ['Managed Complex State & Data', 'Integrated REST APIs with MobX on the customer platform and used GraphQL to power internal system queries.'],
        ],
    },
    {
        role: 'Software Engineer',
        company: 'Xendit',
        period: 'Nov 2017 – Sep 2018',
        techStack: ['Node.js', 'React', 'RabbitMQ', 'Microservices', 'Selenium'],
        bullets: [
            ['Engineered Retail Payment Gateways', 'Built the Alfamart payment integration from scratch, enabling over-the-counter cash payments across a nationwide network.'],
            ['Developed Core Financial Services', 'Delivered the BNI Virtual Account integration with Node.js, React, and RabbitMQ in a microservices ecosystem.'],
            ['Automated Financial Testing', 'Implemented end-to-end automated testing for the BNI disbursement system using Selenium.'],
        ],
    },
    {
        role: 'Web & SEO Administrator',
        company: 'Wonderworxs',
        type: 'Internship',
        period: 'Jan 2016 – Sep 2016',
        techStack: ['Web', 'SEO', 'QA'],
        bullets: [
            ['Maintained Web Integrity', 'Managed content updates and functional testing across multiple client websites.'],
            ['Drove SEO Optimization', 'Executed off-page SEO strategies and outreach campaigns to improve search visibility for client portfolios.'],
        ],
    },
];

function Experience() {
    return (
        <section id="experience" className="py-28 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-5xl">
                <SectionTitle
                    eyebrow="Career Timeline"
                    title="Professional"
                    accent="Experience"
                />
                <ol className="relative border-l border-white/10 ml-2 md:ml-3 space-y-10">
                    {experiences.map((exp) => (
                        <Reveal as="li" key={exp.company} className="relative pl-8 md:pl-12">
                            <span
                                className={`absolute -left-[7px] top-8 w-3.5 h-3.5 rounded-full border-2 ${
                                    exp.current
                                        ? 'bg-amber-400 border-amber-400 shadow-[0_0_16px_rgba(251,191,36,0.8)]'
                                        : 'bg-ink-950 border-zinc-600'
                                }`}
                            />
                            <div className="rounded-2xl border border-white/10 bg-ink-900 p-6 md:p-8 hover:border-amber-400/30 transition">
                                <div className="md:flex justify-between items-start gap-6 mb-5">
                                    <div>
                                        <h3 className="font-display font-bold text-lg md:text-xl text-white">{exp.role}</h3>
                                        <div className="flex flex-wrap items-center gap-2 mt-1.5">
                                            <p className="font-mono text-amber-400 text-sm">@ {exp.company}</p>
                                            {exp.type && (
                                                <span className="font-mono text-[11px] text-sky-300 border border-sky-400/30 bg-sky-400/10 px-2 py-0.5 rounded-md">
                                                    {exp.type}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <span
                                        className={`inline-block mt-3 md:mt-0 shrink-0 font-mono text-xs px-3 py-1.5 rounded-full border ${
                                            exp.current
                                                ? 'text-green-400 border-green-500/40 bg-green-500/10'
                                                : 'text-zinc-400 border-white/10 bg-white/[0.03]'
                                        }`}
                                    >
                                        {exp.period}
                                    </span>
                                </div>
                                <ul className="space-y-3 text-zinc-400 leading-relaxed mb-6">
                                    {exp.bullets.map(([title, text]) => (
                                        <li key={title} className="flex gap-3">
                                            <i className="fas fa-circle-check text-amber-400/80 text-sm mt-1.5 shrink-0" />
                                            <span>
                                                <span className="text-zinc-100 font-semibold">{title}:</span> {text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {exp.techStack.map((t) => <Chip key={t}>{t}</Chip>)}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default Experience;
