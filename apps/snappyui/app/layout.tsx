import "./global.css";

import type { ReactNode } from "react";
// import Image from "next/image";

import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";

import { NavbarProvider } from "@/components/nav-mobile";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="bg-background font-sans relative ">
        <RootProvider theme={{
          enableSystem: true,
          defaultTheme: "dark",
        }}
        >
          <NavbarProvider>

            <Navbar />
            {children}
          </NavbarProvider>
        </RootProvider>

      </body>
    </html>
  );
}
