"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Award, 
  Cpu, 
  FolderGit2,
  FileText
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socials } from "@/data/socials";

export function openResumeModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-resume"));
  }
}

interface ResumeModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function ResumeModal({ isOpen: controlledIsOpen, onClose: controlledOnClose }: ResumeModalProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleClose = useCallback(() => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  }, [controlledOnClose]);

  useEffect(() => {
    const handleOpenEvent = () => setInternalIsOpen(true);
    window.addEventListener("open-resume", handleOpenEvent);
    return () => window.removeEventListener("open-resume", handleOpenEvent);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainTextResume = `CHARAN C
Electronics & Communication Engineering Undergraduate | Vidyavardhaka College of Engineering (VVCE), Mysuru
Email: ${socials.email} | Location: Mysuru, Karnataka, India
GitHub: ${socials.github} | LinkedIn: ${socials.linkedin}

PROFILE SUMMARY
2nd-Year Electronics & Communication Engineering student at VVCE Mysuru with hands-on focus on embedded firmware, IoT sensor networks, intelligent software systems, and robotics. Core Member at Innovators & Visionaries Club (IVC) with 4 verified hackathon honors. Seeking engineering internships and technical collaborations.

EDUCATION
Bachelor of Engineering in Electronics & Communication Engineering (2024 – 2028)
Vidyavardhaka College of Engineering (VVCE), Mysuru, Karnataka
Coursework: Embedded Systems, Digital Electronics, Microcontrollers, Signals & Systems, Computer Networks, IoT

TECHNICAL SKILLS
• Hardware & Firmware: ESP32, Arduino Uno, LoRa (868MHz), I2C / SPI / UART, Analog Sensor Interfacing, Circuit Prototyping, Power Protection
• Programming Languages: C, C++, Python, TypeScript, JavaScript, SQL
• Software & Frameworks: React 19, Next.js 16, Node.js, FastAPI, PostgreSQL, Redis, Tailwind CSS, Three.js
• Tools & Intelligence: Git, Docker, PlatformIO, TinyML Edge Inference, Linux

HONORS & HACKATHONS
• Databricks Campus Hackathon (Bengaluru Tech Week) — Top 10% National Rank (Sept 2026, BMSCE/RVCE)
• FusionX 1.0 (IEEE PES & PELS, VVCE) — Hardware & Software Integration Hackathon (May 2026)
• Hacksprint 6.0 (PESCE Mandya) — 24-Hour National Hackathon (May 2026)
• THERMOSPARK-2026 (VVCE Dept. of Mechanical Eng) — 9-Hour Hardware Hackathon (Apr 2026)

LEADERSHIP & ACTIVITIES
• Core Member — Innovators & Visionaries Club (IVC), VVCE (Nov 2024 – Present)
  Active technical contributor driving robotics, IoT initiatives, hackathon mentoring, and multidisciplinary engineering projects.

FLAGSHIP SYSTEMS
• Smart Disaster Monitoring: ESP32 + TinyML + LoRa early-warning sensing system with anomaly detection and cloud dashboard.
• DebrisEye: Orbital debris risk platform with SGP4 propagation, conjunction analysis, and Three.js visualization.
• Krishi-Sanjeevini: Vernacular Kannada voice-assisted agriculture platform with crop diagnostics and real-time mandi prices.
• Campus Digital Twin: Spatial digital twin simulating real-time campus telemetry with predictive scenario analysis.
• Synapse Control: Assistive AAC interface with switch scanning and DSP audio synthesis for accessibility.
• Autonomous Line-Follower Robot: Mobile robotics prototype with Arduino Uno, TCRT5000 IR sensor array, and differential PID control.`;

    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-navy-950/85 backdrop-blur-md no-print"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-4xl bg-navy-950 border border-cyan-500/30 rounded-lg shadow-[0_20px_60px_rgba(6,14,34,0.9)] z-10 my-auto overflow-hidden flex flex-col max-h-[92vh]"
          >
            {/* Top Command Toolbar (no-print) */}
            <div className="no-print h-14 bg-navy-900/90 border-b border-cyan-500/20 px-4 sm:px-6 flex items-center justify-between shrink-0 select-none">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-cyan-400" />
                <span className="font-mono text-xs text-white tracking-widest uppercase font-medium">
                  ENGINEERING RESUME // VERIFIED DOSSIER
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-cyan-400 text-navy-950 hover:bg-cyan-300 font-mono text-xs font-medium transition-colors"
                  title="Print or Save as PDF"
                >
                  <Printer size={13} />
                  <span className="hidden sm:inline">Print / Save PDF</span>
                  <span className="sm:hidden">PDF</span>
                </button>

                <button
                  onClick={handleCopyText}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-navy-800 border border-cyan-500/30 text-cyan-300 hover:bg-navy-700 font-mono text-xs transition-colors"
                  title="Copy plain text"
                >
                  {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span className="hidden sm:inline">{copied ? "Copied" : "Copy Text"}</span>
                </button>

                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-sm bg-navy-800/80 border border-cyan-500/20 text-gray-400 hover:text-white hover:border-cyan-400 transition-colors ml-1"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="overflow-y-auto p-6 sm:p-10 text-gray-200 font-sans" id="printable-resume">
              {/* Header */}
              <div className="border-b border-cyan-500/30 pb-6 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                    CHARAN C
                  </h1>
                  <span className="text-xs font-mono text-cyan-300 bg-navy-900 border border-cyan-500/30 px-2.5 py-1 rounded-sm w-fit">
                    2nd-Year ECE Undergraduate
                  </span>
                </div>

                <p className="text-sm text-cyan-400 font-mono mb-3">
                  Vidyavardhaka College of Engineering (VVCE), Mysuru • Core Member, IVC
                </p>

                {/* Contact Links Bar */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-gray-400">
                  <a href={`mailto:${socials.email}`} className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                    <Mail size={13} className="text-cyan-400" />
                    <span>{socials.email}</span>
                  </a>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-cyan-400" />
                    <span>Mysuru, Karnataka, India</span>
                  </span>
                  <a href={socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                    <FaGithub size={13} className="text-cyan-400" />
                    <span>github.com/Charan31106</span>
                  </a>
                  <a href={socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                    <FaLinkedin size={13} className="text-cyan-400" />
                    <span>linkedin.com/in/charan-c-504081394</span>
                  </a>
                </div>
              </div>

              {/* Grid: 2 Columns on desktop */}
              <div className="space-y-6">
                {/* Profile Summary */}
                <div>
                  <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Executive Summary
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    Electronics & Communication Engineering student with practical expertise bridging hardware-software co-design, embedded firmware, sensor telemetry, and intelligent software systems. Active Core Member at Innovators & Visionaries Club (IVC) with national hackathon accomplishments across BMSCE, RVCE, and PESCE. Passionate about robotics, space mechanics, and real-world system engineering.
                  </p>
                </div>

                {/* Education & Leadership Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Education */}
                  <div className="bg-navy-900/40 border border-cyan-500/15 p-4 rounded-sm">
                    <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3 flex items-center gap-2">
                      <GraduationCap size={14} className="text-cyan-400" />
                      Education
                    </h2>
                    <h3 className="text-sm font-medium text-white">
                      B.E. in Electronics & Communication Engineering
                    </h3>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">
                      Vidyavardhaka College of Engineering (VVCE), Mysuru
                    </p>
                    <p className="text-[11px] font-mono text-cyan-300/80 mt-1">
                      2024 – 2028 • Currently in 2nd Year
                    </p>
                    <p className="text-[11px] text-gray-400 mt-2 font-light">
                      Coursework: Embedded Systems, Digital Electronics, Microcontrollers, Signals & Systems, Computer Networks, IoT Architectures.
                    </p>
                  </div>

                  {/* Leadership */}
                  <div className="bg-navy-900/40 border border-cyan-500/15 p-4 rounded-sm">
                    <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3 flex items-center gap-2">
                      <Award size={14} className="text-cyan-400" />
                      Campus Leadership
                    </h2>
                    <h3 className="text-sm font-medium text-white">
                      Core Member — Innovators & Visionaries Club (IVC)
                    </h3>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">
                      VVCE Student Innovation Council
                    </p>
                    <p className="text-[11px] font-mono text-cyan-300/80 mt-1">
                      November 2024 – Present
                    </p>
                    <p className="text-[11px] text-gray-400 mt-2 font-light">
                      Technical core driver for robotics and IoT hackathon teams, mentoring peers in hardware-software integration, prototype engineering, and technical competitions.
                    </p>
                  </div>
                </div>

                {/* Technical Skills Matrix */}
                <div className="bg-navy-900/40 border border-cyan-500/15 p-4 rounded-sm">
                  <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3 flex items-center gap-2">
                    <Cpu size={14} className="text-cyan-400" />
                    Technical Competencies
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                    <div>
                      <span className="font-mono text-cyan-300 block text-[11px] mb-1">Hardware & Embedded</span>
                      <p className="text-gray-300 text-[11px] font-light leading-relaxed">
                        ESP32, Arduino Uno, LoRa (868MHz), I2C/SPI/UART, Sensor Interfacing, Circuit Design
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-cyan-300 block text-[11px] mb-1">Languages</span>
                      <p className="text-gray-300 text-[11px] font-light leading-relaxed">
                        C, C++, Python, TypeScript, JavaScript, SQL
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-cyan-300 block text-[11px] mb-1">Software & Web</span>
                      <p className="text-gray-300 text-[11px] font-light leading-relaxed">
                        React 19, Next.js 16, Node.js, FastAPI, PostgreSQL, Redis, Three.js, Tailwind CSS
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-cyan-300 block text-[11px] mb-1">Tools & Edge AI</span>
                      <p className="text-gray-300 text-[11px] font-light leading-relaxed">
                        TinyML Edge Inference, Git, Docker, Linux, WebSockets, PlatformIO
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verified Hackathon Honors */}
                <div>
                  <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3 flex items-center gap-2">
                    <Award size={14} className="text-cyan-400" />
                    Verified Hackathons & Honors
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-navy-900/30 border border-cyan-500/15 rounded-sm">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-medium text-white">Databricks Campus Hackathon</span>
                        <span className="text-[10px] font-mono text-cyan-400">Top 10% Rank</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">Bengaluru Tech Week • BMSCE & RVCE Bangalore (Sept 2026)</p>
                    </div>

                    <div className="p-3 bg-navy-900/30 border border-cyan-500/15 rounded-sm">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-medium text-white">FusionX 1.0</span>
                        <span className="text-[10px] font-mono text-cyan-400">Hardware/Software</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">IEEE PES & PELS Chapters, VVCE (May 2026)</p>
                    </div>

                    <div className="p-3 bg-navy-900/30 border border-cyan-500/15 rounded-sm">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-medium text-white">Hacksprint 6.0</span>
                        <span className="text-[10px] font-mono text-cyan-400">24-Hr National</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">PES College of Engineering, Mandya (May 2026)</p>
                    </div>

                    <div className="p-3 bg-navy-900/30 border border-cyan-500/15 rounded-sm">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-medium text-white">THERMOSPARK-2026</span>
                        <span className="text-[10px] font-mono text-cyan-400">9-Hr Hardware</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">Dept. of Mechanical Engineering, VVCE (Apr 2026)</p>
                    </div>
                  </div>
                </div>

                {/* Flagship Systems */}
                <div>
                  <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-3 flex items-center gap-2">
                    <FolderGit2 size={14} className="text-cyan-400" />
                    Key Engineering Systems
                  </h2>
                  <div className="space-y-3">
                    <div className="p-3 bg-navy-900/30 border border-cyan-500/15 rounded-sm">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h3 className="text-xs font-medium text-white">
                          Smart Disaster Monitoring System <span className="text-[10px] font-mono text-cyan-400 font-normal">[ESP32, TinyML, LoRa, React]</span>
                        </h3>
                        <a href="https://smart-disaster-monitoring.vercel.app/" target="_blank" rel="noreferrer" className="text-[10px] font-mono text-cyan-300 hover:underline flex items-center gap-1">
                          Live System <ExternalLink size={10} />
                        </a>
                      </div>
                      <p className="text-[11px] text-gray-300 font-light mt-1">
                        Comprehensive early-warning sensing platform combining ESP32 edge processing, TinyML anomaly inference, 868MHz LoRa telemetry, and cloud command dashboard.
                      </p>
                    </div>

                    <div className="p-3 bg-navy-900/30 border border-cyan-500/15 rounded-sm">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h3 className="text-xs font-medium text-white">
                          DebrisEye — Orbital Risk Analysis Platform <span className="text-[10px] font-mono text-cyan-400 font-normal">[Three.js, FastAPI, SGP4, PostgreSQL]</span>
                        </h3>
                        <a href="https://debris-eye.vercel.app/" target="_blank" rel="noreferrer" className="text-[10px] font-mono text-cyan-300 hover:underline flex items-center gap-1">
                          Live System <ExternalLink size={10} />
                        </a>
                      </div>
                      <p className="text-[11px] text-gray-300 font-light mt-1">
                        Space domain awareness platform performing SGP4 orbital propagation, conjunction scans, and Monte Carlo collision-risk assessments visualized in WebGL.
                      </p>
                    </div>

                    <div className="p-3 bg-navy-900/30 border border-cyan-500/15 rounded-sm">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h3 className="text-xs font-medium text-white">
                          Krishi-Sanjeevini — Farmer Platform <span className="text-[10px] font-mono text-cyan-400 font-normal">[Next.js, Kannada Voice AI, Agri APIs]</span>
                        </h3>
                        <a href="https://agri-tech-omega.vercel.app/" target="_blank" rel="noreferrer" className="text-[10px] font-mono text-cyan-300 hover:underline flex items-center gap-1">
                          Live System <ExternalLink size={10} />
                        </a>
                      </div>
                      <p className="text-[11px] text-gray-300 font-light mt-1">
                        Multilingual voice-assisted platform supporting Kannada and English for crop disease diagnostics, mandi pricing, and soil NPK advisories.
                      </p>
                    </div>

                    <div className="p-3 bg-navy-900/30 border border-cyan-500/15 rounded-sm">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h3 className="text-xs font-medium text-white">
                          Autonomous Line-Follower Robotics Prototype <span className="text-[10px] font-mono text-cyan-400 font-normal">[Arduino Uno, L298N, TCRT5000 IR]</span>
                        </h3>
                        <span className="text-[10px] font-mono text-gray-400">Hardware Built</span>
                      </div>
                      <p className="text-[11px] text-gray-300 font-light mt-1">
                        Custom differential-drive robot built from scratch with dual H-bridge motor driver, analog IR sensor array, and real-time closed-loop PID path-tracking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
