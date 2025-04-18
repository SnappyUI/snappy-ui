import "./global.css";

import type { ReactNode } from "react";

import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import Script from "next/script";

import { NavbarProvider } from "@/components/nav-mobile";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PNW5GZRGVP"></Script>
        <Script>
          {
            ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PNW5GZRGVP');`
          }

        </Script>
      </head>
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
