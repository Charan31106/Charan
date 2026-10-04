"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories, skillRelationships } from "@/data/skills";
import { SectionHeader } from "./ui/section-header";
import { cn } from "@/lib/utils";

export function EngineeringDNA() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const isHighlighted = (skill: string) => {
    if (!hoveredSkill) return false;
    if (hoveredSkill === skill) return true;
    return skillRelationships[hoveredSkill]?.includes(skill) || skillRelationships[skill]?.includes(hoveredSkill);
  };

  const isDimmed = (skill: string) => {
    if (!hoveredSkill) return false;
    return !isHighlighted(skill);
  };

  return (
    <section id="dna" className="py-24 relative bg-navy-900 border-y border-navy-800">
      {/* Background connecting lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        <SectionHeader 
          number="03" 
          title="Engineering DNA" 
          subtitle="An interconnected ecosystem of hardware, software, and intelligence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          {skillCategories.map((category) => (
            <div key={category.id} className="flex flex-col bg-navy-800/20 border border-navy-700/60 p-6 md:p-8 rounded-sm hover:border-navy-600 transition-colors">
              <h3 className="text-sm font-mono tracking-widest text-electric-blue mb-8 pb-3 border-b border-navy-700/50">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <motion.li 
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={cn(
                      "text-lg lg:text-xl font-light cursor-pointer transition-all duration-300 flex items-center gap-4",
                      isHighlighted(skill) ? "text-white translate-x-2" : "",
                      isDimmed(skill) ? "text-gray-700" : "text-gray-300",
                      hoveredSkill === skill ? "text-electric-blue" : ""
                    )}
                  >
                    <div className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      isHighlighted(skill) ? "bg-electric-blue" : "bg-transparent border border-navy-600",
                      hoveredSkill === skill ? "scale-150 shadow-[0_0_12px_rgba(59,130,246,0.5)]" : ""
                    )} />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
