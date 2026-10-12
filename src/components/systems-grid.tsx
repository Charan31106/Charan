"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, ProjectCategory, Project } from "@/data/projects";
import { SectionHeader } from "./ui/section-header";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { ProjectModal } from "./project-modal";
import { ProjectVisual } from "./project-visuals";

const filters: ProjectCategory[] = ['ALL', 'AI', 'HARDWARE', 'ROBOTICS', 'WEB', 'DATA', 'SPACE', 'ACCESSIBILITY'];

export function SystemsGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(p => 
    activeFilter === 'ALL' ? true : p.category.includes(activeFilter)
  );

  return (
    <section id="systems" className="py-24 relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 xl:px-24">
        <SectionHeader 
          number="02" 
          title="Systems I've Built" 
          subtitle="Projects spanning intelligent software, embedded systems, robotics, accessibility, agriculture and space technology."
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 text-xs font-mono tracking-widest transition-all duration-300 border rounded-sm",
                activeFilter === filter 
                  ? "bg-cyan-500/15 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]" 
                  : "border-cyan-500/20 text-gray-400 hover:text-gray-200 hover:border-cyan-400/50 bg-navy-900/60 backdrop-blur-sm"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // Featured projects take more horizontal space
              const isFeatured = index === 0 || index === 1 || index === 2;
              let colSpan = "md:col-span-6 lg:col-span-4"; // Default
              
              if (index === 0) colSpan = "md:col-span-12 lg:col-span-8";
              else if (index === 1) colSpan = "md:col-span-12 lg:col-span-4";
              else if (index === 2) colSpan = "md:col-span-12 lg:col-span-6";
              else if (index === 3) colSpan = "md:col-span-12 lg:col-span-6";
              else if (index === 4) colSpan = "md:col-span-6 lg:col-span-4";
              else if (index === 5) colSpan = "md:col-span-6 lg:col-span-8";

              return (
                <div key={project.id} className={cn("flex", colSpan)}>
                  <ProjectCard 
                    project={project} 
                    index={index} 
                    isFeatured={isFeatured}
                    onClick={() => setSelectedProject(project)}
                  />
                </div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}

function ProjectCard({ project, index, isFeatured, onClick }: { project: typeof projects[0], index: number, isFeatured?: boolean, onClick: () => void }) {
  // Determine distinct visual treatment based on visualType
  const getVisualBackground = () => {
    switch (project.visualType) {
      case 'orbital-visualization':
        return "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-800/90 via-navy-900/85 to-navy-950/90 border-t-cyan-400/60 border-navy-700/60";
      case 'sensor-network':
        return "bg-[linear-gradient(to_bottom_right,_var(--tw-gradient-stops))] from-navy-800/90 to-navy-950/90 border-l-cyan-accent/60 border-navy-700/60";
      case 'campus-visualization':
        return "bg-navy-900/85 border-b-violet-accent/60 border-navy-700/60";
      case 'agriculture-interface':
        return "bg-navy-900/85 border-t-emerald-400/50 border-navy-700/60";
      case 'accessibility-interface':
        return "bg-navy-900/85 border-l-sky-400/50 border-navy-700/60";
      default:
        return "bg-navy-900/85 border-navy-700/60 hover:border-cyan-400/50";
    }
  };

  return (
    <motion.div
      layout
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "group relative flex flex-col justify-between p-6 md:p-8 border rounded-sm transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(6,14,34,0.7)] w-full hover:border-cyan-400/60 backdrop-blur-md",
        isFeatured ? "min-h-[440px]" : "min-h-[360px]",
        getVisualBackground(),
        project.status === 'HACKATHON PROJECT' || project.status === 'PROTOTYPE' 
          ? "opacity-90 hover:opacity-100"
          : ""
      )}
    >
      <ProjectVisual type={project.visualType} className="group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-mono tracking-widest text-gray-400 border border-navy-600 px-2 py-1 bg-navy-900/50 group-hover:border-electric-blue/30 group-hover:text-gray-300 transition-colors">
            {project.status}
          </span>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" onClick={e => e.stopPropagation()}>
                <FaGithub size={18} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" onClick={e => e.stopPropagation()}>
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 className={cn("text-white font-medium mb-1 group-hover:text-electric-blue transition-all duration-300 group-hover:translate-x-1", index < 3 ? "text-2xl lg:text-3xl" : "text-xl")}>
            {project.title}
          </h3>
          <p className={cn("text-electric-blue/80 font-mono mb-4 transition-all duration-300 group-hover:translate-x-1", index < 3 ? "text-base" : "text-sm")}>{project.subtitle}</p>
          <p className="text-sm text-gray-400 font-light line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 mt-auto pt-6">
          {project.technologies.slice(0, 4).map(tech => (
            <span key={tech} className="text-[11px] font-mono text-gray-300 bg-navy-950/80 px-2 py-1 rounded-sm border border-cyan-500/20">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] font-mono text-cyan-400/80 px-1.5 py-1 bg-navy-950/60 rounded-sm border border-cyan-500/20">+{project.technologies.length - 4}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
