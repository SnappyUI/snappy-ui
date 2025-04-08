"use client";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

const MotionChevron = motion(ChevronDown);

const Menu: React.FC<{ setActive: (item: string | null) => void; children: React.ReactNode; className?: string }> = ({ setActive, children, className }) => (
  <nav
    onMouseLeave={() => setActive(null)}
    className={cn("rounded-full border border-black bg-fd-secondary text-black shadow-input dark:bg-black dark:border-white/[0.2] dark:text-fd-secondary flex space-x-4 px-8 py-2 fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 justify-between gap-2", className)}
  >
    {children}
  </nav>
);

const MenuItem: React.FC<{ setActive: (item: string) => void; active: string | null; item: string; children?: React.ReactNode; className?: string; href?: string }> = ({ setActive, active, item, children, className, href }) => (
  <div onMouseEnter={() => setActive(item)} className={cn("relative", className)}>
    <motion.p
      transition={{ duration: 0.5 }}
      className="cursor-pointer text-fd-primary hover:text-fd-primary/80 dark:text-white flex items-center gap-1"
    >
      {href
        ? (
            <Link
              href={href}
              className="text-fd-primary hover:text-fd-primary/80 dark:text-white dark:hover:text-white/80 no-underline"
            >
              {item}
            </Link>
          )
        : item}

      {children && (
        <MotionChevron
          size={16}
          animate={{
            rotate: active === item ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="text-fd-primary dark:text-white"
        />
      )}

    </motion.p>
    {active != null && children && (
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          mass: 0.5,
          damping: 11.5,
          stiffness: 100,
          restDelta: 0.001,
          restSpeed: 0.001,
        }}
      >
        {active === item && (
          <div className="absolute  left-1/2 transform -translate-x-1/2 pt-4">
            <motion.div
              transition={{
                type: "spring",
                mass: 0.5,
                damping: 11.5,
                stiffness: 100,
                restDelta: 0.001,
                restSpeed: 0.001,
              }}
              layoutId="active"
              className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
            >
              <motion.div
                layout
                className="w-max h-full p-4"
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        )}

      </motion.div>
    )}
  </div>
);

const SubmenuItem: React.FC<{ children?: React.ReactNode; href: string }> = ({ children, href, ...props }) => (
  <Link
    {...props}
    href={href}
    className="text-fd-primary hover:text-fd-primary/80 dark:text-white dark:hover:text-white/80 no-underline block py-2"
  >
    {children}
  </Link>
);

export {
  Menu,
  MenuItem,
  SubmenuItem,
};
