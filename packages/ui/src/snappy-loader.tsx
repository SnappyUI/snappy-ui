import React from "react";

import { cn } from "@/lib/cn";

type LoaderProps = {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "accent";
};

const Loader: React.FC<LoaderProps> = ({ size = "medium", color = "primary" }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  const colorClasses = {
    primary: "bg-gradient-to-r from-pink-500 to-gray-800",
    secondary: "bg-gradient-to-r from-blue-500 to-gray-800",
    accent: "bg-gradient-to-r from-green-500 to-gray-800",
  };

  return (
    <div className={cn("relative flex items-center justify-center", sizeClasses[size])}>
      <div
        className={cn(
          "absolute rounded-full animate-spin",
          sizeClasses[size],
          colorClasses[color],
        )}
      />
      <div
        className={cn(
          "absolute bg-gray-900 rounded-full",
          size === "small" ? "w-6 h-6" : size === "medium" ? "w-9 h-9" : "w-12 h-12",
        )}
      />
    </div>
  );
};

export default Loader;
