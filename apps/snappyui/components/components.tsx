import React from "react";

function Components() {
  return (
    <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-3 text-snappy-blue animate-slide-up">Production-ready components</h2>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-12 text-sm md:text-base animate-slide-up" style={{ transitionDelay: "100ms" }}>
        Beautiful and powerful, right out of the box.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 dark:border-gray-800 overflow-hidden rounded-lg animate-slide-up" style={{ transitionDelay: "200ms" }}>
        {/* Column 1 - Button */}
        <div className="border-b md:border-r border-gray-200 dark:border-gray-800 p-8 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/50">
          <div className="mb-4 flex gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="opacity-60">sm</span>
            <span className="opacity-60">default</span>
            <span className="text-snappy-blue">lg</span>
            <span className="opacity-60">xl</span>
          </div>

          <div className="bg-gray-200 dark:bg-gray-300 text-black font-medium py-3 px-6 rounded text-center mb-8 transition-transform duration-300 hover:scale-105">
            Extra Large Button
          </div>

          <div className="text-sm font-medium">Button</div>
        </div>

        {/* Column 2 - Checkbox */}
        <div className="border-b md:border-r border-gray-200 dark:border-gray-800 p-8 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/50">
          <div className="mb-4 flex gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="opacity-60">bounce</span>
            <span className="opacity-60">fade</span>
            <span className="opacity-60">pulse</span>
            <span className="opacity-60">jello</span>
          </div>

          <div className="flex items-center gap-2 mb-8 group">
            <div className="w-5 h-5 bg-snappy-blue rounded flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="transition-colors duration-300 group-hover:text-snappy-blue">Click me</span>
          </div>

          <div className="text-sm font-medium">Check</div>
        </div>

        {/* Column 3 - Text */}
        <div className="border-b border-gray-200 dark:border-gray-800 p-8 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/50">
          <div className="mb-4 flex gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="opacity-60">MatrixText</span>
            <span className="opacity-60">VintageText</span>
            <span className="text-snappy-blue">CandyText</span>
          </div>

          <div className="mb-8 group transition-all duration-300">
            <span className="font-medium">Let's try </span>
            <span className="text-snappy-pink transition-all duration-500 group-hover:text-snappy-blue">SnappyUI</span>
          </div>

          <div className="text-sm font-medium">ColorText</div>
        </div>

        {/* Column 4 - Dropdown */}
        <div className="md:border-r border-gray-200 dark:border-gray-800 p-8 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/50">
          <div className="mb-4 flex gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="opacity-60">default</span>
            <span className="opacity-60">outline</span>
            <span className="opacity-60">ghost</span>
            <span className="opacity-60">contentSize</span>
          </div>

          <div className="mb-8">
            <div className="bg-gray-200 dark:bg-gray-300 text-black font-medium py-1 px-4 rounded text-center inline-block transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              Default
            </div>
          </div>

          <div className="text-sm font-medium">Dropdown</div>
        </div>

        {/* Column 5 - Animated Text */}
        <div className="md:border-r border-gray-200 dark:border-gray-800 p-8 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/50">
          <div className="mb-4 flex gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="opacity-60">TextTypingEffect</span>
            <span className="text-snappy-blue">TextSplitEffect</span>
          </div>

          <div className="mb-8 text-pink-500 hover:text-snappy-pink transition-colors duration-300">
            Each letter animates individually
          </div>

          <div className="text-sm font-medium">Animated Text</div>
        </div>

        {/* Column 6 - Learn More */}
        <div className="p-8 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/50">
          <div className="mb-4 text-lg font-medium">Want to see more?</div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Check out the docs for details of the complete library</p>
          <div className="text-snappy-blue text-sm font-medium group flex items-center transition-all duration-300 hover:translate-x-1 cursor-pointer">
            Learn More
            <span className="transition-transform duration-300 inline-block group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Components;
