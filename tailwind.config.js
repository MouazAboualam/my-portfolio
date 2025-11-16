// tailwind.config.js
// This file is now primarily for plugins and any settings not handled in CSS.
// It needs to be loaded explicitly in your CSS file with @config "path/to/this/file.js";

// Plugins are still configured here.
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  // Remove 'content', 'purge', 'safelist', 'corePlugins'
  // content: [ ... ], // Removed
  // purge: { ... },   // Removed
  // safelist: [ ... ], // Removed
  // corePlugins: { ... }, // Removed

  // The darkMode option might change or be handled differently in v4.
  // Check the upgrade tool output or final v4 docs. It might be handled via CSS media queries or class toggling.
  // darkMode: "media", // Potentially removed or configured differently

  plugins: [
    // Ensure @tailwindcss/typography is compatible with v4
    typography,
    // Note: Your custom plugin logic might need significant changes
    // as v4 uses different APIs like @utility in CSS.
    // The example below is a placeholder and likely needs adjustment.
    // function({ addUtilities }) {
    //   addUtilities(
    //     {
    //       '.bg-gradient-soft': {
    //         'background-image': 'linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))',
    //         'background-size': '200% 200%',
    //       },
    //       '.bg-animate': {
    //         animation: 'gradientShift 8s ease infinite',
    //       },
    //       '.bg-animate-slow': {
    //         animation: 'gradientShift 15s ease infinite',
    //       },
    //     },
    //     { variants: ['responsive'] } // Variants API might change
    //   );
    // },
    // It's recommended to move custom utilities defined by plugins to the @layer rules block in your CSS file.
  ],
};
