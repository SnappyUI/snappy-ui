"use client";
import React from "react";

import { PlainTestimonial } from "../ui/snappy-testimonial";

export default function PlainTestimonialDemo() {
  return (
    <div className="h-fit">
      <PlainTestimonial
        name="Alice Wonderland"
        title="CEO of Tech Innovators Inc."
        quote="The team was fantastic! They truly understood our vision and delivered beyond our expectations. Highly recommended!"
        avatar="https://images.pexels.com/photos/19797385/pexels-photo-19797385/free-photo-of-beautiful-model-in-oregon-wearing-a-forest-green-linen-dress-portrait-taken-by-portland-photographer-lance-reis-on-my-sonya7iii-on-location.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Alice Wonderland"
        bgColor="black"
        className=""
      />

    </div>
  );
}
