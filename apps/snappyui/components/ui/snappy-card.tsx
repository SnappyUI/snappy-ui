import type { ReactNode } from "react";

import Link from "next/link";
import React from "react";

import { cn } from "@/lib/cn";

type CardVariant = "dark" | "default" | "primary" | "success" | "warning" | "delete";

type CardProps = {
  title?: string;
  description?: string;
  variant?: CardVariant;
  hoverEffect?: boolean;
  footer?: React.ReactNode;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({
  title,
  description,
  variant = "default",
  hoverEffect = true,
  footer,
  className,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    dark: "bg-gray-800/50 backdrop-blur-md text-gray-100 border-gray-700 hover:bg-gray-700/50 hover:shadow-lg shadow-gray-900/20",
    default: "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:shadow-lg border-gray-200 dark:border-gray-700",
    primary: "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50",
    success: "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/50",
    warning: "bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/50",
    delete: "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/50",
  };

  const titleStyles = {
    dark: "text-gray-100",
    default: "text-gray-900 dark:text-gray-100",
    primary: "text-blue-700 dark:text-blue-300",
    success: "text-green-700 dark:text-green-300",
    warning: "text-yellow-700 dark:text-yellow-300",
    delete: "text-red-700 dark:text-red-300",
  };

  const descriptionStyles = {
    dark: "text-gray-300",
    default: "text-gray-600 dark:text-gray-400",
    primary: "text-blue-600/80 dark:text-blue-300/80",
    success: "text-green-600/80 dark:text-green-300/80",
    warning: "text-yellow-600/80 dark:text-yellow-300/80",
    delete: "text-red-600/80 dark:text-red-300/80",
  };

  return (
    <div
      className={cn(
        "rounded-lg border shadow-sm transition-all duration-300 ease-in-out",
        hoverEffect ? "transform hover:-translate-y-1" : "",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      <div className="p-6">
        {title && (
          <h3
            className={cn(
              "text-2xl font-semibold leading-none tracking-tight",
              titleStyles[variant],
            )}
          >
            {title}
          </h3>
        )}
        {description && (
          <p className={cn("mt-2 text-sm", descriptionStyles[variant])}>
            {description}
          </p>
        )}
        <div className={cn(children ? "mt-4" : "")}>
          {children}
        </div>
      </div>
      {footer && (
        <div className={cn(
          "px-6 py-4 border-t",
          variant === "dark" ? "border-gray-700" : "border-gray-200 dark:border-gray-700",
        )}
        >
          {footer}
        </div>
      )}
    </div>
  );
}

type BlogCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
};

export function BlogCard({
  imageUrl,
  imageAlt,
  title,
  description,
  linkUrl,
  linkText,
}: BlogCardProps) {
  return (

    <div className="max-w-sm bg-white border border-gray-800 rounded-lg  dark:bg-gray-800 dark:border-white/50 hover:scale-105 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 no-underline  flex flex-col shadow-xl">

      <img className="rounded-t-lg mb-0 mt-0 pb-0" src={imageUrl} alt={imageAlt} />

      <div className="px-5 pb-5 bg-background pt-5 rounded-b-lg">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link href={linkUrl} legacyBehavior>
          <a
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline"
          >
            {linkText}

          </a>
        </Link>
      </div>
    </div>

  );
}

type HorizontalCardProps = {
  children: ReactNode;
  className?: string;
};

export function HorizontalCard({ children, className }: HorizontalCardProps) {
  return (
    <div className={cn("flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 no-underline  hover:scale-105 transition delay-150 duration-300 ease-in-out hover:-translate-y-1", className)}>
      {children}
    </div>
  );
}

export function HorizontalCardImage({ imageUrl, imageAlt, className }: { imageUrl: string; imageAlt: string; className?: string }) {
  return (
    <div>
      <img className={cn("object-cover w-full rounded-t-lg !h-48 md:w-2xl md:rounded-none md:rounded-s-lg !m-0", className)} src={imageUrl} alt={imageAlt} />
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
