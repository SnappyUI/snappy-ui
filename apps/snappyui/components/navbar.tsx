"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const navMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Components",
    path: "/docs",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  const handleThemeToggle = () => {
    setIsRotating(true);
    setTheme(isDark ? "light" : "dark");
    setTimeout(() => setIsRotating(false), 200);
  };

  return (
    <header
      className={`sticky py-4 lg:py-5 px-6 md:px-16 flex justify-between items-center w-full top-0 z-30 transition-all duration-300 ${scrolled ? "backdrop-blur-sm shadow-sm" : ""
      }`}
    >
      {/* Left: Logo that changes with theme */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={mounted && isDark ? "/logo.png" : "/logo-light.png"}
          width={146}
          height={146}
          alt="Snappy UI Logo"
        />
      </Link>

      {/* Right: Nav & Theme Toggle */}

      <nav className="flex items-center gap-4 md:gap-8">
        {navMenu.map(menu => (
          <Link
            key={menu.name}
            href={menu.path}
            className="hover:text-gray-600 dark:hover:text-gray-300 text-sm md:text-lg lg:text-xl transition-colors relative group"
          >
            {menu.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}

        {/* Theme Toggle Icon */}
        {mounted && (
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={handleThemeToggle}
            className="cursor-pointer"
          >
            <img
              src={isDark ? "/sunIcon.svg" : "/moonIcon.svg"}
              alt="Toggle Theme"
              className={`size-6 transition-transform duration-500 ${isRotating ? "rotate-360" : ""}`}
            />
          </button>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
