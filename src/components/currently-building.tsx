"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "./ui/section-header";
import { cn } from "@/lib/utils";

type MotifType = "SENSE" | "CONNECT" | "COMPUTE" | "VISUALIZE" | "DECIDE";

interface EngineeringDirection {
  id: string;
  label: string;
  status: "EXPLORING" | "BUILDING" | "LEARNING";
  description: string;
  motif: MotifType;
  tags: string[];
}

const directions: EngineeringDirection[] = [
  {
    id: "hardware",
    label: "HARDWARE",
    status: "EXPLORING",
    description: "Strengthening fundamentals in electronics, microcontrollers, sensors, circuit design and embedded systems.",
    motif: "SENSE",
    tags: ["Arduino", "ESP32", "Sensors", "Embedded Systems", "Circuit Design"],
  },
  {
    id: "intelligent-systems",
    label: "AI / DATA",
    status: "EXPLORING",
    description: "Exploring how AI, data and computation can make engineering systems more adaptive, analytical and useful.",
    motif: "COMPUTE",
    tags: ["AI", "Data Systems", "Computer Vision", "Intelligent Interfaces", "Simulation"],
  },
  {
    id: "robotics",
    label: "ROBOTICS",
    status: "BUILDING",
    description: "Continuing to explore autonomous and robotic systems through sensors, control logic, embedded hardware and system integration.",
    motif: "DECIDE",
    tags: ["Autonomous Systems", "Robotics", "Sensors", "Control", "Embedded Systems"],
  },
  {
    id: "system-software",
    label: "SOFTWARE",
    status: "BUILDING",
    description: "Building software systems that connect engineering data, interfaces, automation and real-world applications.",
    motif: "CONNECT",
    tags: ["React", "Node.js", "FastAPI", "Python", "JavaScript", "C/C++"],
  }
];

const systemPath: MotifType[] = ["SENSE", "CONNECT", "COMPUTE", "VISUALIZE", "DECIDE"];
const currentLearning = ["Embedded Systems", "AI / Data", "Robotics", "System Architecture", "ECE Fundamentals"];

export function CurrentlyBuilding() {
  const [hoveredMotif, setHoveredMotif] = useState<MotifType | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="currently-building" className="py-24 relative bg-[#04070a] border-t border-navy-800/50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader 
          number="07" 
          title="Currently Building" 
          subtitle="Systems in motion."
        />

        {/* Engineering Status Board */}
        <div className="mt-16 border border-navy-700 bg-navy-900/30 p-6 md:p-12 relative overflow-hidden rounded-sm shadow-2xl">
          {/* Status Header */}
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono tracking-widest text-gray-500 uppercase border-b border-navy-700/50 pb-6 mb-12">
            <span className="text-electric-blue flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
              SYS.STATUS / ACTIVE
            </span>
            <span className="hidden sm:inline-block">/</span>
            <span>EXPLORATION PHASE</span>
            <span className="hidden sm:inline-block">/</span>
            <span>02 DISCIPLINE</span>
            <span className="hidden sm:inline-block">/</span>
            <span>ECE</span>
          </div>

          {/* Central Engineering Identity */}
          <div className="text-center mb-16 relative z-10">
            <h3 className="text-base md:text-xl lg:text-2xl font-mono text-white tracking-widest mb-4">
              ECE <span className="text-electric-blue/50 mx-1 md:mx-3">×</span> SOFTWARE <span className="text-electric-blue/50 mx-1 md:mx-3">×</span> AI <span className="text-electric-blue/50 mx-1 md:mx-3">×</span> ROBOTICS
            </h3>
            <p className="text-gray-400 text-sm md:text-base font-light tracking-wide">
              Building toward multidisciplinary systems.
            </p>
          </div>

          {/* DESKTOP LAYOUT (Horizontal Path & Grid) */}
          <div className="hidden lg:block relative z-10">
            {/* The Path */}
            <div className="flex items-center justify-center gap-4 mb-16">
              {systemPath.map((motif, index) => (
                <div key={motif} className="flex items-center gap-4">
                  <div className={cn(
                    "px-4 py-2 border text-[10px] font-mono tracking-widest transition-all duration-500 rounded-sm", 
                    hoveredMotif === motif 
                      ? "border-electric-blue bg-electric-blue/10 text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]" 
                      : "border-navy-700 bg-navy-800/30 text-gray-500"
                  )}>
                    {motif}
                  </div>
                  {index < systemPath.length - 1 && (
                    <div className="w-12 h-px bg-navy-700 relative overflow-hidden">
                      {!prefersReducedMotion && (
                        <motion.div 
                          className="absolute top-0 left-0 h-full w-4 bg-electric-blue/50"
                          animate={{ x: ["-400%", "400%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* The 4 Directions Grid */}
            <div className="grid grid-cols-2 gap-8">
              {directions.map((dir) => (
                <div 
                  key={dir.id}
                  onMouseEnter={() => setHoveredMotif(dir.motif)}
                  onMouseLeave={() => setHoveredMotif(null)}
                  className={cn(
                    "group p-8 border transition-colors duration-500 rounded-sm relative overflow-hidden",
                    hoveredMotif === dir.motif 
                      ? "border-electric-blue/50 bg-navy-800/50" 
                      : "border-navy-700 bg-navy-900/40 hover:bg-navy-800/40",
                    hoveredMotif && hoveredMotif !== dir.motif && "opacity-50 blur-[1px]"
                  )}
                  tabIndex={0}
                  onFocus={() => setHoveredMotif(dir.motif)}
                  onBlur={() => setHoveredMotif(null)}
                >
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <h4 className="text-xl font-medium text-white group-hover:text-electric-blue transition-colors duration-300">
                      {dir.label}
                    </h4>
                    <span className="text-[10px] font-mono tracking-widest text-cyan-accent border border-cyan-accent/30 px-3 py-1 rounded-sm bg-cyan-accent/5">
                      {dir.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-400 font-light leading-relaxed mb-8 relative z-10 min-h-[60px]">
                    {dir.description}
                  </p>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {dir.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-[9px] font-mono border border-navy-700 bg-navy-950/50 text-gray-500 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Subtle Motif Tag */}
                  <div className="absolute right-[-10px] bottom-[-10px] text-[60px] font-mono font-bold text-navy-800/30 group-hover:text-electric-blue/5 transition-colors duration-500 select-none pointer-events-none">
                    {dir.motif}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE / TABLET LAYOUT (Vertical Path & Cards) */}
          <div className="lg:hidden relative z-10 pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-navy-700">
              {!prefersReducedMotion && (
                <motion.div 
                  className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent via-electric-blue/50 to-transparent"
                  animate={{ y: ["-100%", "800%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
              )}
            </div>

            <div className="flex flex-col gap-8">
              {directions.map((dir, i) => (
                <div key={dir.id} className="relative">
                  {/* Branch line & Node */}
                  <div className="absolute -left-4 top-8 w-4 h-px bg-navy-700" />
                  <div className={cn(
                    "absolute -left-[18px] top-[30px] w-2 h-2 rounded-full border border-navy-700 transition-colors duration-300",
                    hoveredMotif === dir.motif ? "bg-electric-blue" : "bg-navy-900"
                  )} />

                  <div 
                    onClick={() => setHoveredMotif(hoveredMotif === dir.motif ? null : dir.motif)}
                    className={cn(
                      "p-6 border rounded-sm relative overflow-hidden transition-all duration-300",
                      hoveredMotif === dir.motif 
                        ? "border-electric-blue/50 bg-navy-800/50" 
                        : "border-navy-700 bg-navy-900/40"
                    )}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <h4 className={cn("text-lg font-medium transition-colors duration-300", hoveredMotif === dir.motif ? "text-electric-blue" : "text-white")}>
                        {dir.label}
                      </h4>
                      <div className="flex items-center gap-3">
                         <span className={cn(
                           "text-[9px] font-mono tracking-widest px-2 py-1 rounded-sm border transition-colors duration-300",
                           hoveredMotif === dir.motif ? "text-electric-blue border-electric-blue/50 bg-electric-blue/10" : "text-gray-500 border-navy-700 bg-navy-800/50"
                         )}>
                           {dir.motif}
                         </span>
                         <span className="text-[9px] font-mono tracking-widest text-cyan-accent border border-cyan-accent/30 px-2 py-1 rounded-sm bg-cyan-accent/5">
                           {dir.status}
                         </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                      {dir.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {dir.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-[9px] font-mono border border-navy-700 bg-navy-950/50 text-gray-500 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Learning Strip */}
          <div className="mt-16 pt-8 border-t border-navy-700/50 flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
             <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest shrink-0">
                CURRENT LEARNING
             </div>
             <div className="flex flex-wrap gap-3">
                {currentLearning.map(topic => (
                  <span key={topic} className="text-xs font-mono text-gray-400">
                    {topic}
                  </span>
                ))}
             </div>
          </div>

          {/* Current Engineering Question */}
          <div className="mt-8 pt-8 border-t border-navy-700/50 relative z-10">
             <h4 className="text-[10px] font-mono text-electric-blue uppercase tracking-widest mb-3">
               CURRENT ENGINEERING QUESTION
             </h4>
             <p className="text-sm md:text-base text-gray-300 font-light italic max-w-3xl leading-relaxed">
               "How can hardware, intelligent software and autonomous systems work together to solve real-world problems?"
             </p>
          </div>

          {/* Future Direction */}
          <div className="mt-8 pt-8 border-t border-navy-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest shrink-0">
                NEXT DIRECTION
              </div>
              <p className="text-xs md:text-sm text-gray-400 font-light text-left sm:text-right max-w-xl">
                Deeper embedded systems. More capable intelligent interfaces. More autonomous machines. More real-world systems.
              </p>
          </div>

          {/* Subtle Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        </div>

        {/* Transition to Contact */}
        <div className="mt-24 flex items-center justify-center gap-4 text-[10px] font-mono tracking-widest text-gray-500 uppercase">
          <span>ACTIVE DEVELOPMENT</span>
          <div className="w-12 md:w-32 h-px bg-navy-600 relative overflow-hidden">
             {!prefersReducedMotion && (
               <motion.div 
                 className="absolute top-0 left-0 w-8 h-full bg-electric-blue/50"
                 animate={{ x: ["-100%", "400%"] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
             )}
          </div>
          <span className="text-electric-blue/70">NEXT SYSTEM</span>
        </div>
      </div>
    </section>
  );
}
