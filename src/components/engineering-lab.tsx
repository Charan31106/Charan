"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionHeader } from "./ui/section-header";
import { cn } from "@/lib/utils";

interface PipelineModule {
  step: string;
  name: string;
  phase: string;
  role: string;
  input: string;
  transform: string;
  output: string;
  probeId: string;
  signalType: string;
  keyTech: string[];
  projects: string[];
  color: string;
}

const modules: PipelineModule[] = [
  {
    step: "01",
    name: "SENSE",
    phase: "STAGE 01 // TRANSDUCTION",
    role: "Physical to Electrical",
    input: "Analog IR reflectance & Thermal gradient",
    transform: "12-bit ADC Quantization & RC Low-Pass Filter",
    output: "Normalized 0–3.3V Sensor Voltage Vector",
    probeId: "TP_01 [ANALOG_IN]",
    signalType: "12-bit ADC @ 1000 S/s",
    keyTech: ["TCRT5000 IR", "NTC Thermal Sensors", "Multi-Channel ADC"],
    projects: ["Smart Disaster Monitoring", "ThermoGuard", "Autonomous Line-Follower"],
    color: "#22d3ee"
  },
  {
    step: "02",
    name: "CONNECT",
    phase: "STAGE 02 // TRANSMISSION",
    role: "Local Bus to Network",
    input: "Raw digitized sensor frames",
    transform: "Serial bus packet framing (I2C/SPI) & Wi-Fi uplink",
    output: "Full-duplex WebSocket JSON Telemetry stream",
    probeId: "TP_02 [BUS_TX]",
    signalType: "115200 Baud // WebSockets",
    keyTech: ["ESP32 SoC", "I2C / SPI Buses", "LoRa RF", "WebSockets"],
    projects: ["Smart Disaster Monitoring", "DebrisEye", "Campus Digital Twin"],
    color: "#38bdf8"
  },
  {
    step: "03",
    name: "COMPUTE",
    phase: "STAGE 03 // INTELLIGENCE",
    role: "Telemetry to State Matrix",
    input: "Real-time telemetry data stream",
    transform: "Kalman filtering, TinyML inference & state-space math",
    output: "Estimated system state & threat/target probabilities",
    probeId: "TP_03 [CPU_CORE]",
    signalType: "18ms Async FastAPI Engine",
    keyTech: ["FastAPI", "Python NumPy", "TinyML Models", "Kalman Filters"],
    projects: ["Campus Digital Twin", "Krishi-Sanjeevini", "DebrisEye"],
    color: "#818cf8"
  },
  {
    step: "04",
    name: "VISUALIZE",
    phase: "STAGE 04 // HUD RENDER",
    role: "State Matrix to Operator UI",
    input: "Probabilistic state vector & spatial coordinates",
    transform: "Three.js 3D rendering & reactive component updates",
    output: "60 FPS interactive spatial twin & diagnostic reticle",
    probeId: "TP_04 [GPU_STREAM]",
    signalType: "60 FPS WebGL / React HUD",
    keyTech: ["React", "Three.js 3D", "Tailwind CSS", "Dynamic Reticles"],
    projects: ["DebrisEye Orbit Visualizer", "Campus Digital Twin", "Synapse Control"],
    color: "#60a5fa"
  },
  {
    step: "05",
    name: "DECIDE",
    phase: "STAGE 05 // ACTUATION",
    role: "Decision to Kinetic Action",
    input: "Control policy & safety threshold interrupts",
    transform: "Differential PID computation & PWM motor/relay triggers",
    output: "Physical motor torque, steering correction & power cutoff",
    probeId: "TP_05 [ACTUATOR_OUT]",
    signalType: "400Hz Closed-Loop PID",
    keyTech: ["L298N Motor Driver", "Power Relays", "Differential PID", "Emergency Triggers"],
    projects: ["Autonomous Line-Follower", "ThermoGuard Cutoff", "Krishi-Sanjeevini"],
    color: "#a78bfa"
  }
];

export function EngineeringLab() {
  const [selectedProbe, setSelectedProbe] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const prefersReducedMotion = useReducedMotion();

  const activeModule = modules[selectedProbe];

  const triggerSimulation = () => {
    setIsSimulating(true);
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < modules.length) {
        setSelectedProbe(current);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 700);
  };

  return (
    <section id="lab" className="py-24 relative overflow-hidden bg-transparent border-t border-cyan-500/20">
      {/* Background blueprint circuit grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            number="02"
            title="Engineering Lab"
            subtitle="The 5-stage cyber-physical pipeline for building integrated real-world systems."
          />
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={triggerSimulation}
              disabled={isSimulating}
              className={cn(
                "px-3.5 py-1.5 rounded-sm border text-[10px] font-mono tracking-widest transition-all duration-300 flex items-center gap-2",
                isSimulating
                  ? "border-cyan-400 bg-cyan-500/20 text-white shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  : "border-cyan-500/30 bg-navy-900/80 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/10"
              )}
            >
              <span className={cn("w-2 h-2 rounded-full bg-cyan-400", isSimulating && "animate-ping")} />
              {isSimulating ? "TRACING SIGNAL PULSE..." : "RUN PIPELINE SIMULATION ▶"}
            </button>
            <div className="text-[10px] font-mono tracking-widest text-gray-400 bg-navy-950/80 px-3 py-1.5 rounded border border-cyan-500/20">
              ARCHITECTURE: CONTINUOUS FLOW
            </div>
          </div>
        </div>

        {/* 5-STAGE CONTINUOUS SYSTEMS ARCHITECTURE PIPELINE */}
        <div className="relative mb-10 p-6 md:p-8 rounded-sm border border-cyan-500/30 bg-navy-950/80 backdrop-blur-md">
          {/* Header Line */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-4 mb-8 text-[10px] font-mono tracking-widest">
            <div className="flex items-center gap-2 text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>END-TO-END SIGNAL ROUTING DIAGRAM</span>
            </div>
            <div className="text-gray-400">
              CLICK ANY MODULE TO ATTACH TEST PROBE
            </div>
          </div>

          {/* Connected Flowchart Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {modules.map((mod, index) => {
              const isSelected = selectedProbe === index;
              const isLast = index === modules.length - 1;

              return (
                <div key={mod.step} className="relative flex flex-col">
                  {/* Module Box */}
                  <button
                    onClick={() => setSelectedProbe(index)}
                    className={cn(
                      "group relative p-4 rounded-sm border text-left transition-all duration-300 h-full flex flex-col justify-between overflow-hidden",
                      isSelected
                        ? "bg-navy-800/95 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.25)] ring-1 ring-cyan-400/50"
                        : "bg-navy-900/60 border-cyan-500/20 hover:border-cyan-400/50 hover:bg-navy-900/90"
                    )}
                  >
                    <div>
                      {/* Top Step + Probe ID */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={cn(
                            "text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border",
                            isSelected
                              ? "text-cyan-300 border-cyan-400/60 bg-cyan-500/20"
                              : "text-gray-400 border-cyan-500/20 bg-navy-950/60"
                          )}
                        >
                          {mod.step}
                        </span>

                        <span
                          className={cn(
                            "w-2 h-2 rounded-full transition-colors",
                            isSelected
                              ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse"
                              : "bg-navy-700 group-hover:bg-cyan-500/40"
                          )}
                        />
                      </div>

                      {/* Stage Name */}
                      <div className="text-lg font-mono font-bold text-white group-hover:text-cyan-300 transition-colors tracking-wide">
                        {mod.name}
                      </div>

                      <div className="text-[10px] font-mono text-cyan-400/70 mt-0.5 font-medium">
                        {mod.role}
                      </div>
                    </div>

                    {/* Micro Schematic Icon */}
                    <div className="my-4 py-2 border-y border-cyan-500/15 flex items-center justify-center">
                      {mod.step === "01" && <SenseMicroIcon />}
                      {mod.step === "02" && <ConnectMicroIcon />}
                      {mod.step === "03" && <ComputeMicroIcon />}
                      {mod.step === "04" && <VisualizeMicroIcon />}
                      {mod.step === "05" && <DecideMicroIcon />}
                    </div>

                    {/* Signal Tag */}
                    <div className="text-[9px] font-mono text-gray-400 bg-navy-950/80 px-2 py-1 rounded border border-cyan-500/15 truncate w-full">
                      {mod.signalType}
                    </div>

                    {/* Active Probe Bottom Edge */}
                    {isSelected && (
                      <motion.div
                        layoutId="active-probe-edge"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                      />
                    )}
                  </button>

                  {/* Flow Connector Arrow between modules (Desktop) */}
                  {!isLast && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
                      <div className="w-5 h-5 rounded-full bg-navy-950 border border-cyan-400/50 flex items-center justify-center text-[10px] text-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                        →
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* DEDICATED PROBE TELEMETRY & SIGNAL TRACER INSPECTOR */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule.step}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-sm border border-cyan-500/40 bg-navy-900/90 p-6 md:p-8 backdrop-blur-md shadow-[0_8px_30px_rgba(6,14,34,0.7)] relative overflow-hidden"
          >
            {/* Top Probe Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-4 mb-6 text-[10px] font-mono tracking-widest">
              <div className="flex items-center gap-2.5 text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-bold text-white">ACTIVE PROBE:</span>
                <span>{activeModule.probeId}</span>
                <span className="text-gray-500">|</span>
                <span className="text-cyan-400">{activeModule.phase}</span>
              </div>
              <div className="text-xs font-mono text-cyan-300 bg-cyan-500/15 px-2.5 py-0.5 rounded border border-cyan-400/40">
                PROBE SIGNAL: {activeModule.signalType}
              </div>
            </div>

            {/* 3-Stage Signal Transformation Chain */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* INPUT */}
              <div className="p-4 rounded bg-navy-950/80 border border-cyan-500/20">
                <div className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>1. INPUT VECTOR</span>
                </div>
                <div className="text-sm font-mono text-white font-medium">
                  {activeModule.input}
                </div>
              </div>

              {/* TRANSFORMATION */}
              <div className="p-4 rounded bg-navy-950/80 border border-cyan-400/30">
                <div className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                  <span>2. SYSTEM TRANSFORMATION</span>
                </div>
                <div className="text-sm font-mono text-cyan-100 font-medium">
                  {activeModule.transform}
                </div>
              </div>

              {/* OUTPUT */}
              <div className="p-4 rounded bg-navy-950/80 border border-cyan-500/20">
                <div className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>3. OUTPUT PRODUCT</span>
                </div>
                <div className="text-sm font-mono text-white font-medium">
                  {activeModule.output}
                </div>
              </div>
            </div>

            {/* Bottom Row: Hardware Technologies & Real Systems */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-cyan-500/20">
              {/* Methodologies */}
              <div>
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2.5">
                  CORE HARDWARE & SOFTWARE METHODS:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModule.keyTech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-navy-950 border border-cyan-500/30 text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Applied in Charan's Systems */}
              <div>
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2.5">
                  VERIFIED IMPLEMENTATIONS IN SYSTEMS:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModule.projects.map((proj) => (
                    <span
                      key={proj}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-400/40 text-cyan-300 font-medium"
                    >
                      ⚡ {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Systems Methodology Anchor */}
        <div className="mt-8 p-4 rounded-sm border border-cyan-500/20 bg-navy-950/70 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300">BENCH SPEC:</span>
            <span>Rigol Emulation • ESP32-WROOM-32 • Logic Analyzer 24MHz • Dual H-Bridge Drivers</span>
          </div>
          <div className="text-cyan-400/80">
            TRANSDUCTION ──→ NETWORK ──→ COMPUTE ──→ HUD ──→ ACTUATE
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================= */
/* MICRO SCHEMATIC ICONS FOR EACH PIPELINE STAGE                             */
/* ========================================================================= */

function SenseMicroIcon() {
  return (
    <svg className="w-16 h-8" viewBox="0 0 64 32" fill="none">
      <path d="M 4 20 Q 18 4 32 16 T 60 16" stroke="#22d3ee" strokeWidth="1.5" />
      <circle cx="32" cy="16" r="2" fill="#22d3ee" />
    </svg>
  );
}

function ConnectMicroIcon() {
  return (
    <svg className="w-16 h-8" viewBox="0 0 64 32" fill="none">
      <path d="M 8 16 L 24 16 L 30 8 L 40 24 L 46 16 L 56 16" stroke="#38bdf8" strokeWidth="1.5" />
      <circle cx="30" cy="8" r="1.5" fill="#38bdf8" />
      <circle cx="40" cy="24" r="1.5" fill="#38bdf8" />
    </svg>
  );
}

function ComputeMicroIcon() {
  return (
    <svg className="w-16 h-8" viewBox="0 0 64 32" fill="none">
      <rect x="20" y="6" width="24" height="20" rx="2" stroke="#818cf8" strokeWidth="1.2" />
      <line x1="14" y1="12" x2="20" y2="12" stroke="#818cf8" strokeWidth="1" />
      <line x1="14" y1="20" x2="20" y2="20" stroke="#818cf8" strokeWidth="1" />
      <line x1="44" y1="12" x2="50" y2="12" stroke="#818cf8" strokeWidth="1" />
      <line x1="44" y1="20" x2="50" y2="20" stroke="#818cf8" strokeWidth="1" />
      <circle cx="32" cy="16" r="3" fill="#818cf8" />
    </svg>
  );
}

function VisualizeMicroIcon() {
  return (
    <svg className="w-16 h-8" viewBox="0 0 64 32" fill="none">
      <rect x="12" y="4" width="40" height="24" rx="2" stroke="#60a5fa" strokeWidth="1.2" />
      <polyline points="18,22 28,12 36,18 46,8" stroke="#60a5fa" strokeWidth="1.5" />
    </svg>
  );
}

function DecideMicroIcon() {
  return (
    <svg className="w-16 h-8" viewBox="0 0 64 32" fill="none">
      <circle cx="32" cy="16" r="10" stroke="#a78bfa" strokeWidth="1.2" />
      <line x1="32" y1="6" x2="32" y2="16" stroke="#a78bfa" strokeWidth="1.5" />
      <line x1="32" y1="16" x2="40" y2="20" stroke="#a78bfa" strokeWidth="1.5" />
      <circle cx="32" cy="16" r="2" fill="#a78bfa" />
    </svg>
  );
}
