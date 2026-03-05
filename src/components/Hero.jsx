function Hero() {
    return (
        <header className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white py-24">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Adnin Rais</h1>
                <h2 className="text-2xl font-light mb-6 text-indigo-200">
                    Senior Full-Stack Software Engineer
                </h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300 leading-relaxed">
                    Over 8 years of experience designing, building, and maintaining large-scale web
                    applications in the fintech, e-commerce, and retail industries. Proficient in React,
                    TypeScript, Node.js, and Golang. Currently open to remote opportunities as a developer
                    at international companies.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="mailto:adnin.rais31@gmail.com"
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg"
                    >
                        <i className="fas fa-envelope mr-2"></i>Contact Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/adnin-rais-2976b811a/"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-transparent border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-white px-8 py-3 rounded-full font-semibold transition"
                    >
                        <i className="fab fa-linkedin mr-2"></i>LinkedIn
                    </a>
                    <a
                        href="https://github.com/adnin31"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold transition border-2 border-gray-800"
                    >
                        <i className="fab fa-github mr-2"></i>GitHub
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Hero;
