"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

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

type ClassicHeroProps = {
  companyName: string;
  coreFeaturesText: string;
  coreFeaturesLink: string;
  pricingText: string;
  pricingTextLink: string;
  integrationsText: string;
  integrationsTextLink: string;
  loginText: string;
  getStartedText: string;
  tagline: string;
  mainTitle: string;
  description: string;
  freeTrialText: string;
  learnMoreText2: string;
  onLoginClick: () => void;
  onGetStartedNavClick: () => void;
  onGetStartedClick: () => void;
  onLearnMoreClick: () => void;
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

export const ClassicHero: React.FC<ClassicHeroProps> = ({
  className,
  companyName,
  coreFeaturesText,
  coreFeaturesLink,
  pricingText,
  pricingTextLink,
  integrationsText,
  integrationsTextLink,
  loginText,
  getStartedText,
  tagline,
  mainTitle,
  description,
  freeTrialText,
  learnMoreText2,
  onLoginClick,
  onGetStartedNavClick,
  onGetStartedClick,
  onLearnMoreClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={cn(
      "overflow-x-hidden bg-gray-50 dark:bg-gray-900",
      className,
    )}
    >
      <header className="py-4 md:py-6 relative">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo/Company Name */}
            <div className="flex-shrink-0">
              <a
                href="#"
                title=""
                className="flex rounded outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2"
              >
                <span className="text-xl font-bold text-gray-900 dark:text-white">{companyName}</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-700 dark:text-gray-300"
                onClick={toggleMobileMenu}
                aria-label="Toggle Mobile Menu"
              >
                {isMobileMenuOpen
                  ? (
                      <X className="h-6 w-6" />
                    )
                  : (
                      <Menu className="h-6 w-6" />
                    )}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-6 xl:space-x-10">
              <motion.a
                href={coreFeaturesLink}
                target="_blank"
                title=""
                className="text-base font-medium text-gray-900 dark:text-gray-300 transition-all duration-300 rounded focus:outline-none font-pj hover:text-opacity-70 dark:hover:text-opacity-80 focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {coreFeaturesText}
              </motion.a>

              <motion.a
                href={pricingTextLink}
                target="_blank"
                title=""
                className="text-base font-medium text-gray-900 dark:text-gray-300 transition-all duration-300 rounded focus:outline-none font-pj hover:text-opacity-70 dark:hover:text-opacity-80 focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {pricingText}
              </motion.a>

              <motion.a
                href={integrationsTextLink}
                target="_blank"
                title=""
                className="text-base font-medium text-gray-900 dark:text-gray-300 transition-all duration-300 rounded focus:outline-none font-pj hover:text-opacity-70 dark:hover:text-opacity-80 focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {integrationsText}
              </motion.a>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex lg:items-center lg:space-x-5">
              <motion.a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 dark:text-gray-300 transition-all duration-300 rounded focus:outline-none font-pj hover:text-opacity-70 dark:hover:text-opacity-80 focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLoginClick}
              >
                {loginText}
              </motion.a>

              <motion.a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold leading-7 text-white transition-all duration-200 bg-gray-900 dark:bg-gray-800 border border-transparent rounded-xl hover:bg-gray-700 dark:hover:bg-gray-700 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                role="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStartedNavClick}
              >
                {getStartedText}
              </motion.a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 lg:hidden",
          isMobileMenuOpen ? "block" : "hidden",
        )}
      >
        <div className="px-2 pt-2 pb-3">
          <motion.a
            href={coreFeaturesLink}
            title=""
            target="_blank"
            className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {coreFeaturesText}
          </motion.a>
          <motion.a
            href={pricingTextLink}
            title=""
            target="_blank"
            className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {pricingText}
          </motion.a>
          <motion.a
            href={integrationsTextLink}
            title=""
            target="_blank"
            className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {integrationsText}
          </motion.a>
          <motion.a
            href="#"
            title=""
            className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onLoginClick}
          >
            {loginText}
          </motion.a>
          <motion.a
            href="#"
            title=""
            className="block px-4 py-2 text-base font-medium text-white bg-gray-900 dark:bg-gray-800 rounded-md hover:bg-gray-700 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-100 m-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onGetStartedNavClick}
          >
            {getStartedText}
          </motion.a>
        </div>
      </div>

      {/* Hero Content */}
      <section className="pt-12 sm:pt-24 flex flex-col justify-center items-center">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              className="text-lg text-gray-600 dark:text-gray-400 font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {tagline}
            </motion.h1>
            <motion.p
              className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white font-pj"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {mainTitle}
            </motion.p>

            <motion.p
              className="mt-6 text-base sm:text-lg text-gray-500 dark:text-gray-400 font-inter max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {description}
            </motion.p>

            {/* Call to action buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-900 dark:bg-gray-800 border-2 border-transparent rounded-xl font-pj hover:bg-gray-700 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                role="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStartedClick}
              >
                {getStartedText}
              </motion.a>

              <motion.a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-gray-900 dark:text-gray-200 transition-all duration-200 border-2 border-gray-400 dark:border-gray-600 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-100 hover:bg-gray-900 dark:hover:bg-gray-800 focus:bg-gray-900 dark:focus:bg-gray-800 hover:text-white dark:hover:text-white hover:border-gray-900 dark:hover:border-gray-700 focus:text-white dark:focus:text-white focus:border-gray-900 dark:focus:border-gray-700"
                role="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLearnMoreClick}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {learnMoreText2}
              </motion.a>
            </div>

            <motion.p
              className="mt-6 text-base text-gray-500 dark:text-gray-400 font-inter pb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {freeTrialText}
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};
