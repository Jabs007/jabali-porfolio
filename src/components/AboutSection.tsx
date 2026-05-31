import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, User, Award, Download, ExternalLink, FileText } from "lucide-react";
import { NumberCounter } from "./animations";
import MotionSection from "./MotionSection";

const tabs = [
  { id: "bio", label: "Biography", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "certifications", label: "Certifications", icon: Award },
];

import pythonCert from "@/pictures/python_basic certificate.pdf";
import sqlCert from "@/pictures/sql_basic certificate.pdf";
import cvFile from "@/pictures/Adams_Jabali_Momanyi_CV.pdf";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <MotionSection id="about" className="py-32 relative overflow-hidden bg-[#0C0C0C]">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: Section Header & Tabs */}
          <div className="lg:w-1/3 w-full">
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight"
            >
              <span className="hero-heading">About</span>
              <br />
              <span className="text-foreground">Me</span>
            </motion.h2>

            <div className="flex flex-col gap-3" role="tablist" aria-label="About section tabs">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  className={`flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300 font-bold tracking-wide text-left border ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-foreground border-cyan-500/40 shadow-lg shadow-cyan-500/10 scale-105"
                      : "bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10 hover:text-foreground hover:border-white/20"
                  }`}
                >
                  <tab.icon size={20} className={activeTab === tab.id ? "text-cyan-400" : ""} />
                  {tab.label}
                </motion.button>
              ))}

              <motion.a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="mt-6 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold glow-cyan-btn flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/25"
              >
                Download CV <Download size={20} />
              </motion.a>
            </div>
          </div>

          {/* Right: Content Area */}
          <div className="lg:w-2/3 w-full">
            <AnimatePresence mode="wait">
              {activeTab === "bio" && (
                <motion.div
                  key="bio"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  id="panel-bio"
                  role="tabpanel"
                  aria-labelledby="tab-bio"
                  className="glass-card p-8 sm:p-10 bg-[#0C0C0C]/60 backdrop-blur-xl border border-white/10 space-y-6 rounded-[40px]"
                >
                  <h3 className="text-3xl font-bold text-foreground">Adams Jabali Momanyi</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg font-light">
                    Adams Jabali Momanyi is a <span className="text-cyan-400 font-medium">Data Science student</span> with a strong interest in Machine Learning, Artificial Intelligence, and scalable web technologies. He specializes in building end-to-end data solutions from data cleaning and model development to deployment and full-stack integration.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg font-light">
                    With a foundation in Python, statistical analysis, and modern web development, Adams focuses on transforming complex datasets into actionable insights and intelligent systems. Driven by curiosity, he is continuously exploring advanced AI techniques and production-ready architectures.
                  </p>
                  <div className="pt-6 grid grid-cols-2 gap-4" role="list">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group" role="listitem">
                      <p className="text-cyan-400 font-black text-4xl">
                        <NumberCounter end={20} suffix="+" />
                      </p>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-2">Projects</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group" role="listitem">
                      <p className="text-purple-400 font-black text-4xl">
                        <NumberCounter end={5} suffix="+" />
                      </p>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-2">Years Experience</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group" role="listitem">
                      <p className="text-cyan-400 font-black text-4xl">
                        <NumberCounter end={15} suffix="+" />
                      </p>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-2">Technologies</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group" role="listitem">
                      <p className="text-purple-400 font-black text-4xl">
                        <NumberCounter end={100} suffix="%" />
                      </p>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-2">Dedication</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  id="panel-education"
                  role="tabpanel"
                  aria-labelledby="tab-education"
                  className="glass-card p-8 sm:p-10 bg-[#0C0C0C]/60 backdrop-blur-xl border border-white/10 space-y-8 rounded-[40px]"
                >
                  <div className="relative pl-8 border-l-2 border-cyan-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                    <p className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-2">2021 - Present</p>
                    <h4 className="text-2xl font-bold text-foreground mb-1">BSc. in Data Science</h4>
                    <p className="text-cyan-400 font-semibold text-sm mb-4">Meru University of Science and Technology</p>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Currently in Final Year (Year 4, Semester 2). Completing advanced coursework in Machine Learning, Statistical Modeling, Database Systems, and AI-driven applications.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  id="panel-experience"
                  role="tabpanel"
                  aria-labelledby="tab-experience"
                  className="glass-card p-8 sm:p-10 bg-[#0C0C0C]/60 backdrop-blur-xl border border-white/10 space-y-6 rounded-[40px]"
                >
                  <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                      <Briefcase size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-1">Internship</p>
                      <h4 className="text-xl font-bold text-foreground mb-1">KUCCPS</h4>
                      <p className="text-muted-foreground font-light text-sm mb-4">Nairobi, Kenya</p>
                      <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4 font-light">
                        <li>Assisted in data handling and administrative systems for university placement</li>
                        <li>Supported data entry, validation, and record management workflows</li>
                        <li>Contributed to improving data accuracy and processing efficiency</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "certifications" && (
                <motion.div
                  key="certifications"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  id="panel-certifications"
                  role="tabpanel"
                  aria-labelledby="tab-certifications"
                  className="glass-card p-8 sm:p-10 bg-[#0C0C0C]/60 backdrop-blur-xl border border-white/10 space-y-8 rounded-[40px]"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { 
                        title: "Python (Basic)", 
                        issuer: "HackerRank", 
                        file: pythonCert,
                        date: "2024",
                        description: "Demonstrated proficiency in Python programming including data structures, algorithms, and object-oriented programming concepts.",
                        skills: ["Data Structures", "Algorithms", "OOP", "File I/O"]
                      },
                      { 
                        title: "SQL (Basic)", 
                        issuer: "HackerRank", 
                        file: sqlCert,
                        date: "2024",
                        description: "Validated skills in SQL queries, database design, and data manipulation including JOINs, subqueries, and aggregations.",
                        skills: ["SQL Queries", "Database Design", "JOINs", "Aggregations"]
                      },
                      { 
                        title: "Machine Learning", 
                        issuer: "Coursera", 
                        file: "#",
                        date: "2025",
                        description: "Completed comprehensive course on ML algorithms, supervised/unsupervised learning, and neural networks.",
                        skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Model Evaluation"]
                      },
                      { 
                        title: "AWS Cloud Practitioner", 
                        issuer: "Amazon Web Services", 
                        file: "#",
                        date: "2025",
                        description: "Foundational understanding of AWS cloud services, security, architecture, and pricing models.",
                        skills: ["Cloud Computing", "AWS Services", "Security", "Architecture"]
                      },
                    ].map((cert, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -8 }}
                        className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col h-full overflow-hidden"
                      >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        {/* Icon */}
                        <div className="relative z-10 w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all">
                          <Award size={28} />
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 flex-1">
                          <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-cyan-400 transition-colors">{cert.title}</h4>
                          <p className="text-cyan-400 font-semibold text-xs uppercase tracking-wider mb-2">{cert.issuer} • {cert.date}</p>
                          
                          {/* Description (shown on hover) */}
                          <motion.p 
                            className="text-muted-foreground text-sm font-light mb-4 line-clamp-2"
                            initial={{ opacity: 0.7 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {cert.description}
                          </motion.p>
                          
                          {/* Skills Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {cert.skills.slice(0, 2).map((skill) => (
                              <span key={skill} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-muted-foreground uppercase">
                                {skill}
                              </span>
                            ))}
                            {cert.skills.length > 2 && (
                              <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-muted-foreground uppercase">
                                +{cert.skills.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="relative z-10 flex gap-3 pt-4 border-t border-white/10">
                          <a
                            href={cert.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider hover:bg-cyan-500 hover:text-white transition-all"
                          >
                            <FileText size={14} /> View
                          </a>
                          <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-muted-foreground text-xs font-bold uppercase tracking-wider hover:bg-white/10 hover:text-foreground transition-all"
                          >
                            <ExternalLink size={14} /> More
                          </motion.a>
                        </div>
                      </motion.div>
                    ))}
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
