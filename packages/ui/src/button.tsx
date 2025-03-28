"use client";

import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  appName: string;
};

export function Button({ children, className, appName }: ButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => console.warn(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
}
