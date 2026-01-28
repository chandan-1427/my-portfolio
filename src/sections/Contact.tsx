import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight, Copy, Check, FileText } from "lucide-react";

export default function Contact(): React.JSX.Element {
  const [copied, setCopied] = useState(false);
  const email = "chandandakka@gmail.com";

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const fadeUp = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45 },
  };

  return (
    <section
      id="contact"
      className="relative bg-[#030303] py-16 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[15%] top-[30%] h-64 w-64 rounded-full bg-indigo-500/4 blur-[140px]" />
        <div className="absolute right-[10%] bottom-[20%] h-64 w-64 rounded-full bg-purple-500/4 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div {...fadeUp} className="mb-12 border-l border-white/10 pl-5">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Contact
          </h2>
          <p className="mt-3 max-w-xl text-lg font-medium text-white/85">
            Let’s work together on something meaningful.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Email */}
          <motion.div
            {...fadeUp}
            className="rounded-2xl border border-white/10 bg-white/[0.015] p-6"
          >
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
              <Mail size={18} />
            </div>

            <h3 className="text-sm font-semibold text-white">
              Email
            </h3>
            <p className="mt-1 text-xs text-white/50">
              Usually replies within 24 hours
            </p>

            <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
              <span className="truncate text-xs font-medium text-white">
                {email}
              </span>

              <button
                onClick={copyToClipboard}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition
                  ${
                    copied
                      ? "text-emerald-400"
                      : "text-white/50 hover:text-white"
                  }`}
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.015] p-6"
          >
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
              <Linkedin size={18} />
            </div>

            <h3 className="text-sm font-semibold text-white">
              LinkedIn
            </h3>
            <p className="mt-1 text-xs text-white/50">
              Professional networking & collaborations
            </p>

            <a
              href="https://www.linkedin.com/in/chandan-dakka-805068360/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white"
            >
              Visit profile <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400/80">
            Open to opportunities
          </span>

          <div className="flex items-center gap-6">
            <a
              href="/chandan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/40 hover:text-white"
            >
              <FileText size={12} /> Resume
            </a>
            <a
              href="#home"
              className="text-[10px] font-semibold uppercase tracking-widest text-white/40 hover:text-white"
            >
              Back to top
            </a>
          </div>

          <p className="text-[10px] uppercase tracking-widest text-white/20">
            — Chandan
          </p>
        </div>
      </div>
    </section>
  );
}
