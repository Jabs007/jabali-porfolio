import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Star, GitBranch, Terminal, Globe, Cpu, Loader2, Users } from "lucide-react";

interface GithubStats {
    repos: number;
    stars: number;
    followers: number;
    forks: number;
}

interface LanguageData {
    name: string;
    percentage: number;
    color: string;
}

const GITHUB_USERNAME = "Jabs007";

const languageColors: Record<string, string> = {
    Python: "#3776ab",
    JavaScript: "#f7df1e",
    TypeScript: "#3178c6",
    HTML: "#e34f26",
    CSS: "#563d7c",
    Java: "#b07219",
    PHP: "#4F5D95",
    Shell: "#89e051",
    Jupyter: "#DA5B0B",
    Dart: "#00B4AB",
};

const GithubAnalyticsCards = () => {
    const [stats, setStats] = useState<GithubStats | null>(null);
    const [languages, setLanguages] = useState<LanguageData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                // Get GitHub token from environment variable (optional for rate limit increase)
                const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
                const headers: Record<string, string> = {};
                
                if (githubToken) {
                    headers.Authorization = `token ${githubToken}`;
                }

                // Fetch User General Info
                const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers });
                if (!userResponse.ok) {
                    throw new Error(`Failed to fetch user data: ${userResponse.status}`);
                }
                const userData = await userResponse.json();

                // Fetch All Public Repos (max 100)
                const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, { headers });
                if (!reposResponse.ok) {
                    throw new Error(`Failed to fetch repos: ${reposResponse.status}`);
                }
                const reposData = await reposResponse.json();

                if (Array.isArray(reposData)) {
                    let totalStars = 0;
                    let totalForks = 0;
                    const langCounts: Record<string, number> = {};

                    reposData.forEach((repo: any) => {
                        totalStars += repo.stargazers_count;
                        totalForks += repo.forks_count;
                        if (repo.language) {
                            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
                        }
                    });

                    setStats({
                        repos: userData.public_repos,
                        followers: userData.followers,
                        stars: totalStars,
                        forks: totalForks,
                    });

                    // Process Languages
                    const totalLangs = Object.values(langCounts).reduce((a, b) => a + b, 0);
                    const processedLangs = Object.entries(langCounts)
                        .map(([name, count]) => ({
                            name,
                            percentage: Math.round((count / totalLangs) * 100),
                            color: languageColors[name] || "#64748b",
                        }))
                        .sort((a, b) => b.percentage - a.percentage)
                        .slice(0, 5);

                    setLanguages(processedLangs);
                }
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGithubData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-20 glass-card">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
                <span className="ml-4 text-muted-foreground font-mono uppercase tracking-widest text-sm">Syncing with GitHub...</span>
            </div>
        );
    }

    const statItems = [
        { label: "Public Repos", value: stats?.repos || 0, icon: <Code2 size={20} />, color: "text-primary" },
        { label: "Total Stars", value: stats?.stars || 0, icon: <Star size={20} />, color: "text-yellow-400" },
        { label: "Followers", value: stats?.followers || 0, icon: <Users size={20} />, color: "text-blue-400" },
        { label: "Project Forks", value: stats?.forks || 0, icon: <GitBranch size={20} />, color: "text-emerald-400" },
    ];

    return (
        <div className="grid lg:grid-cols-2 gap-8">
            {/* Stats Card */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 bg-surface/30 border-primary/20"
            >
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <Terminal className="text-primary" />
                    <span className="gradient-text">Live Statistics</span>
                </h3>

                <div className="grid grid-cols-2 gap-6">
                    {statItems.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-4 rounded-xl bg-background/40 border border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1"
                        >
                            <div className={`${s.color} mb-2`}>{s.icon}</div>
                            <div className="text-2xl font-black text-foreground">{s.value}</div>
                            <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Language Breakdown Card */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 bg-surface/30 border-primary/20"
            >
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <Cpu className="text-primary" />
                    <span className="gradient-text">Top Technology Stack</span>
                </h3>

                <div className="space-y-6">
                    {languages.length > 0 ? (
                        languages.map((lang, i) => (
                            <div key={lang.name} className="space-y-2">
                                <div className="flex justify-between text-sm font-bold">
                                    <span className="text-foreground">{lang.name}</span>
                                    <span className="text-primary">{lang.percentage}%</span>
                                </div>
                                <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${lang.percentage}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: lang.color }}
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10 text-muted-foreground">
                            No language data found.
                        </div>
                    )}

                    <div className="pt-4 flex flex-wrap gap-2">
                        <span className="text-[10px] uppercase font-bold text-muted-foreground px-3 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                            < Globe size={10} className="text-primary animate-pulse" />
                            Live GitHub Synchronization
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default GithubAnalyticsCards;
