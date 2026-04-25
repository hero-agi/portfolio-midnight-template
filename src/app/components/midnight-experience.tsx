import type { PortfolioExperience } from '../data/types';

interface Props { experience: PortfolioExperience[]; }

export function MidnightExperience({ experience }: Props) {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="relative px-6 py-32 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-white/50 uppercase tracking-[0.3em] mb-3" style={{ fontSize: 12 }}>Experience</div>
        <h2 className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)' }}>
          Professional{' '}
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">journey</span>
        </h2>
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/50 via-cyan-400/30 to-transparent" />

        <div className="space-y-10">
          {experience.map((e, idx) => {
            const initial = e.company[0].toUpperCase();

            // Normalize roles: rich format or simple fallback
            const roles = e.roles && e.roles.length > 0
              ? e.roles
              : e.role
                ? [{ title: e.role, period: e.period, description: e.description || '', skills: [] }]
                : [];

            return (
              <div key={idx} className="relative pl-20">
                {/* Company avatar */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-xl overflow-hidden border border-white/10 flex-shrink-0"
                     style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(34,211,238,0.2))' }}>
                  {e.logo ? (
                    <img src={e.logo} alt={e.company} className="w-full h-full object-contain p-1.5" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white" style={{ fontWeight: 900, fontSize: 18 }}>
                      {initial}
                    </div>
                  )}
                </div>

                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl overflow-hidden">
                  {/* Company header */}
                  <div className="px-6 pt-5 pb-4 border-b border-white/[0.05]">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white" style={{ fontWeight: 800, fontSize: 18 }}>{e.company}</span>
                          {e.isCurrent && (
                            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400" style={{ fontSize: 11 }}>
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                              Actual
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          {e.badge && (
                            <span className="text-white/40" style={{ fontSize: 13 }}>{e.badge}</span>
                          )}
                          {e.location && (
                            <>
                              <span className="text-white/20" style={{ fontSize: 13 }}>·</span>
                              <span className="text-white/40" style={{ fontSize: 13 }}>📍 {e.location}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-violet-600/15 border border-violet-500/30 text-violet-300 flex-shrink-0" style={{ fontSize: 12 }}>
                        {e.period}
                      </span>
                    </div>
                  </div>

                  {/* Roles */}
                  {roles.length > 0 && (
                    <div className="px-6 py-4 space-y-5">
                      {roles.map((r, ri) => (
                        <div key={ri} className={ri < roles.length - 1 ? 'pb-5 border-b border-white/[0.04]' : ''}>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                              <span className="text-white" style={{ fontWeight: 600, fontSize: 15 }}>{r.title}</span>
                              {r.isCurrent && (
                                <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400" style={{ fontSize: 10 }}>
                                  Current
                                </span>
                              )}
                            </div>
                            <span className="text-white/30" style={{ fontSize: 12 }}>{r.period}</span>
                          </div>

                          {r.description && (
                            <p className="text-white/55 mb-3 pl-3.5" style={{ fontSize: 13.5, lineHeight: 1.65 }}>
                              {r.description}
                            </p>
                          )}

                          {r.skills && r.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pl-3.5">
                              {r.skills.map(sk => (
                                <span key={sk} className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.09] text-white/60" style={{ fontSize: 11 }}>
                                  {sk}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Impact metrics */}
                  {e.impacts && e.impacts.length > 0 && (
                    <div className="px-6 py-4 border-t border-white/[0.05] flex flex-wrap gap-5">
                      {e.impacts.map((imp, ii) => (
                        <div key={ii} className="flex items-center gap-2">
                          <span style={{ fontSize: 16 }}>{imp.icon}</span>
                          <span className="text-white/50" style={{ fontSize: 12 }}>{imp.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  {e.links && e.links.length > 0 && (
                    <div className="px-6 pb-4 flex gap-3">
                      {e.links.map((lk, li) => (
                        <a key={li} href={lk.url} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-1.5 text-violet-400 hover:text-violet-300 transition-colors"
                           style={{ fontSize: 13 }}>
                          <span>↗</span>
                          <span>{lk.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
