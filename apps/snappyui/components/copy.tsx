"use client";
import React from "react";

import { ClipboardCopy } from "@/components/ui/snappy-clipbord";

export default function Copy() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Short Text</h2>
      <ClipboardCopy value="Welcome to Snappy Ui 🚀" />

      <h2 className="text-xl font-semibold mb-2">Long Text</h2>
      <ClipboardCopy
        value="Build sleek, beautifully responsive, pixel-perfect UIs with Snappy Ui."
      />

      <h2 className="text-xl font-semibold mb-2">No Preview</h2>
      <ClipboardCopy
        value="This text will be shown in full without truncation."
        preview={false}
      />
    </div>
  );
}
