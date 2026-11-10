import { useEffect, useState } from 'react';

const items = [
    { id: 'home', icon: 'fas fa-house', label: 'Home', href: '#home' },
    { id: 'skills', icon: 'fas fa-code', label: 'Skills', href: '#skills' },
    { id: 'experience', icon: 'fas fa-briefcase', label: 'Experience', href: '#experience' },
    { id: 'contact', icon: 'fas fa-envelope', label: 'Contact', href: '#contact' },
    { id: 'github', icon: 'fab fa-github', label: 'GitHub', href: 'https://github.com/adnin31', external: true },
    { id: 'linkedin', icon: 'fab fa-linkedin-in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/adnin-rais-2976b811a/', external: true },
];

function getInitialTheme() {
    return document.documentElement.classList.contains('light') ? 'light' : 'dark';
}

function ThemeToggle() {
    const [theme, setTheme] = useState(getInitialTheme);
    const isLight = theme === 'light';

    useEffect(() => {
        document.documentElement.classList.toggle('light', isLight);
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', isLight ? '#faf8f4' : '#0a0a0b');
    }, [isLight]);

    // Follow the OS setting until the visitor picks a theme themselves
    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: light)');
        const onChange = (e) => {
            let saved = null;
            try { saved = localStorage.getItem('theme'); } catch (err) { /* storage unavailable */ }
            if (!saved) setTheme(e.matches ? 'light' : 'dark');
        };
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);

    const toggle = () => {
        const next = isLight ? 'dark' : 'light';
        setTheme(next);
        try { localStorage.setItem('theme', next); } catch (err) { /* storage unavailable */ }
    };

    const label = isLight ? 'Switch to night mode' : 'Switch to day mode';

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={label}
            title={label}
            className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border border-white/10 text-amber-400 hover:border-amber-400/60 hover:-translate-y-1 transition"
        >
            <i className={`fas ${isLight ? 'fa-moon' : 'fa-sun'} text-sm`} />
            <span className="pointer-events-none absolute -top-9 font-mono text-[11px] text-white bg-ink-800 border border-white/10 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {isLight ? 'Night' : 'Day'}
            </span>
        </button>
    );
}

function Dock() {
    const [active, setActive] = useState('home');

    useEffect(() => {
        const sections = items.filter((i) => !i.external).map((i) => document.getElementById(i.id)).filter(Boolean);
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        sections.forEach((s) => io.observe(s));
        return () => io.disconnect();
    }, []);

    return (
        <nav
            aria-label="Main"
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-1.5 rounded-2xl border border-white/10 bg-ink-900/80 backdrop-blur-xl px-2 py-2 shadow-[0_10px_40px_var(--dock-shadow)]"
        >
            {items.map((item, idx) => {
                const isActive = active === item.id;
                return (
                    <div key={item.id} className="flex items-center">
                        {idx === 4 && <span className="w-px h-6 bg-white/10 mx-1" />}
                        <a
                            href={item.href}
                            aria-label={item.label}
                            title={item.label}
                            {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                            className={`group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition ${
                                isActive
                                    ? 'bg-amber-400/15 border-amber-400/60 text-amber-400'
                                    : 'border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:-translate-y-1'
                            }`}
                        >
                            <i className={`${item.icon} text-sm`} />
                            {isActive && <span className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-amber-400" />}
                            <span className="pointer-events-none absolute -top-9 font-mono text-[11px] text-white bg-ink-800 border border-white/10 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                                {item.label}
                            </span>
                        </a>
                    </div>
                );
            })}
            <span className="w-px h-6 bg-white/10 mx-1" />
            <ThemeToggle />
        </nav>
    );
}

export default Dock;
