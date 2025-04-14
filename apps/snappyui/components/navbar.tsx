"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// import { NavLink } from "./nav-link";
import { NavbarMobile, NavbarMobileBtn } from "./nav-mobile";
// import { useTheme } from "./theme-provider";

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
  // const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`py-2 px-6 md:px-16 flex justify-between items-center sticky top-0 z-30 transition-all duration-300 ${scrolled
        ? "bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-sm"
        : "bg-transparent dark:bg-transparent"
      }`}
    >
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
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors relative group"
            >
              {menu.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* <button
          type="button"
          // onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button> */}

        {/* Mobile Nav */}
        <NavbarMobileBtn />
      </div>

      <NavbarMobile />
    </header>
  );
}

export default Navbar;
