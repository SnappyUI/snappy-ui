"use client";
import { motion } from "motion/react";
import React from "react";

import { cn } from "@/lib/utils"; // Import Tailwind class utility

type LoaderProps = {
  size?: "small" | "medium" | "large";
  color?: string; // Accepts any valid CSS color
  thickness?: "thin" | "normal" | "thick";
  speed?: "slow" | "normal" | "fast";
};

const CircularLoader: React.FC<LoaderProps> = ({
  size = "medium",
  color,
  thickness = "normal",
  speed = "normal",
}) => {
  // Size mapping
  const sizeMap = {
    small: "w-6 h-6",
    medium: "w-12 h-12",
    large: "w-20 h-20",
  };

  // Thickness mapping
  const thicknessMap = {
    thin: "border-2",
    normal: "border-4",
    thick: "border-8",
  };

  // Speed mapping
  const speedMap = {
    slow: 2,
    normal: 1.2,
    fast: 0.8,
  };

  // Default border color with dark mode support
  const defaultBorderColor = "border-black dark:border-white";
  const computedColor = color || "black";
  const computedDarkColor = color || "white";

  // Animation variants
  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: speedMap[speed],
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={cn(
          sizeMap[size],
          thicknessMap[thickness],
          "rounded-full border-solid",
          !color && defaultBorderColor, // Apply Tailwind color only if no custom color is set
        )}
        style={{
          borderTopColor: "transparent", // Ensure top border is transparent for animation effect
          borderRightColor: `var(--tw-text-opacity,1) ${computedColor}`,
          borderBottomColor: `var(--tw-text-opacity,1) ${computedColor}`,
          borderLeftColor: `var(--tw-text-opacity,1) ${computedDarkColor}`,
        }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
};

export default CircularLoader;
