"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/socials";
import { FaGithub } from "react-icons/fa";
import { HeroSystemVisualization } from "./hero-visual";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pt-24 pb-12">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0B1018_1px,transparent_1px),linear-gradient(to_bottom,#0B1018_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left: Introduction (approx 45%) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:gap-8 lg:col-span-5 relative z-10"
        >
          {/* Status Indicator */}
          <div className="flex items-center gap-3 text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-gray-400">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-sm">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse motion-reduce:animate-none" />
              SYS.ONLINE
            </div>
            <span className="text-navy-600">/</span>
            <span>MODE: ENGINEERING</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-[clamp(3rem,6vw,6rem)] font-light tracking-tight text-white leading-[1.1]">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-electric-blue font-light">
              {personalInfo.title}
            </p>
          </div>

          <p className="text-lg text-gray-300 max-w-lg font-light leading-relaxed border-l-2 border-electric-blue/50 pl-4">
            {personalInfo.heroSubtitle}
          </p>

          {/* Focus Areas as Technical Modules */}
          <div className="flex flex-wrap gap-2 mt-2">
            <FocusModule label="HARDWARE" />
            <FocusModule label="SOFTWARE" />
            <FocusModule label="AI / EMBEDDED" />
            <FocusModule label="ROBOTICS" />
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4 mt-4">
            <a href="#systems" className="px-6 py-3 bg-electric-blue text-navy-950 text-sm font-mono tracking-wide hover:bg-electric-blue/90 transition-colors rounded-sm">
              Explore Systems
            </a>
            <a href="https://github.com/Charan31106" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-navy-600 text-gray-300 text-sm font-mono tracking-wide hover:text-white hover:border-navy-400 transition-colors rounded-sm flex items-center gap-2">
              <FaGithub className="w-4 h-4" />
              View GitHub
            </a>
          </div>
        </motion.div>

        {/* Right: Abstract Engineering System (Desktop approx 55%) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="lg:col-span-7 h-full w-full relative flex items-center justify-center mt-12 lg:mt-0"
        >
          <HeroSystemVisualization />
        </motion.div>
      </div>
    </section>
  );
}

function FocusModule({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-navy-900/40 border border-navy-700/50 rounded-sm">
      <div className="w-1 h-1 bg-gray-500 rounded-full" />
      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{label}</span>
    </div>
  );
}
