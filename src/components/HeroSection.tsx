import { useEffect, useState, useRef } from "react";
import { Linkedin, Mail, Github, MapPin } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SceneCanvas } from "./3d";
import { TextReveal, MagneticCursor } from "./animations";
import profileImg from "@/pictures/jab.jpeg";

const taglineText = "Data Scientist & Full-Stack Developer";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= taglineText.length) {
        setDisplayText(taglineText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-[calc(100dvh-5rem)] flex flex-col justify-center pt-16 overflow-hidden bg-[#0C0C0C]">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* 3D Background */}
      <SceneCanvas showParticles={true} showShapes={true} />

      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="section-container relative z-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-left space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Name with enhanced animation - smaller font sizes for better fit */}
          <div className="space-y-1">
            <TextReveal 
              text="Adams Jabali" 
              className="text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[6.5vw] font-black text-foreground leading-[0.9] tracking-tighter"
              delay={0}
              direction="up"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-muted-foreground tracking-wide"
          >
            And I&apos;m a <span className="text-cyan-400 font-medium" aria-live="polite">{displayText}</span>
            <span className="w-[2px] h-4 sm:h-5 bg-cyan-400 ml-1 animate-pulse inline-block" aria-hidden="true" />
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 sm:gap-3 text-muted-foreground font-medium"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <MapPin size={12} className="sm:w-[14px] sm:h-[14px]" />
            </div>
            <span className="text-xs sm:text-sm tracking-wide">Based in Nairobi, Kenya</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg max-w-lg leading-relaxed font-light"
          >
            Passionate about turning complex datasets into actionable insights through ML, AI, and elegant full-stack solutions.
          </motion.p>

          {/* Social Links with Magnetic Cursor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-3 sm:gap-4 pt-4"
            role="navigation"
            aria-label="Social media links"
          >
            {[
              { Icon: Github, href: "https://github.com/Jabs007", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com/in/adams-jabali-880377371", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:adamsjabali9@gmail.com", label: "Email" }
            ].map((social, idx) => (
              <MagneticCursor key={idx} strength={0.4} padding={60}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-icon-btn"
                  aria-label={social.label}
                >
                  <social.Icon size={18} className="sm:w-[20px] sm:h-[20px]" />
                </motion.a>
              </MagneticCursor>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Portrait - adjusted size to match name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end items-center"
        >
          {/* Glow Effect - adjusted size */}
          <div className="absolute w-[90%] aspect-square bg-cyan-500/10 rounded-full blur-[100px] animate-glow-pulse" aria-hidden="true" />

          <motion.div
            className="relative w-full max-w-[380px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] xl:max-w-[540px] aspect-square"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative w-full h-full rounded-[32px] sm:rounded-[40px] overflow-hidden border-2 border-cyan-500/30 bg-card/40 backdrop-blur-sm shadow-2xl">
              <img
                src={profileImg}
                alt="Adams Jabali - Data Scientist"
                className="w-full h-full object-cover object-[center_30%] grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Floating Elements - adjusted position and size */}
          <MagneticCursor strength={0.5} padding={80}>
            <motion.div
              className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Data Science
            </motion.div>
          </MagneticCursor>

          <MagneticCursor strength={0.5} padding={80}>
            <motion.div
              className="absolute -bottom-4 -left-4 sm:-bottom-4 sm:-left-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              Full-Stack
            </motion.div>
          </MagneticCursor>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-20"
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 sm:w-5 h-6 sm:h-8 rounded-full border-2 border-current flex items-start justify-center pt-2"
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-current" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
