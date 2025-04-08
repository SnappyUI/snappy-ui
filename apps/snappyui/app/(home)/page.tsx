"use client";

import Image from "next/image";
import Link from "next/link";

import { ColourfulText } from "@/components/ui/snappy-colorful-text";

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
        <p className="w-full max-w-[1000px] font-bold text-4xl md:text-6xl  ">
          Build lightning-fast, pixel-perfect UIs with
          {" "}
          <ColourfulText text="Snappy UI" />
          .
        </p>
        <p className="text-zinc-800 dark:text-gray-300 pt-3 text-lg md:text-2xl">
          A complete design system made for developers who care about
          <br className="hidden md:block" />
          performance and aesthetics.
        </p>
        <div className="flex flex-row md:flex-row gap-5 items-center justify-center mt-10">
          <Link
            href="/docs"
            className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go to Docs
          </Link>
          <button
            type="button"
            disabled
            className="p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex flex-row items-center gap-2 cursor-not-allowed"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width={24}
              height={24}
            >
              <title>GitHub</title>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.234c-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.805 1.305 3.49.997.108-.775.42-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.525.116-3.176 0 0 1.008-.322 3.3 1.23.956-.266 1.98-.398 3-.403 1.02.005 2.045.137 3 .403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.65.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.622-5.475 5.922.43.372.81 1.103.81 2.222v3.293c0 .32.19.694.8.576C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Give us a Star
          </button>
        </div>
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Snappy UI is in Beta. We appreciate your support and feedback!
        </p>
        <Link
          href="https://forms.gle/ibPYqTAskFsZtHib8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-sm text-blue-500 hover:text-blue-600 transition-colors"
        >
          Share your feedback!
        </Link>
      </div>
    </main>
  );
}
