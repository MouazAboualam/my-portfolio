/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/sections/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}",
  ],
  darkMode: "media", // or 'class' if you prefer manual dark mode toggle
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        typing:
          "typing 2s steps(40, end), blink 0.5s step-end infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "#1e293b",
            fontSize: "1rem",
            lineHeight: "1.75",
            a: {
              color: "#2563eb",
              textDecoration: "underline",
              fontWeight: "500",
              "&:hover": {
                color: "#1d4ed8",
              },
            },
            "h1, h2, h3, h4, h5, h6": {
              fontWeight: "700",
              color: "#0f172a",
              scrollMarginTop: "2rem",
            },
            h1: { fontSize: "2.25rem", lineHeight: "1.2" },
            h2: { fontSize: "1.875rem", lineHeight: "1.3" },
            h3: { fontSize: "1.5rem", lineHeight: "1.4" },
            "ul, ol": {
              marginTop: "1rem",
              marginBottom: "1rem",
              paddingLeft: "1.5rem",
            },
            li: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
            code: {
              backgroundColor: "#f1f5f9",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#0f172a",
            },
            blockquote: {
              borderLeft: "3px solid #3b82f6",
              paddingLeft: "1.25rem",
              fontStyle: "italic",
              color: "#475569",
              margin: "1.5rem 0",
            },
          },
        },
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      aspectRatio: {
        profile: "1 / 1",
        showcase: "3 / 4",
        dashboard: "16 / 9",
      },
      screens: {
        xs: "475px",
        // Keep default sm, md, lg, xl
      },
    },
  },
  safelist: [
    // Safelist all gradient classes used dynamically in your data files
    "from-indigo-600",
    "to-purple-700",
    "from-blue-600",
    "to-cyan-600",
    "from-emerald-600",
    "to-teal-700",
    "from-amber-500",
    "to-orange-600",
    "from-violet-600",
    "to-fuchsia-700",
    "from-slate-800",
    "to-slate-900",
    "from-gray-500",
    "to-slate-600",
    "from-pink-500",
    "to-rose-600",
    "from-orange-500",
    "to-amber-600",

    // Safelist text colors used in profile section
    "text-blue-300",
    "text-amber-300",
    "text-green-300",
    "text-green-400",
    "text-blue-500",
    "text-blue-600",
    "text-blue-700",
    "text-amber-500",
    "text-amber-600",
    "text-emerald-500",
    "text-emerald-600",
    "text-violet-500",
    "text-violet-600",
    "text-slate-500",
    "text-slate-600",
    "text-slate-700",
    "text-slate-800",
    "text-slate-900",

    // Safelist background colors for badges and highlights
    "bg-blue-50",
    "bg-blue-100",
    "bg-blue-500",
    "bg-amber-100",
    "bg-amber-500",
    "bg-emerald-100",
    "bg-emerald-500",
    "bg-violet-100",
    "bg-violet-500",
    "bg-slate-100",
    "bg-slate-200",
    "bg-slate-500",
    "bg-slate-700",
    "bg-slate-900",
    "bg-gray-50",
    "bg-gray-100",
    "bg-gray-200",

    // Safelist border colors
    "border-blue-400",
    "border-blue-500",
    "border-amber-400",
    "border-amber-500",
    "border-emerald-400",
    "border-emerald-500",
    "border-violet-400",
    "border-violet-500",

    // Safelist for animation variants
    "animate-pulse",
    "animate-fade-in",
    "animate-gradient-shift",

    // Safelist for mobile menu states
    "md:flex",
    "md:hidden",
    "lg:block",
    "lg:hidden",
  ],
  plugins: [
    // Add typography plugin for better text rendering
    require("@tailwindcss/typography"),

    // Add aspect-ratio plugin if needed
    // require('@tailwindcss/aspect-ratio'),

    // Custom plugin for better gradient backgrounds
    function ({ addUtilities }) {
      addUtilities(
        {
          ".bg-gradient-soft": {
            "background-image":
              "linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))",
            "background-size": "200% 200%",
          },
          ".bg-animate": {
            animation: "gradientShift 8s ease infinite",
          },
          ".bg-animate-slow": {
            animation: "gradientShift 15s ease infinite",
          },
        },
        { variants: ["responsive"] }
      );
    },
  ],
  corePlugins: {
    // Enable preflight for better CSS reset
    preflight: true,
  },
  // Performance optimization - purge unused styles in production
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    options: {
      safelist: [
        // Keep essential classes that might be missed
        /^bg-/,
        /^text-/,
        /^border-/,
        /^from-/,
        /^to-/,
        /^animate-/,
        "hidden",
        "block",
        "flex",
        "inline-flex",
        "grid",
        "absolute",
        "relative",
        "fixed",
        "sticky",
      ],
      blocklist: [
        // Block unused classes if any
      ],
    },
  },
};
