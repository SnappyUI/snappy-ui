import Image from "next/image";
import React from "react";

import FloatingDots from "./floating-dots";
import NeonCard from "./ui/snappy-neon-card";

function Features() {
  const features = [
    {
      icon: "/design.svg",
      title: "Beautifully Designed",
      description:
        "Snappy UI allows you to build beautiful and modern websites regardless of your design skills.",
    },
    {
      icon: "/scale.svg",
      title: "Fully Responsive",
      description:
        "Responsive designed components and templates that look great on any screen.",
    },
    {
      icon: "/customizable.svg",
      title: "Customizable",
      description:
        "Tailor each component to your brand and layout with ease using Snappy UI.",
    },
  ];

  return (
    <section className="py-16 min-w-screen md:py-20 px-6 md:px-16 max-w-7xl mx-auto relative overflow-hidden">
      {/* Left glow effect */}
      <div className="absolute top-16 left-0 w-64 h-64 bg-blue-400/20 dark:bg-blue-400/30 rounded-full blur-3xl -translate-x-1/4 z-10 pointer-events-none"></div>

      {/* Floating dots background */}
      <FloatingDots />

      {/* Content container with relative positioning */}
      <div className="relative z-20">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-4 animate-slide-up text-[#1976D2] dark:text-[#42A5F5]">
          Why build with SnappyUI?
        </h2>

        {/* Section Subtitle */}
        <p
          className="text-gray-900 dark:text-gray-300 text-center mb-16 max-w-xl mx-auto text-md md:text-lg animate-slide-up"
          style={{ transitionDelay: "100ms" }}
        >
          Snappy UI offers a delightful experience for you and your users.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <NeonCard
              neonColor="#42A5F5"
              key={index}
              className="p-6 bg-white dark:bg-gray-950 rounded-xl animate-slide-up"
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <div className="flex flex-col gap-4">
                {/* Icon with theme-aware background */}
                <div className="p-3 rounded-full w-fit bg-blue-50 dark:bg-blue-900/20 transition-transform duration-300 hover:rotate-3">
                  <Image src={feature.icon} alt={feature.title} width={22} height={22} />
                </div>

                {/* Title with responsive font sizes */}
                <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white">
                  {feature.title}
                </h3>

                {/* Description with responsive font sizes */}
                <p className="text-sm md:text-base text-gray-900 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </NeonCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
