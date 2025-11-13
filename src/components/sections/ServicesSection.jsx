import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Server,
  Monitor,
  Gamepad2,
  Brackets,
  FileText,
  Map,
  FileCode,
  PenTool,
} from "lucide-react";

const ServicesSection = ({ services }) => {
  const scrollRef = useRef(null);
  const [isAtEdges, setIsAtEdges] = useState({ left: true, right: false });

  // Icon mapping
  const iconMap = {
    Server: <Server className="w-6 h-6 text-blue-600" />,
    Monitor: <Monitor className="w-6 h-6 text-emerald-600" />,
    Gamepad2: <Gamepad2 className="w-6 h-6 text-amber-600" />,
    Brackets: <Brackets className="w-6 h-6 text-violet-600" />,
    FileText: <FileText className="w-6 h-6 text-cyan-600" />,
    Map: <Map className="w-6 h-6 text-indigo-600" />,
    FileCode: <FileCode className="w-6 h-6 text-rose-600" />,
    PenTool: <PenTool className="w-6 h-6 text-teal-600" />,
  };

  // Edge detection and horizontal scrolling
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || typeof window === "undefined") return;

    // Only enable on desktop devices
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    let isScrolling = false;
    let scrollTimeout = null;

    const updateEdgeState = () => {
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      setIsAtEdges({
        left: currentScroll <= 5, // 5px tolerance
        right: currentScroll >= maxScroll - 5,
      });
    };

    const handleWheel = (e) => {
      // Update edge state first
      updateEdgeState();

      const { left: atLeftEdge, right: atRightEdge } = isAtEdges;

      // Allow vertical scrolling at edges in the appropriate directions
      if ((atLeftEdge && e.deltaY < 0) || (atRightEdge && e.deltaY > 0)) {
        // Reset container scroll position to prevent sticky edges
        if (atLeftEdge) container.scrollLeft = 0;
        if (atRightEdge)
          container.scrollLeft = container.scrollWidth - container.clientWidth;
        return; // Don't prevent default, allow vertical scrolling
      }

      // Horizontal scrolling behavior
      e.preventDefault();

      if (isScrolling) return;

      isScrolling = true;

      // Determine scroll direction and amount
      const scrollAmount = e.deltaY * 1.5; // Increased sensitivity

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth", // Changed back to smooth for animation
      });

      // Reset scrolling flag after animation completes
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        updateEdgeState();
      }, 300); // Increased timeout to match smooth scroll duration
    };

    // Initial edge detection
    updateEdgeState();

    // Add event listeners
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", updateEdgeState);

    // Cleanup
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", updateEdgeState);
      clearTimeout(scrollTimeout);
    };
  }, [isAtEdges]);

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Professional Development Services
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Specialized solutions for your development needs
          </p>
        </div>

        {/* Edge indicators */}
        <div className="hidden md:flex justify-between items-center mb-6 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isAtEdges.left ? 0.2 : 1 }}
            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isAtEdges.right ? 0.2 : 1 }}
            className="w-16 h-1 bg-gradient-to-l from-blue-500 to-cyan-500 rounded-full"
          ></motion.div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide py-4 md:py-6 snap-x snap-mandatory rounded-xl"
          style={{
            WebkitOverflowScrolling: "touch",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
        >
          <div className="inline-flex space-x-4 md:space-x-6 p-2 min-w-full">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="snap-start flex-shrink-0 w-44 md:w-48 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="p-4 h-56 flex flex-col">
                  <div className="mb-3 p-2 bg-slate-50 rounded-lg w-fit">
                    {iconMap[service.icon] || (
                      <Server className="w-6 h-6 text-slate-400" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Smooth scrolling */
        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
