import { Github as GitHubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center w-screen h-screen relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="./Ellipse 2.svg"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Background"
        priority
      />

      {/* Content on top */}
      <div className="flex flex-col items-center justify-center w-full h-screen text-white text-center relative z-10">
        <p className="w-[852px] h-[148px] font-bold text-6xl">
          Build lightning-fast, pixel-
          <br />
          perfect UIs with Snappy UI.
        </p>
        <p className="text-gray-300 pt-3 text-2xl">
          A complete design system made for developers who care about
          <br />
          performance and aesthetics.
        </p>
        <div className="flex flex-row gap-5 items-center justify-center mt-10">
          <Link
            href="/docs"
            className="p-4 bg-gray-800 mt-2.5 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Go to Docs
          </Link>
          <Link
            href="https://github.com/your-repo"
            className="p-4 bg-gray-800 mt-2.5 rounded-lg hover:bg-gray-700 transition-colors flex flex-row items-center gap-2"
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
