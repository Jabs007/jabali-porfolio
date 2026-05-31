import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Recommender Systems",
    name: "CF Recommender Lab",
    description: "Comprehensive Streamlit web application implementing User-Based (UBCF) and Item-Based (IBCF) Collaborative Filtering algorithms with interactive visualizations, model evaluation metrics, and side-by-side performance comparison.",
    github: "https://github.com/Jabs007/group-4",
    live: "https://fantastic.streamlit.app",
    tags: ["Python", "Streamlit", "Machine Learning", "Recommender Systems"],
    color: "cyan"
  },
  {
    number: "02",
    category: "Data Visualization",
    name: "KUCCPS Dashboard",
    description: "Interactive Streamlit dashboard for analyzing student placement data from Kenya Universities and Colleges Central Placement Service. Features trend analysis, institutional comparisons, and programme distribution insights.",
    github: "https://github.com/Jabs007/dashboard",
    tags: ["Python", "Streamlit", "Data Visualization", "Analytics"],
    color: "purple"
  },
  {
    number: "03",
    category: "AI & Career Guidance",
    name: "AI Career Roadmap Recommender",
    description: "AI-powered decision support system for Kenyan students transitioning from KCSE to university. Uses NLP for career matching, automatic eligibility checking against KUCCPS requirements, and generates personalized learning roadmaps based on job market demand.",
    github: "https://github.com/Jabs007/AI-Career-Roadmap-Recommender",
    tags: ["Python", "AI", "NLP", "Career Guidance", "Streamlit"],
    color: "cyan"
  },
  {
    number: "04",
    category: "Machine Learning",
    name: "Loan Default Prediction",
    description: "Machine learning model for predicting loan default risk using historical data. Implements multiple classifiers with hyperparameter tuning and comprehensive evaluation metrics for financial risk assessment.",
    github: "https://github.com/Jabs007/loan-default-prediction",
    tags: ["Python", "Machine Learning", "Predictive Modeling", "Finance"],
    color: "purple"
  },
  {
    number: "05",
    category: "Career AI",
    name: "Career Recommender System",
    description: "AI-driven career path recommendation engine that analyzes user profiles and suggests suitable career paths with personalized learning roadmaps and skill development plans.",
    github: "https://github.com/Jabs007/career-recommender",
    tags: ["Python", "AI", "Career Planning", "Machine Learning"],
    color: "cyan"
  }
];

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalCards = projects.length;

  return (
    <section ref={containerRef} id="projects" className="relative bg-[#0C0C0C] py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-black uppercase tracking-widest mb-8">
            My Projects
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight">
            <span className="bg-gradient-to-b from-[#BBCCD7] to-[#646973] bg-clip-text text-transparent">
              Projects
            </span>
            <br />
            <span className="text-white">Gallery</span>
          </h2>
        </motion.div>

        {/* Projects Cards */}
        <div className="relative h-[160vh]">
          {projects.map((project, index) => {
            const targetScale = 1 - (totalCards - 1 - index) * 0.04;
            const scale = useTransform(scrollYProgress, [0, 1], [1 + index * 0.04, targetScale]);
            const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6 - index * 0.12]);
            const y = useTransform(scrollYProgress, [0, 1], [0, index * 60]);

            const borderColor = project.color === "cyan" ? "border-cyan-500/20 hover:border-cyan-500/40" : "border-purple-500/20 hover:border-purple-500/40";
            const accentColor = project.color === "cyan" ? "text-cyan-400" : "text-purple-400";
            const glowColor = project.color === "cyan" ? "group-hover:shadow-cyan-500/20" : "group-hover:shadow-purple-500/20";

            return (
              <motion.div
                key={project.number}
                style={{ scale, opacity, y }}
                className="absolute left-0 right-0 px-4 sm:px-6 lg:px-8"
                style={{ 
                  top: `${index * 35}px`,
                  zIndex: projects.length - index 
                }}
              >
                <div className="sticky top-24">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className={`rounded-[40px] sm:rounded-[50px] border ${borderColor} bg-[#0C0C0C]/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl ${glowColor} transition-all duration-300 group`}
                  >
                    {/* Card Header */}
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6 mb-8">
                      <div className="flex items-start gap-6">
                        <motion.span 
                          className="text-6xl sm:text-7xl font-black text-white/5 group-hover:text-white/10 transition-colors"
                          whileInView={{ x: [-10, 10, -10] }}
                          viewport={{ once: true }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {project.number}
                        </motion.span>
                        <div className="flex-1">
                          <motion.span 
                            className={`${accentColor} text-xs sm:text-sm font-black uppercase tracking-widest block mb-2`}
                            whileInView={{ x: [5, -5, 5] }}
                            viewport={{ once: true }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {project.category}
                          </motion.span>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
                            {project.name}
                          </h3>
                          <p className="text-muted-foreground font-light max-w-2xl leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 flex-shrink-0">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                        >
                          <Github size={16} /> Code
                        </motion.a>
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                          >
                            Live Demo <ExternalLink size={16} />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <motion.div 
                      className="flex flex-wrap gap-3 pt-4 border-t border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: tagIndex * 0.05 }}
                          className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
