import { useState, useRef } from "react";
import { Github, Linkedin, Mail, Send, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import MotionSection from "./MotionSection";
import { toast } from "sonner";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Jabs007",
    color: "hover:text-cyan-400 hover:border-cyan-400/50"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/adams-jabali-880377371",
    color: "hover:text-blue-400 hover:border-blue-400/50"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:adamsjabali9@gmail.com",
    color: "hover:text-purple-400 hover:border-purple-400/50"
  },
];

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const SERVICE_ID = "service_2dzsjug";
    const TEMPLATE_ID = "template_i9tgnyb";
    const PUBLIC_KEY = "79vCcNT9bJt9VrfkI";

    try {
      if (!formRef.current) return;

      emailjs.init(PUBLIC_KEY);

      const response = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current
      );

      if (response.status === 200) {
        setStatus("success");
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error: any) {
      console.error("DEBUG: EmailJS Error Object:", error);
      setStatus("error");

      if (error.status === 412) {
        toast.error("Dashboard Error (412): Please check reCAPTCHA or Domain settings in EmailJS.");
      } else {
        toast.error(`Error: ${error.text || "Failed to send"}`);
      }

      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <MotionSection id="contact" className="py-32 relative overflow-hidden bg-[#0C0C0C]">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
              Get In Touch
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black">
              <span className="hero-heading">Let&apos;s Build</span>
              <br />
              <span className="text-foreground">Something Amazing</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Info Column */}
            <div className="lg:col-span-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Ready to start your <span className="text-cyan-400 italic">project</span>?
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  I&apos;m currently looking for new opportunities in Data Science and Full-stack development.
                  Whether you have a question or just want to say hi, my inbox is always open!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-5 group transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Located in</p>
                    <p className="text-foreground font-semibold">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Email me at</p>
                    <a href="mailto:adamsjabali9@gmail.com" className="text-foreground font-semibold hover:text-cyan-400 transition-colors">adamsjabali9@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Call me at</p>
                    <a href="tel:0740470067" className="text-foreground font-semibold hover:text-cyan-400 transition-colors">0740470067</a>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-4 pt-4"
                role="navigation"
                aria-label="Social media links"
              >
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground transition-all duration-300 ${s.color} hover:bg-white/10 hover:shadow-xl`}
                    aria-label={s.label}
                  >
                    <s.icon size={22} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass-card p-8 sm:p-10 bg-[#0C0C0C]/60 backdrop-blur-xl border-white/10 relative group overflow-hidden rounded-[40px]"
                aria-label="Contact form"
              >
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 bg-[#0C0C0C]/95 backdrop-blur-md z-20 flex flex-col items-center justify-center space-y-6 text-center p-6 rounded-[40px]"
                      role="alert"
                      aria-live="polite"
                    >
                      <div className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                        <CheckCircle2 size={48} className="animate-bounce" />
                      </div>
                      <h4 className="text-2xl font-black hero-heading uppercase tracking-tighter">Message Received!</h4>
                      <p className="text-muted-foreground max-w-xs font-light">Thank you for reaching out! I&apos;ll get back to you as soon as possible.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-[10px] uppercase font-bold text-cyan-400 tracking-[0.2em] ml-1 block">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-[10px] uppercase font-bold text-cyan-400 tracking-[0.2em] ml-1 block">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-[10px] uppercase font-bold text-cyan-400 tracking-[0.2em] ml-1 block">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hi Adams, I&apos;d like to collaborate on..."
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  disabled={status === "submitting" || status === "success"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full mt-6 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold uppercase tracking-widest transition-all duration-500 disabled:opacity-50 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
                  aria-busy={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Send Message <Send size={20} /></>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default ContactSection;
