import React from "react";
import { motion } from "framer-motion";
import tokenImage from "../assets/token-system.webp";
import vessifyImage from "../assets/nessify.png";
import worldExplorerImage from "../assets/world-explorer.webp";
import type { Transition } from "framer-motion";

import {
  Github,
  ExternalLink,
  Box,
  Lightbulb,
  Hammer,
  BarChart3,
  BookOpen,
} from "lucide-react";

interface ProjectStory {
  challenge: string;
  role: string;
  process: string;
  solution: string;
  impact: string;
  lessons: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  story: ProjectStory;
}

interface FadeUpProps {
  initial: { opacity: number; y: number };
  whileInView: { opacity: number; y: number };
  viewport: { once: boolean, margin: string };
  transition: Transition;
}

const PROJECTS: Project[] = [
  {
    title: "Token Notification System",
    description:
      "A real-time token management system built to streamline queue handling for clinics and service centers.",
    tags: ["MERN", "Socket.io", "JWT", "Role-Based Access"],
    liveUrl: "https://token-notification-system.vercel.app/",
    githubUrl: "https://github.com/chandan-1427/token-notification-system",
    image: tokenImage,
    story: {
      challenge:
        "Existing token handling was manual and fragmented, causing delays, confusion, and lack of real-time visibility for both staff and users.",
      role:
        "Full Stack Developer (Solo). Owned the system end-to-end, including architecture, backend logic, and real-time communication.",
      process:
        "Designed REST APIs using Express, implemented JWT-based authentication, and integrated Socket.io to synchronize token state across all connected clients.",
      solution:
        "Created a centralized token engine with role-restricted access for clinics and real-time status updates for public displays and users.",
      impact:
        "Reduced operational confusion by keeping token status consistent and visible across all systems in real time.",
      lessons:
        "Learned the importance of reliable state synchronization and careful handling of real-time updates in multi-client systems.",
    },
  },

{
  title: "Vessify — Fintech Statement Text Extractor",
  description:
    "A full-stack statement parser that converts raw bank/UPI transaction text into structured data with authentication and persistent storage.",
  tags: ["Next.js", "Hono", "PostgreSQL", "Prisma", "Better Auth", "Shadcn UI"],
  liveUrl: "https://vessify-six.vercel.app/",
  githubUrl: "https://github.com/chandan-1427/text-extractor",
  image: vessifyImage,
  story: {
    challenge:
      "Raw bank/UPI statement messages are inconsistent and unstructured, making it difficult to reliably extract transactions into a clean format that users can store and review.",
    role:
      "Full Stack Developer. Built the end-to-end system including parsing logic, API design, authentication, database schema, and UI.",
    process:
      "Designed backend APIs with Hono, implemented auth + session management using Better Auth, modeled relational storage using PostgreSQL + Prisma, and built a clean interactive UI with Next.js and Shadcn UI.",
    solution:
      "Built a structured extraction pipeline that normalizes statement input into consistent transaction objects, secured the workflow with authenticated sessions, and stored results for future access using a relational schema.",
    impact:
      "Delivered a production-ready fintech assignment project that demonstrates full-stack ownership: parsing, persistence, authentication, and a polished UI experience.",
    lessons:
      "Learned how to build reliable text parsing flows, model structured financial data in PostgreSQL, and integrate a modern auth system with a lightweight backend framework.",
  },
},

  {
    title: "World Explorer",
    description:
      "A data-driven application that presents detailed information about over 250 countries with search and filtering capabilities.",
    tags: ["React", "TypeScript", "GraphQL", "TanStack Query", "Tailwind CSS"],
    liveUrl: "https://world-explorer-bice.vercel.app/",
    githubUrl: "https://github.com/chandan-1427/world-explorer",
    image: worldExplorerImage,
    story: {
      challenge:
        "Displaying large volumes of country data in a way that remains fast, searchable, and usable across different devices.",
      role:
        "Frontend Developer. Focused on data fetching, performance optimization, and responsive UI design.",
      process:
        "Integrated GraphQL and REST APIs using TanStack Query, implemented caching and error handling, and refined UI interactions.",
      solution:
        "Built a responsive interface with search, filters, and map redirection to make country data easy to explore.",
      impact:
        "Improved data accessibility while maintaining good performance and a clean user experience.",
      lessons:
        "Learned how caching strategies, error boundaries, and thoughtful UI decisions improve overall application usability.",
    },
  },
];

const fadeUp: FadeUpProps = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.45, ease: "easeOut" },
};

export default function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="bg-[#030303] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div {...fadeUp} className="mb-14 border-l border-white/10 pl-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-lg font-semibold text-white/90 sm:text-2xl">
            Projects that show how I solve problems and build reliable systems.
          </p>
        </motion.div>

        <div className="space-y-20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.08 }}
              className="grid gap-12 lg:grid-cols-12"
            >
              {/* LEFT */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-black hover:bg-neutral-200"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Source on GitHub"
                    className="rounded-xl border border-white/10 bg-white/[0.05] p-3.5 text-white hover:bg-white/[0.12]"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-7 space-y-10">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-white/60 max-w-2xl">
                    {project.description}
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Info label="Role" icon={Box} color="purple" text={project.story.role} />
                  <Info label="Challenge" icon={Lightbulb} color="indigo" text={project.story.challenge} />
                  <Info label="Process" icon={Hammer} color="emerald" text={project.story.process} />
                  <Info label="Impact" icon={BarChart3} color="orange" text={project.story.impact} />
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                  <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40">
                    <BookOpen size={14} /> Lessons Learned
                  </h4>
                  <p className="text-sm italic text-white/60">
                    “{project.story.lessons}”
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Small helper to reduce JSX repetition */
function Info({
  label,
  icon: Icon,
  color,
  text,
}: {
  label: string;
  icon: React.ElementType;
  color: string;
  text: string;
}) {
  return (
    <div>
      <h4 className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-${color}-400`}>
        <Icon size={14} /> {label}
      </h4>
      <p className="mt-2 text-white/50">{text}</p>
    </div>
  );
}
