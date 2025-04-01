"use client";

import { Github as GitHubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center w-screen h-screen relative overflow-hidden bg-white dark:bg-[#09090B]">
      {/* Background Image */}

      <Image
        src="./Ellipse2.svg"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Background"
        priority
      />

      {/* Content on top */}
      <div className="flex flex-col items-center justify-center w-full h-screen text-gray-900 dark:text-white text-center relative z-10 px-4">
        <p className="w-full max-w-[852px] font-bold text-4xl md:text-6xl  ">
          Build lightning-fast, pixel-
          <br className="hidden md:block" />
          perfect UIs with Snappy UI.
        </p>
        <p className="text-gray-600 dark:text-gray-300 pt-3 text-lg md:text-2xl">
          A complete design system made for developers who care about
          <br className="hidden md:block" />
          performance and aesthetics.
        </p>
        <div className="flex flex-row md:flex-row gap-5 items-center justify-center mt-10">
          <Link
            href="/docs"
            className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            Go to Docs
          </Link>
          <Link
            href="/"
            onClick={(e) => { e.preventDefault(); }}
            className="p-4 bg-gray-200 cursor-not-allowed dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors flex flex-row items-center gap-2"
          >
            <GitHubIcon />
            {" "}
            Give us Star
          </Link>
        </div>
      </div>
    </main>
  );
}
