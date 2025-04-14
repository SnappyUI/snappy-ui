"use client";

import Components from "@/components/Components";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Team from "@/components/Team";

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
