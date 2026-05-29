import Navbar from "@/components/Navbar";
import DynamicBackground from "@/components/DynamicBackground";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen bg-background text-foreground scroll-smooth overflow-x-hidden font-display">
    {/* Skip to main content link for accessibility */}
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-bold"
    >
      Skip to main content
    </a>

    <DynamicBackground />
    <Navbar />
    <main id="main-content">
      <HeroSection />
      <ExpertiseSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <GitHubSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
