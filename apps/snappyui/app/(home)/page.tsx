"use client";

import Components from "@/components/components";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Team from "@/components/team";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-screen relative overflow-hidden bg-white dark:bg-black">
      <div className=" w-full mx-auto">
        <Hero />
        <Features />
        <Components />
        <Team />
      </div>
      <Footer />
    </main>
  );
}
