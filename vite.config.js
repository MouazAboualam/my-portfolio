import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "ui-vendor": ["framer-motion", "lucide-react"],
          navigation: ["./src/components/layout/Navigation"],
          welcome: ["./src/components/sections/WelcomeSection"],
          sections: [
            "./src/components/sections/AboutSection",
            "./src/components/sections/ServicesSection",
            "./src/components/sections/ContactSection",
            "./src/components/sections/ThemesSection",
            "./src/components/sections/SiteShowcaseSection",
            "./src/components/sections/WorksSection",
            "./src/components/layout/Footer",
          ],
        },
      },
    },
    cssCodeSplit: true,
    minify: "terser",
    target: "es2018",
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "lucide-react"],
  },
});
