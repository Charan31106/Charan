"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareOpacity?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
}

export function TiltCard({
  children,
  className,
  maxTilt = 8,
  glareOpacity = 0.2,
  onClick,
  style,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Normalized cursor coordinates (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Percentage cursor coordinates (0% to 100%) for glare
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  // Smooth springs for rotation
  const springConfig = { damping: 22, stiffness: 280, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [`${maxTilt}deg`, `-${maxTilt}deg`]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [`-${maxTilt}deg`, `${maxTilt}deg`]);

  // Glare radial gradient template
  const glareBackground = useMotionTemplate`
    radial-gradient(
      450px circle at ${glareX}% ${glareY}%,
      rgba(34, 211, 238, ${glareOpacity}),
      rgba(56, 189, 248, 0.09) 25%,
      rgba(167, 139, 250, 0.04) 45%,
      transparent 70%
    )
  `;


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    // Range: -0.5 to 0.5
    mouseX.set(clientX / width - 0.5);
    mouseY.set(clientY / height - 0.5);

    // Percentage for glare
    glareX.set((clientX / width) * 100);
    glareY.set((clientY / height) * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  if (prefersReducedMotion) {
    return (
      <div 
        ref={cardRef} 
        onClick={onClick} 
        style={style}
        className={cn("relative rounded-sm overflow-hidden", className)} 
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        ...style,
      }}
      className={cn(
        "group relative rounded-sm overflow-hidden transition-shadow duration-300",
        isHovered ? "shadow-[0_20px_40px_rgba(6,14,34,0.8),0_0_25px_rgba(34,211,238,0.15)]" : "",
        className
      )}
    >
      {/* Soft Ambient Radial Glare Layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 mix-blend-screen"
        style={{
          opacity: isHovered ? 1 : 0,
          background: glareBackground,
        }}
      />

      {/* Card Body with 3D Preserved Depth */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between [transform:translateZ(16px)] [transform-style:preserve-3d]">
        {children}
      </div>
    </motion.div>
  );
}
