"use client";
import type { DynamicOption } from "motion/react";

import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

// Variation 1: Character-by-character typing effect
export function TextTypingEffect({
  words,
  className,
  typingSpeed = 0.03,
}: {
  words: string;
  className?: string;
  typingSpeed?: number;
}) {
  const [scope, animate] = useAnimate();
  const characters = words.split("");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        display: "inline",
      },
      {
        duration: 0,
        delay: stagger(typingSpeed),
      },
    );
  }, [scope.current, animate, typingSpeed]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">
          <motion.div ref={scope}>
            {characters.map((char, idx) => (
              <motion.span
                key={idx}
                className="opacity-0"
                style={{ display: "none" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Variation 2: Fade in from different directions
export function TextDirectionalFade({
  words,
  className,
  direction = "up",
  staggerTime = 0.1,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  staggerTime?: number;
  duration?: number;
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 20, opacity: 0 };
      case "down": return { y: -20, opacity: 0 };
      case "left": return { x: 20, opacity: 0 };
      case "right": return { x: -20, opacity: 0 };
      default: return { y: 20, opacity: 0 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case "up": return { y: 0, opacity: 1 };
      case "down": return { y: 0, opacity: 1 };
      case "left": return { x: 0, opacity: 1 };
      case "right": return { x: 0, opacity: 1 };
      default: return { y: 0, opacity: 1 };
    }
  };

  useEffect(() => {
    animate(
      "span",
      getFinalPosition(),
      {
        duration,
        delay: stagger(staggerTime),
      },
    );
  }, [scope.current, animate, direction, duration, staggerTime]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        {/* Remove hardcoded text color classes */}
        <div className="leading-snug tracking-wide">
          <motion.div ref={scope} className="flex flex-wrap">
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="inline-block mr-2 mb-1"
                style={getInitialPosition()}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Variation 3: Color transition effect
export function TextColorTransition({
  words,
  className,
  fromColor = "rgb(156, 163, 175)",
  toColor = "rgb(255, 255, 255)",
  duration = 0.5,
}: {
  words: string;
  className?: string;
  fromColor?: string;
  toColor?: string;
  duration?: number;
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        color: toColor,
        opacity: 1,
      },
      {
        duration,
        delay: stagger(0.1),
      },
    );
  }, [scope.current, animate, toColor, duration]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                style={{ color: fromColor, opacity: 0.6 }}
              >
                {word}
                {" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Variation 4: Scale and rotation effect
export function TextScaleEffect({
  words,
  className,
  staggerTime = 0.1,
  duration = 0.5,
  rotation = false,
}: {
  words: string;
  className?: string;
  staggerTime?: number;
  duration?: number;
  rotation?: boolean;
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        scale: 1,
        opacity: 1,
        rotate: rotation ? 0 : undefined,
      },
      {
        duration,
        delay: stagger(staggerTime),
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    );
  }, [scope.current, animate, duration, staggerTime, rotation]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">
          <motion.div ref={scope} className="flex flex-wrap">
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="inline-block origin-center mr-2 mb-1"
                style={{
                  scale: 0.5,
                  opacity: 0,
                  rotate: rotation ? -10 : undefined,
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Variation 5: Split letters effect
export function TextSplitEffect({
  words,
  className,
  duration = 0.8,
}: {
  words: string;
  className?: string;
  duration?: number;
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!scope.current)
      return;

    const timeline: [
      [
        string,
        { y: number[]; opacity: number[] },
        { duration: number; delay: DynamicOption<number> },
      ],
      [
        string,
        { x: number },
        { at: string; duration: number },
      ],
    ] = [
      [
        "span.letter",
        { y: [-20, 0], opacity: [0, 1] },
        { duration: duration / 2, delay: stagger(0.02) },
      ],
      [
        "motion.span",
        { x: 0 },
        { at: "+0", duration: 0 },
      ],
    ];

    animate(timeline);
  }, [animate, duration]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="inline-block"
                style={{ x: 0 }}
              >
                {word.split("").map((char, charIdx) => (
                  <span key={charIdx} className="letter inline-block">
                    {char}
                  </span>
                ))}
                <span className="letter inline-block">&nbsp;</span>
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
