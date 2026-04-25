import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Download, Eye, Send } from "lucide-react";

export function MidnightHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-400/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-8">
          <div className="p-1 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-400">
            <div className="w-36 h-36 rounded-full overflow-hidden bg-[#050816]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-4 text-white/50 tracking-[0.3em] uppercase" style={{ fontSize: 13 }}>
          Senior Product Designer · Berlin
        </div>

        <h1
          className="text-white mb-6"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1 }}
        >
          Alex{" "}
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            Novak
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-white/50 mb-10" style={{ fontSize: 18, lineHeight: 1.6 }}>
          Crafting digital products at the intersection of design and engineering.
          I help teams ship beautiful, high-performance SaaS interfaces.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white flex items-center gap-2 hover:scale-105 transition">
            <Send size={16} /> Hire me
          </button>
          <button className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.07] text-white flex items-center gap-2 hover:bg-white/[0.06] transition">
            <Eye size={16} /> View projects
          </button>
          <button className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.07] text-white flex items-center gap-2 hover:bg-white/[0.06] transition">
            <Download size={16} /> Download CV
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl">
          {[
            { k: "8+", v: "Years" },
            { k: "42", v: "Projects" },
            { k: "11", v: "Companies" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div
                className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: 36 }}
              >
                {s.k}
              </div>
              <div className="text-white/50 uppercase tracking-wider" style={{ fontSize: 12 }}>
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
