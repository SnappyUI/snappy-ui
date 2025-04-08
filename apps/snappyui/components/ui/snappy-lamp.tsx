"use client";

// More precise types for Framer Motion animation props
import type { TargetAndTransition, Transition, Variant, VariantLabels } from "motion/react";

import { motion } from "motion/react";
import React from "react";

import { cn } from "@/lib/utils"; // Make sure this utility exists

// --- Types ---

export type LampVariant =
  | "default"
  | "spotlight"
  | "gradient"
  | "soft"
  | "neon";

export type LampSize =
  | "sm"
  | "default"
  | "lg"
  | "xl";

// Framer Motion animation prop types (using more precise types)
type AnimationProps = {
  initial?: Variant | boolean | TargetAndTransition | VariantLabels;
  whileInView?: Variant | TargetAndTransition | VariantLabels;
  transition?: Transition;
};

export type LampProps = {
  children: React.ReactNode;
  className?: string;
  variant?: LampVariant;
  size?: LampSize;
  spotlightColor?: string;
  glowColor?: string;
  backgroundColor?: string;
  backgroundOpacity?: number;
  glowOpacity?: number;
  borderRadius?: string;
  intensity?: number;
  animated?: boolean; // For the light pulse animation
  enableAnimation?: boolean; // Enable/disable children animation (default: true)
  customAnimation?: AnimationProps | null; // Provide custom animation props, or null to force no animation even if enableAnimation=true
};

// --- Default Variant Styles ---
const variantDefaults: Record<LampVariant, Partial<LampProps>> = {
  default: {
    spotlightColor: "#0ea5e9",
    backgroundColor: "black",
    glowOpacity: 0.7,
    intensity: 20,
  },
  spotlight: {
    spotlightColor: "#fbbf24",
    backgroundColor: "rgb(2, 6, 23)",
    glowOpacity: 0.7,
    intensity: 20,
  },
  gradient: {
    spotlightColor: "#10b981",
    glowColor: "#10b981",
    glowOpacity: 0.7,
    intensity: 20,
    // backgroundColor handled by class
  },
  neon: {
    spotlightColor: "#ec4899",
    glowColor: "#ec4899",
    backgroundColor: "black",
    glowOpacity: 0.7,
    intensity: 25,
  },
  soft: {
    spotlightColor: "#a855f7",
    glowColor: "#a855f7",
    backgroundColor: "rgb(15, 23, 42)",
    glowOpacity: 0.7,
    intensity: 15,
  },
};

// --- Default Variant Animations for Children ---
const variantAnimations: Record<LampVariant, AnimationProps> = {
  default: {
    initial: { opacity: 0.5, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: 0.3, duration: 0.8, ease: "easeInOut" },
  },
  spotlight: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { delay: 0.2, duration: 1, ease: "backOut" },
  },
  gradient: {
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay: 0.4, duration: 0.7, ease: "easeOut" },
  },
  neon: {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { delay: 0.3, duration: 0.8, ease: "circOut" },
  },
  soft: {
    initial: { opacity: 0, filter: "blur(8px)" },
    whileInView: { opacity: 1, filter: "blur(0px)" },
    transition: { delay: 0.3, duration: 0.9, ease: "easeOut" },
  },
};

// --- Main Component ---

export function LampContainer({
  children,
  className,
  variant = "default",
  size = "default",
  spotlightColor: explicitSpotlightColor,
  glowColor: explicitGlowColor,
  backgroundColor: explicitBackgroundColor,
  backgroundOpacity = 0.95, // Opacity for the main container background
  glowOpacity: explicitGlowOpacity, // Opacity specifically for the light effects
  borderRadius = "1.75rem", // 28px
  intensity: explicitIntensity,
  animated = true, // Light pulse animation
  enableAnimation = true, // Children animation enabled by default
  customAnimation, // User-provided animation override
  ...props
}: LampProps) {
  // --- Determine Final Styles ---
  const defaults = variantDefaults[variant] || variantDefaults.default;
  const finalSpotlightColor = explicitSpotlightColor ?? defaults.spotlightColor ?? "#0ea5e9";
  const finalGlowColor = explicitGlowColor ?? defaults.glowColor ?? finalSpotlightColor;
  const finalGlowOpacity = explicitGlowOpacity ?? defaults.glowOpacity ?? 0.3; // Use this for light effect visibility
  const finalIntensity = explicitIntensity ?? defaults.intensity ?? 20;
  const finalBackgroundColor = explicitBackgroundColor ?? defaults.backgroundColor; // Resolved background color

  const sizeStyles = { sm: "h-[300px]", default: "h-[400px]", lg: "h-[500px]", xl: "h-[600px]" };
  // Background classes primarily for gradients or base colors that can be overridden by style prop
  const variantBackgroundStyles: Record<LampVariant, string> = {
    default: "", // Will use style prop for background color
    spotlight: "bg-slate-950", // Base dark background
    gradient: "bg-gradient-to-b from-black to-slate-900", // Gradient background
    soft: "bg-slate-900", // Base dark background
    neon: "", // Will use style prop for background color
  };

  // --- Determine Animation ---
  const defaultAnimation = variantAnimations[variant] || variantAnimations.default;
  const animationProps
    = customAnimation === null
      ? {}
      : enableAnimation
        ? customAnimation ?? defaultAnimation
        : {};
  const applyAnimation = Object.keys(animationProps).length > 0;

  // Helper to convert color and alpha to hex string for gradients
  const getColorWithOpacity = (color: string, opacity: number): string => {
    // Basic hex check (can be improved)
    if (!color.startsWith("#"))
      return color; // Return non-hex colors as is

    const alphaHex = Math.round(opacity * 255).toString(16).padStart(2, "0");
    // Handle 3, 4, 6, 8 digit hex codes potentially
    if (color.length === 4) { // #RGB
      return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}${alphaHex}`;
    }
    if (color.length === 7) { // #RRGGBB
      return `${color}${alphaHex}`;
    }
    if (color.length === 9) {
      // #RRGGBBAA (replace alpha)
      return `${color.substring(0, 7)}${alphaHex}`;
    }
    // Fallback or handle other formats if needed
    return `${color}${alphaHex}`; // Assume #RRGGBB format if unsure
  };

  const containerStyle = {
    backgroundColor: (variant !== "gradient" || explicitBackgroundColor) ? finalBackgroundColor : undefined,
    opacity: backgroundOpacity,
    borderRadius,
  };

  const spotlightStyle = {
    background: `radial-gradient(circle at center, ${getColorWithOpacity(finalSpotlightColor, finalGlowOpacity)} 0%, transparent 70%)`,
    filter: `blur(${finalIntensity}px)`,
  };

  const glowStyle = {
    background: `linear-gradient(to bottom, ${getColorWithOpacity(finalGlowColor, finalGlowOpacity * 0.8)} 0%, transparent 100%)`,
    filter: `blur(${finalIntensity * 2}px)`,
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden lamp-container", // Ensure overflow is hidden
        variantBackgroundStyles[variant], // Apply base classes (like gradient)
        sizeStyles[size],
        className,
      )}
      style={containerStyle}
      {...props}
    >
      {/* Core spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
      // Opacity control moved into the background gradient alpha channel
      >
        <div
          className={cn(
            "h-56 w-56 rounded-full", // Base shape
            animated ? "animate-pulse" : "", // Pulse animation for the light source itself
          )}
          style={spotlightStyle}
        />
      </div>

      {/* Additional broader glow effect for specific variants */}
      {(variant === "neon" || variant === "soft") && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div
            className={cn(
              "h-32 w-[80%] max-w-3xl", // Shape of the broader glow
              animated ? "animate-pulse-slow" : "", // Slower pulse for this glow? (ensure defined in CSS/Tailwind)
            )}
            style={glowStyle}
          />
        </div>
      )}

      {/* Content Area - Always above light effects */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4">
        {/* Conditionally wrap children with motion.div for animation */}
        {applyAnimation
          ? (
              <motion.div
                initial={(animationProps as AnimationProps).initial as boolean}
                whileInView={(animationProps as AnimationProps).whileInView as undefined}
                transition={(animationProps as AnimationProps).transition}
                className="flex flex-col items-center text-center" // Centering for the content within the motion div
              >
                {children}
              </motion.div>
            )
          : (
            // Render children directly if animation is disabled
              children
            )}
      </div>
    </div>
  );
}
