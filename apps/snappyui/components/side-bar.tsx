"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSearchContext } from "fumadocs-ui/provider";
import { ChevronDownIcon, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { AsideLink } from "@/components/ui/aside-link";
import { cn } from "@/lib/utils";

import { contents } from "./sidebar-content";
import { Badge } from "./ui/badge";

export default function ArticleLayout() {
  const [currentOpen, setCurrentOpen] = useState<number>(0);

  const { setOpenSearch } = useSearchContext();
  const pathname = usePathname();

  function getDefaultValue() {
    const defaultValue = contents.findIndex(item =>
      item.list?.some(listItem => listItem.href === pathname),
    );
    return defaultValue === -1 ? 0 : defaultValue;
  }

  const [, setGroup] = useState("docs");

  useEffect(() => {
    const grp = pathname.includes("Components") ? "components" : "sections";
    setGroup(grp);
    setCurrentOpen(getDefaultValue());
  }, [pathname]);

  const cts = contents;

  return (
    <div className={cn("fixed top-0")}>
      <aside
        className={cn(
          "md:transition-all",
          "border-r border-lines md:flex hidden md:w-[268px] lg:w-[286px] overflow-y-auto absolute top-[58px] h-[92dvh] flex-col justify-between w-[var(--fd-sidebar-width)]",
        )}
      >
        <div>

          <button
            className="flex w-full items-center gap-2 px-5 py-2.5 border-b text-muted-foreground dark:bg-zinc-950 dark:border-t-zinc-900/30 dark:border-t"
            onClick={() => {
              setOpenSearch(true);
            }}
          >
            <Search className="size-4 mx-0.5" />
            <p className="text-sm">Search documentation...</p>
          </button>
          <MotionConfig
            transition={{ duration: 0.4, type: "spring", bounce: 0 }}
          >
            <div className="flex flex-col">
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
            </div>
          </MotionConfig>

        </div>
      </aside>
    </div>
  );
}

function NewBadge({ isSelected }: { isSelected?: boolean }) {
  return (
    <div className="flex items-center justify-end w-full">
      <Badge
        className={cn(
          " pointer-events-none !no-underline border-dashed !decoration-transparent",
          isSelected && "!border-solid",
        )}
        variant={isSelected ? "default" : "outline"}
      >
        New
      </Badge>
    </div>
  );
}
