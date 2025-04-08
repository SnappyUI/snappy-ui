"use client";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export default function MorphCard({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) {
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [blobPosition, setBlobPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();

    // Get position as percentage (0-100)
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });

    // Update blob position with lag
    setBlobPosition(prev => ({
      x: prev.x + (x - prev.x) * 0.1,
      y: prev.y + (y - prev.y) * 0.1,
    }));
  };

  // Animate blob even when not hovering
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setBlobPosition(prev => ({
          x: prev.x + (Math.sin(Date.now() / 2000) * 2),
          y: prev.y + (Math.cos(Date.now() / 2000) * 2),
        }));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isHovering]);

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "mx-auto w-full relative rounded-2xl overflow-hidden",
        containerClassName,
      )}
    >
      <div className="relative h-full rounded-2xl overflow-hidden bg-slate-900">
        {/* Morphing background */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/30 via-purple-600/30 to-indigo-600/30 opacity-70 blur-xl transition-all duration-700"
          style={{
            transform: `translate(${blobPosition.x / 5 - 10}%, ${blobPosition.y / 5 - 10}%)`,
          }}
        />

        {/* Main blob */}
        <div
          className="absolute w-full h-full opacity-60 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${blobPosition.x}% ${blobPosition.y}%, rgba(192, 132, 252, 0.8) 0%, rgba(79, 70, 229, 0.3) 50%, transparent 80%)`,
          }}
        />

        {/* Content container */}
        <div className={cn("relative z-10 h-full px-4 py-20 sm:px-10", className)}>
          {children}
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] opacity-30" />
      </div>
    </motion.section>
  );
};
