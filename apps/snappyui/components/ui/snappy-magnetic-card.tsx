"use client";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export default function MagneticCard({
  children,
  containerClassName,
  className,
  strength = 40,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  strength?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Update card size when it changes
  useEffect(() => {
    if (cardRef.current) {
      const updateSize = () => {
        if (cardRef.current) {
          const { width, height } = cardRef.current.getBoundingClientRect();
          setSize({ width, height });
        }
      };

      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current)
      return;

    // Calculate distance from mouse to center of card
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate position relative to center (normalized from -1 to 1)
    const relativeX = (e.clientX - centerX) / (rect.width / 2);
    const relativeY = (e.clientY - centerY) / (rect.height / 2);

    // Apply magnetic pull effect (stronger at edges)
    const distance = Math.sqrt(relativeX * relativeX + relativeY * relativeY);
    const pullFactor = Math.min(distance * 1.5, 1);

    // Calculate position with strength factor
    const x = relativeX * strength * pullFactor;
    const y = relativeY * strength * pullFactor;

    setPosition({ x, y });
  };

  return (
    <div
      className={cn("mx-auto w-full relative", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setPosition({ x: 0, y: 0 });
      }}
    >
      <motion.div
        ref={cardRef}
        animate={{
          x: isHovering ? position.x : 0,
          y: isHovering ? position.y : 0,
          transition: { type: "spring", stiffness: 150, damping: 15 },
        }}
        className={cn(
          "bg-gradient-to-br from-emerald-800 to-teal-900 rounded-2xl overflow-hidden",
          className,
        )}
      >
        <div
          className="relative h-full px-4 py-20 sm:px-10 overflow-hidden"
          style={{
            boxShadow: isHovering
              ? `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1), ${position.x * -0.2}px ${position.y * -0.2}px 20px rgba(0, 0, 0, 0.2)`
              : "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Animated glow that follows cursor */}
          {isHovering && (
            <div
              className="absolute rounded-full bg-gradient-to-r from-teal-400/30 to-emerald-400/30 blur-3xl"
              style={{
                width: size.width * 0.8,
                height: size.height * 0.8,
                left: size.width / 2 + position.x / 2,
                top: size.height / 2 + position.y / 2,
                transform: "translate(-50%, -50%)",
                opacity: Math.min(
                  Math.sqrt(Math.abs(position.x) + Math.abs(position.y)) / 20,
                  0.8,
                ),
              }}
            />
          )}

          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at ${50 + (position.x / size.width) * 50}% ${50 + (position.y / size.height) * 50}%, rgba(255,255,255,0.2) 0%, transparent 60%)`,
            }}
          />

          {/* Content container */}
          <div className="relative z-10">{children}</div>
        </div>
      </motion.div>
    </div>
  );
};
