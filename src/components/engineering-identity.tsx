"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/section-header";

export function EngineeringIdentity() {
  return (
    <section id="about" className="py-24 relative border-t border-cyan-500/20">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 xl:px-24">
        <SectionHeader 
          number="01" 
          title="Engineering Identity" 
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mt-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 prose prose-invert max-w-none"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-8">
              Building at the intersection of hardware, software, AI and real-world systems.
            </h3>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-6">
              My engineering approach doesn&apos;t stay inside one box. I explore physical computing, build intelligent software, and experiment with robotics and real-world automation. 
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              The projects presented here demonstrate my ongoing exploration across accessibility, agriculture, disaster monitoring, space systems, and campus technology. I am learning by building.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6 w-full"
          >
            <div className="text-xs font-mono tracking-widest text-cyan-accent mb-2 pb-2 border-b border-cyan-500/30 flex items-center justify-between">
              <span>PRIMARY FOCUS</span>
              <span className="text-[9px] text-cyan-400/60">[6 CHANNELS]</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['HARDWARE', 'SOFTWARE', 'AI', 'ROBOTICS', 'AUTOMATION', 'REAL-WORLD SYSTEMS'].map((focus) => (
                <div key={focus} className="group border border-cyan-500/20 bg-navy-900/60 hover:bg-navy-800/80 hover:border-cyan-400/60 p-5 rounded-sm flex items-center transition-all duration-300 cursor-default backdrop-blur-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]">
                  <div className="w-1.5 h-1.5 bg-cyan-accent group-hover:bg-electric-blue mr-3 rounded-full group-hover:scale-150 transition-all duration-300 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                  <span className="text-xs md:text-sm font-mono text-gray-200 tracking-wider group-hover:text-white transition-colors">{focus}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
