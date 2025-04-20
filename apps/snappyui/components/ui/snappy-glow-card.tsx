"use client";
import { motion } from "motion/react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

export default function GlowCard({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      className={cn(
        "mx-auto w-full bg-gradient-to-br from-purple-900 to-indigo-900 relative rounded-2xl overflow-hidden",
        containerClassName,
      )}
    >
      <div
        className="relative h-full overflow-hidden sm:mx-0 sm:rounded-2xl"
        style={{
          boxShadow: "0 10px 30px rgba(79, 70, 229, 0.4), 0 0 0 1px rgba(79, 70, 229, 0.1)",
        }}
      >
        {isHovering && (
          <div
            className="absolute w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
              left: mousePosition.x - 128,
              top: mousePosition.y - 128,
              transform: "translate3d(0, 0, 0)",
            }}
          />
        )}
        <motion.div
          animate={{
            scale: isHovering ? 1.02 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn("h-full px-4 py-12 sm:px-10 relative z-10", className)}
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-white/[0.02]" />
          <div className="absolute inset-0 bg-black/20" />
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};
