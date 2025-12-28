import React from "react";
import { motion } from "framer-motion";
import { Terminal, Users, Target, ArrowUpRight } from "lucide-react";
import type { Transition } from "framer-motion";

// Define the animation properties type
interface FadeUpProps {
  initial: { opacity: number; y: number };
  whileInView: { opacity: number; y: number };
  viewport: { once: boolean };
  transition: Transition;
}

export default function About(): React.JSX.Element {
  // Animation configuration
  const fadeUp: FadeUpProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="about" className="relative overflow-hidden bg-[#030303] py-15 sm:py-32">
      {/* Background Glow - Matches Hero */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[40%] left-[50%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div 
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={fadeUp.viewport}
          transition={fadeUp.transition}
          className="mb-16 border-l border-white/10 pl-6"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
            How I work and what I focus on as a developer.
          </p>
        </motion.div>

        {/* Q&A Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1: Capability */}
          <motion.div 
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={fadeUp.transition}
            className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
              <Terminal size={20} />
            </div>
            <h3 className="mt-6 text-lg font-medium text-white">
              Can I do the job?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Yes. I build full-stack applications with a strong focus on reliable
              frontend behavior, well-structured backend logic, and stable data
              handling.
            </p>
            <a
              href="#projects"
              className="mt-6 flex items-center gap-2 text-xs font-medium text-white/40 hover:text-white transition-colors"
            >
              Explore work <ArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* Card 2: Teamwork */}
          <motion.div 
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
              <Users size={20} />
            </div>
            <h3 className="mt-6 text-lg font-medium text-white">
              How do I fit into a team?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              I value clear communication, shared understanding, and ownership.
              I document decisions, write readable code, and take responsibility
              for the features I build in collaborative environments.
            </p>
            <a
              href="/chandan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 text-xs font-medium text-white/40 hover:text-white transition-colors"
            >
              View resume <ArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* Card 3: Philosophy */}
          <motion.div 
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <Target size={20} />
            </div>
            <h3 className="mt-6 text-lg font-medium text-white">
              Why invest in me?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              I focus on long-term growth. I consistently improve my technical
              skills and workflows to increase efficiency and deliver greater
              value to the teams I work with.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}