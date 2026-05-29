import { motion } from "framer-motion";
import { Brain, Database, Terminal, TrendingUp, Cpu, Globe } from "lucide-react";
import MotionSection from "./MotionSection";

const expertiseData = [
    {
        title: "AI & Machine Learning",
        description: "Developing intelligent algorithms and predictive models to solve complex business problems, specializing in Collaborative Filtering and Neural Networks.",
        icon: <Brain className="w-8 h-8" />,
        color: "from-cyan-500/20 to-blue-500/20",
        borderColor: "border-primary/30",
        techs: ["Python", "TensorFlow", "Scikit-Learn"]
    },
    {
        title: "Full-stack Synergy",
        description: "Building non-blocking, scalable web applications that bridge the gap between heavy data processing backends and high-performance frontends.",
        icon: <Terminal className="w-8 h-8" />,
        color: "from-purple-500/20 to-blue-500/20",
        borderColor: "border-purple-500/30",
        techs: ["React", "Flask", "PostgreSQL"]
    },
    {
        title: "Data Engineering",
        description: "Architecting robust ETL pipelines and managing large-scale data storage solutions to ensure high availability and integrity for analytics.",
        icon: <Database className="w-8 h-8" />,
        color: "from-emerald-500/20 to-cyan-500/20",
        borderColor: "border-emerald-500/30",
        techs: ["SQL", "Pandas", "AWS/GCP"]
    },
    {
        title: "Applied Analytics",
        description: "Transforming raw data into strategic narratives. I focus on actionable insights that translate directly into business optimization and growth.",
        icon: <TrendingUp className="w-8 h-8" />,
        color: "from-orange-500/20 to-rose-500/20",
        borderColor: "border-orange-500/30",
        techs: ["Power BI", "Exploratory Data Analysis", "Tableau"]
    }
];

const ExpertiseSection = () => {
    return (
        <MotionSection id="expertise" className="py-24 relative overflow-hidden">
            {/* Background Decorative Rings */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-primary/5 rounded-full -mr-64 -mt-32 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-accent/5 rounded-full -ml-32 -mb-32 pointer-events-none" aria-hidden="true" />

            <div className="section-container">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        My specialized areas
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tighter">
                        Core <span className="gradient-text uppercase">Expertise</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(6,182,212,0.5)]" aria-hidden="true" />
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
                        Bridging the gap between raw data complexity and high-impact digital solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {expertiseData.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative group p-10 rounded-[32px] bg-gradient-to-br ${item.color} border ${item.borderColor} backdrop-blur-xl transition-all duration-500 h-full flex flex-col`}
                        >
                            {/* Card Glow on Hover */}
                            <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/5 pointer-events-none" aria-hidden="true" />
                            <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" aria-hidden="true" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-background/60 border border-white/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500" aria-hidden="true">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow font-medium">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2" role="list" aria-label={`Technologies for ${item.title}`}>
                                    {item.techs.map(tech => (
                                        <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold text-muted-foreground group-hover:border-primary/20 group-hover:text-primary/80 transition-all duration-300" role="listitem">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-40 transition-opacity" aria-hidden="true">
                                <Cpu className="w-12 h-12 rotate-45" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </MotionSection>
    );
};

export default ExpertiseSection;
