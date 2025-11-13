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
  ChevronDown as ChevronDownIcon,
} from "lucide-react";

const WelcomeSection = ({ scrollToSection }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [typedCode, setTypedCode] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const codeToType = `<DeveloperProfile>
  <Name>Mouaz Abou Alam</Name>
  <Specialization>
    <Backend level="expert" />
    <Security level="advanced" />
  </Specialization>
  <Approach>milestone-based</Approach>
</DeveloperProfile>`;

  useEffect(() => {
    let timeoutId;
    let charIndex = 0;

    const typeCode = () => {
      if (charIndex <= codeToType.length) {
        setTypedCode(codeToType.substring(0, charIndex));

        // Toggle cursor visibility periodically during typing
        if (charIndex % 30 === 0) {
          setShowCursor((prev) => !prev);
        }

        if (charIndex < codeToType.length) {
          timeoutId = setTimeout(typeCode, 10); // Continue typing
        } else {
          setShowCursor(false); // Hide cursor when typing is complete
        }

        charIndex++;
      }
    };

    // Start typing after a small delay to allow other animations to start
    timeoutId = setTimeout(() => typeCode(), 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const highlightSyntax = (code) => {
    // Split code into tokens and apply syntax highlighting
    const tokens = [];
    let current = "";
    let inTag = false;
    let inAttributeName = false;
    let inAttributeValue = false;

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      const nextChar = code[i + 1] || "";

      if (char === "<" && !inAttributeValue) {
        if (current) {
          tokens.push({ content: current, type: "text" });
          current = "";
        }
        inTag = true;
        current += char;
      } else if (char === ">" && inTag) {
        current += char;
        tokens.push({ content: current, type: "tag" });
        current = "";
        inTag = false;
        inAttributeName = false;
        inAttributeValue = false;
      } else if (char === "=" && inTag && !inAttributeValue) {
        if (current) {
          tokens.push({ content: current, type: "attr-name" });
          current = "";
        }
        current += char;
        tokens.push({ content: current, type: "operator" });
        current = "";
        inAttributeName = false;
      } else if ((char === '"' || char === "'") && inTag) {
        if (!inAttributeValue) {
          if (current) {
            tokens.push({ content: current, type: "attr-name" });
            current = "";
          }
          inAttributeValue = true;
          current += char;
        } else if (
          (char === '"' && current[0] === '"') ||
          (char === "'" && current[0] === "'")
        ) {
          current += char;
          tokens.push({ content: current, type: "attr-value" });
          current = "";
          inAttributeValue = false;
        } else {
          current += char;
        }
      } else if (
        /\s/.test(char) &&
        inTag &&
        !inAttributeValue &&
        current &&
        !inAttributeName
      ) {
        if (current) {
          tokens.push({ content: current, type: "tag-name" });
          current = "";
        }
        current += char;
        inAttributeName = true;
      } else {
        current += char;
      }
    }

    if (current) {
      if (inTag) {
        if (inAttributeValue) {
          tokens.push({ content: current, type: "attr-value" });
        } else if (inAttributeName) {
          tokens.push({ content: current, type: "attr-name" });
        } else {
          tokens.push({ content: current, type: "tag-name" });
        }
      } else {
        tokens.push({ content: current, type: "text" });
      }
    }

    return tokens;
  };

  const renderHighlightedCode = () => {
    const tokens = highlightSyntax(typedCode);
    return tokens.map((token, index) => {
      let className = "";
      switch (token.type) {
        case "tag":
          className = "text-blue-300";
          break;
        case "tag-name":
          className = "text-blue-300";
          break;
        case "attr-name":
          className = "text-amber-300";
          break;
        case "attr-value":
          className = "text-green-300";
          break;
        case "operator":
          className = "text-blue-300";
          break;
        case "text":
          className = "text-green-400";
          break;
        default:
          className = "text-green-400";
      }

      return (
        <span key={index} className={className}>
          {token.content}
        </span>
      );
    });
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section id="welcome" className="min-h-screen pt-20">
      <div className="relative h-screen w-full overflow-hidden lg:hidden">
        {/* Mobile View */}
        <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-50 px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="space-y-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative inline-block mx-auto"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-1 rounded-full">
                    <div className="bg-white rounded-full p-1">
                      <div className="w-32 h-32 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg sm:w-48 sm:h-48">
                        <img
                          src="/images/profile.png"
                          alt="Mouaz Abou Alam"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to User icon if image fails to load
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        <User
                          className="w-16 h-16 text-blue-500 sm:w-24 sm:h-24"
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600">
                  Mouaz Abou Alam
                </h2>
                <p className="text-lg sm:text-xl text-slate-600 mt-2">
                  Full-Stack Developer & Security Specialist
                </p>
              </div>

              {/* Collapsible Sections */}
              <div className="space-y-4">
                {/* Professional Background */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                  <button
                    onClick={() => toggleSection("background")}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Terminal className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-lg">
                        Professional Background
                      </h3>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedSection === "background" ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDownIcon className="w-5 h-5 text-slate-500" />
                    </motion.div>
                  </button>
                  {expandedSection === "background" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pl-12"
                    >
                      <p className="text-slate-700">
                        8+ years of experience building scalable backend systems
                        and secure web applications.
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Security Expertise */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                  <button
                    onClick={() => toggleSection("security")}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-amber-100 p-2 rounded-lg">
                        <ShieldCheckIcon className="w-5 h-5 text-amber-600" />
                      </div>
                      <h3 className="font-bold text-lg">Security Expertise</h3>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedSection === "security" ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDownIcon className="w-5 h-5 text-slate-500" />
                    </motion.div>
                  </button>
                  {expandedSection === "security" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pl-12"
                    >
                      <p className="text-slate-700">
                        Implemented security best practices for 30+ applications
                        including authentication systems, data encryption, and
                        OWASP compliance.
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Development Approach */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                  <button
                    onClick={() => toggleSection("approach")}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-emerald-100 p-2 rounded-lg">
                        <Zap className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h3 className="font-bold text-lg">
                        Development Approach
                      </h3>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedSection === "approach" ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDownIcon className="w-5 h-5 text-slate-500" />
                    </motion.div>
                  </button>
                  {expandedSection === "approach" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pl-12"
                    >
                      <p className="text-slate-700">
                        Milestone-based development with transparent pricing,
                        comprehensive documentation, and regular progress
                        updates.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center">
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
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full font-medium text-xs sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Call to Action */}
              <div className="flex flex-col gap-4 mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Project
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block relative h-screen w-full overflow-hidden">
        <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-50 px-4 sm:px-6 lg:px-8 flex items-center">
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
                          <img
                            src="/images/profile.png"
                            alt="Mouaz Abou Alam"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to User icon if image fails to load
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          <User
                            className="w-24 h-24 text-blue-500"
                            style={{ display: "none" }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600">
                    Mouaz Abou Alam
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
                        8+ years of experience building scalable backend systems
                        and secure web applications.
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
                        Implemented security best practices for 30+ applications
                        including authentication systems, data encryption, and
                        OWASP compliance.
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
                        updates.
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

                      <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto font-mono text-sm">
                        <pre className="whitespace-pre">
                          {renderHighlightedCode()}
                          {showCursor && (
                            <span className="text-green-400 animate-pulse">
                              |
                            </span>
                          )}
                        </pre>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">
                              Backend Development
                            </span>
                            <span className="text-sm text-slate-400">95%</span>
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
                            <span className="text-sm text-slate-400">90%</span>
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
                            <span className="text-sm text-slate-400">85%</span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-17/20"></div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-800">
                        <p className="text-sm text-blue-300 italic">
                          "I believe in writing code that's not just functional,
                          but maintainable, secure, and well-documented."
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
                    Currently accepting new projects with 2-3 week lead time for
                    kickoff.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
