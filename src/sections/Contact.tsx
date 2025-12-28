import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight, Copy, Check, FileText } from "lucide-react";

interface AnimationProps {
  initial: { opacity: number; y: number };
  whileInView: { opacity: number; y: number };
  viewport: { once: boolean };
  transition: { duration: number; delay?: number };
}

export default function Contact(): React.JSX.Element {
  const [copied, setCopied] = useState<boolean>(false);
  const email: string = "chandandakka@gmail.com";

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const fadeUp: AnimationProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="contact" className="relative bg-[#030303] py-20 sm:py-15 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-10%] left-[10%] h-[400px] w-[400px] rounded-full bg-indigo-600/5 blur-[120px]" />
        <div className="absolute top-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mb-16 border-l border-white/10 pl-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Get in touch
          </h2>
          <p className="mt-4 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
            Let's build something <br className="hidden sm:block" /> 
            exceptional together.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Email Card */}
          <motion.div 
            {...fadeUp}
            className="group relative rounded-3xl border border-white/10 bg-white/[0.01] p-8 transition-all hover:bg-white/[0.02] hover:border-white/20"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 transition-transform duration-500 group-hover:scale-110">
                <Mail size={24} />
            </div>

            <h3 className="text-xl font-medium text-white">Email me directly</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
                Expect a response within 24 hours.
            </p>
            
            <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-2 pl-4">
                <span className="truncate text-[14px] font-medium tracking-wide text-white">
                {email}
                </span>

                <button 
                  onClick={copyToClipboard}
                  className={`
                      flex w-24 items-center justify-center gap-2 rounded-xl py-2.5 
                      text-[10px] font-bold uppercase tracking-widest transition-all duration-300
                      ${copied 
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                      : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                      }
                  `}
                >
                {copied ? (
                    <>
                    <Check size={12} strokeWidth={3} />
                    <span>Copied</span>
                    </>
                ) : (
                    <>
                    <Copy size={12} strokeWidth={3} />
                    <span>Copy</span>
                    </>
                )}
                </button>
            </div>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div 
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="group relative rounded-3xl border border-white/10 bg-white/[0.01] p-8 transition-all hover:bg-white/[0.03] hover:border-white/20"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 transition-transform duration-500 group-hover:scale-110">
              <Linkedin size={24} />
            </div>
            <h3 className="text-xl font-medium text-white">LinkedIn</h3>
            <p className="mt-2 text-sm text-white/50 leading-relaxed">
              For professional networking, <br /> mutual connections, and formal inquiries.
            </p>
            
            <a 
              href="https://www.linkedin.com/in/chandan-dakka-805068360/" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-black transition-all hover:bg-neutral-200 active:scale-[0.98]"
            >
              Connect with me <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Improved Footer */}
        <div 
          className="mt-24 flex flex-col items-center justify-between border-t border-white/5 pt-12 sm:flex-row gap-8"
        >
          <div className="flex items-center gap-3 text-white/30">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Open to opportunities</span>
          </div>

          <div className="flex items-center gap-8">
            <a 
              href="/chandan-resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 transition-colors hover:text-indigo-400"
            >
              <FileText size={12} /> Resume
            </a>
            <a 
              href="#home" 
              className="text-[10px] font-bold uppercase tracking-widest text-white/40 transition-colors hover:text-white"
            >
              Back to top
            </a>
          </div>
          
          <div className="text-right">
             <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/20">
              Have a great day — Chandan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}