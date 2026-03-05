const experiences = [
    {
        role: 'Senior Fullstack Engineer',
        company: 'BitHealth',
        period: 'July 2025 – Present',
        techStack: 'Angular, NestJS, MySQL, TypeScript',
        accent: 'bg-indigo-600',
        companyColor: 'text-indigo-600',
        bullets: [
            'Developed internal web applications for Siloam Hospitals, including a calendar system, queue management, and front-office features.',
            'Built full-stack solutions using Angular, NestJS, and MySQL to support hospital operations.',
            'Optimized API performance and application scalability in an enterprise environment.',
        ],
    },
    {
        role: 'Fullstack Engineer',
        company: 'Base Indonesia',
        period: 'April 2020 – July 2025',
        techStack: 'Next.js, GraphQL, TypeScript, React, Golang, PostgreSQL, MongoDB',
        accent: 'bg-slate-400',
        companyColor: 'text-slate-600',
        bullets: [
            'Built and maintained an e-commerce website featuring an online skincare product recommendation system.',
            'Developed an internal dashboard to improve team productivity and operational efficiency.',
        ],
    },
    {
        role: 'Web Engineer',
        company: 'Style Theory',
        period: 'October 2018 – March 2020',
        techStack: 'React, MobX, GraphQL, JavaScript, Storybook',
        accent: 'bg-slate-400',
        companyColor: 'text-slate-600',
        bullets: [
            'Handled all website applications (customer web & internal dashboard) using the React framework with MobX.',
            'Implemented GraphQL for querying the internal management system.',
        ],
    },
    {
        role: 'Software Engineer',
        company: 'Xendit',
        period: 'November 2017 – September 2018',
        techStack: 'Node.js, React, JavaScript, REST API, MySQL, Redis, RabbitMQ, AWS, MongoDB',
        accent: 'bg-slate-400',
        companyColor: 'text-slate-600',
        bullets: [
            'Worked primarily on backend services using Node.js, with occasional frontend contributions on React-based web pages.',
            'Focused on the retail outlet service domain within Xendit\'s payment platform.',
            'Built an integration between Alfamart and Xendit, enabling customers to complete payments at Alfamart retail locations.',
        ],
    },
];

function Experience() {
    return (
        <section className="py-20 bg-slate-50" id="experience">
            <div className="container mx-auto px-6 max-w-4xl">
                <h3 className="text-3xl font-bold text-center mb-12 relative pb-4">
                    Professional Experience
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-600 rounded"></span>
                </h3>
                <div className="space-y-8">
                    {experiences.map((exp) => (
                        <div
                            key={exp.company}
                            className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 w-1 h-full ${exp.accent}`}></div>
                            <div className="md:flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800">{exp.role}</h4>
                                    <p className={`${exp.companyColor} font-semibold text-lg`}>{exp.company}</p>
                                </div>
                                <span className="inline-block mt-2 md:mt-0 text-slate-600 text-sm bg-slate-100 px-4 py-1.5 rounded-full font-medium">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-sm text-indigo-600 font-semibold mb-3">
                                Tech Stack: {exp.techStack}
                            </p>
                            <ul className="list-disc list-outside ml-5 text-slate-600 space-y-2 leading-relaxed">
                                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
