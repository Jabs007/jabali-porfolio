import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

/** Repository data shape from GitHub */
interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
}

/** Loading skeleton for a card */
const CardSkeleton = () => (
  <div className="flex flex-col gap-3 p-6 rounded-[24px] bg-[#0C0C0C]/60 backdrop-blur-xl border border-cyan-500/20 animate-pulse">
    <div className="w-3/4 h-4 bg-cyan-500/10 rounded" />
    <div className="w-full h-4 bg-cyan-500/10 rounded" />
    <div className="w-1/2 h-4 bg-cyan-500/10 rounded" />
  </div>
);

const FeaturedWorkSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        const headers: Record<string, string> = {};
        if (token) headers.Authorization = `token ${token}`;
        const res = await fetch(
          "https://api.github.com/users/Jabs007/repos?per_page=6&sort=updated",
          { headers }
        );
        if (!res.ok) throw new Error(`GitHub error ${res.status}`);
        const data = await res.json();
        setRepos(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("Failed to load repos:", e);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0C0C0C] py-32 overflow-hidden">
      {/* Subtle cyan background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl sm:text-6xl font-black hero-heading mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curated projects from my GitHub, demonstrating modern full‑stack and data‑science solutions.
          </p>
        </motion.div>

        {/* Repo Grid */}
        <AnimatePresence>
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          ) : repos.length > 0 ? (
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
            >
              {repos.map((repo) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="group block rounded-[24px] bg-[#0C0C0C]/80 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="p-6 flex flex-col h-full">
                    {/* Placeholder preview */}
                    <div className="mb-4 h-40 bg-cyan-500/10 rounded flex items-center justify-center text-cyan-400 text-sm font-medium">
                      Project preview
                    </div>
                    <h3 className="text-xl font-black text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                      {repo.name}
                    </h3>
                    {repo.description && (
                      <p className="text-muted-foreground text-sm flex-1 mb-3">
                        {repo.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      {repo.language && (
                        <span className="px-2 py-1 text-xs rounded bg-cyan-500/10 text-cyan-400">
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center text-cyan-400 text-sm">
                        <Star size={14} className="mr-1" />
                        {repo.stargazers_count}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 rounded-[24px] bg-[#0C0C0C]/80 backdrop-blur-xl border border-cyan-500/20 text-center">
                <h3 className="text-xl font-black text-foreground mb-2">Sample Project</h3>
                <p className="text-muted-foreground text-sm">
                  No public repositories found – this placeholder appears when the GitHub request fails or returns an empty list.
                </p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
