import type { ReactNode } from "react";

import { HomeLayout } from "fumadocs-ui/layouts/home";

import { baseOptions } from "@/app/layout.config";

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout className="dark:bg-[#0a0b11] bg-white" {...baseOptions}>{children}</HomeLayout>;
}
