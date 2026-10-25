"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { openResumeModal } from "./resume-modal";

const navLinks = [
  { name: "SYSTEMS", href: "#systems", key: "1" },
  { name: "LAB", href: "#lab", key: "2" },
  { name: "JOURNEY", href: "#journey", key: "3" },
  { name: "EVIDENCE", href: "#beyond", key: "4" },
  { name: "BENCH", href: "#currently-building", key: "5" },
  { name: "CONTACT", href: "#contact", key: "6" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section accurately
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      const scrollPos = window.scrollY + 260;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = section;
            break;
          }
        }
      }

      // If at bottom of page, highlight contact
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
        current = "contact";
      }

      setActiveSection(current);
    };
    
    // Keyboard shortcuts for numbers 1 to 6 (silent power-user feature)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey
      ) {
        return;
      }

      const link = navLinks.find(l => l.key === e.key);
      if (link) {
        e.preventDefault();
        const target = document.querySelector(link.href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-navy-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(6,14,34,0.7)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 xl:px-24 flex justify-between items-center">
        {/* Brand & Live Status */}
        <div className="flex items-center gap-4 lg:gap-6">
          <a 
            href="#" 
            className="text-white font-medium tracking-[0.25em] text-sm sm:text-base hover:text-cyan-300 transition-colors z-50"
          >
            CHARAN C
          </a>
          
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900/60 border border-cyan-500/20 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-gray-300 uppercase">
              AVAILABLE TO BUILD
            </span>
          </div>
        </div>

        {/* Desktop Nav - Refined Frosted Glass Capsule */}
        <div className="hidden md:flex items-center gap-3">
          <nav className="flex items-center gap-1 p-1 bg-navy-900/80 border border-cyan-500/25 rounded-full backdrop-blur-xl shadow-[0_4px_24px_rgba(6,14,34,0.5)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-xs font-mono tracking-wider transition-all duration-200 px-3.5 py-1.5 rounded-full relative flex items-center gap-2",
                    isActive
                      ? "text-cyan-300 bg-cyan-500/15 border border-cyan-400/40 shadow-[0_0_12px_rgba(34,211,238,0.25)] font-medium"
                      : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                  )}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse" />
                  )}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Executive Resume Pill */}
          <button
            onClick={openResumeModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 hover:bg-cyan-400 hover:text-navy-950 border border-cyan-400/40 text-cyan-300 font-mono text-xs tracking-wider transition-all duration-200 shadow-[0_0_15px_rgba(34,211,238,0.15)] cursor-pointer"
            title="View Executive Resume"
          >
            <FileText size={13} />
            <span>RESUME</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 h-[100dvh] w-full bg-navy-950/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 px-6"
            >
              <div className="flex flex-col items-center gap-4 w-full max-w-xs">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-sm font-mono tracking-widest transition-colors w-full text-center py-2.5 rounded-full flex items-center justify-center gap-2",
                        isActive
                          ? "text-cyan-300 bg-cyan-500/15 border border-cyan-400/30"
                          : "text-gray-300 hover:text-white"
                      )}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                      <span>{link.name}</span>
                    </a>
                  );
                })}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openResumeModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 mt-2 rounded-full bg-cyan-400 text-navy-950 font-mono text-xs font-semibold tracking-wider hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                >
                  <FileText size={14} />
                  <span>VIEW RESUME // CV</span>
                </button>
              </div>

              <div className="mt-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border border-cyan-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono tracking-wider text-gray-300">
                  AVAILABLE TO BUILD
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

