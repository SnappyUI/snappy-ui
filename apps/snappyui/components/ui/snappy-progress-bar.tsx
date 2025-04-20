import { Check } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

// Basic Progress Bar
type ProgressBarProps = {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
  showValue?: boolean;
  label?: string;
  timeLeft?: string | number;
  isSlider?: boolean;
};

export function ProgressBar({
  value,
  max = 100,
  className = "",
  showValue = false,
  label = "",
  timeLeft,
  isSlider = false,
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="space-y-2 w-full">
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{label}</span>
          {timeLeft && <span className="text-sm text-gray-500 dark:text-gray-400">{timeLeft}</span>}
        </div>
      )}
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-blue-100 dark:bg-blue-950">
        <div
          className={cn(
            "h-full rounded-full bg-blue-600 transition-all",
            className,
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {(showValue || isSlider) && (
        <div className="flex justify-end">
          <span className="text-sm text-gray-500 dark:text-gray-400">{isSlider ? `${percentage.toFixed(0)}%` : `${value}/${max}`}</span>
        </div>
      )}
    </div>
  );
}

// Circular Progress
type CircularProgressProps = {
  value: number;
  max?: number;
  className?: string;
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
  labelClassName?: string;
};

export function CircularProgress({
  value,
  max = 100,
  className = "",
  size = 120,
  strokeWidth = 8,
  showLabel = true,
  labelClassName = "",
}: CircularProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          className="stroke-blue-100 dark:stroke-blue-950"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke="currentColor"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="dark:stroke-white stroke-black  transition-all"
        />
      </svg>
      {showLabel && (
        <div className={cn("absolute inset-0 flex items-center justify-center text-center", labelClassName)}>
          <span className="text-lg font-medium">
            {value}
            {" "}
            of
            {max}
          </span>
        </div>
      )}
    </div>
  );
}

// Stepped Progress
type StepProgressProps = {
  currentStep: number;
  steps: string[];
  className?: string;
};

export function StepProgress({
  currentStep,
  steps,
  className = "",
}: StepProgressProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex w-full">
        {steps.map((step, index) => (
          <div
            key={`step-${step}-${index}`}
            className={cn(
              "flex-1 py-3 text-center font-medium rounded-md transition-colors",
              index < currentStep
                ? "bg-blue-600 text-white"
                : index === currentStep
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400",
            )}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}

// Step Indicator
type StepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
  className?: string;
};

export function StepIndicator({
  currentStep,
  totalSteps,
  className = "",
}: StepIndicatorProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={`step-indicator-${index}`}
          className={cn(
            "transition-colors",
            index < currentStep
              ? "bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center"
              : index === currentStep
                ? "bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center"
                : "bg-blue-100 dark:bg-blue-950 w-8 h-8 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400",
          )}
        >
          {index < currentStep ? <Check size={16} /> : index + 1}
        </div>
      ))}
    </div>
  );
}

// Dot Indicator
type DotIndicatorProps = {
  currentStep: number;
  totalSteps: number;
  className?: string;
};

export function DotIndicator({
  currentStep,
  totalSteps,
  className = "",
}: DotIndicatorProps) {
  return (
    <div className={cn("flex space-x-2", className)}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={`dot-indicator-${index}`}
          className={cn(
            "w-2 h-2 rounded-full transition-colors",
            index < currentStep
              ? "bg-blue-600"
              : "bg-blue-100 dark:bg-blue-950",
          )}
        />
      ))}
    </div>
  );
}

// Demo component showing all progress indicators
export default function ProgressDemo() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      <div className="flex-1 p-6 bg-white dark:bg-gray-900 rounded-lg shadow space-y-8">
        <h2 className="text-xl font-bold">Basic Progress Bars</h2>

        <div className="space-y-2">
          <div>Simple Progress</div>
          <ProgressBar value={60} />
        </div>

        <div className="space-y-2">
          <div>Update in progress..</div>
          <ProgressBar value={20} timeLeft="5s left" />
        </div>

        <div className="space-y-2">
          <div>With Slider</div>
          <ProgressBar value={50} isSlider={true} />
        </div>

        <div className="space-y-2">
          <div>Progress with Label</div>
          <ProgressBar value={50} showValue={true} />
        </div>
      </div>

      <div className="flex-1 p-6 bg-white dark:bg-gray-900 rounded-lg shadow space-y-8">
        <h2 className="text-xl font-bold">Advanced Indicators</h2>

        <div className="flex justify-center">
          <CircularProgress value={3} max={6} />
        </div>

        <div className="space-y-6">
          <StepProgress
            currentStep={2}
            steps={["Step 1", "Step 2", "Step 3"]}
          />

          <StepIndicator currentStep={2} totalSteps={3} />

          <DotIndicator currentStep={5} totalSteps={10} />
        </div>
      </div>
    </div>
  );
}
