import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function MidnightSocial() {
  const items = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Mail, href: "#" },
  ];
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {items.map((it, i) => (
        <a
          key={i}
          href={it.href}
          className="w-10 h-10 rounded-full backdrop-blur-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center text-white/60 hover:text-white hover:scale-110 transition-all"
        >
          <it.icon size={16} />
        </a>
      ))}
      <div className="w-px h-16 bg-white/10 mx-auto mt-2" />
    </div>
  );
}
