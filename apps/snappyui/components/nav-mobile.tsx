"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { createContext, Suspense, use, useState } from "react";

import { AsideLink } from "@/components/ui/aside-link";
import { cn } from "@/lib/utils";

import { NewBadge } from "./side-bar";
import { contents } from "./sidebar-content";

type NavbarMobileContextProps = {
  isOpen: boolean;
  toggleNavbar: () => void;
  isDocsOpen: boolean;
  toggleDocsNavbar: () => void;
};

const NavbarContext = createContext<NavbarMobileContextProps | undefined>(
  undefined,
);

export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };
  const toggleDocsNavbar = () => {
    setIsDocsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <NavbarContext
      value={{ isOpen, toggleNavbar, isDocsOpen, toggleDocsNavbar }}
    >
      {children}
    </NavbarContext>
  );
}

export function useNavbarMobile(): NavbarMobileContextProps {
  const context = use(NavbarContext);
  if (!context) {
    throw new Error(
      "useNavbarMobile must be used within a NavbarMobileProvider",
    );
  }
  return context;
}

export const NavbarMobileBtn: React.FC = () => {
  const { toggleNavbar } = useNavbarMobile();

  return (
    <div className="flex items-center">
      <button
        className="overflow-hidden px-2.5 block md:hidden"
        onClick={() => {
          toggleNavbar();
        }}
      >
        <Menu className="size-5" />
      </button>
    </div>
  );
};

export function NavbarMobile() {
  const { isOpen, toggleNavbar } = useNavbarMobile();
  const pathname = usePathname();
  const isDocs = pathname.startsWith("/docs");
  const [currentOpen, setCurrentOpen] = useState<number>(0);

  const cts = contents;
  return (
    <div
      className={cn(
        "fixed top-[50px] inset-x-0 transform-gpu z-[100] bg-background grid grid-rows-[0fr] duration-300 transition-all md:hidden",
        isOpen
        && "shadow-lg border-b border-[rgba(255,255,255,.1)] grid-rows-[1fr]",
      )}
    >
      <div
        className={cn(
          "px-9 min-h-0 overflow-y-auto max-h-[80vh] divide-y [mask-image:linear-gradient(to_top,transparent,white_40px)] transition-all duration-300",
          isOpen ? "py-5" : "invisible",
          isDocs && "px-4",
        )}
      >
        {cts.map((item, index) => (
          <div key={item.title}>
            <button
              className="border-b w-full hover:underline border-lines text-sm px-5 py-2.5 text-left flex items-center gap-2"
              onClick={() => {
                if (currentOpen === index) {
                  setCurrentOpen(-1);
                }
                else {
                  setCurrentOpen(index);
                }
              }}
            >
              {/* {item.Icon && <item.Icon className="size-5" />} */}

              <span className="grow">{item.title}</span>
              {item.isNew && <NewBadge />}
              <motion.div
                animate={{ rotate: currentOpen === index ? 180 : 0 }}
              >

                {item.list && (
                  <ChevronDownIcon
                    className={cn(
                      "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                    )}
                  />
                )}

              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {currentOpen === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="relative overflow-hidden"
                >
                  <motion.div className="text-sm">
                    {item.list && item.list.map(listItem => (
                      <div key={listItem.title}>
                        <Suspense fallback={<>Loading...</>}>
                          {listItem.group
                            ? (
                                <div className="flex flex-row items-center gap-2 mx-5 my-1 ">
                                  <p className="text-sm text-transparent bg-gradient-to-tr dark:from-gray-100 dark:to-stone-200 bg-clip-text from-gray-900 to-stone-900">
                                    {listItem.title}
                                  </p>
                                  <div className="flex-grow h-px bg-gradient-to-r from-stone-800/90 to-stone-800/60" />
                                </div>
                              )
                            : (

                                <AsideLink
                                  onClick={() => toggleNavbar()}
                                  href={listItem.href}
                                  startWith="/docs"
                                  title={listItem.title}
                                  className="break-words text-nowrap w-[--fd-sidebar-width] [&>div>div]:hover:!bg-fd-muted"
                                  activeClassName="[&>div>div]:!bg-fd-muted"
                                >
                                  <div className="min-w-4">

                                  </div>
                                  {listItem.title}
                                  {listItem.isNew && <NewBadge />}
                                </AsideLink>
                              )}
                        </Suspense>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        {/* <DocsNavBarContent /> */}
      </div>
    </div>
  );
}

export const navMenu: {
  name: string;
  path: string;
  child?: {
    name: string;
    path: string;
  }[];
}[] = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "docs",
    path: "/docs",
  },

];
