import Image from "next/image";
import React from "react";

import MorphCard from "@/components/ui/snappy-morph-card";

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
    <section className="py-16 md:py-20 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-4 animate-slide-up text-[#1976D2] dark:text-[#42A5F5]">
        Turn Your Ideas Into Reality
      </h2>

      {/* Section Subtitle */}
      <p
        className="text-[#1a1a1a] dark:text-[#B9B9B9] text-center mb-16 max-w-xl mx-auto text-md md:text-lg animate-slide-up"
        style={{ transitionDelay: "100ms" }}
      >
        Snappy UI offers all the vital building blocks you need to transform your idea into a great-looking startup.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <MorphCard key={index} className="p-6 rounded-xl animate-slide-up">
            <div className="flex flex-col gap-4">
              {/* Icon with theme-aware background */}
              <div className="p-3 rounded-full w-fit bg-blue-900/20 transition-transform duration-300 hover:rotate-3">
                <Image src={feature.icon} alt={feature.title} width={22} height={22} />
              </div>

              {/* Title with responsive font sizes */}
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description with responsive font sizes */}
              <p className="text-sm md:text-base text-[#D4D3D7] leading-relaxed">
                {feature.description}
              </p>
            </div>
          </MorphCard>
        ))}
      </div>
    </section>
  );
}

export default Features;
