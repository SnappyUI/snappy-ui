"use client";

import type { PanInfo } from "motion/react";

import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

type CarouselProps = {
  items: {
    id: string | number;
    content: React.ReactNode;
  }[];
  variant?: "vertical" | "horizontal";
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
};

/**
 * AnimatedCarousel - A reusable animated carousel component with vertical and horizontal variants
 *
 * @param items - Array of items to display in the carousel
 * @param variant - 'horizontal' (default) or 'vertical' scrolling
 * @param autoPlay - Whether to auto-play the carousel (default: true)
 * @param interval - Auto-play interval in milliseconds (default: 5000)
 * @param showArrows - Whether to show navigation arrows (default: true)
 * @param showDots - Whether to show navigation dots (default: true)
 * @param className - Optional additional classes
 */
const AnimatedCarousel: React.FC<CarouselProps> = ({
  items,
  variant = "horizontal",
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isHorizontal = variant === "horizontal";

  // Reset the timer when current index changes
  useEffect(() => {
    if (autoPlay) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setDirection(1);
        setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
      }, interval);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, autoPlay, interval, items.length]);

  // Handle navigation
  const handleNext = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDirection(1);
    setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDirection(-1);
    setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
  };

  const handleDotClick = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (isHorizontal) {
      if (info.offset.x > threshold) {
        handlePrev();
      }
      else if (info.offset.x < -threshold) {
        handleNext();
      }
    }
    else {
      if (info.offset.y > threshold) {
        handlePrev();
      }
      else if (info.offset.y < -threshold) {
        handleNext();
      }
    }
  };

  // Animation variants - fixed to ensure correct direction for both variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: isHorizontal ? direction * 500 : 0,
      y: !isHorizontal ? direction * 500 : 0,
      opacity: 0,
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: (direction: number) => ({
      x: isHorizontal ? -direction * 500 : 0,
      y: !isHorizontal ? -direction * 500 : 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    }),
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ height: isHorizontal ? "100%" : "24rem" }} // Fixed height for vertical, responsive for horizontal
      onMouseEnter={() => {
        if (timeoutRef.current && autoPlay) {
          clearTimeout(timeoutRef.current);
        }
      }}
      onMouseLeave={() => {
        if (autoPlay) {
          timeoutRef.current = setTimeout(handleNext, interval);
        }
      }}
    >
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag={isHorizontal ? "x" : "y"}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full"
          >
            {items[currentIndex]?.content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Properly positioned for each variant */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className={`absolute z-10 p-2 bg-white bg-opacity-50 rounded-full shadow-md text-gray-800 hover:bg-opacity-75 transition-all focus:outline-none ${isHorizontal
              ? "top-1/2 left-4 transform -translate-y-1/2"
              : "left-1/2 top-4 transform -translate-x-1/2"
            }`}
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${!isHorizontal && "transform rotate-90"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className={`absolute z-10 p-2 bg-white bg-opacity-50 rounded-full shadow-md text-gray-800 hover:bg-opacity-75 transition-all focus:outline-none ${isHorizontal
              ? "top-1/2 right-4 transform -translate-y-1/2"
              : "left-1/2 bottom-4 transform -translate-x-1/2"
            }`}
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${!isHorizontal && "transform rotate-90"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Navigation Dots - Properly positioned for each variant */}
      {showDots && items.length > 1 && (
        <div className={`absolute z-10 ${isHorizontal
          ? "bottom-4 left-0 right-0 flex justify-center"
          : "right-4 top-0 bottom-0 flex flex-col items-center justify-center"
        }`}
        >
          <div className={`flex ${isHorizontal ? "flex-row space-x-2" : "flex-col space-y-2"}`}>
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-blue-500 transform scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedCarousel;
