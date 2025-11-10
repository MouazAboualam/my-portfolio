import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Mail, Phone, MapPin, Code, Terminal, ShieldCheck, 
  Rocket, ChevronDown, ChevronLeft, ChevronRight, Github, Linkedin, FileText, Award, Smartphone, 
  Filter, Tag, Eye, Play, Clock, CheckCircle, Monitor, 
  Database, Lock, Zap, Globe, MousePointerClick, Server, GitBranch, 
  Cloud, Bug, ShoppingBag, CreditCard, Palette, Layout, User
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [activeMilestone, setActiveMilestone] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeTheme, setActiveTheme] = useState("all");
  const [activePanel, setActivePanel] = useState(0);

  // Mock data for projects and services
  const projects = [
    {
      id: 1,
      title: "Mafia Social Deduction Game",
      description: "Mobile-first multiplayer game with real-time interactions and secure authentication system",
      tech: ["React Native", "Firebase", "Node.js", "Socket.IO"],
      image: "https://placehold.co/300x600/1e3a8a/ffffff?text=Mafia+Game+Preview",
      url: "https://mafia-game-c8244.web.app",
      milestone: "products",
      features: [
        "Real-time player interactions",
        "Role-based game mechanics",
        "Secure authentication system",
        "Mobile-optimized UI/UX"
      ],
      securityFeatures: [
        "Input validation",
        "Rate limiting",
        "Secure WebSocket connections",
        "Data encryption at rest"
      ],
      theme: "from-indigo-600 to-purple-700"
    },
    {
      id: 2,
      title: "Data Processing Engine",
      description: "High-performance backend system for real-time data processing with distributed architecture",
      tech: ["Node.js", "Redis", "Docker", "Kubernetes"],
      image: "https://placehold.co/600x400/3b82f6/ffffff?text=Data+Engine",
      milestone: "coding",
      features: [
        "Real-time data streaming",
        "Distributed processing pipeline",
        "Auto-scaling architecture",
        "Comprehensive monitoring"
      ],
      securityFeatures: [
        "Data validation middleware",
        "Rate limiting per client",
        "Encrypted data transmission",
        "Audit logging system"
      ],
      theme: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Developer Dashboard",
      description: "Comprehensive monitoring and management dashboard for software teams with real-time analytics",
      tech: ["React", "TypeScript", "MongoDB", "TailwindCSS"],
      image: "https://placehold.co/600x400/10b981/ffffff?text=Dev+Dashboard",
      milestone: "websites",
      features: [
        "Real-time performance metrics",
        "Team collaboration tools",
        "Deployment pipeline visualization",
        "Customizable widgets"
      ],
      securityFeatures: [
        "Role-based access control",
        "Session management",
        "Data encryption at rest",
        "Security audit trails"
      ],
      theme: "from-emerald-600 to-teal-700"
    },
    {
      id: 4,
      title: "Security Compliance Scanner",
      description: "Automated vulnerability detection tool for web applications with detailed reports",
      tech: ["Python", "React", "OWASP ZAP", "Docker"],
      image: "https://placehold.co/600x400/ef4444/ffffff?text=Security+Scanner",
      milestone: "security",
      features: [
        "Automated vulnerability scanning",
        "Custom rule configuration",
        "Detailed PDF reports",
        "Integration with CI/CD pipelines"
      ],
      securityFeatures: [
        "OWASP Top 10 coverage",
        "Zero false positives guarantee",
        "Secure scan execution",
        "Compliance reporting"
      ],
      theme: "from-amber-500 to-orange-600"
    },
    {
      id: 5,
      title: "API Gateway Service",
      description: "Unified API gateway with authentication, rate limiting, and request transformation capabilities",
      tech: ["Express.js", "JWT", "Redis", "GraphQL"],
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=API+Gateway",
      milestone: "websites",
      features: [
        "Request routing and transformation",
        "Authentication and authorization",
        "Rate limiting and quotas",
        "Real-time analytics dashboard"
      ],
      securityFeatures: [
        "JWT token validation",
        "DDoS protection",
        "Input sanitization",
        "Secure secret management"
      ],
      theme: "from-violet-600 to-fuchsia-700"
    }
  ];

  // Theme showcase data
  const themes = [
    {
      id: 1,
      name: "Neon Pulse",
      price: 20,
      colors: ["#ff00ff", "#00ffff", "#ff00aa"],
      preview: "https://placehold.co/400x600/ff00ff/ffffff?text=Neon+Pulse",
      features: ["Responsive Layout", "Dark Mode", "Animation Kit"],
      theme: "from-pink-500 to-rose-600"
    },
    {
      id: 2,
      name: "Sunset Glow",
      price: 20,
      colors: ["#ff9e6d", "#ff6b6b", "#ffa500"],
      preview: "https://placehold.co/400x600/ff9e6d/ffffff?text=Sunset+Glow",
      features: ["Mobile Optimized", "SEO Friendly", "Fast Loading"],
      theme: "from-orange-500 to-amber-600"
    },
    {
      id: 3,
      name: "Forest Fresh",
      price: 20,
      colors: ["#10b981", "#059669", "#047857"],
      preview: "https://placehold.co/400x600/10b981/ffffff?text=Forest+Fresh",
      features: ["Eco-Friendly Design", "Light/Dark Toggle", "Blog Template"],
      theme: "from-emerald-500 to-teal-600"
    },
    {
      id: 4,
      name: "Royal Purple",
      price: 20,
      colors: ["#8b5cf6", "#7c3aed", "#6d28d9"],
      preview: "https://placehold.co/400x600/8b5cf6/ffffff?text=Royal+Purple",
      features: ["Premium UI Kit", "Admin Dashboard", "E-commerce Ready"],
      theme: "from-violet-500 to-purple-600"
    },
    {
      id: 5,
      name: "Ocean Blue",
      price: 20,
      colors: ["#3b82f6", "#2563eb", "#1d4ed8"],
      preview: "https://placehold.co/400x600/3b82f6/ffffff?text=Ocean+Blue",
      features: ["Corporate Template", "Portfolio Layout", "Contact Forms"],
      theme: "from-blue-500 to-cyan-600"
    },
    {
      id: 6,
      name: "Midnight Black",
      price: 20,
      colors: ["#1e293b", "#0f172a", "#020617"],
      preview: "https://placehold.co/400x600/1e293b/ffffff?text=Midnight+Black",
      features: ["Dark UI Kit", "Minimalist Design", "High Contrast"],
      theme: "from-slate-800 to-slate-900"
    },
    {
      id: 7,
      name: "Modern Gray",
      price: 20,
      colors: ["#64748b", "#475569", "#334155"],
      preview: "https://placehold.co/400x600/64748b/ffffff?text=Modern+Gray",
      features: ["Professional Template", "Team Section", "Testimonials"],
      theme: "from-gray-500 to-slate-600"
    }
  ];

  // Site showcase stream data
  const siteShowcases = [
    {
      id: 1,
      title: "Mafia Game",
      url: "https://mafia-game-c8244.web.app",
      theme: "from-indigo-600 to-purple-700",
      icon: <Smartphone className="w-6 h-6" />,
      type: "Mobile App"
    },
    {
      id: 2,
      title: "Data Engine",
      url: "#",
      theme: "from-blue-600 to-cyan-600",
      icon: <Zap className="w-6 h-6" />,
      type: "Backend System"
    },
    {
      id: 3,
      title: "DevDashboard",
      url: "#",
      theme: "from-emerald-600 to-teal-700",
      icon: <Monitor className="w-6 h-6" />,
      type: "Web Application"
    },
    {
      id: 4,
      title: "SecureScan",
      url: "#",
      theme: "from-amber-500 to-orange-600",
      icon: <Lock className="w-6 h-6" />,
      type: "Security Tool"
    },
    {
      id: 5,
      title: "APIMaster",
      url: "#",
      theme: "from-violet-600 to-fuchsia-700",
      icon: <Server className="w-6 h-6" />,
      type: "API Service"
    }
  ];

  const milestones = [
    { id: "all", title: "All Projects", icon: <Filter className="w-5 h-5" /> },
    { id: "products", title: "Products & Apps", icon: <Smartphone className="w-5 h-5" /> },
    { id: "coding", title: "Core Systems", icon: <Code className="w-5 h-5" /> },
    { id: "websites", title: "Web Applications", icon: <Monitor className="w-5 h-5" /> },
    { id: "security", title: "Security Tools", icon: <ShieldCheck className="w-5 h-5" /> }
  ];

  const services = [
    {
      id: 1,
      title: "Milestone-Based Development",
      description: "Clear deliverables with transparent pricing at each project phase",
      icon: <Rocket className="w-8 h-8 text-blue-500" />
    },
    {
      id: 2,
      title: "Backend Architecture",
      description: "Scalable system design with focus on performance, reliability and security",
      icon: <Server className="w-8 h-8 text-green-500" />
    },
    {
      id: 3,
      title: "Security Integration",
      description: "Built-in security practices following OWASP standards at every development stage",
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />
    }
  ];

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "hero";
      
      sections.forEach(section => {
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
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  // Filter projects by milestone
  const filteredProjects = activeMilestone === "all" 
    ? projects 
    : projects.filter(project => project.milestone === activeMilestone);

  // Filter themes by active filter
  const filteredThemes = activeTheme === "all" 
    ? themes 
    : themes.filter(theme => theme.theme.includes(activeTheme));

  // Mobile mockup component for the game with live iframe
  const MobileMockup = ({ project }) => (
    <div className="relative group">
      {/* Phone frame */}
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
      <div className="relative bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-800 overflow-hidden w-64 mx-auto lg:mx-0">
        {/* Phone header */}
        <div className="bg-slate-800 px-4 py-3 flex justify-between items-center border-b border-slate-700">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-slate-400 font-mono">Mafia Game</div>
        </div>
        
        {/* Phone screen with live iframe */}
        <div className="bg-slate-100 h-[500px] overflow-hidden relative">
          {/* Loading overlay */}
          <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-slate-300">Loading live demo...</p>
            </div>
          </div>
          
          {/* Live iframe - Note: Might be blocked by browser security policies */}
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src={project.url}
              title="Mafia Game Live Demo"
              className="w-full h-full border-0 transform scale-90 origin-top-left"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            ></iframe>
          </div>
        </div>
        
        {/* Phone footer */}
        <div className="bg-slate-800 px-4 py-3 flex justify-center">
          <div className="w-16 h-1.5 bg-slate-700 rounded-full"></div>
        </div>
      </div>
      
      {/* Play button overlay */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open(project.url, '_blank')}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg flex items-center justify-center border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <Play className="w-8 h-8" />
      </motion.button>
      
      {/* Security badge */}
      <div className="absolute -bottom-3 -right-3 bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
        <ShieldCheck className="w-3 h-3" />
        <span>Secured</span>
      </div>
    </div>
  );

  // Website theme mockup component
  const ThemeMockup = ({ theme }) => (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
      <div className={`h-2 ${theme.theme}`}></div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex -space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${theme.theme} text-white`}>
            ${theme.price}
          </div>
        </div>
        <div className="h-40 bg-slate-100 rounded-lg mb-3 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${theme.preview})` }}
          ></div>
        </div>
        <h4 className="font-bold text-lg mb-1">{theme.name}</h4>
        <p className="text-slate-600 text-sm mb-3">Premium website template</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {theme.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
              {feature}
            </span>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-2 rounded-lg font-medium text-white ${theme.theme} hover:opacity-90 transition-all`}
        >
          Buy Now
        </motion.button>
      </div>
    </div>
  );

  // Panel navigation function
  const changePanel = (direction) => {
    if (direction === 'next' && activePanel < 1) {
      setActivePanel(activePanel + 1);
    } else if (direction === 'prev' && activePanel > 0) {
      setActivePanel(activePanel - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 font-sans">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600">
                CodeCraft
              </span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {["hero", "themes", "showcase", "about", "services", "works", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-all duration-300 ${
                    activeSection === section
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {section === "showcase" ? "Live Demos" : 
                   section === "works" ? "My Projects" : 
                   section === "themes" ? "Themes" : 
                   section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Project
              </motion.button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-slate-700" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-700" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-slate-200 py-4"
          >
            <div className="flex flex-col space-y-4 px-4">
              {["hero", "themes", "showcase", "about", "services", "works", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left py-2 font-medium ${
                    activeSection === section
                      ? "text-blue-600 border-l-4 border-blue-600 pl-2"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {section === "showcase" ? "Live Demos" : 
                   section === "works" ? "My Projects" : 
                   section === "themes" ? "Themes" : 
                   section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-3 rounded-lg font-medium mt-2"
              >
                Start Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Scrollable Panels */}
      <section id="hero" className="min-h-screen pt-20">
        <div className="relative h-screen w-full overflow-hidden">
          {/* Panel Container */}
          <motion.div
            className="flex h-full"
            animate={{ x: activePanel === 0 ? "0%" : "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Panel 1: Current Hero Content */}
            <div className="min-w-full h-full flex items-center bg-gradient-to-b from-slate-50 to-slate-100 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                      Full-Stack Developer & Security Specialist
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                      Building <span className="text-blue-600">Secure Applications</span> &{" "}
                      <span className="text-cyan-600">Robust Systems</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-xl">
                      Backend-focused developer specializing in milestone-based development with embedded security practices. 
                      I deliver clean, maintainable code with comprehensive documentation and clear progress tracking.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection("contact")}
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Start Your Project
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => changePanel('next')}
                        className="border-2 border-slate-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all duration-300 flex items-center justify-center"
                      >
                        <User className="w-5 h-5 mr-2" />
                        Get To Know Me
                      </motion.button>
                    </div>
                    
                    <div className="flex items-center space-x-4 pt-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div 
                            key={i} 
                            className={`w-10 h-10 rounded-full border-2 border-white ${
                              i % 2 === 0 ? 'bg-blue-500' : 'bg-cyan-500'
                            }`}
                          ></div>
                        ))}
                      </div>
                      <p className="text-slate-600">
                        Trusted by 50+ tech startups and established companies
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-1 shadow-2xl">
                      <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl">
                        <div className="p-6 space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                              </div>
                              <h3 className="font-mono text-slate-500 text-sm">system_architecture.js</h3>
                            </div>
                            <ShieldCheck className="w-6 h-6 text-amber-500" />
                          </div>
                          
                          <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto font-mono text-sm text-green-400">
                            <div className="space-y-1">
                              <div>&lt;<span className="text-blue-300">MilestoneProject</span> <span className="text-amber-300">type</span>=<span className="text-green-300">"full-stack"</span>&gt;</div>
                              <div>  &lt;<span className="text-blue-300">Phase</span> <span className="text-amber-300">name</span>=<span className="text-green-300">"planning"</span> <span className="text-amber-300">deliverables</span>=<span className="text-green-300">"spec"</span>/&gt;</div>
                              <div>  &lt;<span className="text-blue-300">Phase</span> <span className="text-amber-300">name</span>=<span className="text-green-300">"development"</span> <span className="text-amber-300">deliverables</span>=<span className="text-green-300">"working-code"</span>/&gt;</div>
                              <div>  &lt;<span className="text-blue-300">Phase</span> <span className="text-amber-300">name</span>=<span className="text-green-300">"security"</span> <span className="text-amber-300">deliverables</span>=<span className="text-green-300">"audit-report"</span>/&gt;</div>
                              <div>  &lt;<span className="text-blue-300">Phase</span> <span className="text-amber-300">name</span>=<span className="text-green-300">"deployment"</span> <span className="text-amber-300">deliverables</span>=<span className="text-green-300">"live-system"</span>/&gt;</div>
                              <div>&lt;/<span className="text-blue-300">MilestoneProject</span>&gt;</div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-3">
                            <div className="flex-1 h-2 bg-blue-200 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-600 w-4/5"></div>
                            </div>
                            <span className="text-xs text-slate-500">85%</span>
                          </div>
                          
                          <div className="grid grid-cols-4 gap-2 mt-2">
                            {["Plan", "Build", "Secure", "Ship"].map((phase, index) => (
                              <div key={index} className="text-center p-2 bg-slate-50 rounded-lg">
                                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-1 ${
                                  index === 1 ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-600'
                                }`}>
                                  {index === 0 && <FileText className="w-4 h-4" />}
                                  {index === 1 && <Code className="w-4 h-4" />}
                                  {index === 2 && <ShieldCheck className="w-4 h-4" />}
                                  {index === 3 && <Rocket className="w-4 h-4" />}
                                </div>
                                <p className="text-xs font-medium text-slate-700">{phase}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -bottom-6 -right-6 bg-amber-100 border-2 border-amber-300 rounded-2xl p-3 shadow-lg max-w-xs"
                    >
                      <div className="flex items-start space-x-2">
                        <ShieldCheck className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-amber-800">
                          Security testing and compliance checks at every milestone
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Panel 2: About Me with Picture */}
            <div className="min-w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                  >
                    <div className="text-center lg:text-left">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative inline-block"
                      >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
                        <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-1 rounded-full">
                          <div className="bg-white rounded-full p-1">
                            <div className="w-48 h-48 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                              <User className="w-24 h-24 text-blue-500" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600">
                        Alex Morgan
                      </h2>
                      <p className="text-xl text-slate-600 mt-2">Full-Stack Developer & Security Specialist</p>
                    </div>
                    
                    <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Terminal className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Professional Background</h3>
                          <p className="text-slate-700">
                            8+ years of experience building scalable backend systems and secure web applications. 
                            Specialized in Node.js, Python, and modern JavaScript frameworks with a strong focus on security architecture.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-amber-100 p-3 rounded-lg">
                          <ShieldCheck className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Security Expertise</h3>
                          <p className="text-slate-700">
                            Implemented security best practices for 30+ applications including authentication systems, 
                            data encryption, vulnerability scanning, and compliance with OWASP standards.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-emerald-100 p-3 rounded-lg">
                          <Zap className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Development Approach</h3>
                          <p className="text-slate-700">
                            Milestone-based development with transparent pricing, comprehensive documentation, 
                            and regular progress updates. I believe in building maintainable code that stands the test of time.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      {["Node.js", "Python", "React", "Security", "AWS", "Docker", "GraphQL", "NoSQL"].map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-3xl p-1 shadow-2xl">
                      <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl">
                        <div className="p-6 space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                              </div>
                              <h3 className="font-mono text-slate-500 text-sm">professional_profile.js</h3>
                            </div>
                            <Award className="w-6 h-6 text-amber-500" />
                          </div>
                          
                          <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto font-mono text-sm text-green-400">
                            <div className="space-y-1">
                              <div>&lt;<span className="text-blue-300">DeveloperProfile</span>&gt;</div>
                              <div>  &lt;<span className="text-blue-300">Name</span>&gt;Alex Morgan&lt;/<span className="text-blue-300">Name</span>&gt;</div>
                              <div>  &lt;<span className="text-blue-300">Specialization</span>&gt;</div>
                              <div>    &lt;<span className="text-blue-300">Backend</span> <span className="text-amber-300">level</span>=<span className="text-green-300">"expert"</span>/&gt;</div>
                              <div>    &lt;<span className="text-blue-300">Security</span> <span className="text-amber-300">level</span>=<span className="text-green-300">"advanced"</span>/&gt;</div>
                              <div>  &lt;/<span className="text-blue-300">Specialization</span>&gt;</div>
                              <div>  &lt;<span className="text-blue-300">Approach</span>&gt;milestone-based&lt;/<span className="text-blue-300">Approach</span>&gt;</div>
                              <div>&lt;/<span className="text-blue-300">DeveloperProfile</span>&gt;</div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">Backend Development</span>
                                <span className="text-sm text-slate-400">95%</span>
                              </div>
                              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-11/12"></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">Security Implementation</span>
                                <span className="text-sm text-slate-400">90%</span>
                              </div>
                              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-amber-500 w-5/6"></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">System Architecture</span>
                                <span className="text-sm text-slate-400">85%</span>
                              </div>
                              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-17/20"></div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="pt-4 border-t border-slate-800">
                            <p className="text-sm text-blue-300 italic">
                              "I believe in writing code that's not just functional, but maintainable, secure, and well-documented."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-4 -left-4 bg-white border-2 border-dashed border-blue-400 rounded-2xl p-4 shadow-md max-w-xs"
                    >
                      <p className="font-medium text-blue-700 mb-2">Availability</p>
                      <p className="text-sm text-slate-700">
                        Currently accepting new projects with 2-3 week lead time for kickoff.
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Panel Navigation Controls */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => changePanel('prev')}
              disabled={activePanel === 0}
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                activePanel === 0 
                  ? 'bg-slate-300 cursor-not-allowed' 
                  : 'bg-white/80 backdrop-blur-sm shadow-lg hover:bg-blue-500 hover:text-white'
              } transition-all duration-300`}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <div className="flex space-x-2">
              {[0, 1].map((panel) => (
                <motion.div
                  key={panel}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activePanel === panel ? 'bg-blue-600 w-6' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => changePanel('next')}
              disabled={activePanel === 1}
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                activePanel === 1 
                  ? 'bg-slate-300 cursor-not-allowed' 
                  : 'bg-white/80 backdrop-blur-sm shadow-lg hover:bg-blue-500 hover:text-white'
              } transition-all duration-300`}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
          
          {/* Scroll hint for Panel 1 */}
          {activePanel === 0 && (
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={() => changePanel('next')}
            >
              <ChevronDown className="w-8 h-8 text-slate-500 animate-bounce" />
            </motion.div>
          )}
        </div>
      </section>

      {/* Themes Marketplace Section */}
      <section id="themes" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            >
              <ShoppingBag className="w-4 h-4 inline mr-1" />
              Premium Website Themes
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready-to-Use Website Themes
            </motion.h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              Professionally designed, responsive website templates for your next project. 
              All themes include complete source code and documentation.
            </motion.p>
          </div>
          
          {/* Theme Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { id: "all", name: "All Themes", colors: "from-pink-500 to-purple-600" },
              { id: "pink", name: "Pink Themes", colors: "from-pink-500 to-rose-600" },
              { id: "orange", name: "Orange Themes", colors: "from-orange-500 to-amber-600" },
              { id: "green", name: "Green Themes", colors: "from-emerald-500 to-teal-600" },
              { id: "purple", name: "Purple Themes", colors: "from-violet-500 to-purple-600" },
              { id: "blue", name: "Blue Themes", colors: "from-blue-500 to-cyan-600" },
              { id: "black", name: "Dark Themes", colors: "from-slate-800 to-slate-900" },
              { id: "gray", name: "Gray Themes", colors: "from-gray-500 to-slate-600" }
            ].map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ y: -2 }}
                onClick={() => setActiveTheme(filter.id)}
                className={`flex flex-col items-center px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTheme === filter.id
                    ? `bg-gradient-to-r ${filter.colors} text-white shadow-lg`
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className={`w-4 h-4 rounded-full mb-1 ${filter.colors}`}></div>
                <span className="text-sm">{filter.name}</span>
              </motion.button>
            ))}
          </div>
          
          {/* Horizontal scrolling theme showcase */}
          <div className="relative mb-12">
            {/* Gradient overlays for scroll indication */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrollable container */}
            <div className="flex overflow-x-auto scrollbar-hide py-6 gap-6">
              {filteredThemes.map((theme, index) => (
                <motion.div
                  key={theme.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="flex-shrink-0 w-80"
                >
                  <ThemeMockup theme={theme} />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Theme Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[{
              icon: <Layout className="w-8 h-8 text-pink-500" />,
              title: "Responsive Design",
              description: "All themes are fully responsive and look great on all device sizes."
            }, {
              icon: <CreditCard className="w-8 h-8 text-amber-500" />,
              title: "One-Time Payment",
              description: "Pay once for lifetime access to the theme and all future updates."
            }, {
              icon: <Code className="w-8 h-8 text-emerald-500" />,
              title: "Complete Source Code",
              description: "Get full access to clean, well-documented code with no restrictions."
            }].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center max-w-4xl mx-auto bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-pink-100">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-white px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-pink-200"
            >
              <ShoppingBag className="w-4 h-4 inline mr-1 text-pink-500" />
              All themes priced at $20
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold mb-4"
            >
              Get Started with Premium Themes Today
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-6"
            >
              Download any theme instantly after purchase. No subscription fees, no hidden costs.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              <span>Browse All Themes</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Site Showcase Stream Section */}
      <section id="showcase" className="py-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Live Application Showcase
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              Interactive previews of my software applications and systems
            </p>
          </div>
          
          {/* Horizontal scrolling showcase stream */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex overflow-x-auto scrollbar-hide py-6 space-x-6">
              {siteShowcases.map((site, index) => (
                <motion.div
                  key={site.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="flex-shrink-0 w-48 h-72 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                  style={{ backgroundColor: '#1e293b' }}
                  onMouseEnter={() => setHoveredProject(site.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className={`h-full bg-gradient-to-b ${site.theme} p-4 flex flex-col`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        {site.icon}
                      </div>
                      <div className="bg-amber-400 text-amber-900 text-xs px-2 py-1 rounded-full font-bold">
                        {site.type}
                      </div>
                    </div>
                    
                    <div className="mt-auto mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">{site.title}</h3>
                      <p className="text-blue-100 text-sm">Live demo available</p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-white/20">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div 
                            key={i} 
                            className={`w-6 h-6 rounded-full border-2 border-white ${
                              i === 1 ? 'bg-white' : 'bg-blue-300'
                            }`}
                          ></div>
                        ))}
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white"
                      >
                        <MousePointerClick className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Hover overlay with live preview */}
                  {hoveredProject === site.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4 flex flex-col"
                    >
                      <div className="bg-slate-800/50 rounded-lg p-3 mb-3">
                        <div className="flex items-center space-x-2 text-xs text-blue-300">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Live Preview</span>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <p className="text-white/90 text-sm mb-2">
                          Interactive preview of the application with real-time functionality
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.open(site.url, '_blank')}
                          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg flex items-center justify-center w-full"
                        >
                          <span>Launch Live Demo</span>
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-all duration-300"
            >
              <span>View All Projects</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* About Section - Simplified since we have detailed intro in hero */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Technical Expertise
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-2">System Architecture</h3>
                <p className="text-slate-700">
                  8+ years designing scalable backend systems with expertise in database architecture, 
                  API design, and distributed systems. I specialize in creating maintainable codebases 
                  with clear documentation and comprehensive test coverage.
                </p>
              </div>
              
              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl">
                <h3 className="text-xl font-bold text-cyan-900 mb-2">Security Integration</h3>
                <p className="text-slate-700">
                  Security-focused development with expertise in authentication systems, data protection, 
                  and vulnerability prevention. I implement security best practices at every stage of 
                  development, not as an afterthought.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                {["Node.js", "Python", "Database Design", "Security Audits", "Cloud Architecture", "CI/CD"].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-slate-50 p-4 rounded-xl text-center border border-slate-200"
                  >
                    <Award className="w-8 h-8 mx-auto text-amber-500 mb-2" />
                    <p className="font-medium text-slate-800">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-1">
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold">Milestone Pricing System</h3>
                      <ShieldCheck className="w-6 h-6 text-amber-500" />
                    </div>
                    
                    <div className="space-y-6">
                      {["Planning & Architecture", "Core Development", "Security Integration", "Testing & Deployment", "Documentation & Handover"].map((phase, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex flex-col items-center mr-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              index === 1 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
                            }`}>
                              {index + 1}
                            </div>
                            {index < 4 && (
                              <div className="w-1 h-12 bg-slate-200"></div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">{phase}</h4>
                            <p className="text-slate-600">
                              {index === 0 && "Fixed price: $500-2000 | Deliverables: Technical spec, architecture diagram, timeline"}
                              {index === 1 && "Fixed price: $2000-8000 | Deliverables: Working core functionality with tests"}
                              {index === 2 && "Fixed price: $1000-3000 | Deliverables: Security audit report, vulnerability fixes"}
                              {index === 3 && "Fixed price: $500-1500 | Deliverables: Test reports, deployment scripts, live system"}
                              {index === 4 && "Fixed price: $300-800 | Deliverables: User manuals, API docs, source code"}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white border-2 border-dashed border-blue-300 rounded-2xl p-4 shadow-md max-w-xs"
              >
                <p className="font-medium text-blue-700 mb-2">Payment Structure</p>
                <p className="text-sm text-slate-700">
                  30% upfront, 40% on core delivery, 30% on final handover. 
                  No payment until milestone approval.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Professional Development Services
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized backend development with security-first approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Fixed pricing per milestone
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Comprehensive documentation
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    Security audits included
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Featured Software Projects
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              Backend-focused applications built with security and scalability in mind
            </p>
          </div>
          
          {/* Milestone Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {milestones.map((milestone) => (
              <motion.button
                key={milestone.id}
                whileHover={{ y: -2 }}
                onClick={() => setActiveMilestone(milestone.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeMilestone === milestone.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {milestone.icon}
                <span className="ml-2">{milestone.title}</span>
              </motion.button>
            ))}
          </div>
          
          {/* Featured Project - Mafia Game with enhanced layout and live iframe */}
          {activeMilestone === "all" || activeMilestone === "products" ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-1 mb-16 shadow-lg border border-slate-200"
            >
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left side - Project details */}
                  <div className="p-8 flex flex-col justify-center lg:order-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-600 font-medium flex items-center">
                        <Smartphone className="w-4 h-4 mr-1" />
                        Mobile Application
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Mafia Social Deduction Game</h3>
                    <p className="text-slate-600 mb-6">
                      A real-time multiplayer social deduction game built for mobile devices with 
                      secure authentication and real-time player interactions. Developed using React Native 
                      and Firebase with comprehensive security measures.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <div className="flex items-center text-blue-700 mb-2">
                          <Play className="w-5 h-5 mr-2" />
                          <span className="font-medium">Live Demo</span>
                        </div>
                        <p className="text-sm text-slate-700 break-all">mafia-game-c8244.web.app</p>
                        <button
                          onClick={() => window.open(projects[0].url, '_blank')}
                          className="mt-2 text-blue-600 text-sm font-medium hover:underline flex items-center"
                        >
                          <span>Launch Full Screen</span>
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                        <div className="flex items-center text-amber-700 mb-2">
                          <ShieldCheck className="w-5 h-5 mr-2" />
                          <span className="font-medium">Security Level</span>
                        </div>
                        <p className="text-sm text-slate-700">Enterprise Grade</p>
                        <p className="text-xs text-amber-800 mt-1">OWASP compliant architecture</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-bold text-lg flex items-center">
                        <Tag className="w-5 h-5 text-blue-600 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {projects[0].features.map((feature, index) => (
                          <li key={index} className="flex items-start text-slate-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-bold text-lg flex items-center">
                        <ShieldCheck className="w-5 h-5 text-amber-600 mr-2" />
                        Security Implementation
                      </h4>
                      <ul className="space-y-2">
                        {projects[0].securityFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start text-slate-700">
                            <ShieldCheck className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Right side - Phone mockup with live iframe */}
                  <div className="bg-slate-50 p-8 flex items-center justify-center lg:order-2">
                    <MobileMockup project={projects[0]} />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
          
          {/* Remaining Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects
              .filter(project => project.id !== 1) // Exclude Mafia game as it's featured separately
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-green-600 font-medium">
                          {project.milestone === "products" && "Mobile Application"}
                          {project.milestone === "coding" && "Backend System"}
                          {project.milestone === "websites" && "Web Application"}
                          {project.milestone === "security" && "Security Tool"}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-slate-600 mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <h4 className="font-bold flex items-center text-slate-800">
                          <Clock className="w-5 h-5 text-blue-500 mr-2" />
                          Key Components
                        </h4>
                        <ul className="space-y-2">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-slate-700">
                              <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-600 font-medium flex items-center space-x-2 group"
                      >
                        <span>View Project Details</span>
                        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                    <div className="bg-slate-200 border-l border-slate-300 flex items-center justify-center p-4">
                      <div 
                        className={`w-full h-64 bg-gradient-to-br ${project.theme} rounded-xl shadow-lg`}
                      >
                        <div className="h-full flex flex-col items-center justify-center p-6 text-white">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                            {project.milestone === "products" && <Smartphone className="w-8 h-8 text-white" />}
                            {project.milestone === "coding" && <Server className="w-8 h-8 text-white" />}
                            {project.milestone === "websites" && <Monitor className="w-8 h-8 text-white" />}
                            {project.milestone === "security" && <ShieldCheck className="w-8 h-8 text-white" />}
                          </div>
                          <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                          <p className="text-blue-100 text-center opacity-90">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
          
          {/* View All Projects Button */}
          {(filteredProjects.length > 3 || activeMilestone !== "all") && (
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-all duration-300"
              >
                <span>View All Projects</span>
                <ChevronRight className="w-4 h-4 ml-2" />
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Let's Build Your Next Project
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to build something exceptional? Let's discuss your requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-slate-700">projects@codecraft.dev</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Consultation</h3>
                  <p className="text-slate-700">Schedule a 30-minute discovery call</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-slate-700">Available for remote projects worldwide</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-slate-200">
                <h3 className="font-bold text-lg mb-4">Connect Professionally</h3>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 hover:bg-blue-500 hover:text-white transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-1">
                    Project Type
                  </label>
                  <select
                    id="project"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                  >
                    <option>Milestone-Based Development</option>
                    <option>Mobile Application</option>
                    <option>Web Application</option>
                    <option>Backend System</option>
                    <option>Security Audit & Implementation</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Describe your project requirements, timeline, and security concerns..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request Project Proposal
                </motion.button>
                
                <p className="text-xs text-slate-500 text-center">
                  All submissions are encrypted and handled with strict confidentiality. 
                  We never share your information with third parties.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  CodeCraft
                </span>
              </div>
              <p className="mb-4 max-w-md">
                Professional software development with a focus on backend systems, security, 
                and clean architecture. Building scalable applications with milestone-based delivery.
              </p>
              <div className="flex space-x-4">
                {[Github, Linkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3 }}
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                {["Milestone Development", "Backend Architecture", "Security Integration", "API Development"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Development Process</h3>
              <ul className="space-y-2">
                {["Planning & Architecture", "Core Development", "Security Integration", "Deployment"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500">
              © {new Date().getFullYear()} CodeCraft Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Security Practices", "Terms of Service"].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-slate-500 hover:text-blue-400 transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
