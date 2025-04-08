"use client";
import type { ReactNode } from "react";

import { motion } from "motion/react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type AccordionProps = {
  title: string;
  children: ReactNode;
  variant?: "default" | "bordered" | "shadowed" | "minimal" | "glassmorphic" | "gradient" | "elevated";
  isOpen?: boolean;
  className?: string;
};

export function Accordion({
  title,
  children,
  variant = "default",
  isOpen = false,
  className,
}: AccordionProps) {
  const [open, setOpen] = useState(isOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "w-full p-4 rounded-lg transition-all dark:bg-gray-800 dark:text-white",
        {
          "border border-gray-300 dark:border-gray-700": variant === "bordered",
          "shadow-lg bg-white dark:bg-gray-900 dark:shadow-gray-700": variant === "shadowed",
          "bg-gray-100 dark:bg-gray-700": variant === "default",
          "bg-transparent": variant === "minimal",
          "backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-800/30": variant === "glassmorphic",
          "bg-gradient-to-r from-purple-500 to-pink-500 text-white dark:from-purple-700 dark:to-pink-700": variant === "gradient",
          "shadow-xl bg-gray-200 dark:bg-gray-800 dark:shadow-gray-900": variant === "elevated",
        },
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 dark:text-white focus:outline-none"
      >
        <motion.span whileTap={{ scale: 0.95 }}>{title}</motion.span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.2 }}
          className="flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <motion.div className="mt-2 text-gray-700 dark:text-gray-300" initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Example usage:
// <Accordion title="Accordion Title" variant="bordered" className="custom-class">
//   This is the accordion content.
// </Accordion>
