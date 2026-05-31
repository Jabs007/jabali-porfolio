import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Code2, Database, Brain, BarChart3, LineChart } from "lucide-react";
import { LazyImage } from "./ui/LazyImage";

// Tech-themed placeholder images for your projects
const marqueeProjects = [
  {
    name: "CF Recommender Lab",
    repo: "group-4",
    icon: Code2,
    color: "cyan",
    description: "User-Based & Item-Based Collaborative Filtering"
  },
  {
    name: "KUCCPS Dashboard",
    repo: "dashboard",
    icon: BarChart3,
    color: "purple",
    description: "Student Placement Data Visualization"
  },
  {
    name: "AI Career Roadmap",
    repo: "AI-Career-Roadmap-Recommender",
    icon: Brain,
    color: "cyan",
    description: "Intelligent Career Guidance System"
  },
  {
    name: "Career Recommender",
    repo: "career-recommender",
    icon: LineChart,
    color: "purple",
    description: "AI-Powered Career Path Suggestions"
  },
  {
    name: "Loan Default Prediction",
    repo: "loan-default-prediction",
    icon: Database,
    color: "cyan",
    description: "ML Model for Loan Risk Assessment"
  },
];

const MarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  
  // Parallax background elements
  const bgY1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="relative py-32 bg-[#0C0C0C] overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px]" style={{ y: bgY1, willChange: "transform" }} />
      <motion.div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px]" style={{ y: bgY2, willChange: "transform" }} />

      {/* Section Header */}
      <div className="section-container relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-6 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-widest mb-8">
            Showcase
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight">
            <span className="bg-gradient-to-b from-[#BBCCD7] to-[#646973] bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="text-white">Work</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Row 1 - Moves Left */}
      <div className="relative mb-6">
        <motion.div className="flex gap-6" style={{ x: x1, willChange: "transform" }}>
          {[...marqueeProjects, ...marqueeProjects].map((project, index) => (
            <motion.a
              key={`row1-${index}`}
              href={`https://github.com/Jabs007/${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[400px] sm:w-[500px] md:w-[600px] aspect-video rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0C0C0C] to-[#1a1a2e] backdrop-blur-sm group relative flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.05 }}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Tech Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat" />
              </div>
              
              {/* Icon Container with Parallax */}
              <motion.div
                className={`relative z-10 w-24 h-24 rounded-3xl flex items-center justify-center transition-all duration-300 ${
                  project.color === "cyan" 
                    ? "bg-cyan-500/10 group-hover:bg-cyan-500/20 border border-cyan-500/30 group-hover:border-cyan-500/50" 
                    : "bg-purple-500/10 group-hover:bg-purple-500/20 border border-purple-500/30 group-hover:border-purple-500/50"
                }`}
                whileInView={{ y: [-10, 10, -10] }}
                viewport={{ once: true }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
              >
                <project.icon size={48} className={project.color === "cyan" ? "text-cyan-400" : "text-purple-400"} />
              </motion.div>

              {/* Overlay with project info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white font-black text-xl tracking-tight">{project.name}</h3>
                <p className="text-muted-foreground text-sm font-light mt-1">{project.description}</p>
                <div className="flex items-center gap-2 mt-3 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                  <Github size={14} /> View on GitHub
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 - Moves Right */}
      <div className="relative">
        <motion.div className="flex gap-6" style={{ x: x2, willChange: "transform" }}>
          {[...marqueeProjects.slice().reverse(), ...marqueeProjects.slice().reverse()].map((project, index) => (
            <motion.a
              key={`row2-${index}`}
              href={`https://github.com/Jabs007/${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[400px] sm:w-[500px] md:w-[600px] aspect-video rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0C0C0C] to-[#1a1a2e] backdrop-blur-sm group relative flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.05 }}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Tech Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat" />
              </div>
              
              {/* Icon Container with Parallax */}
              <motion.div
                className={`relative z-10 w-24 h-24 rounded-3xl flex items-center justify-center transition-all duration-300 ${
                  project.color === "cyan" 
                    ? "bg-cyan-500/10 group-hover:bg-cyan-500/20 border border-cyan-500/30 group-hover:border-cyan-500/50" 
                    : "bg-purple-500/10 group-hover:bg-purple-500/20 border border-purple-500/30 group-hover:border-purple-500/50"
                }`}
                whileInView={{ y: [10, -10, 10] }}
                viewport={{ once: true }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{ willChange: "transform" }}
              >
                <project.icon size={48} className={project.color === "cyan" ? "text-cyan-400" : "text-purple-400"} />
              </motion.div>

              {/* Overlay with project info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white font-black text-xl tracking-tight">{project.name}</h3>
                <p className="text-muted-foreground text-sm font-light mt-1">{project.description}</p>
                <div className="flex items-center gap-2 mt-3 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                  <Github size={14} /> View on GitHub
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0C0C0C] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C0C0C] to-transparent" />
      </div>
    </section>
  );
};

export default MarqueeSection;
