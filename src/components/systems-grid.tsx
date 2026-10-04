"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, ProjectCategory, Project } from "@/data/projects";
import { SectionHeader } from "./ui/section-header";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { ProjectModal } from "./project-modal";

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
                  ? "bg-electric-blue/10 border-electric-blue text-electric-blue" 
                  : "border-navy-700 text-gray-500 hover:text-gray-300 hover:border-gray-700 bg-transparent"
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
        return "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-700 via-navy-900 to-navy-900 border-t-electric-blue/50";
      case 'sensor-network':
        return "bg-[linear-gradient(to_bottom_right,_var(--tw-gradient-stops))] from-navy-800 to-navy-900 border-l-cyan-accent/50";
      case 'campus-visualization':
        return "bg-navy-800/80 border-b-violet-accent/50";
      case 'agriculture-interface':
        return "bg-navy-800/60 border-t-green-500/30";
      case 'accessibility-interface':
        return "bg-navy-800/40 border-l-blue-400/30";
      default:
        return "bg-navy-800/50 border-navy-700 hover:border-navy-500";
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
        "group relative flex flex-col justify-between p-6 md:p-8 border rounded-sm transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1 hover:shadow-xl w-full",
        isFeatured ? "min-h-[440px]" : "min-h-[360px]",
        getVisualBackground(),
        project.status === 'HACKATHON PROJECT' || project.status === 'PROTOTYPE' 
          ? "opacity-80 hover:opacity-100 grayscale-[30%] hover:grayscale-0"
          : ""
      )}
    >
      {/* Decorative bg elements based on type */}
      {project.visualType === 'orbital-visualization' && (
        <div className="absolute top-0 right-0 bottom-0 left-1/3 opacity-30 pointer-events-none">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 border border-electric-blue/20 rounded-full group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute right-12 top-1/2 -translate-y-1/2 w-40 h-40 border-t border-r border-electric-blue/40 rounded-full group-hover:rotate-45 transition-transform duration-1000" />
          <div className="absolute right-32 top-1/2 -translate-y-1/2 w-4 h-4 bg-electric-blue rounded-full blur-sm" />
          <div className="absolute right-32 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
        </div>
      )}
      {project.visualType === 'sensor-network' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="absolute bottom-10 right-10 flex items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity">
            <div className="w-2 h-2 bg-cyan-accent rounded-full animate-ping" />
            <div className="absolute w-12 h-px bg-cyan-accent/50 -left-12" />
            <div className="absolute w-px h-12 bg-cyan-accent/50 -top-12" />
          </div>
          <div className="absolute top-1/4 right-1/4 flex items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            <div className="absolute w-16 h-px bg-blue-400/30 rotate-45 transform origin-left" />
          </div>
        </div>
      )}
      {project.visualType === 'campus-visualization' && (
        <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-violet-accent/5 blur-3xl group-hover:bg-violet-accent/10 transition-all duration-500" />
          <div className="absolute bottom-8 right-8 w-32 h-24 border border-violet-accent/20 flex flex-col justify-end p-2 opacity-50 group-hover:opacity-100 transition-opacity">
            <div className="w-full h-2 bg-violet-accent/30 mb-1" />
            <div className="w-3/4 h-2 bg-violet-accent/40 mb-1" />
            <div className="w-1/2 h-2 bg-violet-accent/50" />
          </div>
        </div>
      )}
      {project.visualType === 'agriculture-interface' && (
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-green-500/20 to-transparent pointer-events-none" />
      )}
      {project.visualType === 'accessibility-interface' && (
        <div className="absolute left-0 top-0 w-1 h-full bg-blue-400/20 group-hover:bg-blue-400/50 transition-colors duration-300 pointer-events-none" />
      )}
      {project.visualType === 'robotics-path' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <div className="absolute top-1/2 left-0 w-full h-px bg-dashed border-t border-dashed border-gray-600/30 group-hover:border-electric-blue/30 transition-colors" />
           <div className="absolute top-1/2 right-1/4 w-3 h-3 border-2 border-electric-blue rounded-full transform -translate-y-1/2 group-hover:bg-electric-blue/20 transition-colors" />
        </div>
      )}
      {project.visualType === 'thermal-sensor' && (
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 blur-3xl group-hover:bg-orange-500/10 transition-colors duration-700 pointer-events-none" />
      )}

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-mono tracking-widest text-gray-500 border border-navy-600 px-2 py-1 bg-navy-900/50">
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
          <h3 className={cn("text-white font-medium mb-1 group-hover:text-electric-blue transition-colors", index < 3 ? "text-2xl lg:text-3xl" : "text-xl")}>
            {project.title}
          </h3>
          <p className={cn("text-electric-blue/80 font-mono mb-4", index < 3 ? "text-base" : "text-sm")}>{project.subtitle}</p>
          <p className="text-sm text-gray-400 font-light line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 mt-auto pt-6">
          {project.technologies.slice(0, 4).map(tech => (
            <span key={tech} className="text-[11px] text-gray-400 bg-navy-900/80 px-2 py-1 rounded-sm border border-navy-700/50">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] text-gray-500 px-1 py-1">+{project.technologies.length - 4}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
