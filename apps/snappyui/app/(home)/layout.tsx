import type { ReactNode } from "react";

import { RootProvider } from "fumadocs-ui/provider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      theme={{
        enableSystem: true,
        defaultTheme: "dark",
      }}
    >

      <div className="flex flex-col items-center bg-transparent ">

        {children}
      </div>
    </RootProvider>
  );
}
