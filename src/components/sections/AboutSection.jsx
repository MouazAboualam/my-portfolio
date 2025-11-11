import { motion } from "framer-motion";
import { Award, ShieldCheck, FileText, Code, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
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
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                System Architecture
              </h3>
              <p className="text-slate-700">
                8+ years designing scalable backend systems with expertise in
                database architecture, API design, and distributed systems. I
                specialize in creating maintainable codebases with clear
                documentation and comprehensive test coverage.
              </p>
            </div>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-bold text-cyan-900 mb-2">
                Security Integration
              </h3>
              <p className="text-slate-700">
                Security-focused development with expertise in authentication
                systems, data protection, and vulnerability prevention. I
                implement security best practices at every stage of development,
                not as an afterthought.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                "Node.js",
                "Python",
                "Database Design",
                "Security Audits",
                "Cloud Architecture",
                "CI/CD",
              ].map((skill, index) => (
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
                    <h3 className="text-xl font-bold">
                      Milestone Pricing System
                    </h3>
                    <ShieldCheck className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="space-y-6">
                    {[
                      "Planning & Architecture",
                      "Core Development",
                      "Security Integration",
                      "Testing & Deployment",
                      "Documentation & Handover",
                    ].map((phase, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex flex-col items-center mr-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              index === 1
                                ? "bg-blue-600 text-white"
                                : "bg-slate-200 text-slate-600"
                            }`}
                          >
                            {index + 1}
                          </div>
                          {index < 4 && (
                            <div className="w-1 h-12 bg-slate-200"></div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{phase}</h4>
                          <p className="text-slate-600">
                            {index === 0 &&
                              "Fixed price: $500-2000 | Deliverables: Technical spec, architecture diagram, timeline"}
                            {index === 1 &&
                              "Fixed price: $2000-8000 | Deliverables: Working core functionality with tests"}
                            {index === 2 &&
                              "Fixed price: $1000-3000 | Deliverables: Security audit report, vulnerability fixes"}
                            {index === 3 &&
                              "Fixed price: $500-1500 | Deliverables: Test reports, deployment scripts, live system"}
                            {index === 4 &&
                              "Fixed price: $300-800 | Deliverables: User manuals, API docs, source code"}
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
              <p className="font-medium text-blue-700 mb-2">
                Payment Structure
              </p>
              <p className="text-sm text-slate-700">
                30% upfront, 40% on core delivery, 30% on final handover. No
                payment until milestone approval.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
