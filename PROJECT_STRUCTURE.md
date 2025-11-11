# CodeCraft Portfolio - Project Structure

This document outlines the folder and file structure of the CodeCraft portfolio project, along with links to key files.

## Project Root

- `package.json` - Project metadata and dependencies.
- `src/` - Main source code directory.
  - `index.js` - The entry point of the React application.
  - `App.jsx` - The main application component (original monolithic file for reference).
- `public/` - Static assets like `index.html`.

## Source Code (`src/`)

- `src/`
  - `components/` - Reusable UI components and page sections.
    - `layout/` - Components related to the overall page layout.
      - [Footer.jsx](./src/components/layout/Footer.jsx) - The website footer.
      - [Navigation.jsx](./src/components/layout/Navigation.jsx) - The top navigation bar.
    - `sections/` - Components representing major sections of the page.
      - [AboutSection.jsx](./src/components/sections/AboutSection.jsx) - Technical expertise section.
      - [ContactSection.jsx](./src/components/sections/ContactSection.jsx) - Contact form and info.
      - [WelcomeSection.jsx](./src/components/sections/WelcomeSection.jsx) - The main landing area with panels.
      - [ServicesSection.jsx](./src/components/sections/ServicesSection.jsx) - Services offered.
      - [SiteShowcaseSection.jsx](./src/components/sections/SiteShowcaseSection.jsx) - Live application previews.
      - [ThemesSection.jsx](./src/components/sections/ThemesSection.jsx) - Website themes marketplace.
      - [WorksSection.jsx](./src/components/sections/WorksSection.jsx) - Project showcase.
    - `ui/` - Reusable UI elements.
      - [MobileMockup.jsx](./src/components/ui/MobileMockup.jsx) - Component for displaying mobile app previews.
      - [ThemeMockup.jsx](./src/components/ui/ThemeMockup.jsx) - Component for displaying theme previews.
  - `data/` - Files containing static data used across components.
    - [milestones.js](./src/data/milestones.js) - Data for project milestone filters.
    - [projects.js](./src/data/projects.js) - Data for project listings.
    - [services.js](./src/data/services.js) - Data for service listings.
    - [siteShowcases.js](./src/data/siteShowcases.js) - Data for live site previews.
    - [themes.js](./src/data/themes.js) - Data for website themes.
