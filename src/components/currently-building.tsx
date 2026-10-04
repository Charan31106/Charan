"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/section-header";
import { StatusIndicator } from "./ui/status-indicator";

const statusItems = [
  { label: "EXPLORING", value: "AI + Embedded Systems", status: "building" as const },
  { label: "BUILDING", value: "Engineering Projects", status: "online" as const },
  { label: "LEARNING", value: "ECE / Systems / Robotics", status: "learning" as const },
  { label: "NEXT", value: "More physical prototypes", status: "offline" as const },
];

export function CurrentlyBuilding() {
  return (
    <section className="py-24 relative bg-navy-800/20 border-t border-navy-700">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 xl:px-24">
        <SectionHeader 
          number="07" 
          title="Currently Building" 
          subtitle="Real-time focus and exploration areas."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statusItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 border border-navy-700 bg-navy-900/50 rounded-sm flex flex-col gap-3"
            >
              <StatusIndicator 
                label={item.label} 
                status={item.status} 
                pulse={item.status === 'online' || item.status === 'building'} 
              />
              <p className="text-white text-lg font-light tracking-wide pl-4 border-l border-navy-700">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
