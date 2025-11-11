const projects = [
  {
    id: 1,
    title: "Mafia Social Deduction Game",
    description:
      "Mobile-first multiplayer game with real-time interactions and secure authentication system",
    tech: ["React Native", "Firebase", "Node.js", "Socket.IO"],
    image: "https://placehold.co/300x600/1e3a8a/ffffff?text=Mafia+Game+Preview",
    url: "https://mafia-game-c8244.web.app",
    milestone: "products",
    features: [
      "Real-time player interactions",
      "Role-based game mechanics",
      "Secure authentication system",
      "Mobile-optimized UI/UX",
    ],
    securityFeatures: [
      "Input validation",
      "Rate limiting",
      "Secure WebSocket connections",
      "Data encryption at rest",
    ],
    theme: "from-indigo-600 to-purple-700",
  },
  {
    id: 2,
    title: "Data Processing Engine",
    description:
      "High-performance backend system for real-time data processing with distributed architecture",
    tech: ["Node.js", "Redis", "Docker", "Kubernetes"],
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=Data+Engine",
    milestone: "coding",
    features: [
      "Real-time data streaming",
      "Distributed processing pipeline",
      "Auto-scaling architecture",
      "Comprehensive monitoring",
    ],
    securityFeatures: [
      "Data validation middleware",
      "Rate limiting per client",
      "Encrypted data transmission",
      "Audit logging system",
    ],
    theme: "from-blue-600 to-cyan-600",
  },
  {
    id: 3,
    title: "Developer Dashboard",
    description:
      "Comprehensive monitoring and management dashboard for software teams with real-time analytics",
    tech: ["React", "TypeScript", "MongoDB", "TailwindCSS"],
    image: "https://placehold.co/600x400/10b981/ffffff?text=Dev+Dashboard",
    milestone: "websites",
    features: [
      "Real-time performance metrics",
      "Team collaboration tools",
      "Deployment pipeline visualization",
      "Customizable widgets",
    ],
    securityFeatures: [
      "Role-based access control",
      "Session management",
      "Data encryption at rest",
      "Security audit trails",
    ],
    theme: "from-emerald-600 to-teal-700",
  },
  {
    id: 4,
    title: "Security Compliance Scanner",
    description:
      "Automated vulnerability detection tool for web applications with detailed reports",
    tech: ["Python", "React", "OWASP ZAP", "Docker"],
    image: "https://placehold.co/600x400/ef4444/ffffff?text=Security+Scanner",
    milestone: "security",
    features: [
      "Automated vulnerability scanning",
      "Custom rule configuration",
      "Detailed PDF reports",
      "Integration with CI/CD pipelines",
    ],
    securityFeatures: [
      "OWASP Top 10 coverage",
      "Zero false positives guarantee",
      "Secure scan execution",
      "Compliance reporting",
    ],
    theme: "from-amber-500 to-orange-600",
  },
  {
    id: 5,
    title: "API Gateway Service",
    description:
      "Unified API gateway with authentication, rate limiting, and request transformation capabilities",
    tech: ["Express.js", "JWT", "Redis", "GraphQL"],
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=API+Gateway",
    milestone: "websites",
    features: [
      "Request routing and transformation",
      "Authentication and authorization",
      "Rate limiting and quotas",
      "Real-time analytics dashboard",
    ],
    securityFeatures: [
      "JWT token validation",
      "DDoS protection",
      "Input sanitization",
      "Secure secret management",
    ],
    theme: "from-violet-600 to-fuchsia-700",
  },
];

export default projects;
