"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

export type MultiStepContent = {
  title: string;
  description: string;
  skeletonWidths?: number[];
};

type ButtonStyle = {
  backgroundColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  borderColor?: string;
};

type MultiStepComponentProps = {
  steps: MultiStepContent[];
  initialStep?: number;
  backButtonText?: string;
  continueButtonText?: string;
  doneButtonText?: string;
  buttonSize?: "sm" | "md" | "lg";
  backButtonStyle?: ButtonStyle;
  continueButtonStyle?: ButtonStyle;
  onComplete?: () => void;
};

export default function MultiStepComponent({
  steps,
  initialStep = 0,
  backButtonText = "Back",
  continueButtonText = "Continue",
  doneButtonText = "Done",
  buttonSize = "md",
  backButtonStyle = {},
  continueButtonStyle = {},
  onComplete,
}: MultiStepComponentProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    const heights: number[] = [];
    if (containerRef.current) {
      const contentElements = containerRef.current.querySelectorAll(".step-content");
      contentElements.forEach((element) => {
        heights.push(element.scrollHeight);
      });

      if (heights.length > 0) {
        setContentHeight(Math.max(...heights) + 20);
      }
    }
  }, [steps]);

  const isLastStep = currentStep === steps.length - 1;

  const content = useMemo(() => {
    const step = steps[currentStep];
    return (
      <div className="step-content w-full">
        <h2 className="mb-2 font-semibold text-lg">{step.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
        {step.skeletonWidths && step.skeletonWidths.length > 0 && (
          <div className="flex flex-col gap-2 mt-5">
            {step.skeletonWidths.map((width, index) => (
              <div
                key={index}
                className="h-4 rounded bg-neutral-200 animate-pulse dark:bg-neutral-700"
                style={{ width }}
              />
            ))}
          </div>
        )}
      </div>
    );
  }, [currentStep, steps]);

  const handleBack = () => {
    setDirection(-1);
    setCurrentStep(prev => prev - 1);
  };

  const handleContinue = () => {
    if (isLastStep && onComplete) {
      onComplete();
      return;
    }

    setDirection(1);
    setCurrentStep(prev => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  // Animation variants for horizontal slide
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  // Button size styling
  const buttonSizeStyles = {
    sm: "h-7 px-3 text-xs",
    md: "h-9 px-4 text-sm",
    lg: "h-11 px-6 text-base",
  };

  // Default button styles
  const defaultBackStyle = {
    backgroundColor: "transparent",
    textColor: "text-gray-600 dark:text-gray-300",
    hoverTextColor: "hover:text-black dark:hover:text-white",
    borderColor: "border-gray-300 dark:border-gray-700",
    ...backButtonStyle,
  };

  const defaultContinueStyle = {
    backgroundColor: "bg-gradient-to-b from-[#1994FF] to-[#157CFF]",
    textColor: "text-white",
    hoverBackgroundColor: "hover:opacity-90",
    ...continueButtonStyle,
  };

  return (
    <div ref={containerRef} className="w-full max-w-xl mx-auto mt-24 rounded-xl overflow-hidden shadow-md border border-black/10 dark:border-white/10">
      <div className="p-6 relative">
        {/* Content container with fixed height */}
        <div
          style={{ height: contentHeight ? `${contentHeight}px` : "auto" }}
          className="relative overflow-hidden mb-8"
        >
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-full"
            >
              {content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Buttons container with proper spacing */}
        <div className="flex justify-between items-center mt-4">
          <button
            type="button"
            className={`${buttonSizeStyles[buttonSize]} rounded-full font-medium ${defaultBackStyle.textColor} border ${defaultBackStyle.borderColor} ${defaultBackStyle.hoverTextColor} transition disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{
              backgroundColor: defaultBackStyle.backgroundColor,
              color: defaultBackStyle.textColor,
            }}
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            {backButtonText}
          </button>
          <button
            type="button"
            className={`${buttonSizeStyles[buttonSize]} rounded-full font-semibold ${defaultContinueStyle.textColor} ${defaultContinueStyle.backgroundColor} shadow-md ${defaultContinueStyle.hoverBackgroundColor} transition`}
            style={{
              backgroundColor: defaultContinueStyle.backgroundColor !== "bg-gradient-to-b from-[#1994FF] to-[#157CFF]" ? defaultContinueStyle.backgroundColor : undefined,
              color: defaultContinueStyle.textColor,
            }}
            onClick={handleContinue}
          >
            {isLastStep ? doneButtonText : continueButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
