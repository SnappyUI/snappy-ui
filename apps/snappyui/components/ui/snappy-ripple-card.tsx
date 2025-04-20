"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

export default function RippleCard({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [rippleCount, setRippleCount] = useState(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!isHovering)
      return;

    // Only create a new ripple every 500ms to avoid too many animations
    if (Date.now() % 500 < 50) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      const newRipple = {
        id: rippleCount,
        x,
        y,
      };

      setRipples(prev => [...prev, newRipple]);
      setRippleCount(prev => prev + 1);

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 2000);
    }
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "mx-auto w-full bg-gradient-to-br from-sky-900 to-indigo-900 relative rounded-2xl overflow-hidden",
        containerClassName,
      )}
    >
      <div
        className="relative h-full px-4 py-10 sm:px-10 overflow-hidden"
        style={{
          boxShadow: "0 10px 30px rgba(2, 132, 199, 0.4), 0 0 0 1px rgba(14, 118, 168, 0.2)",
        }}
      >
        {/* Ripple effects */}
        <AnimatePresence>
          {ripples.map(ripple => (
            <motion.div
              key={ripple.id}
              initial={{ scale: 0, opacity: 0.7 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute rounded-full bg-white/30 pointer-events-none"
              style={{
                width: "150px",
                height: "150px",
                left: `${ripple.x}%`,
                top: `${ripple.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </AnimatePresence>

        {/* Border glow effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-50"
          style={{
            background: "linear-gradient(135deg, rgba(14, 165, 233, 0.5) 0%, rgba(56, 189, 248, 0) 50%, rgba(14, 165, 233, 0.5) 100%)",
          }}
        />

        {/* Content */}
        <div className={cn("relative z-10", className)}>
          {children}
        </div>

        {/* Subtle wave effect at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 opacity-30"
          style={{
            background: "linear-gradient(to top, rgba(14, 165, 233, 0.3), transparent)",
            transform: isHovering ? "translateY(10%) scale(1.05)" : "translateY(30%) scale(1)",
            transition: "transform 1.5s ease-in-out",
          }}
        />
      </div>
    </motion.section>
  );
};
