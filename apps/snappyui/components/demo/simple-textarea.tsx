"use client";
import React, { useState } from "react";

import { TextArea } from "../ui/snappy-textarea";

export default function TextAreaDemo() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <TextArea
        id="userMessage"
        label="Your message"
        placeholder="Enter text here..."
        rows={5}
        value={message}
        onChange={setMessage}
        className="mb-1"
      />
    </div>
  );
}
