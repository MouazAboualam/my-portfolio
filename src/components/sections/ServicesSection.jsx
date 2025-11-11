import { motion } from "framer-motion";
import { Rocket, Server, ShieldCheck } from "lucide-react";

const ServicesSection = ({ services }) => {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white"
    >
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
  );
};

export default ServicesSection;
