"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

type RatingProps = {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  count?: number;
  size?: "sm" | "default" | "lg";
  readOnly?: boolean;
  precision?: 1 | 0.5;
  emptyIcon?: React.ReactNode;
  filledIcon?: React.ReactNode;
  emptyColor?: string;
  filledColor?: string;
  hoverColor?: string;
  className?: string;
  iconClassName?: string;
  animationStyle?: "pulse" | "bounce" | "wobble" | "sparkle" | "flip" | "pop" | "none";
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">;

export default function Rating({
  value,
  defaultValue = 0,
  onChange,
  count = 5,
  size = "default",
  readOnly = false,
  precision = 1,
  emptyIcon,
  filledIcon,
  emptyColor,
  filledColor,
  hoverColor,
  className,
  iconClassName,
  animationStyle = "none",
  ...props
}: RatingProps) {
  const [hoveredValue, setHoveredValue] = React.useState<number | null>(null);
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const [animatingIndex, setAnimatingIndex] = React.useState<number | null>(null);

  // Handle controlled/uncontrolled component behavior
  const currentValue = value !== undefined ? value : internalValue;

  const handleClick = (newValue: number) => {
    if (readOnly)
      return;

    // Allow users to clear the rating by clicking on the same star
    const updatedValue = currentValue === newValue ? 0 : newValue;

    // Trigger animation for clicked icon
    setAnimatingIndex(newValue);
    setTimeout(() => setAnimatingIndex(null), 600);

    if (onChange) {
      onChange(updatedValue);
    }

    if (value === undefined) {
      setInternalValue(updatedValue);
    }
  };

  const handleMouseEnter = (newValue: number) => {
    if (!readOnly) {
      setHoveredValue(newValue);
    }
  };

  const handleMouseLeave = () => {
    setHoveredValue(null);
  };

  // Size styles
  const sizeStyles = {
    sm: "text-lg",
    default: "text-2xl",
    lg: "text-3xl",
  };

  // Animation variants based on style
  const getAnimationVariants = (index: number) => {
    const baseVariants = {
      initial: { scale: 1 },
      hover: { scale: 1.1, transition: { duration: 0.2 } },
    };

    // Only apply special animations if this is the animating index
    const isAnimating = animatingIndex === index;

    switch (animationStyle) {
      case "pulse":
        return {
          ...baseVariants,
          animate: isAnimating
            ? {
                scale: [1, 1.3, 1, 1.15, 1],
                transition: { duration: 0.6 },
              }
            : { scale: 1 },
        };
      case "bounce":
        return {
          ...baseVariants,
          animate: isAnimating
            ? {
                y: [0, -10, 0, -6, 0],
                transition: { duration: 0.6 },
              }
            : { y: 0 },
        };
      case "wobble":
        return {
          ...baseVariants,
          animate: isAnimating
            ? {
                rotate: [0, -10, 10, -5, 5, 0],
                transition: { duration: 0.6 },
              }
            : { rotate: 0 },
        };
      case "sparkle":
        return {
          ...baseVariants,
          animate: isAnimating
            ? {
                scale: [1, 1.2, 0.9, 1.1, 1],
                opacity: [1, 0.7, 1],
                filter: [
                  "drop-shadow(0 0 0 rgba(255,215,0,0))",
                  "drop-shadow(0 0 3px rgba(255,215,0,0.7))",
                  "drop-shadow(0 0 0 rgba(255,215,0,0))",
                ],
                transition: { duration: 0.6 },
              }
            : {
                scale: 1,
                opacity: 1,
                filter: "drop-shadow(0 0 0 rgba(255,215,0,0))",
              },
        };
      case "flip":
        return {
          ...baseVariants,
          animate: isAnimating
            ? {
                rotateY: [0, 180, 0],
                transition: { duration: 0.6 },
              }
            : { rotateY: 0 },
        };
      case "pop":
        return {
          ...baseVariants,
          animate: isAnimating
            ? {
                scale: [1, 0.5, 1.4, 1],
                transition: { duration: 0.5, times: [0, 0.2, 0.6, 1] },
              }
            : { scale: 1 },
        };
      default:
        return {
          ...baseVariants,
          animate: { scale: 1 },
        };
    }
  };

  // Generate stars
  const renderStars = () => {
    const stars = [];
    const displayValue = hoveredValue !== null ? hoveredValue : currentValue;

    for (let i = 1; i <= count; i++) {
      const isFilled = i <= displayValue;
      const isHalfFilled = precision === 0.5 && i === Math.ceil(displayValue) && !Number.isInteger(displayValue);
      const variants = getAnimationVariants(i);

      stars.push(
        <motion.span
          key={i}
          className={cn(
            "transition-colors duration-200 inline-flex",
            readOnly ? "cursor-default" : "cursor-pointer",
            sizeStyles[size],
            iconClassName,
          )}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          style={{
            color: isFilled ? filledColor : emptyColor,
            ...(hoveredValue !== null && i <= hoveredValue && !readOnly ? { color: hoverColor || filledColor } : {}),
          }}
          variants={variants}
          initial="initial"
          animate="animate"
          whileHover={readOnly ? undefined : "hover"}
        >
          {isHalfFilled
            ? (
                <span className="relative inline-block">
                  <span className="absolute inset-0 overflow-hidden w-1/2">{filledIcon || "★"}</span>
                  <span className="text-gray-300 dark:text-gray-600">{emptyIcon || "★"}</span>
                </span>
              )
            : (
                isFilled ? (filledIcon || "★") : (emptyIcon || "☆")
              )}

          {/* Sparkle effect animation for selected icons */}
          {isFilled && animationStyle === "sparkle" && (
            <AnimatePresence>
              {animatingIndex === i && (
                <motion.span
                  className="absolute inset-0 z-10 pointer-events-none"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                    <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z" fill="rgba(255,215,0,0.7)" />
                  </svg>
                </motion.span>
              )}
            </AnimatePresence>
          )}
        </motion.span>,
      );
    }

    return stars;
  };

  return (
    <div
      className={cn("flex items-center relative", className)}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {renderStars()}
    </div>
  );
}
