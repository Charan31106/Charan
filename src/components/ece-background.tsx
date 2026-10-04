"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function ECEBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* LAYER 02 - ECE BLUEPRINT GRID */}
      {/* Large Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3b82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />
      {/* Fine Grid (Hidden on Mobile for cleanliness) */}
      <div 
        className="hidden md:block absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3b82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px'
        }}
      />

      {/* GLOBAL DEPTH ILLUMINATION (Radial Gradients) */}
      <div className="absolute top-[-10%] left-[-5%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.02)_0%,transparent_60%)] mix-blend-screen rounded-full" />
      <div className="hidden md:block absolute bottom-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.015)_0%,transparent_60%)] mix-blend-screen rounded-full" />
      <div className="hidden lg:block absolute top-[40%] left-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.015)_0%,transparent_60%)] mix-blend-screen rounded-full" />

      {/* LAYER 03 & 04 - PCB TRACE NETWORK (SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
        
        {/* SVG Filters for Glow */}
        <defs>
          <filter id="trace-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* LEFT SIDE TRACES */}
        <g stroke="currentColor" fill="none" className="text-electric-blue" strokeWidth="1" strokeLinecap="square">
          {/* Trace 1 */}
          <path d="M 0,120 L 64,120 L 96,152 L 200,152" />
          <circle cx="200" cy="152" r="3" fill="currentColor" />
          {/* Trace 2 */}
          <path d="M 64,120 L 64,88 L 96,56 L 160,56" />
          <circle cx="160" cy="56" r="2" fill="currentColor" />
          
          {/* Trace 3 (Mid Left) */}
          <path d="M 0,400 L 80,400 L 112,432 L 112,500 L 144,532 L 256,532" className="hidden md:block" />
          <rect x="252" y="528" width="8" height="8" fill="none" className="hidden md:block" />
          <circle cx="256" cy="532" r="1.5" fill="currentColor" className="hidden md:block" />
        </g>

        {/* RIGHT SIDE TRACES (Hidden on mobile) */}
        <g stroke="currentColor" fill="none" className="text-cyan-accent hidden md:block" strokeWidth="1" strokeLinecap="square">
          {/* Trace 4 */}
          <path d="M 100%,250 L calc(100% - 128px),250 L calc(100% - 160px),282 L calc(100% - 256px),282" />
          <circle cx="calc(100% - 256px)" cy="282" r="2.5" fill="currentColor" />

          {/* Trace 5 */}
          <path d="M 100%,70% L calc(100% - 80px),70% L calc(100% - 144px),calc(70% - 64px) L calc(100% - 300px),calc(70% - 64px)" />
          <circle cx="calc(100% - 300px)" cy="calc(70% - 64px)" r="4" fill="none" />
          <circle cx="calc(100% - 300px)" cy="calc(70% - 64px)" r="1.5" fill="currentColor" />
        </g>

        {/* ANIMATED SIGNAL DOTS */}
        {!prefersReducedMotion && (
          <g>
            {/* Signal 1 (Left) */}
            <motion.circle
              r="2"
              fill="#06b6d4"
              filter="url(#trace-glow)"
              animate={{ 
                cx: [0, 64, 96, 200, 200],
                cy: [120, 120, 152, 152, 152],
                opacity: [0, 1, 1, 1, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            />
            {/* Signal 2 (Left Branch) */}
            <motion.circle
              r="2"
              fill="#3b82f6"
              filter="url(#trace-glow)"
              animate={{ 
                cx: [64, 64, 96, 160, 160],
                cy: [120, 88, 56, 56, 56],
                opacity: [0, 1, 1, 1, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
            />
          </g>
        )}
      </svg>
    </div>
  );
}
