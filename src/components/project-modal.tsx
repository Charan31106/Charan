"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/data/projects";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { ProjectVisual } from "./project-visuals";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-navy-900/90 backdrop-blur-md"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, type: "spring", damping: 25 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-navy-800 border border-navy-600 rounded-sm overflow-hidden flex flex-col shadow-2xl z-10"
        >
          {/* Header - Case File Info */}
          <div className="px-6 py-4 md:px-8 md:py-6 border-b border-navy-700 flex justify-between items-start bg-navy-900">
            <div className="w-full">
              <div className="flex justify-between items-center mb-4 border-b border-navy-800 pb-4">
                <div className="flex gap-3 items-center">
                  <span className="text-[10px] font-mono tracking-widest text-gray-400">
                    CASE_FILE // {project.id.toUpperCase()}
                  </span>
                </div>
                <button 
                  onClick={onClose}
                  className="p-1 text-gray-500 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl md:text-5xl font-light text-white mb-2">{project.title}</h2>
                  <p className="text-electric-blue font-mono text-sm tracking-wide">{project.subtitle}</p>
                </div>
                <div className="flex items-center">
                  <span className={cn(
                    "text-[10px] font-mono tracking-widest px-3 py-1.5 border",
                    project.status.includes('HARDWARE') || project.status.includes('PROTOTYPE') 
                      ? "text-orange-400 border-orange-400/30 bg-orange-400/10"
                      : "text-electric-blue border-electric-blue/30 bg-electric-blue/10"
                  )}>
                    STATUS: {project.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-1 custom-scrollbar bg-navy-900/30">
            {/* System Visualization */}
            <div className="relative w-full h-[300px] md:h-[400px] bg-navy-950 border-b border-navy-700 flex items-center justify-center overflow-hidden">
                <div className="absolute top-4 left-4 z-10 text-[10px] font-mono text-gray-500">
                    SYSTEM_ARCHITECTURE_VISUAL
                </div>
                <ProjectVisual type={project.visualType} variant="modal" className="w-full h-full" />
            </div>

            <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-10">
                        {/* THESIS / CONCEPT */}
                        <div>
                        <h3 className="text-xs font-mono tracking-widest text-gray-500 mb-4 border-b border-navy-700 pb-2">01 / THESIS</h3>
                        <p className="text-gray-300 font-light leading-relaxed text-lg">
                            {project.description}
                        </p>
                        </div>
                        
                        {/* PROBLEM & SOLUTION (Extracted from longDescription if available, or fallback) */}
                        {project.longDescription && (
                        <div>
                            <h3 className="text-xs font-mono tracking-widest text-gray-500 mb-4 border-b border-navy-700 pb-2">02 / HOW IT WORKS</h3>
                            <div className="text-gray-400 font-light leading-relaxed space-y-4">
                                {project.longDescription.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        )}
                    </div>

                    <div className="space-y-10">
                        <div>
                        <h3 className="text-xs font-mono tracking-widest text-gray-500 mb-4 border-b border-navy-700 pb-2">TECH_STACK</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map(tech => (
                            <span key={tech} className="text-[10px] font-mono text-gray-400 bg-navy-900 px-2 py-1 border border-navy-700">
                                {tech}
                            </span>
                            ))}
                        </div>
                        </div>

                        <div>
                        <h3 className="text-xs font-mono tracking-widest text-gray-500 mb-4 border-b border-navy-700 pb-2">EXTERNAL_LINKS</h3>
                        <div className="flex flex-col gap-4">
                            {project.live && (
                            <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-mono text-gray-300 hover:text-white transition-colors group">
                                <span className="w-8 h-8 flex items-center justify-center bg-navy-800 border border-navy-600 group-hover:border-electric-blue/50 transition-colors">
                                    <ExternalLink size={14} className="text-gray-400 group-hover:text-electric-blue" />
                                </span>
                                DEPLOYMENT
                            </a>
                            )}
                            {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-mono text-gray-300 hover:text-white transition-colors group">
                                <span className="w-8 h-8 flex items-center justify-center bg-navy-800 border border-navy-600 group-hover:border-electric-blue/50 transition-colors">
                                    <FaGithub size={14} className="text-gray-400 group-hover:text-electric-blue" />
                                </span>
                                REPOSITORY
                            </a>
                            )}
                            {!project.live && !project.github && (
                            <span className="text-xs font-mono text-gray-600 flex items-center gap-3">
                                <span className="w-8 h-8 flex items-center justify-center bg-navy-900 border border-navy-800">
                                    <ExternalLink size={14} className="opacity-50" />
                                </span>
                                {project.status.includes('HARDWARE') || project.status.includes('PROTOTYPE') ? 'HARDWARE_ONLY - NO LINKS' : 'UNAVAILABLE'}
                            </span>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
