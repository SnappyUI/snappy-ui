"use client";

import {
  LogOut,
  MoreHorizontal,
  MoreVertical,
  Settings,
  User,
} from "lucide-react";
import React, { useState } from "react";

import ComponentCard from "@/components/ui/component-card";
import Button from "@/components/ui/snappy-button";
import Check from "@/components/ui/snappy-checkbox";
import {
  CandyText,
  MatrixText,
  SunsetText,
} from "@/components/ui/snappy-colorful-text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/snappy-dropdown";
import Skeleton from "@/components/ui/snappy-skeleton";

import Toggle from "./ui/snappy-toggle";

function Components() {
  const [buttonVariant, setButtonVariant] = useState("default");
  const [checkboxAnim, setCheckboxAnim] = useState("bounce");
  const [colorTextVariant, setColorTextVariant] = useState("MatrixText");
  const [dropdownVariant, setDropdownVariant] = useState("default");
  const [toggleVariant, setToggleVariant] = useState("simple");
  const [isOn, setIsOn] = useState(false);
  const [skeletonVariant, setSkeletonVariant] = useState("default");

  const colorfulVariants: Record<string, React.ElementType> = {
    SunsetText,
    MatrixText,
    CandyText,
  };

  return (
    <section className="py-16 md:py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4 text-[#1976D2] dark:text-[#42A5F5]">
        Production-ready components
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-center mb-16 max-w-xl mx-auto text-md md:text-lg">
        Beautiful and powerful, right out of the box.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Button */}
        <ComponentCard
          variants={["default", "primary", "success", "gradient"]}
          selected={buttonVariant}
          onVariantChange={setButtonVariant}
          componentName="Button"
        >
          <Button variant={buttonVariant as any}>Button</Button>
        </ComponentCard>

        {/* Checkbox */}
        <ComponentCard
          variants={["bounce", "fade", "pulse", "jello"]}
          selected={checkboxAnim}
          onVariantChange={setCheckboxAnim}
          componentName="Checkbox"
        >
          <Check label="Click me" variant={checkboxAnim as any} />
        </ComponentCard>

        {/* ColorText */}
        <ComponentCard
          variants={["MatrixText", "SunsetText", "CandyText"]}
          selected={colorTextVariant}
          onVariantChange={setColorTextVariant}
          componentName="ColorText"
        >
          <div className="text-xl text-center font-medium">
            Let’s try
            {" "}
            {React.createElement(colorfulVariants[colorTextVariant], {
              text: "SnappyUi",
            })}
          </div>
        </ComponentCard>

        {/* Dropdown */}
        <ComponentCard
          variants={["default", "outline", "ghost"]}
          selected={dropdownVariant}
          onVariantChange={setDropdownVariant}
          componentName="Dropdown"
        >
          {/* Render UI based on variant */}
          {dropdownVariant === "default" && (
            <DropdownMenu>
              <DropdownMenuTrigger variant="default">
                Default
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem icon={<User />}>Profile</DropdownMenuItem>
                <DropdownMenuItem icon={<Settings />}>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem icon={<LogOut />}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {dropdownVariant === "outline" && (
            <DropdownMenu>
              <DropdownMenuTrigger variant="outline">
                Outline
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {dropdownVariant === "ghost" && (
            <div className="flex justify-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger variant="ghost">
                  <MoreHorizontal />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger variant="ghost">
                  <MoreVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </ComponentCard>

        {/* Toggle */}
        <ComponentCard
          variants={["simple", "indicator", "dark"]}
          selected={toggleVariant}
          onVariantChange={setToggleVariant}
          componentName="Toggle"
        >
          <Toggle
            variant={toggleVariant as any}
            checked={isOn}
            onChange={() => setIsOn(!isOn)}
          />
        </ComponentCard>

        {/* Skeleton */}
        <ComponentCard
          variants={["default", "text", "rounded"]}
          selected={skeletonVariant}
          onVariantChange={setSkeletonVariant}
          componentName="Skeleton"
        >
          <Skeleton variant={skeletonVariant as any}></Skeleton>
        </ComponentCard>
      </div>
    </section>
  );
}

export default Components;
