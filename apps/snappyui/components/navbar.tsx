"use client";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// import { NavLink } from "./nav-link";
import { NavbarMobile, NavbarMobileBtn } from "./nav-mobile";
import { useTheme } from "./theme-provider";

export const navMenu = [
  {
    name: "Docs",
    path: "/docs",
  },
  {
    name: "Components",
    path: "/components",
  },
  {
    name: "Themes",
    path: "/themes",
  },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="py-2 px-6 md:px-16 flex justify-between items-center bg-white dark:bg-black sticky top-0 z-30">
      {/* Left: Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/lovable-uploads/7c02df51-5594-499d-bd3d-c5f3cf1efaf7.png"
          width={28}
          height={28}
          alt="Snappy UI Logo"
        />
        <h1 className="text-xl font-medium">Snappy UI</h1>
      </Link>

      {/* Right: Nav & Theme Toggle */}
      <div className="flex items-center gap-8">
        <nav className="hidden md:flex gap-8">
          {navMenu.map(menu => (
            <Link
              key={menu.name}
              href={menu.path}
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Mobile Nav */}
        <NavbarMobileBtn />
      </div>

      <NavbarMobile />
    </header>
  );
}

export default Navbar;
