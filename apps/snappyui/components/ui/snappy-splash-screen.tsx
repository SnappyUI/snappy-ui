"use client";
import type { ReactNode } from "react";

import { motion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

type SplashScreenProps = {
  logo: ReactNode;
  className?: string;
  variant?: "default" | "fade";
  onAnimationComplete?: () => void;
};

// Default splash variants
const splashVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    scale: 1.2,
    rotate: 360,
    transition: { duration: 1, ease: "easeOut" },
  },
};

// Fade variant
const fadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1.2 },
  },
};

const backgroundVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
  exit: { opacity: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function SplashScreen({
  logo,
  className,
  variant = "default",
  onAnimationComplete,
}: SplashScreenProps) {
  const [animationState] = useState("visible");

  // Select the appropriate variant based on the prop
  const getVariants = () => {
    switch (variant) {
      case "fade":
        return fadeVariants;
      default:
        return splashVariants;
    }
  };

  const handleAnimationComplete = (definition: string) => {
    if (definition === "exit" && onAnimationComplete) {
      onAnimationComplete();
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={animationState}
      exit="exit"
      variants={backgroundVariants}
      className={cn("fixed inset-0 flex items-center justify-center bg-black", className)}
    >
      <motion.div
        variants={getVariants()}
        onAnimationComplete={handleAnimationComplete}
      >
        {logo}
      </motion.div>
    </motion.div>
  );
}
