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
import { TiltCard } from "./ui/tilt-card";
import Image from "next/image";

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
          number="01" 
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
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="w-full h-full flex"
    >
      <TiltCard
        onClick={onClick}
        maxTilt={7}
        glareOpacity={0.1}
        className={cn(
          "group relative flex flex-col justify-between border border-navy-700/70 hover:border-cyan-400/60 rounded-sm transition-all duration-300 cursor-pointer overflow-hidden w-full backdrop-blur-md bg-navy-950/95",
          project.status === 'HACKATHON PROJECT' || project.status === 'PROTOTYPE' 
            ? "opacity-95 hover:opacity-100"
            : ""
        )}
      >
        {/* TOP SECTION: Dedicated Live System Viewport Frame */}
        <div className={cn(
          "relative w-full overflow-hidden bg-navy-950 border-b border-cyan-500/20 group/preview flex flex-col",
          isFeatured ? "h-52 md:h-60" : "h-44 md:h-52"
        )}>
          {/* Browser Window Chrome Header */}
          <div className="h-7 w-full bg-navy-900/90 border-b border-cyan-500/15 flex items-center justify-between px-3 z-10 backdrop-blur-sm select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400/50" />
              <span className="w-2 h-2 rounded-full bg-amber-400/50" />
              <span className="w-2 h-2 rounded-full bg-emerald-400/50" />
            </div>
            <span className="text-[10px] font-mono text-cyan-300/70 truncate max-w-[200px] sm:max-w-[260px]">
              {project.live ? project.live.replace(/^https?:\/\//, '') : `SYSTEM://${project.id}`}
            </span>
            <div className="flex items-center gap-1.5">
              {project.live && (
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" title="System Live" />
              )}
            </div>
          </div>

          {/* Frame Canvas: Homepage Screenshot or Schematic Fallback */}
          <div className="relative w-full flex-1 overflow-hidden bg-navy-950">
            {project.image ? (
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  priority={index < 4}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            ) : (
              <div className="relative w-full h-full bg-navy-950/80">
                <ProjectVisual type={project.visualType} className="group-hover:opacity-100" />
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM SECTION: Engineering Dossier & Metadata */}
        <div className="p-6 md:p-7 flex flex-col justify-between flex-1 bg-navy-950/90">
          <div>
            {/* Meta Row: Status & Direct Action Buttons */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-mono tracking-widest text-cyan-300/90 border border-cyan-500/30 px-2.5 py-1 bg-navy-900/80 rounded-sm">
                {project.status}
              </span>
              <div className="flex gap-2">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-1.5 rounded-sm bg-navy-900/80 border border-cyan-500/20 text-gray-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all" 
                    onClick={e => e.stopPropagation()}
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <FaGithub size={15} />
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-1.5 rounded-sm bg-navy-900/80 border border-cyan-500/20 text-gray-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all" 
                    onClick={e => e.stopPropagation()}
                    aria-label={`${project.title} live deployment`}
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>

            {/* Title, Subtitle, Description */}
            <h3 className={cn("text-white font-medium mb-1 group-hover:text-cyan-300 transition-colors", isFeatured ? "text-xl md:text-2xl" : "text-lg md:text-xl")}>
              {project.title}
            </h3>
            <p className="text-cyan-400/90 font-mono text-xs md:text-sm mb-3">
              {project.subtitle}
            </p>
            <p className="text-xs md:text-sm text-gray-300 font-light line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-cyan-500/15">
            {project.technologies.slice(0, 4).map(tech => (
              <span key={tech} className="text-[10px] font-mono text-cyan-200/90 bg-navy-900/80 px-2.5 py-1 rounded-sm border border-cyan-500/25">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono text-cyan-400 px-2 py-1 bg-navy-900/60 rounded-sm border border-cyan-500/25">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
