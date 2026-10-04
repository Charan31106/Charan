"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const GlowFilter = () => (
  <defs>
    <filter id="trace-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
);

const FixedAtmosphereAndGrid = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    {/* Atmospheric Depth Gradients */}
    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04)_0%,transparent_70%)] mix-blend-screen" />
    <div className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vh] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03)_0%,transparent_60%)] mix-blend-screen" />
    <div className="absolute bottom-[-10%] left-[20%] w-[70vw] h-[50vh] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.025)_0%,transparent_70%)] mix-blend-screen" />

    {/* Macro Grid */}
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(to right, #3b82f6 1px, transparent 1px),
          linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
        `,
        backgroundSize: '128px 128px',
        maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)'
      }}
    />
    
    {/* Fine Grid (Hidden on mobile) */}
    <div 
      className="hidden md:block absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `
          linear-gradient(to right, #06b6d4 1px, transparent 1px),
          linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse at 80% 20%, black 10%, transparent 60%)'
      }}
    />

    {/* Micro Grid (Center focus) */}
    <div 
      className="hidden lg:block absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `
          linear-gradient(to right, #8b5cf6 1px, transparent 1px),
          linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
        `,
        backgroundSize: '8px 8px',
        maskImage: 'radial-gradient(ellipse at 30% 60%, black 5%, transparent 30%)'
      }}
    />
  </div>
);

export function ECEEngineeringEnvironment() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden text-electric-blue">
      <FixedAtmosphereAndGrid />

      {/* ANCHOR 01: HERO MODULE (top: 0) */}
      <div className="absolute top-0 left-0 w-full h-[1200px] opacity-30">
        {/* Left Side Architecture */}
        <svg className="absolute top-0 left-0 w-[500px] h-[500px]" viewBox="0 0 500 500">
          <GlowFilter />
          <g stroke="currentColor" fill="none" strokeWidth="1" strokeLinecap="square" className="text-cyan-accent">
             <path d="M 0,200 L 150,200 L 200,250 L 400,250" />
             <path d="M 150,200 L 150,100 L 300,100" />
             <rect x="298" y="98" width="16" height="16" fill="rgba(6,182,212,0.1)" stroke="currentColor" />
             <circle cx="400" cy="250" r="3" fill="currentColor" />
          </g>
          <g fill="currentColor" className="text-[10px] font-mono tracking-widest opacity-60">
             <text x="325" y="105">SYS-01</text>
             <text x="325" y="118">CORE</text>
          </g>
          {!prefersReducedMotion && (
            <motion.circle r="2" fill="#06b6d4" filter="url(#trace-glow)"
              animate={{ cx: [0, 150, 200, 400, 400], cy: [200, 200, 250, 250, 250], opacity: [0, 1, 1, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            />
          )}
        </svg>

        {/* Right Side Oscilloscope (Hidden on Mobile) */}
        <svg className="hidden lg:block absolute top-[20%] right-0 w-[400px] h-[200px]" viewBox="0 0 400 200">
          <g stroke="currentColor" fill="none" strokeWidth="1" className="text-electric-blue opacity-60">
             <path d="M 400,100 L 300,100 L 280,70 L 260,130 L 240,100 L 150,100 L 100,150 L 0,150" />
             <circle cx="150" cy="100" r="2" fill="currentColor" />
          </g>
          <text x="160" y="93" fill="currentColor" className="text-[9px] font-mono tracking-widest opacity-80">SYNC SIGNAL</text>
        </svg>
      </div>

      {/* ANCHOR 02: IDENTITY / DNA ARCHITECTURE (top: 15%) */}
      <div className="absolute top-[15%] left-0 w-full h-[1500px] opacity-25">
         {/* Radial / Processor Geometry (Right side) */}
         <svg className="hidden lg:block absolute top-[10%] right-[-100px] w-[600px] h-[600px]" viewBox="0 0 600 600">
            <g stroke="currentColor" fill="none" strokeWidth="1">
              <circle cx="300" cy="300" r="200" strokeDasharray="4 12" className="text-electric-blue opacity-50" />
              <circle cx="300" cy="300" r="150" strokeWidth="0.5" className="opacity-30" />
              <path d="M 100,300 L 0,300" strokeWidth="1.5" className="text-cyan-accent" />
            </g>
            <text x="10" y="290" fill="currentColor" className="text-[10px] font-mono tracking-widest opacity-90 text-cyan-accent">INTELLIGENCE NODE</text>
         </svg>

         {/* Data Bus Motif (Left side) */}
         <svg className="absolute top-[30%] left-0 w-[300px] h-[500px]" viewBox="0 0 300 500">
            <GlowFilter />
            <g stroke="currentColor" fill="none" strokeLinecap="square">
              <path d="M 0,100 L 100,100 L 150,150 L 150,400" strokeWidth="2" className="opacity-40 text-electric-blue" />
              <path d="M 0,115 L 90,115 L 140,165 L 140,400" strokeWidth="2" className="opacity-40 text-cyan-accent" />
              <path d="M 0,130 L 80,130 L 130,180 L 130,400" strokeWidth="2" className="opacity-40 text-violet-accent" />
            </g>
            <text x="165" y="390" fill="currentColor" className="text-[9px] font-mono tracking-widest opacity-80">DATA BUS</text>
            {!prefersReducedMotion && (
              <motion.circle r="2.5" fill="#06b6d4" filter="url(#trace-glow)"
                animate={{ cx: [0, 90, 140, 140, 140], cy: [115, 115, 165, 400, 400], opacity: [0, 1, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
              />
            )}
         </svg>
      </div>

      {/* ANCHOR 03: SENSE -> DECIDE ARCHITECTURE (top: 35%) */}
      <div className="absolute top-[35%] left-0 w-full h-[2000px] opacity-30">
         {/* SENSE Motif */}
         <svg className="absolute top-0 left-0 w-[400px] h-[500px]" viewBox="0 0 400 500">
           <g stroke="currentColor" fill="none" className="text-cyan-accent">
             <path d="M -50,400 A 200 200 0 0 1 150,200" strokeDasharray="2 6" strokeWidth="2" className="opacity-50" />
             <path d="M -50,450 A 250 250 0 0 1 200,200" strokeDasharray="4 8" className="opacity-30" />
             <circle cx="150" cy="200" r="4" fill="currentColor" />
             <path d="M 150,200 L 250,200 L 300,250 L 300,500" />
           </g>
           <text x="160" y="190" fill="currentColor" className="text-[9px] font-mono tracking-widest text-cyan-accent opacity-90">SENSOR INPUT</text>
         </svg>

         {/* COMPUTE Motif */}
         <svg className="hidden md:block absolute top-[40%] right-0 w-[300px] h-[300px]" viewBox="0 0 300 300">
           <g stroke="currentColor" fill="none" className="text-electric-blue">
             <rect x="100" y="100" width="120" height="120" strokeWidth="1.5" className="opacity-40" />
             <rect x="110" y="110" width="100" height="100" strokeDasharray="2 4" className="opacity-60" />
             <path d="M 0,160 L 100,160" />
             <circle cx="0" cy="160" r="3" fill="currentColor" />
           </g>
           <text x="10" y="150" fill="currentColor" className="text-[9px] font-mono tracking-widest text-electric-blue opacity-90">PROCESSING</text>
         </svg>
      </div>

      {/* ANCHOR 04: JOURNEY ARCHITECTURE (top: 60%) */}
      <div className="absolute top-[60%] left-0 w-full h-[1500px] opacity-25">
         <svg className="absolute top-[10%] left-0 w-[300px] h-[1000px]" viewBox="0 0 300 1000">
           <g stroke="currentColor" fill="none" strokeLinecap="square">
             <path d="M 0,200 L 200,200 L 250,250 L 250,800" className="text-violet-accent opacity-50" />
             <circle cx="250" cy="800" r="3" fill="currentColor" className="text-violet-accent" />
           </g>
         </svg>
         
         <svg className="absolute top-[30%] right-0 w-[300px] h-[1000px]" viewBox="0 0 300 1000">
           <g stroke="currentColor" fill="none" strokeLinecap="square">
             <path d="M 300,100 L 100,100 L 50,150 L 50,800" className="text-electric-blue opacity-40" />
             <circle cx="50" cy="800" r="3" fill="currentColor" className="text-electric-blue" />
           </g>
         </svg>
      </div>

      {/* ANCHOR 05: CURRENTLY BUILDING / CONTACT (bottom: 0) */}
      <div className="absolute bottom-0 left-0 w-full h-[1000px] opacity-[0.3]">
         {/* Framing Brackets */}
         <svg className="absolute bottom-0 left-0 w-[200px] h-[200px]" viewBox="0 0 200 200">
            <path d="M 50,150 L 50,50 M 50,150 L 150,150" stroke="currentColor" fill="none" strokeWidth="2" className="opacity-40" />
            <text x="60" y="140" fill="currentColor" className="text-[9px] font-mono tracking-widest opacity-90">SYSTEM ONLINE</text>
         </svg>
         
         <svg className="absolute bottom-0 right-0 w-[200px] h-[200px]" viewBox="0 0 200 200">
            <path d="M 150,150 L 150,50 M 150,150 L 50,150" stroke="currentColor" fill="none" strokeWidth="2" className="opacity-40" />
            <text x="60" y="140" fill="currentColor" className="text-[9px] font-mono tracking-widest opacity-90 text-right w-[90px]">RX/TX ACTIVE</text>
         </svg>

         {/* Status Lines */}
         <svg className="absolute bottom-[200px] left-0 w-[500px] h-[200px]" viewBox="0 0 500 200">
            <GlowFilter />
            <path d="M 0,100 L 300,100 L 350,150" stroke="currentColor" fill="none" strokeDasharray="5 10" className="text-cyan-accent opacity-60" />
            <circle cx="350" cy="150" r="4" fill="rgba(6,182,212,0.3)" />
            <circle cx="350" cy="150" r="1.5" fill="currentColor" className="text-cyan-accent" />
            <text x="360" y="153" fill="currentColor" className="text-[10px] font-mono tracking-widest text-cyan-accent opacity-90">NODE 04</text>

            {!prefersReducedMotion && (
              <motion.circle r="2.5" fill="#06b6d4" filter="url(#trace-glow)"
                animate={{ cx: [0, 300, 350, 350], cy: [100, 100, 150, 150], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
            )}
         </svg>
      </div>
    </div>
  );
}
