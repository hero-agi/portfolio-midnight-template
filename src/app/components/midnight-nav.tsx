export function MidnightNav() {
  const links = ["Home", "About", "Projects", "Experience", "Contact"];
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full backdrop-blur-xl bg-white/[0.03] border border-white/[0.07] flex items-center gap-6">
      <div className="text-white tracking-widest" style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}>
        MIDNIGHT
      </div>
      <div className="hidden md:flex items-center gap-5">
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors">
            {l}
          </a>
        ))}
      </div>
      <button className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400 text-white">
        Hire me
      </button>
    </nav>
  );
}
