import type { Messages } from "../types";

export const en: Messages = {
  meta: {
    title: "Sam Kislitcyn | Portfolio",
    description: "Professional portfolio",
  },
  header: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    about: "About",
  },
  hero: {
    status: "Open to new opportunities",
    title: "Hi, I'm Sam, a Fullstack developer from Israel!",
    subtitle:
      "Driven by building scalable and efficient web applications that make a difference.",
    explore: "Explore my work",
    connect: "Let's connect",
    imageAlt: "Person peeking from behind laptop",
  },
  tape: {
    words: [
      "Autonomous",
      "Good Team Spirit",
      "Sense of Responsibility",
      "Adaptability",
      "Creative",
      "Organized",
      "Analytical",
      "Curious",
      "Dynamic",
      "Proactive",
      "Reliable",
      "Responsive",
      "Problem Solver",
      "Listener",
    ],
  },
  projects: {
    eyebrow: "Real-world Results",
    title: "Featured Projects",
    description:
      "Production tools, React applications, and polished site builds — from production-ready Survivor Tool to recent Ya.Praktikum projects.",
    visitLive: "Visit Live Site",
    viewGithub: "View on GitHub",
    items: [
      {
        id: "survivor-tool",
        company: "Survivor Tool",
        year: "2025-2026",
        title: "DayZ Community Administration Platform",
        results: [
          "Built a live DayZ ops platform with Discord automation, tickets, player checks, and server tools.",
          "Added CFTools/Steam lookups, log analytics, suspicious-player alerts, and a web settings panel.",
        ],
      },
      {
        id: "stellar-burgers",
        company: "Ya.Praktikum",
        year: "2026",
        title: "Stellar Burgers",
        results: [
          "Built a TypeScript React burger ordering app with Redux Toolkit, protected routes, constructor/feed/profile flows, and API integration.",
          "Added Jest unit coverage for Redux slices plus Playwright end-to-end tests and Storybook for UI states.",
        ],
      },
      {
        id: "blog-customizer",
        company: "Ya.Praktikum",
        year: "2026",
        title: "Blog Customizer",
        results: [
          "Implemented an interactive article settings panel with deferred form state, CSS variables, reset/apply behavior, and Storybook workflow.",
        ],
      },
      {
        id: "weblarek",
        company: "Ya.Praktikum",
        year: "2026",
        title: "WebLarek",
        results: [
          "Created a TypeScript and Vite storefront using an MVP architecture, event-driven UI updates, cart flows, and two-step checkout.",
        ],
      },
      {
        id: "portfolio",
        company: "Personal",
        year: "2024-2026",
        title: "Portfolio Website",
        results: [
          "Designed and built this Next.js portfolio with Tailwind CSS, animated sections, static export support, and GitHub Pages deployment.",
        ],
      },
      {
        id: "zakrivayuschiy-teg",
        company: "Ya.Praktikum",
        year: "2025",
        title: "Zakrivayuschiy Teg - Frontend Project",
        results: [
          "Pixel-accurate landing page from a Figma brief, with additional theme selector and custom animations beyond the base assignment.",
        ],
      },
    ],
  },
  about: {
    eyebrow: "About Me",
    title: "A Glimpse Into My World",
    description: "Learn more about who I am, what I do, and what inspires me.",
    readsTitle: "My reads",
    readsDescription: "Discover the book I'm immersed in right now.",
    toolboxTitle: "My Toolbox",
    toolboxDescription:
      "Explore the technologies and tools I use to craft exceptional digital experiences.",
    educationTitle: "Education",
    educationDescription: "Have a look at my academic background.",
    certificationsTitle: "Certifications",
    certificationsDescription: "Check out the certifications I've earned.",
    beyondTitle: "Beyond the Code",
    beyondDescription:
      "Explore my interests and hobbies beyond the digital realm.",
    bookAlt: "Book cover",
    mapAlt: "Map",
    memojiAlt: "Smiling memoji",
    management: "Management",
    formations: [
      "Network Engineering - Bachelor's degree - Sheridan College (2024-2028)",
    ],
    certifications: [
      "<strong>Career Essentials in GitHub Professional Certificate (Feb 2025)</strong>",
      "Career Essentials in Software Development by Microsoft and LinkedIn (Feb 2025)",
      "English for the workplace, Language Assessment (Level C1-2) @ Oranim Academic College of Education (2021)",
    ],
    hobbies: [
      { title: "Piano", emoji: "🎹", left: "35%", top: "40%" },
      { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
      { title: "Music", emoji: "🎵", left: "65%", top: "42%" },
      { title: "Reading", emoji: "📚", left: "45%", top: "70%" },
      { title: "Travel", emoji: "✈️", left: "77%", top: "73%" },
      { title: "Stock market", emoji: "📈", left: "70%", top: "15%" },
    ],
  },
  contact: {
    title: "Let's create something amazing together",
    description:
      "Want to know more about my work or discuss an opportunity? Feel free to reach out.",
    button: "Contact me",
    mailSubject: "Let's work together",
    mailBody: "Hi Sam,\n\nI would like to discuss a project with you.",
  },
  footer: {
    rights: "© 2026. All rights reserved.",
    resume: "Resume",
  },
};
