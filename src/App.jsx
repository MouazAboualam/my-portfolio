import { useState, useEffect } from "react";

import projects from "./data/projects";
import themes from "./data/themes";
import siteShowcases from "./data/siteShowcases";
import services from "./data/services";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ServicesSection from "./components/sections/ServicesSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ThemesSection from "./components/sections/ThemesSection";
import SiteShowcaseSection from "./components/sections/SiteShowcaseSection";
import WorksSection from "./components/sections/WorksSection";
import WelcomeSection from "./components/sections/WelcomeSection";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("welcome"); // Updated initial state
  const [activeMilestone, setActiveMilestone] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeTheme, setActiveTheme] = useState("all");
  const [activePanel, setActivePanel] = useState(0);

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "welcome"; // Updated default

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  // Filter projects by milestone
  const filteredProjects =
    activeMilestone === "all"
      ? projects
      : projects.filter((project) => project.milestone === activeMilestone);

  // Filter themes by active filter
  const filteredThemes =
    activeTheme === "all"
      ? themes
      : themes.filter((theme) => theme.theme.includes(activeTheme));

  // Panel navigation function
  const changePanel = (direction) => {
    if (direction === "next" && activePanel < 1) {
      setActivePanel(activePanel + 1);
    } else if (direction === "prev" && activePanel > 0) {
      setActivePanel(activePanel - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 font-sans">
      {/* Navigation Bar */}
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* WelcomeSection Section - Scrollable Panels */}
      <WelcomeSection scrollToSection={scrollToSection} />

      {/* Themes Marketplace Section */}
      <ThemesSection themes={themes} />

      {/* About Section - Simplified since we have detailed intro in WelcomeSection */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection services={services} />

      {/* Works Section */}
      <WorksSection projects={projects} scrollToSection={scrollToSection} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
