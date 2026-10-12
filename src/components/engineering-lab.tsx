"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./ui/section-header";
import { cn } from "@/lib/utils";

const pipeline = [
  { 
    step: "01", 
    name: "SENSE", 
    desc: "Gathering physical and digital telemetry.",
    tech: ["TCRT5000 IR", "Temperature Sensors", "User Input", "Data Ingestion"],
    projects: ["Smart Disaster Monitoring", "ThermoGuard", "Autonomous Line-Follower"]
  },
  { 
    step: "02", 
    name: "CONNECT", 
    desc: "Bridging physical hardware to networks.",
    tech: ["ESP32", "LoRa", "WebSockets", "REST APIs"],
    projects: ["Smart Disaster Monitoring", "DebrisEye"]
  },
  { 
    step: "03", 
    name: "COMPUTE", 
    desc: "Processing and intelligence layer.",
    tech: ["Python", "FastAPI", "TinyML", "Simulation Models", "Node.js"],
    projects: ["Campus Digital Twin", "Krishi-Sanjeevini", "DebrisEye"]
  },
  { 
    step: "04", 
    name: "VISUALIZE", 
    desc: "Creating human-understandable interfaces.",
    tech: ["React", "Three.js", "Dashboards", "Tailwind CSS"],
    projects: ["DebrisEye", "Campus Digital Twin", "Synapse Control"]
  },
  { 
    step: "05", 
    name: "DECIDE", 
    desc: "Executing automated actions or insights.",
    tech: ["Alert Mechanisms", "Motor Drivers (L298N)", "AI Advisory", "Smart-home Controls"],
    projects: ["ThermoGuard", "Krishi-Sanjeevini", "Synapse Control", "Autonomous Line-Follower"]
  },
];

export function EngineeringLab() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="lab" className="py-24 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 xl:px-24">
        <SectionHeader 
          number="04" 
          title="Engineering Lab" 
          subtitle="The pipeline for building integrated real-world systems."
        />

        <div className="relative mt-20 w-full flex flex-col gap-12">
          
          {/* Pipeline Navigation - Horizontal on Desktop */}
          <div className="flex flex-col md:flex-row justify-between w-full relative">
            {/* Connecting Line for Desktop */}
            <div className="absolute top-6 left-10 right-10 h-px bg-cyan-500/30 hidden md:block z-0" />
            
            {/* Connecting Line for Mobile */}
            <div className="absolute left-6 top-10 bottom-10 w-px bg-cyan-500/30 md:hidden z-0" />

            {pipeline.map((item, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-row md:flex-col items-center gap-4 md:gap-4 group relative z-10 text-left md:text-center w-full md:w-auto mb-6 md:mb-0"
                >
                  <div className={cn(
                    "w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 mx-auto",
                    isActive 
                      ? "bg-cyan-500/15 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)] scale-110" 
                      : "bg-navy-900/80 border-cyan-500/20 text-gray-400 group-hover:border-cyan-400/50 group-hover:text-gray-200"
                  )}>
                    <span className="font-mono text-sm">{item.step}</span>
                  </div>
                  <div>
                    <h3 className={cn(
                      "tracking-widest text-sm transition-colors duration-300 uppercase",
                      isActive ? "text-cyan-300 font-medium" : "text-gray-400 group-hover:text-gray-200"
                    )}>
                      {item.name}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-navy-900/80 border border-cyan-500/30 p-8 md:p-12 rounded-sm w-full backdrop-blur-md shadow-[0_8px_30px_rgba(6,14,34,0.6)] relative overflow-hidden"
              >
                {/* Subtle top indicator line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

                <div className="mb-8">
                  <span className="text-cyan-accent font-mono text-sm tracking-widest mb-2 block">
                    {`PHASE ${pipeline[activeStep].step} // TEST_BENCH_ACTIVE`}
                  </span>
                  <h2 className="text-3xl md:text-4xl text-white font-light mb-4">
                    {pipeline[activeStep].name}
                  </h2>
                  <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                    {pipeline[activeStep].desc}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                  <div>
                    <h4 className="text-xs font-mono tracking-widest text-cyan-400/70 mb-4 border-b border-cyan-500/20 pb-2">TECHNOLOGIES</h4>
                    <ul className="space-y-3">
                      {pipeline[activeStep].tech.map(tech => (
                        <li key={tech} className="text-gray-200 font-light flex items-center gap-3 text-sm md:text-base">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_6px_#22d3ee]" />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono tracking-widest text-cyan-400/70 mb-4 border-b border-cyan-500/20 pb-2">IMPLEMENTATIONS</h4>
                    <ul className="space-y-3">
                      {pipeline[activeStep].projects.map(project => (
                        <li key={project} className="text-gray-200 font-light flex items-center gap-3 text-sm md:text-base">
                          <div className="w-1.5 h-1.5 bg-violet-accent rounded-full shadow-[0_0_6px_#a78bfa]" />
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
