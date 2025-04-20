import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

import { ColourfulText } from "./ui/snappy-colorful-text";
import FloatingDots from "./ui/snappy-floating-dots";

function Hero() {
  return (
    <section className="min-h-screen py-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 dark:bg-black bg-white relative overflow-hidden">

      {/* Top left glow effect */}
      <div className="absolute top-42 left-0 w-96 h-96 bg-blue-400/20 dark:bg-blue-400/30 rounded-full blur-[108px] -translate-x-1/2 -translate-y-1/4 z-10 pointer-events-none"></div>

      {/* Bottom right glow effect */}
      <div className="absolute bottom-12 right-0 w-96 h-96 bg-blue-400/20 dark:bg-blue-400/30 rounded-full blur-[108px] translate-x-1/2 z-10 pointer-events-none"></div>

      {/* Floating dots background */}
      <FloatingDots />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-8 max-w-[900px] animate-fade-in leading-tight"
          style={{ animationDelay: "0.1s" }}
        >
          Ship
          {" "}
          <span className="text-[#1976D2] dark:text-[#42A5F5]">Faster</span>
          <br />
          with
          {" "}
          <ColourfulText text="Snappy UI" />
        </h1>
        {/* Subheading */}
        <p className="text-gray-900 dark:text-gray-300 mb-12 max-w-2xl text-lg md:text-xl lg:text-2xl mx-auto">
          Copy paste the most trending components and use them in your websites without having to worry about styling and animations.
        </p>
        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 md:gap-6 justify-center animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {/* Get Started */}
          <Link href="/docs">
            <button type="button" className="rounded-full cursor-pointer bg-[#1976D2] dark:bg-[#42A5F5] text-white font-medium px-6 md:px-8 py-3 transition-all duration-300 hover:opacity-90 shadow-md dark:shadow-blue-900/20 text-sm md:text-lg">
              Get started
            </button>
          </Link>
          {/* GitHub Star */}
          <a
            href="https://github.com/SnappyUI/snappy-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="rounded-full cursor-pointer bg-gray-100 dark:bg-gray-800 text-black border dark:text-white font-medium px-6 md:px-8 py-3 transition-all duration-300 flex items-center gap-3 hover:opacity-90 hover:shadow-md text-sm md:text-lg">
              <Github size={20} className="text-[#1976D2] dark:text-[#42A5F5]" />
              Star on GitHub
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
