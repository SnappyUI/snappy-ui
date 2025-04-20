import React from "react";

import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/snappy-terminal";

export default function TurminalDemo() {
  return (

    <Terminal className="dark:bg-[#110f0f] bg-[#f8f8f8]">
      <TypingAnimation>&gt; pnpm dlx shadcn@latest add http://snappyui.in/api/registry/checkbox</TypingAnimation>

      <AnimatedSpan delay={5000} className="text-green-500">
        <span>✔ Checking registry.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={6000} className="text-blue-500">
        <span>✔ Created 1 file:</span>
        <span className="pl-2">- src\components\ui\snappy-checkbox.tsx</span>
      </AnimatedSpan>

      <TypingAnimation delay={7000} className="text-muted-foreground">
        Success! Project initialization completed.
      </TypingAnimation>

      <TypingAnimation delay={9000} className="text-muted-foreground">
        You may now add components.
      </TypingAnimation>
    </Terminal>

  );
}
