import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code2, Brain, Heart, Layers, Database, Shield } from "lucide-react";
import type { Transition } from "framer-motion";

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
      category: "Development",
      icon: <Layers size={14} />,
      items: ["TypeScript", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      primary: true
    },
    {
      category: "Architecture & Security",
      icon: <Shield size={14} />,
      items: ["RESTful APIs", "WebSockets", "JWT/Auth", "RBAC", "Middleware"]
    },
    {
      category: "DevOps & Testing",
      icon: <Database size={14} />,
      items: ["Git", "Jest", "Vitest", "Jasmine", "Deployment"]
    }
  ],
  soft: [
    "Problem Solving", "Documentation", "Team Collaboration", 
    "Critical Thinking", "Adaptability"
  ],
  interests: ["Action Films", "Anime", "Gaming", "Tech Trends", "Travelling"]
};

const fadeUp: FadeUpProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

// --- Component ---

export default function Skills(): React.JSX.Element {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
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
            className="lg:col-span-7 space-y-6 rounded-3xl border border-white/10 bg-white/[0.01] p-8"
        >
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
            <Code2 size={16} /> Technical Proficiency
            </h3>

            <div className="space-y-8">
            {SKILLS.technical.map((group) => (
                <div key={group.category} className="space-y-3">
                <div className="flex items-center gap-2 text-white/60 text-[10px] uppercase">
                    {group.icon} {group.category}
                </div>

                <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                    <span
                        key={item}
                        className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all
                        ${
                            group.primary
                            ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:border-indigo-500/50"
                            : "bg-white/[0.03] text-white/60 border border-white/5 hover:border-white/20"
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
        <div className="lg:col-span-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-1">

            {/* Soft Skills */}
            <motion.div
            variants={itemVariants}
            className="rounded-3xl border border-white/10 bg-white/[0.01] p-8"
            >
            <h3 className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400">
                <Brain size={16} /> Strategy
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
                <Heart size={16} /> Lifestyle
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