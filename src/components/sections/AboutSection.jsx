import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  FileText,
  Code,
  Rocket,
  ChevronLeft,
  ChevronRight,
  User,
  Terminal,
  Lock,
  GitBranch,
  Cloud,
  Database,
} from "lucide-react";

const AboutSection = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const panels = [
    {
      title: "Professional Journey",
      subtitle: "Full-Stack Developer & Security Specialist",
      icon: <User className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            8+ years of experience building scalable backend systems and secure
            web applications.
          </p>
          <p className="text-slate-700">
            Started as a civil engineer, then transitioned into programming
            where I excel in both domains.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Node.js
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Python
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Security
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Security Focus",
      subtitle: "OWASP Standards & Best Practices",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            Implemented security best practices for 30+ applications including
            authentication systems and data encryption.
          </p>
          <p className="text-slate-700">
            Specialized in compliance with OWASP standards and proactive
            vulnerability prevention.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
              Authentication
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
              Encryption
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
              OWASP
            </span>
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
              Vulnerability
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Development Approach",
      subtitle: "Milestone-Based & Transparent",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            Milestone-based development with transparent pricing and
            comprehensive documentation.
          </p>
          <p className="text-slate-700">
            Regular progress updates and clear deliverables for each project
            phase.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
              Milestones
            </span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
              Documentation
            </span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
              Progress
            </span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
              Updates
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Technical Stack",
      subtitle: "Modern Tools & Technologies",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-fuchsia-500",
      content: (
        <div className="space-y-4">
          <p className="text-slate-700">
            Proficient in modern full-stack technologies with strong backend
            expertise.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-blue-500" />
              <span className="text-sm">Node.js, Python</span>
            </div>
            <div className="flex items-center space-x-2">
              <GitBranch className="w-4 h-4 text-green-500" />
              <span className="text-sm">Git, CI/CD</span>
            </div>
            <div className="flex items-center space-x-2">
              <Database className="w-4 h-4 text-purple-500" />
              <span className="text-sm">Databases</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="w-4 h-4 text-gray-500" />
              <span className="text-sm">Cloud Services</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextPanel = () => {
    setCurrentPanel((prev) => (prev + 1) % panels.length);
  };

  const prevPanel = () => {
    setCurrentPanel((prev) => (prev - 1 + panels.length) % panels.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;

    // Swipe left (next panel)
    if (diff > 50) {
      nextPanel();
    }
    // Swipe right (prev panel)
    else if (diff < -50) {
      prevPanel();
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My Journey & Expertise
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Dots */}
          <div className="flex justify-center mb-8 space-x-2">
            {panels.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPanel(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPanel
                    ? "bg-blue-600 scale-125"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Main Panel with Swipe Support */}
          <motion.div
            key={currentPanel}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden lg:max-w-2xl lg:mx-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`bg-gradient-to-r ${panels[currentPanel].color} p-6 text-white`}
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                  {panels[currentPanel].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    {panels[currentPanel].title}
                  </h3>
                  <p className="opacity-90">{panels[currentPanel].subtitle}</p>
                </div>
              </div>
            </div>

            <div className="p-8">{panels[currentPanel].content}</div>
          </motion.div>

          {/* Navigation Arrows - Desktop (bottom) */}
          <div className="hidden lg:flex justify-between items-center mt-6 max-w-2xl mx-auto">
            <button
              onClick={prevPanel}
              className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>

            <div className="text-center">
              <p className="text-slate-600">
                Panel {currentPanel + 1} of {panels.length}
              </p>
            </div>

            <button
              onClick={nextPanel}
              className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>
          </div>

          {/* Mobile arrows (side) */}
          <div className="lg:hidden flex justify-between items-center mt-6">
            <button
              onClick={prevPanel}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>

            <div className="text-center">
              <p className="text-slate-600">
                Panel {currentPanel + 1} of {panels.length}
              </p>
            </div>

            <button
              onClick={nextPanel}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow duration-300"
            >
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
