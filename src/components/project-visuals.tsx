"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectVisualProps {
  type: string;
  className?: string;
  variant?: 'card' | 'modal';
}

export function ProjectVisual({ type, className, variant = 'card' }: ProjectVisualProps) {
  switch (type) {
    case 'sensor-network':
      return <DisasterMonitoringVisual className={className} variant={variant} />;
    case 'campus-visualization':
      return <CampusTwinVisual className={className} variant={variant} />;
    case 'orbital-visualization':
      return <DebrisEyeVisual className={className} variant={variant} />;
    case 'agriculture-interface':
      return <AgriTechVisual className={className} variant={variant} />;
    case 'accessibility-interface':
      return <SynapseVisual className={className} variant={variant} />;
    case 'campus-interface':
      return <CampusConnectVisual className={className} variant={variant} />;
    case 'map-interface':
      return <MysuruVisual className={className} variant={variant} />;
    case 'thermal-sensor':
      return <ThermoGuardVisual className={className} variant={variant} />;
    case 'robotics-path':
      return <LineFollowerVisual className={className} variant={variant} />;
    default:
      return null;
  }
}

interface VisualVariantProps {
    className?: string;
    variant?: 'card' | 'modal';
}

function DisasterMonitoringVisual({ className, variant }: VisualVariantProps) {
  const isModal = variant === 'modal';
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className={cn("relative w-full h-full max-w-2xl max-h-96", isModal ? "scale-100 opacity-100" : "scale-100")}>
        {/* Sensor Node 1 */}
        <div className="absolute top-[30%] left-[20%] flex flex-col items-center">
            <div className="w-1.5 h-1.5 bg-cyan-accent/70 rounded-full group-hover:bg-cyan-accent group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" />
            <span className={cn("text-[8px] text-cyan-accent/50 font-mono mt-1 transition-opacity", isModal ? "opacity-100" : "opacity-0 group-hover:opacity-100")}>SENSOR_01</span>
        </div>

        {/* Sensor Node 2 */}
        <div className="absolute bottom-[30%] left-[20%] flex flex-col items-center">
            <div className="w-1.5 h-1.5 bg-cyan-accent/70 rounded-full group-hover:bg-cyan-accent group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300" />
            <span className={cn("text-[8px] text-cyan-accent/50 font-mono mt-1 transition-opacity", isModal ? "opacity-100" : "opacity-0 group-hover:opacity-100")}>SENSOR_02</span>
        </div>

        {/* Edge / ESP32 Node */}
        <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-4 h-4 border border-electric-blue bg-navy-900/80 rounded-sm z-10 group-hover:border-electric-blue group-hover:bg-electric-blue/10 transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-electric-blue/50 rounded-sm group-hover:bg-electric-blue transition-colors" />
            </div>
            <span className={cn("text-[8px] text-electric-blue/70 font-mono mt-2 transition-opacity", isModal ? "opacity-100" : "opacity-0 group-hover:opacity-100")}>EDGE_NODE</span>
        </div>

        {/* Gateway Node */}
        <div className="absolute top-[35%] right-[30%] flex flex-col items-center">
            <div className="w-2.5 h-2.5 bg-violet-accent/70 rounded-full group-hover:bg-violet-accent group-hover:shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all duration-300" />
            <span className={cn("text-[8px] text-violet-accent/50 font-mono mt-2 transition-opacity", isModal ? "opacity-100" : "opacity-0 group-hover:opacity-100")}>GATEWAY</span>
        </div>

        {/* Cloud Node */}
        <div className="absolute bottom-[35%] right-[15%] flex flex-col items-center">
            <div className="w-3.5 h-3.5 border border-white/40 bg-navy-900 rounded-full group-hover:border-white/80 transition-colors duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white transition-colors" />
            </div>
            <span className={cn("text-[8px] text-white/50 font-mono mt-2 transition-opacity", isModal ? "opacity-100" : "opacity-0 group-hover:opacity-100")}>CLOUD_ALERT</span>
        </div>

        {/* Connections */}
        <svg className={cn("absolute inset-0 w-full h-full transition-opacity duration-300", isModal ? "opacity-40" : "opacity-20 group-hover:opacity-40")}>
            <line x1="20%" y1="30%" x2="45%" y2="50%" stroke="#22d3ee" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="20%" y1="70%" x2="45%" y2="50%" stroke="#22d3ee" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="45%" y1="50%" x2="70%" y2="35%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="70%" y1="35%" x2="85%" y2="65%" stroke="#8b5cf6" strokeWidth="1" />
        </svg>

        {/* Data Pulse */}
        <motion.div 
            className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_#fff]"
            animate={prefersReducedMotion ? { opacity: 1, left: "85%", top: "65%" } : {
                left: ["20%", "45%", "70%", "85%"],
                top: ["30%", "50%", "35%", "65%"],
                opacity: [0, 1, 1, 1, 0]
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.3, 0.6, 0.9, 1]
            }}
            style={{ transformOrigin: "center", x: "-50%", y: "-50%" }}
        />
      </div>
    </div>
  );
}

function CampusTwinVisual({ className, variant }: VisualVariantProps) {
  const isModal = variant === 'modal';
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <div className="absolute bottom-0 right-0 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.06)_0%,transparent_60%)]" />
      
      {/* 3D-ish Campus Grid Layer */}
      <div className={cn("absolute inset-0 flex items-center justify-center transition-opacity duration-500 transform", isModal ? "opacity-60 scale-100" : "opacity-30 group-hover:opacity-60 group-hover:scale-105")} style={{ perspective: "800px" }}>
        <div className="w-full max-w-lg h-full max-h-96 border border-violet-accent/10" style={{ transform: "rotateX(60deg) rotateZ(-45deg)" }}>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {/* Building 1 */}
            <div className="absolute top-[20%] left-[30%] w-16 h-20 bg-violet-accent/10 border border-violet-accent/40 group-hover:bg-violet-accent/30 transition-colors shadow-[0_0_15px_rgba(139,92,246,0.1)] flex items-center justify-center">
               {isModal && <span className="text-[10px] text-violet-accent/60 font-mono rotate-[45deg] block">BLDG_A</span>}
            </div>
            
            {/* Building 2 */}
            <div className="absolute top-[50%] left-[50%] w-24 h-16 bg-electric-blue/5 border border-electric-blue/30 group-hover:bg-electric-blue/20 transition-colors flex items-center justify-center">
               {isModal && <span className="text-[10px] text-electric-blue/60 font-mono rotate-[45deg] block">BLDG_B</span>}
            </div>

            {/* Building 3 */}
            <div className="absolute top-[30%] left-[70%] w-12 h-12 bg-white/5 border border-white/20" />
            
            {/* Data flow connections between buildings */}
            <svg className="absolute inset-0 w-full h-full opacity-50">
               <line x1="30%" y1="20%" x2="50%" y2="50%" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4,4" />
               <line x1="50%" y1="50%" x2="70%" y2="30%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4" />
            </svg>
        </div>
      </div>

      {/* Floating Data Nodes */}
      <div className={cn("absolute text-right", isModal ? "right-12 top-12" : "right-8 top-8")}>
        <div className="text-[9px] font-mono text-violet-accent/70 group-hover:text-violet-accent transition-colors">MODEL_SYNC: TRUE</div>
        <div className="text-[9px] font-mono text-electric-blue/70 group-hover:text-electric-blue transition-colors mt-1">SIM_STATE: ACTIVE</div>
      </div>
    </div>
  );
}

function DebrisEyeVisual({ className, variant }: VisualVariantProps) {
  const isModal = variant === 'modal';
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <div className="absolute top-[0%] right-[0%] w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
      
      <div className={cn("absolute right-0 top-1/2 -translate-y-1/2 border border-electric-blue/10 rounded-full transition-colors duration-700", isModal ? "w-96 h-96 right-[10%] border-electric-blue/30" : "w-64 h-64 group-hover:border-electric-blue/30")} />
      
      <div className={cn("absolute top-1/2 -translate-y-1/2 border-t border-r border-electric-blue/20 rounded-full transition-all duration-1000", isModal ? "w-64 h-64 right-[calc(10%+4rem)] border-electric-blue/40 rotate-12" : "w-40 h-40 right-12 group-hover:border-electric-blue/50 group-hover:rotate-45")} />
      
      {/* Central Earth Node */}
      <div className={cn("absolute top-1/2 -translate-y-1/2 bg-electric-blue/80 rounded-full transition-all", isModal ? "w-6 h-6 right-[calc(10%+11.5rem)] shadow-[0_0_25px_rgba(59,130,246,0.6)]" : "w-4 h-4 right-32 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]")} />
      
      {/* Orbiting Satellite Marker */}
      <motion.div 
        className={cn("absolute top-1/2 bg-white rounded-full shadow-[0_0_4px_#fff]", isModal ? "w-2 h-2 right-[calc(10%+11.5rem+12rem)]" : "w-1.5 h-1.5 right-[200px]")}
        animate={prefersReducedMotion ? { rotate: 0 } : { rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: isModal ? "12rem center" : "80px center" }}
      />

      {/* Conjunction Data Label */}
      <div className={cn("absolute", isModal ? "bottom-12 left-12" : "bottom-8 left-8")}>
        <div className="text-[9px] font-mono text-red-400/50 group-hover:text-red-400/90 transition-colors flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse motion-reduce:animate-none" />
            CONJUNCTION_RISK: NOMINAL
        </div>
        <div className="text-[9px] font-mono text-gray-500 mt-1 ml-3">TLE_UPDATE: T-12s</div>
      </div>
    </div>
  );
}

function AgriTechVisual({ className, variant }: VisualVariantProps) {
  const isModal = variant === 'modal';
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.05)_0%,transparent_60%)]" />
      
      {/* Field Grid */}
      <div className={cn("absolute bottom-0 left-0 w-full flex gap-1 opacity-20 transition-opacity transform skew-x-12", isModal ? "h-2/3 scale-110 translate-y-8 translate-x-8 opacity-30" : "h-1/2 group-hover:opacity-40 scale-110 translate-y-4 translate-x-4")}>
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-full w-8 md:w-12 border-l border-green-500/30" />
        ))}
      </div>

      {/* Analysis Nodes */}
      <div className={cn("absolute border border-green-400 rounded-sm transition-colors", isModal ? "top-[40%] left-[30%] w-3 h-3 bg-green-400/20" : "top-1/3 left-1/4 w-2 h-2 group-hover:bg-green-400/20")} />
      <div className={cn("absolute bg-yellow-400/60 rounded-full transition-colors", isModal ? "top-[30%] left-[55%] w-2 h-2 bg-yellow-400" : "top-1/4 left-1/2 w-1.5 h-1.5 group-hover:bg-yellow-400")} />
      
      {/* Connection */}
      <svg className={cn("absolute inset-0 w-full h-full transition-opacity", isModal ? "opacity-50" : "opacity-20 group-hover:opacity-50")}>
        <path d="M 30% 40% Q 40% 25% 55% 30%" fill="none" stroke="#4ade80" strokeWidth="1" strokeDasharray="3,3" />
        <path d="M 55% 30% Q 70% 35% 80% 60%" fill="none" stroke="#facc15" strokeWidth="1" strokeDasharray="3,3" />
      </svg>
      
      <div className={cn("absolute font-mono transition-colors", isModal ? "top-12 right-12 text-[10px] text-green-400/80" : "top-8 right-8 text-[8px] text-green-400/40 group-hover:text-green-400/80")}>
        SOIL_NPK: OPTIMAL
        <br/>
        <span className="text-gray-500 mt-1 block">WEATHER: CLEAR</span>
      </div>
    </div>
  );
}

function SynapseVisual({ className, variant }: VisualVariantProps) {
  const isModal = variant === 'modal';
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_60%)]" />
      
      {/* Central Input Node */}
      <div className={cn("absolute top-1/2 -translate-y-1/2 rounded-full border border-blue-400/50 flex items-center justify-center transition-colors", isModal ? "left-[30%] w-6 h-6 border-blue-400" : "left-1/4 w-4 h-4 group-hover:border-blue-400")}>
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse motion-reduce:animate-none" />
      </div>

      {/* Waveform / Signal processing */}
      <div className={cn("absolute top-1/2 -translate-y-1/2 flex items-center gap-1 transition-opacity", isModal ? "left-[45%] opacity-80" : "left-1/3 opacity-30 group-hover:opacity-80")}>
          {[1, 2, 3.5, 2.5, 4, 2, 1].map((h, i) => (
              <motion.div 
                key={i} 
                className="w-0.5 bg-blue-300"
                animate={prefersReducedMotion ? { height: h * 4 } : { height: [h * 4, h * 10, h * 4] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                style={{ height: h * 4 }}
              />
          ))}
      </div>

      {/* Output Node */}
      <div className={cn("absolute top-1/2 -translate-y-1/2 bg-white/10 border border-white/30 rotate-45 transition-colors", isModal ? "right-[30%] w-4 h-4 bg-white/30 border-white/60" : "right-1/4 w-3 h-3 group-hover:bg-white/30 group-hover:border-white/60")} />

      <div className={cn("absolute font-mono transition-colors", isModal ? "bottom-12 right-12 text-[10px] text-blue-300/80" : "bottom-8 right-8 text-[8px] text-blue-300/40 group-hover:text-blue-300/80")}>
        A11Y_LAYER: ACTIVE
        <br/>
        <span className="text-gray-500 mt-1 block">INPUT: SPEECH</span>
      </div>
    </div>
  );
}

function CampusConnectVisual({ className, variant }: VisualVariantProps) {
  const isModal = variant === 'modal';
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
       <div className={cn("absolute inset-0 transition-opacity", isModal ? "opacity-50" : "opacity-20 group-hover:opacity-40")}>
          <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-gray-300 rounded-full" />
          <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-gray-500 rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-gray-400 rounded-full" />
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-gray-500 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white/20 border border-white/50 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          
          <svg className="absolute inset-0 w-full h-full">
            <line x1="33%" y1="33%" x2="50%" y2="50%" stroke="#9ca3af" strokeWidth="0.5" />
            <line x1="66%" y1="25%" x2="50%" y2="50%" stroke="#9ca3af" strokeWidth="0.5" />
            <line x1="75%" y1="66%" x2="50%" y2="50%" stroke="#9ca3af" strokeWidth="0.5" />
            <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="#9ca3af" strokeWidth="0.5" />
            <line x1="33%" y1="33%" x2="66%" y2="25%" stroke="#9ca3af" strokeWidth="0.5" strokeDasharray="2,2" />
          </svg>
       </div>
       <div className={cn("absolute font-mono transition-colors", isModal ? "bottom-12 left-12 text-[10px] text-gray-300" : "bottom-6 left-6 text-[8px] text-gray-500 group-hover:text-gray-300")}>
        DIRECTORY_SYNC
       </div>
    </div>
  );
}

function MysuruVisual({ className, variant }: VisualVariantProps) {
  const isModal = variant === 'modal';
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
        <svg className={cn("absolute inset-0 w-full h-full transition-opacity", isModal ? "opacity-30" : "opacity-10 group-hover:opacity-30")}>
            <path d="M 0 50 Q 100 80 200 40 T 400 60" fill="none" stroke="#fff" strokeWidth="1" />
            <path d="M 50 0 Q 80 100 40 200 T 60 400" fill="none" stroke="#fff" strokeWidth="1" />
            <path d="M 300 0 Q 250 150 300 250 T 200 400" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="4,4" />
        </svg>
        
        <div className={cn("absolute flex flex-col items-center transition-transform", isModal ? "top-[45%] left-[55%] -translate-y-2" : "top-[40%] left-[50%] group-hover:-translate-y-1")}>
            <div className="w-2.5 h-2.5 bg-amber-400/90 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            <div className="w-0.5 h-4 bg-amber-400/60" />
        </div>
        
        <div className={cn("absolute flex flex-col items-center transition-all", isModal ? "top-[65%] left-[35%] opacity-100" : "top-[60%] left-[30%] opacity-50 group-hover:opacity-100")}>
            <div className="w-1.5 h-1.5 bg-amber-200/80 rounded-full" />
        </div>

        <div className={cn("absolute font-mono transition-colors", isModal ? "top-12 right-12 text-[10px] text-amber-500/80" : "top-6 right-6 text-[8px] text-amber-500/40 group-hover:text-amber-500/80")}>
        LOC: MYSURU
       </div>
    </div>
  );
}

function ThermoGuardVisual({ className, variant }: VisualVariantProps) {
  const isModal = variant === 'modal';
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
        <div className={cn("absolute bg-red-500/5 blur-3xl transition-colors duration-700 pointer-events-none", isModal ? "top-0 right-0 w-96 h-96 bg-orange-500/10" : "top-0 right-0 w-64 h-64 group-hover:bg-orange-500/10")} />
        
        <div className={cn("absolute top-1/2 border flex items-center justify-center font-mono transition-colors", isModal ? "left-12 w-12 h-12 border-red-500/80 text-[10px] text-red-500/80" : "left-6 w-8 h-8 border-red-500/30 text-[6px] text-red-500/50 group-hover:border-red-500/80")}>
            TEMP
        </div>
        
        <div className={cn("absolute top-1/2 h-px transition-colors", isModal ? "left-32 right-32 bg-red-500/50" : "left-20 right-20 bg-red-500/20 group-hover:bg-red-500/50")} />
        
        <div className={cn("absolute top-1/2 border flex items-center justify-center transform -translate-y-1/2 transition-colors", isModal ? "right-12 w-14 h-14 border-orange-500/80" : "right-6 w-10 h-10 border-orange-500/30 group-hover:border-orange-500/80")}>
            <div className={cn("border border-orange-500/20 flex items-center justify-center", isModal ? "w-8 h-8" : "w-6 h-6")}>
                <div className={cn("bg-orange-500/40 animate-pulse motion-reduce:animate-none", isModal ? "w-3 h-3" : "w-2 h-2")} />
            </div>
        </div>

        <div className={cn("absolute font-mono", isModal ? "bottom-12 left-12 text-[10px] text-red-400/80" : "bottom-6 left-6 text-[8px] text-red-400/50")}>
            PROTOTYPE_ARCHIVE
            <br/>
            <span className="text-gray-500 mt-1 block">STATUS: HARDWARE_ONLY</span>
        </div>
    </div>
  );
}

function LineFollowerVisual({ className, variant }: VisualVariantProps) {
  const isModal = variant === 'modal';
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
        <div className={cn("absolute inset-0 flex items-center justify-center transition-opacity", isModal ? "opacity-50" : "opacity-20 group-hover:opacity-50")}>
            <svg className="w-full h-full">
                <path d="M -50 150 Q 200 150 250 50 T 600 200" fill="none" stroke="#fff" strokeWidth={isModal ? "6" : "4"} />
            </svg>
        </div>
        
        <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex", isModal ? "gap-6" : "gap-4")}>
            <div className={cn("rounded-full transition-all", isModal ? "w-3 h-3 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" : "w-2 h-2 bg-red-500/50 group-hover:bg-red-500 group-hover:shadow-[0_0_8px_rgba(239,68,68,0.8)]")} />
            <div className={cn("rounded-full transition-all", isModal ? "w-3 h-3 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" : "w-2 h-2 bg-red-500/50 group-hover:bg-red-500 group-hover:shadow-[0_0_8px_rgba(239,68,68,0.8)]")} />
        </div>

        <div className={cn("absolute font-mono", isModal ? "bottom-12 right-12 text-[10px] text-gray-300" : "bottom-6 right-6 text-[8px] text-gray-500 group-hover:text-gray-300")}>
            HARDWARE_ARCHIVE
            <br/>
            <span className="text-gray-600 mt-1 block">ROBOTICS</span>
        </div>
    </div>
  );
}
