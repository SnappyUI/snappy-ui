"use client";

import type { VariantProps } from "class-variance-authority";

import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const dialogVariants = cva(
  "fixed z-50 p-6 rounded-lg shadow-lg max-w-md w-full",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",
        dark: "bg-gray-800 text-gray-100",
        light: "bg-white text-gray-900",
      },
      position: {
        center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        top: "top-24 left-1/2 -translate-x-1/2",
      },
    },
    defaultVariants: {
      variant: "default",
      position: "center",
    },
  },
);

export type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  showCloseButton?: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof dialogVariants>;

function Dialog({ ref, className, variant, position, isOpen, onClose, title, showCloseButton = true, children, ...props }: DialogProps & { ref?: React.RefObject<HTMLDivElement | null> }) {
  // Close dialog when Escape key is pressed
  React.useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  // Prevent body scrolling when dialog is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen)
    return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        ref={ref}
        className={cn(dialogVariants({ variant, position }), className)}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        <div className="flex justify-between items-center mb-4">
          {title && (
            <h2 className="text-lg font-semibold">{title}</h2>
          )}
          {showCloseButton && (
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
}

Dialog.displayName = "Dialog";

export { Dialog };

// For form-like dialog components
export type DialogFormProps = {
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
  className?: string;
};

export function DialogForm({ onSubmit, children, className }: DialogFormProps) {
  return (
    <form onSubmit={onSubmit} className={cn("space-y-4", className)}>
      {children}
    </form>
  );
}

// Dialog content
export function DialogContent({ ref, className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={ref}
      className={cn("text-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
}
DialogContent.displayName = "DialogContent";

// Dialog actions
export function DialogActions({ ref, className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={ref}
      className={cn("flex space-x-2 justify-end mt-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}
DialogActions.displayName = "DialogActions";

// Field container
export function DialogField({ ref, className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={ref}
      className={cn("space-y-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}
DialogField.displayName = "DialogField";

// Label component
export type DialogLabelProps = {
  htmlFor: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

export function DialogLabel({ ref, className, children, ...props }: DialogLabelProps & { ref?: React.RefObject<HTMLLabelElement | null> }) {
  return (
    <label
      ref={ref}
      className={cn("block text-sm font-medium", className)}
      {...props}
    >
      {children}
    </label>
  );
}
DialogLabel.displayName = "DialogLabel";

// Input component
export function DialogInput({ ref, className, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { ref?: React.RefObject<HTMLInputElement | null> }) {
  return (
    <input
      ref={ref}
      className={cn(
        "block w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md",
        "bg-white dark:bg-gray-700",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
        className,
      )}
      {...props}
    />
  );
}
DialogInput.displayName = "DialogInput";

// Dialog buttons
export type DialogButtonProps = {
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function DialogButton({ ref, className, variant = "secondary", children, ...props }: DialogButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) {
  return (
    <button
      ref={ref}
      className={cn(
        "px-4 py-2 rounded-md font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
        variant === "primary" && "bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-500",
        variant === "secondary" && "bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-blue-500",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

DialogButton.displayName = "DialogButton";
