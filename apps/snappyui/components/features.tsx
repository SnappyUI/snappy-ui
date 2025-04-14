import { Palette, ScreenShare, Sliders } from "lucide-react";
import React from "react";

function Features() {
  const features = [
    {
      icon: <Palette className="w-6 h-6 text-snappy-blue" strokeWidth={1.5} />,
      title: "Beautifully designed",
      description: "Snappy UI allows you build beautiful and modern websites regardless of your design skills.",
    },
    {
      icon: <ScreenShare className="w-6 h-6 text-snappy-blue" strokeWidth={1.5} />,
      title: "Fully Responsive",
      description: "Responsive designed components and templates that look great on any screen.",
    },
    {
      icon: <Sliders className="w-6 h-6 text-snappy-blue" strokeWidth={1.5} />,
      title: "Customizable",
      description: "Snappy UI allows you build beautiful and modern websites regardless of your design skills.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-3 animate-slide-up">
        Turn Your Ideas Into
        {" "}
        <span className="text-snappy-blue">Reality</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-xl mx-auto text-sm md:text-base animate-slide-up" style={{ transitionDelay: "100ms" }}>
        Snappy UI offer all the vital building blocks you need to transform your idea into a great-looking startup.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-zinc-400 dark:bg-[#111111] rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up animate-glow"
            style={{ transitionDelay: `${(index + 1) * 150}ms` }}
          >
            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg w-fit transition-transform duration-300 hover:rotate-3">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
