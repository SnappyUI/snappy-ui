"use client";

import { useEffect, useState } from "react";

import Components from "@/components/components";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Playground from "@/components/playground";
import CuratedBy from "@/components/ui/curated-by";
import { avatarData } from "@/lib/data";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="flex flex-col items-center w-screen relative overflow-hidden bg-white dark:bg-black">
      <div className="w-full mx-auto">
        <Hero />
        <Components />
        {!isMobile && <Playground />}
        <Features />
        <CuratedBy avatars={avatarData} width={84} height={84} />
      </div>
      <Footer />
    </main>
  );
}
