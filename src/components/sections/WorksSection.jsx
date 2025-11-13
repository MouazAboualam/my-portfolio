import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  CheckCircle,
  ShieldCheck,
  Tag,
  Clock,
  Smartphone,
  Server,
  Monitor,
  ChevronDown,
  Play,
  Grid3X3,
  List,
  ChevronUp,
} from "lucide-react";
import MobileMockup from "../ui/MobileMockup";

const WorksSection = ({ projects, scrollToSection }) => {
  const [activeMilestone, setActiveMilestone] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Filter projects based on active milestone
  const filteredProjects =
    activeMilestone === "all"
      ? projects
      : projects.filter((project) => project.milestone === activeMilestone);

  // Milestones data
  const milestones = [
    {
      id: "all",
      title: "All",
      icon: <Grid3X3 className="w-5 h-5" />,
    },
    {
      id: "products",
      title: "Products",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      id: "coding",
      title: "Systems",
      icon: <Server className="w-5 h-5" />,
    },
    {
      id: "websites",
      title: "Websites",
      icon: <Monitor className="w-5 h-5" />,
    },
    {
      id: "security",
      title: "Security",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  // Separate Mafia game (id: 1) from other projects
  const mafiaGame = projects.find((p) => p.id === 1);
  const otherProjects = filteredProjects.filter((p) => p.id !== 1);

  // First non-Mafia project to always show
  const firstProject = otherProjects[0];
  const remainingProjects = otherProjects.slice(1);

  return (
    <section id="works" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-3"
          >
            Featured Software Projects
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-3 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Backend-focused applications built with security and scalability in
            mind
          </p>
        </div>

        {/* Controls - Compact layout */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {milestones.map((milestone) => (
              <motion.button
                key={milestone.id}
                whileHover={{ y: -1 }}
                onClick={() => setActiveMilestone(milestone.id)}
                className={`flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeMilestone === milestone.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {milestone.icon}
                <span className="ml-1 hidden sm:inline">{milestone.title}</span>
                <span className="ml-1 sm:hidden">
                  {milestone.title.substring(0, 3)}
                </span>
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg ${
                viewMode === "grid"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg ${
                viewMode === "list"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Project - Mafia Game (Always visible if applicable) */}
        {(activeMilestone === "all" || activeMilestone === "products") &&
        mafiaGame ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-1 mb-10 shadow-md"
          >
            <div className="bg-white rounded-xl overflow-hidden">
              <div
                className={`grid grid-cols-1 ${
                  viewMode === "grid" ? "lg:grid-cols-2" : ""
                }`}
              >
                {/* Left side - Project details */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium text-sm flex items-center">
                      <Smartphone className="w-3 h-3 mr-1" />
                      Mobile App
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Mafia Social Deduction Game
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Real-time multiplayer social deduction game with secure
                    authentication and real-time player interactions.
                  </p>

                  <div className="grid grid-cols-1 ${viewMode === 'list' ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-3 mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                      <div className="flex items-center text-blue-700 mb-1">
                        <Play className="w-4 h-4 mr-1" />
                        <span className="font-medium text-xs">Live Demo</span>
                      </div>
                      <p className="text-xs text-slate-700 break-all">
                        mafia-game-c8244.web.app
                      </p>
                      <button
                        onClick={() =>
                          window.open(
                            mafiaGame?.url,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="mt-1 text-blue-600 text-xs font-medium hover:underline flex items-center"
                      >
                        <span>Launch</span>
                        <ChevronRight className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                      <div className="flex items-center text-amber-700 mb-1">
                        <ShieldCheck className="w-4 h-4 mr-1" />
                        <span className="font-medium text-xs">Security</span>
                      </div>
                      <p className="text-xs text-slate-700">Enterprise Grade</p>
                      <p className="text-[10px] text-amber-800 mt-0.5">
                        OWASP compliant
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-bold text-sm flex items-center">
                      <Tag className="w-4 h-4 text-blue-600 mr-1" />
                      Features
                    </h4>
                    <ul className="space-y-1">
                      {mafiaGame?.features.slice(0, 3).map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start text-slate-700 text-xs"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right side - Phone mockup */}
                <div className="bg-slate-50 p-4 flex items-center justify-center">
                  <div className="w-full max-w-xs">
                    <MobileMockup project={mafiaGame} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}

        {/* First Project Card - Always Visible (Non-Mafia) */}
        {firstProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 mb-6 ${
              viewMode === "list" ? "flex" : ""
            }`}
          >
            {viewMode === "list" ? (
              <div className="flex">
                <div className="w-1/3 bg-slate-200 flex items-center justify-center p-4">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${firstProject.theme} rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-white`}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                      {firstProject.milestone === "products" && (
                        <Smartphone className="w-5 h-5 text-white" />
                      )}
                      {firstProject.milestone === "coding" && (
                        <Server className="w-5 h-5 text-white" />
                      )}
                      {firstProject.milestone === "websites" && (
                        <Monitor className="w-5 h-5 text-white" />
                      )}
                      {firstProject.milestone === "security" && (
                        <ShieldCheck className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-center">
                      {firstProject.title}
                    </h4>
                  </div>
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-center">
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium text-xs">
                      {firstProject.milestone === "products" && "Mobile"}
                      {firstProject.milestone === "coding" && "Backend"}
                      {firstProject.milestone === "websites" && "Web"}
                      {firstProject.milestone === "security" && "Security"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">
                    {firstProject.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">
                    {firstProject.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {firstProject.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-blue-600 font-medium text-sm flex items-center space-x-1"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-4 flex flex-col justify-center">
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium text-xs">
                      {firstProject.milestone === "products" && "Mobile"}
                      {firstProject.milestone === "coding" && "Backend"}
                      {firstProject.milestone === "websites" && "Web"}
                      {firstProject.milestone === "security" && "Security"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {firstProject.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">
                    {firstProject.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {firstProject.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-xs flex items-center text-slate-800">
                      <Clock className="w-3 h-3 text-blue-500 mr-1" />
                      Components
                    </h4>
                    <ul className="space-y-1">
                      {firstProject.features
                        .slice(0, 2)
                        .map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start text-slate-700 text-xs"
                          >
                            <ChevronRight className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-200 flex items-center justify-center p-3">
                  <div
                    className={`w-full h-32 bg-gradient-to-br ${firstProject.theme} rounded-lg shadow-md flex flex-col items-center justify-center p-3 text-white`}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                      {firstProject.milestone === "products" && (
                        <Smartphone className="w-5 h-5 text-white" />
                      )}
                      {firstProject.milestone === "coding" && (
                        <Server className="w-5 h-5 text-white" />
                      )}
                      {firstProject.milestone === "websites" && (
                        <Monitor className="w-5 h-5 text-white" />
                      )}
                      {firstProject.milestone === "security" && (
                        <ShieldCheck className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <h4 className="text-xs font-bold text-center">
                      {firstProject.title}
                    </h4>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Show All Button */}
        {remainingProjects.length > 0 && (
          <div className="text-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="inline-flex items-center px-4 py-2 text-blue-600 font-medium text-sm hover:text-blue-800 transition-all duration-300 bg-transparent border-none cursor-pointer"
            >
              <span>{showAllProjects ? "Show Less" : "Show All Projects"}</span>
              {showAllProjects ? (
                <ChevronUp className="w-4 h-4 ml-1" />
              ) : (
                <ChevronDown className="w-4 h-4 ml-1" />
              )}
            </motion.button>
          </div>
        )}

        {/* Remaining Projects - Only shown when showAllProjects is true */}
        {showAllProjects && remainingProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`grid gap-6 ${
              viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {remainingProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                {viewMode === "list" ? (
                  <div className="flex">
                    <div className="w-1/3 bg-slate-200 flex items-center justify-center p-4">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${project.theme} rounded-lg shadow-md flex flex-col items-center justify-center p-4 text-white`}
                      >
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                          {project.milestone === "products" && (
                            <Smartphone className="w-5 h-5 text-white" />
                          )}
                          {project.milestone === "coding" && (
                            <Server className="w-5 h-5 text-white" />
                          )}
                          {project.milestone === "websites" && (
                            <Monitor className="w-5 h-5 text-white" />
                          )}
                          {project.milestone === "security" && (
                            <ShieldCheck className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <h4 className="text-sm font-bold text-center">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                    <div className="w-2/3 p-4 flex flex-col justify-center">
                      <div className="flex items-center space-x-1 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-600 font-medium text-xs">
                          {project.milestone === "products" && "Mobile"}
                          {project.milestone === "coding" && "Backend"}
                          {project.milestone === "websites" && "Web"}
                          {project.milestone === "security" && "Security"}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-blue-600 font-medium text-sm flex items-center space-x-1"
                      >
                        <span>Details</span>
                        <ChevronRight className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-4 flex flex-col justify-center">
                      <div className="flex items-center space-x-1 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-600 font-medium text-xs">
                          {project.milestone === "products" && "Mobile"}
                          {project.milestone === "coding" && "Backend"}
                          {project.milestone === "websites" && "Web"}
                          {project.milestone === "security" && "Security"}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-xs flex items-center text-slate-800">
                          <Clock className="w-3 h-3 text-blue-500 mr-1" />
                          Components
                        </h4>
                        <ul className="space-y-1">
                          {project.features
                            .slice(0, 2)
                            .map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-start text-slate-700 text-xs"
                              >
                                <ChevronRight className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-slate-200 flex items-center justify-center p-3">
                      <div
                        className={`w-full h-32 bg-gradient-to-br ${project.theme} rounded-lg shadow-md flex flex-col items-center justify-center p-3 text-white`}
                      >
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                          {project.milestone === "products" && (
                            <Smartphone className="w-5 h-5 text-white" />
                          )}
                          {project.milestone === "coding" && (
                            <Server className="w-5 h-5 text-white" />
                          )}
                          {project.milestone === "websites" && (
                            <Monitor className="w-5 h-5 text-white" />
                          )}
                          {project.milestone === "security" && (
                            <ShieldCheck className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <h4 className="text-xs font-bold text-center">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View All Projects Button - Transparent design */}
        {!showAllProjects && filteredProjects.length > 1 && (
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 text-blue-600 font-medium text-sm hover:text-blue-800 transition-all duration-300 bg-transparent border-none cursor-pointer"
            >
              <span>View All Projects</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorksSection;
