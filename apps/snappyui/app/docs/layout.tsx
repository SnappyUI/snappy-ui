"use client";
import type { ReactNode } from "react";

import { DocsLayout } from "fumadocs-ui/layouts/docs";

import { docsOptions } from "@/app/layout.config";
import ArticleLayout from "@/components/side-bar";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout

      {...docsOptions}

      // the position of navbar
      // nav={{ ...baseOptions.nav, mode: "top" }}
      // themeSwitch={{ enabled: false, mode: "light-dark-system" }}
      // the position of Sidebar Tabs
      // tabMode="sidebar"
      sidebar={{
        component: (
          <div
            className={cn(
              "[--fd-tocnav-height:36px] md:mr-[268px] lg:mr-[286px] xl:[--fd-toc-width:286px] xl:[--fd-tocnav-height:0px] ",
            )}
          >
            <ArticleLayout />

          </div>
        ),
      }}

    >
      {children}
    </DocsLayout>
  );
}
