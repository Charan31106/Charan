"use client";

import { motion, useReducedMotion } from "framer-motion";

const GlowFilters = () => (
  <defs>
    <filter id="env-trace-glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="env-node-glow" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <linearGradient id="trace-cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
    </linearGradient>
    <linearGradient id="trace-blue-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
      <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
    </linearGradient>
    <linearGradient id="bus-copper-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
      <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
      <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3" />
    </linearGradient>
  </defs>
);

const FixedAtmosphereAndGrid = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Deep Midnight Navy Base Radial Atmosphere Pools */}
    <div className="absolute top-[-5%] left-[-5%] w-[65vw] h-[65vh] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08)_0%,rgba(14,32,76,0.35)_45%,transparent_75%)] mix-blend-screen" />
    <div className="absolute top-[28%] right-[-10%] w-[70vw] h-[70vh] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.09)_0%,rgba(18,40,94,0.30)_50%,transparent_75%)] mix-blend-screen" />
    <div className="absolute top-[58%] left-[-8%] w-[65vw] h-[65vh] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.07)_0%,rgba(16,35,85,0.25)_50%,transparent_75%)] mix-blend-screen" />
    <div className="absolute bottom-[-10%] right-[10%] w-[75vw] h-[65vh] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.07)_0%,rgba(20,45,105,0.30)_50%,transparent_75%)] mix-blend-screen" />

    {/* Primary 120px Macro Blueprint Grid */}
    <div 
      className="absolute inset-0 opacity-[0.065]"
      style={{
        backgroundImage: `
          linear-gradient(to right, #38bdf8 1px, transparent 1px),
          linear-gradient(to bottom, #38bdf8 1px, transparent 1px)
        `,
        backgroundSize: "120px 120px",
      }}
    />
    
    {/* Secondary 24px Micro Engineering Grid */}
    <div 
      className="hidden md:block absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: `
          linear-gradient(to right, #22d3ee 1px, transparent 1px),
          linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
        `,
        backgroundSize: "24px 24px",
      }}
    />

    {/* Viewport Margin Telemetry Rails */}
    <div className="hidden xl:flex flex-col justify-between absolute left-3 top-24 bottom-12 w-6 text-[8px] font-mono text-cyan-400/40 select-none">
      <div className="flex flex-col gap-8">
        <span className="tracking-widest rotate-90 origin-left mt-4">REF:00.00</span>
        <div className="w-2 h-px bg-cyan-400/40" />
        <span className="tracking-widest rotate-90 origin-left">SYS.3V3</span>
        <div className="w-3 h-px bg-cyan-400/50" />
        <span className="tracking-widest rotate-90 origin-left">BUS.A</span>
      </div>
      <div className="flex flex-col gap-8 items-start">
        <div className="w-3 h-px bg-cyan-400/50" />
        <span className="tracking-widest rotate-90 origin-left">GND.0V</span>
        <div className="w-2 h-px bg-cyan-400/40" />
        <span className="tracking-widest rotate-90 origin-left mb-6">TERM:120R</span>
      </div>
    </div>

    <div className="hidden xl:flex flex-col justify-between items-end absolute right-3 top-24 bottom-12 w-6 text-[8px] font-mono text-electric-blue/40 select-none">
      <div className="flex flex-col gap-8 items-end">
        <span className="tracking-widest -rotate-90 origin-right mt-4">RF:2.4GHz</span>
        <div className="w-2 h-px bg-electric-blue/40" />
        <span className="tracking-widest -rotate-90 origin-right">ADC:12BIT</span>
        <div className="w-3 h-px bg-electric-blue/50" />
        <span className="tracking-widest -rotate-90 origin-right">CLK:160M</span>
      </div>
      <div className="flex flex-col gap-8 items-end">
        <div className="w-3 h-px bg-electric-blue/50" />
        <span className="tracking-widest -rotate-90 origin-right">DECIDE</span>
        <div className="w-2 h-px bg-electric-blue/40" />
        <span className="tracking-widest -rotate-90 origin-right mb-6">SYS.SYNC</span>
      </div>
    </div>
  </div>
);

export function ECEEngineeringEnvironment() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden text-cyan-accent h-full w-full">
      <FixedAtmosphereAndGrid />

      {/* ZONE 01: HERO & NAVIGATION REGION */}
      <div className="absolute top-0 left-0 w-full h-[1400px]">
        <svg className="absolute top-12 left-0 w-[420px] h-[750px]" viewBox="0 0 420 750" fill="none">
          <GlowFilters />
          <path d="M 0,80 L 160,80 L 220,140 L 220,480 L 260,520 L 340,520" stroke="url(#trace-cyan-grad)" strokeWidth="1.5" />
          <path d="M 0,95 L 150,95 L 205,150 L 205,475 L 245,515 L 340,515" stroke="url(#trace-blue-grad)" strokeWidth="1.2" strokeDasharray="6 3" />
          <path d="M 0,110 L 140,110 L 190,160 L 190,460 L 230,500 L 320,500" stroke="#38bdf8" strokeWidth="0.8" opacity="0.4" />

          <g fill="#22d3ee" opacity="0.8">
            <circle cx="340" cy="520" r="4" />
            <circle cx="340" cy="520" r="1.5" fill="#060e22" />
            <circle cx="340" cy="515" r="3" />
            <circle cx="320" cy="500" r="2.5" />
            <circle cx="220" cy="240" r="3" />
            <circle cx="220" cy="320" r="3" />
            <circle cx="220" cy="400" r="3" />
          </g>

          <g fill="#38bdf8" className="text-[8px] font-mono tracking-widest" opacity="0.65">
            <text x="232" y="243">TP101: VDD_CORE</text>
            <text x="232" y="323">TP102: SPI_MOSI</text>
            <text x="232" y="403">TP103: I2C_SDA</text>
            <text x="350" y="523">BUS_OUT_A</text>
          </g>

          <path d="M 20,280 L 80,280 L 80,295 L 40,295 L 40,310 L 80,310 L 80,325 L 40,325 L 40,340 L 80,340 L 120,340" stroke="#22d3ee" strokeWidth="1" opacity="0.35" />
          <text x="20" y="272" fill="#22d3ee" className="text-[7px] font-mono tracking-widest" opacity="0.5">DELAY_MATCH_50Ω</text>

          {!prefersReducedMotion && (
            <motion.circle 
              r="3" fill="#22d3ee" filter="url(#env-trace-glow)"
              animate={{ cx: [0, 160, 220, 220, 260, 340], cy: [80, 80, 140, 480, 520, 520], opacity: [0, 1, 1, 1, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            />
          )}
        </svg>

        <svg className="hidden lg:block absolute top-24 right-0 w-[380px] h-[600px]" viewBox="0 0 380 600" fill="none">
          <GlowFilters />
          <path d="M 380,120 L 220,120 L 160,180 L 160,420 L 80,500 L 0,500" stroke="url(#trace-cyan-grad)" strokeWidth="1.2" />
          <path d="M 380,135 L 230,135 L 175,190 L 175,410 L 95,490 L 0,490" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          
          <g fill="#38bdf8" opacity="0.6">
            <circle cx="160" cy="180" r="3" />
            <circle cx="160" cy="300" r="3" />
            <circle cx="80" cy="500" r="4" />
            <circle cx="80" cy="500" r="1.5" fill="#060e22" />
          </g>
          
          <text x="175" y="303" fill="#38bdf8" className="text-[8px] font-mono tracking-widest" opacity="0.6">EXT_BUS_RX</text>
          <text x="95" y="503" fill="#38bdf8" className="text-[8px] font-mono tracking-widest" opacity="0.6">JTAG_TCK</text>
        </svg>
      </div>

      {/* ZONE 02: ABOUT / ENGINEERING IDENTITY */}
      <div className="absolute top-[15%] left-0 w-full h-[1400px]">
        <svg className="absolute top-10 left-0 w-[450px] h-[650px]" viewBox="0 0 450 650" fill="none">
          <GlowFilters />
          <g strokeWidth="1" opacity="0.6">
            <path d="M 0,160 L 180,160 L 230,210 L 230,520" stroke="#22d3ee" />
            <path d="M 0,175 L 170,175 L 215,220 L 215,520" stroke="#38bdf8" strokeDasharray="5 3" />
            <path d="M 0,190 L 160,190 L 200,230 L 200,520" stroke="#818cf8" />
            <path d="M 0,205 L 150,205 L 185,240 L 185,520" stroke="#2563eb" />
          </g>

          <rect x="240" y="280" width="80" height="40" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          <text x="248" y="304" fill="#38bdf8" className="text-[8px] font-mono tracking-widest" opacity="0.7">SENSE_FRONTEND</text>
          
          <g fill="#22d3ee" opacity="0.75">
            <circle cx="230" cy="520" r="3" />
            <circle cx="215" cy="520" r="3" />
            <circle cx="200" cy="520" r="3" />
            <circle cx="185" cy="520" r="3" />
          </g>

          {!prefersReducedMotion && (
            <motion.circle 
              r="2.5" fill="#22d3ee" filter="url(#env-trace-glow)"
              animate={{ cx: [0, 180, 230, 230], cy: [160, 160, 210, 520], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
            />
          )}
        </svg>

        <svg className="hidden md:block absolute top-20 right-0 w-[420px] h-[550px]" viewBox="0 0 420 550" fill="none">
          <rect x="220" y="160" width="100" height="100" stroke="#38bdf8" strokeWidth="1.2" opacity="0.4" />
          <circle cx="235" cy="175" r="4" fill="#22d3ee" opacity="0.7" />
          <text x="248" y="215" fill="#38bdf8" className="text-[9px] font-mono tracking-widest" opacity="0.8">MCU_CORE</text>
          <text x="248" y="228" fill="#38bdf8" className="text-[7px] font-mono tracking-widest" opacity="0.5">32-BIT RISC-V</text>

          <path d="M 220,190 L 160,190 L 120,230 L 120,400" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
          <path d="M 220,210 L 170,210 L 140,240 L 140,400" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
          <path d="M 270,160 L 270,90 L 320,40" stroke="#38bdf8" strokeWidth="1" opacity="0.4" />

          <circle cx="120" cy="400" r="3.5" fill="#22d3ee" opacity="0.8" />
          <text x="60" y="403" fill="#22d3ee" className="text-[8px] font-mono tracking-widest" opacity="0.7">GPIO_INT</text>
        </svg>
      </div>

      {/* ZONE 03: SYSTEMS I'VE BUILT */}
      <div className="absolute top-[30%] left-0 w-full h-[2400px]">
        <svg className="hidden md:block absolute top-0 right-0 w-[300px] h-[1800px]" viewBox="0 0 300 1800" fill="none">
          <GlowFilters />
          <path d="M 180,0 L 180,1800" stroke="url(#bus-copper-grad)" strokeWidth="1.8" />
          <path d="M 195,0 L 195,1800" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="8 4" opacity="0.35" />

          <path d="M 180,300 L 80,300 L 40,340 L 0,340" stroke="#22d3ee" strokeWidth="1.2" opacity="0.6" />
          <circle cx="80" cy="300" r="3" fill="#22d3ee" opacity="0.8" />
          <text x="92" y="296" fill="#22d3ee" className="text-[8px] font-mono tracking-widest" opacity="0.7">NODE_01: DEBRISEYE</text>

          <path d="M 180,750 L 100,750 L 60,790 L 0,790" stroke="#38bdf8" strokeWidth="1.2" opacity="0.6" />
          <circle cx="100" cy="750" r="3" fill="#38bdf8" opacity="0.8" />
          <text x="112" y="746" fill="#38bdf8" className="text-[8px] font-mono tracking-widest" opacity="0.7">NODE_02: DISASTER_MON</text>

          <path d="M 180,1200 L 90,1200 L 50,1240 L 0,1240" stroke="#818cf8" strokeWidth="1.2" opacity="0.6" />
          <circle cx="90" cy="1200" r="3" fill="#818cf8" opacity="0.8" />
          <text x="102" y="1196" fill="#818cf8" className="text-[8px] font-mono tracking-widest" opacity="0.7">NODE_03: KRISHI_IOT</text>

          {!prefersReducedMotion && (
            <motion.circle 
              r="3" fill="#22d3ee" filter="url(#env-trace-glow)"
              animate={{ cy: [0, 1800], cx: [180, 180], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
          )}
        </svg>

        <svg className="absolute top-[200px] left-0 w-[350px] h-[1200px]" viewBox="0 0 350 1200" fill="none">
          <path d="M 0,200 L 120,200 L 170,250 L 170,900 L 220,950 L 300,950" stroke="url(#trace-cyan-grad)" strokeWidth="1.2" />
          <circle cx="300" cy="950" r="4" fill="#22d3ee" opacity="0.8" />
          <circle cx="300" cy="950" r="1.5" fill="#060e22" />
          <text x="210" y="940" fill="#22d3ee" className="text-[8px] font-mono tracking-widest" opacity="0.7">FPGA_FABRIC_SYNC</text>

          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <g key={i} transform={`translate(40, ${350 + i * 60})`} opacity="0.4">
              <circle cx="0" cy="0" r="2.5" fill="#38bdf8" />
              <circle cx="16" cy="0" r="2.5" fill="#38bdf8" />
              <line x1="0" y1="0" x2="16" y2="0" stroke="#38bdf8" strokeWidth="0.5" />
            </g>
          ))}
          <text x="30" y="850" fill="#38bdf8" className="text-[7px] font-mono tracking-widest rotate-90" opacity="0.5">GND_STITCH_50MIL</text>
        </svg>
      </div>

      {/* ZONE 04: ENGINEERING DNA & ARCHITECTURE */}
      <div className="absolute top-[50%] left-0 w-full h-[1600px]">
        <svg className="absolute top-0 left-0 w-full h-[800px]" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <GlowFilters />
          <circle cx="720" cy="180" r="160" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.25" />
          <circle cx="720" cy="180" r="240" stroke="#22d3ee" strokeWidth="0.5" opacity="0.15" />

          <path d="M 680,180 L 400,180 L 320,260 L 320,600" stroke="#22d3ee" strokeWidth="1.2" opacity="0.45" />
          <path d="M 670,195 L 420,195 L 350,265 L 350,600" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.35" />

          <path d="M 760,180 L 1040,180 L 1120,260 L 1120,600" stroke="#818cf8" strokeWidth="1.2" opacity="0.45" />
          <path d="M 770,195 L 1020,195 L 1090,265 L 1090,600" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.35" />

          <circle cx="320" cy="600" r="3.5" fill="#22d3ee" opacity="0.8" />
          <circle cx="1120" cy="600" r="3.5" fill="#818cf8" opacity="0.8" />
        </svg>
      </div>

      {/* ZONE 05: ENGINEERING LAB & PIPELINE */}
      <div className="absolute top-[70%] left-0 w-full h-[1600px]">
        <svg className="hidden md:block absolute top-10 left-[10%] w-[80%] h-[500px]" viewBox="0 0 1000 500" fill="none">
          <GlowFilters />
          <line x1="50" y1="250" x2="950" y2="250" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.3" />
          <line x1="500" y1="50" x2="500" y2="450" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.3" />

          <path d="M 60,250 Q 90,190 120,250 T 180,250 T 240,250 T 300,250 L 360,250 L 360,180 L 420,180 L 420,320 L 480,320 L 480,180 L 540,180 L 540,250 L 920,250" stroke="url(#trace-cyan-grad)" strokeWidth="1.5" opacity="0.4" />
          <text x="60" y="170" fill="#22d3ee" className="text-[9px] font-mono tracking-widest" opacity="0.6">ANALOG_INPUT ──→ DSP_QUANTIZATION ──→ PWM_ACTUATOR</text>
        </svg>

        <svg className="absolute top-[400px] left-0 w-[300px] h-[600px]" viewBox="0 0 300 600" fill="none">
          <path d="M 0,150 L 140,150 L 190,200 L 190,500" stroke="#22d3ee" strokeWidth="1.2" opacity="0.5" />
          <circle cx="190" cy="500" r="3.5" fill="#22d3ee" opacity="0.8" />
          <text x="90" y="140" fill="#22d3ee" className="text-[8px] font-mono tracking-widest" opacity="0.7">LAB_PIPELINE_CH1</text>
        </svg>
      </div>

      {/* ZONE 06: JOURNEY & BEYOND BUILDING */}
      <div className="absolute top-[85%] left-0 w-full h-[2000px]">
        <svg className="absolute top-10 left-0 w-[350px] h-[1400px]" viewBox="0 0 350 1400" fill="none">
          <GlowFilters />
          <path d="M 0,100 L 160,100 L 220,160 L 220,1200 L 160,1260 L 0,1260" stroke="url(#bus-copper-grad)" strokeWidth="1.5" />
          
          {[250, 500, 750, 1000].map((y, idx) => (
            <g key={y}>
              <path d={`M 220,${y} L 280,${y} L 310,${y + 30}`} stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
              <circle cx="310" cy={y + 30} r="3" fill="#22d3ee" opacity="0.8" />
              <text x="235" y={y - 8} fill="#38bdf8" className="text-[8px] font-mono tracking-widest" opacity="0.65">STAGE_0{idx + 1}_LOG</text>
            </g>
          ))}
        </svg>

        <svg className="hidden md:block absolute top-[600px] right-0 w-[320px] h-[900px]" viewBox="0 0 320 900" fill="none">
          <path d="M 320,100 L 180,100 L 130,150 L 130,700 L 80,750 L 0,750" stroke="#818cf8" strokeWidth="1.2" opacity="0.45" />
          <circle cx="80" cy="750" r="3.5" fill="#818cf8" opacity="0.8" />
          <text x="145" y="140" fill="#818cf8" className="text-[8px] font-mono tracking-widest" opacity="0.65">EVIDENCE_ARCHIVE</text>
        </svg>
      </div>

      {/* ZONE 07: CURRENTLY BUILDING, CONTACT & FOOTER */}
      <div className="absolute bottom-0 left-0 w-full h-[600px]">
        <svg className="absolute top-20 left-0 w-full h-[400px]" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <GlowFilters />
          
          <path d="M 0,200 L 450,200 L 500,250 L 940,250 L 990,200 L 1440,200" stroke="url(#trace-cyan-grad)" strokeWidth="1.5" opacity="0.5" />
          <path d="M 0,215 L 440,215 L 490,265 L 950,265 L 1000,215 L 1440,215" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="6 3" opacity="0.35" />

          <circle cx="720" cy="250" r="6" fill="#22d3ee" opacity="0.85" filter="url(#env-trace-glow)" />
          <circle cx="720" cy="250" r="2" fill="#060e22" />
          <text x="735" y="244" fill="#22d3ee" className="text-[9px] font-mono tracking-widest" opacity="0.8">LIVE_TELEMETRY_ENGINE</text>

          {!prefersReducedMotion && (
            <motion.circle 
              r="3.5" fill="#22d3ee" filter="url(#env-trace-glow)"
              animate={{ cx: [0, 450, 500, 940, 990, 1440], cy: [200, 200, 250, 250, 200, 200], opacity: [0, 1, 1, 1, 1, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
          )}
        </svg>

        <svg className="absolute bottom-10 left-0 w-full h-[300px]" viewBox="0 0 1440 300" fill="none">
          <g transform="translate(720, 180)" stroke="#38bdf8" opacity="0.5" strokeWidth="1.2">
            <line x1="-30" y1="0" x2="30" y2="0" />
            <line x1="-20" y1="8" x2="20" y2="8" />
            <line x1="-10" y1="16" x2="10" y2="16" />
            <line x1="0" y1="-30" x2="0" y2="0" />
          </g>
          <text x="720" y="220" textAnchor="middle" fill="#38bdf8" className="text-[8px] font-mono tracking-widest" opacity="0.6">
            {"SYSTEM_GROUND // EARTH_REF // END_OF_BUS"}
          </text>
        </svg>
      </div>
    </div>
  );
}
