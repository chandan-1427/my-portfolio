"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import profileImage from "../assets/me4.webp"; // ✅ convert to WebP

type SocialItem = {
  icon: LucideIcon;
  href: string;
  label: string;
};

const TECH_STACK = [
  "TypeScript",
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "Tailwind CSS",
];

export default function Hero(): React.JSX.Element {
  const socialLinks: SocialItem[] = [
    { icon: Github, href: "https://github.com/chandan-1427", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/chandan-dakka-805068360/", label: "LinkedIn" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030303]"
    >
      {/* Background glow (lighter & cheaper) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[20%] left-[10%] h-[320px] w-[320px] rounded-full bg-indigo-600/10 blur-[80px]" />
        <div className="absolute bottom-[20%] right-[10%] h-[320px] w-[320px] rounded-full bg-purple-600/10 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }} // lighter
            className="flex flex-col space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-[2.75rem] leading-[1.1] font-bold tracking-tight text-white sm:text-[3.5rem] lg:text-[4rem]">
                <span className="block text-sm font-medium tracking-widest text-white/60 mb-2">
                  Hi, I’m
                </span>
                Chandan
              </h1>

              <h2 className="text-lg font-medium text-white/80 sm:text-xl">
                Full Stack Developer
              </h2>

              <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                Based in Andhra Pradesh, India. I build reliable and scalable web
                applications using{" "}
                <span className="font-medium text-white">
                  MERN stack and TypeScript
                </span>
                .
              </p>
            </div>

            {/* Tech stack */}
            <div>
              <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-white/30">
                <Terminal size={14} />
                Primary Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA + socials */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="/chandan-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View Resume
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-full border border-white/15 bg-white/5 p-3 text-white/60 hover:text-white transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative h-[360px] w-[300px] sm:h-[440px] sm:w-[380px] overflow-hidden rounded-[32px] border border-white/20 bg-neutral-900 p-3">
              <img
                src={profileImage}
                alt="Chandan profile"
                loading="lazy"
                fetchPriority="high"
                decoding="async"
                width={380}
                height={440}
                className="h-full w-full rounded-[22px] object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-sm text-white/60">
                  Focused on long-term growth, continuous learning, and building meaningful software.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
