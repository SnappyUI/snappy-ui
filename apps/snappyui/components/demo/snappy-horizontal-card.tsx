"use client";
import React from "react";

import { HorizontalButton, HorizontalCard, HorizontalCardContent, HorizontalCardFooter, HorizontalCardImage, HorizontalDescription, HorizontalTitle } from "@/components/ui/snappy-card";

export default function SnappyHorizontalCard() {
  return (
    <HorizontalCard>
      <HorizontalCardImage imageUrl="https://images.pexels.com/photos/30327991/pexels-photo-30327991/free-photo-of-historic-fort-in-okzitanien-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" imageAlt="" />
      <HorizontalCardContent>
        <HorizontalTitle title="Jaipur" />
        <HorizontalDescription description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quia cumque. Dolorum amet provident dolore fuga consequatur laboriosam. Debitis, ipsum." />
        <HorizontalCardFooter>
          <HorizontalButton text="Read More" onClick={() => console.log("Clicked")} />
        </HorizontalCardFooter>
      </HorizontalCardContent>
    </HorizontalCard>
  );
}
