import React from "react";

import SnappyCard from "@/components/snappy-card";

export default function page() {
  return (
    <div className="flex items-center justify-center mb-6">
      <SnappyCard
        title="Image Card"
        variant="primary"
      >
        <img src="https://picsum.photos/300/200" alt="Random Image" className="rounded-lg" />
        <p>Random image from Lorem Picsum</p>
      </SnappyCard>

    </div>
  );
}
