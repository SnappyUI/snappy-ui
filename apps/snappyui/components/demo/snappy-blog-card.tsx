"use client";
import React from "react";

import { BlogCard } from "../ui/snappy-card";

export default function SnappyBlogCard() {
  return (
    <div>
      <BlogCard
        imageUrl="https://images.pexels.com/photos/30012258/pexels-photo-30012258/free-photo-of-vivid-sunset-at-quy-nh-n-beach-with-boat-and-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageAlt="Sunset"
        title="Beatiful Sunset"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam pariatur numquam nesciunt perspiciatis "
        linkUrl="https://google.com"
        linkText="Read More"
      />
    </div>
  );
}
