import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="py-8 border-t border-cyan-500/20 bg-navy-950/80 backdrop-blur-md">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-white font-medium tracking-widest text-sm mb-1">CHARAN C</p>
          <p className="text-xs text-cyan-400/70 font-mono">
            ECE • HARDWARE • SOFTWARE • AI • ROBOTICS
          </p>
        </div>
        
        <div className="flex items-center gap-6 text-xs font-mono text-gray-400">
          <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors">GitHub</a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors">LinkedIn</a>
          <a href={`mailto:${socials.email}`} className="hover:text-cyan-300 transition-colors">Email</a>
        </div>
        
        <div className="text-xs text-gray-400 font-mono">
          © {new Date().getFullYear()} Charan C
        </div>
      </div>
    </footer>
  );
}
