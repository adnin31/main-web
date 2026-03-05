const Tag = ({ children }) => (
    <span className="bg-slate-100 text-slate-700 px-4 py-1.5 rounded-md text-sm font-semibold">
        {children}
    </span>
);

const SkillCard = ({ icon, iconBg, iconColor, title, tags }) => (
    <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 hover:-translate-y-1 transition duration-300">
        <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center ${iconColor} mb-6 text-2xl`}>
            <i className={icon}></i>
        </div>
        <h4 className="text-xl font-bold mb-4">{title}</h4>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
    </div>
);

function Skills() {
    return (
        <section className="py-20 bg-white" id="skills">
            <div className="container mx-auto px-6">
                <h3 className="text-3xl font-bold text-center mb-12 relative pb-4">
                    Technical Skills
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-600 rounded"></span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <SkillCard
                        icon="fas fa-laptop-code"
                        iconBg="bg-blue-100"
                        iconColor="text-blue-600"
                        title="Frontend"
                        tags={['React.js', 'Next.js', 'TypeScript', 'Angular', 'Tailwind CSS', 'Redux']}
                    />
                    <SkillCard
                        icon="fas fa-server"
                        iconBg="bg-green-100"
                        iconColor="text-green-600"
                        title="Backend"
                        tags={['Node.js', 'Golang', 'Nest.js', 'Express.js', 'GraphQL', 'REST API']}
                    />
                    <SkillCard
                        icon="fas fa-database"
                        iconBg="bg-purple-100"
                        iconColor="text-purple-600"
                        title="Database & Cloud"
                        tags={['PostgreSQL', 'MongoDB', 'MySQL', 'AWS', 'GCP', 'Docker']}
                    />
                </div>
            </div>
        </section>
    );
}

export default Skills;
