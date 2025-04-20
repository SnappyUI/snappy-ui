import type { ReactNode } from "react";

import React from "react";

import { cn } from "@/lib/utils";

type blogCardProps = {
  children: ReactNode;
  className?: string;
};

export function BlogCard({ children, className }: blogCardProps) {
  return (
    <div className={cn("max-w-sm bg-white rounded-xl  dark:bg-gray-800  hover:scale-105 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 no-underline  flex flex-col shadow-xl", className)}>
      {children}
    </div>
  );
}

export function BlogImage({ className, imageUrl, imageAlt }: { className?: string; imageUrl: string; imageAlt: string }) {
  return <img className={cn("rounded-t-lg mb-0 mt-0 pb-0", className)} src={imageUrl} alt={imageAlt} />;
}

export function BlogContent({ children, className }: blogCardProps) {
  return (<div className={cn("px-5 pb-5 bg-background pt-5 ", className)}>{children}</div>);
}

export function BlogTitle({ title, className }: { title: string; className?: string }) {
  return (
    <h5 className={cn("mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white", className)}>
      {title}
    </h5>
  );
}

export function BlogDescription({ description, className }: { description: string; className?: string }) {
  return (
    <div className={cn("mb-3 font-normal text-gray-700 dark:text-gray-400", className)}>
      {description}
    </div>
  );
}

export function BlogFooter({ children, className, position = "start" }: {
  children: ReactNode;
  className?: string;
  position?: "start" | "center" | "end";
}) {
  return (
    <div className={cn(
      "flex bg-background py-2 rounded-b-lg px-2",
      position === "start"
        ? "justify-start"
        : position === "center"
          ? "justify-center"
          : "justify-end",
      className,
    )}
    >
      {children}
    </div>
  );
}

export function BlogButton({ text, onClick, className }: { text: string; onClick?: (event: React.MouseEvent<HTMLElement>) => void; className?: string }) {
  return <button className={cn("border dark:border-white/20 py-2 px-4 rounded-lg hover:cursor-pointer hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white", className)} onClick={onClick}>{text}</button>;
}
