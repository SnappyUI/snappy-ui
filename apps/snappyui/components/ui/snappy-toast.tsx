"use client";

import React, { use, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type ToastProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "simple" | "with-title" | "with-action";
  duration?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  buttonText?: string;
} & React.HTMLAttributes<HTMLDivElement>;

type ToastState = {
  id: number;
  props: ToastProps;
};

const positionClassMap: Record<string, string> = {
  "top-left": "top-6 left-6",
  "top-right": "top-6 right-6",
  "bottom-left": "bottom-6 left-6",
  "bottom-right": "bottom-6 right-6",
};

function Toast({
  title,
  description,
  action,
  variant = "simple",
  duration = 3000,
  position = "bottom-right",
  className,
  ...rest
}: ToastProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(false), duration - 200);
    setMounted(true);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={cn(
        "fixed z-50 w-[90%] sm:w-[320px] max-w-sm p-4 rounded-lg shadow-xl text-sm transition-all duration-500",
        positionClassMap[position],
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        "bg-white text-black dark:bg-gray-900 dark:text-white",
        className,
      )}
      {...rest}
    >
      {variant === "with-title" && (
        <>
          {title && <span className="block font-semibold mb-1">{title}</span>}
          <span className="text-gray-600 dark:text-gray-300">{description}</span>
        </>
      )}

      {variant === "with-action" && (
        <div className="flex justify-between items-center gap-4">
          <div>
            {title && <span className="block font-semibold mb-1">{title}</span>}
            <span className="text-gray-600 dark:text-gray-300">{description}</span>
          </div>
          {action && <span>{action}</span>}
        </div>
      )}

      {variant === "simple" && (
        <span className="text-gray-700 dark:text-gray-300">{description || "This is a toast!"}</span>
      )}
    </div>
  );
}

type ToastContextType = {
  showToast: (props: ToastProps) => number;
  hideToast: (id: number) => void;
};

const ToastContext = React.createContext<ToastContextType>({
  showToast: () => 0,
  hideToast: () => {},
});

export function useToast() {
  return use(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const hideToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const showToast = (props: ToastProps) => {
    const id = Date.now();

    setToasts(prev => [...prev, { id, props }]);

    setTimeout(() => {
      hideToast(id);
    }, props.duration || 3000);

    return id;
  };

  return (
    <ToastContext value={{ showToast, hideToast }}>
      {children}
      {toasts.map(toast => (
        <Toast key={toast.id} {...toast.props} />
      ))}
    </ToastContext>
  );
}

export default function Toaster({
  variant,
  title,
  description,
  action,
  position,
  duration,
  buttonText = "Show Toast",
}: ToastProps) {
  const [activeToast, setActiveToast] = useState<number | null>(null);

  const showToast = () => {
    const id = Date.now();
    setActiveToast(null);

    setTimeout(() => {
      setActiveToast(id);
      setTimeout(() => setActiveToast(null), duration || 3000);
    }, 50);
  };

  return (
    <div className="relative flex flex-col items-center justify-end p-6 min-h-[50px]">
      {activeToast && (
        <Toast
          variant={variant || "simple"}
          title={title || (variant === "with-title" || variant === "with-action" ? "Event Created" : undefined)}
          description={description || (variant === "simple" ? "This is a toast notification" : "Monday, January 3rd at 6:00pm")}
          action={action || (variant === "with-action" ? <button className="text-blue-500 text-sm hover:underline">Undo</button> : undefined)}
          duration={duration || 3000}
          position={position || "bottom-right"}
        />
      )}
      <button
        onClick={showToast}
        className="mt-6 px-4 h-9 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        {buttonText}
      </button>
    </div>
  );
}
