"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Stage = 'none' | 'sense' | 'connect' | 'compute' | 'visualize' | 'decide';

const STAGES = [
  { id: 'sense', x: '20%', y: '15%', label: 'SENSE', sub: 'Sensors / Hardware', tags: ['SENSOR', 'IMU', 'TEMP'] },
  { id: 'connect', x: '80%', y: '30%', label: 'CONNECT', sub: 'ESP32 / Networks', tags: ['ESP32', 'LoRa', 'WIFI'] },
  { id: 'compute', x: '50%', y: '50%', label: 'COMPUTE', sub: 'System Core / AI', tags: ['EDGE', 'AI', 'LOGIC'] },
  { id: 'visualize', x: '20%', y: '70%', label: 'VISUALIZE', sub: 'Data / Interfaces', tags: ['DATA', 'MODEL', 'UI'] },
  { id: 'decide', x: '80%', y: '85%', label: 'DECIDE', sub: 'Action / Automation', tags: ['ACTION', 'CONTROL', 'ALERT'] },
] as const;

export function HeroSystemVisualization() {
  const [activeStage, setActiveStage] = useState<Stage>('none');
  const prefersReducedMotion = useReducedMotion();

  const handleMouseEnter = (stage: Stage) => setActiveStage(stage);
  const handleMouseLeave = () => setActiveStage('none');

  return (
    <div className="relative w-full h-[450px] md:h-[500px] border border-navy-800/40 bg-navy-900/10 backdrop-blur-sm rounded-sm overflow-hidden group">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B1018_100%)] opacity-80" />

      {/* SVG Pipeline Lines */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <defs>
          <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Base Lines */}
        <line x1="20%" y1="15%" x2="80%" y2="30%" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="20%" y1="70%" x2="80%" y2="85%" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

        {/* Animated Lines (Subtle glow) */}
        {!prefersReducedMotion && (
          <>
            <motion.line x1="20%" y1="15%" x2="80%" y2="30%" stroke="#22d3ee" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 0 }} />
            <motion.line x1="80%" y1="30%" x2="50%" y2="50%" stroke="#22d3ee" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1.5 }} />
            <motion.line x1="50%" y1="50%" x2="20%" y2="70%" stroke="#22d3ee" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 3 }} />
            <motion.line x1="20%" y1="70%" x2="80%" y2="85%" stroke="#22d3ee" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 4.5 }} />
          </>
        )}

        {/* The Signal Pulse */}
        {!prefersReducedMotion && (
          <motion.circle
            r="3"
            fill="#fff"
            className="shadow-[0_0_8px_#fff]"
            animate={{
              cx: ["20%", "80%", "50%", "20%", "80%"],
              cy: ["15%", "30%", "50%", "70%", "85%"],
              opacity: [0, 1, 1, 1, 1, 0]
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1, 1]
            }}
          />
        )}
      </svg>

      {/* HTML Nodes */}
      {STAGES.map((stage) => {
        const isActive = activeStage === stage.id;
        const isHoveredAny = activeStage !== 'none';
        const isDimmed = isHoveredAny && !isActive;

        return (
          <div
            key={stage.id}
            className={cn(
              "absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10 transition-all duration-500",
              isDimmed ? "opacity-30 blur-[1px]" : "opacity-100"
            )}
            style={{ left: stage.x, top: stage.y }}
            onMouseEnter={() => handleMouseEnter(stage.id as Stage)}
            onMouseLeave={handleMouseLeave}
          >
            {/* The Visual Node Core */}
            <div className={cn(
              "relative flex items-center justify-center transition-all duration-300",
              stage.id === 'compute' ? "w-16 h-16 md:w-20 md:h-20" : "w-12 h-12 md:w-16 md:h-16"
            )}>
              {/* Outer Ring */}
              <div className={cn(
                "absolute inset-0 border rounded-sm transform transition-all duration-500",
                isActive ? "border-electric-blue/80 bg-electric-blue/5 scale-110 shadow-[0_0_15px_rgba(59,130,246,0.3)] rotate-45" : "border-navy-600 bg-navy-900/50 rotate-0"
              )} />
              
              {/* Inner Icon / Geometry */}
              <div className={cn("relative z-10 transition-all duration-300", isActive ? "scale-110" : "scale-100")}>
                {stage.id === 'sense' && (
                  <div className="flex gap-1">
                    <div className="w-1 h-3 bg-cyan-accent/50" />
                    <div className="w-1 h-5 bg-cyan-accent" />
                    <div className="w-1 h-2 bg-cyan-accent/50" />
                  </div>
                )}
                {stage.id === 'connect' && (
                  <div className="w-4 h-4 border border-violet-accent rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-violet-accent rounded-full animate-ping motion-reduce:animate-none" />
                  </div>
                )}
                {stage.id === 'compute' && (
                  <div className="w-6 h-6 border-2 border-white/80 flex items-center justify-center rotate-45">
                    <div className="w-2 h-2 bg-white" />
                  </div>
                )}
                {stage.id === 'visualize' && (
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-2 h-2 border border-electric-blue" />
                    <div className="w-2 h-2 bg-electric-blue/50" />
                    <div className="w-2 h-2 bg-electric-blue/50" />
                    <div className="w-2 h-2 border border-electric-blue" />
                  </div>
                )}
                {stage.id === 'decide' && (
                  <div className="w-4 h-4 border-2 border-green-400/80 rounded-full flex items-center justify-center relative">
                    <div className="absolute w-6 h-px bg-green-400/50" />
                    <div className="absolute h-6 w-px bg-green-400/50" />
                  </div>
                )}
              </div>
            </div>

            {/* Labels */}
            <div className={cn(
              "flex flex-col items-center text-center transition-all duration-300 cursor-default",
              isActive ? "translate-y-1" : "translate-y-0"
            )}>
              <span className={cn(
                "font-mono text-[9px] md:text-[10px] lg:text-[11px] tracking-widest px-2 py-0.5 rounded-sm border backdrop-blur-sm transition-colors",
                isActive ? "bg-electric-blue/10 border-electric-blue/50 text-white" : "bg-navy-900/80 border-navy-700/80 text-gray-400"
              )}>
                {stage.label}
              </span>
              <span className={cn(
                "text-[8px] md:text-[9px] font-mono mt-1.5 transition-colors hidden sm:block",
                isActive ? "text-electric-blue" : "text-gray-500"
              )}>
                {stage.sub}
              </span>

              {/* Tiny tags */}
              <div className={cn(
                "hidden sm:flex gap-1.5 mt-2 transition-all duration-300",
                isActive ? "opacity-100" : "opacity-0"
              )}>
                {stage.tags.map(tag => (
                  <span key={tag} className="text-[6px] md:text-[7px] font-mono text-gray-400 border border-navy-600 px-1 rounded-sm bg-navy-900/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
