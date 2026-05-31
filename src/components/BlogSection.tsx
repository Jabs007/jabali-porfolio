import { motion } from "framer-motion";
import { ExternalLink, Calendar, Clock, Tag } from "lucide-react";
import MotionSection from "./MotionSection";

const blogPosts = [
  {
    title: "Understanding Collaborative Filtering in Recommender Systems",
    excerpt: "A deep dive into user-based and item-based collaborative filtering algorithms, with practical implementations in Python.",
    date: "May 15, 2026",
    readTime: "8 min read",
    tags: ["Machine Learning", "Python", "Recommender Systems"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop"
  },
  {
    title: "Building Data Pipelines with Streamlit and Python",
    excerpt: "Learn how to create interactive data visualization dashboards that make complex data accessible to non-technical stakeholders.",
    date: "April 28, 2026",
    readTime: "12 min read",
    tags: ["Data Visualization", "Streamlit", "Python"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
  },
  {
    title: "AI-Powered Career Guidance: Bridging the Gap",
    excerpt: "Exploring how NLP and machine learning can help students make informed career decisions based on their academic performance.",
    date: "April 10, 2026",
    readTime: "10 min read",
    tags: ["AI", "NLP", "Career Guidance"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop"
  }
];

const BlogSection = () => {
  return (
    <MotionSection id="blog" className="py-32 relative overflow-hidden bg-[#0C0C0C]">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-widest mb-8">
            Insights
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="hero-heading">Latest</span>
            <br />
            <span className="text-foreground">Articles</span>
          </h2>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-[40px] bg-[#0C0C0C]/60 backdrop-blur-xl border-white/10 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-muted-foreground uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold uppercase tracking-wider group-hover:text-cyan-300 transition-colors"
                >
                  Read Article <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.article>
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
          <p className="text-muted-foreground text-lg font-light mb-6">
            Want to read more? Check out my publications and technical writeups.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold uppercase tracking-widest glow-cyan-btn"
          >
            View All Articles <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default BlogSection;
