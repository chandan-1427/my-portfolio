import React from "react";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { PROJECTS, type Project } from "../data/projects";
import {
  Github,
  ExternalLink,
  Box,
  Lightbulb,
  Hammer,
  CircleOff,
  BookOpen,
} from "lucide-react";
interface FadeUpProps {
  initial: { opacity: number; y: number };
  whileInView: { opacity: number; y: number };
  viewport: { once: boolean; margin: string };
  transition: Transition;
}

/* ---------------- Animation ---------------- */

const fadeUp: FadeUpProps = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.45, ease: "easeOut" },
};

/* ---------------- Component ---------------- */

export default function Projects(): React.JSX.Element {
  const [expanded, setExpanded] = React.useState(false);

  const visibleProjects = PROJECTS.slice(0, 3);
  const hiddenProjects = PROJECTS.slice(3);

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
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}

          {hiddenProjects.length > 0 && (
            <div className="pt-8">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="mx-auto block rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white/70 hover:bg-white/[0.08]"
              >
                {expanded ? "Show Less Projects" : "Show More Projects"}
              </button>

              <motion.div
                initial={false}
                animate={expanded ? "open" : "closed"}
                variants={{
                  open: { height: "auto", opacity: 1 },
                  closed: { height: 0, opacity: 0 },
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="mt-20 space-y-20">
                  {hiddenProjects.map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Helpers ---------------- */

const COLOR_MAP = {
  purple: "text-purple-400",
  indigo: "text-indigo-400",
  emerald: "text-emerald-400",
  red: "text-red-400",
};

function Info({
  label,
  icon: Icon,
  color,
  text,
}: {
  label: string;
  icon: React.ElementType;
  color: keyof typeof COLOR_MAP;
  text: string;
}) {
  return (
    <div>
      <h4
        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${COLOR_MAP[color]}`}
      >
        <Icon size={14} />
        {label}
      </h4>
      <p className="mt-2 text-white/50">{text}</p>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.div
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: index * 0.05 }}
      className="rounded-2xl border border-white/10 bg-white/[0.015]"
    >
      {/* HEADER / COLLAPSED VIEW */}
      <div className="px-6 py-5">
        <div className="flex items-start justify-between gap-6">
          {/* Left content (title + desc + tags) */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex-1 text-left"
          >
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-1 max-w-3xl text-sm text-white/55">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/50"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 5 && (
                <span className="text-[10px] text-white/40">
                  +{project.tags.length - 5} more
                </span>
              )}
            </div>
          </button>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-2 pt-1">
            {/* Live */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/70 hover:bg-white/[0.1]"
            >
              Live
            </a>

            {/* GitHub */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/70 hover:bg-white/[0.1]"
            >
              Code
            </a>

            {/* View / Close */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="ml-1 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white"
            >
              {open ? "Close" : "View"}
            </button>
          </div>
        </div>
      </div>

      {/* EXPANDED CONTENT */}
      <motion.div
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-2 space-y-8">
          {/* Image */}
          <div className="aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Story */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Info label="Role" icon={Box} color="purple" text={project.story.role} />
            <Info label="Challenge" icon={Lightbulb} color="indigo" text={project.story.challenge} />
            <Info label="Process" icon={Hammer} color="emerald" text={project.story.process} />
            <Info label="Impact" icon={CircleOff} color="red" text={project.story.impact} />
          </div>

          {/* Lessons */}
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <h4 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40">
              <BookOpen size={14} /> Lessons Learned
            </h4>
            <p className="text-sm italic text-white/60">
              “{project.story.lessons}”
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-bold text-black"
            >
              Live <ExternalLink size={14} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-white"
            >
              GitHub <Github size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

