import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const Navigation = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
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
            {["welcome", "themes", "showcase", "about", "services", "works", "contact"].map((section) => (
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
            {["welcome", "themes", "showcase", "about", "services", "works", "contact"].map((section) => (
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
  );
};

export default Navigation;