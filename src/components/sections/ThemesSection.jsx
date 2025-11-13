import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Layout,
  CreditCard,
  Code,
} from "lucide-react";
import ThemeMockup from "../ui/ThemeMockup";

const ThemesSection = ({ themes }) => {
  const [activeTheme, setActiveTheme] = useState("all");
  const [expandedFeatures, setExpandedFeatures] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const scrollContainerRef = useRef(null);

  // Filter themes based on active filter
  const filteredThemes =
    activeTheme === "all"
      ? themes
      : themes.filter((theme) => {
          if (activeTheme === "pink")
            return theme.theme.includes("pink") || theme.theme.includes("rose");
          if (activeTheme === "orange")
            return (
              theme.theme.includes("orange") || theme.theme.includes("amber")
            );
          if (activeTheme === "green")
            return (
              theme.theme.includes("emerald") || theme.theme.includes("teal")
            );
          if (activeTheme === "purple")
            return (
              theme.theme.includes("violet") || theme.theme.includes("purple")
            );
          if (activeTheme === "blue")
            return theme.theme.includes("blue") || theme.theme.includes("cyan");
          if (activeTheme === "black")
            return (
              theme.theme.includes("slate-800") ||
              theme.theme.includes("slate-900")
            );
          if (activeTheme === "gray")
            return (
              theme.theme.includes("gray") || theme.theme.includes("slate-600")
            );
          return false;
        });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filterOptions = [
    { id: "all", name: "All Themes", colors: "from-pink-500 to-purple-600" },
    { id: "pink", name: "Pink Themes", colors: "from-pink-500 to-rose-600" },
    {
      id: "orange",
      name: "Orange Themes",
      colors: "from-orange-500 to-amber-600",
    },
    {
      id: "green",
      name: "Green Themes",
      colors: "from-emerald-500 to-teal-600",
    },
    {
      id: "purple",
      name: "Purple Themes",
      colors: "from-violet-500 to-purple-600",
    },
    { id: "blue", name: "Blue Themes", colors: "from-blue-500 to-cyan-600" },
    { id: "black", name: "Dark Themes", colors: "from-slate-800 to-slate-900" },
    { id: "gray", name: "Gray Themes", colors: "from-gray-500 to-slate-600" },
  ];

  const toggleFeature = (index) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Handle mouse events for horizontal scrolling
  const handleMouseDown = (e) => {
    if (window.innerWidth < 768) return; // Only enable on desktop

    setIsDragging(true);
    setStartX(
      e.pageX - scrollContainerRef.current.getBoundingClientRect().left
    );
    setStartScrollLeft(scrollContainerRef.current.scrollLeft);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const x = e.pageX - scrollContainerRef.current.getBoundingClientRect().left;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    scrollContainerRef.current.scrollLeft = startScrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add event listeners for mouse events
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, startX, startScrollLeft]);

  return (
    <section
      id="themes"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            <ShoppingBag className="w-4 h-4 inline mr-1" />
            Premium Website Themes
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready-to-Use Website Themes
          </motion.h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Professionally designed, responsive website templates for your next
            project. All themes include complete source code and documentation.
          </motion.p>
        </div>

        {/* Mobile Filter Dropdown */}
        <div className="md:hidden mb-10">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-5 py-3 bg-white rounded-xl font-medium text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all duration-300"
            >
              <span>
                {
                  filterOptions.find((option) => option.id === activeTheme)
                    ?.name
                }
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-slate-200 z-20 overflow-hidden">
                {filterOptions.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => {
                      setActiveTheme(filter.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3 flex items-center transition-colors duration-200 ${
                      activeTheme === filter.id
                        ? `bg-gradient-to-r ${filter.colors} text-white`
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full mr-3 ${
                        activeTheme === filter.id ? "bg-white" : filter.colors
                      }`}
                    ></div>
                    <span className="text-sm">{filter.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Filter Tabs - Hidden on mobile */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-10">
          {filterOptions.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ y: -2 }}
              onClick={() => setActiveTheme(filter.id)}
              className={`flex flex-col items-center px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTheme === filter.id
                  ? `bg-gradient-to-r ${filter.colors} text-white shadow-lg`
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full mb-1 ${filter.colors}`}
              ></div>
              <span className="text-sm">{filter.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Horizontal scrolling theme showcase */}
        <div className="relative mb-12">
          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrollable container with drag functionality */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide py-6 gap-6 cursor-grab"
            onMouseDown={handleMouseDown}
            style={{
              cursor: isDragging
                ? "grabbing"
                : window.innerWidth >= 768
                ? "grab"
                : "default",
              userSelect: "none", // Prevent text selection during drag
            }}
          >
            {filteredThemes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex-shrink-0 w-80"
              >
                <ThemeMockup theme={theme} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Expandable Feature Cards */}
        <div className="md:hidden mb-16">
          <h3 className="text-xl font-bold mb-4">Theme Features</h3>
          <div className="space-y-4">
            {[
              {
                icon: <Layout className="w-8 h-8 text-pink-500" />,
                title: "Responsive Design",
                description:
                  "All themes are fully responsive and look great on all device sizes.",
              },
              {
                icon: <CreditCard className="w-8 h-8 text-amber-500" />,
                title: "One-Time Payment",
                description:
                  "Pay once for lifetime access to the theme and all future updates.",
              },
              {
                icon: <Code className="w-8 h-8 text-emerald-500" />,
                title: "Complete Source Code",
                description:
                  "Get full access to clean, well-documented code with no restrictions.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-md border border-slate-100"
              >
                <div
                  className="flex items-start justify-between cursor-pointer"
                  onClick={() => toggleFeature(index)}
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold">{feature.title}</h3>
                    </div>
                  </div>
                  <div className="ml-3 mt-1">
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                        expandedFeatures[index] ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {expandedFeatures[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 pt-3 border-t border-slate-100"
                  >
                    <p className="text-slate-600 text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Layout className="w-8 h-8 text-pink-500" />,
              title: "Responsive Design",
              description:
                "All themes are fully responsive and look great on all device sizes.",
            },
            {
              icon: <CreditCard className="w-8 h-8 text-amber-500" />,
              title: "One-Time Payment",
              description:
                "Pay once for lifetime access to the theme and all future updates.",
            },
            {
              icon: <Code className="w-8 h-8 text-emerald-500" />,
              title: "Complete Source Code",
              description:
                "Get full access to clean, well-documented code with no restrictions.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-4xl mx-auto bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-pink-100">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-pink-200"
          >
            <ShoppingBag className="w-4 h-4 inline mr-1 text-pink-500" />
            All themes priced at $20
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold mb-4"
          >
            Get Started with Premium Themes Today
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 mb-6"
          >
            Download any theme instantly after purchase. No subscription fees,
            no hidden costs.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            <span>Browse All Themes</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
