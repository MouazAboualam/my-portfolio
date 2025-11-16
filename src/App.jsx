import { useState, useEffect, lazy, Suspense } from "react";

// Lazy load heavy components
const Navigation = lazy(() => import("./components/layout/Navigation"));
const Footer = lazy(() => import("./components/layout/Footer"));
const ServicesSection = lazy(() =>
  import("./components/sections/ServicesSection")
);
const AboutSection = lazy(() => import("./components/sections/AboutSection"));
const ContactSection = lazy(() =>
  import("./components/sections/ContactSection")
);
const ThemesSection = lazy(() => import("./components/sections/ThemesSection"));
const SiteShowcaseSection = lazy(() =>
  import("./components/sections/SiteShowcaseSection")
);
const WorksSection = lazy(() => import("./components/sections/WorksSection"));
const WelcomeSection = lazy(() =>
  import("./components/sections/WelcomeSection")
);

// Load data asynchronously
const loadProjects = async () => import("./data/projects");
const loadThemes = async () => import("./data/themes");
const loadServices = async () => import("./data/services");

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("welcome");
  const [activeMilestone, setActiveMilestone] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeTheme, setActiveTheme] = useState("all");
  const [activePanel, setActivePanel] = useState(0);
  const [data, setData] = useState({ projects: [], themes: [], services: [] });

  useEffect(() => {
    // Load data asynchronously
    Promise.all([loadProjects(), loadThemes(), loadServices()]).then(
      ([projects, themes, services]) => {
        setData({
          projects: projects.default,
          themes: themes.default,
          services: services.default,
        });
      }
    );
  }, []);

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "welcome";

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

  const filteredProjects =
    activeMilestone === "all"
      ? data.projects
      : data.projects.filter(
          (project) => project.milestone === activeMilestone
        );

  const filteredThemes =
    activeTheme === "all"
      ? data.themes
      : themes.filter((theme) => theme.theme.includes(activeTheme));

  const changePanel = (direction) => {
    if (direction === "next" && activePanel < 1) {
      setActivePanel(activePanel + 1);
    } else if (direction === "prev" && activePanel > 0) {
      setActivePanel(activePanel - 1);
    }
  };

  // Loading fallback component
  const LoadingFallback = () => (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-slate-600">Loading portfolio...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100 text-slate-900 font-sans">
      <Suspense fallback={<LoadingFallback />}>
        <Navigation
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <WelcomeSection scrollToSection={scrollToSection} />

        <ThemesSection themes={data.themes} />

        <AboutSection />
        <ServicesSection services={data.services} />
        <WorksSection
          projects={data.projects}
          scrollToSection={scrollToSection}
        />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
