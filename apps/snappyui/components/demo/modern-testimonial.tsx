"use client";
import React from "react";

import { ModernTestimonial } from "../ui/snappy-testimonial";

export default function ModernTestimonialDemo() {
  return (
    <div>
      <ModernTestimonial
        name="Piyush Garg"
        title="Software Engineer && Founder of Teachyst"
        quote="This product completely transformed our workflow and increased productivity by 45%. The team has been incredibly supportive throughout implementation."
        avatar="https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Favatar.png&w=640&q=75"
        alt="Piyush Garg"
        rating={5}
      />

    </div>
  );
}
