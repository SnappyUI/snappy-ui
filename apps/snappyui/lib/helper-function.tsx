"use client";
import React, { useState } from "react";

import {
  Menu,
  MenuItem,
  SubmenuItem,
} from "@/components/ui/snappy-nav";

export function MyNavbar() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <Menu setActive={setActive} className="text-white">
      <MenuItem setActive={setActive} active={active} item="Home" href="/abc">
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Service">
        <div className="flex flex-col space-y-4 text-sm">
          <SubmenuItem href="/web-dev">Web Development</SubmenuItem>
          <SubmenuItem href="/web-dev">Mobile Development</SubmenuItem>
        </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="About US">
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Contact US">
      </MenuItem>
    </Menu>
  );
}
