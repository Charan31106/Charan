"use client";

import { useState, useEffect } from "react";
import { socials } from "@/data/socials";
import { SectionHeader } from "./ui/section-header";
import { 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock, 
  MapPin, 
  Send,
  GraduationCap,
  Award
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";

const contactTopics = [
  { label: "Internship", subject: "Internship Opportunity - Charan C Portfolio" },
  { label: "Hackathon Team", subject: "Hackathon Collaboration - Charan C Portfolio" },
  { label: "IoT / Robotics Project", subject: "Hardware & IoT Project Discussion" },
  { label: "Say Hello", subject: "Connecting with Charan C" },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoHref = `mailto:${socials.email}?subject=${encodeURIComponent(contactTopics[selectedTopic].subject)}`;

  return (
    <section id="contact" className="py-20 relative border-t border-cyan-500/20 bg-transparent">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 xl:px-24">
        <SectionHeader 
          number="06" 
          title="Get In Touch" 
          subtitle="Open for internships, hackathon collaborations, and engineering discussions."
        />

        {/* Accountability & Verification Strip */}
        <div className="mb-8 p-4 bg-navy-950/80 border border-cyan-500/20 rounded-md backdrop-blur-md flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-emerald-300 font-medium tracking-wide">
              Available for Opportunities
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-300 text-xs">
            <div className="flex items-center gap-1.5 text-cyan-300/90">
              <GraduationCap size={14} className="text-cyan-400" />
              <span>2nd-Year ECE @ VVCE Mysuru</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-cyan-300/90">
              <Award size={14} className="text-cyan-400" />
              <span>Core Member, IVC</span>
            </div>

            <div className="flex items-center gap-1.5 text-gray-400">
              <MapPin size={14} className="text-cyan-400" />
              <span>Mysuru, India</span>
            </div>

            <div className="flex items-center gap-1.5 text-gray-400">
              <Clock size={14} className="text-cyan-400" />
              <span>{currentTime ? `${currentTime} IST` : "IST"}</span>
            </div>
          </div>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Direct Email Card */}
          <div className="lg:col-span-7 bg-navy-950/90 border border-cyan-500/25 p-7 md:p-8 rounded-md backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-cyan-500/15 pb-4 mb-6">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Mail size={16} />
                  <span className="font-mono text-xs tracking-wider uppercase font-medium">
                    Direct Email
                  </span>
                </div>
                <span className="text-[11px] font-mono text-cyan-300/80 bg-navy-900/80 border border-cyan-500/20 px-2.5 py-0.5 rounded-sm">
                  Replies within 24 hours
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                Let&apos;s build something ambitious.
              </h3>
              <p className="text-gray-300 text-sm font-light mb-6 leading-relaxed">
                Whether you have an internship role, a hackathon project, or want to discuss hardware and intelligent systems, I&apos;m ready to connect.
              </p>

              {/* Topic Selector for accountability and ease of reach */}
              <div className="mb-6">
                <label className="block text-[11px] font-mono text-gray-400 mb-2 uppercase tracking-wider">
                  Reaching out regarding:
                </label>
                <div className="flex flex-wrap gap-2">
                  {contactTopics.map((topic, i) => (
                    <button
                      key={topic.label}
                      onClick={() => setSelectedTopic(i)}
                      className={cn(
                        "text-xs font-mono px-3 py-1.5 rounded-sm border transition-all text-left",
                        selectedTopic === i
                          ? "bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.15)]"
                          : "bg-navy-900/60 border-cyan-500/15 text-gray-400 hover:text-cyan-300 hover:border-cyan-500/30"
                      )}
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email Address Bar with direct copy and email client launcher */}
              <div className="p-3.5 bg-navy-900/90 border border-cyan-500/30 rounded-md mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 px-1">
                  <Mail size={16} className="text-cyan-400 shrink-0" />
                  <span className="font-mono text-sm sm:text-base text-white font-medium select-all">
                    {socials.email}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className={cn(
                      "flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-mono tracking-wider border rounded-sm transition-all",
                      copied
                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                        : "bg-cyan-500/10 border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/25 hover:border-cyan-300"
                    )}
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={mailtoHref}
                    className="flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-mono tracking-wider bg-cyan-400 text-navy-950 font-medium hover:bg-cyan-300 rounded-sm transition-colors"
                  >
                    <Send size={13} />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom SLA statement */}
            <div className="border-t border-cyan-500/15 pt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-gray-400">
              <span className="text-cyan-400/80">Accountability: Verified student & club lead</span>
              <span>Fastest reach: Email & LinkedIn</span>
            </div>
          </div>

          {/* Right Column: GitHub & LinkedIn Profiles */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* GitHub Card */}
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="group p-6 bg-navy-950/90 border border-cyan-500/20 hover:border-cyan-400/50 rounded-md backdrop-blur-md transition-all duration-300 flex flex-col justify-between flex-1"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-navy-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:border-cyan-300 transition-colors">
                      <FaGithub size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-cyan-400/70 block uppercase">
                        GitHub
                      </span>
                      <h4 className="text-lg font-mono text-white group-hover:text-cyan-300 transition-colors">
                        @Charan31106
                      </h4>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <p className="text-gray-300 text-xs font-light leading-relaxed mb-4">
                  Open-source repositories for IoT firmware, space mechanics (DebrisEye), agricultural tools, and embedded robotics.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-t border-cyan-500/15 pt-3">
                <span className="text-cyan-400/80">Public Repositories</span>
                <span className="group-hover:translate-x-1 transition-transform text-cyan-400 font-medium">View Code →</span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group p-6 bg-navy-950/90 border border-cyan-500/20 hover:border-cyan-400/50 rounded-md backdrop-blur-md transition-all duration-300 flex flex-col justify-between flex-1"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-navy-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:border-cyan-300 transition-colors">
                      <FaLinkedin size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-cyan-400/70 block uppercase">
                        LinkedIn
                      </span>
                      <h4 className="text-lg font-mono text-white group-hover:text-cyan-300 transition-colors">
                        Charan C
                      </h4>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <p className="text-gray-300 text-xs font-light leading-relaxed mb-4">
                  Connect for hackathon milestones, IVC leadership updates, and professional engineering collaborations.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-t border-cyan-500/15 pt-3">
                <span className="text-cyan-400/80">Professional Network</span>
                <span className="group-hover:translate-x-1 transition-transform text-cyan-400 font-medium">Connect →</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

