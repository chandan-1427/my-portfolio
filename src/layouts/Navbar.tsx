import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Intro", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // 2. Active Section Observer
  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "skills", "contact"];
    
    const observerOptions = {
      // This looks at the middle of the screen
      rootMargin: "-20% 0px -70% 0px", 
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    
  const handleScroll = () => {
    // Check if user has reached the bottom of the page
    const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
    
    if (isBottom) {
      setActiveSection("contact");
    }
  };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6">
      <nav className="mx-auto sm:max-w-2xl relative">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/20 backdrop-blur-xl px-2 py-2 shadow-2xl overflow-hidden relative">
          
          {/* LOGO */}
          <motion.a
            href="#home"
            initial="initial"
            whileHover="hover"
            className="ml-4 flex items-center"
          >
            <span className="relative text-xl font-black tracking-tighter text-white uppercase flex items-center">
              <motion.span
                variants={{
                  initial: { letterSpacing: "-0.05em" },
                  hover: { letterSpacing: "0.02em" }
                }}
                className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                Chandan
              </motion.span>
              <motion.span className="ml-0.5 text-indigo-500 inline-block">.</motion.span>
            </span>
          </motion.a>

          <ul className="hidden md:flex items-center gap-1 bg-white/[0.03] rounded-full p-1.5 border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.label} className="relative flex items-center justify-center">
                  <a
                    href={item.href}
                    className={`
                      relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300
                      ${isActive ? "text-white" : "text-white/50 hover:text-white/80"}
                    `}
                  >
                    {item.label}
                    
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 z-0 rounded-full bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ACTION AREA (Mobile Badge + CTA) */}
          <div className="flex items-center gap-3">
            {/* "Where we are now" Mobile Badge */}
            <AnimatePresence mode="wait">
              <motion.span
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20"
              >
                {activeSection}
              </motion.span>
            </AnimatePresence>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                hidden md:flex items-center justify-center 
                px-6 py-2 text-sm font-bold uppercase tracking-wider
                text-white bg-gray-500/10 
                rounded-full border border-gray-500/40
                backdrop-blur-md
                shadow-[inset_0_0_12px_rgba(99,102,241,0.2)]
                transition-all duration-200
                hover:bg-indigo-500/20
                hover:border-indigo-500/50
                hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]
              "
            >
              Contact
            </motion.a>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-white/80"
            >
              <div className="flex flex-col gap-1.5 items-end">
                <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0, width: isOpen ? 24 : 18 }} className="h-0.5 bg-current rounded-full" />
                <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="h-0.5 w-6 bg-current rounded-full" />
                <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0, width: isOpen ? 24 : 12 }} className="h-0.5 bg-current rounded-full" />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-4 right-4 mt-4 rounded-[2rem] border border-white/10 bg-black/60 backdrop-blur-2xl p-3 md:hidden overflow-hidden"
            >
              <ul className="flex flex-col gap-1">
                {[...navItems, { label: "Contact", href: "#contact" }].map((item, i) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <motion.li key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-6 py-4 rounded-2xl text-lg font-medium transition-all ${
                          isActive ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}