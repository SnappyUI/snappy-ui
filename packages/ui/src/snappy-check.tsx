"use client";

import React, { useState } from "react";

import { cn } from "./utils/cn";

// Types for our checkbox component
type CheckboxVariant =
  | "bounce"
  | "fade"
  | "slide"
  | "pulse"
  | "flip"
  | "scale"
  | "rotate"
  | "jello"
  | "sweep"
  | "wave";

type CheckboxProps = {
  label?: string;
  variant?: CheckboxVariant;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
};

const SnappyCheck: React.FC<CheckboxProps> = ({
  label,
  variant = "bounce",
  checked = false,
  onChange,
  disabled = false,
  className = "",
  id,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled)
      return;

    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  // Base styles for all checkboxes
  const baseStyles = "relative w-6 h-6 border rounded transition-all duration-200 cursor-pointer";

  // Common container styles
  const containerStyles = "inline-flex items-center space-x-2 cursor-pointer";

  // Define styles for each variant
  const variantStyles: Record<CheckboxVariant, string> = {
    bounce: "group-hover:scale-110 group-active:scale-95",
    fade: "group-hover:opacity-80 group-active:opacity-100",
    slide: "group-hover:translate-x-1 group-active:-translate-x-1",
    pulse: "group-hover:shadow-md group-active:shadow-sm",
    flip: "group-hover:rotate-y-12 group-active:rotate-y-0",
    scale: "group-hover:scale-110 group-active:scale-90",
    rotate: "group-hover:rotate-12 group-active:-rotate-12",
    jello: "group-hover:skew-x-2 group-active:-skew-x-2",
    sweep: "group-hover:translate-x-1 group-hover:translate-y-1 group-active:-translate-x-1 group-active:-translate-y-1",
    wave: "group-hover:translate-y-1 group-active:-translate-y-1",
  };

  // Define checkbox mark styles for each variant
  const checkmarkStyles: Record<CheckboxVariant, string> = {
    bounce: "scale-0 group-data-[checked=true]:scale-100 group-data-[checked=true]:transition-transform group-data-[checked=true]:duration-300 group-data-[checked=true]:ease-bounce",
    fade: "opacity-0 group-data-[checked=true]:opacity-100 group-data-[checked=true]:transition-opacity group-data-[checked=true]:duration-300",
    slide: "translate-x-2 opacity-0 group-data-[checked=true]:translate-x-0 group-data-[checked=true]:opacity-100 group-data-[checked=true]:transition-all group-data-[checked=true]:duration-300",
    pulse: "scale-0 opacity-0 group-data-[checked=true]:scale-100 group-data-[checked=true]:opacity-100 group-data-[checked=true]:transition-all group-data-[checked=true]:duration-300",
    flip: "rotate-90 scale-0 group-data-[checked=true]:rotate-0 group-data-[checked=true]:scale-100 group-data-[checked=true]:transition-all group-data-[checked=true]:duration-300",
    scale: "scale-0 group-data-[checked=true]:scale-100 group-data-[checked=true]:transition-transform group-data-[checked=true]:duration-300",
    rotate: "rotate-180 opacity-0 group-data-[checked=true]:rotate-0 group-data-[checked=true]:opacity-100 group-data-[checked=true]:transition-all group-data-[checked=true]:duration-300",
    jello: "skew-x-12 opacity-0 group-data-[checked=true]:skew-x-0 group-data-[checked=true]:opacity-100 group-data-[checked=true]:transition-all group-data-[checked=true]:duration-300",
    sweep: "translate-x-2 translate-y-2 opacity-0 group-data-[checked=true]:translate-x-0 group-data-[checked=true]:translate-y-0 group-data-[checked=true]:opacity-100 group-data-[checked=true]:transition-all group-data-[checked=true]:duration-300",
    wave: "translate-y-2 opacity-0 group-data-[checked=true]:translate-y-0 group-data-[checked=true]:opacity-100 group-data-[checked=true]:transition-all group-data-[checked=true]:duration-300",
  };

  // Apply different background colors based on variant
  const backgroundStyles: Record<CheckboxVariant, string> = {
    bounce: "bg-blue-500",
    fade: "bg-green-500",
    slide: "bg-purple-500",
    pulse: "bg-red-500",
    flip: "bg-yellow-500",
    scale: "bg-indigo-500",
    rotate: "bg-pink-500",
    jello: "bg-teal-500",
    sweep: "bg-orange-500",
    wave: "bg-cyan-500",
  };

  return (
    <label
      className={cn(
        containerStyles,
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      htmlFor={id || `checkbox-${variant}`}
    >
      <div
        className={cn("group")}
        data-checked={isChecked}
      >
        <div className={cn(
          baseStyles,
          variantStyles[variant],
          isChecked ? backgroundStyles[variant] : "bg-white",
        )}
        >
          <input
            type="checkbox"
            id={id || `checkbox-${variant}`}
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
            className="absolute w-0 h-0 opacity-0"
          />
          <svg
            className={cn(
              "absolute inset-0 w-full h-full p-1 text-white pointer-events-none",
              checkmarkStyles[variant],
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>
      {label && <span className={cn("select-none", disabled && "cursor-not-allowed")}>{label}</span>}
    </label>
  );
};

export default SnappyCheck;
