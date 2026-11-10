import { Eyebrow, Reveal } from './ui';

function Footer() {
    return (
        <footer id="contact" className="relative overflow-hidden border-t border-white/5 pt-28 pb-36">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-200px] w-[700px] h-[400px] rounded-full bg-amber-500/15 blur-[140px] pointer-events-none" />
            <div className="relative container mx-auto px-6 max-w-4xl text-center">
                <Reveal>
                    <Eyebrow>Get In Touch</Eyebrow>
                    <h2 className="font-display font-black text-4xl md:text-6xl text-white leading-tight">
                        Let&apos;s build something <span className="text-amber-400">great.</span>
                    </h2>
                    <p className="text-zinc-400 mt-6 max-w-xl mx-auto leading-relaxed">
                        Currently open to full-stack roles at international companies. Reach out by email or
                        WhatsApp and I&apos;ll get back to you.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-10">
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=adnin.rais31@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black px-7 py-3 rounded-full font-semibold transition"
                        >
                            <i className="fas fa-envelope" /> adnin.rais31@gmail.com
                        </a>
                        <a
                            href="https://wa.me/6285715162024"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.03] hover:bg-white/10 text-white px-7 py-3 rounded-full font-semibold transition"
                        >
                            <i className="fab fa-whatsapp" /> Contact Me
                        </a>
                    </div>
                </Reveal>
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-xs text-zinc-500">
                    <p>&copy; {new Date().getFullYear()} Adnin Rais. All rights reserved.</p>
                    <p>Built with React &amp; Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
