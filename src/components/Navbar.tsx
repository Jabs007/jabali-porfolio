import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

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
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`flex items-center justify-between px-6 py-4 rounded-3xl transition-all duration-500 ${
            scrolled
              ? "bg-[#0C0C0C]/80 backdrop-blur-xl border border-white/10 shadow-2xl"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#" className="text-foreground font-black text-xl tracking-tight">
            ADAMS<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-bold text-muted-foreground hover:text-cyan-400 transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-auto group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-white/5 rounded-xl transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 overflow-hidden"
            >
              <div className="p-4 rounded-2xl bg-[#0C0C0C]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-4 text-lg font-bold text-muted-foreground hover:bg-white/5 hover:text-cyan-400 rounded-xl transition-all"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
