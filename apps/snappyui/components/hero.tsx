import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

import { ColourfulText } from "./ui/snappy-colorful-text";

function Hero() {
  return (
    <section className="min-h-screen py-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 dark:bg-black bg-white relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50 dark:from-transparent dark:to-blue-950/20 opacity-40"></div>

      <div className="glow-effect"></div>
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

        {/* Subheading with improved styling */}
        <p className="text-[#1a1a1a] dark:text-[#B9B9B9] mb-12 max-w-2xl text-lg md:text-xl lg:text-2xl mx-auto">
          A complete design system made for developers who care about performance
          and aesthetics.
        </p>

        {/* CTA Buttons with improved styling */}
        <div
          className="flex flex-wrap gap-4 md:gap-6 justify-center animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {/* Get Started */}
          <Link href="/docs">
            <button type="button" className="rounded-full cursor-pointer bg-[#1976D2] text-white font-medium px-6 md:px-8 py-3 md:py-4 transition-all duration-300 hover:bg-[#1565C0] shadow-lg shadow-blue-200 dark:shadow-blue-900/20 text-sm md:text-lg">
              Get started
            </button>
          </Link>

          {/* GitHub Star */}
          <a
            href="https://github.com/SnappyUI/snappy-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="rounded-full cursor-pointer bg-[#f6f6f6] dark:bg-[#222223] text-black border dark:text-white font-medium px-6 md:px-8 py-3 md:py-4 transition-all duration-300 flex items-center gap-3 hover:opacity-90 hover:shadow-md text-sm md:text-lg">
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
