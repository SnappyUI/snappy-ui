import type { ReactNode } from "react";

import React from "react";

import { cn } from "@/lib/cn";

type HorizontalCardProps = {
  children: ReactNode;
  className?: string;
};

export function HorizontalCard({ children, className }: HorizontalCardProps) {
  return (
    <div className={cn("flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl  dark:border-black/20 dark:bg-black no-underline  hover:scale-105 transition delay-150 duration-300 ease-in-out hover:-translate-y-1", className)}>
      {children}
    </div>
  );
}

export function HorizontalCardImage({ imageUrl, imageAlt, className }: { imageUrl: string; imageAlt: string; className?: string }) {
  return (
    <div>
      <img className={cn("object-cover w-full rounded-t-lg !h-52 md:w-2xl md:rounded-none md:rounded-s-lg !m-0", className)} src={imageUrl} alt={imageAlt} />
      {" "}

    </div>
  );
}

export function HorizontalCardContent({ children, className }: HorizontalCardProps) {
  return (
    <div className={cn("flex flex-col gap-0 px-4 items-start leading-normal", className)}>
      {children}
    </div>
  );
}

export function HorizontalCardFooter({ children, className }: HorizontalCardProps) {
  return (
    <div className={cn("flex items-start justify-end w-full pb-2 gap-2 flex-wrap", className)}>
      {children}
    </div>
  );
}

export function HorizontalTitle({ title, className }: { title: string; className?: string }) {
  return <h5 className={cn("text-2xl pt-2 font-bold tracking-tight text-gray-900 dark:text-white", className)}>{title}</h5>;
}

export function HorizontalDescription({ description, className }: { description: string; className?: string }) {
  return <div className={cn("mb-3 font-normal text-gray-700 dark:text-gray-400", className)}>{description}</div>;
}

export function HorizontalButton({ text, onClick, className }: { text: string; onClick?: (event: React.MouseEvent<HTMLElement>) => void; className?: string }) {
  return <button className={cn("border dark:border-white/20 py-2 px-4 rounded-lg hover:cursor-pointer hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white", className)} onClick={onClick}>{text}</button>;
}
