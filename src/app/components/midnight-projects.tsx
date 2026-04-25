import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fluxpay Dashboard",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    problem: "Merchants drowning in reconciliation data.",
    solution: "Unified ledger with smart filtering and AI summaries.",
    result: "-42% support tickets, +18% monthly active users.",
    stack: ["Next.js", "tRPC", "Postgres", "Stripe"],
  },
  {
    title: "Healia OS",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
    problem: "Clinicians switching between 6 tools per patient.",
    solution: "Integrated patient workspace with live telemetry.",
    result: "Saved 11 minutes per consultation on average.",
    stack: ["React", "FHIR", "WebSockets", "Tailwind"],
  },
  {
    title: "Nimbus Docs",
    category: "Developer Tools",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    problem: "Static docs nobody reads or updates.",
    solution: "Living docs platform with inline runnable examples.",
    result: "Used by 12K+ devs, 4.8★ GitHub rating.",
    stack: ["Remix", "MDX", "Monaco", "Deno"],
  },
  {
    title: "Orbit Analytics",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    problem: "PMs couldn't trust their funnel numbers.",
    solution: "Event-sourced analytics with audit trails.",
    result: "Adopted by 3 enterprise customers in 6 weeks.",
    stack: ["ClickHouse", "Vue", "Go", "Kafka"],
  },
  {
    title: "Mesa Design System",
    category: "Design System",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
    problem: "Fragmented UI across 5 product teams.",
    solution: "Tokenized, accessible, type-safe component library.",
    result: "92% component coverage across all products.",
    stack: ["Figma", "Style Dictionary", "Radix", "TS"],
  },
  {
    title: "Quantic Studio",
    category: "Creative Tool",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
    problem: "Designers needed real motion prototyping.",
    solution: "Browser-based timeline editor with code export.",
    result: "Shipped v1, featured on Product Hunt #2.",
    stack: ["WebGL", "Motion", "Rust/WASM"],
  },
];

export function MidnightProjects() {
  return (
    <section id="projects" className="relative px-6 py-32 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-white/50 uppercase tracking-[0.3em] mb-3" style={{ fontSize: 12 }}>
          Selected work
        </div>
        <h2 className="text-white" style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)" }}>
          Projects that <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">shipped</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl overflow-hidden hover:scale-[1.02] hover:bg-white/[0.05] transition-all"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-violet-900/40 to-cyan-900/20">
              <ImageWithFallback src={p.image} alt={p.title} className="w-full h-full object-cover opacity-80" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/80" style={{ fontSize: 11 }}>
                {p.category}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-white mb-4" style={{ fontWeight: 700, fontSize: 20 }}>
                {p.title}
              </h3>

              <div className="space-y-2 mb-4">
                {[
                  { k: "Problem", v: p.problem },
                  { k: "Solution", v: p.solution },
                  { k: "Result", v: p.result },
                ].map((row) => (
                  <div key={row.k} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-violet-300/80 uppercase tracking-wider mb-0.5" style={{ fontSize: 10 }}>
                      {row.k}
                    </div>
                    <div className="text-white/70" style={{ fontSize: 13 }}>
                      {row.v}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/60"
                    style={{ fontSize: 11 }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/80 hover:bg-white/[0.08] transition flex items-center justify-center gap-1.5" style={{ fontSize: 13 }}>
                  <Github size={13} /> Code
                </button>
                <button className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:brightness-110 transition flex items-center justify-center gap-1.5" style={{ fontSize: 13 }}>
                  <ExternalLink size={13} /> Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
