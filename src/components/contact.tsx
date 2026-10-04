"use client";

import { socials } from "@/data/socials";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative border-t border-navy-700 bg-transparent">
      <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6 uppercase tracking-wide">
          Let's Build Something
        </h2>
        <p className="text-gray-400 font-light text-lg mb-12 max-w-xl">
          Interested in hardware, software, AI, robotics or building something ambitious?
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href={`mailto:${socials.email}`}
            className="flex items-center gap-3 px-6 py-3 border border-electric-blue/50 text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300 rounded-sm font-mono text-sm"
          >
            <Mail size={18} />
            {socials.email}
          </a>
          
          <a 
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-navy-600 text-gray-300 hover:border-gray-400 hover:text-white transition-all duration-300 rounded-sm font-mono text-sm"
          >
            <FaGithub size={18} />
            GitHub
          </a>
          
          <a 
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-navy-600 text-gray-300 hover:border-gray-400 hover:text-white transition-all duration-300 rounded-sm font-mono text-sm"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>

        <div className="mt-16 flex items-center gap-2 text-gray-500 font-mono text-xs">
          <MapPin size={14} />
          {socials.location}
        </div>
      </div>
    </section>
  );
}
