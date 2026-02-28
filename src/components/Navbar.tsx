import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-6"
      }`}>
      <div className={`mx-auto max-w-5xl px-4 transition-all duration-500 ${scrolled ? "translate-y-0" : "translate-y-2"
        }`}>
        <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled
          ? "bg-background/60 backdrop-blur-xl border border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-transparent shadow-none"
          }`}>
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:rotate-12 transition-transform">
              <Code2 size={20} />
            </div>
            <span className="font-display text-lg font-black tracking-tight text-foreground transition-all">
              PORT<span className="text-primary italic">FOLIO</span>
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-bold text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {l.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-primary/10 rounded-xl transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 mx-4 mt-2 overflow-hidden"
          >
            <div className="p-4 rounded-2xl bg-background/95 backdrop-blur-2xl border border-border/50 shadow-2xl flex flex-col gap-2">
              {navLinks.map((l, idx) => (
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-4 text-lg font-bold text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-all"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
