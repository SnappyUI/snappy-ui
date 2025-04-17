"use client";

import Components from "@/components/components";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import StackedAvatars from "@/components/ui/snappy-avatar";
import { avatarData } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-screen relative overflow-hidden bg-white dark:bg-black">

      <div className="w-full mx-auto">
        <Hero />
        <Features />
        <Components />
        <StackedAvatars avatars={avatarData} />
      </div>

      <Footer />
    </main>
  );
}
