export const personalInfo = {
  name: "Ahmadh Najahi",
  fullName: "Aboothaiyoob Ahmadh Najahi",
  role: "Software Engineer | IT Enthusiast",
  tagline: "I build scalable UI systems and developer tools with a strong focus on usability and clean architecture.",
  email: "ahmednajahi2003@gmail.com",
  phone: "+94750538620",
  address: "60/B Al-Manar Road, Maruthamunai-02, Kalmunai, Ampara, Sri Lanka",
  linkedin: "https://linkedin.com/in/profile",
  github: "https://github.com",
  cvLink: "#",
};

export const aboutMe = `I'm a software engineer who thrives at the intersection of frontend systems and data-driven logic. I specialize in building React & TypeScript applications - from interactive dashboards to developer tools that streamline workflows. I enjoy tackling complex UI state management, designing component architectures that scale, and integrating APIs that power real-time experiences. I learn fast, adapt to new tech stacks quickly, and fit naturally into agile teams building user-facing products. Beyond the frontend, I bring data awareness through Power BI, Python, and SQL - making me effective at bridging the gap between engineering and analytics.`;

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  role: string[];
  techStack: { name: string; reason: string }[];
  challenges: string[];
  outcome: string;
  tags: string[];
  featured: boolean;
  liveLink?: string;
  githubLink?: string;
  date: string;
}

export const featuredProjects: Project[] = [
  {
    id: "component-flow-explorer",
    title: "Component Flow Explorer",
    tagline: "Interactive visualization tool for component flows in modern web apps",
    description: "A developer tool built with TypeScript and React that enables interactive visualization, editing, and deployment of component flows in modern web applications.",
    problem: "Developers struggle to visualize and document complex component hierarchies and data flows in large React applications, leading to poor onboarding and maintainability issues.",
    solution: "Built an interactive platform featuring real-time component flow visualization, live code editing, and integrated deployment workflows - streamlining both development and documentation processes.",
    role: [
      "Architecture design & component system",
      "Real-time flow visualization engine",
      "Live code editor integration",
      "Deployment workflow automation",
      "UI/UX design with shadcn-ui"
    ],
    techStack: [
      { name: "TypeScript", reason: "Type safety for complex flow data structures" },
      { name: "React", reason: "Component-based architecture for modular UI" },
      { name: "Vite", reason: "Fast build times during development" },
      { name: "Tailwind CSS", reason: "Rapid, consistent styling" },
      { name: "shadcn/ui", reason: "Accessible, customizable UI primitives" }
    ],
    challenges: [
      "Managing complex nested state for dynamic flow graphs",
      "Real-time synchronization between code editor and visual output",
      "Performance optimization for large component trees",
      "Building an intuitive drag-and-drop interface"
    ],
    outcome: "Successfully deployed as an open-source tool. Demonstrates deep understanding of React internals, state management patterns, and developer tooling.",
    tags: ["TypeScript", "React", "Vite", "Tailwind", "shadcn/ui"],
    featured: true,
    date: "Jun 2025 - Jul 2025"
  },
  {
    id: "weather-tracking",
    title: "Weather Tracking System",
    tagline: "Dynamic weather app with API integration and theme-adaptive UI",
    description: "React and TypeScript based weather tracking application with country-based tracking and dynamic UI themes that change based on weather conditions.",
    problem: "Existing weather apps offer static, one-size-fits-all interfaces that don't adapt to the actual weather conditions, reducing user engagement and contextual awareness.",
    solution: "Built a weather tracking system that dynamically changes its entire UI theme based on real-time weather data - sunny, rainy, cloudy conditions each trigger unique visual experiences.",
    role: [
      "API integration & data handling",
      "Dynamic theming system architecture",
      "Responsive UI development",
      "State management for real-time data"
    ],
    techStack: [
      { name: "React", reason: "Component-based UI with dynamic rendering" },
      { name: "TypeScript", reason: "Type-safe API response handling" },
      { name: "Weather API", reason: "Real-time, reliable weather data" },
      { name: "Tailwind CSS", reason: "Dynamic class-based theming" }
    ],
    challenges: [
      "Handling API rate limits and error states gracefully",
      "Building a dynamic theming system that transitions smoothly",
      "Normalizing weather data across different country formats",
      "Optimizing re-renders when weather data updates"
    ],
    outcome: "Fully deployed application showcasing API integration skills, dynamic UI systems, and data-driven frontend development.",
    tags: ["React", "TypeScript", "API", "Dynamic UI"],
    featured: true,
    date: "May 2025 - Jun 2025"
  },
  {
    id: "telegram-bot",
    title: "Telegram To-Do Bot",
    tagline: "Python-powered daily task management via Telegram",
    description: "Python-based daily to-do tracking Telegram bot that manages daily activities and tasks through an intuitive conversational interface.",
    problem: "Professionals need a frictionless way to track daily tasks without switching to dedicated apps - something embedded in tools they already use daily.",
    solution: "Developed a Telegram bot that handles task creation, tracking, and completion through natural conversational commands, integrating directly into users' existing workflow.",
    role: [
      "Bot architecture & command system",
      "Python backend development",
      "Database design for task persistence",
      "User interaction flow design"
    ],
    techStack: [
      { name: "Python", reason: "Rapid development & rich bot libraries" },
      { name: "Telegram Bot API", reason: "Wide user base, reliable messaging" },
      { name: "SQLite", reason: "Lightweight persistent storage" }
    ],
    challenges: [
      "Designing intuitive command structures for non-technical users",
      "Handling concurrent user sessions reliably",
      "Implementing recurring task logic",
      "Error handling for network interruptions"
    ],
    outcome: "Deployed and actively used for personal productivity. Demonstrates backend development, API integration, and system-level thinking.",
    tags: ["Python", "Telegram API", "Bot", "Automation"],
    featured: true,
    date: "May 2025 - Jun 2025"
  },
  {
    id: "leave-management",
    title: "Grifindo Leave Management System",
    tagline: "Enterprise-grade employee leave & roster management",
    description: "A comprehensive leave management system built with C# using OOP concepts. Manages employees' roster time and their annual, casual, and short leaves.",
    problem: "Manual leave tracking in organizations leads to scheduling conflicts, payroll errors, and poor visibility into team availability.",
    solution: "Built an enterprise LMS with role-based access, automated leave balance calculations, roster management, and reporting dashboards.",
    role: [
      "System architecture with OOP principles",
      "Database schema design",
      "Business logic implementation",
      "UI development with .NET Framework"
    ],
    techStack: [
      { name: "C#", reason: "Strong OOP support for enterprise patterns" },
      { name: ".NET Framework", reason: "Robust desktop application platform" },
      { name: "SQL Server", reason: "Reliable relational data management" }
    ],
    challenges: [
      "Complex leave calculation logic across different leave types",
      "Handling edge cases in roster scheduling",
      "Building a scalable data model for growing teams",
      "Implementing role-based access control"
    ],
    outcome: "Completed as a major academic project. Demonstrates system-level thinking, database design, and enterprise software development.",
    tags: ["C#", ".NET", "SQL Server", "OOP"],
    featured: true,
    date: "Apr 2024 - Dec 2024"
  }
];

export const otherProjects = [
  { title: "Personal Portfolio", tech: "React, TypeScript, Tailwind CSS", date: "Jan 2025 - Jun 2025" },
  { title: "Material Dashboard React", tech: "ReactJS, Material UI", date: "Jun 2025 - Jul 2025" },
  { title: "XCoders Website", tech: "ReactJS, Material UI, Vite", date: "May 2025 - Jun 2025" },
  { title: "Direct Message Delay", tech: "ReactJS, Material UI, TypeScript, Vite", date: "Aug 2025 - Jun 2025" },
  { title: "Mood Mail Generator", tech: "ReactJS, Material UI, TypeScript, Vite", date: "Aug 2025 - Jun 2025" },
];

export const skills = {
  frontend: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "HTML/CSS", "Bootstrap"],
  backend: ["Python", "C#", "SQL", "MySQL", "PHP", ".NET Framework", "REST APIs"],
  tools: ["Git & GitHub", "Power BI", "Figma", "VS Code", "WebStorm", "SSMS", "Excel"],
  practices: ["Agile / Scrum", "SDLC", "UI/UX Design", "System Design", "Database Management", "Version Control"],
};

export const dataExperience = [
  { title: "Power BI Dashboards", desc: "Created interactive data visualizations and business intelligence reports" },
  { title: "Python Analytics", desc: "Data manipulation and analysis using Pandas & NumPy libraries" },
  { title: "SQL Queries", desc: "Complex database queries, optimization, and data extraction" },
  { title: "Data-Driven UI", desc: "Built frontend interfaces that dynamically respond to data patterns" },
];

export const certificates = [
  { title: "Internet of Things", provider: "Cisco", date: "February 2023" },
  { title: "Ethical Hacking", provider: "Mars Tech", date: "March 2023" },
  { title: "Generative AI", provider: "Google", date: "December 2023" },
  { title: "Data Science", provider: "Cisco", date: "April 2023" },
];

export const education = [
  {
    degree: "BSc (Hons) Computer Science in Software Engineering",
    institution: "Kingston University, UK | Esoft Uni",
    location: "Kandy, Sri Lanka",
    period: "Present",
    details: []
  },
  {
    degree: "Higher National Diploma in Computing - Software Engineering",
    institution: "Pearson College, UK | Esoft Metro Campus",
    location: "Batticaloa, Sri Lanka",
    period: "Feb 2024 - Sep 2025",
    details: ["Software Analysis & Design", "UI/UX", "Agile & Scrum", "RDBMS", "Web & Mobile Apps"]
  },
  {
    degree: "Diploma in IT",
    institution: "ESoft Metro Campus (SEG, UK Awards)",
    location: "Batticaloa, Sri Lanka",
    period: "Jun 2024 - Feb 2025",
    details: ["Web Applications", "Network Security", "Python", "SQL"]
  },
  {
    degree: "Cyber Security Training Course",
    institution: "Mars Tech",
    location: "Colombo, Sri Lanka",
    period: "Jan 2023 - Dec 2023",
    details: []
  }
];

export const reference = {
  name: "NMM. Nuhman",
  qualifications: "MBA, BEng(Hons) in Software Engineering",
  title: "Programme Manager / Assistant Lecturer – IT",
  institution: "ESOFT Metro Campus Batticaloa",
  address: "43, Baily Road, Batticaloa, Sri Lanka",
  mobile: "0707157160 / 0760730103",
  email: "mohamed.nuhman@esoft.lk"
};
