"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { StatusIndicator } from "./ui/status-indicator";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "SYSTEMS", href: "#systems" },
  { name: "DNA", href: "#dna" },
  { name: "LAB", href: "#lab" },
  { name: "JOURNEY", href: "#journey" },
  { name: "CONTACT", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-navy-900/80 backdrop-blur-md border-b border-navy-700/50"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 xl:px-24 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <a href="#" className="text-white font-medium tracking-widest text-lg z-50">
            CHARAN C
          </a>
          <div className="hidden lg:block">
            <StatusIndicator label="AVAILABLE TO BUILD" status="online" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-mono tracking-widest transition-colors ${
                  isActive ? "text-electric-blue" : "text-gray-400 hover:text-white"
                }`}
              >
                [{link.name}]
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 h-[100dvh] w-full bg-navy-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-mono tracking-widest transition-colors ${
                      isActive ? "text-electric-blue" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    [{link.name}]
                  </a>
                );
              })}
              <div className="mt-8">
                <StatusIndicator label="AVAILABLE TO BUILD" status="online" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
