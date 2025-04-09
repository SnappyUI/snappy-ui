"use client";

import { motion } from "motion/react";
import React from "react";

import { cn } from "@/lib/utils";

export type HeaderVariant =
  | "default"
  | "centered"
  | "gradient"
  | "split"
  | "minimal"
  | "hero";

export type HeaderSize =
  | "sm"
  | "default"
  | "lg"
  | "xl";

export type HeaderAlignment =
  | "left"
  | "center"
  | "right";

export type HeaderProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  variant?: HeaderVariant;
  size?: HeaderSize;
  alignment?: HeaderAlignment;
  backgroundImage?: string;
  backgroundOverlay?: boolean;
  overlayOpacity?: number;
  animated?: boolean;
  action?: React.ReactNode;
  badge?: React.ReactNode;
};

export function HeaderContainer({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  variant = "default",
  size = "default",
  alignment = "left",
  backgroundImage,
  backgroundOverlay = true,
  overlayOpacity = 0.5,
  animated = true,
  action,
  badge,
  ...props
}: HeaderProps) {
  // Calculate height based on size
  const sizeStyles = {
    sm: "py-8",
    default: "py-12",
    lg: "py-16",
    xl: "py-24",
  };

  // Calculate text sizes based on header size
  const titleSizes = {
    sm: "text-2xl md:text-3xl",
    default: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl",
  };

  const descriptionSizes = {
    sm: "text-sm md:text-base",
    default: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
    xl: "text-xl md:text-2xl",
  };

  // Alignment styles
  const alignmentStyles = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  // Define variant-specific base styles
  const variantStyles: Record<HeaderVariant, string> = {
    default: "bg-white dark:bg-gray-900",
    centered: "bg-white dark:bg-gray-900",
    gradient: "bg-gradient-to-r from-blue-600 to-indigo-700",
    split: "bg-white dark:bg-gray-900",
    minimal: "bg-transparent",
    hero: "bg-gray-900",
  };

  // Define variant-specific title styles
  const variantTitleStyles: Record<HeaderVariant, string> = {
    default: "text-gray-900 dark:text-white",
    centered: "text-gray-900 dark:text-white",
    gradient: "text-white",
    split: "text-gray-900 dark:text-white",
    minimal: "text-gray-900 dark:text-white",
    hero: "text-white",
  };

  // Define variant-specific description styles
  const variantDescriptionStyles: Record<HeaderVariant, string> = {
    default: "text-gray-600 dark:text-gray-300",
    centered: "text-gray-600 dark:text-gray-300",
    gradient: "text-white/80",
    split: "text-gray-600 dark:text-gray-300",
    minimal: "text-gray-600 dark:text-gray-300",
    hero: "text-gray-300",
  };

  return (
    <header
      className={cn(
        "relative w-full overflow-hidden",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {backgroundOverlay && (
            <div
              className="absolute inset-0 bg-black"
              style={{ opacity: overlayOpacity }}
            />
          )}
        </>
      )}

      {/* Split variant special layout */}
      {variant === "split"
        ? (
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                  {badge && (
                    <div className="mb-4">
                      {badge}
                    </div>
                  )}
                  {animated
                    ? (
                        <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className={cn(
                            titleSizes[size],
                            "font-bold tracking-tight",
                            variantTitleStyles[variant],
                            titleClassName,
                          )}
                        >
                          {title}
                        </motion.h1>
                      )
                    : (
                        <h1
                          className={cn(
                            titleSizes[size],
                            "font-bold tracking-tight",
                            variantTitleStyles[variant],
                            titleClassName,
                          )}
                        >
                          {title}
                        </h1>
                      )}
                  {description && (
                    animated
                      ? (
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={cn(
                              "mt-4",
                              descriptionSizes[size],
                              variantDescriptionStyles[variant],
                              descriptionClassName,
                            )}
                          >
                            {description}
                          </motion.p>
                        )
                      : (
                          <p
                            className={cn(
                              "mt-4",
                              descriptionSizes[size],
                              variantDescriptionStyles[variant],
                              descriptionClassName,
                            )}
                          >
                            {description}
                          </p>
                        )
                  )}
                </div>
                {action && (
                  <div className="w-full md:w-1/2 flex justify-start md:justify-end">
                    {animated
                      ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            {action}
                          </motion.div>
                        )
                      : (
                          action
                        )}
                  </div>
                )}
              </div>
            </div>
          )
        : (
          // All other variants
            <div className="container mx-auto px-4">
              <div className={cn("flex flex-col", alignmentStyles[alignment])}>
                {badge && (
                  <div className={cn("mb-4", alignment === "center" ? "mx-auto" : "")}>
                    {badge}
                  </div>
                )}
                {animated
                  ? (
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={cn(
                          titleSizes[size],
                          "font-bold tracking-tight",
                          variantTitleStyles[variant],
                          titleClassName,
                        )}
                      >
                        {title}
                      </motion.h1>
                    )
                  : (
                      <h1
                        className={cn(
                          titleSizes[size],
                          "font-bold tracking-tight",
                          variantTitleStyles[variant],
                          titleClassName,
                        )}
                      >
                        {title}
                      </h1>
                    )}
                {description && (
                  animated
                    ? (
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className={cn(
                            "mt-4 max-w-3xl",
                            alignment === "center" ? "mx-auto" : "",
                            descriptionSizes[size],
                            variantDescriptionStyles[variant],
                            descriptionClassName,
                          )}
                        >
                          {description}
                        </motion.p>
                      )
                    : (
                        <p
                          className={cn(
                            "mt-4 max-w-3xl",
                            alignment === "center" ? "mx-auto" : "",
                            descriptionSizes[size],
                            variantDescriptionStyles[variant],
                            descriptionClassName,
                          )}
                        >
                          {description}
                        </p>
                      )
                )}
                {action && (
                  <div className={cn("mt-6", alignment === "center" ? "mx-auto" : "")}>
                    {animated
                      ? (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            {action}
                          </motion.div>
                        )
                      : (
                          action
                        )}
                  </div>
                )}
              </div>
            </div>
          )}

      {/* Hero variant special bottom waves effect */}
      {variant === "hero" && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,197.3C840,192,960,160,1080,138.7C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            >
            </path>
          </svg>
        </div>
      )}
    </header>
  );
}

// Example headers for common use cases

export function DefaultHeader() {
  return (
    <HeaderContainer
      title="Welcome to Our Platform"
      description="The most comprehensive solution for all your needs. Build beautiful interfaces with our component library and tools."
      badge={<span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">New Feature</span>}
      action={(
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md">Get Started</button>
          <button className="px-6 py-2 bg-transparent border border-gray-300 rounded-md">Learn More</button>
        </div>
      )}
    />
  );
}

export function CenteredHeader() {
  return (
    <HeaderContainer
      variant="centered"
      alignment="center"
      size="lg"
      title="Build Faster, Build Better"
      description="Our component library helps you create stunning interfaces in minutes instead of hours. Focus on what matters most - your unique application logic."
      action={(
        <button className="px-8 py-3 bg-blue-600 text-white rounded-md text-lg">
          Explore Components
        </button>
      )}
    />
  );
}

export function GradientHeader() {
  return (
    <HeaderContainer
      variant="gradient"
      title="Elevate Your Web Experience"
      description="Modern, accessible, and highly customizable components for your next project."
      badge={<span className="px-3 py-1 text-xs font-medium bg-blue-900 text-white rounded-full">Premium</span>}
      action={(
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-white text-blue-700 rounded-md">Get Started</button>
          <button className="px-6 py-2 bg-transparent border border-white text-white rounded-md">Documentation</button>
        </div>
      )}
    />
  );
}

export function SplitHeader() {
  return (
    <HeaderContainer
      variant="split"
      title="Component-Driven Development"
      description="Build consistent and maintainable applications with our professionally designed components."
      action={(
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Get Started Today</h3>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Subscribe</button>
          </div>
        </div>
      )}
    />
  );
}

export function MinimalHeader() {
  return (
    <HeaderContainer
      variant="minimal"
      size="sm"
      title="Documentation"
      description="Everything you need to know about our API and components."
    />
  );
}

export function HeroHeader() {
  return (
    <HeaderContainer
      variant="hero"
      size="xl"
      alignment="center"
      // backgroundImage="/api/placeholder/1200/600"
      title={(
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-400">
          Next-Generation UI Components
        </span>
      )}
      description="Beautifully designed, expertly crafted components that follow best practices for accessibility, responsiveness, and user experience."
      action={(
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-white text-blue-900 font-medium rounded-md">
            Get Started
          </button>
          <button className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md">
            View Demo
          </button>
        </div>
      )}
    />
  );
}
