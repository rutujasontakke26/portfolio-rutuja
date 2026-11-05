import SiteHeader from "./components/SiteHeader.jsx";
import Footer from "./components/Footer.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import SkillsSection from "./sections/SkillsSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import JourneySection from "./sections/JourneySection.jsx";
import ContactSection from "./sections/ContactSection.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
