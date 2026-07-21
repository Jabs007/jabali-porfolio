import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border bg-[#0C0C0C]" role="contentinfo">
    <div className="section-container">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Adams Jabali Momanyi. Built with passion & code.
        </p>
        <nav className="flex gap-4 mt-4 md:mt-0">
          <a href="#about" className="text-muted-foreground hover:text-cyan-400">About</a>
          <a href="#expertise" className="text-muted-foreground hover:text-cyan-400">Expertise</a>
          <a href="#projects" className="text-muted-foreground hover:text-cyan-400">Projects</a>
          <a href="#contact" className="text-muted-foreground hover:text-cyan-400">Contact</a>
        </nav>
        <div className="flex gap-3 mt-4 md:mt-0">
          <a href="https://github.com/Jabs007" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-400">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/adams-jabali-880377371" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-400">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
