import MotionSection from "./MotionSection";
import GithubAnalyticsCards from "./GithubAnalyticsCards";

const GitHubSection = () => {
  const username = "Jabs007";

  return (
    <MotionSection id="github" className="py-24">
      <div className="section-container relative">
        {/* Glow element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none -z-10" aria-hidden="true" />

        <h2 className="text-3xl sm:text-4xl font-black mb-2 flex items-center gap-2">
          <span className="gradient-text tracking-tighter uppercase px-3 py-1 bg-white/5 border border-white/10 rounded-xl skew-x-[-10deg]">GitHub Intelligence</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-16" aria-hidden="true" />

        <div className="space-y-12">
          {/* Custom Built Analytics Dashboard */}
          <GithubAnalyticsCards />

          {/* GitHub Streak */}
          <div className="mt-12 glass-card p-10 flex items-center justify-center min-h-[200px] hover:border-primary/50 transition-all duration-500 bg-surface/30 group">
            <div className="relative w-full text-center">
              <h4 className="text-sm font-mono text-primary/60 uppercase tracking-[0.4em] mb-10 group-hover:text-primary transition-colors">Career Contribution Metrics</h4>
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true&ring=06b6d4&fire=06b6d4&stroke=06b6d4&currStreakLabel=06b6d4&background=0f172a00`}
                alt="GitHub contribution streak stats for Jabs007"
                loading="lazy"
                className="w-full max-w-4xl h-auto mx-auto grayscale-[0.5] hover:grayscale-0 transition-all duration-700 brightness-90 hover:brightness-110"
                onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                style={{ opacity: 0, transition: "opacity 1s ease-in-out" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground bg-white/5 inline-block px-4 py-2 rounded-full border border-white/5">
            Powered by GitHub API Integration for <span className="text-primary">@{username}</span>
          </p>
        </div>
      </div>
    </MotionSection>
  );
};

export default GitHubSection;
