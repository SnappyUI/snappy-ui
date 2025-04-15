"use client";
import { motion } from "motion/react";
import React, { useRef, useState } from "react";

import { cn } from "@/lib/utils";

export default function ParallaxCard({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current)
      return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate rotation based on mouse position relative to card center
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Limit rotation to a reasonable range (-10 to 10 degrees)
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 5;
    const rotateX = ((centerY - mouseY) / (rect.height / 2)) * 5;

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  return (
    <div
      className={cn(
        "mx-auto w-full perspective-1000 relative",
        containerClassName,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setScale(1.02)}
      onMouseLeave={() => {
        setRotateX(0);
        setRotateY(0);
        setScale(1);
      }}
    >
      <motion.div
        ref={cardRef}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
          transition: "transform 0.2s ease-out",
        }}
        className={cn(
          "bg-gradient-to-br from-blue-900 to-indigo-800 rounded-2xl overflow-hidden transform-style-3d",
          className,
        )}
      >
        {/* Background layer */}
        <div className="absolute inset-0 bg-grid-white/[0.03]" />

        {/* Middle layer with parallax effect */}
        <motion.div
          style={{
            transform: `translateZ(40px) rotateX(${-rotateX * 0.5}deg) rotateY(${-rotateY * 0.5}deg)`,
            transition: "transform 0.2s ease-out",
          }}
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
        />

        {/* Content layer */}
        <motion.div
          style={{
            transform: `translateZ(60px) rotateX(${-rotateX * 0.8}deg) rotateY(${-rotateY * 0.8}deg)`,
            transition: "transform 0.2s ease-out",
          }}
          className="relative z-10 px-4 py-10 sm:px-10 h-full"
        >
          <div className="relative z-20">{children}</div>
        </motion.div>

        {/* Shine effect */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.1) 50%, transparent 55%)",
            transform: `translateX(${rotateY * 15}px)`,
            transition: "transform 0.2s ease-out",
          }}
        />
      </motion.div>
    </div>
  );
};
