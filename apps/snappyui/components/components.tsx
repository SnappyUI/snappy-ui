"use client";

import React, { useState } from "react";

import ComponentCard from "@/components/ui/component-card";
import {
  CandyText,
  MatrixText,
  SunsetText,
} from "@/components/ui/snappy-colorful-text";
import QRCodeGenerator from "@/components/ui/snappy-qr";

import { IconCloudDemo } from "./cloud-demo";
import Scratch from "./scratch";
import TurminalDemo from "./turminal-demo";
import FloatingDots from "./ui/snappy-floating-dots";
import { ProfileCard, ProfileContactInfo, ProfileContent, ProfileDesignation, ProfileImage, ProfileName, ProfileTags } from "./ui/snappy-profile-card";

function Components() {
  const [buttonVariant, setButtonVariant] = useState("default");
  const [checkboxAnim, setCheckboxAnim] = useState("bounce");
  const [colorTextVariant, setColorTextVariant] = useState("MatrixText");
  const [dropdownVariant, setDropdownVariant] = useState("default");
  const [toggleVariant, setToggleVariant] = useState("simple");
  // const [isOn, setIsOn] = useState(false);
  const [skeletonVariant, setSkeletonVariant] = useState("default");

  const colorfulVariants: Record<string, React.ElementType> = {
    SunsetText,
    MatrixText,
    CandyText,
  };

  return (
    <section className="relative w-screen py-16 md:py-20 px-6 md:px-16 mx-auto">
      {/* Floating dots behind */}
      <FloatingDots />

      {/* Glow effect in top left */}
      <div className="absolute top-20 -left-90 w-96 h-96 bg-blue-400/20 dark:bg-blue-400/30 rounded-full blur-[92px] translate-x-1/2 z-10 pointer-events-none" />

      {/* Actual content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#1976D2] dark:text-[#42A5F5]">
          Production-ready components
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-16 max-w-xl mx-auto text-md md:text-lg">
          Beautiful and powerful, right out of the box.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Scratch */}
          <ComponentCard
            variants={[]}
            selected={buttonVariant}
            onVariantChange={setButtonVariant}
          // componentName="Scratch Card"
          >
            <Scratch />
          </ComponentCard>

          {/* Checkbox */}
          <ComponentCard
            variants={[]}
            selected={checkboxAnim}
            onVariantChange={setCheckboxAnim}
          // componentName="Turminal"
          >
            <TurminalDemo />
          </ComponentCard>

          {/* ColorText */}
          <ComponentCard
            variants={[]}
            selected={colorTextVariant}
            onVariantChange={setColorTextVariant}
          // componentName="ColorText"
          >
            <div className="text-4xl text-center font-medium">
              Let’s try
              {" "}
              {React.createElement(colorfulVariants[colorTextVariant], {
                text: "SnappyUi",
              })}
            </div>
          </ComponentCard>

          {/* IconCloud */}
          <ComponentCard
            variants={[]}
            selected={dropdownVariant}
            onVariantChange={setDropdownVariant}
          // componentName="Icon Cloud"
          >
            <IconCloudDemo />
          </ComponentCard>

          {/* Toggle */}
          <ComponentCard
            variants={[]}
            selected={toggleVariant}
            onVariantChange={setToggleVariant}
          // componentName="QR-Code-Generator"
          >
            <QRCodeGenerator value="https://snappyui.in/" />
          </ComponentCard>

          {/* Skeleton */}
          <ComponentCard
            variants={[]}
            selected={skeletonVariant}
            onVariantChange={setSkeletonVariant}
          // componentName="Skeleton"
          >
            <div className="flex items-center justify-center">
              <ProfileCard variant="default" hoverEffect={true}>
                <ProfileContent>
                  <ProfileImage imageUrl="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.jpg?b=1&s=612x612&w=0&k=20&c=_VfWQI2t_aONL0FEFJ1Eki3QQkRwgxkAve0_z53oeKY=" imageAlt="Team member" />
                  <ProfileName name="Alexa Chen" />
                  <ProfileDesignation designation="Backend Developer" />
                  <ProfileContactInfo email="robert@example.com" />
                  <ProfileTags tags={[
                    { text: "Node.js", color: "blue" },
                    { text: "MongoDB", color: "green" },
                  ]}
                  />
                </ProfileContent>
              </ProfileCard>
            </div>
          </ComponentCard>
        </div>
      </div>
    </section>
  );
}

export default Components;
