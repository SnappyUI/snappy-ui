import type { MouseEventHandler } from "react";

import { cn } from "../lib/cn";

type ButtonVariant = "default" | "primary" | "success" | "destructive" | "outline" | "ghost" | "warning" | "gradient";
type ButtonSize = "sm" | "default" | "lg" | "xl";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick: MouseEventHandler;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function SnappyButton({
  children,
  className,
  variant = "default",
  size = "default",
  disabled = false,
  onClick,
  ...props
}: ButtonProps) {
  const variantStyles = {
    default: "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200",
    primary: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500",
    success: "bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500",
    destructive: "bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500",
    outline: "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800",
    warning: "bg-yellow-600 text-white hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-500",
    gradient: "bg-gradient-to-r from-[#000000] to-[#0060ba] text-white rounded-lg transition-all duration-300 ease-in-out hover:brightness-110",
  };

  const sizeStyles = {
    sm: "h-8 px-3 text-xs",
    default: "h-10 px-4 py-2",
    lg: "h-12 px-6 py-3 text-lg",
    xl: "h-14 px-8 py-4 text-xl",
  };

  return (
    <button
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
