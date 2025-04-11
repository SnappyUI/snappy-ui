"use client";

import React from "react"; // Removed useState import

import Marquee from "@/components/ui/snappy-marquee";

// Generate SVG logo placeholder
type SVGLogoProps = {
  color: string;
  letter: string;
};

function SVGLogo({ color, letter }: SVGLogoProps) {
  return (
    <svg viewBox="0 0 100 100" className="w-16 h-16">
      <circle cx="50" cy="50" r="45" fill={color} />
      <text x="50" y="50" fontSize="40" fontWeight="bold" fill="white" textAnchor="middle" dominantBaseline="central">
        {letter}
      </text>
    </svg>
  );
}

// Generate SVG product image placeholder
type SVGProductImageProps = {
  color: string;
  icon: string;
};

function SVGProductImage({ color, icon }: SVGProductImageProps) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" fill={color} opacity="0.2" />
      <rect x="10" y="10" width="80" height="80" rx="10" fill={color} opacity="0.6" />
      <text x="50" y="50" fontSize="30" fontWeight="bold" fill="white" textAnchor="middle" dominantBaseline="central">
        {icon}
      </text>
    </svg>
  );
}

// Generate SVG photo placeholder
type SVGPhotoProps = {
  color: string;
  number: number;
};

function SVGPhoto({ color, number }: SVGPhotoProps) {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <rect width="300" height="200" fill={color} opacity="0.6" />
      <circle cx="75" cy="50" r="20" fill="white" opacity="0.3" />
      <polygon points="0,200 300,150 300,200" fill="white" opacity="0.2" />
      <text x="150" y="100" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">
        Photo
        {" "}
        {number}
      </text>
    </svg>
  );
}

export default function MarqueeDemo() {
  // Removed useState for isDarkMode

  // Sample data for logos section (remains the same)
  const techLogos = [
    { name: "Company 1", description: "Technology Provider", color: "#3B82F6", id: "1" },
    { name: "Company 2", description: "Software Solutions", color: "#10B981", id: "2" },
    { name: "Company 3", description: "Cloud Services", color: "#8B5CF6", id: "3" },
    { name: "Company 4", description: "AI Platform", color: "#EC4899", id: "4" },
    { name: "Company 5", description: "Data Analytics", color: "#F59E0B", id: "5" },
    { name: "Company 6", description: "Security Solutions", color: "#EF4444", id: "6" },
  ];

  // Sample product data (remains the same)
  const products = [
    { name: "Premium Headphones", price: "$199", category: "Audio", color: "#3B82F6", icon: "🎧", id: "7" },
    { name: "Smart Watch", price: "$249", category: "Wearables", color: "#10B981", icon: "⌚", id: "8" },
    { name: "Wireless Earbuds", price: "$129", category: "Audio", color: "#8B5CF6", icon: "🎵", id: "9" },
    { name: "Ultra HD Monitor", price: "$399", category: "Displays", color: "#EC4899", icon: "🖥️", id: "10" },
    { name: "Gaming Keyboard", price: "$89", category: "Peripherals", color: "#F59E0B", icon: "⌨️", id: "11" },
  ];

  return (
  // Applied dark mode classes directly using dark: prefix
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white p-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">

        <div className="space-y-8">
          <section className="space-y-2">
            <h2 className="text-lg font-medium">Basic Marquee</h2>
            {/* Removed darkMode prop */}
            <Marquee variant="primary" className="p-4 rounded-md">
              <div className="flex gap-4 items-center">
                <span className="text-lg font-bold">Breaking News</span>
                <span>•</span>
                <span>This is a basic marquee component with default settings</span>
                <span>•</span>
                <span>Pause me by hovering!</span>
              </div>
            </Marquee>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-medium">Different Variants</h2>
            <div className="space-y-4">
              {/* Removed darkMode prop */}
              <Marquee variant="secondary" className="p-3 rounded-md">
                <div className="flex gap-4 items-center">
                  <span className="font-medium">Secondary Variant</span>
                  <span>•</span>
                  <span>This uses the secondary color scheme</span>
                </div>
              </Marquee>

              {/* Removed darkMode prop */}
              <Marquee variant="accent" className="p-3 rounded-md">
                <div className="flex gap-4 items-center">
                  <span className="font-medium">Accent Variant</span>
                  <span>•</span>
                  <span>This uses the accent color scheme</span>
                </div>
              </Marquee>

              {/* Removed darkMode prop */}
              <Marquee variant="muted" className="p-3 rounded-md">
                <div className="flex gap-4 items-center">
                  <span className="font-medium">Muted Variant</span>
                  <span>•</span>
                  <span>This uses the muted color scheme</span>
                </div>
              </Marquee>
            </div>
          </section>

          {/* Partner Logos Showcase with SVG */}
          <section className="space-y-2">
            <h2 className="text-lg font-medium">Partner Logos Showcase</h2>
            <Marquee
              speed="slow"
              gap={32}
              // Removed darkMode prop
              // Applied dark mode classes directly
              className="p-6 rounded-md bg-gray-100 dark:bg-gray-800"
            >
              <div className="flex items-center gap-16">
                {techLogos.map(logo => (
                  <div key={logo.id} className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden bg-white shadow-md">
                      <SVGLogo color={logo.color} letter={logo.name[8]} />
                    </div>
                    <div className="text-center">
                      <p className="font-medium">{logo.name}</p>
                      {/* Already had dark: variant */}
                      <p className="text-xs text-gray-500 dark:text-gray-400">{logo.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Marquee>
          </section>

          {/* Product showcase with SVG */}
          <section className="space-y-2">
            <h2 className="text-lg font-medium">Product Showcase</h2>
            <Marquee
              variant="accent"
              speed="normal"
              // Removed darkMode prop
              className="p-6 rounded-md dark:bg-black bg-white"
              draggable={true}
            >
              <div className="flex items-center gap-8">
                {products.map(product => (
                  // Applied dark mode classes directly
                  <div key={product.id} className="flex flex-col items-center p-4 rounded-lg bg-purple-50 dark:bg-gray-800 dark:bg-opacity-50 transition-all hover:scale-105">
                    <div className="w-32 h-32 mb-3 overflow-hidden rounded-lg">
                      <SVGProductImage color={product.color} icon={product.icon} />
                    </div>
                    <h3 className="font-medium text-center">{product.name}</h3>
                    <p className="text-sm">{product.price}</p>
                    {/* Applied dark mode classes directly */}
                    <span className="mt-2 px-2 py-1 text-xs rounded-full bg-purple-200 dark:bg-purple-700">
                      {product.category}
                    </span>
                  </div>
                ))}
              </div>
            </Marquee>
          </section>

          {/* Photo gallery with SVG */}
          <section className="space-y-2">
            <h2 className="text-lg font-medium">Photo Gallery</h2>
            <Marquee
              speed="normal"
              // Removed darkMode prop
              draggable={true}
              // Applied dark mode classes directly
              className="p-4 rounded-md bg-gray-100 dark:bg-gray-800"
            >
              <div className="flex gap-4">
                {[
                  { color: "#3B82F6", number: 1 },
                  { color: "#10B981", number: 2 },
                  { color: "#8B5CF6", number: 3 },
                  { color: "#EC4899", number: 4 },
                  { color: "#F59E0B", number: 5 },
                ].map(photo => (
                  <div key={photo.number} className="flex-shrink-0 w-64 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full h-40">
                      <SVGPhoto color={photo.color} number={photo.number} />
                    </div>
                    {/* Applied dark mode classes directly */}
                    <div className="p-3 bg-white dark:bg-gray-700">
                      <h3 className="font-medium">
                        Photo Title
                        {photo.number}
                      </h3>
                      {/* Already had dark: variant */}
                      <p className="text-sm text-gray-500 dark:text-gray-400">Short description for this beautiful photo</p>
                    </div>
                  </div>
                ))}
              </div>
            </Marquee>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-medium">With Icons & Emojis</h2>
            {/* Removed darkMode prop */}
            <Marquee className="p-3 rounded-md">
              <div className="flex gap-6 items-center">
                {/* Already had dark: variants */}
                <div className="flex items-center gap-2 bg-blue-500 dark:bg-blue-700 text-white px-3 py-1 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  <span>Live 📡</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold">Product Launch 🚀</span>
                  <span>•</span>
                  <span>New features available now</span>
                </div>

                {/* Already had dark: variants */}
                <div className="flex items-center gap-2 bg-green-500 dark:bg-green-700 text-white px-3 py-1 rounded-full">
                  <span>20% OFF 💰</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold">Limited Time ⏱️</span>
                  <span>•</span>
                  <span>Use code MARQUEE20</span>
                </div>
              </div>
            </Marquee>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-medium">Animated SVG Elements</h2>
            <Marquee
              speed="normal"
              // Removed darkMode prop
              className="p-6 rounded-md"
            >
              <div className="flex items-center gap-16">
                {/* SVG Animated Elements - Applied dark mode via className */}
                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <circle
                    cx="50"
                    cy="50"
                    stroke="#3B82F6"
                    strokeWidth="5"
                    // Used arbitrary values with dark: prefix for fill
                    className="fill-[#E5E7EB] dark:fill-[#1F2937]"
                  >
                    <animate attributeName="r" values="40;45;40" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="50" cy="50" r="20" fill="#3B82F6">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>

                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <rect
                    x="10"
                    y="10"
                    width="80"
                    height="80"
                    rx="10"
                    // Used arbitrary values with dark: prefix for fill
                    className="fill-[#E5E7EB] dark:fill-[#1F2937]"
                  />
                  <rect x="25" y="25" width="50" height="50" rx="5" fill="#10B981">
                    <animate attributeName="width" values="40;50;40" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="height" values="40;50;40" dur="3s" repeatCount="indefinite" />
                  </rect>
                </svg>

                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <polygon
                    points="50,10 90,90 10,90"
                    stroke="#EC4899"
                    strokeWidth="5"
                    // Used arbitrary values with dark: prefix for fill
                    className="fill-[#E5E7EB] dark:fill-[#1F2937]"
                  >
                    <animate attributeName="points" values="50,10 90,90 10,90;50,15 85,85 15,85;50,10 90,90 10,90" dur="3s" repeatCount="indefinite" />
                  </polygon>
                  <circle cx="50" cy="50" r="10" fill="#EC4899" />
                </svg>

                {/* Other SVGs did not use the isDarkMode state */}
                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <circle cx="30" cy="30" r="20" fill="#F59E0B">
                    <animate attributeName="cy" values="30;35;30" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="70" cy="30" r="20" fill="#F59E0B">
                    <animate attributeName="cy" values="30;35;30" dur="1s" repeatCount="indefinite" begin="0.2s" />
                  </circle>
                  <path d="M 30 70 Q 50 90 70 70" stroke="#F59E0B" strokeWidth="5" fill="none">
                    <animate attributeName="d" values="M 30 70 Q 50 90 70 70;M 30 70 Q 50 80 70 70;M 30 70 Q 50 90 70 70" dur="2s" repeatCount="indefinite" />
                  </path>
                </svg>

                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="40" fill="url(#grad)" opacity="0.8">
                    <animate attributeName="r" values="35;40;35" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <text x="50" y="55" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">SVG</text>
                </svg>
              </div>
            </Marquee>
          </section>
        </div>
      </div>
    </div>
  );
}
