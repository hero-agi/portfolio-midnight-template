import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import type { PortfolioProfile, PortfolioContact } from '../data/types';

interface Props { profile: PortfolioProfile; contact: PortfolioContact; }

// Assign proficiency levels: first badges = primary skills = higher level
const DEFAULT_LEVELS = [95, 90, 88, 85, 82, 80, 78, 76];

function RadarChart({ badges }: { badges: string[] }) {
  const skills = badges.slice(0, 8).map((name, i) => ({
    name,
    level: DEFAULT_LEVELS[i] ?? 75,
  }));

  const n = skills.length;
  if (n < 3) return null;

  const cx = 160;
  const cy = 155;
  const r = 100;
  const labelR = r + 28;

  const angle = (i: number) => (i * 2 * Math.PI) / n - Math.PI / 2;

  const pt = (i: number, radius: number) => ({
    x: cx + radius * Math.cos(angle(i)),
    y: cy + radius * Math.sin(angle(i)),
  });

  const polygonPts = (radius: number) =>
    skills.map((_, i) => `${pt(i, radius).x},${pt(i, radius).y}`).join(' ');

  const skillPts = skills.map((s, i) => pt(i, r * s.level / 100));

  return (
    <svg viewBox="0 0 320 310" className="w-full max-w-xs mx-auto" aria-hidden="true">
      <defs>
        <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="radarStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      {/* Grid rings */}
      {[25, 50, 75, 100].map(pct => (
        <polygon
          key={pct}
          points={polygonPts(r * pct / 100)}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
        />
      ))}

      {/* Axis spokes */}
      {skills.map((_, i) => {
        const end = pt(i, r);
        return (
          <line
            key={i}
            x1={cx} y1={cy}
            x2={end.x} y2={end.y}
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="1"
          />
        );
      })}

      {/* Filled skill polygon */}
      <polygon
        points={skillPts.map(p => `${p.x},${p.y}`).join(' ')}
        fill="url(#radarFill)"
        stroke="url(#radarStroke)"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Skill dots */}
      {skillPts.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="5" fill="#8b5cf6" />
          <circle cx={p.x} cy={p.y} r="3" fill="#e0d7ff" />
        </g>
      ))}

      {/* Skill labels */}
      {skills.map((s, i) => {
        const lp = pt(i, labelR);
        const anchor =
          lp.x < cx - 5 ? 'end' : lp.x > cx + 5 ? 'start' : 'middle';
        return (
          <text
            key={i}
            x={lp.x}
            y={lp.y}
            textAnchor={anchor}
            dominantBaseline="middle"
            fill="rgba(255,255,255,0.75)"
            fontSize="11"
            fontFamily="Inter, sans-serif"
            fontWeight="500"
          >
            {s.name}
          </text>
        );
      })}

      {/* Center dot */}
      <circle cx={cx} cy={cy} r="3" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

export function MidnightAbout({ profile, contact }: Props) {
  const socials = [
    { icon: Linkedin, label: 'LinkedIn', value: contact.linkedin || '—', href: contact.linkedin || '#' },
    { icon: Github,   label: 'GitHub',   value: contact.github   || '—', href: contact.github   || '#' },
    { icon: Mail,     label: 'Email',    value: contact.email,            href: `mailto:${contact.email}` },
  ].filter(s => s.value && s.value !== '—' || s.label === 'Email');

  return (
    <section id="about" className="relative px-6 py-32 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-white/50 uppercase tracking-[0.3em] mb-3" style={{ fontSize: 12 }}>About</div>
        <h2 className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)' }}>
          {profile.name.split(' ')[0]}{' '}
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            {profile.title.split(' ').slice(0, 2).join(' ')}
          </span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left — description + radar chart */}
        <div>
          <p className="text-white/70 mb-10" style={{ lineHeight: 1.7 }}>{profile.description}</p>

          {profile.badges.length >= 3 && (
            <div>
              <div className="text-white/40 uppercase tracking-[0.2em] mb-6 text-center" style={{ fontSize: 11 }}>
                Skills
              </div>
              <RadarChart badges={profile.badges} />
            </div>
          )}
        </div>

        {/* Right — status card + socials */}
        <div className="space-y-5">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <span className="text-white/70 uppercase tracking-wider" style={{ fontSize: 12 }}>
                {profile.availableText || 'Available for new projects'}
              </span>
            </div>
            <div className="text-white mt-3" style={{ fontSize: 22, fontWeight: 700 }}>Open to work</div>
            <div className="flex items-center gap-2 mt-4 text-white/60" style={{ fontSize: 13 }}>
              <MapPin size={14} /> Remote
            </div>
          </div>

          {socials.map(c => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl hover:bg-white/[0.06] hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600/30 to-cyan-400/20 flex items-center justify-center">
                  <c.icon size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-white/50" style={{ fontSize: 12 }}>{c.label}</div>
                  <div className="text-white" style={{ fontSize: 14 }}>{c.value}</div>
                </div>
              </div>
              <span className="text-white/40">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
