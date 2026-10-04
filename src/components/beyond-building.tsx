"use client";

import { SectionHeader } from "./ui/section-header";
import { Users, Award } from "lucide-react";

export function BeyondBuilding() {
  return (
    <section className="py-24 relative">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 xl:px-24">
        <SectionHeader 
          number="06" 
          title="Beyond Building" 
          subtitle="Leadership, communities, and hackathons."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-16">
          {/* Leadership */}
          <div className="p-8 lg:p-12 border border-navy-700 bg-navy-800/30 rounded-sm">
            <div className="flex items-center gap-4 mb-8 text-cyan-accent">
              <Users size={28} />
              <h3 className="tracking-widest text-sm font-mono">LEADERSHIP</h3>
            </div>
            
            <h4 className="text-2xl text-white font-medium mb-3">Innovators and Visionaries Club (IVC)</h4>
            <p className="text-electric-blue font-mono text-sm md:text-base mb-6">CORE MEMBER</p>
            <p className="text-gray-400 font-light leading-relaxed text-lg">
              Collaborating with student engineers to design and build autonomous and humanoid robotics projects. Helping establish operational structures and standard operating procedures (SOPs) for the engineering community.
            </p>
          </div>

          {/* Hackathons placeholder */}
          <div className="p-8 lg:p-12 border border-navy-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800 to-navy-900 rounded-sm flex flex-col justify-center items-center text-center relative overflow-hidden group">
            {/* Subtle grid background for the empty state to make it look intentional */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <div className="text-violet-accent mb-8 relative z-10 transition-transform duration-700 group-hover:scale-125">
              <Award size={48} className="opacity-80" />
            </div>
            
            <h3 className="tracking-widest text-sm md:text-base font-mono text-white mb-4 relative z-10">DOCUMENTATION / CERTIFICATES</h3>
            
            <p className="text-gray-400 font-light max-w-sm mb-10 relative z-10 text-base leading-relaxed">
              Verified project documentation, hackathon certificates, and physical hardware photographs.
            </p>
            
            <div className="text-[10px] md:text-xs text-gray-500 font-mono border border-navy-700 px-6 py-3 bg-navy-900/80 rounded-sm relative z-10 shadow-inner tracking-widest">
              SYSTEM INITIALIZED • AWAITING UPLOAD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
