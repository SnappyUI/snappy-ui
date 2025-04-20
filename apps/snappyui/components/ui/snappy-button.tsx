"use client";

import type { MouseEventHandler } from "react";

import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "default"
  | "primary"
  | "success"
  | "destructive"
  | "outline"
  | "ghost"
  | "warning"
  | "gradient"
  | "moving-border";

type ButtonSize = "sm" | "default" | "lg" | "xl";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: MouseEventHandler;
  disabled?: boolean;
  borderRadius?: string;
  duration?: number;
  borderColor?: string; // Keep the color prop for backward compatibility
  borderClassName?: string; // Add new prop for custom border class
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  variant = "default",
  size = "default",
  disabled = false,
  onClick,
  borderRadius = "1.75rem",
  duration = 3000,
  borderColor = "#0ea5e9", // Default blue color
  borderClassName, // New prop for Tailwind classes
  ...props
}: ButtonProps) {
  const variantStyles = {
    "default": "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 cursor-pointer",
    "primary": "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 cursor-pointer",
    "success": "bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500 cursor-pointer",
    "destructive": "bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 cursor-pointer",
    "outline": "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 cursor-pointer",
    "ghost": "bg-transparent text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800 cursor-pointer",
    "warning": "bg-yellow-600 text-white hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-500 cursor-pointer",
    "gradient": "bg-gradient-to-r from-[#000000] to-[#0060ba] text-white rounded-lg transition-all duration-300 ease-in-out hover:brightness-110 cursor-pointer",
    "moving-border": "",
  };

  const sizeStyles = {
    sm: "h-8 px-3 text-xs",
    default: "h-10 px-4 py-2",
    lg: "h-12 px-6 py-3 text-lg",
    xl: "h-14 px-8 py-4 text-xl",
  };

  if (variant === "moving-border") {
    return (
      <MovingBorderButton
        borderRadius={borderRadius}
        duration={duration}
        borderColor={borderColor}
        borderClassName={borderClassName}
        {...props}
        onClick={onClick}
      >
        {children}
      </MovingBorderButton>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

function MovingBorderButton({
  borderRadius,
  children,
  duration,
  onClick,
  borderColor = "#0ea5e9",
  borderClassName,
  ...otherProps
}: {
  borderRadius: string;
  children: React.ReactNode;
  duration: number;
  onClick?: MouseEventHandler;
  borderColor?: string;
  borderClassName?: string;
  [key: string]: unknown;
}) {
  return (
    <button
      type="button"
      className="relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl cursor-pointer"
      style={{ borderRadius }}
      onClick={onClick}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder
          duration={duration}
          rx="30%"
          ry="30%"
          borderColor={borderColor}
          borderClassName={borderClassName}
        >
          {/* If borderClassName is provided, use it instead of the radial gradient style */}
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8]",
              borderClassName, // Apply custom class if provided
            )}
            style={!borderClassName
              ? {
                  background: `radial-gradient(${borderColor} 40%, transparent 60%)`,
                }
              : undefined}
          />
        </MovingBorder>
      </div>

      <div
        className="relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl cursor-pointer"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </button>
  );
}

export function MovingBorder({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: unknown;
}) {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      if (length) {
        const pxPerMillisecond = length / duration;
        progress.set((time * pxPerMillisecond) % length);
      }
    }
  });

  const x = useTransform(progress, (val) => {
    if (pathRef.current) {
      return pathRef.current.getPointAtLength(val).x;
    }
    return 0;
  });

  const y = useTransform(progress, (val) => {
    if (pathRef.current) {
      return pathRef.current.getPointAtLength(val).y;
    }
    return 0;
  });

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
