// components/FloatingDots.tsx
import React, { useEffect, useState } from "react";

type DotProps = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  translateX1: number;
  translateY1: number;
  translateX2: number;
  translateY2: number;
};

const FloatingDots: React.FC = () => {
  const [dots, setDots] = useState<DotProps[]>([]);

  useEffect(() => {
    // Generate dots on component mount
    const dotsArray: DotProps[] = Array.from({ length: 50 }).map((_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 6,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
      translateX1: Math.random() > 0.5 ? 10 + Math.random() * 20 : -(10 + Math.random() * 20),
      translateY1: Math.random() > 0.5 ? 10 + Math.random() * 15 : -(10 + Math.random() * 15),
      translateX2: Math.random() > 0.5 ? 10 + Math.random() * 20 : -(10 + Math.random() * 20),
      translateY2: Math.random() > 0.5 ? 10 + Math.random() * 15 : -(10 + Math.random() * 15),
    }));
    setDots(dotsArray);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {dots.map(dot => (
        <div
          key={dot.id}
          className="absolute rounded-full dark:bg-[#42A5F5] bg-[#1976D2] dark:opacity-30 opacity-40"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animation: `floating-${dot.id} ${dot.duration}s ease-in-out infinite alternate`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}

      {/* Dynamic keyframes for each dot */}
      <style jsx>
        {`
        ${dots.map(dot => `
          @keyframes floating-${dot.id} {
            0% { transform: translate(0, 0); }
            25% { transform: translate(${dot.translateX1}px, ${dot.translateY1}px); }
            50% { transform: translate(${-dot.translateX1 / 2}px, ${dot.translateY2}px); }
            75% { transform: translate(${dot.translateX2}px, ${-dot.translateY1}px); }
            100% { transform: translate(${-dot.translateX2}px, ${-dot.translateY2}px); }
          }
        `).join("\n")}
      `}
      </style>
    </div>
  );
};

export default FloatingDots;
