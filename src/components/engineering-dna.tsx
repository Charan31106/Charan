"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "./ui/section-header";
import { cn } from "@/lib/utils";

const domains = [
  {
    id: 'hardware',
    title: 'HARDWARE',
    layer: 'PHYSICAL LAYER',
    motif: 'SENSE',
    skills: ['Arduino', 'ESP32', 'Circuit Design', 'Sensors', 'Robotics']
  },
  {
    id: 'software',
    title: 'SOFTWARE',
    layer: 'APPLICATION LAYER',
    motif: 'CONNECT',
    skills: ['React', 'Node.js', 'FastAPI', 'MongoDB', 'JavaScript', 'C/C++', 'Python']
  },
  {
    id: 'intelligence',
    title: 'INTELLIGENCE',
    layer: 'DECISION LAYER',
    motif: 'COMPUTE / DECIDE',
    skills: ['AI', 'TinyML', 'Computer Vision', 'Data Systems', 'Automation']
  },
  {
    id: 'tools',
    title: 'TOOLS',
    layer: 'BUILD LAYER',
    motif: 'ENABLE',
    skills: ['GitHub', 'Vercel', 'MATLAB', 'AI Workflow Tools']
  }
];

// Meaningful cross-domain relationships
const crossConnections: Record<string, string[]> = {
  'ESP32': ['TinyML', 'Sensors', 'Node.js', 'C/C++'],
  'Sensors': ['AI', 'Arduino', 'ESP32', 'Data Systems'],
  'Python': ['Data Systems', 'AI', 'FastAPI', 'Computer Vision'],
  'FastAPI': ['AI', 'React', 'Python'],
  'Arduino': ['Robotics', 'Sensors', 'C/C++'],
  'React': ['Node.js', 'FastAPI', 'Data Systems'],
  'AI': ['Computer Vision', 'Data Systems', 'Python', 'Sensors'],
  'TinyML': ['ESP32', 'C/C++', 'Sensors'],
  'Computer Vision': ['AI', 'Python', 'Robotics'],
  'Robotics': ['Arduino', 'Sensors', 'C/C++', 'AI'],
};

export function EngineeringDNA() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const isSkillActive = (skill: string) => {
    if (hoveredSkill === skill) return true;
    if (hoveredSkill && crossConnections[hoveredSkill]?.includes(skill)) return true;
    if (hoveredSkill && crossConnections[skill]?.includes(hoveredSkill)) return true;
    return false;
  };

  const isSkillDimmed = (skill: string) => {
    if (!hoveredSkill && !hoveredDomain) return false;
    if (hoveredSkill) return !isSkillActive(skill);
    if (hoveredDomain) {
      const domain = domains.find(d => d.id === hoveredDomain);
      return !domain?.skills.includes(skill);
    }
    return false;
  };

  return (
    <section id="dna" className="py-24 relative bg-transparent border-y border-cyan-500/20 overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,14,34,0.7)_80%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader 
            number="03" 
            title="Engineering DNA" 
            subtitle="I work across the stack — from physical sensing to intelligent decision-making."
          />
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-cyan-500/20 bg-navy-900/60 rounded-sm backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse motion-reduce:animate-none" />
            <span className="text-[10px] font-mono text-cyan-300/80 tracking-widest uppercase">Live Architecture</span>
          </div>
        </div>

        {/* Tree Architecture Layout */}
        <div className="relative flex flex-col items-center mt-8">
          
          {/* ENGINEERING CORE */}
          <div className="flex flex-col items-center">
            <div className="px-8 py-3 border border-cyan-400/50 bg-cyan-500/10 text-cyan-300 font-mono text-sm tracking-widest rounded-sm shadow-[0_0_25px_rgba(34,211,238,0.25)] flex items-center gap-3 backdrop-blur-md">
              <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
              ENGINEERING CORE
            </div>
            <div className="w-px h-8 bg-navy-600 hidden lg:block relative overflow-hidden">
              {!prefersReducedMotion && (
                <motion.div className="absolute top-0 left-0 w-full h-4 bg-electric-blue/50" animate={{ y: [0, 32] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
              )}
            </div>
          </div>

          {/* TOP HORIZONTAL BAR (Desktop) spans ~75% to connect 4 columns */}
          <div className="w-[75%] h-px bg-navy-600 hidden lg:block relative overflow-hidden mx-auto">
             {!prefersReducedMotion && (
               <motion.div className="absolute top-0 left-1/2 w-16 h-full bg-gradient-to-r from-transparent via-electric-blue/60 to-transparent" animate={{ x: ["-500%", "500%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
             )}
          </div>

          {/* DOMAINS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8 lg:mt-0 relative z-10">
            {domains.map(domain => {
              const isDomainFocused = hoveredDomain === domain.id || (hoveredSkill && domain.skills.includes(hoveredSkill));
              const isDomainDimmed = (hoveredDomain || hoveredSkill) && !isDomainFocused;

              return (
                <div key={domain.id} className="flex flex-col">
                  {/* Top connector line */}
                  <div className="w-px h-6 bg-navy-600 mx-auto hidden lg:block" />
                  
                  {/* Domain Card */}
                  <div 
                    className={cn(
                      "relative flex flex-col p-6 border rounded-sm transition-all duration-500 h-full backdrop-blur-md",
                      isDomainFocused ? "border-cyan-400/60 bg-navy-800/90 shadow-[0_4px_25px_rgba(6,14,34,0.6)]" : "border-cyan-500/20 bg-navy-900/60",
                      isDomainDimmed ? "opacity-30 blur-[0.5px]" : "opacity-100"
                    )}
                    onMouseEnter={() => setHoveredDomain(domain.id)}
                    onMouseLeave={() => setHoveredDomain(null)}
                  >
                    <div className="mb-6 flex flex-col items-start">
                      <h3 className={cn(
                        "text-sm font-mono tracking-widest transition-colors",
                        isDomainFocused ? "text-cyan-300" : "text-gray-200"
                      )}>
                        {domain.title}
                      </h3>
                      <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider mt-1">{domain.layer}</p>
                      
                      {/* Motif Tag */}
                      <div className="flex items-center gap-2 mt-4 px-2 py-1 bg-navy-950/80 border border-cyan-500/30 rounded-sm">
                        <div className="w-1 h-1 bg-cyan-accent rounded-full shadow-[0_0_6px_#22d3ee]" />
                        <span className="text-[9px] text-cyan-300 font-mono">{domain.motif}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-auto">
                      {domain.skills.map(skill => {
                        const isActive = isSkillActive(skill);
                        const isHoveredExactly = hoveredSkill === skill;
                        const isDimmed = isSkillDimmed(skill);

                        return (
                          <div
                            key={skill}
                            className={cn(
                              "px-3 py-2 text-xs md:text-sm font-mono transition-all duration-300 border rounded-sm cursor-default flex items-center justify-between group",
                              isActive ? "border-cyan-400/70 bg-cyan-500/15 text-white translate-x-1 shadow-[0_0_12px_rgba(34,211,238,0.2)]" : "border-cyan-500/15 bg-navy-950/70 text-gray-300",
                              isDimmed && !isActive ? "opacity-30" : "opacity-100",
                              isHoveredExactly ? "border-cyan-400 bg-cyan-500/25 shadow-[0_0_15px_rgba(34,211,238,0.3)]" : ""
                            )}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <span>{skill}</span>
                            <div className={cn(
                              "w-1.5 h-1.5 rounded-full transition-colors",
                              isActive ? "bg-cyan-400 shadow-[0_0_6px_#22d3ee]" : "bg-navy-700"
                            )} />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom connector line */}
                  <div className="w-px h-6 bg-navy-600 mx-auto hidden lg:block" />
                </div>
              );
            })}
          </div>

          {/* BOTTOM HORIZONTAL BAR (Desktop) */}
          <div className="w-[75%] h-px bg-navy-600 mx-auto hidden lg:block relative overflow-hidden">
             {!prefersReducedMotion && (
               <motion.div className="absolute top-0 left-1/2 w-16 h-full bg-gradient-to-r from-transparent via-violet-accent/60 to-transparent" animate={{ x: ["500%", "-500%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
             )}
          </div>

          {/* INTEGRATION & REAL SYSTEMS */}
          <div className="flex flex-col items-center mt-8 lg:mt-0">
            <div className="w-px h-8 bg-navy-600 hidden lg:block" />
            <div className="px-6 py-2 border border-violet-accent/30 bg-violet-accent/5 text-violet-accent font-mono text-xs tracking-widest rounded-sm mb-4 lg:mb-0">
              SYSTEM INTEGRATION
            </div>
            <div className="w-px h-6 bg-navy-600 hidden lg:block relative overflow-hidden">
               {!prefersReducedMotion && (
                 <motion.div className="absolute top-0 left-0 w-full h-4 bg-violet-accent/50" animate={{ y: [0, 24] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
               )}
            </div>
            <div className="px-8 py-3 border border-white/20 bg-white/5 text-white font-mono text-sm tracking-widest rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              REAL-WORLD SYSTEMS
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
