"use client";
import React from "react";

import { ModernHero } from "../ui/snappy-hero";

export default function ModernHeroDemo() {
  return (
    <div>
      <ModernHero
        welcomeText="Welcome to our site"
        title="Explore The League"
        description="We provide the best solutions for your needs."
        learnMoreText="Discover Now"
        imageUrl="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        imageAlt="Abstract Design"
        exploreText="Explore our features"
        className="mb-12"
        onDiscoverNowClick={() => {
          console.log("Discover button clicked!");
        }}
        onExploreFeatureClick={() => {
          console.log("Explore feature button clicked!");
        }}
      />
    </div>
  );
}
