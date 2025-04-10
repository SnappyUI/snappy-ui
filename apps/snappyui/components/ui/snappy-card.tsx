import React from "react";

import { cn } from "@/lib/cn";

type CardVariant = "dark" | "default" | "primary" | "success" | "warning" | "delete";

type CardProps = {
  title?: string;
  description?: string;
  variant?: CardVariant;
  hoverEffect?: boolean;
  footer?: React.ReactNode;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({
  title,
  description,
  variant = "default",
  hoverEffect = true,
  footer,
  className,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    dark: "bg-gray-800/50 backdrop-blur-md text-gray-100 border-gray-700 hover:bg-gray-700/50 hover:shadow-lg shadow-gray-900/20",
    default: "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:shadow-lg border-gray-200 dark:border-gray-700",
    primary: "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50",
    success: "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/50",
    warning: "bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/50",
    delete: "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/50",
  };

  const titleStyles = {
    dark: "text-gray-100",
    default: "text-gray-900 dark:text-gray-100",
    primary: "text-blue-700 dark:text-blue-300",
    success: "text-green-700 dark:text-green-300",
    warning: "text-yellow-700 dark:text-yellow-300",
    delete: "text-red-700 dark:text-red-300",
  };

  const descriptionStyles = {
    dark: "text-gray-300",
    default: "text-gray-600 dark:text-gray-400",
    primary: "text-blue-600/80 dark:text-blue-300/80",
    success: "text-green-600/80 dark:text-green-300/80",
    warning: "text-yellow-600/80 dark:text-yellow-300/80",
    delete: "text-red-600/80 dark:text-red-300/80",
  };

  return (
    <div
      className={cn(
        "rounded-lg border shadow-sm transition-all duration-300 ease-in-out",
        hoverEffect ? "transform hover:-translate-y-1" : "",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      <div className="p-6">
        {title && (
          <h3
            className={cn(
              "text-2xl font-semibold leading-none tracking-tight",
              titleStyles[variant],
            )}
          >
            {title}
          </h3>
        )}
        {description && (
          <p className={cn("mt-2 text-sm", descriptionStyles[variant])}>
            {description}
          </p>
        )}
        <div className={cn(children ? "mt-4" : "")}>
          {children}
        </div>
      </div>
      {footer && (
        <div className={cn(
          "px-6 py-4 border-t",
          variant === "dark" ? "border-gray-700" : "border-gray-200 dark:border-gray-700",
        )}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
