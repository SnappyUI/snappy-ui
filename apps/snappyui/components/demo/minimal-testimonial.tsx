"use client";
import React from "react";

import { MinimalTestimonial } from "../ui/snappy-testimonial";

export default function MinimalTestimonialDemo() {
  return (
    <div className="h-fit">
      <MinimalTestimonial
        name="Alice"
        title="CEO, fintechy.com"
        quote="As a lazy entrepreneur who got out of bed at 11, I managed to build my SaaS MVP with snappyui in 3 days. Never looked back since then."
        avatar="https://images.pexels.com/photos/31611945/pexels-photo-31611945/free-photo-of-young-woman-smiling-in-forest-setting.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Alice"
        className="mx-auto"
      />

    </div>
  );
}
