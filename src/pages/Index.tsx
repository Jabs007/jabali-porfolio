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
    <DynamicBackground />
    <Navbar />
    <HeroSection />
    <ExpertiseSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <GitHubSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
