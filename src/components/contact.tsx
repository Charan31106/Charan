"use client";

import { socials } from "@/data/socials";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative border-t border-cyan-500/20 bg-transparent">
      <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6 uppercase tracking-wide">
          Let&apos;s Build Something
        </h2>
        <p className="text-gray-300 font-light text-lg mb-12 max-w-xl">
          Interested in hardware, software, AI, robotics or building something ambitious?
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href={`mailto:${socials.email}`}
            className="flex items-center gap-3 px-6 py-3 border border-cyan-400/50 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/25 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 rounded-sm font-mono text-sm backdrop-blur-sm"
          >
            <Mail size={18} />
            {socials.email}
          </a>
          
          <a 
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-cyan-500/20 bg-navy-900/60 text-gray-200 hover:border-cyan-400/50 hover:text-white hover:bg-navy-800/80 transition-all duration-300 rounded-sm font-mono text-sm backdrop-blur-sm"
          >
            <FaGithub size={18} />
            GitHub
          </a>
          
          <a 
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-cyan-500/20 bg-navy-900/60 text-gray-200 hover:border-cyan-400/50 hover:text-white hover:bg-navy-800/80 transition-all duration-300 rounded-sm font-mono text-sm backdrop-blur-sm"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>

        <div className="mt-16 flex items-center gap-2 text-cyan-400/70 font-mono text-xs">
          <MapPin size={14} />
          {socials.location}
        </div>
      </div>
    </section>
  );
}
