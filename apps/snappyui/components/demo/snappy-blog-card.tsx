"use client";
import React from "react";

import { BlogButton, BlogCard, BlogContent, BlogDescription, BlogFooter, BlogImage, BlogTitle } from "../ui/snappy-blog-card";

export default function SnappyBlogCardDemo() {
  return (
    <div>
      <BlogCard>
        <BlogImage imageUrl="https://images.pexels.com/photos/31416365/pexels-photo-31416365/free-photo-of-stunning-tokyo-cityscape-at-twilight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" imageAlt="sunset" />
        <BlogContent>
          <BlogTitle title="Working high above the ground"></BlogTitle>
          <BlogDescription description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aperiam aliquam commodi maiores quas, qui consequuntur deserunt consequatur vel illum!"></BlogDescription>
        </BlogContent>
        <BlogFooter position="end">
          <BlogButton text="Read More" onClick={() => console.log("clicked")} />
        </BlogFooter>
      </BlogCard>
    </div>
  );
}
