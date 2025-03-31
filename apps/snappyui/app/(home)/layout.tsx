import type { ReactNode } from "react";

import { HomeLayout } from "fumadocs-ui/layouts/home";

import { baseOptions } from "@/app/layout.config";

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout className="bg-white dark:bg-[#09090B]" {...baseOptions}>{children}</HomeLayout>;
}
