import "./global.css";

import type { ReactNode } from "react";

import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{
          // enableSystem: true,
          // defaultTheme: "dark",
          // enabled: false,
        }}
        >
          {children}
        </RootProvider>

      </body>
    </html>
  );
}
