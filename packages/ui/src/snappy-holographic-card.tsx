"use client";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export default function HolographicCard({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const requestRef = useRef<number>(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();

    // Calculate relative position (0-100)
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    // Calculate rotation (-7 to 7 degrees)
    const rotX = 7 - (y / 100) * 14;
    const rotY = -7 + (x / 100) * 14;

    setRotation({ x: rotX, y: rotY });
    setGradientPosition({ x, y });
  };

  // Auto-rotate when not hovering
  useEffect(() => {
    if (!isHovering) {
      const animate = () => {
        const time = Date.now() / 2000;
        setRotation({
          x: Math.sin(time) * 3,
          y: Math.cos(time) * 3,
        });
        setGradientPosition({
          x: 50 + Math.sin(time) * 30,
          y: 50 + Math.cos(time) * 30,
        });
        requestRef.current = requestAnimationFrame(animate);
      };

      requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      };
    }
  }, [isHovering]);

  return (
    <div
      className={cn("mx-auto w-full", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
        className="w-full"
      >
        <motion.div
          style={{
            rotateX: `${rotation.x}deg`,
            rotateY: `${rotation.y}deg`,
            transformStyle: "preserve-3d",
          }}
          transition={{ duration: isHovering ? 0 : 0.3 }}
          className="w-full bg-gray-900 rounded-2xl overflow-hidden"
        >
          {/* Holographic overlay */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background: `linear-gradient(135deg, \n                rgba(255, 0, 255, 0.5) 0%, \n                rgba(0, 255, 255, 0.2) 25%, \n                rgba(255, 255, 0, 0.2) 50%, \n                rgba(0, 255, 255, 0.2) 75%, \n                rgba(255, 0, 255, 0.5) 100%)`,
              backgroundSize: "200% 200%",
              backgroundPosition: `${gradientPosition.x}% ${gradientPosition.y}%`,
              filter: "blur(8px)",
            }}
          />

          {/* Rainbow reflection effect */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, \n                rgba(255, 255, 255, 0.8) 0%, \n                rgba(255, 255, 255, 0) 50%)`,
              mixBlendMode: "overlay",
              opacity: 0.6,
            }}
          />

          {/* Scanlines */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 h-px bg-white opacity-30"
                style={{ top: `${i * 2}%` }}
              />
            ))}
          </div>

          {/* Card content */}
          <div className={cn("relative z-10 px-4 py-20 sm:px-10", className)}>
            <div
              style={{
                transform: `translateZ(20px)`,
                transformStyle: "preserve-3d",
              }}
            >
              {children}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
