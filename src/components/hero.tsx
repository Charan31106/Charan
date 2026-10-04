"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/socials";
import { StatusIndicator } from "./ui/status-indicator";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pt-24 pb-12">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0B1018_1px,transparent_1px),linear-gradient(to_bottom,#0B1018_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-12 w-full relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Introduction (approx 45%) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8 lg:col-span-5"
        >
          <div className="space-y-4">
            <h1 className="text-[clamp(3rem,6vw,6rem)] font-light tracking-tight text-white leading-[1.1]">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-electric-blue font-light">
              {personalInfo.title}
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-lg font-light leading-relaxed border-l-2 border-electric-blue pl-6">
            {personalInfo.heroSubtitle}
          </p>

          <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-4 p-5 border border-navy-700 bg-navy-800/50 backdrop-blur-sm rounded-sm">
            <div className="col-span-2 mb-2">
              <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">System Status</span>
            </div>
            <StatusIndicator label="Building" status="building" pulse={false} />
            <span className="text-sm text-gray-400">Hardware + Software</span>
            <StatusIndicator label="Focus" status="learning" pulse={false} />
            <span className="text-sm text-gray-400">AI / Embedded / Robotics</span>
          </div>
          
          {/* Mobile motif line */}
          <div className="lg:hidden mt-8 flex items-center justify-between w-full max-w-xs border-t border-navy-700 pt-6">
            <span className="text-[10px] font-mono text-electric-blue">SENSE</span>
            <div className="h-px bg-navy-600 flex-1 mx-2" />
            <span className="text-[10px] font-mono text-electric-blue">COMPUTE</span>
            <div className="h-px bg-navy-600 flex-1 mx-2" />
            <span className="text-[10px] font-mono text-electric-blue">DECIDE</span>
          </div>
        </motion.div>

        {/* Right: Abstract Engineering System (Desktop approx 55%) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="hidden lg:flex lg:col-span-7 h-full min-h-[500px] relative items-center justify-center w-full"
        >
          <div className="relative w-full h-[500px] border border-navy-700/40 bg-navy-800/20 backdrop-blur-sm rounded-sm overflow-hidden">
            {/* Inner tech grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            {/* Simulated Nodes representing the signature motif */}
            <SystemNode x="15%" y="20%" label="Sense" meta="SENSOR.IO" active />
            <SystemNode x="40%" y="45%" label="Connect" meta="TX.RX" active />
            <SystemNode x="65%" y="25%" label="Compute" meta="AI.CORE" active />
            <SystemNode x="85%" y="60%" label="Visualize" meta="UI.RENDER" active />
            <SystemNode x="50%" y="80%" label="Decide" meta="ACTUATOR.SYS" active />
            
            {/* SVG Lines connecting nodes */}
            <svg className="absolute inset-0 w-full h-full z-0 overflow-visible">
              <defs>
                <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 15% 20% L 40% 45% L 65% 25% L 85% 60% M 40% 45% L 50% 80% L 85% 60%"
                fill="transparent"
                stroke="url(#glowLine)"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatType: "loop" }}
              />
              <motion.path
                d="M 15% 20% L 40% 45% L 65% 25% L 85% 60% M 40% 45% L 50% 80% L 85% 60%"
                fill="transparent"
                stroke="#fff"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SystemNode({ x, y, label, meta, active = false }: { x: string; y: string; label: string; meta: string; active?: boolean }) {
  return (
    <div
      className="absolute flex flex-col items-center gap-3 transform -translate-x-1/2 -translate-y-1/2 z-10"
      style={{ left: x, top: y }}
    >
      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full border flex items-center justify-center backdrop-blur-md transition-all duration-700
        ${active ? 'border-electric-blue bg-electric-blue/10 shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'border-navy-600 bg-navy-900/50'}`}
      >
        <div className={`w-3 h-3 rounded-full ${active ? 'bg-electric-blue animate-pulse' : 'bg-gray-600'}`} />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[11px] md:text-xs font-mono text-white uppercase tracking-widest bg-navy-900/90 px-3 py-1 rounded-sm border border-navy-700/80 backdrop-blur-md">
          {label}
        </span>
        <span className="text-[9px] text-gray-500 font-mono mt-1">{meta}</span>
      </div>
    </div>
  );
}
