"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionHeader } from "./ui/section-header";
import { cn } from "@/lib/utils";

interface JourneyStage {
  id: string;
  number: string;
  phase: string;
  title: string;
  domain: string;
  tagline: string;
  description: string;
  status: string;
  color: string;
  milestones: { label: string; badge?: string }[];
  visualType: "logic" | "oscilloscope" | "pipeline" | "neural" | "nexus";
}

const stages: JourneyStage[] = [
  {
    id: "foundation",
    number: "01",
    phase: "PHASE 01 // 05",
    title: "FOUNDATION",
    domain: "PHYSICAL / ACADEMIC",
    tagline: "Mathematical & physical principles of engineering.",
    description: "Built the rigorous academic and analytical foundation in physics, mathematics, and electronics that drives structured systems design.",
    status: "COMPLETED",
    color: "#38bdf8",
    milestones: [
      { label: "VVCE — B.E. Electronics & Communication", badge: "2028" },
      { label: "BGS PU College — Pre-University", badge: "96.0%" },
      { label: "Rainbow Public School", badge: "86.4%" }
    ],
    visualType: "logic"
  },
  {
    id: "experimentation",
    number: "02",
    phase: "PHASE 02 // 05",
    title: "EXPERIMENTATION",
    domain: "HARDWARE / SENSE",
    tagline: "Moving theory into physical electronics.",
    description: "Prototyping physical electronics, microcontrollers, sensor arrays, motor control circuits, and exploring real-world hardware signals.",
    status: "PROTOTYPING",
    color: "#22d3ee",
    milestones: [
      { label: "Arduino Uno & ESP32 Microcontrollers" },
      { label: "Analog & Digital Sensor Telemetry" },
      { label: "Motor Drivers & PWM Power Logic" },
      { label: "Breadboard & Custom Circuit Fabrication" }
    ],
    visualType: "oscilloscope"
  },
  {
    id: "system-building",
    number: "03",
    phase: "PHASE 03 // 05",
    title: "SYSTEM BUILDING",
    domain: "SOFTWARE / CONNECT",
    tagline: "Bridging hardware telemetry to connected software.",
    description: "Developing end-to-end software pipelines that bridge real-world hardware data with high-performance APIs and reactive user interfaces.",
    status: "INTEGRATED",
    color: "#60a5fa",
    milestones: [
      { label: "FastAPI & Node.js Backend Architecture" },
      { label: "React & Next.js Reactive Dashboards" },
      { label: "Smart Disaster Monitoring Concept" },
      { label: "VVCE Connect Student System" }
    ],
    visualType: "pipeline"
  },
  {
    id: "intelligence",
    number: "04",
    phase: "PHASE 04 // 05",
    title: "INTELLIGENCE",
    domain: "INTELLIGENCE / COMPUTE",
    tagline: "Autonomous inference and spatial simulation.",
    description: "Integrating computer vision, neural models, spatial digital twins, and algorithmic decision layers directly into engineering systems.",
    status: "APPLIED",
    color: "#818cf8",
    milestones: [
      { label: "Computer Vision & Edge Inferencing" },
      { label: "VVCE Campus Spatial Digital Twin" },
      { label: "Krishi-Sanjeevini Agricultural Platform" },
      { label: "Automated Telemetry Analytics" }
    ],
    visualType: "neural"
  },
  {
    id: "direction",
    number: "05",
    phase: "CURRENT PHASE",
    title: "ENGINEERING DIRECTION",
    domain: "SYSTEMS / DECIDE",
    tagline: "Multidisciplinary systems synthesis.",
    description: "Uniting hardware, intelligent software, robotics, and real-world constraints into cohesive autonomous machines.",
    status: "ACTIVE RUNTIME",
    color: "#a78bfa",
    milestones: [
      { label: "Multidisciplinary Systems Synthesis", badge: "HARDWARE × AI" },
      { label: "National Hackathons & Sprint Engineering", badge: "TOP 10% TIER" },
      { label: "Autonomous Robotics Systems Exploration", badge: "PHYSICAL" },
      { label: "Innovators & Visionaries Club", badge: "CORE MEMBER" }
    ],
    visualType: "nexus"
  }
];

export function Journey() {
  const [activeStageId, setActiveStageId] = useState<string>("direction");
  const prefersReducedMotion = useReducedMotion();

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[4];

  return (
    <section id="journey" className="py-24 relative bg-transparent overflow-hidden">
      {/* Background ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            number="03"
            title="Engineering Journey"
            subtitle="Building the system, one layer at a time."
          />
          <div className="hidden md:flex items-center gap-3 text-[10px] font-mono tracking-widest text-cyan-300 bg-navy-900/80 px-3.5 py-1.5 rounded border border-cyan-500/30 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>ARCHITECTURE EVOLUTION // 01 ──→ 05</span>
          </div>
        </div>

        {/* TOP INTERACTIVE BUS / PROGRESSION TRACK */}
        <div className="relative mb-8 p-4 md:p-6 bg-navy-950/80 border border-cyan-500/25 rounded-sm backdrop-blur-md">
          {/* Connecting Bus Line */}
          <div className="hidden lg:block absolute top-[38px] left-[6%] right-[6%] h-[2px] bg-cyan-500/20 z-0 overflow-hidden">
            {!prefersReducedMotion && (
              <motion.div
                className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                animate={{ x: ["-100%", "900%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
            {stages.map((stage) => {
              const isActive = activeStage.id === stage.id;
              const isCurrent = stage.id === "direction";

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={cn(
                    "group relative flex flex-col items-start p-3.5 text-left rounded-sm border transition-all duration-300",
                    isActive
                      ? "bg-navy-800/90 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                      : "bg-navy-900/50 border-cyan-500/20 hover:border-cyan-400/50 hover:bg-navy-800/60"
                  )}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span
                      className={cn(
                        "text-[10px] font-mono tracking-widest font-semibold px-1.5 py-0.5 rounded-sm border",
                        isActive
                          ? "text-cyan-300 border-cyan-400/60 bg-cyan-500/20"
                          : "text-gray-400 border-cyan-500/20 bg-navy-950/60"
                      )}
                    >
                      {stage.number}
                    </span>

                    {isCurrent && (
                      <span className="text-[8px] font-mono tracking-wider text-violet-300 bg-violet-500/20 border border-violet-400/40 px-1.5 py-0.5 rounded-sm flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-violet-400 animate-ping" />
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <span
                    className={cn(
                      "text-xs font-mono tracking-wider font-medium truncate w-full transition-colors",
                      isActive ? "text-white" : "text-gray-300 group-hover:text-cyan-300"
                    )}
                  >
                    {stage.title}
                  </span>

                  <span className="text-[9px] font-mono text-cyan-400/60 mt-1 truncate w-full">
                    {stage.domain}
                  </span>

                  {/* Active bottom glow bar */}
                  {isActive && (
                    <motion.div
                      layoutId="active-journey-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* STAGE DEEP-DIVE INSPECTION CONSOLE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="border border-cyan-500/35 bg-navy-900/80 rounded-sm p-6 md:p-10 shadow-[0_8px_32px_rgba(6,14,34,0.7)] backdrop-blur-md relative overflow-hidden"
          >
            {/* Top Console Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-4 mb-8 text-[10px] font-mono tracking-widest">
              <div className="flex items-center gap-3 text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>{activeStage.phase}</span>
                <span className="text-gray-500">/</span>
                <span className="text-gray-300">{activeStage.domain}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">STATUS:</span>
                <span className="text-cyan-300 bg-cyan-500/15 border border-cyan-400/40 px-2 py-0.5 rounded-sm">
                  {activeStage.status}
                </span>
              </div>
            </div>

            {/* Split Console Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Stage Details & Milestones */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-block text-[11px] font-mono text-cyan-400/80 uppercase tracking-widest mb-1.5">
                  SYSTEM LAYER {activeStage.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">
                  {activeStage.title}
                </h3>
                <p className="text-sm font-mono text-cyan-300/90 mb-4 border-l-2 border-cyan-400 pl-3">
                  {activeStage.tagline}
                </p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6 max-w-xl">
                  {activeStage.description}
                </p>

                {/* Structured Milestones */}
                <div className="mt-2">
                  <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-3 flex items-center gap-2">
                    <span className="text-cyan-400 font-mono">⚡</span>
                    <span>KEY VERIFIED MILESTONES & ARTIFACTS</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStage.milestones.map((m, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-3 px-3 py-2 rounded-[2px] bg-navy-950/90 border border-cyan-500/25 hover:border-cyan-400/60 transition-colors"
                      >
                        <span className="text-xs font-mono text-gray-200 truncate">
                          {m.label}
                        </span>
                        {m.badge && (
                          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded border border-cyan-400/40 bg-cyan-500/15 text-cyan-300 shrink-0">
                            {m.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: High-Tech Stage Visualizer Widget */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="w-full h-64 md:h-72 bg-[#030712] border border-cyan-500/30 rounded-sm relative overflow-hidden flex items-center justify-center p-4 shadow-inner">
                  {/* Subtle Grid Canvas */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />

                  {activeStage.visualType === "logic" && <LogicVisualizer />}
                  {activeStage.visualType === "oscilloscope" && <OscilloscopeVisualizer />}
                  {activeStage.visualType === "pipeline" && <PipelineVisualizer />}
                  {activeStage.visualType === "neural" && <NeuralVisualizer />}
                  {activeStage.visualType === "nexus" && <NexusVisualizer />}

                  {/* Corner Target Marks */}
                  <div className="absolute top-2 left-2 text-[8px] font-mono text-cyan-500/40">┌</div>
                  <div className="absolute top-2 right-2 text-[8px] font-mono text-cyan-500/40">┐</div>
                  <div className="absolute bottom-2 left-2 text-[8px] font-mono text-cyan-500/40">└</div>
                  <div className="absolute bottom-2 right-2 text-[8px] font-mono text-cyan-500/40">┘</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Section Transition */}
        <div className="mt-20 flex flex-col items-center">
          <div className="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
          <div className="text-[10px] font-mono tracking-widest text-cyan-400/70 uppercase mt-3">
            SYSTEM PROGRESSION ──→ DOCUMENTATION ARCHIVE
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================= */
/* CUSTOM HIGH-TECH VECTOR VISUALIZERS FOR EACH STAGE                        */
/* ========================================================================= */

// Stage 01: Mathematical & Logic Gates
function LogicVisualizer() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center z-10 font-mono">
      <svg className="w-full h-full max-h-56" viewBox="0 0 320 180" fill="none">
        {/* Logic Bus Lines */}
        <path d="M 40 45 L 120 45 L 140 70 L 220 70" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.7" />
        <path d="M 40 135 L 120 135 L 140 110 L 220 110" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.7" />
        <path d="M 220 70 L 250 90 L 280 90" stroke="#22d3ee" strokeWidth="2" />
        <path d="M 220 110 L 250 90" stroke="#22d3ee" strokeWidth="2" />

        {/* Logic Gate 1 */}
        <rect x="80" y="30" width="50" height="30" rx="3" fill="#0c192e" stroke="#38bdf8" strokeWidth="1" />
        <text x="105" y="50" fill="#38bdf8" fontSize="10" textAnchor="middle">NAND</text>

        {/* Logic Gate 2 */}
        <rect x="80" y="120" width="50" height="30" rx="3" fill="#0c192e" stroke="#38bdf8" strokeWidth="1" />
        <text x="105" y="140" fill="#38bdf8" fontSize="10" textAnchor="middle">XOR</text>

        {/* Convergence Gate */}
        <circle cx="250" cy="90" r="16" fill="#0f2444" stroke="#22d3ee" strokeWidth="1.5" />
        <text x="250" y="94" fill="#67e8f9" fontSize="9" textAnchor="middle">AND</text>

        {/* Output Indicator */}
        <circle cx="280" cy="90" r="4" fill="#22d3ee" className="animate-ping" />
        <circle cx="280" cy="90" r="3" fill="#22d3ee" />

        {/* Status Annotation */}
        <text x="30" y="165" fill="#64748b" fontSize="8">LOGIC MESH // MATH & PHYSICS FOUNDATIONS</text>
        <text x="290" y="165" fill="#38bdf8" fontSize="8" textAnchor="end">Q=1</text>
      </svg>
    </div>
  );
}

// Stage 02: Oscilloscope & Signal Waveform
function OscilloscopeVisualizer() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between z-10 font-mono p-2">
      <div className="flex justify-between items-center text-[9px] text-cyan-300">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          CH1: 3.3V PWM (10kHz)
        </span>
        <span className="text-gray-400">CH2: SPI BUS</span>
      </div>

      <svg className="w-full h-36" viewBox="0 0 320 120" fill="none">
        {/* Reticle grid */}
        <line x1="0" y1="60" x2="320" y2="60" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="160" y1="0" x2="160" y2="120" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />

        {/* Waveform 1: Square PWM Wave */}
        <path
          d="M 10 35 L 50 35 L 50 75 L 90 75 L 90 35 L 130 35 L 130 75 L 170 75 L 170 35 L 210 35 L 210 75 L 250 75 L 250 35 L 290 35 L 290 75 L 310 75"
          stroke="#22d3ee"
          strokeWidth="2"
          fill="none"
        />

        {/* Waveform 2: Analog Sensor Sine Wave */}
        <path
          d="M 10 95 Q 35 65 60 95 T 110 95 T 160 95 T 210 95 T 260 95 T 310 95"
          stroke="#38bdf8"
          strokeWidth="1.5"
          strokeOpacity="0.8"
          fill="none"
        />
      </svg>

      <div className="flex justify-between items-center text-[8px] text-gray-400">
        <span>VPP: 3.28V // TIME: 50µs/DIV</span>
        <span className="text-cyan-400 font-semibold">ESP32 / SENSORS ACTIVE</span>
      </div>
    </div>
  );
}

// Stage 03: Full-Stack Pipeline Visualizer
function PipelineVisualizer() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center z-10 font-mono">
      <svg className="w-full h-full max-h-56" viewBox="0 0 320 180" fill="none">
        {/* Node 1: Hardware Sense */}
        <rect x="20" y="65" width="70" height="50" rx="3" fill="#091426" stroke="#38bdf8" strokeWidth="1" />
        <text x="55" y="86" fill="#e2e8f0" fontSize="9" textAnchor="middle">IOT NODE</text>
        <text x="55" y="100" fill="#38bdf8" fontSize="8" textAnchor="middle">ESP32 / SENSE</text>

        {/* Bus Stream 1 */}
        <path d="M 90 90 L 130 90" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="110" cy="90" r="3" fill="#22d3ee" className="animate-ping" />

        {/* Node 2: FastAPI Engine */}
        <rect x="130" y="55" width="80" height="70" rx="3" fill="#0d1f3d" stroke="#60a5fa" strokeWidth="1.5" />
        <text x="170" y="82" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">FASTAPI</text>
        <text x="170" y="96" fill="#93c5fd" fontSize="8" textAnchor="middle">ASYNC API</text>
        <text x="170" y="110" fill="#38bdf8" fontSize="7" textAnchor="middle">&lt;20ms LATENCY</text>

        {/* Bus Stream 2 */}
        <path d="M 210 90 L 250 90" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Node 3: React Dashboard */}
        <rect x="250" y="65" width="60" height="50" rx="3" fill="#091426" stroke="#22d3ee" strokeWidth="1" />
        <text x="280" y="86" fill="#e2e8f0" fontSize="9" textAnchor="middle">REACT</text>
        <text x="280" y="100" fill="#22d3ee" fontSize="8" textAnchor="middle">WEB UI</text>

        <text x="160" y="155" fill="#64748b" fontSize="8" textAnchor="middle">
          FULL-STACK TELEMETRY // REAL-TIME INGESTION
        </text>
      </svg>
    </div>
  );
}

// Stage 04: Neural Inference & Twin Mesh
function NeuralVisualizer() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center z-10 font-mono">
      <svg className="w-full h-full max-h-56" viewBox="0 0 320 180" fill="none">
        {/* Connected Graph Lines */}
        <line x1="50" y1="50" x2="160" y2="40" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="50" y1="50" x2="160" y2="90" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="50" y1="130" x2="160" y2="90" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="50" y1="130" x2="160" y2="140" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.5" />

        <line x1="160" y1="40" x2="270" y2="90" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.7" />
        <line x1="160" y1="90" x2="270" y2="90" stroke="#a78bfa" strokeWidth="2" strokeOpacity="0.9" />
        <line x1="160" y1="140" x2="270" y2="90" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.7" />

        {/* Input Nodes */}
        <circle cx="50" cy="50" r="10" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />
        <text x="50" y="53" fill="#c7d2fe" fontSize="7" textAnchor="middle">VISION</text>

        <circle cx="50" cy="130" r="10" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />
        <text x="50" y="133" fill="#c7d2fe" fontSize="7" textAnchor="middle">SENSOR</text>

        {/* Hidden Layer Nodes */}
        <circle cx="160" cy="40" r="12" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.5" />
        <circle cx="160" cy="90" r="14" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="2" />
        <circle cx="160" cy="140" r="12" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.5" />
        <text x="160" y="93" fill="#e0e7ff" fontSize="8" textAnchor="middle">TWIN</text>

        {/* Output Inference Node */}
        <circle cx="270" cy="90" r="16" fill="#312e81" stroke="#c084fc" strokeWidth="2" />
        <text x="270" y="93" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">DECISION</text>
        <circle cx="270" cy="90" r="19" stroke="#c084fc" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" />

        <text x="160" y="170" fill="#64748b" fontSize="8" textAnchor="middle">
          SPATIAL TWIN & COMPUTER VISION INFERENCE
        </text>
      </svg>
    </div>
  );
}

// Stage 05: Multidisciplinary Synthesis Reactor (Active Phase)
function NexusVisualizer() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center z-10 font-mono">
      <svg className="w-full h-full max-h-56" viewBox="0 0 320 180" fill="none">
        {/* Orbital Ring 1 */}
        <ellipse cx="160" cy="90" rx="95" ry="40" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
        {/* Orbital Ring 2 */}
        <ellipse cx="160" cy="90" rx="40" ry="75" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />

        {/* 4 Quadrant Converging Vectors */}
        <line x1="60" y1="40" x2="135" y2="75" stroke="#22d3ee" strokeWidth="1.5" />
        <line x1="260" y1="40" x2="185" y2="75" stroke="#60a5fa" strokeWidth="1.5" />
        <line x1="60" y1="140" x2="135" y2="105" stroke="#818cf8" strokeWidth="1.5" />
        <line x1="260" y1="140" x2="185" y2="105" stroke="#a78bfa" strokeWidth="1.5" />

        {/* Nodes */}
        <rect x="25" y="25" width="65" height="26" rx="3" fill="#081426" stroke="#22d3ee" strokeWidth="1" />
        <text x="57" y="41" fill="#67e8f9" fontSize="8" textAnchor="middle">HARDWARE</text>

        <rect x="230" y="25" width="65" height="26" rx="3" fill="#081426" stroke="#60a5fa" strokeWidth="1" />
        <text x="262" y="41" fill="#93c5fd" fontSize="8" textAnchor="middle">SOFTWARE</text>

        <rect x="25" y="125" width="65" height="26" rx="3" fill="#081426" stroke="#818cf8" strokeWidth="1" />
        <text x="57" y="141" fill="#c7d2fe" fontSize="8" textAnchor="middle">AI / VISION</text>

        <rect x="230" y="125" width="65" height="26" rx="3" fill="#081426" stroke="#a78bfa" strokeWidth="1" />
        <text x="262" y="141" fill="#ddd6fe" fontSize="8" textAnchor="middle">ROBOTICS</text>

        {/* Core Nexus Reactor */}
        <circle cx="160" cy="90" r="24" fill="#0f172a" stroke="#22d3ee" strokeWidth="2" />
        <circle cx="160" cy="90" r="16" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.5" />
        <circle cx="160" cy="90" r="6" fill="#38bdf8" className="animate-pulse" />

        <text x="160" y="122" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">
          SYNTHESIS
        </text>

        <text x="160" y="172" fill="#38bdf8" fontSize="8" textAnchor="middle">
          ACTIVE RUNTIME // REAL-WORLD MULTIDISCIPLINARY
        </text>
      </svg>
    </div>
  );
}
