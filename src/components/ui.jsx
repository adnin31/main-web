import { useEffect, useRef } from 'react';

export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (!('IntersectionObserver' in window)) {
            el.classList.add('is-visible');
            return;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible');
                    io.disconnect();
                }
            },
            { threshold: 0.12 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <Tag ref={ref} className={`reveal ${className}`} {...rest}>
            {children}
        </Tag>
    );
}

export function Eyebrow({ children }) {
    return (
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400 mb-4">
            {children}
        </p>
    );
}

export function SectionTitle({ eyebrow, title, accent, subtitle, center = false }) {
    return (
        <Reveal className={`mb-14 ${center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight text-white">
                {title} <span className="text-amber-400">{accent}</span>
            </h2>
            {subtitle && <p className="mt-5 text-zinc-400 leading-relaxed">{subtitle}</p>}
        </Reveal>
    );
}

export function Chip({ children }) {
    return (
        <span className="font-mono text-xs text-zinc-300 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-md">
            {children}
        </span>
    );
}
