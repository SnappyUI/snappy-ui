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
  index?: number;
  total?: number;
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
  index = 0,
  total = 1,
  ...rest
}: ToastProps) {
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => setMounted(false), 200 * (total - index));
    }, duration - 200);
    setMounted(true);
    return () => clearTimeout(timer);
  }, [duration, index, total]);

  const getInitialPosition = () => {
    if (position.includes("top")) {
      return { transform: "translateY(-40px)", opacity: 0 };
    }
    else {
      return { transform: "translateY(40px)", opacity: 0 };
    }
  };

  const getStackStyles = () => {
    if (total <= 1)
      return {};

    const reverseIndex = total - 1 - index;

    if (reverseIndex === 0)
      return {};

    const offset = reverseIndex * 10;
    const scale = 1 - reverseIndex * 0.05;
    const opacity = 1 - reverseIndex * 0.2;
    const translateDirection = position.includes("top") ? offset : -offset;

    return {
      transform: `translateY(${translateDirection}px) scale(${scale})`,
      opacity,
      zIndex: 50 - reverseIndex,
      transition: `transform 300ms cubic-bezier(0.2, 0, 0, 1), opacity 500ms ease-out`,
    };
  };

  const getExitAnimation = () => {
    if (!exiting)
      return {};

    if (position.includes("top")) {
      return {
        transform: "translateY(-40px) scale(0.95)",
        opacity: 0,
        transition: `transform 200ms cubic-bezier(0.4, 0, 1, 1), opacity 200ms ease-in`,
      };
    }
    else {
      return {
        transform: "translateY(40px) scale(0.95)",
        opacity: 0,
        transition: `transform 200ms cubic-bezier(0.4, 0, 1, 1), opacity 200ms ease-in`,
      };
    }
  };

  return (
    <div
      className={cn(
        "fixed z-50 w-[90%] sm:w-[320px] max-w-sm p-4 rounded-lg shadow-xl text-sm",
        positionClassMap[position],
        "bg-white text-black dark:bg-gray-900 dark:text-white",
        className,
      )}
      style={{
        ...(!mounted
          ? getInitialPosition()
          : {
              transform: "translateY(0) scale(1)",
              opacity: 1,
            }),
        transition: "transform 300ms cubic-bezier(0, 0, 0.2, 1), opacity 300ms ease-out",
        ...getStackStyles(),
        ...getExitAnimation(),
      }}
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

    setToasts((prev) => {
      const newToasts = [...prev, { id, props }];
      return newToasts.slice(-3);
    });

    setTimeout(() => {
      hideToast(id);
    }, props.duration || 3000);

    return id;
  };

  return (
    <ToastContext value={{ showToast, hideToast }}>
      {children}
      {toasts.map((toast, index) => (
        <Toast
          key={toast.id}
          {...toast.props}
          index={toasts.length - 1 - index}
          total={toasts.length}
        />
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
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const showToast = () => {
    const id = Date.now();
    const newToast = {
      id,
      props: {
        variant: variant || "with-action",
        title: title || "Event has been created",
        description: description || "Sunday, December 03, 2023 at 9:00 AM",
        action: action || (
          <button
            type="button"
            className="px-4 py-1 bg-white text-black rounded-md hover:bg-gray-100 transition-colors"
          >
            Undo
          </button>
        ),
        duration: duration || 3000,
        position: position || "bottom-right",
      },
    };

    setToasts((prev) => {
      const newToasts = [...prev, newToast];
      return newToasts.slice(-3);
    });

    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, duration || 3000);
  };

  return (
    <div className="relative flex flex-col items-center justify-end p-6 min-h-[50px]">
      {toasts.map((toast, index) => (
        <Toast key={toast.id} {...toast.props} index={index} total={toasts.length} />
      ))}
      <button
        type="button"
        onClick={showToast}
        className="mt-6 px-4 h-9 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        {buttonText}
      </button>
    </div>
  );
}
