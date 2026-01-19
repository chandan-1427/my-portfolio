import React from "react";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import {
  Code2,
  Brain,
  Heart,
  Layers,
  Database,
  Shield,
  Cloud,
  Cpu,
} from "lucide-react";

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  items: string[];
  primary?: boolean;
}

interface SkillsData {
  technical: SkillGroup[];
  soft: string[];
  interests: string[];
}

interface FadeUpProps {
  initial: { opacity: number; y: number };
  whileInView: { opacity: number; y: number };
  viewport: { once: boolean };
  transition: Transition;
}

// --- Data ---

const SKILLS: SkillsData = {
  technical: [
    {
      category: "Core Stack",
      icon: <Layers size={14} />,
      items: [
        "TypeScript",
        "Next.js",
        "React",
        "Node.js",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      primary: true,
    },
    {
      category: "Backend & APIs",
      icon: <Cpu size={14} />,
      items: [
        "Hono",
        "Express.js",
        "REST APIs",
        "GraphQL",
        "Socket.IO",
        "Middleware",
      ],
    },
    {
      category: "Authentication & Security",
      icon: <Shield size={14} />,
      items: [
        "Better Auth",
        "JWT",
        "Role-Based Access Control (RBAC)",
        "Session Management",
        "Protected Routes",
      ],
    },
    {
      category: "Data & Persistence",
      icon: <Database size={14} />,
      items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Supabase"],
    },
    {
      category: "Performance & State",
      icon: <Brain size={14} />,
      items: ["TanStack Query", "Caching", "Prefetching", "Skeleton Loaders", "Debugging"],
    },
    {
      category: "Tooling & Deployment",
      icon: <Cloud size={14} />,
      items: ["Git", "Postman", "Jest", "Supertest", "Vercel", "Render"],
    },
  ],
  soft: [
    "Problem Solving",
    "System Thinking",
    "Clear Communication",
    "Ownership Mindset",
    "Debugging Under Pressure",
  ],
  interests: ["Fintech", "Real-time Systems", "System Design", "Tech Trends", "Gaming"],
};

const fadeUp: FadeUpProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

// --- Component ---

export default function Skills(): React.JSX.Element {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="bg-[#030303] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={fadeUp.viewport}
          transition={fadeUp.transition}
          className="mb-16 border-l border-white/10 pl-6"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Skills
          </h2>
          <p className="mt-4 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
            My technical ecosystem.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-12"
        >
          {/* TECHNICAL */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.01] p-8 lg:col-span-7"
          >
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
              <Code2 size={16} /> Technical Proficiency
            </h3>

            <div className="space-y-8">
              {SKILLS.technical.map((group) => (
                <div key={group.category} className="space-y-3">
                  <div className="flex items-center gap-2 text-[10px] uppercase text-white/60">
                    {group.icon} {group.category}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all
                        ${
                          group.primary
                            ? "border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 hover:border-indigo-500/50"
                            : "border border-white/5 bg-white/[0.03] text-white/60 hover:border-white/20"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SOFT SKILLS + INTERESTS */}
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {/* Soft Skills */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl border border-white/10 bg-white/[0.01] p-8"
            >
              <h3 className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400">
                <Brain size={16} /> Work Style
              </h3>

              <ul className="grid gap-y-3 text-sm text-white/60">
                {SKILLS.soft.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-purple-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Interests */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl border border-white/10 bg-white/[0.01] p-8"
            >
              <h3 className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                <Heart size={16} /> Interests
              </h3>

              <div className="flex flex-wrap gap-3 text-sm text-white/50">
                {SKILLS.interests.join(" • ")}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
