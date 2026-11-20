import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import CustomCursor from './components/CustomCursor';
import PantherVisualVault from './components/PantherVisualVault';

export default function App() {
  return (
    <div className="vibranium-app">
      {/* Main Experience Layout */}
      <Navigation />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Classified Black Panther Visual Vault Lightbox */}
      <PantherVisualVault />

      {/* Quick Command Palette HUD */}
      <CommandPalette />

      {/* Wakanda pointer */}
      <CustomCursor />
    </div>
  );
}
