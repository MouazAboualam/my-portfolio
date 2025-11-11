import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  MousePointerClick,
  ShieldCheck,
  Smartphone,
  Zap,
  Monitor,
  Lock,
  Server,
} from "lucide-react";

const SiteShowcaseSection = ({ siteShowcases, scrollToSection }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Map icon names to actual components
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-6 h-6" />;
      case "Zap":
        return <Zap className="w-6 h-6" />;
      case "Monitor":
        return <Monitor className="w-6 h-6" />;
      case "Lock":
        return <Lock className="w-6 h-6" />;
      case "Server":
        return <Server className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="showcase"
      className="py-16 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
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
                style={{ backgroundColor: "#1e293b" }}
                onMouseEnter={() => setHoveredProject(site.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className={`h-full bg-gradient-to-b ${site.theme} p-4 flex flex-col`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      {getIconComponent(site.icon)}
                    </div>
                    <div className="bg-amber-400 text-amber-900 text-xs px-2 py-1 rounded-full font-bold">
                      {site.type}
                    </div>
                  </div>
                  <div className="mt-auto mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {site.title}
                    </h3>
                    <p className="text-blue-100 text-sm">Live demo available</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/20">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded-full border-2 border-white ${
                            i === 1 ? "bg-white" : "bg-blue-300"
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
                        Interactive preview of the application with real-time
                        functionality
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            site.url,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
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
  );
};

export default SiteShowcaseSection;
