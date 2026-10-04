import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ number, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-electric-blue font-mono text-sm">{number} /</span>
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white uppercase">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light">
          {subtitle}
        </p>
      )}
      <div className="h-px w-full bg-gradient-to-r from-navy-700 to-transparent mt-8" />
    </div>
  );
}
