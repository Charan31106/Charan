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
    <section id="dna" className="py-24 relative bg-transparent border-y border-navy-800 overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-navy-950)_80%)] opacity-90 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader 
            number="03" 
            title="Engineering DNA" 
            subtitle="I work across the stack — from physical sensing to intelligent decision-making."
          />
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-navy-700 bg-navy-800/50 rounded-sm">
            <div className="w-1.5 h-1.5 bg-electric-blue rounded-full animate-pulse motion-reduce:animate-none" />
            <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">Live Architecture</span>
          </div>
        </div>

        {/* Tree Architecture Layout */}
        <div className="relative flex flex-col items-center mt-8">
          
          {/* ENGINEERING CORE */}
          <div className="flex flex-col items-center">
            <div className="px-8 py-3 border border-electric-blue/40 bg-electric-blue/10 text-electric-blue font-mono text-sm tracking-widest rounded-sm shadow-[0_0_20px_rgba(59,130,246,0.15)] flex items-center gap-3">
              <div className="w-2 h-2 bg-electric-blue rounded-full" />
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
                      "relative flex flex-col p-6 border rounded-sm transition-all duration-500 h-full",
                      isDomainFocused ? "border-electric-blue/50 bg-navy-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.2)]" : "border-navy-700/60 bg-navy-900/40",
                      isDomainDimmed ? "opacity-30 blur-[0.5px]" : "opacity-100"
                    )}
                    onMouseEnter={() => setHoveredDomain(domain.id)}
                    onMouseLeave={() => setHoveredDomain(null)}
                  >
                    <div className="mb-6 flex flex-col items-start">
                      <h3 className={cn(
                        "text-sm font-mono tracking-widest transition-colors",
                        isDomainFocused ? "text-electric-blue" : "text-gray-300"
                      )}>
                        {domain.title}
                      </h3>
                      <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mt-1">{domain.layer}</p>
                      
                      {/* Motif Tag */}
                      <div className="flex items-center gap-2 mt-4 px-2 py-1 bg-navy-950 border border-navy-700 rounded-sm">
                        <div className="w-1 h-1 bg-cyan-accent rounded-full" />
                        <span className="text-[9px] text-cyan-accent/80 font-mono">{domain.motif}</span>
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
                              isActive ? "border-electric-blue/60 bg-electric-blue/10 text-white translate-x-1" : "border-navy-700/40 bg-navy-950/50 text-gray-400",
                              isDimmed && !isActive ? "opacity-30" : "opacity-100",
                              isHoveredExactly ? "border-electric-blue bg-electric-blue/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]" : ""
                            )}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <span>{skill}</span>
                            <div className={cn(
                              "w-1.5 h-1.5 rounded-full transition-colors",
                              isActive ? "bg-electric-blue" : "bg-navy-700"
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
