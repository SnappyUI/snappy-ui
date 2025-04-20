"use client";

import { ThumbsUp } from "lucide-react";
import React, { useState } from "react";

import Rating from "@/components/ui/snappy-starrating";

type StarRatingExampleProps = {
  size?: "sm" | "default" | "lg";
  defaultValue?: number;
  readOnly?: boolean;
  precision?: 1 | 0.5;
  emptyIcon?: React.ReactNode;
  filledIcon?: React.ReactNode;
  emptyColor?: string;
  filledColor?: string;
  hoverColor?: string;
  animationStyle?: "pulse" | "bounce" | "wobble" | "sparkle" | "flip" | "pop" | "none";
  count?: number;
  className?: string;
};

export function StarRatingExample({
  size = "default",
  defaultValue = 3,
  readOnly = false,
  precision = 1,
  emptyIcon,
  filledIcon,
  emptyColor,
  filledColor,
  hoverColor,
  animationStyle = "none",
  count = 5,
  className,
}: StarRatingExampleProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <Rating
      value={value}
      onChange={setValue}
      size={size}
      readOnly={readOnly}
      precision={precision}
      emptyIcon={emptyIcon}
      filledIcon={filledIcon}
      emptyColor={emptyColor}
      filledColor={filledColor}
      hoverColor={hoverColor}
      animationStyle={animationStyle}
      count={count}
      className={className}
    />
  );
}

// A component that shows all sizes
export function StarRatingSizesExample() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <StarRatingExample
          size="sm"
          filledColor="#fbbf24"
          emptyColor="#d1d5db"
        />
        <span className="text-xs text-gray-500">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StarRatingExample
          size="default"
          filledColor="#fbbf24"
          emptyColor="#d1d5db"
        />
        <span className="text-xs text-gray-500">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StarRatingExample
          size="lg"
          filledColor="#fbbf24"
          emptyColor="#d1d5db"
        />
        <span className="text-xs text-gray-500">Large</span>
      </div>
    </div>
  );
}

// Individual animation examples
export function PulseAnimationExample() {
  return (
    <div className="flex flex-col items-center">
      <StarRatingExample
        animationStyle="pulse"
        filledColor="#fbbf24"
        emptyColor="#d1d5db"
      />
      <span className="text-xs text-gray-500 mt-2">Click a star to see animation</span>
    </div>
  );
}

export function BounceAnimationExample() {
  return (
    <div className="flex flex-col items-center">
      <StarRatingExample
        animationStyle="bounce"
        filledColor="#fbbf24"
        emptyColor="#d1d5db"
      />
      <span className="text-xs text-gray-500 mt-2">Click a star to see animation</span>
    </div>
  );
}

export function WobbleAnimationExample() {
  return (
    <div className="flex flex-col items-center">
      <StarRatingExample
        animationStyle="wobble"
        filledColor="#fbbf24"
        emptyColor="#d1d5db"
      />
      <span className="text-xs text-gray-500 mt-2">Click a star to see animation</span>
    </div>
  );
}

export function SparkleAnimationExample() {
  return (
    <div className="flex flex-col items-center">
      <StarRatingExample
        animationStyle="sparkle"
        filledColor="#fbbf24"
        emptyColor="#d1d5db"
      />
      <span className="text-xs text-gray-500 mt-2">Click a star to see animation</span>
    </div>
  );
}

export function FlipAnimationExample() {
  return (
    <div className="flex flex-col items-center">
      <StarRatingExample
        animationStyle="flip"
        filledColor="#fbbf24"
        emptyColor="#d1d5db"
      />
      <span className="text-xs text-gray-500 mt-2">Click a star to see animation</span>
    </div>
  );
}

export function PopAnimationExample() {
  return (
    <div className="flex flex-col items-center">
      <StarRatingExample
        animationStyle="pop"
        filledColor="#fbbf24"
        emptyColor="#d1d5db"
      />
      <span className="text-xs text-gray-500 mt-2">Click a star to see animation</span>
    </div>
  );
}

// A component that shows different colors
export function StarRatingColorsExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <StarRatingExample
          filledColor="#fbbf24"
          emptyColor="#d1d5db"
        />
        <span className="text-sm text-gray-500">Gold</span>
      </div>
      <div className="flex items-center gap-2">
        <StarRatingExample
          filledColor="#ef4444"
          emptyColor="#d1d5db"
        />
        <span className="text-sm text-gray-500">Red</span>
      </div>
      <div className="flex items-center gap-2">
        <StarRatingExample
          filledColor="#22c55e"
          emptyColor="#d1d5db"
        />
        <span className="text-sm text-gray-500">Green</span>
      </div>
      <div className="flex items-center gap-2">
        <StarRatingExample
          filledColor="#3b82f6"
          emptyColor="#d1d5db"
        />
        <span className="text-sm text-gray-500">Blue</span>
      </div>
    </div>
  );
}

// A component that shows precision ratings
export function StarRatingPrecisionExample() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center gap-2">
        <StarRatingExample precision={1} defaultValue={3} />
        <span className="text-xs text-gray-500">Whole Stars</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StarRatingExample precision={0.5} defaultValue={3.5} />
        <span className="text-xs text-gray-500">Half Stars</span>
      </div>
    </div>
  );
}

// A component that shows read-only states
export function StarRatingReadOnlyExample() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center gap-2">
        <StarRatingExample
          readOnly
          defaultValue={4}
          filledColor="#fbbf24"
          emptyColor="#d1d5db"
        />
        <span className="text-xs text-gray-500">Read Only (4 stars)</span>
      </div>
    </div>
  );
}

// A component that shows custom icons
export function StarRatingCustomIconsExample() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center gap-2">
        <StarRatingExample
          emptyIcon="♡"
          filledIcon="♥"
          filledColor="#ef4444"
        />
        <span className="text-xs text-gray-500">Hearts</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StarRatingExample
          emptyIcon="○"
          filledIcon="●"
          filledColor="#3b82f6"
        />
        <span className="text-xs text-gray-500">Circles</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StarRatingExample
          filledIcon={<ThumbsUp className="fill-blue-500 text-blue-500" />}
          emptyIcon={<ThumbsUp className="text-gray-400" />}
        />
        <span className="text-xs text-gray-500">Thumbs Up</span>
      </div>
    </div>
  );
}

// A component that shows custom counts
export function StarRatingCountExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <StarRatingExample
          filledColor="#fbbf24"
          emptyColor="#d1d5db"
          count={3}
          defaultValue={2}
        />
        <span className="text-sm text-gray-500">3 Stars</span>
      </div>
      <div className="flex items-center gap-2">
        <StarRatingExample
          filledColor="#fbbf24"
          emptyColor="#d1d5db"
          count={7}
          defaultValue={4}
        />
        <span className="text-sm text-gray-500">7 Stars</span>
      </div>
      <div className="flex items-center gap-2">
        <StarRatingExample
          filledColor="#fbbf24"
          emptyColor="#d1d5db"
          count={10}
          defaultValue={5}
        />
        <span className="text-sm text-gray-500">10 Stars</span>
      </div>
    </div>
  );
}

// A fully featured example showing various props
export function StarRatingCompleteExample() {
  return (
    <div className="space-y-2">
      <StarRatingExample
        size="lg"
        defaultValue={3.5}
        precision={0.5}
        filledColor="#f59e0b"
        emptyColor="#d1d5db"
        hoverColor="#fbbf24"
        animationStyle="sparkle"
      />
      <div className="text-sm text-gray-500 text-center mt-2">
        Complete Example
      </div>
    </div>
  );
}
