import React from "react";

import { cn } from "@/lib/cn";

type LoaderProps = {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "accent";
};

const sizeClasses: Record<NonNullable<LoaderProps["size"]>, string> = {
  small: "w-8 h-8",
  medium: "w-12 h-12",
  large: "w-16 h-16",
};

const innerSizeClasses: Record<NonNullable<LoaderProps["size"]>, string> = {
  small: "w-6 h-6",
  medium: "w-9 h-9",
  large: "w-12 h-12",
};

const colorClasses: Record<NonNullable<LoaderProps["color"]>, string> = {
  primary: "bg-gradient-to-r from-pink-500 to-gray-800",
  secondary: "bg-gradient-to-r from-blue-500 to-gray-800",
  accent: "bg-gradient-to-r from-green-500 to-gray-800",
};

export const Loader: React.FC<LoaderProps> = ({ size = "medium", color = "primary" }) => (
  <div className={cn("relative flex items-center justify-center", sizeClasses[size])}>
    <div
      className={cn("absolute rounded-full animate-spin", sizeClasses[size], colorClasses[color])}
    />
    <div className={cn("absolute bg-gray-900 rounded-full", innerSizeClasses[size])} />
  </div>
);

// DotLoader with bouncing dots
export const DotLoader: React.FC<LoaderProps> = ({ size = "medium", color = "primary" }) => {
  const dotSize = {
    small: "w-2 h-2",
    medium: "w-3 h-3",
    large: "w-4 h-4",
  };

  return (
    <div className="flex space-x-2">
      <div
        className={cn("rounded-full animate-bounce", dotSize[size], colorClasses[color])}
        style={{ animationDelay: "0ms" }}
      />
      <div
        className={cn("rounded-full animate-bounce", dotSize[size], colorClasses[color])}
        style={{ animationDelay: "150ms" }}
      />
      <div
        className={cn("rounded-full animate-bounce", dotSize[size], colorClasses[color])}
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
};

type BarLoaderProps = LoaderProps & {
  progress?: number; // progress percentage from 0 to 100
};

// BarLoader with a progressing bar that accepts a progress prop
export const BarLoader: React.FC<BarLoaderProps> = ({
  size = "medium",
  color = "primary",
  progress = 50,
}) => {
  const barHeight = {
    small: "h-1",
    medium: "h-2",
    large: "h-3",
  };

  return (
    <div className="w-full bg-gray-300 rounded overflow-hidden">
      <div
        className={cn("rounded bg-gradient-to-r animate-[progress_2s_infinite]", barHeight[size], colorClasses[color])}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// Helper functions have been moved to snappy-loader-helpers.ts
