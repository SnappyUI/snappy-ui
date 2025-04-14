"use client";

import Components from "@/components/components";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Team from "@/components/team";

// import Image from "next/image";
// import Link from "next/link";

// import { ColourfulText } from "@/components/ui/snappy-colorful-text";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center w-screen h-screen relative overflow-hidden bg-white dark:bg-black">
      {/* Background Image */}

      <main className="max-w-[1400px] mx-auto">
        <Hero />
        <Features />
        <Components />
        <Team />
      </main>
      <Footer />
    </main>
  );
}
