"use client";

import Avatar from "@/components/ui/snappy-avatar";
import FloatingDots from "@/components/ui/snappy-floating-dots";

export type AvatarType = {
  name: string;
  src: string;
};

type CuratedByProps = {
  avatars: AvatarType[];
  width?: number;
  height?: number;
};

export default function CuratedBy({ avatars, width = 56, height = 56 }: CuratedByProps) {
  return (
    <section className="relative w-screen py-12 md:py-20 px-6 md:px-16 mx-auto">
      {/* Left glow effect */}
      <div className="absolute -top-10 left-0 w-96 h-96 bg-blue-400/20 dark:bg-blue-400/30 rounded-full blur-[92px] -translate-x-[60%] z-10 pointer-events-none"></div>

      {/* Floating background */}
      <FloatingDots />

      {/* Section Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-24 animate-slide-up text-[#1976D2] dark:text-[#42A5F5]">
          Curated By
        </h2>
        <div className="mb-2 flex flex-row items-center justify-center pr-4">
          {avatars.map(avatar => (
            <Avatar
              key={avatar.name}
              name={avatar.name}
              src={avatar.src}
              width={width}
              height={height}
              stacked
            />
          ))}
        </div>
      </div>
    </section>
  );
}
