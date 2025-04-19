"use client";
import React from "react";

import { cn } from "@/lib/utils";

type HeroProps = {
  className?: string;
};

type MinimalProps = {
  title: string;
  description: string;
  getStartedText: string;
  learnMoreText: string;
  imageUrl: string;
  imageAlt: string;
  onGetStartedClick: () => void;
  onLearnMoreClick: () => void;
} & HeroProps;

type ModernHeroProps = {
  welcomeText: string;
  title: string;
  description: string;
  learnMoreText: string;
  imageUrl: string;
  imageAlt: string;
  exploreText: string;
  onDiscoverNowClick: () => void;
  onExploreFeatureClick: () => void;

} & HeroProps;

export const MinimalHero: React.FC<MinimalProps> = ({
  className,
  title,
  description,
  getStartedText,
  learnMoreText,
  imageUrl,
  imageAlt,
  onGetStartedClick,
  onLearnMoreClick,
}) => {
  return (
    <section className={cn("relative py-16 md:py-24 bg-gray-100 dark:bg-gray-900", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
          <div className="order-2 md:order-1 text-center flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2.5">
              {title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center ">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-transform duration-200 transform hover:scale-105 focus:scale-105 min-w-[275px]"
                onClick={onGetStartedClick}
              >
                {getStartedText}
              </button>
              <button
                className="bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold py-3 px-6 rounded-md border border-gray-300 dark:border-gray-700 transition-transform duration-200 transform hover:scale-105 focus:scale-105 min-w-[275px]"
                onClick={onLearnMoreClick}
              >
                {learnMoreText}
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 focus:scale-105 ">
            <div className="h-[400px] overflow-hidden ">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="object-cover w-full h-full rounded-lg transition-transform duration-300 overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ModernHero: React.FC<ModernHeroProps> = ({
  className,
  welcomeText,
  title,
  description,
  learnMoreText,
  imageUrl,
  imageAlt,
  exploreText,
  onDiscoverNowClick,
  onExploreFeatureClick,
}) => {
  return (
    <section className={cn("bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24", className)}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-300">
              {welcomeText}
            </p>
            <h1 className="mt-4 text-4xl font-bold text-black dark:text-white lg:mt-8 sm:text-6xl xl:text-7xl transition-opacity duration-300 hover:opacity-90">
              {title}
            </h1>
            <p className="mt-4 text-base text-black dark:text-gray-300 lg:mt-6 sm:text-xl transition-opacity duration-300 hover:opacity-90">
              {description}
            </p>
            <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-6 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-8 hover:bg-yellow-400 focus:bg-yellow-400 transform hover:scale-105 focus:scale-105" role="button" onClick={onDiscoverNowClick}>
              {learnMoreText}
              <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
            <p className="mt-5 text-gray-600 dark:text-gray-400 cursor-pointer hover:font-bold transition-all duration-200" onClick={onExploreFeatureClick}>
              {exploreText}
            </p>
          </div>
          <div>
            <img className="w-full h-[650px] object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 focus:scale-105" src={imageUrl} alt={imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
};
