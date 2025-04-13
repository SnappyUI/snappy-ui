import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

import { ColourfulText } from "./ui/snappy-colorful-text";

function Hero() {
  return (
    <section className="w-screen h-screen justify-center text-center flex flex-col items-center dark:bg-black bg-white relative overflow-hidden">
      {/* Glow effect container */}
      <div className="glow-effect"></div>

      {/* Content */}
      <h1
        className="text-4xl md:text-5xl font-bold mb-4 max-w-[900px] animate-fade-in"
        style={{ animationDelay: "0.1s" }}
      >
        Build
        {" "}
        <span className="text-[#42A5F5]">
          sleek, lightning-fast, pixel-perfect
          {" "}
        </span>
        UIs with
        {" "}
        <ColourfulText text="Snappy UI." />
      </h1>
      <p
        className="text-gray-600 dark:text-gray-400 mb-10 max-w-xl text-sm md:text-base animate-fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        A complete design system made for developers who care about performance
        and aesthetics.
      </p>

      <div
        className="flex flex-row gap-4 justify-center animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        <button
          type="button"
          className="bg-black min-w-7/12 text-white dark:bg-white dark:text-black rounded-md px-6 py-2.5 font-medium hover:opacity-90 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
        >
          <Link href="/docs">Get started</Link>
        </button>
        <button
          type="button"
          className="bg-transparent border min-w-7/12 border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-md px-6 py-2.5 font-medium hover:border-gray-500 transition-all duration-300 flex items-center gap-2 hover:shadow-md hover:-translate-y-0.5"
        >
          <Github size={18} />
          Star on GitHub
        </button>
      </div>
    </section>
  );
}

export default Hero;
