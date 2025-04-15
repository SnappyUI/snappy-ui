"use client";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export default function FloatingCard({
  children,
  containerClassName,
  className,
  particleCount = 20,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  particleCount?: number;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; vx: number; vy: number; opacity: number }>>([]);

  // Generate particles on mount
  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    setParticles(newParticles);

    // Animate particles
    const interval = setInterval(() => {
      setParticles(prevParticles =>
        prevParticles.map((p) => {
          // Move particle
          let x = p.x + p.vx;
          let y = p.y + p.vy;

          // Bounce off edges
          if (x < 0 || x > 100)
            p.vx *= -1;
          if (y < 0 || y > 100)
            p.vy *= -1;

          // Ensure within bounds
          x = Math.max(0, Math.min(100, x));
          y = Math.max(0, Math.min(100, y));

          return { ...p, x, y };
        }),
      );
    }, 50);

    return () => clearInterval(interval);
  }, [particleCount]);

  return (
    <motion.section
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={cn(
        "mx-auto w-full bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900 relative rounded-2xl overflow-hidden",
        containerClassName,
      )}
    >
      <div
        className="relative h-full px-4 py-10 sm:px-10 overflow-hidden"
        style={{
          boxShadow: isHovering
            ? "0 25px 50px rgba(123, 97, 255, 0.3), 0 0 0 1px rgba(123, 97, 255, 0.2)"
            : "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.5s ease-out",
        }}
      >
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white"
              animate={{
                opacity: isHovering ? particle.opacity * 1.5 : particle.opacity,
                scale: isHovering ? 1.2 : 1,
              }}
              transition={{ duration: 1.5 }}
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: particle.opacity,
              }}
            />
          ))}
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-transparent to-purple-500/20" />

        {/* Content with slight floating effect */}
        <motion.div
          animate={{
            y: isHovering ? [-2, 2, -2] : 0,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className={cn("relative z-10", className)}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};
