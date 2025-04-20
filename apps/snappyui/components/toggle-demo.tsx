"use client";

import React, { useState } from "react";

import type { ToggleVariant } from "@/components/ui/snappy-toggle";

import Toggle from "@/components/ui/snappy-toggle";

type ToggleExampleProps = {
  variant?: ToggleVariant;
  size?: "sm" | "default" | "lg";
  defaultChecked?: boolean;
  disabled?: boolean;
  onLabel?: string;
  offLabel?: string;
  children?: React.ReactNode;
};

export function ToggleExample({
  variant = "simple",
  size = "default",
  defaultChecked = false,
  disabled = false,
  onLabel,
  offLabel,
  children,
}: ToggleExampleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <Toggle
      variant={variant}
      size={size}
      checked={checked}
      onChange={setChecked}
      disabled={disabled}
      onLabel={onLabel}
      offLabel={offLabel}
    >
      {children}
    </Toggle>
  );
}

// A component that shows all sizes
export function ToggleSizesExample({ variant = "simple" }) {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <ToggleExample variant={variant as ToggleVariant} size="sm" />
        <span className="text-xs text-gray-500">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ToggleExample variant={variant as ToggleVariant} size="default" />
        <span className="text-xs text-gray-500">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ToggleExample variant={variant as ToggleVariant} size="lg" />
        <span className="text-xs text-gray-500">Large</span>
      </div>
    </div>
  );
}

// A component that shows with and without labels
export function ToggleWithLabelsExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <ToggleExample
          variant="labeled"
          onLabel="ON"
          offLabel="OFF"
        />
        <span className="text-sm text-gray-500">Labeled</span>
      </div>
      <div className="flex items-center gap-2">
        <ToggleExample
          variant="pill"
          onLabel="Active"
          offLabel="Inactive"
        />
        <span className="text-sm text-gray-500">Pill</span>
      </div>
      <div className="flex items-center gap-2">
        <ToggleExample
          variant="themed"
          onLabel="Dark"
          offLabel="Light"
        />
        <span className="text-sm text-gray-500">Themed</span>
      </div>
    </div>
  );
}

// A component that shows disabled states
export function ToggleDisabledExample() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center gap-2">
        <ToggleExample disabled defaultChecked={true} />
        <span className="text-xs text-gray-500">Disabled (On)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ToggleExample disabled defaultChecked={false} />
        <span className="text-xs text-gray-500">Disabled (Off)</span>
      </div>
    </div>
  );
}
