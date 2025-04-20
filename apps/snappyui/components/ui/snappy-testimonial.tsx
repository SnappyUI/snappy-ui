"use client";

import { Quote } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

type TestimonialProps = {
  name: string;
  title: string;
  quote: string;
  avatar: string;
  alt: string;
  className?: string;
};
export const MinimalTestimonial: React.FC<TestimonialProps> = ({
  name,
  title,
  quote,
  avatar,
  alt,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 focus:scale-105 max-w-80 border border-black/20 dark:border-white/20 cursor-pointer h-fit p-4",
        className,
      )}
    >
      <img
        src={avatar}
        alt={alt}
        className="object-cover w-32 h-32 rounded-full"
      />

      <p className="text-gray-700 dark:text-gray-300 mb-2 overflow-hidden">
        {quote}
      </p>
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-500 cursor-pointer">
          {name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer">
          {title}
        </span>
      </div>
    </div>
  );
};

type TestimonialWithRatingProps = {
  name: string;
  title: string;
  quote: string;
  avatar: string;
  alt: string;
  bgColor: string;
  className?: string;
};

export const PlainTestimonial: React.FC<TestimonialWithRatingProps> = ({
  name,
  title,
  quote,
  avatar,
  alt,
  bgColor,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col max-w-96 transition-transform duration-200 hover:scale-105 focus:scale-105 shadow-md hover:shadow-lg dark:shadow-none dark:hover:shadow-lg border border-gray-200 dark:border-gray-700",
        className,
      )}
    >
      <div className="p-6 text-center">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          &quot;
          {quote}
          &quot;
        </p>
      </div>
      <div className={` bg-${bgColor} p-4 flex justify-center items-center gap-4`}>
        <img src={avatar} alt={alt} className="object-cover relative w-20 h-20 rounded-full overflow-hidden cursor-pointer hover:scale-110 transition-all duration-200" />

        <div>
          <span className="block font-semibold text-white dark:text-gray-100">{name}</span>
          <span className="block text-sm text-orange-200 dark:text-orange-300">{title}</span>
        </div>
      </div>
    </div>
  );
};

type ModernTestimonialProps = {
  name: string;
  title: string;
  quote: string;
  avatar: string;
  alt: string;
  rating?: number; // Optional rating out of 5
  className?: string;
};

export const ModernTestimonial: React.FC<ModernTestimonialProps> = ({
  name,
  title,
  quote,
  avatar,
  alt,
  rating = 5,
  className,
}) => {
  // Generate stars based on rating
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <span key={i} className={`text-lg ${i < rating ? "text-yellow-400 dark:text-yellow-300" : "text-gray-300 dark:text-gray-600"}`}>
      ★
    </span>
  ));

  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
      "bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl",
      "border border-gray-100 dark:border-gray-700 max-w-96 cursor-pointer hover:scale-105 transition-all duration-200",
      className,
    )}
    >
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-70"></div>
      <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full opacity-70"></div>

      <div className="relative z-10">
        {/* Quote icon */}
        <div className="mb-4 text-blue-500 dark:text-blue-400">
          <Quote size={28} className="opacity-80" />
        </div>

        {/* Quote text */}
        <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
          &quot;
          {quote}
          &quot;
        </p>

        {/* Bottom section with avatar and info */}
        <div className="flex items-center gap-4">
          {/* Avatar with border */}
          <img
            src={avatar}
            alt={alt}
            className="h-14 w-14 rounded-full overflow-hidden border-2 border-blue-300 dark:border-blue-600 shadow-sm object-cover"
          />

          <div className="flex-1">
            {/* Rating */}
            <div className="flex mb-1.5">
              {stars}
            </div>

            {/* Name and title */}
            <h4 className="font-bold text-gray-900 dark:text-white">
              {name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
