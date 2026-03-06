import { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Download, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/pictures/jab.jpeg";
import cvFile from "@/pictures/Adams_Jabali_Momanyi_CV.pdf";

const taglineText = "Data Scientist";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= taglineText.length) {
        setDisplayText(taglineText.slice(0, i));
        i++;
      } else {
        // Reset or stop
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="section-container grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-4"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-wide">
            Hello, It's Me
          </h3>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-foreground tracking-tight leading-tight">
            Adams Jabali
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center">
            And I'm a <span className="text-primary ml-3">{displayText}</span>
            <span className="w-[3px] h-8 bg-primary ml-1 animate-pulse" />
          </h2>
          <div className="flex items-center gap-2 text-muted-foreground font-medium pt-1">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin size={12} />
            </span>
            <span className="text-sm tracking-wide">Based in Nairobi, Kenya</span>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg leading-relaxed pt-2">
            I'm a Data Science student passionate about Machine Learning and AI. I specialize in turning complex datasets into actionable insights through robust algorithms and elegant full-stack solutions.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 pt-6">
            {[
              { Icon: Twitter, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "https://linkedin.com/in/adams-jabali-880377371" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="social-icon-btn"
              >
                <social.Icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex gap-6 pt-10">
            <motion.a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold glow-cyan-btn flex items-center gap-2"
            >
              Download CV <Download size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Hexagon Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end items-center"
        >
          {/* Hexagon Background Glow */}
          <div className="absolute w-[80%] aspect-square bg-primary/20 rounded-full blur-[80px] animate-glow-pulse" />

          <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center p-4">
            {/* The Hexagon Frame */}
            <div className="absolute inset-0 bg-primary/30 hexagon-portrait rotate-3 opacity-50 backdrop-blur-sm" />

            <motion.div
              animate={{ rotate: [3, -3, 3] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full hexagon-portrait overflow-hidden border-2 border-primary/40 bg-card/40 shadow-2xl"
            >
              <img
                src={profileImg}
                alt="Adams Jabali"
                className="w-full h-full object-cover object-[center_15%] grayscale-[0.2] hover:grayscale-0 transition-all duration-500 scale-100"
              />
            </motion.div>

            {/* Floating Orbs for extra flair */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-float" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </motion.div>
      </div>

      {/* Floating Ambient Circles */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[120px]" />
    </section>
  );
};

export default HeroSection;
