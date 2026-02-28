import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, User, Award } from "lucide-react";
import MotionSection from "./MotionSection";

const tabs = [
  { id: "bio", label: "Biography", icon: <User size={16} /> },
  { id: "education", label: "Education", icon: <GraduationCap size={16} /> },
  { id: "experience", label: "Experience", icon: <Briefcase size={16} /> },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <MotionSection id="about" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Section Header & Tabs */}
          <div className="lg:w-1/3 w-full">
            <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tighter">
              About <span className="gradient-text uppercase">Me</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary rounded-full mb-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

            <div className="flex flex-col gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-bold tracking-tight text-left border ${activeTab === tab.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105"
                    : "bg-surface/30 text-muted-foreground border-white/5 hover:bg-white/5 hover:text-foreground"
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content Area */}
          <div className="lg:w-2/3 w-full min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "bio" && (
                <motion.div
                  key="bio"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="glass-card p-10 bg-surface/30 backdrop-blur-xl border-white/5 space-y-6"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">Adams Jabali Momanyi</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                    Adams Jabali Momanyi is a <span className="text-foreground">Data Science student</span> with a strong interest in Machine Learning, Artificial Intelligence, and scalable web technologies. He specializes in building end-to-end data solutions from data cleaning and model development to deployment and full-stack integration.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                    With a foundation in Python, statistical analysis, and modern web development, Adams focuses on transforming complex datasets into actionable insights and intelligent systems. Driven by curiosity, he is continuously exploring advanced AI techniques and production-ready architectures.
                  </p>
                  <div className="pt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-primary font-black text-2xl">20+</p>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Projects Completed</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-primary font-black text-2xl">Final Year</p>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Year 4, Sem 2</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="glass-card p-10 bg-surface/30 backdrop-blur-xl border-white/5 space-y-8"
                >
                  <div className="relative pl-8 border-l-2 border-primary/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                    <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">2021 - Present</p>
                    <h4 className="text-xl font-bold text-foreground">BSc. in Data Science</h4>
                    <p className="text-primary font-semibold text-sm">Meru University of Science and Technology</p>
                    <p className="text-muted-foreground font-medium pt-3 leading-relaxed">
                      Currently in my Final Year (Year 4, Semester 2). Completing advanced coursework in Machine Learning, Statistical Modeling, Database Systems, and AI-driven applications.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="glass-card p-10 bg-surface/30 backdrop-blur-xl border-white/5 space-y-6"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">Internship</p>
                        <h4 className="text-lg font-bold text-foreground">KUCCPS (Kenya Universities and Colleges Central Placement Service)</h4>
                        <p className="text-muted-foreground font-medium text-sm mb-4">Nairobi, Kenya</p>
                        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4 font-medium">
                          <li>Assisted in data handling and administrative systems related to university placement processes.</li>
                          <li>Supported data entry, validation, and record management workflows.</li>
                          <li>Contributed to improving data accuracy and processing efficiency.</li>
                          <li>Worked within a structured institutional environment, gaining experience in real-world data systems.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default AboutSection;
