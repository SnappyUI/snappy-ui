import type { ReactNode } from "react";

import { DocsLayout } from "fumadocs-ui/layouts/notebook";

import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions}
      // the position of navbar

      themeSwitch={{ enabled: false }}
      // the position of Sidebar Tabs
      tabMode="sidebar"
      tree={source.pageTree}
    >
      {children}
    </DocsLayout>
  );
}
