import { useState } from 'react';
import { Github, Linkedin, Mail, Twitter, Send } from 'lucide-react';
import type { PortfolioProfile, PortfolioContact } from '../data/types';

interface Props { profile: PortfolioProfile; contact: PortfolioContact; }

export function MidnightContact({ profile, contact }: Props) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const links = [
    { icon: Mail,     label: 'EMAIL',    value: contact.email,                          href: `mailto:${contact.email}` },
    { icon: Linkedin, label: 'LINKEDIN', value: contact.linkedin?.replace('https://www.', '').replace('https://', ''), href: contact.linkedin },
    { icon: Github,   label: 'GITHUB',   value: contact.github?.replace('https://github.com/', ''),  href: contact.github },
    { icon: Twitter,  label: 'TWITTER',  value: contact.twitter?.replace('https://twitter.com/', '@'), href: contact.twitter },
  ].filter(l => l.value && l.href);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.open(`mailto:${contact.email}?subject=${encodeURIComponent(form.subject || '¡Hola!')}&body=${encodeURIComponent(body)}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative px-6 py-32 max-w-6xl mx-auto">
      {/* Glows */}
      <div className="absolute inset-x-20 top-10 h-48 rounded-full bg-violet-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute right-20 bottom-10 h-48 w-64 rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none" />

      <div className="relative text-center mb-14">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 mb-4" style={{ fontSize: 12, letterSpacing: '0.15em' }}>
          ¿TRABAJAMOS JUNTOS?
        </div>
        <h2 className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)' }}>
          Contáctame
        </h2>
        <p className="text-white/40 mt-3" style={{ fontSize: 15 }}>
          Disponible para proyectos freelance y oportunidades full-time
        </p>
      </div>

      <div className="relative grid lg:grid-cols-2 gap-8 items-start">
        {/* Left — info */}
        <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl h-full flex flex-col">
          <h3 className="text-white mb-3" style={{ fontWeight: 800, fontSize: 26 }}>Hablemos</h3>
          <p className="text-white/50 mb-8" style={{ fontSize: 14, lineHeight: 1.7 }}>
            ¿Necesitas un dashboard, análisis de datos o automatización con IA?<br />Cuéntame tu proyecto.
          </p>

          <div className="space-y-3 flex-1">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.href?.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-violet-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-500/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <l.icon size={15} className="text-white/80" />
                </div>
                <div className="min-w-0">
                  <div className="text-white/30 uppercase" style={{ fontSize: 10, letterSpacing: '0.15em' }}>{l.label}</div>
                  <div className="text-white/80 truncate" style={{ fontSize: 13 }}>{l.value}</div>
                </div>
                <span className="ml-auto text-white/20 group-hover:text-violet-400 transition-colors">→</span>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] text-white/25 flex flex-wrap justify-between gap-2" style={{ fontSize: 12 }}>
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>Built with care</span>
          </div>
        </div>

        {/* Right — form */}
        <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Tu nombre"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition"
                style={{ fontSize: 14 }}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Tu email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition"
                style={{ fontSize: 14 }}
              />
            </div>
          </div>

          <input
            type="text"
            placeholder="¿En qué puedo ayudarte?"
            value={form.subject}
            onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition"
            style={{ fontSize: 14 }}
          />

          <textarea
            placeholder="Cuéntame tu proyecto..."
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition resize-none"
            style={{ fontSize: 14 }}
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: sent
                ? 'linear-gradient(135deg, #10b981, #059669)'
                : 'linear-gradient(135deg, #7c3aed, #0891b2)',
              fontSize: 15,
            }}
          >
            {sent ? (
              <>✓ ¡Mensaje enviado!</>
            ) : (
              <><Send size={16} /> Enviar mensaje</>
            )}
          </button>

          <p className="text-center text-white/25" style={{ fontSize: 12 }}>
            Respondo en menos de 24 horas
          </p>
        </form>
      </div>
    </section>
  );
}
