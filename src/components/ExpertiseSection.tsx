import { motion } from "framer-motion";
import { Brain, Database, Terminal, TrendingUp } from "lucide-react";
import MotionSection from "./MotionSection";

const expertiseData = [
  {
    title: "AI & Machine Learning",
    description: "Developing intelligent algorithms and predictive models to solve complex business problems, specializing in Collaborative Filtering and Neural Networks.",
    icon: Brain,
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    techs: ["Python", "TensorFlow", "Scikit-Learn"],
    number: "01"
  },
  {
    title: "Full-Stack Development",
    description: "Building non-blocking, scalable web applications that bridge the gap between heavy data processing backends and high-performance frontends.",
    icon: Terminal,
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    techs: ["React", "Flask", "PostgreSQL"],
    number: "02"
  },
  {
    title: "Data Engineering",
    description: "Architecting robust ETL pipelines and managing large-scale data storage solutions to ensure high availability and integrity for analytics.",
    icon: Database,
    gradient: "from-emerald-500/20 to-cyan-500/20",
    borderColor: "border-emerald-500/30",
    techs: ["SQL", "Pandas", "AWS/GCP"],
    number: "03"
  },
  {
    title: "Applied Analytics",
    description: "Transforming raw data into strategic narratives. I focus on actionable insights that translate directly into business optimization and growth.",
    icon: TrendingUp,
    gradient: "from-orange-500/20 to-rose-500/20",
    borderColor: "border-orange-500/30",
    techs: ["Power BI", "EDA", "Tableau"],
    number: "04"
  }
];

const ExpertiseSection = () => {
  return (
    <MotionSection id="expertise" className="py-32 relative overflow-hidden bg-[#0C0C0C]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-cyan-500/5 rounded-full -mr-48 -mt-32 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] border border-cyan-500/5 rounded-full -ml-48 -mb-32 pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="hero-heading">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Bridging the gap between raw data complexity and high-impact digital solutions.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertiseData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative group p-8 sm:p-10 rounded-[40px] bg-gradient-to-br ${item.gradient} border ${item.borderColor} backdrop-blur-xl transition-all duration-500`}
            >
              {/* Number */}
              <span className="absolute top-6 right-6 text-6xl sm:text-7xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                {item.number}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#0C0C0C]/60 border border-white/10 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500">
                <item.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 font-light">
                {item.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2" role="list" aria-label={`Technologies for ${item.title}`}>
                {item.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold text-muted-foreground group-hover:border-cyan-500/30 group-hover:text-cyan-400/80 transition-all duration-300"
                    role="listitem"
                  >
                    {tech}
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

export default ExpertiseSection;
