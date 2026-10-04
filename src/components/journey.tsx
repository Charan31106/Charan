"use client";

import { motion } from "framer-motion";
import { journeyTimeline } from "@/data/journey";
import { SectionHeader } from "./ui/section-header";
import { cn } from "@/lib/utils";

export function Journey() {
  return (
    <section id="journey" className="py-24 relative bg-navy-800/10">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 xl:px-24">
        <SectionHeader 
          number="05" 
          title="Engineering Journey" 
        />

        <div className="relative border-l border-navy-700 ml-4 md:ml-8 mt-16">
          {journeyTimeline.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 ml-8 relative group"
            >
              {/* Timeline Node Dot */}
              <div className={cn(
                "absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 bg-navy-900 transition-colors duration-300",
                node.type === 'current' ? "border-electric-blue bg-electric-blue/20 animate-pulse" :
                node.type === 'education' ? "border-cyan-accent" :
                node.type === 'milestone' ? "border-violet-accent" :
                "border-gray-500 group-hover:border-electric-blue"
              )} />
              
              <div className="flex flex-col gap-1">
                <h3 className={cn(
                  "text-lg md:text-xl font-light",
                  node.type === 'current' ? "text-electric-blue" : "text-white"
                )}>
                  {node.title}
                </h3>
                
                {node.subtitle && (
                  <p className="text-gray-400 font-mono text-sm tracking-wide">
                    {node.subtitle}
                  </p>
                )}
                
                {node.description && (
                  <p className="text-gray-500 text-sm mt-2 font-light max-w-lg">
                    {node.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
