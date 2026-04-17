import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#summary", label: "Summary" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur border-b border-border">
      <div className="font-mono text-xs text-gray-500 flex items-center gap-2 px-4 py-2 border-b border-border bg-surface/50">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent/80" />
        </span>
        <span className="text-gray-600">portfolio.tsx — Dev Ratna Saxena</span>
        <span className="ml-auto flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-accent/20 text-accent text-[10px]">WCAG 2.0/2.1 A-AA</span>
          <span className="px-2 py-0.5 rounded bg-accent-blue/20 text-accent-blue text-[10px]">Tested</span>
        </span>
      </div>
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="text-accent font-semibold tracking-tight">Dev Ratna Saxena</a>
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <li key={href}><a href={href} className="text-gray-400 hover:text-accent transition-colors text-sm">{label}</a></li>
          ))}
        </ul>
        <button type="button" className="md:hidden p-2 text-gray-400 hover:text-accent" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <ul className="md:hidden border-t border-border bg-charcoal py-3 px-4 flex flex-col gap-2">
          {links.map(({ href, label }) => (
            <li key={href}><a href={href} className="block py-2 text-gray-400 hover:text-accent transition-colors" onClick={() => setOpen(false)}>{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
