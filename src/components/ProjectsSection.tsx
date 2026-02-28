import { useState } from "react";
import { ExternalLink, Github, Layers, Brain, Terminal, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "AI / ML", "Fullstack", "Backend"];

const projects = [
  {
    title: "AI Career Roadmap (Kenyan Ed.)",
    category: "AI / ML",
    description: "Specialized DSS for Kenyan students (KCSE to Higher Ed). Aligns performance with professional ambitions and live market demand.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Selenium"],
    impact: "Live ETL Scraper",
    demo: "https://ai-career-roadmap-kenya.streamlit.app/",
    repo: "https://github.com/Jabs007/AI-Career-Roadmap-Recommender",
    icon: <Brain className="w-5 h-5" />,
  },
  {
    title: "Advanced Career Ecosystem",
    category: "Fullstack",
    description: "End-to-end guidance platform with Mobile App, FastAPI backend, and XAI dashboard for career transparency.",
    tech: ["FastAPI", "React Native", "Kotlin", "SQLite"],
    impact: "Cross-Platform",
    demo: "#",
    repo: "https://github.com/Jabs007/career-recommender",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: "Confab E-commerce",
    category: "Fullstack",
    description: "Modern, responsive e-commerce platform for furniture, featuring multiple homepage variants and a full user account system.",
    tech: ["JavaScript", "Bootstrap 5", "HTML5/CSS3"],
    impact: "Responsive UI",
    demo: "https://jabs007.github.io/confab/",
    repo: "https://github.com/Jabs007/confab",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: "Smart Traffic Prediction",
    category: "AI / ML",
    description: "ML system predicting traffic conditions with interactive EDA and real-time prediction logging in SQLite.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Plotly"],
    impact: "Real-time Logger",
    demo: "https://jabs-traffic-app.streamlit.app/",
    repo: "https://github.com/Jabs007/traffic_app",
    icon: <Brain className="w-5 h-5" />,
  },
  {
    title: "CF Recommender Lab",
    category: "AI / ML",
    description: "Interactive lab for comparing Collaborative Filtering algorithms (UBCF vs IBCF) with real-time visualization.",
    tech: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
    impact: "Algorithm Benchmarking",
    demo: "#",
    repo: "https://github.com/Jabs007/group-4",
    icon: <Brain className="w-5 h-5" />,
  },
  {
    title: "KUCCPS Interactive Dashboard",
    category: "Backend",
    description: "Data visualization tool for student placement data. Centralizes complex placement trends into live insights.",
    tech: ["Python", "Streamlit", "Pandas", "Plotly"],
    impact: "Live Analytics",
    demo: "https://kuccps-dashboard.streamlit.app/",
    repo: "https://github.com/Jabs007/dashboard",
    icon: <Database className="w-5 h-5" />,
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${activeTab === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-surface/50 text-muted-foreground border-border hover:border-primary/50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card group relative p-6 border-border hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      {p.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-primary/80">
                        {p.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground leading-tight">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                  {p.impact && (
                    <span className="text-[10px] font-mono text-primary bg-primary/5 px-2 py-1 rounded-sm border border-primary/20">
                      {p.impact}
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 rounded bg-secondary/80 border border-border/50 text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 mt-auto">
                  <a href={p.demo} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link">
                    <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    Live Preview
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={16} />
                    Source
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
