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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="SnappyUI - A modern UI Library for building fast and responsive web applications." />
        <meta name="keywords" content="SnappyUI, UI Library, responsive design, modern UI, web development" />
        <meta name="author" content="SnappyUI Team" />
        <meta property="og:title" content="SnappyUI - Modern UI Library" />
        <meta property="og:description" content="Build fast and responsive web applications with SnappyUI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://snappyui.in" />
        <meta property="og:image" content="https://snappyui.in/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SnappyUI - Modern UI Library" />
        <meta name="twitter:description" content="Build fast and responsive web applications with SnappyUI." />
        <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>Snappy UI - Modern UI Library</title>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PNW5GZRGVP"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PNW5GZRGVP');
          `}
        </Script>
      </head>
      <body className="bg-background font-sans relative">
        <RootProvider
          theme={{
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
