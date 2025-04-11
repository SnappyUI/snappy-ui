"use client";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export type MarqueeVariant = "primary" | "secondary" | "accent" | "muted";
export type MarqueeSpeed = "slow" | "normal" | "fast";
export type MarqueeDirection = "left" | "right";

export type MarqueeProps = {
  children: React.ReactNode;
  variant?: MarqueeVariant;
  speed?: MarqueeSpeed;
  direction?: MarqueeDirection;
  pauseOnHover?: boolean;
  draggable?: boolean;
  className?: string;
  darkMode?: boolean;
  gap?: number;
  repeat?: number;
};

const Marquee: React.FC<MarqueeProps> = ({
  children,
  variant = "primary",
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  draggable = false,
  className = "",
  darkMode = false,
  gap = 16,
  repeat = 3,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Calculate speed based on the speed prop
  const getSpeed = () => {
    const speedMap = {
      slow: 40,
      normal: 25,
      fast: 15,
    };
    return speedMap[speed];
  };

  // Calculate animation duration based on content width and speed
  const getDuration = () => {
    if (!contentWidth)
      return 0;
    return (contentWidth * getSpeed()) / 1000;
  };

  // Variant-based styling
  const variantStyles = {
    primary: darkMode ? "bg-blue-900 text-blue-100" : "bg-blue-100 text-blue-800",
    secondary: darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-200 text-gray-800",
    accent: darkMode ? "bg-purple-900 text-purple-100" : "bg-purple-100 text-purple-800",
    muted: darkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600",
  };

  // Measure the container and content widths
  useEffect(() => {
    if (!containerRef.current)
      return;

    const updateWidths = () => {
      const container = containerRef.current;
      if (!container)
        return;

      setContainerWidth((prevWidth) => {
        const newWidth = container.offsetWidth;
        return prevWidth !== newWidth ? newWidth : prevWidth;
      });

      const contentWrapper = container.querySelector(".marquee-content-wrapper");
      if (contentWrapper) {
        setContentWidth((prevWidth) => {
          const newWidth = contentWrapper.scrollWidth;
          return prevWidth !== newWidth ? newWidth : prevWidth;
        });
      }
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);

    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, [children]);

  // Create repeats of children for continuous scrolling
  const renderRepeatedChildren = () => {
    return Array.from({ length: repeat }).map((_, index) => (
      <div
        key={`${index}-${Math.random().toString(36).substr(2, 9)}`} // Ensuring unique keys
        className="marquee-content-wrapper flex"
        style={{ marginRight: `${gap}px` }}
      >
        {React.Children.map(children, child =>
          React.isValidElement(child)
            ? React.cloneElement(child, { key: `child-${index}` })
            : child)}
      </div>
    ));
  };

  return (
    <div
      ref={containerRef}
      className={`
        overflow-hidden relative
        ${variantStyles[variant]}
        ${className}
        ${draggable ? "cursor-grab active:cursor-grabbing" : ""}
      `}
    >
      <motion.div
        className="flex whitespace-nowrap"
        drag={draggable ? "x" : false}
        dragConstraints={{ left: -contentWidth, right: containerWidth }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        animate={
          !isDragging
            ? {
                x: direction === "left"
                  ? [0, -(contentWidth + gap)]
                  : [-(contentWidth + gap), 0],
              }
            : undefined
        }
        transition={
          !isDragging
            ? {
                x: {
                  duration: getDuration(),
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }
            : undefined
        }
        whileHover={pauseOnHover && !isDragging ? { animationPlayState: "paused" } : undefined}
      >
        {renderRepeatedChildren()}
      </motion.div>
    </div>
  );
};

export default Marquee;
