"use client";

import clsx from "clsx";

import FloatingDots from "./floating-dots";

const avatars = [
  {
    name: "Ajay Patel",
    src: "/avatars/ajay-patel.png",
  },
  {
    name: "Jay Kadlag",
    src: "/avatars/jay-kadlag.png",
  },
  {
    name: "Ayush Bhagat",
    src: "/avatars/ayush-bhagat.png",
  },
  {
    name: "Ajay Panigrahi",
    src: "/avatars/ajay-panigrahi.png",
  },
  {
    name: "Ankit Raj",
    src: "/avatars/ankit-raj.png",
  },
  {
    name: "Jatin Verma",
    src: "/avatars/jatin-verma.png",
  },
  {
    name: "Aditya Raj",
    src: "/avatars/aditya-raj.png",
  },
];

export default function StackedAvatars() {
  return (
    <section className="relative w-screen py-12 md:py-20 px-6 md:px-16 mx-auto">
      {/* Left glow effect */}
      <div className="absolute top-0 left-0 w-72 h-92 bg-blue-400/20 dark:bg-blue-400/30 rounded-full blur-3xl -translate-x-[50%] z-10 pointer-events-none"></div>

      {/* Floating background */}
      <FloatingDots />

      {/* Section Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-24 animate-slide-up text-[#1976D2] dark:text-[#42A5F5]">
          Curated By
        </h2>
        <div className="mb-2 flex flex-row items-center justify-center pr-4">
          {avatars.map(avatar => (
            <div
              key={avatar.name}
              className={clsx(
                "group relative -mr-4 transition-transform duration-300",
                "hover:z-30 hover:scale-110",
              )}
            >
              <div className="group relative">
                <img
                  src={avatar.src}
                  alt={avatar.name}
                  width={56}
                  height={56}
                  className="size-14 md:size-18 rounded-full border-2 border-bg object-cover transition duration-300 group-hover:z-30 group-hover:scale-110"
                />
                <div className="absolute text-md bottom-full mb-2 left-1/2 -translate-x-1/2 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 bg-white dark:bg-black text-black dark:text-white rounded px-2 py-1 whitespace-nowrap z-40">
                  {avatar.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
