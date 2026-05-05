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
    color: "hover:text-primary hover:border-primary/50"
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
    color: "hover:text-rose-400 hover:border-rose-400/50"
  },
];

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Updated with your newly authenticated Service ID
    const SERVICE_ID = "service_2dzsjug";
    const TEMPLATE_ID = "template_i9tgnyb";
    const PUBLIC_KEY = "79vCcNT9bJt9VrfkI";

    try {
      if (!formRef.current) return;

      // Initialize once before sending
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

      // Specific help for 412 error
      if (error.status === 412) {
        toast.error("Dashboard Error (412): Please check reCAPTCHA or Domain settings in EmailJS.");
      } else {
        toast.error(`Error: ${error.text || "Failed to send"}`);
      }

      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <MotionSection id="contact" className="py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -z-10" />

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tighter">
            <span className="gradient-text uppercase">Get In Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-16 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Info Column */}
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Let's build something <span className="text-primary italic">extraordinary</span>.</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md font-medium">
                  I'm currently looking for new opportunities in Data Science and Fullstack development.
                  Whether you have a question or just want to say hi, my inbox is always open!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-5 group transition-all font-display">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 shadow-lg">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Located in</p>
                    <p className="text-foreground font-semibold">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group transition-all font-display">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 shadow-lg">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Email me at</p>
                    <a href="mailto:adamsjabal9@gmail.com" className="text-foreground font-semibold hover:text-primary transition-colors">adamsjabal9@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group transition-all font-display">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 shadow-lg">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Call me at</p>
                    <a href="tel:0740470067" className="text-foreground font-semibold hover:text-primary transition-colors">0740470067</a>
                  </div>
                </div>
                {/* Social Grid */}
                <div className="flex gap-4 pt-4">
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
                      <s.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 glass-card p-10 bg-surface/30 border-white/5 relative group overflow-hidden"
              >
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 bg-background/90 backdrop-blur-md z-20 flex flex-col items-center justify-center space-y-4 text-center p-6"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                        <CheckCircle2 size={48} className="animate-bounce" />
                      </div>
                      <h4 className="text-2xl font-black gradient-text uppercase tracking-tighter">Message Received!</h4>
                      <p className="text-muted-foreground max-w-xs font-medium">Thank you for reaching out! I'll get back to you as soon as possible.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black text-primary tracking-[0.2em] ml-1">Your Name</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-background/40 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black text-primary tracking-[0.2em] ml-1">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-background/40 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black text-primary tracking-[0.2em] ml-1">Message</label>
                  <textarea
                    name="message"
                    placeholder="Hi Adams, I'd like to collaborate on..."
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-background/40 border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  disabled={status === "submitting" || status === "success"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest transition-all duration-500 disabled:opacity-50 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
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
