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

/* ---------------- Animation ---------------- */

interface FadeUpProps {
  initial: { opacity: number; y: number };
  whileInView: { opacity: number; y: number };
  viewport: { once: boolean; margin: string };
  transition: Transition;
}

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
    <section id="projects" className="bg-[#030303] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div {...fadeUp} className="mb-12 border-l border-white/10 pl-5">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white/60">
            Featured Projects
          </h2>
          <p className="mt-3 max-w-2xl text-lg font-semibold text-white/90 sm:text-2xl">
            Projects that show how I solve problems and build reliable systems.
          </p>
        </motion.div>

        <div className="space-y-12">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}

          {hiddenProjects.length > 0 && (
            <div className="pt-6">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="mx-auto block rounded-full border border-white/10 bg-white/[0.04] px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white/70 hover:bg-white/[0.08]"
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
                <div className="mt-12 space-y-12">
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
      <p className="mt-2 text-sm text-white/55">{text}</p>
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
      transition={{ ...fadeUp.transition, delay: index * 0.04 }}
      className="rounded-xl border border-white/10 bg-white/[0.015]"
    >
      {/* HEADER */}
      <div className="px-5 py-4">
        <div className="grid gap-3 sm:flex sm:items-start sm:justify-between sm:gap-6">
          {/* Title + desc */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-left"
          >
            <h3 className="text-base font-semibold text-white sm:text-lg">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-white/55">
              {project.description}
            </p>
          </button>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/70 hover:bg-white/[0.1]"
            >
              Live
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/70 hover:bg-white/[0.1]"
            >
              Code
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white"
            >
              {open ? "Close" : "View"}
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:col-span-full">
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
        </div>
      </div>

      {/* EXPANDED */}
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
        <div className="px-5 pb-5 pt-2 space-y-8">
          {/* Image */}
          <div className="aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-neutral-900">
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
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <h4 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40">
              <BookOpen size={14} /> Lessons Learned
            </h4>
            <p className="text-sm italic text-white/60">
              “{project.story.lessons}”
            </p>
          </div>

          {/* Footer links */}
          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-bold text-black"
            >
              Live <ExternalLink size={14} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-white"
            >
              GitHub <Github size={14} />
            </a>
                        <button
              onClick={() => setOpen((v) => !v)}
              className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white"
            >
              {open ? "Close" : "View"}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
