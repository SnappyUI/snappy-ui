"use client";
import type { ReactNode } from "react";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type CarouselProps = {
  children: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  shadow?: "none" | "sm" | "md" | "lg";
  buttonStyle?: "default" | "minimal" | "outline";
  indicatorStyle?: "default" | "dots" | "numbers";
  direction?: "horizontal" | "vertical";
};

export default function Carousel({
  children,
  autoPlay = false,
  interval = 3000,
  loop = true,
  rounded = "md",
  shadow = "md",
  buttonStyle = "default",
  indicatorStyle = "dots",
  direction = "horizontal",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (loop)
        return (prev + 1) % children.length;
      return prev < children.length - 1 ? prev + 1 : prev;
    });
  }, [children.length, loop]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (loop)
        return (prev - 1 + children.length) % children.length;
      return prev > 0 ? prev - 1 : prev;
    });
  };

  useEffect(() => {
    if (!autoPlay)
      return;
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, children.length, loop, currentIndex, nextSlide]);

  // Base Styles
  let containerClasses = "relative w-full overflow-hidden";
  const slideClasses = "w-full overflow-hidden";
  let buttonClasses = "absolute z-10 p-2 rounded-full";

  containerClasses = cn(containerClasses, "bg-white dark:bg-gray-900 text-black dark:text-white");
  buttonClasses = cn(buttonClasses, "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600");

  // Rounded Styles
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };
  containerClasses = cn(containerClasses, roundedClasses[rounded]);

  // Shadow Styles
  const shadowClasses = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };
  containerClasses = cn(containerClasses, shadowClasses[shadow]);

  // Button Styles
  switch (buttonStyle) {
    case "minimal":
      buttonClasses = cn(buttonClasses, "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700");
      break;
    case "outline":
      buttonClasses = cn(buttonClasses, "border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800");
      break;
    default: // "default"
      buttonClasses = cn(buttonClasses, "shadow-md");
      break;
  }

  // Indicator Styles
  let indicatorClasses = "absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2";
  const indicatorItemClasses = "h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-600";

  // Directional Classes and logic
  const transformDirection = direction === "horizontal" ? { opacity: 0, x: 50 } : { opacity: 0, y: 50 };
  const exitDirection = direction === "horizontal" ? { opacity: 0, x: -50 } : { opacity: 0, y: -50 };
  let navButtonContainerClasses = "relative flex w-full items-center justify-center";
  let prevButtonClass = `${buttonClasses} left-2`;
  let nextButtonClass = `${buttonClasses} right-2`;

  if (direction === "vertical") {
    navButtonContainerClasses = "relative flex h-full w-full items-center justify-between";
    indicatorClasses = "absolute right-2 top-1/2 -translate-y-1/2 flex flex-col space-y-2";
    prevButtonClass = `${buttonClasses} top-2`;
    nextButtonClass = `${buttonClasses} bottom-2`;
  }

  return (
    <div className={containerClasses}>
      <div className={navButtonContainerClasses}>
        <button
          onClick={prevSlide}
          type="button"
          className={prevButtonClass}
          aria-label="Previous Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black dark:text-white">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
          </svg>
        </button>

        <div className={slideClasses}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={transformDirection}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={exitDirection}
              transition={{ duration: 0.4 }}
            >
              {children[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <button onClick={nextSlide} type="button" className={nextButtonClass} aria-label="Next Slide">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black dark:text-white">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      {indicatorStyle === "dots" && (
        <div className={indicatorClasses}>
          {children.map((_, i) => (
            <div
              key={i}
              className={cn(indicatorItemClasses, i === currentIndex && "bg-gray-900 dark:bg-gray-100")}
            />
          ))}
        </div>
      )}

    </div>
  );
}
