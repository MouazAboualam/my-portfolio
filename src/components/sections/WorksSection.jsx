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
} from "lucide-react";
import MobileMockup from "../ui/MobileMockup";

const WorksSection = ({ projects, scrollToSection }) => {
  const [activeMilestone, setActiveMilestone] = useState("all");

  // Filter projects based on active milestone
  const filteredProjects =
    activeMilestone === "all"
      ? projects
      : projects.filter((project) => project.milestone === activeMilestone);

  // Milestones data
  const milestones = [
    {
      id: "all",
      title: "All Projects",
      icon: <ChevronDown className="w-5 h-5" />,
    },
    {
      id: "products",
      title: "Products & Apps",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      id: "coding",
      title: "Core Systems",
      icon: <Server className="w-5 h-5" />,
    },
    {
      id: "websites",
      title: "Web Applications",
      icon: <Monitor className="w-5 h-5" />,
    },
    {
      id: "security",
      title: "Security Tools",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  return (
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
            Backend-focused applications built with security and scalability in
            mind
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
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
                  <h3 className="text-2xl font-bold mb-3">
                    Mafia Social Deduction Game
                  </h3>
                  <p className="text-slate-600 mb-6">
                    A real-time multiplayer social deduction game built for
                    mobile devices with secure authentication and real-time
                    player interactions. Developed using React Native and
                    Firebase with comprehensive security measures.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-center text-blue-700 mb-2">
                        <Play className="w-5 h-5 mr-2" />
                        <span className="font-medium">Live Demo</span>
                      </div>
                      <p className="text-sm text-slate-700 break-all">
                        mafia-game-c8244.web.app
                      </p>
                      <button
                        onClick={() =>
                          window.open(
                            projects.find((p) => p.id === 1)?.url,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
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
                      <p className="text-xs text-amber-800 mt-1">
                        OWASP compliant architecture
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-bold text-lg flex items-center">
                      <Tag className="w-5 h-5 text-blue-600 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {projects
                        .find((p) => p.id === 1)
                        ?.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start text-slate-700"
                          >
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
                      {projects
                        .find((p) => p.id === 1)
                        ?.securityFeatures.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start text-slate-700"
                          >
                            <ShieldCheck className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                {/* Right side - Phone mockup with live iframe */}
                <div className="bg-slate-50 p-8 flex items-center justify-center lg:order-2">
                  <MobileMockup project={projects.find((p) => p.id === 1)} />
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
        {/* Remaining Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects
            .filter((project) => project.id !== 1) // Exclude Mafia game as it's featured separately
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
                        {project.milestone === "products" &&
                          "Mobile Application"}
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
                        {project.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start text-slate-700"
                            >
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
                          {project.milestone === "products" && (
                            <Smartphone className="w-8 h-8 text-white" />
                          )}
                          {project.milestone === "coding" && (
                            <Server className="w-8 h-8 text-white" />
                          )}
                          {project.milestone === "websites" && (
                            <Monitor className="w-8 h-8 text-white" />
                          )}
                          {project.milestone === "security" && (
                            <ShieldCheck className="w-8 h-8 text-white" />
                          )}
                        </div>
                        <h4 className="text-xl font-bold mb-2">
                          {project.title}
                        </h4>
                        <p className="text-blue-100 text-center opacity-90">
                          {project.description}
                        </p>
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
  );
};

export default WorksSection;
