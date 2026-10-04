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
                  ? "border-electric-blue bg-electric-blue/10 text-white" 
                  : "border-navy-700 bg-navy-900/50 text-gray-400 hover:text-gray-200 hover:border-navy-500"
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
                    "group relative flex flex-col p-6 border border-navy-700 bg-navy-900/30 hover:bg-navy-800/50 transition-colors duration-500 cursor-pointer overflow-hidden rounded-sm",
                    isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                  )}
                >
                  <div className="flex justify-between items-start mb-10 relative z-10">
                    <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                      {String(index + 1).padStart(2, '0')} / {item.category}
                    </span>
                    {item.year && (
                      <span className="text-[9px] font-mono tracking-widest text-cyan-accent/80 border border-cyan-accent/30 px-2 py-0.5 rounded-sm">
                        {item.year}
                      </span>
                    )}
                  </div>
                  
                  <div className="relative z-10 mb-6">
                    <h3 className="text-lg lg:text-xl font-medium text-white mb-2 group-hover:text-electric-blue transition-colors group-hover:translate-x-1 duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest border-l-2 border-electric-blue/50 pl-2">
                      {item.type}
                    </p>
                    {item.subtitle && (
                      <p className="text-xs font-mono text-electric-blue/80 mt-2">{item.subtitle}</p>
                    )}
                    {item.description && (
                      <p className="text-sm text-gray-400 font-light mt-4 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Asset Slot / Placeholder */}
                  <div className="w-full h-32 md:h-40 border border-navy-600/50 bg-[#020406] flex items-center justify-center relative overflow-hidden group-hover:border-electric-blue/40 transition-colors mt-auto">
                    {/* Subtle motif based on category */}
                    {item.category === 'hardware' && (
                      <>
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
                        <div className="absolute w-full h-px bg-electric-blue/10 top-1/2 -translate-y-1/2 group-hover:bg-electric-blue/30 transition-colors" />
                      </>
                    )}
                    {item.category === 'hackathon' && (
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.3)_0%,_transparent_70%)] group-hover:opacity-30 transition-opacity" />
                    )}

                    <div className="flex flex-col items-center gap-2 relative z-10">
                      <span className="text-[10px] font-mono tracking-widest text-gray-500 group-hover:text-electric-blue/80 transition-colors text-center px-4">
                        {item.status === 'asset-pending' ? 'DOCUMENTATION ASSET PENDING' : 'VIEW DOCUMENTATION →'}
                      </span>
                    </div>
                  </div>

                  {/* Hover Trace */}
                  <div className="absolute top-0 left-0 w-full h-px bg-electric-blue/0 group-hover:bg-electric-blue/50 transition-colors duration-500" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Transition to Currently Building */}
        <div className="mt-24 flex items-center justify-center gap-4 text-[10px] font-mono tracking-widest text-gray-500 uppercase">
          <span>ARCHIVE</span>
          <div className="w-12 md:w-32 h-px bg-navy-600 relative overflow-hidden">
             {!prefersReducedMotion && (
               <motion.div 
                 className="absolute top-0 left-0 w-8 h-full bg-electric-blue/50"
                 animate={{ x: ["-100%", "400%"] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
             )}
          </div>
          <span className="text-electric-blue/70">ACTIVE DEVELOPMENT</span>
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
              className="relative w-full max-w-4xl max-h-[90vh] bg-navy-950 border border-navy-700 rounded-sm shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-navy-700/50 bg-navy-900/20">
                <div className="text-[10px] font-mono tracking-widest text-gray-400">
                  DOCUMENTATION / {selectedItem.category.toUpperCase()} / {String(selectedItem.id).toUpperCase()}
                </div>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close documentation modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Image / Pending Asset Container */}
              <div className="flex-1 bg-[#020406] min-h-[300px] md:min-h-[400px] flex items-center justify-center relative overflow-hidden p-6">
                {selectedItem.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={selectedItem.image} alt={selectedItem.title} className="max-w-full max-h-[60vh] object-contain border border-navy-800" />
                ) : (
                  <div className="text-center flex flex-col items-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 border border-navy-700 bg-navy-900/30 flex items-center justify-center rounded-sm mb-6 shadow-inner">
                      <div className="w-8 h-px bg-navy-600" />
                    </div>
                    <h4 className="text-sm md:text-base font-mono tracking-widest text-gray-400 mb-2">VISUAL DOCUMENTATION PENDING</h4>
                    <p className="text-xs text-gray-600 max-w-xs font-light">
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
              <div className="p-6 md:p-8 bg-navy-900/40 border-t border-navy-700 flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="max-w-xl">
                  <h2 className="text-xl md:text-2xl text-white font-medium mb-2">{selectedItem.title}</h2>
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-[10px] font-mono tracking-widest">
                    <span className="text-cyan-accent">{selectedItem.type}</span>
                    {selectedItem.year && (
                      <>
                        <span className="text-navy-600">•</span>
                        <span className="text-gray-400">{selectedItem.year}</span>
                      </>
                    )}
                  </div>
                  {selectedItem.description && (
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                      {selectedItem.description}
                    </p>
                  )}
                </div>
                
                {selectedItem.tags && selectedItem.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 md:justify-end md:max-w-[250px]">
                    {selectedItem.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-[9px] font-mono border border-navy-700 bg-navy-800/50 text-gray-400 rounded-sm">
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
