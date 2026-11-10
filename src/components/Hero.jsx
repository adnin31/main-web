import { Chip, Reveal } from './ui';

const stack = ['React', 'Next.js', 'TypeScript', 'Angular', 'Node.js', 'NestJS', 'Golang', 'Laravel', 'GraphQL', 'Power Apps'];

const stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '7', label: 'Companies' },
    { value: '50%', label: 'Faster Test Runs' },
    { value: '2017', label: 'Shipping Since' },
];

function Hero() {
    return (
        <header id="home" className="relative overflow-hidden min-h-screen flex items-center pt-20 pb-32">
            {/* Ambient glow + grid */}
            <div className="absolute inset-0 bg-grid pointer-events-none" />
            <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-amber-500/20 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-orange-700/10 blur-[140px] pointer-events-none" />

            <div className="relative container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
                    <Reveal>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-500/10 text-amber-100 text-xs md:text-sm font-medium px-4 py-1.5 rounded-full hover:bg-amber-500/20 transition"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
                            Open to opportunities at international companies
                            <i className="fas fa-chevron-right text-[10px] ml-1" />
                        </a>

                        <h1 className="font-display font-black text-white uppercase leading-[0.9] tracking-tight mt-8 text-[clamp(3.2rem,11vw,7.5rem)]">
                            Adnin
                            <br />
                            Rais
                        </h1>

                        <p className="font-mono font-semibold text-amber-400 text-lg md:text-xl mt-6">
                            Senior Full-Stack Software Engineer
                        </p>

                        <p className="text-zinc-300 text-base md:text-lg leading-relaxed mt-6 max-w-xl">
                            8 years architecting and scaling complex applications across fintech,
                            e-commerce, healthcare, and enterprise. Building with React, Angular, Node.js,
                            NestJS, Golang, GraphQL, and Microsoft Power Apps — with a focus on Clean
                            Architecture and performance.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-7 max-w-xl">
                            {stack.map((s) => <Chip key={s}>{s}</Chip>)}
                        </div>

                        <div className="flex flex-wrap gap-3 mt-9">
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=adnin.rais31@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-black px-7 py-3 rounded-full font-semibold transition shadow-[0_0_40px_-8px_rgba(251,191,36,0.6)]"
                            >
                                Hire Me <i className="fas fa-arrow-right text-sm" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/adnin-rais-2976b811a/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.03] hover:bg-white/10 text-white px-6 py-3 rounded-full font-semibold transition"
                            >
                                <i className="fab fa-linkedin" /> LinkedIn
                            </a>
                            <a
                                href="https://github.com/adnin31"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.03] hover:bg-white/10 text-white px-6 py-3 rounded-full font-semibold transition"
                            >
                                <i className="fab fa-github" /> GitHub
                            </a>
                        </div>
                    </Reveal>

                    {/* Profile card */}
                    <Reveal className="lg:mt-24">
                        <div className="rounded-2xl border border-white/10 bg-ink-900/80 backdrop-blur p-6 shadow-2xl">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-xl border-2 border-amber-400/70 bg-ink-800 flex items-center justify-center overflow-hidden shrink-0">
                                    <img src={`${process.env.PUBLIC_URL}/arrai_logo.png`} alt="Adnin Rais logo" className="w-12 h-12 object-contain" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-2">
                                        <p className="font-semibold text-white text-lg truncate">Adnin Rais</p>
                                        <span className="font-mono text-[11px] text-green-400 border border-green-500/40 bg-green-500/10 px-2 py-0.5 rounded-full shrink-0">
                                            ● Available
                                        </span>
                                    </div>
                                    <p className="font-mono text-xs text-amber-400 mt-1">Senior Full-Stack Engineer</p>
                                    <p className="font-mono text-xs text-zinc-500 mt-1">Currently @ Finnet Indonesia</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mt-6">
                                {stats.map((s) => (
                                    <div key={s.label} className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                                        <p className="font-display font-bold text-2xl text-white">{s.value}</p>
                                        <p className="text-xs text-zinc-500 mt-1">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </header>
    );
}

export default Hero;
