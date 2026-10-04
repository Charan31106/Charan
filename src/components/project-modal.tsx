"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/data/projects";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

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
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
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
          className="relative w-full max-w-4xl max-h-[90vh] bg-navy-800 border border-navy-600 rounded-sm overflow-hidden flex flex-col shadow-2xl z-10"
        >
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-navy-700 flex justify-between items-start bg-navy-900/50">
            <div>
              <div className="flex gap-3 items-center mb-3">
                <span className="text-[10px] font-mono tracking-widest text-electric-blue border border-electric-blue/30 px-2 py-1 bg-electric-blue/10">
                  {project.status}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
                  {project.category.join(" • ")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-2">{project.title}</h2>
              <p className="text-electric-blue font-mono text-sm">{project.subtitle}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-white hover:bg-navy-700 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scrollbar">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-sm font-mono tracking-widest text-gray-500 mb-4 border-b border-navy-700 pb-2">01 / CONCEPT</h3>
                  <p className="text-gray-300 font-light leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>
                
                {project.longDescription && (
                  <div>
                    <h3 className="text-sm font-mono tracking-widest text-gray-500 mb-4 border-b border-navy-700 pb-2">02 / ARCHITECTURE</h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-mono tracking-widest text-gray-500 mb-4 border-b border-navy-700 pb-2">TECHNOLOGY</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs text-gray-400 bg-navy-900 px-3 py-1.5 rounded-sm border border-navy-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-mono tracking-widest text-gray-500 mb-4 border-b border-navy-700 pb-2">LINKS</h3>
                  <div className="flex flex-col gap-3">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-mono text-white hover:text-electric-blue transition-colors group">
                        <ExternalLink size={16} className="text-gray-500 group-hover:text-electric-blue" />
                        VIEW LIVE DEMO
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-mono text-white hover:text-electric-blue transition-colors group">
                        <FaGithub size={16} className="text-gray-500 group-hover:text-electric-blue" />
                        VIEW SOURCE CODE
                      </a>
                    )}
                    {!project.live && !project.github && (
                      <span className="text-sm font-mono text-gray-500">
                        {project.status === 'HACKATHON PROJECT' || project.status === 'PROTOTYPE' ? 'HARDWARE PROTOTYPE - NO LIVE LINK' : 'LINK UNAVAILABLE'}
                      </span>
                    )}
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
