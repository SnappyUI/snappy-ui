"use client";

import React, { useState } from "react";

import SnappyCheck from "@/components/snappy-check";

export default function Page() {
  const variants = [
    "bounce",
    "fade",
    "slide",
    "pulse",
    "flip",
    "scale",
    "rotate",
    "jello",
    "sweep",
    "wave",
  ];

  const [checkedStates, setCheckedStates] = useState<Record<string, boolean>>(
    variants.reduce((acc, variant) => ({ ...acc, [variant]: false }), {}),
  );

  const handleChange = (variant: string, checked: boolean) => {
    setCheckedStates(prev => ({ ...prev, [variant]: checked }));
  };

  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-black text-center">Animated Checkbox Variants</h1>

      <div className="space-y-4">
        {variants.map(variant => (
          <div key={variant} className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
            <SnappyCheck
              label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Animation`}
              variant={variant as any}
              checked={checkedStates[variant]}
              onChange={checked => handleChange(variant, checked)}
              className="flex-grow"
            />
            <div className="text-sm font-medium text-gray-500">
              {checkedStates[variant] ? "Checked" : "Unchecked"}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-md">
        <h2 className="font-semibold mb-2 text-black">How to use:</h2>
        <code className="block bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
          {`<AnimatedCheckbox
  label="My Checkbox"
  variant="bounce"
  checked={isChecked}
  onChange={setIsChecked}
/>`}
        </code>
      </div>
    </div>
  );
}
