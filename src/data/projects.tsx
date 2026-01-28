
import feedbackIntelImage from "../assets/feedback-intelligence.png";
import tokenImage from "../assets/token-system.webp";
import vessifyImage from "../assets/nessify.png";
import worldExplorerImage from "../assets/world-explorer.webp";
import jobFinderImage from "../assets/jobfinder.webp"
import nessImage from "../assets/ness.png"

/* ---------------- Types ---------------- */

export interface ProjectStory {
  challenge: string;
  role: string;
  process: string;
  solution: string;
  impact: string;
  lessons: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  story: ProjectStory;
}

/* ---------------- Data ---------------- */

export const PROJECTS: Project[] = [
  {
    title: "FeedbackIntel — AI Feedback Intelligence Platform",
    description:
      "A full-stack AI-powered platform that collects user feedback, clusters it into meaningful themes, and generates actionable solution plans.",
    tags: [
      "React",
      "Hono",
      "PostgreSQL",
      "JWT Auth",
      "Groq AI",
      "Tailwind CSS",
      "Recharts",
    ],
    liveUrl: "https://feedback-intelligence-five.vercel.app",
    githubUrl: "https://github.com/chandan-1427/feedback-intelligence",
    image: feedbackIntelImage,
    story: {
      challenge:
        "User feedback is scattered and hard to prioritize at scale.",
      role:
        "Full Stack Developer. Built backend APIs, AI workflows, database schema, and frontend.",
      process:
        "Designed scalable Hono APIs, PostgreSQL schema, AI clustering, and a modern analytics dashboard.",
      solution:
        "End-to-end feedback intelligence workflow with AI-powered insights.",
      impact:
        "Production-grade AI SaaS-style system demonstrating strong product thinking.",
      lessons:
        "Learned AI-assisted decision design and scalable backend architecture.",
    },
  },
  {
    title: "Vessify — Fintech Statement Text Extractor",
    description:
      "A parser that converts raw bank/UPI text into structured transactions.",
    tags: ["Next.js", "Hono", "PostgreSQL", "Prisma", "Better Auth"],
    liveUrl: "https://vessify-six.vercel.app/",
    githubUrl: "https://github.com/chandan-1427/text-extractor",
    image: vessifyImage,
    story: {
      challenge:
        "Unstructured bank messages are difficult to parse reliably.",
      role: "Full Stack Developer",
      process:
        "Built parsing logic, auth flows, relational schema, and UI.",
      solution:
        "Normalized extraction pipeline with persistent storage.",
      impact:
        "Delivered a production-ready fintech assignment system.",
      lessons:
        "Learned structured text parsing and financial data modeling.",
    },
  },
  {
    title: "Token Notification System",
    description:
      "A real-time token queue system for clinics and service centers.",
    tags: ["MERN", "Socket.io", "JWT"],
    liveUrl: "https://token-notification-system.vercel.app/",
    githubUrl: "https://github.com/chandan-1427/token-notification-system",
    image: tokenImage,
    story: {
      challenge:
        "Manual token handling caused delays and confusion.",
      role: "Full Stack Developer (Solo)",
      process:
        "Built REST APIs and real-time sync using Socket.io.",
      solution:
        "Centralized real-time token engine.",
      impact:
        "Reduced operational confusion across systems.",
      lessons:
        "Learned reliable real-time state synchronization.",
    },
  },
  {
    title: "NESS — Bank Statement Information Extractor",
    description:
      "A MERN-based information extraction system that parses raw bank and UPI transaction statements into structured, searchable financial records.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "Text Parsing",
      "Tailwind CSS",
    ],
    liveUrl: "https://ness-extractor.vercel.app", // replace if deployed
    githubUrl: "https://github.com/chandan-1427/ness-extractor", // replace if different
    image: nessImage, // import your project image
    story: {
      challenge:
        "Bank and UPI statements are delivered as unstructured text with inconsistent formats, making it difficult for users to track, analyze, or store their financial transactions reliably.",
      role:
        "Full Stack Developer. Designed and implemented the complete extraction pipeline including parsing logic, backend APIs, authentication, database schema, and frontend UI.",
      process:
        "Built a MERN backend with JWT-based authentication to securely store user data. Designed robust text parsing logic to identify transaction amount, type, date, and description from raw statement text. Normalized extracted data into a MongoDB schema and built a clean React UI to upload, review, and manage extracted transactions.",
      solution:
        "Delivered an end-to-end statement extraction workflow where users can submit raw bank or UPI messages, automatically convert them into structured transaction records, and persist them for future review and analysis.",
      impact:
        "Demonstrates real-world handling of unstructured data, backend data normalization, and secure user-specific storage — applicable to fintech and personal finance platforms.",
      lessons:
        "Learned how to design reliable text parsing systems, handle inconsistent input formats, model financial data in MongoDB, and build secure MERN applications for sensitive user information.",
    },
  },
  {
    title: "JobFinder — Role-Based Job Marketplace Platform",
    description:
      "A full-stack job marketplace that connects job seekers and employers with role-based access, verified employer workflows, and an admin-controlled moderation system.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "Role-Based Access",
      "Tailwind CSS",
    ],
    liveUrl: "https://job-finder-mern-eight.vercel.app", // replace if deployed
    githubUrl: "https://github.com/chandan-1427/Job-Finder-MERN", // replace if different
    image: jobFinderImage, // import your project image
    story: {
      challenge:
        "Most job portals lack clear role separation and moderation, leading to unverified employers, spam job postings, and poor trust for job seekers.",
      role:
        "Full Stack Developer. Designed and implemented the entire system including role-based routing, backend APIs, authentication, and UI workflows for users, employers, and admins.",
      process:
        "Built a scalable MERN backend with JWT authentication and role-based authorization. Designed separate layouts and routes for job seekers and employers, implemented employer verification workflows, and created an admin dashboard for moderation, analytics, and system control. Focused on reusable frontend components and clean API boundaries for maintainability.",
      solution:
        "Delivered a structured job marketplace with distinct user, employer, and admin experiences. Employers can manage profiles and job listings, job seekers can browse and apply, and admins can verify employers, moderate jobs, and oversee platform activity from a centralized dashboard.",
      impact:
        "Demonstrates real-world marketplace architecture, access control, and admin-driven moderation — reflecting production-grade system design suitable for scalable hiring platforms.",
      lessons:
        "Learned how to design role-based systems, enforce authorization across frontend and backend, structure scalable MERN applications, and balance UX with platform governance.",
    }
  },
  {
    title: "World Explorer",
    description:
      "Country data explorer with search and filtering.",
    tags: ["React", "TypeScript", "GraphQL"],
    liveUrl: "https://world-explorer-bice.vercel.app/",
    githubUrl: "https://github.com/chandan-1427/world-explorer",
    image: worldExplorerImage,
    story: {
      challenge:
        "Rendering large datasets efficiently.",
      role: "Frontend Developer",
      process:
        "Used GraphQL + TanStack Query with caching.",
      solution:
        "Fast, searchable country explorer.",
      impact:
        "Improved data accessibility and UX.",
      lessons:
        "Learned caching and UI performance strategies.",
    },
  }, 
];