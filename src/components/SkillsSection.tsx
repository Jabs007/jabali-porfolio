import MotionSection from "./MotionSection";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "R", "Java"],
  },
  {
    title: "ML / Data Science",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "NLP", "Deep Learning"],
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "Next.js", "FastAPI", "Flask", "Tailwind"],
  },
  {
    title: "Infrastructure",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Git", "AWS", "Linux"],
  },
];

const SkillsSection = () => {
  return (
    <MotionSection id="skills" className="py-24 bg-surface/30 backdrop-blur-sm">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="gradient-text">Tech Stack</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" aria-hidden="true" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.05)]"
            >
              <h3 className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-6 font-bold border-b border-border/50 pb-2 inline-block">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2.5" role="list" aria-label={`${cat.title} skills`}>
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="skill-badge text-xs bg-surface/50 border-border/30 hover:border-primary/40 hover:text-primary"
                    role="listitem"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default SkillsSection;
