import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileText,
  Code,
  Rocket,
  Award,
  User,
  Terminal,
  Zap,
  ShieldCheck as ShieldCheckIcon,
  Award as AwardIcon,
} from "lucide-react";

const WelcomeSection = ({ scrollToSection }) => {
  const [activePanel, setActivePanel] = useState(0);

  // Panel navigation function
  const changePanel = (direction) => {
    if (direction === "next" && activePanel < 1) {
      setActivePanel(activePanel + 1);
    } else if (direction === "prev" && activePanel > 0) {
      setActivePanel(activePanel - 1);
    }
  };

  return (
    <section id="welcome" className="min-h-screen pt-20">
      <div className="relative h-screen w-full overflow-hidden">
        {/* Panel Container */}
        <motion.div
          className="flex h-full"
          animate={{ x: activePanel === 0 ? "0%" : "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Panel 1: Professional Introduction */}
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
                    Building{" "}
                    <span className="text-blue-600">Secure Applications</span> &{" "}
                    <span className="text-cyan-600">Robust Systems</span>
                  </h1>
                  <p className="text-xl text-slate-600 max-w-xl">
                    Backend-focused developer specializing in milestone-based
                    development with embedded security practices. I deliver
                    clean, maintainable code with comprehensive documentation
                    and clear progress tracking.
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
                      onClick={() => changePanel("next")}
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
                            i % 2 === 0 ? "bg-blue-500" : "bg-cyan-500"
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
                            <h3 className="font-mono text-slate-500 text-sm">
                              system_architecture.js
                            </h3>
                          </div>
                          <ShieldCheck className="w-6 h-6 text-amber-500" />
                        </div>

                        <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto font-mono text-sm text-green-400">
                          <div className="space-y-1">
                            <div>
                              &lt;
                              <span className="text-blue-300">
                                MilestoneProject
                              </span>{" "}
                              <span className="text-amber-300">type</span>=
                              <span className="text-green-300">
                                "full-stack"
                              </span>
                              &gt;
                            </div>
                            <div>
                              {" "}
                              &lt;<span className="text-blue-300">
                                Phase
                              </span>{" "}
                              <span className="text-amber-300">name</span>=
                              <span className="text-green-300">"planning"</span>{" "}
                              <span className="text-amber-300">
                                deliverables
                              </span>
                              =<span className="text-green-300">"spec"</span>
                              /&gt;
                            </div>
                            <div>
                              {" "}
                              &lt;<span className="text-blue-300">
                                Phase
                              </span>{" "}
                              <span className="text-amber-300">name</span>=
                              <span className="text-green-300">
                                "development"
                              </span>{" "}
                              <span className="text-amber-300">
                                deliverables
                              </span>
                              =
                              <span className="text-green-300">
                                "working-code"
                              </span>
                              /&gt;
                            </div>
                            <div>
                              {" "}
                              &lt;<span className="text-blue-300">
                                Phase
                              </span>{" "}
                              <span className="text-amber-300">name</span>=
                              <span className="text-green-300">"security"</span>{" "}
                              <span className="text-amber-300">
                                deliverables
                              </span>
                              =
                              <span className="text-green-300">
                                "audit-report"
                              </span>
                              /&gt;
                            </div>
                            <div>
                              {" "}
                              &lt;<span className="text-blue-300">
                                Phase
                              </span>{" "}
                              <span className="text-amber-300">name</span>=
                              <span className="text-green-300">
                                "deployment"
                              </span>{" "}
                              <span className="text-amber-300">
                                deliverables
                              </span>
                              =
                              <span className="text-green-300">
                                "live-system"
                              </span>
                              /&gt;
                            </div>
                            <div>
                              &lt;/
                              <span className="text-blue-300">
                                MilestoneProject
                              </span>
                              &gt;
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <div className="flex-1 h-2 bg-blue-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600 w-4/5"></div>
                          </div>
                          <span className="text-xs text-slate-500">85%</span>
                        </div>

                        <div className="grid grid-cols-4 gap-2 mt-2">
                          {["Plan", "Build", "Secure", "Ship"].map(
                            (phase, index) => (
                              <div
                                key={index}
                                className="text-center p-2 bg-slate-50 rounded-lg"
                              >
                                <div
                                  className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-1 ${
                                    index === 1
                                      ? "bg-blue-100 text-blue-600"
                                      : "bg-slate-200 text-slate-600"
                                  }`}
                                >
                                  {index === 0 && (
                                    <FileText className="w-4 h-4" />
                                  )}
                                  {index === 1 && <Code className="w-4 h-4" />}
                                  {index === 2 && (
                                    <ShieldCheckIcon className="w-4 h-4" />
                                  )}
                                  {index === 3 && (
                                    <Rocket className="w-4 h-4" />
                                  )}
                                </div>
                                <p className="text-xs font-medium text-slate-700">
                                  {phase}
                                </p>
                              </div>
                            )
                          )}
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
                        Security testing and compliance checks at every
                        milestone
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Panel 2: Personal Introduction */}
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
                    <p className="text-xl text-slate-600 mt-2">
                      Full-Stack Developer & Security Specialist
                    </p>
                  </div>

                  <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Terminal className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">
                          Professional Background
                        </h3>
                        <p className="text-slate-700">
                          8+ years of experience building scalable backend
                          systems and secure web applications. Specialized in
                          Node.js, Python, and modern JavaScript frameworks with
                          a strong focus on security architecture.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 p-3 rounded-lg">
                        <ShieldCheckIcon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">
                          Security Expertise
                        </h3>
                        <p className="text-slate-700">
                          Implemented security best practices for 30+
                          applications including authentication systems, data
                          encryption, vulnerability scanning, and compliance
                          with OWASP standards.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-emerald-100 p-3 rounded-lg">
                        <Zap className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">
                          Development Approach
                        </h3>
                        <p className="text-slate-700">
                          Milestone-based development with transparent pricing,
                          comprehensive documentation, and regular progress
                          updates. I believe in building maintainable code that
                          stands the test of time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {[
                      "Node.js",
                      "Python",
                      "React",
                      "Security",
                      "AWS",
                      "Docker",
                      "GraphQL",
                      "NoSQL",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium text-sm"
                      >
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
                            <h3 className="font-mono text-slate-500 text-sm">
                              professional_profile.js
                            </h3>
                          </div>
                          <AwardIcon className="w-6 h-6 text-amber-500" />
                        </div>

                        <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto font-mono text-sm text-green-400">
                          <div className="space-y-1">
                            <div>
                              &lt;
                              <span className="text-blue-300">
                                DeveloperProfile
                              </span>
                              &gt;
                            </div>
                            <div>
                              {" "}
                              &lt;<span className="text-blue-300">Name</span>
                              &gt;Alex Morgan&lt;/
                              <span className="text-blue-300">Name</span>&gt;
                            </div>
                            <div>
                              {" "}
                              &lt;
                              <span className="text-blue-300">
                                Specialization
                              </span>
                              &gt;
                            </div>
                            <div>
                              {" "}
                              &lt;<span className="text-blue-300">
                                Backend
                              </span>{" "}
                              <span className="text-amber-300">level</span>=
                              <span className="text-green-300">"expert"</span>{" "}
                              /&gt;
                            </div>
                            <div>
                              {" "}
                              &lt;
                              <span className="text-blue-300">
                                Security
                              </span>{" "}
                              <span className="text-amber-300">level</span>=
                              <span className="text-green-300">"advanced"</span>{" "}
                              /&gt;
                            </div>
                            <div>
                              {" "}
                              &lt;/
                              <span className="text-blue-300">
                                Specialization
                              </span>
                              &gt;
                            </div>
                            <div>
                              {" "}
                              &lt;
                              <span className="text-blue-300">Approach</span>
                              &gt;milestone-based&lt;/
                              <span className="text-blue-300">Approach</span>
                              &gt;
                            </div>
                            <div>
                              &lt;/
                              <span className="text-blue-300">
                                DeveloperProfile
                              </span>
                              &gt;
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">
                                Backend Development
                              </span>
                              <span className="text-sm text-slate-400">
                                95%
                              </span>
                            </div>
                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500 w-11/12"></div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">
                                Security Implementation
                              </span>
                              <span className="text-sm text-slate-400">
                                90%
                              </span>
                            </div>
                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                              <div className="h-full bg-amber-500 w-5/6"></div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">
                                System Architecture
                              </span>
                              <span className="text-sm text-slate-400">
                                85%
                              </span>
                            </div>
                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 w-17/20"></div>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-800">
                          <p className="text-sm text-blue-300 italic">
                            "I believe in writing code that's not just
                            functional, but maintainable, secure, and
                            well-documented."
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
                    <p className="font-medium text-blue-700 mb-2">
                      Availability
                    </p>
                    <p className="text-sm text-slate-700">
                      Currently accepting new projects with 2-3 week lead time
                      for kickoff.
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
            onClick={() => changePanel("prev")}
            disabled={activePanel === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              activePanel === 0
                ? "bg-slate-300 cursor-not-allowed"
                : "bg-white/80 backdrop-blur-sm shadow-lg hover:bg-blue-500 hover:text-white"
            } transition-all duration-300`}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <div className="flex space-x-2">
            {[0, 1].map((panel) => (
              <motion.div
                key={panel}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activePanel === panel ? "bg-blue-600 w-6" : "bg-slate-300"
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => changePanel("next")}
            disabled={activePanel === 1}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              activePanel === 1
                ? "bg-slate-300 cursor-not-allowed"
                : "bg-white/80 backdrop-blur-sm shadow-lg hover:bg-blue-500 hover:text-white"
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
            onClick={() => changePanel("next")}
          >
            <ChevronDown className="w-8 h-8 text-slate-500 animate-bounce" />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WelcomeSection;
