"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "./ui/section-header";
import { cn } from "@/lib/utils";

interface Subsystem {
  id: string;
  number: string;
  name: string;
  domain: string;
  status: string;
  statusColor: string;
  metric: string;
  focus: string;
  tools: string[];
}

const subsystems: Subsystem[] = [
  {
    id: "hardware",
    number: "01",
    name: "EMBEDDED HARDWARE",
    domain: "PHYSICAL // SENSE",
    status: "BENCH PROTOTYPING",
    statusColor: "text-cyan-300 border-cyan-400/40 bg-cyan-500/10",
    metric: "3.3V / 5.0V LOGIC // 400kHz I2C",
    focus: "Microcontroller architecture, sensor signal acquisition, and custom circuit design.",
    tools: ["Arduino Uno", "ESP32 SoC", "Sensors", "Circuit Schematics", "PWM Drivers"]
  },
  {
    id: "robotics",
    number: "02",
    name: "AUTONOMOUS ROBOTICS",
    domain: "KINETIC // DECIDE",
    status: "ACTIVE TESTING",
    statusColor: "text-emerald-300 border-emerald-400/40 bg-emerald-500/10",
    metric: "400Hz PID LOOP // 2-WHEEL DIFF",
    focus: "Closed-loop motor control, sensor fusion arrays, and autonomous navigation.",
    tools: ["Closed-Loop PID", "L298N Driver", "TCRT5000", "Custom Chassis", "Odometry"]
  },
  {
    id: "ai",
    number: "03",
    name: "APPLIED AI & VISION",
    domain: "COMPUTE // INFERENCE",
    status: "MODEL INTEGRATION",
    statusColor: "text-violet-300 border-violet-400/40 bg-violet-500/10",
    metric: "18ms INFERENCE // SPATIAL TWIN",
    focus: "Edge computer vision, multimodal telemetry processing, and spatial campus digital twins.",
    tools: ["Computer Vision", "TinyML", "Spatial Twins", "FastAPI Inference", "Data Systems"]
  },
  {
    id: "software",
    number: "04",
    name: "CONNECTED SYSTEMS",
    domain: "NETWORK // CONNECT",
    status: "STREAMING LIVE",
    statusColor: "text-blue-300 border-blue-400/40 bg-blue-500/10",
    metric: "<20ms LATENCY // WEBSOCKETS",
    focus: "Connecting physical device telemetry to reactive web interfaces and high-speed APIs.",
    tools: ["FastAPI", "React", "Next.js", "WebSockets", "Node.js", "C/C++ Interop"]
  }
];

export function CurrentlyBuilding() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const filterTabs = [
    { id: "ALL", label: "ALL SUBSYSTEMS" },
    { id: "hardware", label: "HARDWARE" },
    { id: "robotics", label: "ROBOTICS" },
    { id: "ai", label: "AI & VISION" },
    { id: "software", label: "SOFTWARE" }
  ];

  const displayedSubsystems = activeFilter === "ALL" 
    ? subsystems 
    : subsystems.filter(s => s.id === activeFilter);

  return (
    <section id="currently-building" className="py-24 relative bg-transparent border-t border-cyan-500/20 overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            number="05"
            title="Currently Building"
            subtitle="Active engineering telemetry & systems in motion."
          />
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-300 bg-navy-900/80 px-4 py-2 rounded border border-cyan-500/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>SYS.STATUS: ACTIVE RUNTIME</span>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <span className="text-gray-300 hidden sm:inline">DISCIPLINE: ECE</span>
          </div>
        </div>

        {/* Central Architecture Banner */}
        <div className="mb-8 p-4 md:p-6 rounded-sm border border-cyan-500/30 bg-navy-950/70 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-cyan-400/40 bg-cyan-500/10 flex items-center justify-center text-cyan-300 font-mono text-xs">
              ⚡
            </div>
            <div>
              <div className="text-sm font-mono text-white tracking-wider font-semibold">
                ECE <span className="text-cyan-400">×</span> SOFTWARE <span className="text-cyan-400">×</span> AI <span className="text-cyan-400">×</span> ROBOTICS
              </div>
              <div className="text-[11px] font-mono text-cyan-400/70">
                Active workbench // Building toward multidisciplinary autonomous systems.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[9px] font-mono tracking-widest text-cyan-300">
            <span className="px-2.5 py-1 rounded bg-navy-900 border border-cyan-500/25 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              BENCH CHANNELS: 4 ACTIVE
            </span>
            <span className="px-2.5 py-1 rounded bg-navy-900 border border-cyan-500/25 text-gray-300">
              UPDATE: 400Hz
            </span>
          </div>
        </div>

        {/* Subsystem Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={cn(
                "px-3.5 py-1.5 text-[10px] font-mono tracking-widest rounded-sm border transition-all duration-300",
                activeFilter === tab.id
                  ? "border-cyan-400 bg-cyan-500/20 text-white shadow-[0_0_12px_rgba(34,211,238,0.25)]"
                  : "border-cyan-500/20 bg-navy-900/60 text-gray-400 hover:text-gray-200 hover:border-cyan-400/40"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4 HIGH-TECH SUBSYSTEM INSTRUMENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {displayedSubsystems.map((sys) => {
            const isHovered = hoveredCard === sys.id;

            return (
              <motion.div
                key={sys.id}
                onMouseEnter={() => setHoveredCard(sys.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={cn(
                  "group relative p-6 md:p-8 rounded-sm border transition-all duration-300 bg-navy-900/75 backdrop-blur-md overflow-hidden flex flex-col justify-between",
                  isHovered
                    ? "border-cyan-400/80 bg-navy-800/90 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                    : "border-cyan-500/20 hover:border-cyan-400/50"
                )}
              >
                {/* Header Row */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded border border-cyan-500/30 bg-navy-950/80 text-cyan-300 font-semibold">
                        {sys.number}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-cyan-400/70 uppercase">
                        {sys.domain}
                      </span>
                    </div>

                    <span className={cn("text-[9px] font-mono tracking-widest px-2.5 py-0.5 rounded border font-medium", sys.statusColor)}>
                      {sys.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {sys.name}
                  </h3>

                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-6">
                    {sys.focus}
                  </p>
                </div>

                {/* Subsystem Live Vector Screen */}
                <div className="my-2 w-full h-32 bg-[#02050c] rounded border border-cyan-500/25 relative overflow-hidden flex items-center justify-center p-2 shadow-inner group-hover:border-cyan-400/50 transition-colors">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {sys.id === "hardware" && <HardwareOscilloscopeScreen />}
                  {sys.id === "robotics" && <RoboticsKinematicsScreen />}
                  {sys.id === "ai" && <AiVisionScreen />}
                  {sys.id === "software" && <SoftwarePipelineScreen />}

                  {/* Top-right metric overlay */}
                  <div className="absolute top-2 right-2 text-[8px] font-mono tracking-wider text-cyan-400/80 bg-navy-950/90 px-1.5 py-0.5 rounded border border-cyan-500/20">
                    {sys.metric}
                  </div>
                </div>

                {/* Technical Tools Chips */}
                <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-cyan-500/15">
                  {sys.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[9px] font-mono px-2 py-0.5 rounded border border-cyan-500/20 bg-navy-950/80 text-gray-300 group-hover:border-cyan-500/40 group-hover:text-cyan-200 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Active Top Edge Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_#22d3ee]" />
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM ENGINEERING HUD TERMINAL */}
        <div className="p-6 rounded-sm border border-cyan-500/30 bg-navy-950/90 backdrop-blur-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>CORE ENGINEERING INQUIRY</span>
            </div>
            <p className="text-xs md:text-sm text-gray-200 font-mono font-light leading-relaxed">
              &quot;How can hardware, intelligent software and autonomous systems work together to solve real-world problems?&quot;
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <div className="text-left lg:text-right">
              <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                LEADERSHIP / COLLABORATION
              </div>
              <div className="text-xs font-mono text-cyan-300 font-medium">
                CORE MEMBER — Innovators & Visionaries Club
              </div>
            </div>

            <div className="px-3 py-1.5 rounded border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 font-mono text-[10px] tracking-wider uppercase">
              NEXT: DEEPER EMBEDDED
            </div>
          </div>
        </div>

        {/* Transition to Contact */}
        <div className="mt-20 flex items-center justify-center gap-4 text-[10px] font-mono tracking-widest text-gray-400 uppercase">
          <span>ACTIVE DEVELOPMENT</span>
          <div className="w-16 md:w-32 h-px bg-cyan-500/30 relative overflow-hidden">
            {!prefersReducedMotion && (
              <motion.div
                className="absolute top-0 left-0 w-8 h-full bg-cyan-400/60"
                animate={{ x: ["-100%", "400%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>
          <span className="text-cyan-300">SYSTEM NEXT</span>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================= */
/* LIVELY VECTOR TELEMETRY SCREENS FOR EACH SUBSYSTEM                        */
/* ========================================================================= */

// Screen 1: Hardware Oscilloscope Trace
function HardwareOscilloscopeScreen() {
  return (
    <svg className="w-full h-full max-h-24 z-10" viewBox="0 0 280 80" fill="none">
      {/* Grid crosshair */}
      <line x1="0" y1="40" x2="280" y2="40" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3 3" />
      <line x1="140" y1="0" x2="140" y2="80" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3 3" />

      {/* Dynamic Square Wave */}
      <path
        d="M 10 20 L 35 20 L 35 60 L 60 60 L 60 20 L 85 20 L 85 60 L 110 60 L 110 20 L 135 20 L 135 60 L 160 60 L 160 20 L 185 20 L 185 60 L 210 60 L 210 20 L 235 20 L 235 60 L 260 60 L 260 20 L 270 20"
        stroke="#22d3ee"
        strokeWidth="1.5"
      />

      {/* Analog Signal Filter Curve */}
      <path
        d="M 10 65 Q 40 15 70 65 T 130 65 T 190 65 T 250 65"
        stroke="#38bdf8"
        strokeWidth="1"
        strokeOpacity="0.7"
      />

      <circle cx="160" cy="20" r="3" fill="#22d3ee" className="animate-ping" />
      <text x="12" y="74" fill="#64748b" fontSize="7" fontFamily="monospace">
        CH1: 3.3V PWM (SPI BUS ACTIVE)
      </text>
    </svg>
  );
}

// Screen 2: Autonomous Robotics Kinematics
function RoboticsKinematicsScreen() {
  return (
    <svg className="w-full h-full max-h-24 z-10" viewBox="0 0 280 80" fill="none">
      {/* Kinematics Grid */}
      <circle cx="140" cy="40" r="30" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.4" />
      <circle cx="140" cy="40" r="20" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.6" />

      {/* Differential Drive Path */}
      <path
        d="M 20 60 Q 70 20 120 40 T 200 35 T 260 50"
        stroke="#34d399"
        strokeWidth="1.8"
      />

      {/* Robot Center Vector */}
      <circle cx="140" cy="40" r="5" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
      <line x1="140" y1="40" x2="165" y2="25" stroke="#34d399" strokeWidth="2" strokeDasharray="3 1" />
      <circle cx="165" cy="25" r="2.5" fill="#34d399" className="animate-ping" />

      {/* Sensor Cones */}
      <path d="M 140 40 L 175 15 L 185 35 Z" fill="#10b981" fillOpacity="0.1" />

      <text x="12" y="74" fill="#64748b" fontSize="7" fontFamily="monospace">
        PID STEERING // HEADING: 034° // SPEED: 1.2m/s
      </text>
    </svg>
  );
}

// Screen 3: Applied AI & Vision
function AiVisionScreen() {
  return (
    <svg className="w-full h-full max-h-24 z-10" viewBox="0 0 280 80" fill="none">
      {/* Bounding Box 1 */}
      <rect x="35" y="15" width="60" height="45" rx="2" stroke="#818cf8" strokeWidth="1" strokeDasharray="3 2" />
      <text x="38" y="24" fill="#a5b4fc" fontSize="6" fontFamily="monospace">OBJ_01: 98%</text>

      {/* Neural Link Vectors */}
      <line x1="95" y1="37" x2="150" y2="25" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="95" y1="37" x2="150" y2="55" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="150" y1="25" x2="215" y2="40" stroke="#c084fc" strokeWidth="1.5" />
      <line x1="150" y1="55" x2="215" y2="40" stroke="#c084fc" strokeWidth="1.5" />

      {/* Neural Nodes */}
      <circle cx="150" cy="25" r="5" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.2" />
      <circle cx="150" cy="55" r="5" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="1.2" />

      {/* Inference Target */}
      <circle cx="215" cy="40" r="7" fill="#4c1d95" stroke="#c084fc" strokeWidth="1.5" />
      <circle cx="215" cy="40" r="10" stroke="#c084fc" strokeWidth="0.8" strokeDasharray="2 2" className="animate-spin" />

      <text x="12" y="74" fill="#64748b" fontSize="7" fontFamily="monospace">
        TENSOR INFERENCE // LATENCY: 18ms // CONF: 0.98
      </text>
    </svg>
  );
}

// Screen 4: Connected Systems Pipeline
function SoftwarePipelineScreen() {
  return (
    <svg className="w-full h-full max-h-24 z-10" viewBox="0 0 280 80" fill="none">
      {/* Real-time Bus Pipeline */}
      <line x1="10" y1="40" x2="270" y2="40" stroke="#2563eb" strokeWidth="1.5" />

      {/* Ingestion Packets */}
      <rect x="30" y="28" width="35" height="24" rx="2" fill="#0f172a" stroke="#60a5fa" strokeWidth="1" />
      <text x="47" y="43" fill="#93c5fd" fontSize="7" fontFamily="monospace" textAnchor="middle">MQTT</text>

      <path d="M 65 40 L 105 40" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />

      {/* API Gateway */}
      <rect x="105" y="24" width="60" height="32" rx="3" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="135" y="42" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">FASTAPI</text>

      <path d="M 165 40 L 205 40" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />

      {/* Stream Target UI */}
      <rect x="205" y="28" width="50" height="24" rx="2" fill="#0f172a" stroke="#60a5fa" strokeWidth="1" />
      <text x="230" y="43" fill="#93c5fd" fontSize="7" fontFamily="monospace" textAnchor="middle">REACT</text>

      <circle cx="185" cy="40" r="3" fill="#38bdf8" className="animate-ping" />

      <text x="12" y="74" fill="#64748b" fontSize="7" fontFamily="monospace">
        REAL-TIME STREAM // 200 OK // LATENCY: 16ms
      </text>
    </svg>
  );
}
