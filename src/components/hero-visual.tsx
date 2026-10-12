"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type SubsystemId = "sense" | "connect" | "compute" | "visualize" | "decide";

interface SubsystemInfo {
  id: SubsystemId;
  label: string;
  code: string;
  category: string;
  status: string;
  spec: string;
  telemetry: string;
}

const SUBSYSTEMS: Record<SubsystemId, SubsystemInfo> = {
  sense: {
    id: "sense",
    label: "SENSE",
    code: "AFE-01",
    category: "Transducer & Analog Front-End",
    status: "ACQUIRING",
    spec: "16-bit Σ-Δ ADC // 2.4 MSPS",
    telemetry: "Vin: 3.28V | Noise: -84dBm | FOV: 60°",
  },
  connect: {
    id: "connect",
    label: "CONNECT",
    code: "RF-24",
    category: "Wireless Transceiver & Mesh",
    status: "LINKED",
    spec: "2.4GHz ISM // IEEE 802.15.4",
    telemetry: "TX: +14dBm | RSSI: -42dBm | BER: 10⁻⁷",
  },
  compute: {
    id: "compute",
    label: "COMPUTE",
    code: "MCU-32",
    category: "Heterogeneous Embedded SoC",
    status: "PROCESSING",
    spec: "ARM Cortex-M7 + DSP // 480MHz",
    telemetry: "Load: 28% | Temp: 38.4°C | DMA: Active",
  },
  visualize: {
    id: "visualize",
    label: "VISUALIZE",
    code: "HUD-OSC",
    category: "Real-time Telemetry & Waveform",
    status: "TRIGGERED",
    spec: "Digital Storage Scope // 100MS/s",
    telemetry: "Vpp: 3.30V | Freq: 12.45kHz | Locked",
  },
  decide: {
    id: "decide",
    label: "DECIDE",
    code: "ACT-PWM",
    category: "Closed-Loop Control & Actuation",
    status: "ARMED",
    spec: "MOSFET Bridge // 25kHz PWM",
    telemetry: "Duty: 76.4% | Loop: Locked | State: OK",
  },
};

const STAGE_CYCLE: SubsystemId[] = ["sense", "connect", "compute", "visualize", "decide"];

export function HeroSystemVisualization() {
  const [hoveredSubsystem, setHoveredSubsystem] = useState<SubsystemId | null>(null);
  const [cycleIndex, setCycleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // Automatic gentle cycle through the subsystems when not hovered
  useEffect(() => {
    if (hoveredSubsystem || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setCycleIndex((prev) => (prev + 1) % STAGE_CYCLE.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [hoveredSubsystem, prefersReducedMotion]);

  const activeId = hoveredSubsystem || STAGE_CYCLE[cycleIndex];
  const activeData = SUBSYSTEMS[activeId];

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Outer Chassis / Workstation Frame */}
      <div className="relative w-full rounded-sm border border-navy-700/80 bg-[#020510]/90 backdrop-blur-md shadow-[0_0_40px_rgba(2,6,23,0.9),inset_0_0_20px_rgba(6,182,212,0.03)] overflow-hidden">
        {/* Top Instrumentation Header Bar */}
        <div className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-navy-800/80 bg-navy-950/60 font-mono text-[9px] md:text-[10px] text-gray-400 select-none">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="flex items-center gap-1.5 text-cyan-accent font-semibold tracking-wider">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse motion-reduce:animate-none" />
              ECE.SYSTEM_CORE
            </span>
            <span className="text-navy-600 hidden sm:inline">|</span>
            <span className="text-gray-400 hidden sm:inline">REV: 4.2</span>
            <span className="text-navy-600 hidden md:inline">|</span>
            <span className="text-gray-500 hidden md:inline">BOARD_ID: VVCE-ECE-2026</span>
          </div>

          <div className="flex items-center gap-2 md:gap-4 font-mono text-[9px]">
            <span className="text-gray-500 hidden lg:inline">BUS: 32-BIT // CLK: 480MHz</span>
            <span className="px-1.5 py-0.5 rounded-xs bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/30 font-medium">
              STATUS: {activeData.status}
            </span>
          </div>
        </div>

        {/* Primary ECE Engineering Canvas */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/11] min-h-[440px] md:min-h-[500px] lg:min-h-[540px] p-1 md:p-2 flex items-center justify-center">
          {/* Subtle Ambient Radial Lighting Behind Hardware */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_48%,rgba(6,182,212,0.07)_0%,rgba(59,130,246,0.04)_40%,transparent_75%)]" />

          {/* Master Vector Circuit & Hardware Scene */}
          <svg
            className="w-full h-full block"
            viewBox="0 0 940 640"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Glow Filter for Active Traces and Waveforms */}
              <filter id="trace-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="core-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="hud-glow" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Silicon Die Metallic Gradient */}
              <radialGradient id="die-gradient" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#0f2142" />
                <stop offset="65%" stopColor="#060f22" />
                <stop offset="100%" stopColor="#020612" />
              </radialGradient>

              {/* PCB Substrate Gradient */}
              <linearGradient id="pcb-surface" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#030816" />
                <stop offset="50%" stopColor="#050e24" />
                <stop offset="100%" stopColor="#020614" />
              </linearGradient>

              {/* Holographic Oscilloscope HUD Glass */}
              <linearGradient id="hud-glass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(8, 28, 64, 0.75)" />
                <stop offset="100%" stopColor="rgba(4, 14, 34, 0.90)" />
              </linearGradient>

              {/* Metallic Gold ENIG Pads */}
              <linearGradient id="gold-pad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            {/* ======================================================== */}
            {/* LAYER 1: PCB SUBSTRATE, MOUNTING HOLES & SILKSCREEN GRID */}
            {/* ======================================================== */}
            {/* Outer PCB Board Contour */}
            <rect
              x="16"
              y="16"
              width="908"
              height="608"
              rx="12"
              fill="url(#pcb-surface)"
              stroke="#1e293b"
              strokeWidth="1.5"
            />
            {/* Inner Copper Ground Plane Border */}
            <rect
              x="26"
              y="26"
              width="888"
              height="588"
              rx="8"
              fill="none"
              stroke="#0f2242"
              strokeWidth="1"
              strokeDasharray="8 4"
            />

            {/* Corner Plated Mounting Holes (with Gold ENIG Annular Rings) */}
            <g className="text-amber-500/80">
              {/* Top-Left */}
              <circle cx="44" cy="44" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="44" cy="44" r="5" fill="#030712" stroke="#475569" strokeWidth="1" />
              <line x1="30" y1="44" x2="58" y2="44" stroke="currentColor" strokeWidth="0.75" />
              <line x1="44" y1="30" x2="44" y2="58" stroke="currentColor" strokeWidth="0.75" />

              {/* Top-Right */}
              <circle cx="896" cy="44" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="896" cy="44" r="5" fill="#030712" stroke="#475569" strokeWidth="1" />
              <line x1="882" y1="44" x2="910" y2="44" stroke="currentColor" strokeWidth="0.75" />
              <line x1="896" y1="30" x2="896" y2="58" stroke="currentColor" strokeWidth="0.75" />

              {/* Bottom-Left */}
              <circle cx="44" cy="596" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="44" cy="596" r="5" fill="#030712" stroke="#475569" strokeWidth="1" />
              <line x1="30" y1="596" x2="58" y2="596" stroke="currentColor" strokeWidth="0.75" />
              <line x1="44" y1="582" x2="44" y2="610" stroke="currentColor" strokeWidth="0.75" />

              {/* Bottom-Right */}
              <circle cx="896" cy="596" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="896" cy="596" r="5" fill="#030712" stroke="#475569" strokeWidth="1" />
              <line x1="882" y1="596" x2="910" y2="596" stroke="currentColor" strokeWidth="0.75" />
              <line x1="896" y1="582" x2="896" y2="610" stroke="currentColor" strokeWidth="0.75" />
            </g>

            {/* Engineering Silkscreen Grid & Calibration Marks */}
            <g stroke="#172554" strokeWidth="0.5" opacity="0.4">
              {/* Horizontal Division Guidelines */}
              <line x1="36" y1="170" x2="904" y2="170" strokeDasharray="3 9" />
              <line x1="36" y1="315" x2="904" y2="315" strokeDasharray="3 9" />
              <line x1="36" y1="470" x2="904" y2="470" strokeDasharray="3 9" />

              {/* Vertical Division Guidelines */}
              <line x1="280" y1="36" x2="280" y2="604" strokeDasharray="3 9" />
              <line x1="470" y1="36" x2="470" y2="604" strokeDasharray="3 9" />
              <line x1="660" y1="36" x2="660" y2="604" strokeDasharray="3 9" />
            </g>

            {/* PCB Silkscreen Annotations & Fiducials */}
            <g fill="#475569" className="font-mono text-[7px] tracking-wider select-none">
              <text x="65" y="48">FID_1 [+]</text>
              <text x="830" y="48">FID_2 [+]</text>
              <text x="65" y="600">FID_3 [+]</text>
              <text x="800" y="600">DEV_SYS // 2026</text>
              <text x="410" y="44" fill="#38bdf8" opacity="0.6">
                BUS_CLK: 480MHz // SYNC
              </text>
            </g>

            {/* Via Stitching Arrays (High-Frequency Shielding along Ground Borders) */}
            <g fill="#b45309" opacity="0.45">
              {[80, 110, 140, 170, 200, 230, 710, 740, 770, 800, 830].map((vx, i) => (
                <circle key={`vt-${i}`} cx={vx} cy="32" r="1.5" />
              ))}
              {[80, 110, 140, 170, 200, 230, 710, 740, 770, 800, 830].map((vx, i) => (
                <circle key={`vb-${i}`} cx={vx} cy="608" r="1.5" />
              ))}
              {[80, 120, 160, 200, 440, 480, 520, 560].map((vy, i) => (
                <circle key={`vl-${i}`} cx="32" cy={vy} r="1.5" />
              ))}
              {[80, 120, 160, 200, 440, 480, 520, 560].map((vy, i) => (
                <circle key={`vr-${i}`} cx="908" cy={vy} r="1.5" />
              ))}
            </g>

            {/* ======================================================== */}
            {/* LAYER 2: INTERCONNECT BUSES, FANOUT TRACES & DIFF PAIRS */}
            {/* ======================================================== */}
            {/* Base Copper Routing Network (Inactive Background Conductors) */}
            <g stroke="#1e293b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              {/* SENSE -> MCU Routing Channels */}
              <path d="M 230,165 L 300,165 L 340,240 L 400,270" />
              <path d="M 230,175 L 290,175 L 330,250 L 400,280" />
              <path d="M 230,185 L 280,185 L 320,260 L 400,290" />

              {/* CONNECT -> MCU High-Speed SPI / UART Bus */}
              <path d="M 700,160 L 630,160 L 580,240 L 540,265" />
              <path d="M 700,170 L 640,170 L 590,250 L 540,275" />
              <path d="M 700,180 L 650,180 L 600,260 L 540,285" />

              {/* MCU -> VISUALIZE Display Bus */}
              <path d="M 540,330 L 600,330 L 630,360 L 660,360" />
              <path d="M 540,340 L 610,340 L 640,370 L 660,370" />
              <path d="M 540,350 L 620,350 L 650,380 L 660,380" />

              {/* MCU -> DECIDE Actuator Control Bus */}
              <path d="M 440,385 L 440,440 L 360,480 L 250,480" />
              <path d="M 450,385 L 450,450 L 370,490 L 250,490" />
              <path d="M 460,385 L 460,460 L 380,500 L 250,500" />

              {/* Differential Length-Tuned Serpentine Traces (High-Speed Clock/Data) */}
              <path
                d="M 470,160 L 470,180 L 466,183 L 474,186 L 466,189 L 474,192 L 466,195 L 474,198 L 470,202 L 470,240"
                stroke="#334155"
                strokeWidth="1"
              />
              <path
                d="M 480,160 L 480,180 L 476,183 L 484,186 L 476,189 L 484,192 L 476,195 L 484,198 L 480,202 L 480,240"
                stroke="#334155"
                strokeWidth="1"
              />
            </g>

            {/* ACTIVE HIGHLIGHTED TRACES (Dynamically Illuminating with Subsystem State) */}
            <g strokeLinecap="round" strokeLinejoin="round">
              {/* Active Trace: SENSE -> MCU */}
              <path
                d="M 230,170 L 295,170 L 335,245 L 400,275"
                stroke={activeId === "sense" ? "#06b6d4" : "#1e3a5f"}
                strokeWidth={activeId === "sense" ? "2" : "1.2"}
                filter={activeId === "sense" ? "url(#trace-glow)" : undefined}
                className="transition-colors duration-500"
              />

              {/* Active Trace: CONNECT -> MCU */}
              <path
                d="M 700,170 L 640,170 L 590,250 L 540,275"
                stroke={activeId === "connect" ? "#38bdf8" : "#1e3a5f"}
                strokeWidth={activeId === "connect" ? "2" : "1.2"}
                filter={activeId === "connect" ? "url(#trace-glow)" : undefined}
                className="transition-colors duration-500"
              />

              {/* Active Trace: MCU -> VISUALIZE */}
              <path
                d="M 540,335 L 605,335 L 635,365 L 660,365"
                stroke={activeId === "visualize" ? "#06b6d4" : "#1e3a5f"}
                strokeWidth={activeId === "visualize" ? "2" : "1.2"}
                filter={activeId === "visualize" ? "url(#trace-glow)" : undefined}
                className="transition-colors duration-500"
              />

              {/* Active Trace: MCU -> DECIDE */}
              <path
                d="M 450,385 L 450,450 L 370,490 L 250,490"
                stroke={activeId === "decide" ? "#10b981" : "#1e3a5f"}
                strokeWidth={activeId === "decide" ? "2" : "1.2"}
                filter={activeId === "decide" ? "url(#trace-glow)" : undefined}
                className="transition-colors duration-500"
              />
            </g>

            {/* SENSE -> COMPUTE Animated Signal Data Packets */}
            {!prefersReducedMotion && (
              <g>
                <motion.circle
                  r="3"
                  fill="#22d3ee"
                  filter="url(#trace-glow)"
                  animate={{
                    cx: [230, 295, 335, 400],
                    cy: [170, 170, 245, 275],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0,
                  }}
                />
                <motion.circle
                  r="3"
                  fill="#38bdf8"
                  filter="url(#trace-glow)"
                  animate={{
                    cx: [700, 640, 590, 540],
                    cy: [170, 170, 250, 275],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                />
                <motion.circle
                  r="3"
                  fill="#06b6d4"
                  filter="url(#trace-glow)"
                  animate={{
                    cx: [540, 605, 635, 660],
                    cy: [335, 335, 365, 365],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                  }}
                />
                <motion.circle
                  r="3"
                  fill="#34d399"
                  filter="url(#trace-glow)"
                  animate={{
                    cx: [450, 450, 370, 250],
                    cy: [385, 450, 490, 490],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4.5,
                  }}
                />
              </g>
            )}

            {/* ======================================================== */}
            {/* LAYER 3: SUBSYSTEM 1 — SENSE (ANALOG TRANSDUCER & AFE)   */}
            {/* ======================================================== */}
            <g
              className="cursor-pointer transition-transform duration-300 group"
              onClick={() => setHoveredSubsystem("sense")}
              onMouseEnter={() => setHoveredSubsystem("sense")}
              onMouseLeave={() => setHoveredSubsystem(null)}
            >
              {/* Outer Module Enclosure Border */}
              <rect
                x="60"
                y="65"
                width="170"
                height="150"
                rx="6"
                fill="#050e24"
                stroke={activeId === "sense" ? "#06b6d4" : "#1e3a5f"}
                strokeWidth={activeId === "sense" ? "1.5" : "1"}
                className="transition-colors duration-300"
              />

              {/* Module Header Bar */}
              <rect x="60" y="65" width="170" height="22" rx="6" fill="#081738" />
              <text x="72" y="80" fill="#38bdf8" className="font-mono text-[9px] font-semibold tracking-wider">
                01 // SENSE
              </text>
              <text x="175" y="80" fill="#94a3b8" className="font-mono text-[7px]">
                AFE_CH1
              </text>

              {/* Ultrasonic / Radar Concentric Sensor Waves */}
              <g className="text-cyan-accent">
                <circle cx="105" cy="130" r="12" fill="#0c1f48" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="105" cy="130" r="4" fill="#38bdf8" />
                {/* Radiation Arcs */}
                <path d="M 125,120 A 24 24 0 0 1 125,140" stroke="#06b6d4" strokeWidth="1.2" fill="none" opacity="0.8" />
                <path d="M 135,114 A 36 36 0 0 1 135,146" stroke="#06b6d4" strokeWidth="1" fill="none" opacity="0.5" />
                <path d="M 145,108 A 48 48 0 0 1 145,152" stroke="#06b6d4" strokeWidth="0.8" fill="none" opacity="0.3" strokeDasharray="3 3" />
              </g>

              {/* Instrumentation Amp / Filter Footprints */}
              <rect x="160" y="112" width="28" height="36" fill="#0f172a" stroke="#475569" strokeWidth="1" rx="2" />
              {/* Amp Pins */}
              {[-8, 0, 8].map((offset, i) => (
                <rect key={`amp-pin-${i}`} x="156" y={128 + offset} width="4" height="2" fill="#94a3b8" />
              ))}
              <text x="164" y="133" fill="#cbd5e1" className="font-mono text-[6px]">
                INA
              </text>

              {/* Test Points TP_IN1 / TP_IN2 */}
              <circle cx="85" cy="180" r="3.5" fill="none" stroke="#f59e0b" strokeWidth="1" />
              <circle cx="85" cy="180" r="1.5" fill="#f59e0b" />
              <text x="94" y="183" fill="#94a3b8" className="font-mono text-[7px]">
                TP_IN: 3.3V
              </text>

              {/* Telemetry Status Line */}
              <text x="72" y="202" fill="#38bdf8" className="font-mono text-[7.5px] tracking-tight">
                ADC: 2.4 MSPS Σ-Δ
              </text>
            </g>

            {/* ======================================================== */}
            {/* LAYER 4: SUBSYSTEM 2 — CONNECT (RF TRANSCEIVER & MESH)   */}
            {/* ======================================================== */}
            <g
              className="cursor-pointer transition-transform duration-300 group"
              onClick={() => setHoveredSubsystem("connect")}
              onMouseEnter={() => setHoveredSubsystem("connect")}
              onMouseLeave={() => setHoveredSubsystem(null)}
            >
              {/* Outer Module Enclosure Border */}
              <rect
                x="705"
                y="65"
                width="175"
                height="150"
                rx="6"
                fill="#050e24"
                stroke={activeId === "connect" ? "#38bdf8" : "#1e3a5f"}
                strokeWidth={activeId === "connect" ? "1.5" : "1"}
                className="transition-colors duration-300"
              />

              {/* Module Header Bar */}
              <rect x="705" y="65" width="175" height="22" rx="6" fill="#081738" />
              <text x="718" y="80" fill="#38bdf8" className="font-mono text-[9px] font-semibold tracking-wider">
                02 // CONNECT
              </text>
              <text x="835" y="80" fill="#94a3b8" className="font-mono text-[7px]">
                RF_2.4G
              </text>

              {/* Planar PCB Meander Line Antenna Geometry */}
              <g stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeLinecap="square">
                {/* Inverted-F / Meander Antenna Trace */}
                <path d="M 725,145 L 725,105 L 738,105 L 738,135 L 750,135 L 750,105 L 762,105 L 762,135 L 775,135 L 775,105" />
                <line x1="725" y1="130" x2="715" y2="130" stroke="#f59e0b" strokeWidth="1.2" />
              </g>

              {/* Electromagnetic Radiating Waves */}
              <g stroke="#38bdf8" strokeWidth="1" fill="none">
                <path d="M 788,110 A 18 18 0 0 1 788,130" opacity="0.9" />
                <path d="M 798,104 A 30 30 0 0 1 798,136" opacity="0.6" />
                <path d="M 808,98 A 42 42 0 0 1 808,142" opacity="0.3" strokeDasharray="3 3" />
              </g>

              {/* Transceiver IC Footprint */}
              <rect x="825" y="105" width="36" height="36" fill="#0f172a" stroke="#475569" strokeWidth="1" rx="2" />
              <text x="831" y="125" fill="#cbd5e1" className="font-mono text-[6px]">
                CC2500
              </text>

              {/* Dual LED Indicators (TX: Cyan, RX: Green) */}
              <circle cx="728" cy="175" r="2.5" fill="#06b6d4" filter="url(#hud-glow)" />
              <text x="735" y="177" fill="#94a3b8" className="font-mono text-[6.5px]">
                TX: +14dBm
              </text>

              <circle cx="800" cy="175" r="2.5" fill="#10b981" filter="url(#hud-glow)" />
              <text x="807" y="177" fill="#94a3b8" className="font-mono text-[6.5px]">
                RX: -42dBm
              </text>

              {/* Telemetry Status Line */}
              <text x="718" y="202" fill="#38bdf8" className="font-mono text-[7.5px] tracking-tight">
                PROTO: IEEE 802.15.4 / MESH
              </text>
            </g>

            {/* ======================================================== */}
            {/* LAYER 5: SUBSYSTEM 3 — COMPUTE (CENTRAL EMBEDDED SoC)    */}
            {/* ======================================================== */}
            <g
              className="cursor-pointer transition-transform duration-300"
              onClick={() => setHoveredSubsystem("compute")}
              onMouseEnter={() => setHoveredSubsystem("compute")}
              onMouseLeave={() => setHoveredSubsystem(null)}
            >
              {/* Outer Decoupling & Ground Halo */}
              <rect
                x="375"
                y="215"
                width="190"
                height="190"
                rx="6"
                fill="none"
                stroke={activeId === "compute" ? "#06b6d4" : "#172554"}
                strokeWidth="1"
                strokeDasharray="4 4"
                className="transition-colors duration-300"
              />

              {/* High-Pin-Count QFP Package Leadframe Pins (16 pins per side = 64 pins) */}
              <g fill="#94a3b8">
                {/* North Pins */}
                {Array.from({ length: 14 }).map((_, i) => (
                  <rect key={`np-${i}`} x={412 + i * 8.5} y="235" width="4" height="12" fill="url(#gold-pad)" />
                ))}
                {/* South Pins */}
                {Array.from({ length: 14 }).map((_, i) => (
                  <rect key={`sp-${i}`} x={412 + i * 8.5} y="373" width="4" height="12" fill="url(#gold-pad)" />
                ))}
                {/* West Pins */}
                {Array.from({ length: 14 }).map((_, i) => (
                  <rect key={`wp-${i}`} x="390" y={257 + i * 8.5} width="12" height="4" fill="url(#gold-pad)" />
                ))}
                {/* East Pins */}
                {Array.from({ length: 14 }).map((_, i) => (
                  <rect key={`ep-${i}`} x="538" y={257 + i * 8.5} width="12" height="4" fill="url(#gold-pad)" />
                ))}
              </g>

              {/* Main Silicon Chip Package Body */}
              <rect
                x="400"
                y="245"
                width="140"
                height="130"
                rx="6"
                fill="#030712"
                stroke={activeId === "compute" ? "#38bdf8" : "#334155"}
                strokeWidth="1.5"
                className="transition-colors duration-300"
              />

              {/* Pin 1 Orientation Index Dimple (Top-Left) */}
              <circle cx="414" cy="258" r="3.5" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />

              {/* Internal Exposed Silicon Die / Heat Spreader */}
              <rect
                x="422"
                y="265"
                width="96"
                height="90"
                rx="4"
                fill="url(#die-gradient)"
                stroke="#1e293b"
                strokeWidth="1"
              />

              {/* Die Core Active Illumination Sheen */}
              <rect
                x="430"
                y="273"
                width="80"
                height="74"
                fill="none"
                stroke={activeId === "compute" ? "#22d3ee" : "#0f224a"}
                strokeWidth="1"
                filter={activeId === "compute" ? "url(#core-glow)" : undefined}
                className="transition-colors duration-300"
              />

              {/* Silicon Laser Silkscreen Typography */}
              <text x="470" y="292" fill="#f8fafc" textAnchor="middle" className="font-mono text-[9px] font-bold tracking-wider">
                CHARAN // ECE
              </text>
              <text x="470" y="306" fill="#38bdf8" textAnchor="middle" className="font-mono text-[7.5px] font-medium tracking-tight">
                STM32H7-AI // 480MHz
              </text>
              <text x="470" y="320" fill="#94a3b8" textAnchor="middle" className="font-mono text-[6.5px]">
                32-BIT RISC-V + DSP
              </text>

              {/* Dynamic Core Status Indicators */}
              <g className="font-mono text-[6px]">
                <circle cx="442" cy="336" r="2" fill="#22c55e" />
                <text x="447" y="338" fill="#cbd5e1">PWR</text>

                <circle cx="474" cy="336" r="2" fill="#06b6d4" />
                <text x="479" y="338" fill="#cbd5e1">CLK</text>

                <circle cx="504" cy="336" r="2" fill="#a855f7" />
                <text x="509" y="338" fill="#cbd5e1">DMA</text>
              </g>

              {/* Subsystem Tag on Board */}
              <text x="470" y="420" fill="#38bdf8" textAnchor="middle" className="font-mono text-[8px] font-semibold tracking-wider">
                03 // COMPUTE CORE
              </text>
            </g>

            {/* ======================================================== */}
            {/* LAYER 6: SUBSYSTEM 4 — VISUALIZE (OSCILLOSCOPE HUD)      */}
            {/* ======================================================== */}
            <g
              className="cursor-pointer transition-transform duration-300 group"
              onClick={() => setHoveredSubsystem("visualize")}
              onMouseEnter={() => setHoveredSubsystem("visualize")}
              onMouseLeave={() => setHoveredSubsystem(null)}
            >
              {/* Floating Holographic Glass Screen Chassis */}
              <rect
                x="655"
                y="280"
                width="225"
                height="190"
                rx="6"
                fill="url(#hud-glass)"
                stroke={activeId === "visualize" ? "#06b6d4" : "#1e3a5f"}
                strokeWidth={activeId === "visualize" ? "1.5" : "1"}
                filter="url(#hud-glow)"
                className="transition-colors duration-300"
              />

              {/* Glass HUD Header Bar */}
              <rect x="655" y="280" width="225" height="22" rx="6" fill="#081c44" />
              <text x="668" y="295" fill="#38bdf8" className="font-mono text-[9px] font-semibold tracking-wider">
                04 // VISUALIZE
              </text>
              <text x="815" y="295" fill="#22c55e" className="font-mono text-[7px] font-medium">
                ● TRIG: LOCKED
              </text>

              {/* Oscilloscope Graticule Screen Box */}
              <rect x="665" y="308" width="205" height="110" rx="3" fill="#020817" stroke="#172554" strokeWidth="0.8" />

              {/* Graticule Grid Coordinates (Dotted Divisions) */}
              <g stroke="#1e293b" strokeWidth="0.5" strokeDasharray="1 3">
                {/* Horizontal Divs */}
                <line x1="665" y1="330" x2="870" y2="330" />
                <line x1="665" y1="352" x2="870" y2="352" />
                <line x1="665" y1="374" x2="870" y2="374" />
                <line x1="665" y1="396" x2="870" y2="396" />

                {/* Vertical Divs */}
                <line x1="706" y1="308" x2="706" y2="418" />
                <line x1="747" y1="308" x2="747" y2="418" />
                <line x1="788" y1="308" x2="788" y2="418" />
                <line x1="829" y1="308" x2="829" y2="418" />
              </g>

              {/* Dynamic Oscilloscope Waveform (Multi-Harmonic Analog Trace) */}
              <g filter="url(#trace-glow)">
                {!prefersReducedMotion ? (
                  <motion.path
                    d="M 665,363 Q 685,320 705,363 T 745,363 T 785,325 T 825,385 T 870,363"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    animate={{
                      d: [
                        "M 665,363 Q 685,320 705,363 T 745,363 T 785,325 T 825,385 T 870,363",
                        "M 665,363 Q 685,340 705,363 T 745,330 T 785,390 T 825,340 T 870,363",
                        "M 665,363 Q 685,320 705,363 T 745,363 T 785,325 T 825,385 T 870,363",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ) : (
                  <path
                    d="M 665,363 Q 685,320 705,363 T 745,363 T 785,325 T 825,385 T 870,363"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                )}
              </g>

              {/* Miniature Spectrum Analyzer FFT Bars */}
              <g fill="#38bdf8" opacity="0.6">
                {[6, 14, 22, 16, 28, 12, 8].map((h, i) => (
                  <rect key={`fft-${i}`} x={845 + i * 3} y={415 - h} width="2" height={h} rx="0.5" />
                ))}
              </g>

              {/* Waveform Measurement Readout Tags */}
              <g fill="#94a3b8" className="font-mono text-[7px]">
                <text x="672" y="435">Vpp: 3.32V</text>
                <text x="735" y="435">Freq: 12.45kHz</text>
                <text x="815" y="435" fill="#38bdf8">1.0ms/div</text>
              </g>

              {/* Telemetry Status Line */}
              <text x="668" y="458" fill="#38bdf8" className="font-mono text-[7.5px] tracking-tight">
                SCOPE: DUAL-TRACE FFT ENABLED
              </text>
            </g>

            {/* ======================================================== */}
            {/* LAYER 7: SUBSYSTEM 5 — DECIDE (ACTUATION & PWM CONTROL)  */}
            {/* ======================================================== */}
            <g
              className="cursor-pointer transition-transform duration-300 group"
              onClick={() => setHoveredSubsystem("decide")}
              onMouseEnter={() => setHoveredSubsystem("decide")}
              onMouseLeave={() => setHoveredSubsystem(null)}
            >
              {/* Outer Module Enclosure Border */}
              <rect
                x="60"
                y="420"
                width="190"
                height="150"
                rx="6"
                fill="#050e24"
                stroke={activeId === "decide" ? "#10b981" : "#1e3a5f"}
                strokeWidth={activeId === "decide" ? "1.5" : "1"}
                className="transition-colors duration-300"
              />

              {/* Module Header Bar */}
              <rect x="60" y="420" width="190" height="22" rx="6" fill="#081738" />
              <text x="72" y="435" fill="#34d399" className="font-mono text-[9px] font-semibold tracking-wider">
                05 // DECIDE
              </text>
              <text x="188" y="435" fill="#94a3b8" className="font-mono text-[7px]">
                ACT_CTRL
              </text>

              {/* Power MOSFET / H-Bridge Driver Stage */}
              <g fill="#0f172a" stroke="#475569" strokeWidth="1">
                <rect x="75" y="455" width="22" height="26" rx="2" />
                <rect x="105" y="455" width="22" height="26" rx="2" />
                <rect x="135" y="455" width="22" height="26" rx="2" />
              </g>
              <g fill="#cbd5e1" className="font-mono text-[5.5px]">
                <text x="78" y="471">Q1</text>
                <text x="108" y="471">Q2</text>
                <text x="138" y="471">Q3</text>
              </g>

              {/* PWM Dynamic Pulse Train Graph */}
              <g stroke="#10b981" strokeWidth="1.2" fill="none">
                <path d="M 75,515 L 85,515 L 85,498 L 105,498 L 105,515 L 115,515 L 115,498 L 135,498 L 135,515 L 145,515" />
              </g>

              {/* Output High-Current Terminal Block */}
              <rect x="180" y="458" width="55" height="52" fill="#0a192f" stroke="#334155" strokeWidth="1" rx="3" />
              <circle cx="195" cy="474" r="4" fill="#d97706" />
              <circle cx="195" cy="494" r="4" fill="#d97706" />
              <text x="204" y="477" fill="#f8fafc" className="font-mono text-[7px]">M_OUT+</text>
              <text x="204" y="497" fill="#f8fafc" className="font-mono text-[7px]">M_OUT-</text>

              {/* Telemetry Status Line */}
              <text x="72" y="540" fill="#34d399" className="font-mono text-[7.5px] tracking-tight">
                PWM: 76.4% // 25kHz CLOSED-LOOP
              </text>
              <text x="72" y="555" fill="#94a3b8" className="font-mono text-[6.5px]">
                STATE: OPTIMAL ACTUATION
              </text>
            </g>
          </svg>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE SUBSYSTEM TELEMETRY HUD FOOTER               */}
        {/* ======================================================== */}
        <div className="border-t border-navy-800/80 bg-navy-950/80 px-3 md:px-5 py-2.5">
          {/* Subsystem Quick Switch Tabs */}
          <div className="grid grid-cols-5 gap-1 md:gap-2 mb-2">
            {STAGE_CYCLE.map((id) => {
              const item = SUBSYSTEMS[id];
              const isActive = activeId === id;
              return (
                <button
                  key={id}
                  onClick={() => setHoveredSubsystem(id)}
                  onMouseEnter={() => setHoveredSubsystem(id)}
                  onMouseLeave={() => setHoveredSubsystem(null)}
                  className={cn(
                    "flex flex-col items-center py-1 px-1 rounded-xs font-mono text-[9px] md:text-[10px] tracking-wider transition-all duration-200 border text-center",
                    isActive
                      ? "bg-cyan-accent/15 border-cyan-accent/60 text-white shadow-[0_0_12px_rgba(6,182,212,0.2)] font-semibold"
                      : "bg-navy-900/40 border-navy-800 text-gray-400 hover:text-gray-200 hover:border-navy-700"
                  )}
                >
                  <span className="truncate w-full">{item.label}</span>
                  <span className="text-[7px] md:text-[8px] text-gray-500 hidden sm:inline">{item.code}</span>
                </button>
              );
            })}
          </div>

          {/* Active Subsystem Detailed Telemetry Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[9px] md:text-[10px] font-mono border-t border-navy-800/50 pt-2 text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-cyan-accent font-medium">[{activeData.label}]</span>
              <span className="text-gray-400">{activeData.category}</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-gray-400">
              <span className="text-gray-500 hidden md:inline">{activeData.spec}</span>
              <span className="text-navy-700 hidden md:inline">|</span>
              <span className="text-cyan-accent/90">{activeData.telemetry}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
