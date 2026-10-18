"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionHeader } from "./ui/section-header";
import { evidenceData, EvidenceCategory, EvidenceItem } from "@/data/evidence";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const filters: { id: EvidenceCategory | 'all', label: string }[] = [
  { id: 'all', label: 'ALL' },
  { id: 'hackathon', label: 'HACKATHONS' },
  { id: 'hardware', label: 'HARDWARE' },
  { id: 'activity', label: 'ACTIVITIES' },
  { id: 'certificate', label: 'CERTIFICATES' },
];

export function BeyondBuilding() {
  const [activeFilter, setActiveFilter] = useState<EvidenceCategory | 'all'>('all');
  const [selectedItem, setSelectedItem] = useState<EvidenceItem | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Handle escape key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  const filteredData = evidenceData.filter(item => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  return (
    <section id="beyond" className="py-24 relative bg-transparent">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeader 
            number="06" 
            title="Beyond Building" 
            subtitle="The work behind the systems."
          />
          <p className="text-gray-400 font-light max-w-sm text-sm leading-relaxed lg:text-right hidden md:block">
            A record of the experiments, engineering events, prototypes and documentation that shaped the systems I build.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "px-4 py-2 text-[10px] md:text-xs font-mono tracking-widest rounded-sm transition-all duration-300 border",
                activeFilter === filter.id 
                  ? "border-cyan-400 bg-cyan-500/15 text-white shadow-[0_0_12px_rgba(34,211,238,0.2)]" 
                  : "border-cyan-500/20 bg-navy-900/60 text-gray-400 hover:text-gray-200 hover:border-cyan-400/50"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, index) => {
              // Create asymmetric layout on desktop based on featured status or index
              const isLarge = item.featured || (index % 5 === 0 && activeFilter === 'all');
              
              return (
                <motion.div
                  layout={!prefersReducedMotion}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={cn(
                    "group relative flex flex-col p-6 border border-cyan-500/20 bg-navy-900/70 hover:bg-navy-800/80 hover:border-cyan-400/60 transition-colors duration-500 cursor-pointer overflow-hidden rounded-sm backdrop-blur-md hover:shadow-[0_8px_30px_rgba(6,14,34,0.7)]",
                    isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                  )}
                >
                  <div className="flex justify-between items-start mb-10 relative z-10">
                    <span className="text-[10px] font-mono tracking-widest text-cyan-400/70 uppercase">
                      {String(index + 1).padStart(2, '0')} / {item.category}
                    </span>
                    {item.year && (
                      <span className="text-[9px] font-mono tracking-widest text-cyan-300 border border-cyan-400/40 px-2 py-0.5 rounded-sm bg-cyan-500/10">
                        {item.year}
                      </span>
                    )}
                  </div>
                  
                  <div className="relative z-10 mb-6">
                    <h3 className="text-lg lg:text-xl font-medium text-white mb-2 group-hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-mono text-gray-300 uppercase tracking-widest border-l-2 border-cyan-400/60 pl-2">
                      {item.type}
                    </p>
                    {item.subtitle && (
                      <p className="text-xs font-mono text-cyan-300/80 mt-2">{item.subtitle}</p>
                    )}
                    {item.description && (
                      <p className="text-sm text-gray-400 font-light mt-4 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Asset Slot / Thumbnail Preview */}
                  <div className="w-full h-36 md:h-44 border border-cyan-500/20 bg-navy-950/90 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-400/50 transition-colors mt-auto rounded-[2px]">
                    {item.image ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent pointer-events-none" />
                        
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[9px] font-mono tracking-widest pointer-events-none">
                          <span className="text-cyan-300 font-semibold flex items-center gap-1.5 bg-navy-950/90 px-2 py-0.5 rounded border border-cyan-500/30 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            VERIFIED CREDENTIAL
                          </span>
                          <span className="text-gray-300 group-hover:text-cyan-300 transition-colors bg-navy-950/90 px-2 py-0.5 rounded border border-cyan-500/20 backdrop-blur-sm">
                            VIEW CERTIFICATE →
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Subtle motif based on category */}
                        {item.category === 'hardware' && (
                          <>
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
                            <div className="absolute w-full h-px bg-cyan-400/20 top-1/2 -translate-y-1/2 group-hover:bg-cyan-400/40 transition-colors" />
                          </>
                        )}
                        {item.category === 'hackathon' && (
                          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.3)_0%,_transparent_70%)] group-hover:opacity-35 transition-opacity" />
                        )}

                        <div className="flex flex-col items-center gap-2 relative z-10">
                          <span className="text-[10px] font-mono tracking-widest text-cyan-400/70 group-hover:text-cyan-300 transition-colors text-center px-4">
                            DOCUMENTATION ASSET PENDING
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Hover Trace */}
                  <div className="absolute top-0 left-0 w-full h-px bg-cyan-400/0 group-hover:bg-cyan-400/70 transition-colors duration-500" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Transition to Currently Building */}
        <div className="mt-24 flex items-center justify-center gap-4 text-[10px] font-mono tracking-widest text-gray-400 uppercase">
          <span>ARCHIVE</span>
          <div className="w-12 md:w-32 h-px bg-cyan-500/30 relative overflow-hidden">
             {!prefersReducedMotion && (
               <motion.div 
                 className="absolute top-0 left-0 w-8 h-full bg-cyan-400/60"
                 animate={{ x: ["-100%", "400%"] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
             )}
          </div>
          <span className="text-cyan-300">ACTIVE DEVELOPMENT</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-navy-950/80 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-4xl max-h-[92vh] bg-[#070e1c] border border-cyan-500/40 rounded-sm shadow-[0_0_50px_rgba(34,211,238,0.15)] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-cyan-500/30 bg-navy-900/60 backdrop-blur-md">
                <div className="text-[10px] font-mono tracking-widest text-cyan-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  EVIDENCE ARCHIVE / {selectedItem.category.toUpperCase()} / {String(selectedItem.id).toUpperCase()}
                </div>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 text-gray-400 hover:text-white hover:bg-navy-800/80 rounded transition-colors"
                  aria-label="Close documentation modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Image / Pending Asset Container */}
              <div className="flex-1 bg-[#02050b] min-h-[300px] md:min-h-[440px] flex items-center justify-center relative overflow-hidden p-4 md:p-6">
                {selectedItem.image ? (
                  <div className="relative max-w-full max-h-[62vh] flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={selectedItem.image} 
                      alt={selectedItem.title} 
                      className="max-w-full max-h-[58vh] object-contain rounded-[2px] border border-cyan-500/30 shadow-[0_0_35px_rgba(34,211,238,0.15)]" 
                    />
                  </div>
                ) : (
                  <div className="text-center flex flex-col items-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 border border-cyan-500/30 bg-navy-900/30 flex items-center justify-center rounded-sm mb-6 shadow-inner">
                      <div className="w-8 h-px bg-cyan-400/50" />
                    </div>
                    <h4 className="text-sm md:text-base font-mono tracking-widest text-gray-300 mb-2">VISUAL DOCUMENTATION PENDING</h4>
                    <p className="text-xs text-gray-400 max-w-xs font-light">
                      The verified engineering asset for this entry is currently awaiting integration into the archive.
                    </p>
                  </div>
                )}
                
                {/* Schematic styling for hardware modal */}
                {selectedItem.category === 'hardware' && !selectedItem.image && (
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                )}
              </div>

              {/* Metadata Panel */}
              <div className="p-6 md:p-8 bg-navy-950/90 border-t border-cyan-500/30 flex flex-col md:flex-row md:items-start justify-between gap-6 overflow-y-auto max-h-[38vh]">
                <div className="max-w-xl">
                  <h2 className="text-xl md:text-2xl text-white font-medium mb-2">{selectedItem.title}</h2>
                  
                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-[10px] font-mono tracking-widest">
                    <span className="text-cyan-300 font-semibold px-2 py-0.5 rounded border border-cyan-500/40 bg-cyan-500/10">
                      {selectedItem.type}
                    </span>
                    {selectedItem.date && (
                      <span className="text-gray-300 border border-cyan-500/20 px-2 py-0.5 rounded bg-navy-900/60">
                        📅 {selectedItem.date}
                      </span>
                    )}
                    {selectedItem.organizer && (
                      <span className="text-cyan-400/90 border border-cyan-500/20 px-2 py-0.5 rounded bg-navy-900/60">
                        🏛️ {selectedItem.organizer}
                      </span>
                    )}
                    {selectedItem.location && (
                      <span className="text-gray-400 border border-navy-700 px-2 py-0.5 rounded bg-navy-900/40">
                        📍 {selectedItem.location}
                      </span>
                    )}
                  </div>

                  {/* Achievement Banner */}
                  {selectedItem.achievement && (
                    <div className="mb-4 p-3 rounded border border-cyan-400/40 bg-cyan-950/30 flex items-start gap-2.5">
                      <span className="text-cyan-400 font-mono text-sm leading-none mt-0.5">⚡</span>
                      <div>
                        <div className="text-[10px] font-mono text-cyan-300 tracking-wider uppercase font-semibold">Verified Achievement / Outcome</div>
                        <div className="text-xs text-gray-200 mt-0.5 font-light leading-relaxed">{selectedItem.achievement}</div>
                      </div>
                    </div>
                  )}

                  {selectedItem.description && (
                    <p className="text-sm text-gray-300 font-light leading-relaxed mb-4">
                      {selectedItem.description}
                    </p>
                  )}

                  {selectedItem.image && (
                    <a
                      href={selectedItem.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-300 hover:text-white border border-cyan-500/40 hover:border-cyan-400 px-3 py-1.5 rounded bg-cyan-500/10 hover:bg-cyan-500/20 transition-all duration-300"
                    >
                      OPEN FULL CERTIFICATE IN NEW TAB ↗
                    </a>
                  )}
                </div>
                
                {selectedItem.tags && selectedItem.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 md:justify-end md:max-w-[260px]">
                    {selectedItem.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-[9px] font-mono border border-cyan-500/30 bg-navy-900/80 text-cyan-300 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
