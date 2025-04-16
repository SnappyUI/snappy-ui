"use client";
import { motion } from "motion/react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

export default function NeonCard({
  children,
  containerClassName,
  className,
  neonColor = "#ff00ff",
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  neonColor?: string;
  style?: React.CSSProperties;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parse neon color for glow effect
  const colorRgb = hexToRgb(neonColor) || { r: 255, g: 0, b: 255 };
  const colorString = `${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}`;

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  // Convert hex color to RGB
  function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : null;
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "mx-auto w-full relative rounded-2xl group",
        containerClassName,
      )}
    >
      {/* Neon border effect */}
      <div
        className="absolute -inset-0.5 bg-black rounded-2xl group-hover:blur-md"
        style={{
          background: isHovering
            ? `linear-gradient(120deg, rgba(${colorString}, 0) 0%, rgba(${colorString}, 0.8) ${mousePosition.x}%, rgba(${colorString}, 0) 100%)`
            : `linear-gradient(120deg, rgba(${colorString}, 0) 0%, rgba(${colorString}, 0.4) 50%, rgba(${colorString}, 0) 100%)`,
          opacity: isHovering ? 1 : 0.5,
          transition: "opacity 0.3s ease-out",
        }}
      />

      {/* Card content */}
      <div className="relative h-full bg-gray-900 rounded-2xl overflow-hidden z-10">
        <div className={cn("px-4 py-10 sm:px-10 h-full", className)}>
          {/* Glow effect following cursor */}
          <div
            className="absolute rounded-full opacity-20 blur-2xl"
            style={{
              width: "200px",
              height: "200px",
              background: `radial-gradient(circle, rgba(${colorString}, 0.6) 0%, rgba(${colorString}, 0) 70%)`,
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: "translate(-50%, -50%)",
              opacity: isHovering ? 0.6 : 0,
              transition: "opacity 0.3s ease-out",
            }}
          />

          {/* Scanline effect */}
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-white"
                style={{
                  top: `${i * 5}%`,
                  animation: `scanline ${3 + i % 5}s linear infinite`,
                  opacity: 0.5 - i * 0.02,
                }}
              />
            ))}
          </div>

          <style jsx global>
            {`
            @keyframes scanline {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
          `}
          </style>

          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
