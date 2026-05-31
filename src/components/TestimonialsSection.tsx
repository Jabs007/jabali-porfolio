import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import MotionSection from "./MotionSection";

const testimonials = [
  {
    name: "Dr. Sarah Kamau",
    role: "Professor, Meru University",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Kamau&background=06b6d4&color=fff&size=128",
    content: "Adams consistently demonstrated exceptional analytical skills and a deep understanding of machine learning concepts. His final year project on AI-powered career recommendation systems was one of the best I've seen in my 10 years of teaching.",
    rating: 5,
    company: "Meru University"
  },
  {
    name: "James Omondi",
    role: "Senior Data Scientist, KUCCPS",
    avatar: "https://ui-avatars.com/api/?name=James+Omondi&background=a855f7&color=fff&size=128",
    content: "During his internship, Adams showed remarkable ability to translate complex data requirements into elegant solutions. His work on the student placement analytics dashboard improved our data processing efficiency by 40%.",
    rating: 5,
    company: "KUCCPS"
  },
  {
    name: "Mary Wanjiku",
    role: "Tech Lead, Safaricom",
    avatar: "https://ui-avatars.com/api/?name=Mary+Wanjiku&background=06b6d4&color=fff&size=128",
    content: "I had the pleasure of mentoring Adams on a collaborative project. His ability to bridge the gap between theoretical ML concepts and practical implementation is rare among fresh graduates. Highly recommended!",
    rating: 5,
    company: "Safaricom"
  }
];

const TestimonialsSection = () => {
  return (
    <MotionSection id="testimonials" className="py-32 relative overflow-hidden bg-[#0C0C0C]">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-black uppercase tracking-widest mb-8">
            Testimonials
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="hero-heading">What People</span>
            <br />
            <span className="text-foreground">Say</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 rounded-[40px] bg-[#0C0C0C]/60 backdrop-blur-xl border-white/10 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-cyan-400" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-8 font-light italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-cyan-500/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-sm font-medium">{testimonial.role}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg font-light">
            These are just a few of the many positive collaborations I&apos;ve had. 
            <span className="text-cyan-400 font-medium"> Let&apos;s work together!</span>
          </p>
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default TestimonialsSection;
