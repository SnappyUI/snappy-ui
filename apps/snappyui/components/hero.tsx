import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

import { ColourfulText } from "./ui/snappy-colorful-text";

function Hero() {
  return (
    <section className="min-h-[600px] py-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 dark:bg-black bg-white relative overflow-hidden">
      {/* Optional Glow */}
      <div className="glow-effect"></div>

      {/* Heading */}
      <h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-[900px] animate-fade-in"
        style={{ animationDelay: "0.1s" }}
      >
        Ship
        {" "}
        <span className="text-[#1976D2] dark:text-[#42A5F5]">Faster</span>
        {" "}
        with
        {" "}
        <ColourfulText text="Snappy UI." />
      </h1>

      {/* Subheading */}
      <p className="text-[#1a1a1a] dark:text-[#B9B9B9] mb-10 max-w-2xl text-lg md:text-xl lg:text-2xl">
        A complete design system made for developers who care about performance
        and aesthetics.
      </p>

      {/* CTA Buttons */}
      <div
        className="flex flex-wrap gap-4 justify-center animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        {/* Get Started */}
        <Link href="/docs">
          <button type="button" className="rounded-full cursor-pointer bg-[#f6f6f6] dark:bg-[#222223] text-black border dark:text-white font-medium px-6 py-3 transition-all duration-300 hover:opacity-90 text-md lg:text-xl">
            Get started
          </button>
        </Link>

        {/* GitHub Star */}
        <a
          href="https://github.com/SnappyUI/snappy-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="rounded-full cursor-pointer bg-[#f6f6f6] dark:bg-[#222223] text-black border dark:text-white font-medium px-6 py-3 transition-all duration-300 flex items-center gap-2 hover:opacity-90 text-md lg:text-xl">
            <Github size={18} className="text-[#1976D2] dark:text-[#42A5F5]" />
            Star on GitHub
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
