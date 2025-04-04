import type { ReactNode } from "react";

import { DocsLayout } from "fumadocs-ui/layouts/notebook";

import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout

      // the position of navbar
      nav={{ ...baseOptions.nav, mode: "top" }}
      themeSwitch={{ enabled: false, mode: "light-dark-system" }}
      // the position of Sidebar Tabs
      tabMode="sidebar"
      tree={source.pageTree}

    >
      {children}
    </DocsLayout>
  );
}
