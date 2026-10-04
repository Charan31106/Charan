"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { journeyTimeline } from "@/data/journey";
import { SectionHeader } from "./ui/section-header";
import { cn } from "@/lib/utils";

export function Journey() {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="journey" className="py-32 relative bg-[#060a10]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <SectionHeader 
            number="04" 
            title="Engineering Journey" 
            subtitle="Building the system, one layer at a time."
          />
          <div className="hidden md:flex items-center gap-4 text-[10px] font-mono text-gray-500 tracking-widest">
            <span>ENGINEERING EVOLUTION / 01—05</span>
            <span className="px-2 py-1 border border-navy-700 bg-navy-800/30 rounded-sm">MODE: BUILDING</span>
          </div>
        </div>

        <div className="relative mt-16 lg:mt-32">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-[7px] left-[10%] right-[10%] w-[80%] h-px bg-navy-700 z-0 overflow-hidden">
            {!prefersReducedMotion && (
              <motion.div 
                className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-70"
                animate={{ x: ["-100%", "400%"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {journeyTimeline.map((node, index) => {
              const isHovered = hoveredStage === node.id;
              const isDimmed = hoveredStage !== null && hoveredStage !== node.id;
              const isLast = index === journeyTimeline.length - 1;

              return (
                <div 
                  key={node.id} 
                  className={cn(
                    "relative flex lg:flex-col gap-6 lg:gap-0 group lg:items-center transition-all duration-500",
                    isDimmed ? "opacity-40 blur-[0.5px]" : "opacity-100"
                  )}
                  onMouseEnter={() => setHoveredStage(node.id)}
                  onMouseLeave={() => setHoveredStage(null)}
                >
                  {/* Mobile Vertical Line */}
                  {!isLast && (
                    <div className="absolute left-[7px] top-[24px] bottom-[-32px] w-px bg-navy-700 lg:hidden overflow-hidden">
                      {!prefersReducedMotion && (
                        <motion.div 
                          className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent via-electric-blue/50 to-transparent"
                          animate={{ y: ["-100%", "400%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                        />
                      )}
                    </div>
                  )}

                  {/* Node Dot */}
                  <div className="flex-none mt-1 lg:mt-0 relative z-10 bg-[#060a10] p-1">
                    <div className={cn(
                      "w-3 h-3 rounded-full border-2 transition-all duration-300",
                      isHovered ? "border-electric-blue bg-electric-blue/20 scale-150 shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "border-navy-500 bg-navy-900"
                    )} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col pb-12 lg:pb-0 lg:mt-8 lg:items-center lg:text-center w-full">
                    <div className="flex items-center gap-3 lg:justify-center">
                      <span className={cn(
                        "text-[10px] font-mono px-1.5 py-0.5 rounded-sm transition-colors",
                        isHovered ? "text-electric-blue bg-electric-blue/10 border border-electric-blue/30" : "text-gray-500 bg-navy-800/50 border border-navy-700"
                      )}>
                        {node.number}
                      </span>
                      <h3 className={cn(
                        "text-sm font-mono tracking-widest transition-colors duration-300",
                        isHovered ? "text-white" : "text-gray-300"
                      )}>
                        {node.title}
                      </h3>
                    </div>
                    
                    <p className={cn(
                      "text-[10px] uppercase font-mono mt-3 lg:mt-4 tracking-widest transition-colors",
                      isHovered ? "text-cyan-accent" : "text-cyan-accent/50"
                    )}>
                      {node.domain}
                    </p>
                    
                    <p className="text-sm lg:text-xs text-gray-300 mt-2 font-light">
                      {node.subtitle}
                    </p>
                    
                    <p className="text-sm lg:text-[11px] lg:leading-relaxed text-gray-500 mt-2 font-light max-w-[280px]">
                      {node.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 lg:mt-6 lg:justify-center">
                      {node.tags.map(tag => (
                        <span key={tag} className={cn(
                          "px-2 py-1 text-[10px] lg:text-[9px] font-mono border rounded-sm transition-colors duration-300",
                          isHovered ? "border-electric-blue/40 text-gray-200 bg-electric-blue/5" : "border-navy-700/60 text-gray-500 bg-navy-900"
                        )}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Current Phase Marker for the last stage */}
                    {isLast && (
                      <div className="mt-8 flex items-center gap-2 border border-violet-accent/30 bg-violet-accent/5 px-3 py-1.5 rounded-sm">
                        <div className="w-1.5 h-1.5 bg-violet-accent rounded-full animate-pulse motion-reduce:animate-none" />
                        <span className="text-[10px] text-violet-accent font-mono tracking-widest uppercase">CURRENT PHASE</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Transition to Beyond Building */}
        <div className="mt-24 lg:mt-32 flex flex-col items-center">
          <div className="w-px h-16 bg-gradient-to-b from-navy-600 to-transparent" />
          <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mt-4">
            SYSTEM PROGRESSION ──→ DOCUMENTATION
          </div>
        </div>
      </div>
    </section>
  );
}
