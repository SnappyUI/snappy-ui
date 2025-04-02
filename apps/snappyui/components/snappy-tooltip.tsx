"use client";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "../lib/cn";

// Enhanced configuration options
type TooltipOptions = {
  variant?: "default" | "info" | "warning" | "error" | "success";
  size?: "sm" | "md" | "lg";

  hasArrow?: boolean;
};

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;
Tooltip.displayName = "Tooltip";

const TooltipTrigger = TooltipPrimitive.Trigger;

function TooltipArrow({ ref, variant = "default", className, ...props }: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow> & { variant?: string } & { ref?: React.RefObject<React.ElementRef<typeof TooltipPrimitive.Arrow> | null> }) {
  const variantArrowColors = {
    default: "fill-gray-500",
    info: "fill-blue-500",
    warning: "fill-amber-500",
    error: "fill-red-500",
    success: "fill-green-500",
  };
  return (
    <TooltipPrimitive.Arrow
      ref={ref}
      className={cn(
        variantArrowColors[variant as keyof typeof variantArrowColors],
        className,
      )}
      width={10}
      height={5}
      {...props}
    />
  );
}
TooltipArrow.displayName = "TooltipArrow";

function TooltipContent({ ref, className, sideOffset = 4, variant = "default", size = "md", hasArrow = false, children, ...props }: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & TooltipOptions & { ref?: React.RefObject<React.ElementRef<typeof TooltipPrimitive.Content> | null> }) {
  // Variant styles
  const variantStyles = {
    default: "bg-primary text-primary-foreground border-1 border-gray-200",
    info: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-500 text-white",
    success: "bg-green-500 text-white",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50 overflow-hidden rounded-md shadow-md",
          variantStyles[variant],
          sizeStyles[size],
          "origin-[--radix-tooltip-content-transform-origin]",
          className,
        )}
        {...props}
      >
        {children}
        {hasArrow && <TooltipArrow variant={variant} />}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// Add a ready-to-use component with all options preconfigured
function CustomTooltip({ children, content, variant, size, hasArrow, delayDuration = 300, triggerAsChild = false, ...props }: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> &
  TooltipOptions & {
    content: React.ReactNode;
    delayDuration?: number;
    triggerAsChild?: boolean;
  } & { ref?: React.RefObject<HTMLDivElement | null> }) {
  return (
    <Tooltip delayDuration={delayDuration} {...props}>
      <TooltipTrigger asChild={triggerAsChild}>
        {children}
      </TooltipTrigger>
      <TooltipContent
        variant={variant}
        size={size}
        hasArrow={hasArrow}
      >
        {content}
      </TooltipContent>
    </Tooltip>
  );
}
CustomTooltip.displayName = "CustomTooltip";

export {
  CustomTooltip,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
};
