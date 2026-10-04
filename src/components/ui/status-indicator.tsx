import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  label: string;
  status?: "online" | "offline" | "building" | "learning";
  className?: string;
  pulse?: boolean;
}

export function StatusIndicator({ label, status = "online", className, pulse = true }: StatusIndicatorProps) {
  const getStatusColor = () => {
    switch (status) {
      case "online": return "bg-green-500";
      case "building": return "bg-electric-blue";
      case "learning": return "bg-violet-accent";
      case "offline": return "bg-gray-500";
      default: return "bg-cyan-accent";
    }
  };

  return (
    <div className={cn("flex items-center gap-2 text-xs font-mono tracking-wider text-gray-400 uppercase", className)}>
      <div className="relative flex h-2 w-2">
        {pulse && (
          <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", getStatusColor())}></span>
        )}
        <span className={cn("relative inline-flex rounded-full h-2 w-2", getStatusColor())}></span>
      </div>
      <span>{label}</span>
    </div>
  );
}
