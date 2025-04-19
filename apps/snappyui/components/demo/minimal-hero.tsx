"use client";
import React from "react";

import { MinimalHero } from "../ui/snappy-hero";

export default function MinimalHeroDemo() {
  return (
    <div>
      <MinimalHero
        title="Welcome to Our Platform"
        description="Discover amazing features to boost your productivity."
        getStartedText="Get Started Now"
        learnMoreText="Learn More"
        imageUrl="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-in-headphones-showing-programming-process-on-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" // Example URL
        imageAlt="Platform Overview"
        className="mb-12" // Optional
        onGetStartedClick={() => {
          console.log("Get Started button clicked!");
        }}
        onLearnMoreClick={() => {
          console.log("Learn More Button Clicked");
        }}
      />
    </div>
  );
}
