"use client";
import { motion } from "motion/react";
import React from "react";

// Original version
export function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(131, 179, 32)",
    "rgb(47, 195, 106)",
    "rgb(42, 169, 210)",
    "rgb(4, 112, 202)",
    "rgb(107, 10, 255)",
    "rgb(183, 0, 218)",
    "rgb(218, 0, 171)",
    "rgb(230, 64, 92)",
    "rgb(232, 98, 63)",
    "rgb(249, 129, 47)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}

// Ocean Theme
export function OceanText({ text }: { text: string }) {
  const colors = [
    "rgb(0, 119, 182)",
    "rgb(0, 150, 199)",
    "rgb(0, 180, 216)",
    "rgb(72, 202, 228)",
    "rgb(144, 224, 239)",
    "rgb(173, 232, 244)",
    "rgb(202, 240, 248)",
    "rgb(0, 95, 115)",
    "rgb(0, 135, 147)",
    "rgb(0, 175, 185)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -2, 0],
        scale: [1, 1.02, 1],
        filter: ["blur(0px)", `blur(3px)`, "blur(0px)"],
        opacity: [1, 0.9, 1],
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.03,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}

// Sunset Theme
export function SunsetText({ text }: { text: string }) {
  const colors = [
    "rgb(255, 87, 51)",
    "rgb(255, 126, 95)",
    "rgb(255, 155, 84)",
    "rgb(255, 190, 118)",
    "rgb(255, 220, 128)",
    "rgb(255, 231, 166)",
    "rgb(253, 184, 19)",
    "rgb(251, 133, 0)",
    "rgb(232, 93, 4)",
    "rgb(204, 51, 63)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount(prev => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -4, 0],
        scale: [1, 1.03, 1],
        filter: ["blur(0px)", `blur(4px)`, "blur(0px)"],
        opacity: [1, 0.85, 1],
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.04,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}

// Neon Theme
export function NeonText({ text }: { text: string }) {
  const colors = [
    "rgb(255, 66, 161)",
    "rgb(157, 0, 255)",
    "rgb(66, 223, 255)",
    "rgb(0, 255, 157)",
    "rgb(255, 238, 66)",
    "rgb(255, 129, 66)",
    "rgb(255, 0, 102)",
    "rgb(102, 0, 255)",
    "rgb(0, 255, 238)",
    "rgb(0, 200, 83)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -5, 0],
        scale: [1, 1.05, 1],
        filter: ["blur(0px)", `blur(6px)`, "blur(0px)"],
        opacity: [1, 0.75, 1],
        textShadow: ["0 0 0px currentColor", "0 0 10px currentColor", "0 0 0px currentColor"],
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}

// Monochrome Theme
export function MonochromeText({ text }: { text: string }) {
  const colors = [
    "rgb(10, 10, 10)",
    "rgb(40, 40, 40)",
    "rgb(70, 70, 70)",
    "rgb(100, 100, 100)",
    "rgb(130, 130, 130)",
    "rgb(160, 160, 160)",
    "rgb(190, 190, 190)",
    "rgb(220, 220, 220)",
    "rgb(250, 250, 250)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount(prev => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -2, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(2px)`, "blur(0px)"],
        opacity: [1, 0.9, 1],
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.02,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}

// Forest Theme
export function ForestText({ text }: { text: string }) {
  const colors = [
    "rgb(20, 83, 45)",
    "rgb(34, 113, 70)",
    "rgb(53, 146, 85)",
    "rgb(74, 175, 100)",
    "rgb(99, 207, 116)",
    "rgb(132, 226, 135)",
    "rgb(173, 236, 162)",
    "rgb(220, 240, 200)",
    "rgb(238, 248, 153)",
    "rgb(250, 230, 100)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount(prev => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -2, 0],
        rotate: [0, 1, 0, -1, 0],
        scale: [1, 1.02, 1],
        filter: ["blur(0px)", `blur(2px)`, "blur(0px)"],
        opacity: [1, 0.9, 1],
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.04,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}

// Galaxy Theme
export function GalaxyText({ text }: { text: string }) {
  const colors = [
    "rgb(84, 13, 110)",
    "rgb(127, 0, 178)",
    "rgb(162, 86, 217)",
    "rgb(142, 45, 226)",
    "rgb(202, 166, 255)",
    "rgb(93, 63, 211)",
    "rgb(73, 29, 165)",
    "rgb(24, 6, 115)",
    "rgb(11, 10, 55)",
    "rgb(237, 201, 255)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount(prev => prev + 1);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.03, 1],
        filter: ["blur(0px)", `blur(4px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
        textShadow: ["0 0 0px currentColor", "0 0 8px rgba(255, 255, 255, 0.5)", "0 0 0px currentColor"],
      }}
      transition={{
        duration: 1.2,
        delay: index * 0.03,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}

// Cyberpunk Theme
export function CyberpunkText({ text }: { text: string }) {
  const colors = [
    "rgb(255, 35, 78)",
    "rgb(255, 121, 63)",
    "rgb(255, 239, 0)",
    "rgb(0, 255, 240)",
    "rgb(0, 213, 255)",
    "rgb(0, 89, 208)",
    "rgb(88, 0, 232)",
    "rgb(142, 0, 158)",
    "rgb(204, 0, 107)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount(prev => prev + 1);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -4, 0],
        x: [0, index % 3 === 0 ? 2 : -2, 0],
        skewX: [0, index % 2 === 0 ? 3 : -3, 0],
        scale: [1, 1.05, 1],
        filter: ["blur(0px)", `blur(3px)`, "blur(0px)"],
        opacity: [1, 0.85, 1],
        textShadow: ["0 0 0px currentColor", "0 0 12px currentColor", "0 0 0px currentColor"],
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.03,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}

// Vintage Theme
export function VintageText({ text }: { text: string }) {
  const colors = [
    "rgb(145, 92, 76)",
    "rgb(181, 132, 89)",
    "rgb(189, 160, 112)",
    "rgb(200, 175, 139)",
    "rgb(219, 198, 162)",
    "rgb(237, 219, 182)",
    "rgb(242, 235, 220)",
    "rgb(96, 78, 62)",
    "rgb(113, 100, 87)",
    "rgb(152, 122, 92)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount(prev => prev + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -1, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(1px)`, "blur(0px)"],
        opacity: [1, 0.95, 1],
      }}
      transition={{
        duration: 1.5,
        delay: index * 0.02,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}

// Candy Theme
export function CandyText({ text }: { text: string }) {
  const colors = [
    "rgb(255, 145, 175)",
    "rgb(255, 189, 200)",
    "rgb(255, 216, 232)",
    "rgb(184, 225, 255)",
    "rgb(169, 205, 255)",
    "rgb(222, 188, 255)",
    "rgb(209, 160, 255)",
    "rgb(255, 165, 255)",
    "rgb(255, 194, 194)",
    "rgb(255, 211, 140)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount(prev => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -5, 0],
        rotate: [0, index % 2 === 0 ? 3 : -3, 0],
        scale: [1, 1.1, 1],
        filter: ["blur(0px)", `blur(2px)`, "blur(0px)"],
        opacity: [1, 0.9, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeInOut",
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}

// Matrix Theme
export function MatrixText({ text }: { text: string }) {
  const colors = [
    "rgb(0, 255, 65)",
    "rgb(0, 235, 60)",
    "rgb(0, 215, 55)",
    "rgb(0, 195, 50)",
    "rgb(0, 175, 45)",
    "rgb(0, 155, 40)",
    "rgb(0, 135, 35)",
    "rgb(0, 115, 30)",
    "rgb(0, 95, 25)",
    "rgb(0, 75, 20)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount(prev => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -10, 0],
        opacity: [1, Math.random() < 0.3 ? 0.3 : 1, 1],
        textShadow: ["0 0 0px currentColor", "0 0 15px currentColor", "0 0 0px currentColor"],
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.06,
        repeat: Math.random() < 0.2 ? 1 : 0,
        repeatDelay: 0.1,
      }}
      className="inline-block whitespace-pre font-mono tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
// Matrix Theme
export function SnappyText({ text }: { text: string }) {
  const colors = [
    "rgb(255, 145, 175)",
    "rgb(255, 189, 200)",
    "rgb(255, 216, 232)",
    "rgb(184, 225, 255)",
    "rgb(169, 205, 255)",
    "rgb(222, 188, 255)",
    "rgb(209, 160, 255)",
    "rgb(255, 165, 255)",
    "rgb(255, 194, 194)",
    "rgb(255, 211, 140)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount(prev => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -10, 0],
        opacity: [1, Math.random() < 0.3 ? 0.3 : 1, 1],
        textShadow: ["0 0 0px currentColor", "0 0 15px currentColor", "0 0 0px currentColor"],
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.06,
        repeat: Math.random() < 0.2 ? 1 : 0,
        repeatDelay: 0.1,
      }}
      className="inline-block whitespace-pre font-mono tracking-tight"
    >
      {char}
    </motion.span>
  ));
}

// Pastel Theme
export function PastelText({ text }: { text: string }) {
  const colors = [
    "rgb(190, 220, 230)",
    "rgb(220, 230, 190)",
    "rgb(230, 190, 220)",
    "rgb(250, 210, 190)",
    "rgb(190, 210, 250)",
    "rgb(230, 220, 250)",
    "rgb(250, 230, 210)",
    "rgb(210, 230, 250)",
    "rgb(230, 250, 210)",
    "rgb(250, 220, 230)",
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -2, 0],
        scale: [1, 1.03, 1],
        filter: ["blur(0px)", `blur(1px)`, "blur(0px)"],
        opacity: [1, 0.95, 1],
      }}
      transition={{
        duration: 1.2,
        delay: index * 0.04,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
