import { motion } from "framer-motion";
import { 
  Code2, Database, Brain, Globe, Terminal, 
  BarChart3, Cloud, Shield, Cpu, Layers,
  FileCode, GitBranch
} from "lucide-react";
import MotionSection from "./MotionSection";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "cyan",
    skills: [
      { name: "Python", level: 95, icon: Terminal },
      { name: "JavaScript/TypeScript", level: 85, icon: FileCode },
      { name: "SQL", level: 90, icon: Database },
      { name: "R", level: 75, icon: BarChart3 },
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    color: "purple",
    skills: [
      { name: "TensorFlow", level: 85, icon: Cpu },
      { name: "PyTorch", level: 80, icon: Brain },
      { name: "Scikit-learn", level: 90, icon: Layers },
      { name: "NLP", level: 75, icon: Terminal },
    ]
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "cyan",
    skills: [
      { name: "React", level: 85, icon: Globe },
      { name: "Node.js", level: 80, icon: Terminal },
      { name: "Flask/FastAPI", level: 90, icon: Cloud },
      { name: "Tailwind CSS", level: 85, icon: Layers },
    ]
  },
  {
    title: "Data & Cloud",
    icon: Database,
    color: "purple",
    skills: [
      { name: "PostgreSQL", level: 85, icon: Database },
      { name: "AWS/GCP", level: 75, icon: Cloud },
      { name: "Docker", level: 80, icon: Layers },
      { name: "Git", level: 90, icon: GitBranch },
    ]
  }
];

const SkillsSection = () => {
  return (
    <MotionSection id="skills" className="py-32 relative overflow-hidden bg-[#0C0C0C]">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-widest mb-8">
            Tech Stack
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="hero-heading">Skills</span>
            <br />
            <span className="text-foreground">Expertise</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass-card p-8 rounded-[40px] bg-[#0C0C0C]/60 backdrop-blur-xl border-white/10"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  category.color === "cyan" 
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30" 
                    : "bg-purple-500/10 text-purple-400 border border-purple-500/30"
                }`}>
                  <category.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-foreground">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon 
                          size={18} 
                          className={category.color === "cyan" ? "text-cyan-400" : "text-purple-400"} 
                        />
                        <span className="text-sm font-bold text-foreground">{skill.name}</span>
                      </div>
                      <span className={`text-xs font-bold ${
                        category.color === "cyan" ? "text-cyan-400" : "text-purple-400"
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: catIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className={`h-full rounded-full ${
                          category.color === "cyan" 
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500" 
                            : "bg-gradient-to-r from-purple-500 to-pink-500"
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm font-medium mb-6">Also proficient in:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Pandas", "NumPy", "Plotly", "Streamlit", "FastAPI", "REST APIs", "GraphQL", "CI/CD", "Linux", "MATLAB", "GitLab", "Jupyter"].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.02 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-muted-foreground uppercase tracking-wider hover:border-cyan-500/30 hover:text-cyan-400 transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default SkillsSection;
