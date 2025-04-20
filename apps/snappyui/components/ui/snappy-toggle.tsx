"use client";
import React from "react";

import { cn } from "@/lib/utils";

export type ToggleVariant =
  | "simple"
  | "dark"
  | "primary"
  | "minimal"
  | "circular"
  | "labeled"
  | "modern"
  | "indicator"
  | "elegant"
  | "pill"
  | "themed";

type ToggleSize = "sm" | "default" | "lg";

type ToggleProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  variant?: ToggleVariant;
  size?: ToggleSize;
  disabled?: boolean;
  onLabel?: string;
  offLabel?: string;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "checked" | "defaultChecked" | "onChange">;

export default function Toggle({
  checked,
  defaultChecked,
  onChange,
  variant = "simple",
  size = "default",
  disabled = false,
  onLabel,
  offLabel,
  className,
  children,
  ...props
}: ToggleProps) {
  const [isChecked, setIsChecked] = React.useState(defaultChecked || false);

  // Handle controlled/uncontrolled component behavior
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled)
      return;

    const newChecked = event.target.checked;
    if (onChange) {
      onChange(newChecked);
    }

    if (checked === undefined) {
      setIsChecked(newChecked);
    }
  };

  // Use provided checked prop if component is controlled
  const toggleChecked = checked !== undefined ? checked : isChecked;

  // Size styles
  const sizeStyles = {
    sm: "h-5 w-10",
    default: "h-6 w-12",
    lg: "h-8 w-14",
  };

  const dotSizeStyles = {
    sm: "h-4 w-4",
    default: "h-5 w-5",
    lg: "h-6 w-6",
  };

  // Position styles for the dot/circle
  const dotPositionStyles = {
    sm: toggleChecked ? "translate-x-5" : "translate-x-0.5",
    default: toggleChecked ? "translate-x-6" : "translate-x-0.5",
    lg: toggleChecked ? "translate-x-7" : "translate-x-1",
  };

  const renderToggle = () => {
    switch (variant) {
      case "simple":
        return (
          <label className={cn("flex cursor-pointer select-none items-center", disabled && "opacity-50 cursor-not-allowed")}>
            <div className="relative">
              <input
                type="checkbox"
                checked={toggleChecked}
                onChange={handleCheckboxChange}
                disabled={disabled}
                className="sr-only"
                {...props}
              />
              <div className={cn(
                "block rounded-full shadow-inner transition-colors duration-200",
                toggleChecked ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700",
                sizeStyles[size],
              )}
              >
              </div>
              <div className={cn(
                "absolute top-0.5 left-0.5 flex items-center justify-center rounded-full bg-white shadow transition-transform duration-200",
                dotSizeStyles[size],
                toggleChecked ? dotPositionStyles[size] : "",
              )}
              >
              </div>
            </div>
            {children && <span className="ml-3">{children}</span>}
          </label>
        );

      case "dark":
        return (
          <label className={cn("flex cursor-pointer select-none items-center", disabled && "opacity-50 cursor-not-allowed")}>
            <div className="relative">
              <input
                type="checkbox"
                checked={toggleChecked}
                onChange={handleCheckboxChange}
                disabled={disabled}
                className="sr-only"
                {...props}
              />
              <div className={cn(
                "box block rounded-full transition-colors duration-200",
                toggleChecked ? "bg-blue-600" : "bg-gray-800",
                sizeStyles[size],
              )}
              >
              </div>
              <div className={cn(
                "absolute top-0.5 left-0.5 flex items-center justify-center rounded-full bg-white transition-transform duration-200",
                dotSizeStyles[size],
                toggleChecked ? dotPositionStyles[size] : "",
              )}
              >
              </div>
            </div>
            {children && <span className="ml-3">{children}</span>}
          </label>
        );

      case "primary":
        return (
          <label className={cn("flex cursor-pointer select-none items-center", disabled && "opacity-50 cursor-not-allowed")}>
            <div className="relative">
              <input
                type="checkbox"
                checked={toggleChecked}
                onChange={handleCheckboxChange}
                disabled={disabled}
                className="sr-only"
                {...props}
              />
              <div className={cn(
                "block rounded-full border border-blue-200 dark:border-blue-800 shadow-inner transition-colors duration-200",
                toggleChecked ? "bg-blue-50 dark:bg-blue-900/30" : "bg-gray-100 dark:bg-gray-800",
                sizeStyles[size],
              )}
              >
              </div>
              <div className={cn(
                "dot absolute top-0.5 left-0.5 flex items-center justify-center rounded-full bg-blue-600 shadow transition-transform duration-200",
                dotSizeStyles[size],
                toggleChecked ? dotPositionStyles[size] : "",
              )}
              >
              </div>
            </div>
            {children && <span className="ml-3">{children}</span>}
          </label>
        );

      case "minimal":
        return (
          <label className={cn("flex cursor-pointer select-none items-center", disabled && "opacity-50 cursor-not-allowed")}>
            <div className="relative">
              <input
                type="checkbox"
                checked={toggleChecked}
                onChange={handleCheckboxChange}
                disabled={disabled}
                className="sr-only"
                {...props}
              />
              <div className={cn(
                "h-5 rounded-full bg-gray-200 dark:bg-gray-700 shadow-inner",
                toggleChecked ? "bg-gray-300 dark:bg-gray-600" : "",
                size === "sm" ? "w-10" : size === "lg" ? "w-14" : "w-12",
              )}
              >
              </div>
              <div className={cn(
                "dot shadow-switch-1 absolute -top-1 left-0 h-7 w-7 rounded-full bg-white transition-transform duration-200",
                toggleChecked ? (size === "sm" ? "translate-x-3" : size === "lg" ? "translate-x-7" : "translate-x-5") : "",
              )}
              >
              </div>
            </div>
            {children && <span className="ml-3">{children}</span>}
          </label>
        );

      case "circular":
        return (
          <label className={cn("flex cursor-pointer select-none items-center", disabled && "opacity-50 cursor-not-allowed")}>
            <div className="relative">
              <input
                type="checkbox"
                checked={toggleChecked}
                onChange={handleCheckboxChange}
                disabled={disabled}
                className="sr-only"
                {...props}
              />
              <div className={cn(
                "h-5 rounded-full bg-gray-200 dark:bg-gray-700 shadow-inner",
                size === "sm" ? "w-10" : size === "lg" ? "w-14" : "w-12",
              )}
              >
              </div>
              <div className={cn(
                "dot shadow-switch-1 absolute -top-1 left-0 flex h-7 w-7 items-center justify-center rounded-full bg-white transition-transform duration-200",
                toggleChecked ? (size === "sm" ? "translate-x-3" : size === "lg" ? "translate-x-7" : "translate-x-5") : "",
              )}
              >
                <span className={cn(
                  "active h-4 w-4 rounded-full",
                  toggleChecked ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700",
                )}
                >
                </span>
              </div>
            </div>
            {children && <span className="ml-3">{children}</span>}
          </label>
        );

      case "indicator":
        return (
          <label className={cn("flex cursor-pointer select-none items-center", disabled && "opacity-50 cursor-not-allowed")}>
            <div className="relative">
              <input
                type="checkbox"
                checked={toggleChecked}
                onChange={handleCheckboxChange}
                disabled={disabled}
                className="sr-only"
                {...props}
              />
              <div className={cn(
                "block rounded-full bg-gray-200 dark:bg-gray-700",
                sizeStyles[size],
              )}
              >
              </div>
              <div className={cn(
                "dot absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform duration-200",
                size === "sm" ? "h-3 w-3" : size === "lg" ? "h-6 w-6" : "h-4 w-4",
                toggleChecked ? (size === "sm" ? "translate-x-5" : size === "lg" ? "translate-x-6" : "translate-x-5") : "",
              )}
              >
                {toggleChecked
                  ? (
                      <span className="active">
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                            fill="#3B82F6"
                            stroke="#3B82F6"
                            strokeWidth="0.4"
                          >
                          </path>
                        </svg>
                      </span>
                    )
                  : (
                      <span className="inactive text-gray-400">
                        <svg
                          className="h-3 w-3 stroke-current"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          >
                          </path>
                        </svg>
                      </span>
                    )}
              </div>
            </div>
            {children && <span className="ml-3">{children}</span>}
          </label>
        );

      case "elegant":
        return (
          <label className={cn("flex cursor-pointer select-none items-center", disabled && "opacity-50 cursor-not-allowed")}>
            <div className="relative">
              <input
                type="checkbox"
                checked={toggleChecked}
                onChange={handleCheckboxChange}
                disabled={disabled}
                className="sr-only"
                {...props}
              />
              <div className={cn(
                "block rounded-full border border-blue-200 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-800",
                sizeStyles[size],
              )}
              >
              </div>
              <div className={cn(
                "dot bg-blue-600 absolute top-1 left-1 h-4 w-4 rounded-full transition-transform duration-200",
                size === "sm" ? "h-3 w-3" : size === "lg" ? "h-6 w-6" : "h-4 w-4",
                toggleChecked ? (size === "sm" ? "translate-x-5" : size === "lg" ? "translate-x-6" : "translate-x-5") : "",
              )}
              >
              </div>
            </div>
            {children && <span className="ml-3">{children}</span>}
          </label>
        );

      case "pill":
        return (
          <label className={cn("autoSaverSwitch relative inline-flex cursor-pointer select-none items-center", disabled && "opacity-50 cursor-not-allowed")}>
            <input
              type="checkbox"
              checked={toggleChecked}
              onChange={handleCheckboxChange}
              disabled={disabled}
              className="sr-only"
              {...props}
            />
            <span className={cn(
              "slider mr-3 flex items-center rounded-full p-1 duration-200",
              toggleChecked ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600",
              size === "sm" ? "h-5 w-10" : size === "lg" ? "h-8 w-16" : "h-6 w-12",
            )}
            >
              <span className={cn(
                "dot bg-white rounded-full duration-200",
                size === "sm" ? "h-3 w-3" : size === "lg" ? "h-6 w-6" : "h-4 w-4",
                toggleChecked ? (size === "sm" ? "translate-x-5" : size === "lg" ? "translate-x-8" : "translate-x-6") : "",
              )}
              >
              </span>
            </span>
            {(onLabel || offLabel) && (
              <span className="label flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
                {toggleChecked ? onLabel : offLabel}
              </span>
            )}
            {children && <span className="ml-2">{children}</span>}
          </label>
        );

      case "themed":
        return (
          <label className={cn("themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center rounded-md bg-white dark:bg-gray-900 p-1", disabled && "opacity-50 cursor-not-allowed")}>
            <input
              type="checkbox"
              checked={toggleChecked}
              onChange={handleCheckboxChange}
              disabled={disabled}
              className="sr-only"
              {...props}
            />
            <span className={cn(
              "flex items-center space-x-1 rounded py-1 px-2 text-sm font-medium transition-colors duration-200",
              !toggleChecked ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20" : "text-gray-500 dark:text-gray-400",
            )}
            >
              {!toggleChecked && offLabel}
            </span>
            <span className={cn(
              "flex items-center space-x-1 rounded py-1 px-2 text-sm font-medium transition-colors duration-200",
              toggleChecked ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20" : "text-gray-500 dark:text-gray-400",
            )}
            >
              {toggleChecked && onLabel}
            </span>
          </label>
        );

      case "labeled":
        return (
          <label className={cn("themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center", disabled && "opacity-50 cursor-not-allowed")}>
            <input
              type="checkbox"
              checked={toggleChecked}
              onChange={handleCheckboxChange}
              disabled={disabled}
              className="sr-only"
              {...props}
            />
            {offLabel && (
              <span className="label flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
                {offLabel}
              </span>
            )}
            <span className={cn(
              "slider mx-4 flex items-center rounded-full p-1 duration-200",
              toggleChecked ? "bg-gray-800 dark:bg-gray-700" : "bg-gray-300 dark:bg-gray-600",
              size === "sm" ? "h-5 w-10" : size === "lg" ? "h-8 w-16" : "h-7 w-14",
            )}
            >
              <span className={cn(
                "dot h-5 w-5 rounded-full bg-white duration-200",
                size === "sm" ? "h-3 w-3" : size === "lg" ? "h-6 w-6" : "h-5 w-5",
                toggleChecked ? (size === "sm" ? "translate-x-5" : size === "lg" ? "translate-x-8" : "translate-x-7") : "",
              )}
              >
              </span>
            </span>
            {onLabel && (
              <span className="label flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
                {onLabel}
              </span>
            )}
            {children && <span className="ml-2">{children}</span>}
          </label>
        );

      case "modern":
        return (
          <label className={cn("shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white dark:bg-gray-800 p-1", disabled && "opacity-50 cursor-not-allowed")}>
            <input
              type="checkbox"
              checked={toggleChecked}
              onChange={handleCheckboxChange}
              disabled={disabled}
              className="sr-only"
              {...props}
            />
            <div className={cn(
              "flex h-8 items-center justify-between rounded-md p-1",
              size === "sm" ? "w-16" : size === "lg" ? "w-24" : "w-20",
            )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded transition-colors",
                  !toggleChecked ? "bg-blue-600 text-white" : "text-gray-500",
                )}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3128_692)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0C8.36819 0 8.66667 0.298477 8.66667 0.666667V2C8.66667 2.36819 8.36819 2.66667 8 2.66667C7.63181 2.66667 7.33333 2.36819 7.33333 2V0.666667C7.33333 0.298477 7.63181 0 8 0ZM8 5.33333C6.52724 5.33333 5.33333 6.52724 5.33333 8C5.33333 9.47276 6.52724 10.6667 8 10.6667C9.47276 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.47276 5.33333 8 5.33333ZM4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8ZM8.66667 14C8.66667 13.6318 8.36819 13.3333 8 13.3333C7.63181 13.3333 7.33333 13.6318 7.33333 14V15.3333C7.33333 15.7015 7.63181 16 8 16C8.36819 16 8.66667 15.7015 8.66667 15.3333V14ZM2.3411 2.3424C2.60145 2.08205 3.02356 2.08205 3.28391 2.3424L4.23057 3.28906C4.49092 3.54941 4.49092 3.97152 4.23057 4.23187C3.97022 4.49222 3.54811 4.49222 3.28776 4.23187L2.3411 3.28521C2.08075 3.02486 2.08075 2.60275 2.3411 2.3424ZM12.711 11.7682C12.4506 11.5078 12.0285 11.5078 11.7682 11.7682C11.5078 12.0285 11.5078 12.4506 11.7682 12.711L12.7148 13.6577C12.9752 13.918 13.3973 13.918 13.6577 13.6577C13.918 13.3973 13.918 12.9752 13.6577 12.7148L12.711 11.7682ZM0 8C0 7.63181 0.298477 7.33333 0.666667 7.33333H2C2.36819 7.33333 2.66667 7.63181 2.66667 8C2.66667 8.36819 2.36819 8.66667 2 8.66667H0.666667C0.298477 8.66667 0 8.36819 0 8ZM14 7.33333C13.6318 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.6318 8.66667 14 8.66667H15.3333C15.7015 8.66667 16 8.36819 16 8C16 7.63181 15.7015 7.33333 15.3333 7.33333H14ZM4.23057 11.7682C4.49092 12.0285 4.49092 12.4506 4.23057 12.711L3.28391 13.6577C3.02356 13.918 2.60145 13.918 2.3411 13.6577C2.08075 13.3973 2.08075 12.9752 2.3411 12.7148L3.28776 11.7682C3.54811 11.5078 3.97022 11.5078 4.23057 11.7682ZM13.6577 3.28521C13.918 3.02486 13.918 2.60275 13.6577 2.3424C13.3973 2.08205 12.9752 2.08205 12.7148 2.3424L11.7682 3.28906C11.5078 3.54941 11.5078 3.97152 11.7682 4.23187C12.0285 4.49222 12.4506 4.49222 12.711 4.23187L13.6577 3.28521Z"
                      fill="currentColor"
                    >
                    </path>
                  </g>
                  <defs>
                    <clipPath id="clip0_3128_692">
                      <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded transition-colors",
                  toggleChecked ? "bg-blue-600 text-white" : "text-gray-500",
                )}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.0547 1.67334C8.18372 1.90227 8.16622 2.18562 8.01003 2.39693C7.44055 3.16737 7.16651 4.11662 7.23776 5.07203C7.30901 6.02744 7.72081 6.92554 8.39826 7.60299C9.07571 8.28044 9.97381 8.69224 10.9292 8.76349C11.8846 8.83473 12.8339 8.5607 13.6043 7.99122C13.8156 7.83502 14.099 7.81753 14.3279 7.94655C14.5568 8.07556 14.6886 8.32702 14.6644 8.58868C14.5479 9.84957 14.0747 11.0512 13.3002 12.053C12.5256 13.0547 11.4818 13.8152 10.2909 14.2454C9.09992 14.6756 7.81108 14.7577 6.57516 14.4821C5.33925 14.2065 4.20738 13.5846 3.312 12.6892C2.41661 11.7939 1.79475 10.662 1.51917 9.42608C1.24359 8.19017 1.32569 6.90133 1.75588 5.71038C2.18606 4.51942 2.94652 3.47561 3.94828 2.70109C4.95005 1.92656 6.15168 1.45335 7.41257 1.33682C7.67423 1.31264 7.92568 1.44442 8.0547 1.67334ZM6.21151 2.96004C5.6931 3.1476 5.20432 3.41535 4.76384 3.75591C3.96242 4.37553 3.35405 5.21058 3.00991 6.16334C2.66576 7.11611 2.60008 8.14718 2.82054 9.13591C3.04101 10.1246 3.5385 11.0301 4.25481 11.7464C4.97111 12.4627 5.87661 12.9602 6.86534 13.1807C7.85407 13.4012 8.88514 13.3355 9.8379 12.9913C10.7907 12.6472 11.6257 12.0388 12.2453 11.2374C12.5859 10.7969 12.8536 10.3081 13.0412 9.78974C12.3391 10.0437 11.586 10.1495 10.8301 10.0931C9.55619 9.99813 8.35872 9.44907 7.45545 8.5458C6.55218 7.64253 6.00312 6.44506 5.90812 5.17118C5.85174 4.4152 5.9575 3.66212 6.21151 2.96004Z"
                    fill="currentColor"
                  >
                  </path>
                </svg>
              </span>
            </div>
            {children && <span className="ml-2">{children}</span>}
          </label>
        );

      default:
        return (
          <label className={cn("flex cursor-pointer select-none items-center", disabled && "opacity-50 cursor-not-allowed")}>
            <div className="relative">
              <input
                type="checkbox"
                checked={toggleChecked}
                onChange={handleCheckboxChange}
                disabled={disabled}
                className="sr-only"
                {...props}
              />
              <div className={cn(
                "block rounded-full bg-gray-200 dark:bg-gray-700",
                sizeStyles[size],
              )}
              >
              </div>
              <div className={cn(
                "absolute top-1 left-1 rounded-full bg-white transition-transform duration-200",
                size === "sm" ? "h-3 w-3" : size === "lg" ? "h-6 w-6" : "h-4 w-4",
                toggleChecked ? (size === "sm" ? "translate-x-5" : size === "lg" ? "translate-x-6" : "translate-x-5") : "",
              )}
              >
              </div>
            </div>
            {children && <span className="ml-3">{children}</span>}
          </label>
        );
    }
  };

  return (
    <div className={cn("toggle-component", className)}>
      {renderToggle()}
    </div>
  );
}
